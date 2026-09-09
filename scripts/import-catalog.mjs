#!/usr/bin/env node
/**
 * import-catalog.mjs — استيراد كتالوج الصور والشعارات (المرحلة 1 من PLAN.md).
 *
 * المصدر الوحيد للحقيقة: مستودع MoTechSys/catalog-keif-aldiafa-photots
 *   catalog/catalog.json   (325 سجل)  → src/lib/imageCatalog.data.ts
 *   logos/partners.json    (49 شعار)  → src/lib/partners.ts
 *   web/**                 (314 webp) → public/images/catalog/   (مسطّح)
 *   logos/web/*            (49 webp)  → public/images/partners/
 *
 * D111: هذا السكربت لا يحلّل صورة ولا يغيّر اسماً أو alt — ينقل كما هو.
 * D113: لا علامة مائية برمجية — الصور في web/ مدموجة بالشعار أصلاً.
 *
 * الاستخدام:
 *   git clone --depth 1 https://github.com/MoTechSys/catalog-keif-aldiafa-photots /tmp/catalog
 *   node scripts/import-catalog.mjs [/tmp/catalog]
 *
 * يفشل (exit 1) عند: سجل «يُنشر» بلا ملف · أبعاد غائبة · اسم ملف مكرر ·
 * أبعاد الملف الفعلي ≠ أبعاد الكتالوج (عند توفّر ImageMagick `identify`).
 */
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync, readdirSync, rmSync } from "node:fs";
import { join, basename } from "node:path";
import { execFileSync } from "node:child_process";

const ROOT = process.cwd();
const SRC = process.argv[2] || "/tmp/catalog";
const CATALOG = join(SRC, "catalog", "catalog.json");
const PARTNERS = join(SRC, "logos", "partners.json");
const WEB = join(SRC, "web");
const LOGOS = join(SRC, "logos", "web");
const OUT_IMG = join(ROOT, "public", "images", "catalog");
const OUT_LOGO = join(ROOT, "public", "images", "partners");
const OUT_TS = join(ROOT, "src", "lib", "imageCatalog.data.ts");
const OUT_PARTNERS_TS = join(ROOT, "src", "lib", "partners.ts");

for (const p of [CATALOG, PARTNERS, WEB, LOGOS]) {
  if (!existsSync(p)) {
    console.error(`❌ غير موجود: ${p}\nاستنسخ الكتالوج أولاً (انظر رأس الملف).`);
    process.exit(1);
  }
}

const errors = [];
const records = JSON.parse(readFileSync(CATALOG, "utf8"));
const partnersRaw = JSON.parse(readFileSync(PARTNERS, "utf8"));

/* ── تفسير حقل «الصفحات» ──
   قيمه في الكتالوج نص حر: "/portfolio · /qahwajiin-jeddah" أو "الرئيسية" أو
   "/offerings (معدات)" أو "(زخرفي فقط)". نستخرج المسارات اللاتينية فقط،
   و«الرئيسية» → "/". صفحات غير موجودة بعدُ في Next (مثل
   /coffee-break-sharikat-jeddah — المرحلة 7) تُحفَظ كما هي؛ imageCatalog.ts
   يتكفّل بالاحتياط إلى /portfolio في الخرائط. */
function parsePages(raw) {
  const out = [];
  for (const part of String(raw).split("·")) {
    const t = part.trim();
    if (t.includes("الرئيسية")) { out.push("/"); continue; }
    const m = t.match(/(\/[a-z0-9-]+)/);
    if (m) out.push(m[1]);
  }
  return [...new Set(out)];
}

function publishOf(v) {
  if (v === "نعم") return "yes";
  if (v === "زخرفي فقط") return "decorative";
  return "no";
}

