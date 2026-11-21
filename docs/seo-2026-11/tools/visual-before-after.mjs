// مقارنة بصرية قبل/بعد بالبكسل لكل صفحات الخريطة (قاعدة D180: التغيير المرئي يُقارَن بما قبله، لا يكفي «لا قصّ»).
//
// الاستعمال (من جذر المستودع، والخادمان يعملان: القديم = نسخة الأساس، الجديد = النسخة الحالية):
//   BASE_OLD=http://localhost:3112 BASE_NEW=http://localhost:3111 \
//   OUT=.tmp-seo-pkg/logs/pp.jsonl CMP=.tmp-seo-pkg/cmp node docs/seo-2026-11/tools/visual-before-after.mjs
//
// - عامل واحد بالتتابع عمداً: تشغيل ثلاثة متصفحات معاً على `next start` بلا sharp علّق مُحسِّن الصور
//   (طلبان بقيا بلا ردّ حتى أُعيد تشغيل الخادم) وأفسد المقارنة. لا تزِد العمّال.
// - كل طلب لغير localhost يُقطع (لا تصل زيارات تجريبية إلى قياس المالك). الفيديو يُقطع.
// - الفوتر يُخفى من اللقطة (تغيّر عمداً في D177 ويُراجَع وحده).
// - سطر {"done":true} يُكتب فقط إذا اكتملت كل المهام؛ غيابه = التشغيل لم يكتمل.
import { chromium } from "playwright";
import { writeFileSync, appendFileSync } from "node:fs";

const OLD = process.env.BASE_OLD, NEW = process.env.BASE_NEW, LOG = process.env.OUT, D = process.env.CMP;
const EXTRA_1005 = new Set(["/", "/services", "/mubashirin-qahwa-jeddah"]); // الصفحات التي تغيّر فيها نص مرئي + الرئيسية
const xml = await (await fetch(NEW + "/sitemap.xml")).text();
const paths = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => decodeURI(new URL(m[1]).pathname));
const jobs = [];
for (const p of paths) { jobs.push([p, 390, 844], [p, 1440, 900]); if (EXTRA_1005.has(p)) jobs.push([p, 1005, 870]); }

const browser = await chromium.launch();
async function shot(base, path, w, h) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, locale: "ar-SA", reducedMotion: "reduce" });
  try {
    const page = await ctx.newPage();
    await page.route("**/*", (r) => { const u = new URL(r.request().url()); return u.hostname !== "localhost" || /\.(mp4|webm)$/.test(u.pathname) ? r.abort() : r.continue(); });
    await page.addInitScript(() => { try { localStorage.setItem("kd_consent", "denied"); } catch {} }); // يخفي شريط الكوكيز
    await page.goto(base + encodeURI(path), { waitUntil: "load", timeout: 60000 });
    await page.evaluate(() => document.fonts.ready);
    await page.addStyleTag({ content: "*{content-visibility:visible!important;animation:none!important;transition:none!important}footer.v7-footer{display:none!important}" });
    const total = await page.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < total; y += h) { await page.evaluate((y) => scrollTo(0, y), y); await page.waitForTimeout(200); }
    // انتظار الصور الظاهرة في عمود الصفحة (صور lazy خارج الشاشة داخل الأشرطة الأفقية لا يطلبها المتصفح أصلاً)
    const pendingInColumn = () => page.evaluate(() => [...document.images].filter((i) => { const b = i.getBoundingClientRect(); return !i.complete && b.width > 0 && b.left < innerWidth && b.right > 0; }).length);
    let pend = await pendingInColumn();
    for (let t = 0; t < 16 && pend > 0; t++) { await page.waitForTimeout(500); pend = await pendingInColumn(); }
    await page.evaluate(() => scrollTo(0, 0)); await page.waitForTimeout(400);
    const m = await page.evaluate(() => ({ sx: document.documentElement.scrollWidth - document.documentElement.clientWidth, broken: [...document.images].filter((i) => i.complete && i.currentSrc && i.naturalWidth === 0).length }));
    return { total, pend, ...m, buf: await page.screenshot({ fullPage: true }) };
  } finally { await ctx.close(); }
}

let finished = 0;
for (const [p, w, h] of jobs) {
  const rec = { p, w };
  try {
    let same = false, o, n;
    for (let t = 0; t < 2 && !same; t++) { // إعادة واحدة عند الاختلاف لاستبعاد توقيت تحميل صورة
      o = await shot(OLD, p, w, h); n = await shot(NEW, p, w, h);
      same = Buffer.compare(o.buf, n.buf) === 0; rec.tries = t + 1;
    }
    Object.assign(rec, { same, hOld: o.total, hNew: n.total, sxOld: o.sx, sxNew: n.sx, pendOld: o.pend, pendNew: n.pend, brokenOld: o.broken, brokenNew: n.broken });
    if (!same) { const k = `${p.replace(/\//g, "_") === "_" ? "_home" : p.replace(/\//g, "_")}-${w}`; writeFileSync(`${D}/pp-${k}-old.png`, o.buf); writeFileSync(`${D}/pp-${k}-new.png`, n.buf); rec.files = k; }
    finished++;
  } catch (e) { rec.error = String(e).slice(0, 200); }
  appendFileSync(LOG, JSON.stringify(rec) + "\n");
}
await browser.close();
if (finished === jobs.length) appendFileSync(LOG, JSON.stringify({ done: true, jobs: jobs.length }) + "\n");
else appendFileSync(LOG, JSON.stringify({ done: false, finished, jobs: jobs.length }) + "\n");
