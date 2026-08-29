#!/usr/bin/env node
/**
 * فاحص ميزانية الأصول — check-assets.mjs (كيف الضيافة)
 * منقول ومكيّف من منظومة أصول الضيافة (osoul-aldiafa-v2).
 *
 * الفحوصات:
 *   CH1  أي صورة محتوى في public/ > 250 KB (خطأ) — كيف موقع بصري كثيف الصور،
 *        فحدّها أعلى من osoul (100KB) لكن صارم. > 150 KB تحذير.
 *   CH2  public/ كاملاً > 6 MB (تحذير الآن، خطأ عند ASSETS_STRICT=1)
 *   CH3  ملفان بنفس بصمة md5 (تكرار أعمى)
 *   CH5  <img> خام في src/ (استخدم next/image عبر الأغلفة المعتمدة)
 *   CH7  alt مكرّر حرفياً (heuristic، تحذير)
 *   CH8  صورة بتنسيق غير WebP/SVG/ICO في public/ (خطأ)
 *
 * استثناء موثّق: public/og-image.jpg و public/og/** أصول اجتماعية — تُطلب من
 * مُكشِّطات المنصات عند مشاركة رابط ولا تدخل وزن أي صفحة، وصيغة JPEG فيها
 * مقصودة لتوافق معاينات واتساب.
 *
 * وضع خط الأساس: يفشل فقط على المخالفات الجديدة (baseline.mjs).
 */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { createHash } from "node:crypto";
import { join, extname, relative } from "node:path";
import { gate } from "./baseline.mjs";

const ROOT = process.cwd();
const PUBLIC = join(ROOT, "public");
const SRC = join(ROOT, "src");

const KB = 1024;
const MAX_IMAGE_BYTES = 250 * KB;
const WARN_IMAGE_BYTES = 150 * KB;
const MAX_PUBLIC_BYTES = 6 * KB * KB; // 6 MB
const IMAGE_EXTS = new Set([".webp", ".svg", ".png", ".jpg", ".jpeg", ".gif", ".avif", ".ico"]);
const ALLOWED_EXTS = new Set([".webp", ".svg", ".ico"]);
const STRICT = process.env.ASSETS_STRICT === "1";

const errors = [];
const warn = [];

function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

// أصول اجتماعية (OG) — خارج ميزانية الصفحات، JPEG فيها مقصود.
const isSocialAsset = (f) => {
  const rel = relative(ROOT, f).replace(/\\/g, "/");
  return rel.startsWith("public/og/") || /^public\/og-[^/]+\.(jpe?g|webp|png)$/.test(rel);
};

const publicFiles = walk(PUBLIC);
const imageFiles = publicFiles.filter((f) => IMAGE_EXTS.has(extname(f).toLowerCase()));

let totalBytes = 0;
const hashes = new Map();

for (const file of imageFiles) {
  const rel = relative(ROOT, file);
  const size = statSync(file).size;
  const ext = extname(file).toLowerCase();
  const social = isSocialAsset(file);
  if (!social) totalBytes += size;

  // CH1 — حجم الصورة (مفتاح مستقر بلا الحجم المتغيّر ليصمد في خط الأساس)
  if (!social && ext !== ".ico") {
    if (size > MAX_IMAGE_BYTES) {
      errors.push(`CH1 · صورة > 250 KB: ${rel}`);
      warn.push(`CH1 · ${rel} = ${(size / KB).toFixed(0)} KB`);
    } else if (size > WARN_IMAGE_BYTES) {
      warn.push(`CH1 · صورة > 150 KB (راقبها): ${rel} = ${(size / KB).toFixed(0)} KB`);
    }
  }

  // CH8 — تنسيق غير مسموح
  if (!ALLOWED_EXTS.has(ext) && !social) {
    errors.push(`CH8 · تنسيق غير WebP/SVG/ICO: ${rel}`);
  }

  // CH3 — بصمة md5 مكررة. الأصول الاجتماعية مستثناة: og-image.jpg نسخة
  // متعمّدة من og-cover-v2.jpg لبقاء روابط المشاركة القديمة المخزّنة حيّة
  // (موثّق في reports/fixes/FIX-04-og-image.md).
  if (!social) {
    const md5 = createHash("md5").update(readFileSync(file)).digest("hex");
    if (hashes.has(md5)) {
      errors.push(`CH3 · ملفان بنفس البصمة: ${rel} == ${hashes.get(md5)}`);
    } else {
      hashes.set(md5, rel);
    }
  }
}

// CH2 — الحجم الكلي
const totalMB = totalBytes / (KB * KB);
if (totalBytes > MAX_PUBLIC_BYTES) {
  const msg = `CH2 · حجم public/ = ${totalMB.toFixed(2)} MB (الحد < 6 MB)`;
  if (STRICT) errors.push(msg);
  else warn.push(`${msg} — صارم عند ASSETS_STRICT=1`);
}

// ---- فحص src/ ----
const srcFiles = walk(SRC).filter((f) => /\.(tsx?|jsx?)$/.test(f));
const altValues = new Map();

for (const file of srcFiles) {
  const rel = relative(ROOT, file);
  const code = readFileSync(file, "utf8");

  // CH5 — <img> خام. تُستثنى أغلفة الصور المعتمدة (فيها eslint-disable موثّق)
  // وGoogleAnalytics: بكسل Meta الرسمي داخل <noscript> — ليس صورة محتوى
  // وnext/image لا يعمل بلا JavaScript أصلاً.
  const IMG_WRAPPERS = ["ImageWithFallback", "DallahLogo", "GoogleAnalytics"];
  const isWrapper = IMG_WRAPPERS.some((w) => rel.endsWith(`${w}.tsx`));
  const rawImg = code.match(/<img\b[^>]*>/g);
  if (rawImg && !isWrapper) {
    errors.push(`CH5 · <img> خام (استخدم next/image): ${rel} (${rawImg.length}×)`);
  }

  // CH7 — قيم alt مكررة حرفياً (تحذير)
  for (const m of code.matchAll(/alt\s*=\s*"([^"]*)"/g)) {
    const val = m[1].trim();
    if (val.length > 0) {
      const key = val.replace(/\s+/g, " ");
      if (altValues.has(key)) {
        warn.push(`CH7 · alt مكرّر حرفياً: "${val}" في ${rel} و ${altValues.get(key)}`);
      } else {
        altValues.set(key, rel);
      }
    }
  }
}

// ---- التقرير ----
gate({
  name: "assets",
  errors,
  warn,
  header:
    `── فاحص ميزانية الأصول (كيف الضيافة) ──\n` +
    `صور الصفحات: ${imageFiles.filter((f) => !isSocialAsset(f)).length} · ` +
    `الحجم المحسوب: ${totalMB.toFixed(2)} MB\n` +
    `أصول اجتماعية (OG، خارج الميزانية): ${imageFiles.filter(isSocialAsset).length}`,
});