const images = [];
const seen = new Set();
for (const r of records) {
  const publish = publishOf(r["يُنشر"]);
  if (publish === "no") continue; // 11 سجلاً غير موجودة في web/ أصلاً
  const file = r["الاسم_الجديد"];
  const srcPath = join(WEB, r["مجلد"], file);
  if (!existsSync(srcPath)) { errors.push(`ملف غائب #${r["رقم"]}: ${srcPath}`); continue; }
  if (seen.has(file)) { errors.push(`اسم مكرر #${r["رقم"]}: ${file}`); continue; }
  seen.add(file);
  const width = r["web_العرض"], height = r["web_الارتفاع"];
  if (!Number.isInteger(width) || !Number.isInteger(height)) {
    errors.push(`أبعاد غائبة #${r["رقم"]}: ${file}`); continue;
  }
  images.push({
    id: r["رقم"],
    tier: r["المستوى"],
    file,
    width,
    height,
    kb: r["web_KB"],
    alt: r["alt"],
    title: r["العنوان"],
    entity: r["الجهة"],
    entityEn: r["الجهة_EN"],
    sector: r["القطاع"],
    service: r["الخدمة"],
    place: r["المكان"],
    pages: parsePages(r["الصفحات"]),
    publish,
    _src: srcPath,
  });
}

// ترتيب العرض (D112): tier تصاعدياً ثم رقم
images.sort((a, b) => a.tier - b.tier || a.id - b.id);

/* ── الشعارات ── */
const partners = [];
for (const p of partnersRaw) {
  const srcPath = join(LOGOS, p["الملف"]);
  if (!existsSync(srcPath)) { errors.push(`شعار غائب #${p["رقم"]}: ${srcPath}`); continue; }
  const [w, h] = String(p["web_الحجم"]).split("×").map(Number);
  partners.push({
    id: p["رقم"],
    priority: p["الأولوية"],
    file: p["الملف"],
    name: p["الشريك"],
    nameEn: p["الشريك_EN"],
    sector: p["القطاع"],
    alt: p["alt"],
    width: w,
    height: h,
    show: p["يُعرض"] === "نعم",
    _src: srcPath,
  });
}
partners.sort((a, b) => a.priority - b.priority || a.id - b.id);

/* ── تحقق الأبعاد الفعلية (إن وُجد identify) ── */
let identify = false;
try { execFileSync("identify", ["-version"], { stdio: "ignore" }); identify = true; } catch { /* اختياري */ }
if (identify) {
  const all = [...images, ...partners];
  const out = execFileSync("identify", ["-format", "%w %h\n", ...all.map((x) => x._src)], { encoding: "utf8" })
    .trim().split("\n");
  all.forEach((x, i) => {
    const [w, h] = out[i].split(" ").map(Number);
    if (w !== x.width || h !== x.height) errors.push(`أبعاد مختلفة: ${x.file} الملف ${w}×${h} ≠ الكتالوج ${x.width}×${x.height}`);
  });
} else {
  console.warn("⚠️  identify غير متاح — تخطّيت التحقق من الأبعاد الفعلية.");
}

if (errors.length) {
  console.error(`❌ ${errors.length} خطأ في الكتالوج:`);
  errors.forEach((e) => console.error("   • " + e));
  process.exit(1);
}

/* ── النسخ (مسطّح؛ الأسماء فريدة — تحقّقنا أعلاه) ── */
mkdirSync(OUT_IMG, { recursive: true });
mkdirSync(OUT_LOGO, { recursive: true });
// إزالة ما لم يعد في الكتالوج (المجلدان مملوكان كلياً لهذا السكربت)
const keepImg = new Set(images.map((x) => x.file));
const keepLogo = new Set(partners.map((x) => x.file));
let removed = 0;
for (const f of readdirSync(OUT_IMG)) if (!keepImg.has(f)) { rmSync(join(OUT_IMG, f)); removed++; }
for (const f of readdirSync(OUT_LOGO)) if (!keepLogo.has(f)) { rmSync(join(OUT_LOGO, f)); removed++; }
for (const x of images) copyFileSync(x._src, join(OUT_IMG, x.file));
for (const x of partners) copyFileSync(x._src, join(OUT_LOGO, x.file));

