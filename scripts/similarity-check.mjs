#!/usr/bin/env node
/**
 * فاحص التشابه — similarity-check.mjs (كيف الضيافة)
 * منقول ومكيّف من منظومة أصول الضيافة (osoul-aldiafa-v2) — نفس الخوارزمية
 * لتكون الأرقام قابلة للمقارنة بين المشروعين.
 *
 * لماذا هذا الفاحص وجودي؟ حالة موثّقة في أبحاثنا:
 *   40 صفحة مدينة متشابهة ⇒ نصفها صُنّف Doorway ⇒ تراجع الزيارات −63% في 30 يوماً.
 * كيف الضيافة لديها 24 صفحة (خدمة×مدينة) من قالب واحد — أخطر نقطة في الموقع.
 *
 * الخوارزمية:
 *  0. أزل «هيكل الموقع» المشترك (header/nav/footer) قبل أي حساب.
 *  1. استخرج النص المرئي فقط (بلا وسوم/سكربت/JSON-LD/style).
 *  2. حيِّد المتغيّرات: كل اسم مدينة ومشتقاته → __CITY__.
 *  3. طبّع المسافات وعلامات الترقيم العربية.
 *  4. احسب ratio (نمط difflib.SequenceMatcher) لكل زوج.
 *
 * العتبة: زوج صفحات ≤ 60% كبداية (خط أساس يُشدَّد تدريجياً 0.60 → 0.55 → 0.45
 * كلما تعمّق المحتوى المحلي — بتغيير SIM_MAX هنا فقط، مصدر الحقيقة الوحيد).
 */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, relative } from "node:path";
import { gate } from "./baseline.mjs";

const ROOT = process.cwd();
const APP_DIR = join(ROOT, ".next", "server", "app");

// مصدر الحقيقة الوحيد للعتبة — يستهلكه seo-guard (S12) أيضاً.
export const SIM_MAX = Number(process.env.SIM_MAX ?? 0.6);

/** مدن كيف الضيافة الثماني + مشتقات الجرّ الشائعة (الأطول أولاً لئلا يبتلع القصيرُ الطويلَ). */
const CITY_TOKENS = [
  "المدينة المنورة", "مكة المكرمة",
  "بجدة", "في جدة", "جدة",
  "بالرياض", "في الرياض", "الرياض",
  "بمكة", "في مكة", "مكة",
  "بالمدينة", "في المدينة", "المدينة",
  "بالدمام", "في الدمام", "الدمام",
  "بالطائف", "في الطائف", "الطائف",
  "بأبها", "في أبها", "أبها",
  "بينبع", "في ينبع", "ينبع",
];

/**
 * وسوم «هيكل الموقع» المتطابقة في كل صفحة — تُستثنى قبل القياس لأنها
 * تُضخّم التشابه زوراً (دليل مُقاس في مشروع osoul: 404↔contact كانت 62.8%
 * مع الهيكل و9.8% بدونه). توثيق جوجل لتكرار المحتوى معني بالمحتوى الأساسي.
 */
const CHROME_TAGS = ["header", "nav", "footer"];

export function extractVisibleText(html) {
  let s = html;
  s = s.replace(/<script[\s\S]*?<\/script>/gi, " ");
  s = s.replace(/<style[\s\S]*?<\/style>/gi, " ");
  for (const tag of CHROME_TAGS) {
    s = s.replace(new RegExp(`<${tag}\\b[\\s\\S]*?<\\/${tag}>`, "gi"), " ");
  }
  s = s.replace(/<[^>]+>/g, " ");
  s = s.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
       .replace(/&quot;/g, '"').replace(/&#\d+;/g, " ").replace(/&nbsp;/g, " ");
  return s;
}

export function neutralize(text) {
  let s = text;
  for (const token of CITY_TOKENS) {
    s = s.split(token).join("__CITY__");
  }
  s = s.replace(/[\u060C\u061B\u061F.,;:!?()«»"'\-\u2013\u2014]/g, " ");
  s = s.replace(/\s+/g, " ").trim();
  return s;
}

// نسبة تشابه بأسلوب difflib.SequenceMatcher.ratio() على مستوى الكلمات.
export function ratio(aTokens, bTokens) {
  if (aTokens.length === 0 && bTokens.length === 0) return 1;
  if (aTokens.length === 0 || bTokens.length === 0) return 0;
  const countB = new Map();
  for (const t of bTokens) countB.set(t, (countB.get(t) || 0) + 1);
  let matches = 0;
  for (const t of aTokens) {
    const c = countB.get(t) || 0;
    if (c > 0) { matches++; countB.set(t, c - 1); }
  }
  return (2.0 * matches) / (aTokens.length + bTokens.length);
}

function walk(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, e.name);
    if (e.isDirectory()) walk(full, out);
    else if (e.name.endsWith(".html")) out.push(full);
  }
  return out;
}

export function computePairs() {
  const files = walk(APP_DIR);
  const pages = files.map((f) => {
    const html = readFileSync(f, "utf8");
    const norm = neutralize(extractVisibleText(html));
    return { file: relative(ROOT, f), tokens: norm.split(" ").filter(Boolean) };
  }).filter((p) => p.tokens.length > 30); // تجاهل الصفحات شبه الفارغة (404/loading)

  const results = [];
  for (let i = 0; i < pages.length; i++) {
    for (let j = i + 1; j < pages.length; j++) {
      const r = ratio(pages[i].tokens, pages[j].tokens);
      if (r >= 0.40) {
        results.push({ a: pages[i].file, b: pages[j].file, ratio: r });
      }
    }
  }
  results.sort((x, y) => y.ratio - x.ratio);
  return { pageCount: pages.length, results };
}

// تشغيل مباشر — وضع baseline-diff: يفشل فقط على أزواج **جديدة** فوق العتبة.
// الدَّين الحالي (~116 زوجاً من قالب واحد) موثّق في خط الأساس وسيُصفّى تدريجياً
// في مرحلة «المحتوى المحلي العميق» (المرحلة 5) مع تشديد SIM_MAX تدريجياً.
if (import.meta.url === `file://${process.argv[1]}`) {
  if (!existsSync(APP_DIR)) {
    console.error("❌ لم يُعثر على .next/server/app — شغّل `npm run build` أولاً.");
    process.exit(1);
  }
  const { pageCount, results } = computePairs();
  const violations = results.filter((r) => r.ratio > SIM_MAX);
  const warn = [];
  if (results.length) {
    warn.push("أعلى الأزواج تشابهاً:");
    results.slice(0, 10).forEach((r) =>
      warn.push(`${(r.ratio * 100).toFixed(2)}%  ${r.a} ↔ ${r.b}`)
    );
  }
  // مفتاح مستقر: الزوج فقط بلا نسبة (النسبة تتقلّب مع أي تعديل نصي بسيط).
  const errors = violations.map((r) => `SIM · ${r.a} ↔ ${r.b}`);
  gate({
    name: "similarity",
    errors,
    warn,
    header: `── فاحص التشابه (كيف الضيافة) ──\nصفحات مفحوصة: ${pageCount} · عتبة: ${(SIM_MAX * 100).toFixed(0)}% · أزواج فوق العتبة: ${violations.length}`,
  });
}
