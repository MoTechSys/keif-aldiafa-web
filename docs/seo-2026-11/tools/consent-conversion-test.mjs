// يقيس ما يرسله الموقع إلى Google Ads عند نقر زر واتساب، في ثلاث حالات موافقة.
// التشغيل (بعد `next start -p 3111` وتثبيت playwright كما في scripts/browser/README.md):
//   BASE=http://localhost:3111 PAGE=/qahwajiin-jeddah node docs/seo-2026-11/tools/consent-conversion-test.mjs
// أمان القياس: كل طلب لغير الموقع نفسه ومكتبة gtag يُسجَّل ثم يُقطَع، فلا يصل أي تحويل
// ولا أي زيارة تجريبية إلى حسابات المالك. معرّف النقرة المستعمل وهمي.
import { chromium } from "playwright";
const BASE = process.env.BASE || "http://localhost:3111";
const PAGE = process.env.PAGE || "/qahwajiin-jeddah";
const GCLID = "TESTCLICK_PREVIEW_ONLY";
const REDACT_ON = "gtag('set','ads_data_redaction',true)";
const host = new URL(BASE).hostname;
const browser = await chromium.launch();
for (const mode of ["denied", "denied+redaction-off", "granted"]) {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, locale: "ar-SA" });
  await ctx.addInitScript((v) => { try { localStorage.setItem("kd_consent", v); } catch {} }, mode === "granted" ? "granted" : "denied");
  const page = await ctx.newPage();
  const ext = [];
  await page.route("**/*", (route) => {
    const u = new URL(route.request().url());
    if (u.hostname === host || u.hostname === "www.googletagmanager.com") return route.continue();
    ext.push(u); return route.abort();
  });
  if (mode === "denied+redaction-off") await page.route((u) => u.pathname === PAGE, async (route) => {
    if (route.request().resourceType() !== "document") return route.fallback();
    const res = await route.fetch(); const body = await res.text();
    if (!body.includes(REDACT_ON)) console.log("   ! مقتطف ads_data_redaction غير موجود في HTML — الحالة الثانية تساوي الأولى");
    await route.fulfill({ response: res, body: body.replace(REDACT_ON, REDACT_ON.replace("true", "false")) });
  });
  await page.goto(`${BASE}${PAGE}?gclid=${GCLID}`, { waitUntil: "domcontentloaded", timeout: 90000 });
  await page.evaluate(() => window.dispatchEvent(new Event("pointerdown"))); // يحمّل gtag (محفّز التفاعل)
  await page.waitForFunction(() => !!window.google_tag_manager, null, { timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(2500);
  const before = ext.length;
  await page.evaluate(() => { const a = document.querySelector('a[href*="wa.me"]'); a.addEventListener("click", (e) => e.preventDefault()); a.click(); });
  await page.waitForTimeout(4000);
  const labeled = ext.slice(before).filter((u) => u.searchParams.has("label"));
  console.log("##", mode, "— طلبات تحويل بـlabel:", labeled.length);
  for (const u of labeled) console.log("    ", u.hostname + u.pathname.replace(/\d{8,}/, "[id]"), JSON.stringify({
    gcs: u.searchParams.get("gcs"),
    gclaw: (u.searchParams.get("gclaw") || "").replace(GCLID, "<TEST-ID>") || null,
    clickIdInRequest: u.href.includes(GCLID),
  }));
  console.log("   كوكيز الإعلانات/التحليلات:", (await ctx.cookies()).map((c) => c.name).filter((n) => /^_gcl|^_ga/.test(n)).join(",") || "لا شيء");
  await ctx.close();
}
await browser.close();
