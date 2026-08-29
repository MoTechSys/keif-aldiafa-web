#!/usr/bin/env node
/**
 * فاحص السيو والمحتوى — seo-guard.mjs (كيف الضيافة)
 * منقول ومكيّف من منظومة أصول الضيافة (osoul-aldiafa-v2).
 * يعمل على مخرَج `next build` الستاتيكي في .next/server/app/*.html
 *
 * الفحوصات:
 * S1  طول <title> > 60 (خطأ) أو < 30 (تحذير)
 * S2  تكرار العلامة «كيف الضيافة» مرتين في نفس العنوان
 * S3  عنوانان متطابقان في صفحتين
 * S4  meta description غائب / > 158 (خطأ) / < 120 (تحذير) / مكرر حرفياً
 * S5  H1 ≠ 1 · فارغ · كلمات ملتصقة حول <br>
 * S6  قفزة عناوين h2 → h4 (تحذير)
 * S7  canonical غائب/دومين خاطئ
 * S8  JSON-LD لا يمرّ JSON.parse · streetAddress ممنوع (قرار موثّق: address
 *     بمستوى المدينة فقط — عنوان شارع خاطئ يضر الخرائط) · areaServed إلزامي
 *     للكيان الرئيسي.
 *     ملاحظة فرق عن osoul: كيف تستخدم CateringService (فرع LocalBusiness)
 *     بقرار موثّق في schema.ts — لذلك لا نمنع LocalBusiness هنا.
 * S9  كلمات محظورة: «فروعنا/مقرنا/فرعنا» (ادعاء مواقع فيزيائية متعددة)
 * S10 أرقام إثبات غير موثّقة: «+N مناسبة» أو «N% رضا» بلا data/proof.json (E-E-A-T)
 * S11 روابط داخلية < 3 · نص رابط عام («اضغط هنا»)
 * S12 التشابه بين الصفحات > العتبة (يستدعي similarity-check)
 * S14 روابط sameAs تُرجع 200 (شبكي — يُفعَّل بـ CHECK_LINKS=1)
 *
 * وضع خط الأساس: يفشل فقط على المخالفات الجديدة (انظر baseline.mjs).
 * تحديث خط الأساس عمداً: UPDATE_BASELINE=1 node scripts/seo-guard.mjs
 */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, relative } from "node:path";
import { computePairs, SIM_MAX } from "./similarity-check.mjs";
import { gate } from "./baseline.mjs";

const ROOT = process.cwd();
const APP_DIR = join(ROOT, ".next", "server", "app");
const BRAND = "كيف الضيافة";
const SITE = "https://keifaldiafa.com";
const BANNED = ["فروعنا", "مقرنا", "فرعنا"];
const GENERIC_LINK_TEXT = ["اضغط هنا", "المزيد", "انقر هنا", "هنا", "اقرأ المزيد"];

if (!existsSync(APP_DIR)) {
  console.error("❌ لم يُعثر على .next/server/app — شغّل `npm run build` أولاً.");
  process.exit(1);
}

let proof = { claims: [] };
const proofPath = join(ROOT, "data", "proof.json");
if (existsSync(proofPath)) {
  try { proof = JSON.parse(readFileSync(proofPath, "utf8")); } catch { /* تجاهل */ }
}

function walk(dir, out = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, e.name);
    if (e.isDirectory()) walk(full, out);
    else if (e.name.endsWith(".html")) out.push(full);
  }
  return out;
}

function pick(re, html) { const m = html.match(re); return m ? m[1].trim() : null; }
function textOf(s) { return s ? s.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim() : ""; }

const files = walk(APP_DIR);
const errors = [];
const warn = [];
const titles = new Map();
const descs = new Map();

