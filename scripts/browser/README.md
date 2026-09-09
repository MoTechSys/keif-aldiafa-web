# scripts/browser — فحوص المتصفح (Playwright) للمرحلة 6

تُشغَّل من جذر المستودع بعد `npm run build` وتشغيل `next start -p 3111` (انظر `docs/AGENT-STATE.md` §4).
تحتاج `playwright` + `axe-core` (غير مُثبَّتَين في `package.json` عمداً — حزم ثقيلة للفحص فقط):
`npm i -D --no-save playwright axe-core && npx playwright install chromium` أو رابط رمزي إلى تثبيت خارجي.

| الملف | ماذا يفحص |
|---|---|
| `../browser-sweep.mjs` | كل مسارات sitemap × 4 مقاسات + axe @390 → `/tmp/pall.log` |
| `../html-audit.mjs` | HTML الناتج: title/desc/canonical/robots/h1/JSON-LD/og/lang |
| `../pixel-audit.mjs` | نص < 11px · فقرة ضيقة · صور محتوى < 60px · أزرار متراصة · تمدد @390 |
| `warm.mjs` | إحماء محسّن الصور `_next/image` لكل الصفحات (يُشغَّل **قبل** السويب على خادم بلا CDN) |
| `recheck.mjs` | إعادة فحص المسارات المعلَّمة `brokenImgs` بانتظار حدث load (يقرأ `/tmp/flagged.txt`) |
| `p6.mjs` | 5 صفحات ممثلة × 4 مقاسات + لقطات |
| `fx6.mjs` | وظائف: شبكة `.eq` · خيارات نموذج التواصل + prefill · فلتر الأعمال · تأجيل gtag |
| `links.mjs` | `/links` على 4 مقاسات: بلا هيدر/فوتر/fab · 9 بطاقات · أومنتريكس · لقطات |
| `verify.mjs` | بطاقة الخدمة @390 (عرض النص/خلية المعرض/الأزرار صف واحد) + أيقونات التواصل |