/* ── توليد TypeScript ── */
const strip = (x) => { const { _src, ...rest } = x; return rest; };
const header = (what) =>
  `/* eslint-disable */\n// ⚠️ ملف مولَّد آلياً — لا يُحرَّر يدوياً.\n// المصدر: MoTechSys/catalog-keif-aldiafa-photots (${what}) · المولِّد: scripts/import-catalog.mjs\n// D111: alt والعناوين منقولة حرفياً من الكتالوج.\n\n`;

writeFileSync(
  OUT_TS,
  header("catalog/catalog.json") +
    `export type CatalogPublish = "yes" | "decorative";\n\n` +
    `export interface CatalogRecord {\n` +
    `  /** رقم السجل في الكتالوج */\n  id: number;\n` +
    `  /** مستوى قوة الإثبات 1 (حكومي/جامعات) → 6 (ستوك) — D110 */\n  tier: number;\n` +
    `  /** اسم الملف داخل public/images/catalog/ */\n  file: string;\n` +
    `  width: number;\n  height: number;\n  kb: number;\n` +
    `  /** alt حرفي من الكتالوج (D111) */\n  alt: string;\n` +
    `  /** العنوان — يُستخدم كـ ImageObject.name */\n  title: string;\n` +
    `  entity: string;\n  entityEn: string;\n  sector: string;\n  service: string;\n  place: string;\n` +
    `  /** الصفحات المستهدفة (مسارات لاتينية؛ "/" = الرئيسية). قد تحوي صفحات لم تُبنَ بعدُ (المرحلة 7). */\n  pages: string[];\n` +
    `  /** decorative = خلفيات فقط: لا image-sitemap ولا ImageObject */\n  publish: CatalogPublish;\n` +
    `}\n\n` +
    `export const CATALOG_VERSION = "v4 — 2026-09-07";\n\n` +
    `export const CATALOG: readonly CatalogRecord[] = ${JSON.stringify(images.map(strip), null, 2)};\n`,
  "utf8"
);

writeFileSync(
  OUT_PARTNERS_TS,
  header("logos/partners.json") +
    `export interface Partner {\n  id: number;\n  /** 1 حكومي → 5 يُراجع */\n  priority: number;\n` +
    `  /** اسم الملف داخل public/images/partners/ */\n  file: string;\n  name: string;\n  nameEn: string;\n  sector: string;\n` +
    `  /** alt حرفي من الكتالوج (D111) */\n  alt: string;\n  width: number;\n  height: number;\n` +
    `  /** false = «بعد المراجعة» — لا يُعرض */\n  show: boolean;\n}\n\n` +
    `/** كل الشعارات مرتبة بالأولوية ثم الرقم (49) */\n` +
    `export const ALL_PARTNERS: readonly Partner[] = ${JSON.stringify(partners.map(strip), null, 2)};\n\n` +
    `/** الشعارات المعروضة فقط (يُعرض = نعم) */\n` +
    `export const PARTNERS: readonly Partner[] = ALL_PARTNERS.filter((p) => p.show);\n\n` +
    `export const partnerSrc = (p: Partner): string => \`/images/partners/\${p.file}\`;\n`,
  "utf8"
);

const yes = images.filter((x) => x.publish === "yes").length;
const deco = images.length - yes;
console.log(
  `✅ استيراد الكتالوج\n` +
    `   صور: ${images.length} (يُنشر ${yes} · زخرفي ${deco}) → public/images/catalog/\n` +
    `   شعارات: ${partners.length} (يُعرض ${partners.filter((p) => p.show).length}) → public/images/partners/\n` +
    `   حُذف من مجلدات الكتالوج: ${removed} ملف قديم\n` +
    `   ${OUT_TS}\n   ${OUT_PARTNERS_TS}`
);