for (const file of files) {
  const rel = relative(ROOT, file);
  const html = readFileSync(file, "utf8");
  const isDoc = /<html[\s>]/i.test(html);
  if (!isDoc) continue; // تجاهل أجزاء RSC غير الكاملة

  const bare = rel.replace(/^\.next\/server\/app\//, "").replace(/\.html$/, "");
  // تجاهل صفحات النظام
  if (/^(_not-found|_global-error|404|500|robots|sitemap|opengraph-image)/.test(bare)) continue;

  // تجاهل صفحات noindex — نصٌّ لا يُعرَض في النتائج لا يخضع لقواعد العرض.
  const robotsMeta =
    pick(/<meta[^>]+name=["']robots["'][^>]+content=["']([^"']*)["']/i, html) ||
    pick(/<meta[^>]+content=["']([^"']*)["'][^>]+name=["']robots["']/i, html);
  if (robotsMeta && /\bnoindex\b/i.test(robotsMeta)) continue;

  // ---- S1/S2/S3 title ----
  const rawTitle = pick(/<title[^>]*>([\s\S]*?)<\/title>/i, html);
  const title = textOf(rawTitle);
  if (!title) {
    errors.push(`S1 · ${bare}: <title> غائب`);
  } else {
    if (title.length > 60) { errors.push(`S1 · ${bare}: title > 60`); warn.push(`S1 · ${bare}: title ${title.length} حرفاً: «${title}»`); }
    if (title.length < 30) warn.push(`S1 · ${bare}: title ${title.length} حرفاً (< 30): «${title}»`);
    const brandCount = title.split(BRAND).length - 1;
    if (brandCount >= 2) errors.push(`S2 · ${bare}: تكرار العلامة في العنوان`);
    if (titles.has(title)) errors.push(`S3 · ${bare}: title مطابق لـ ${titles.get(title)}`);
    else titles.set(title, bare);
  }

  // ---- S4 description ----
  const desc = pick(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i, html)
            || pick(/<meta[^>]+content=["']([^"']*)["'][^>]+name=["']description["']/i, html);
  if (!desc) {
    errors.push(`S4 · ${bare}: meta description غائب`);
  } else {
    if (desc.length < 120) warn.push(`S4 · ${bare}: description ${desc.length} حرفاً (< 120)`);
    if (desc.length > 158) { errors.push(`S4 · ${bare}: description > 158`); warn.push(`S4 · ${bare}: description ${desc.length} حرفاً`); }
    if (descs.has(desc)) errors.push(`S4 · ${bare}: description مطابق حرفياً لـ ${descs.get(desc)}`);
    else descs.set(desc, bare);
  }

  // ---- S5 H1 ----
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)];
  if (h1s.length !== 1) {
    errors.push(`S5 · ${bare}: عدد H1 ≠ 1`);
    warn.push(`S5 · ${bare}: عدد H1 = ${h1s.length}`);
  } else {
    const raw = h1s[0][1];
    if (!textOf(raw)) errors.push(`S5 · ${bare}: H1 فارغ`);
    if (/[^\s>]<br\s*\/?>[^\s<]/i.test(raw)) errors.push(`S5 · ${bare}: كلمات ملتصقة حول <br> في H1`);
  }

  // ---- S6 تسلسل العناوين ----
  const heads = [...html.matchAll(/<h([1-6])[^>]*>/gi)].map((m) => Number(m[1]));
  for (let i = 1; i < heads.length; i++) {
    if (heads[i] - heads[i - 1] > 1) { warn.push(`S6 · ${bare}: قفزة عناوين h${heads[i-1]}→h${heads[i]}`); break; }
  }

  // ---- S7 canonical ----
  const canon = pick(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i, html)
             || pick(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i, html);
  if (!canon) warn.push(`S7 · ${bare}: canonical غائب`);
  else if (!canon.startsWith(SITE)) errors.push(`S7 · ${bare}: canonical دومين/بروتوكول خاطئ: ${canon}`);

  // ---- S8 JSON-LD ----
  for (const m of html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    const jsonText = m[1].replace(/\\u003c/g, "<").replace(/\\u003e/g, ">").replace(/\\u0026/g, "&");
    try {
      const parsed = JSON.parse(jsonText);
      const flat = JSON.stringify(parsed);
      // قرار موثّق (schema.ts): address بمستوى المدينة فقط — streetAddress
      // يعني ادعاء عنوان شارع قد يُعرض خاطئاً في الخرائط.
      if (/"streetAddress"\s*:/.test(flat))
        errors.push(`S8 · ${bare}: JSON-LD يحتوي streetAddress (القرار الموثّق: address بمستوى المدينة فقط)`);
      // الكيان التجاري الرئيسي يجب أن يعلن مناطق خدمته.
      if (flat.includes('"CateringService"') && !/"areaServed"\s*:/.test(flat))
        errors.push(`S8 · ${bare}: CateringService بلا areaServed`);
    } catch {
      errors.push(`S8 · ${bare}: JSON-LD لا يمرّ JSON.parse`);
    }
  }

  // ---- النص المرئي للفحوص النصية ----
  const visible = html.replace(/<script[\s\S]*?<\/script>/gi, " ")
                      .replace(/<style[\s\S]*?<\/style>/gi, " ")
                      .replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");

  // S9 كلمات محظورة
  for (const w of BANNED) {
    if (visible.includes(w)) { errors.push(`S9 · ${bare}: كلمة محظورة «${w}» (ادعاء مواقع فيزيائية)`); break; }
  }

  // S10 أرقام إثبات غير موثّقة (يشمل الأرقام الهندية-العربية ٠-٩ و٪)
  const D = "[\\d\u0660-\u0669]";
  const claimMatches = [
    ...visible.matchAll(new RegExp(`\\+?\\s*${D}{2,4}\\s*\\+?\\s*(?:مناسبة|حفل|عميل|فعالية)`, "g")),
    ...visible.matchAll(new RegExp(`${D}{1,3}\\s*[%\u066A]\\s*(?:رضا|رضى)`, "g")),
    ...visible.matchAll(new RegExp(`${D}{1,2}\\s*(?:سنة|سنوات|عاماً|عام)\\s*(?:من\\s*)?(?:الخبرة|خبرة)`, "g")),
  ];
  const arabicToLatin = (t) => t.replace(/[\u0660-\u0669]/g, (d) => String(d.charCodeAt(0) - 0x0660));
  for (const cm of claimMatches) {
    const claim = arabicToLatin(cm[0].replace(/\s+/g, " ").trim());
    const claimDigits = (claim.match(/\d+/g) || []).join("");
    // «موثّق» = مؤكَّد من المالك (verified_by_owner:true) لا مجرد مُدرَج.
    const documented = (proof.claims || []).some((c) => {
      const obj = typeof c === "object" && c !== null;
      const v = String(obj ? c.value : c);
      const ok = !obj || c.verified_by_owner === true;
      return ok && (claimDigits === v || claim.includes(v) || v.includes(claim));
    });
    if (!documented) errors.push(`S10 · ${bare}: رقم غير موثّق «${claim}» (أضِفه إلى data/proof.json بتأكيد المالك)`);
  }

  // S11 روابط داخلية
  const internalLinks = [...html.matchAll(/<a[^>]+href=["'](\/[^"'#][^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi)];
  const contentLinks = internalLinks.filter((m) => !/nav|footer|menu/i.test(m[0]));
  if (contentLinks.length < 3) warn.push(`S11 · ${bare}: روابط داخلية محتوائية = ${contentLinks.length} (< 3)`);
  for (const m of internalLinks) {
    const t = textOf(m[2]);
    if (GENERIC_LINK_TEXT.includes(t)) { warn.push(`S11 · ${bare}: نص رابط عام «${t}»`); break; }
  }
}

// ---- S14 روابط sameAs تُرجع 200 (شبكي، اختياري بـ CHECK_LINKS=1) ----
if (process.env.CHECK_LINKS === "1") {
  const sameAs = new Set();
  for (const file of files) {
    const html = readFileSync(file, "utf8");
    for (const m of html.matchAll(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)) {
      try {
        const j = JSON.parse(m[1].replace(/\\u003c/g, "<").replace(/\\u003e/g, ">").replace(/\\u0026/g, "&"));
        for (const node of Array.isArray(j) ? j : [j]) {
          for (const u of [].concat(node.sameAs || [])) if (/^https?:/.test(u)) sameAs.add(u);
        }
      } catch { /* S8 يتولّى أخطاء التحليل */ }
    }
  }
  for (const url of sameAs) {
    try {
      const res = await fetch(url, { redirect: "follow", headers: { "user-agent": "Mozilla/5.0 (seo-guard)" } });
      // 403/429 = حجب مضاد للبوتات لا رابط ميت — تحذير لا خطأ.
      if (res.status === 403 || res.status === 429) {
        warn.push(`S14 · ${url} أرجع ${res.status} (حجب مضاد للبوتات — تحقّق يدوياً)`);
      } else if (!res.ok) {
        errors.push(`S14 · رابط sameAs لا يُرجع 200 (${res.status}): ${url}`);
      }
    } catch (e) {
      warn.push(`S14 · تعذّر فحص ${url}: ${e.message}`);
    }
  }
  console.log(`S14 · روابط sameAs مفحوصة: ${sameAs.size}`);
}

// ---- S12 التشابه ----
try {
  const { results } = computePairs();
  const sim = results.filter((r) => r.ratio > SIM_MAX);
  sim.forEach((r) => {
    errors.push(`S12 · تشابه > ${(SIM_MAX * 100).toFixed(0)}%: ${r.a} ↔ ${r.b}`);
    warn.push(`S12 · ${(r.ratio * 100).toFixed(2)}%: ${r.a} ↔ ${r.b}`);
  });
} catch (e) {
  warn.push(`S12 · تعذّر حساب التشابه: ${e.message}`);
}

// ---- التقرير (وضع خط الأساس: يفشل فقط على المخالفات الجديدة) ----
gate({
  name: "seo",
  errors,
  warn,
  header: `── فاحص السيو والمحتوى (كيف الضيافة) ──\nصفحات مفحوصة: ${titles.size}`,
});
