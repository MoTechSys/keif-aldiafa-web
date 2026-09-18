# رسالة المالك — 2026-09-18 — ملف `MASTER_CREDENTIALS_v6` + «اتصل بـ Google Ads و Google Console»

> محفوظة حرفياً كما وردت. **الملف نفسه (16KB، يحوي أسراراً) لا يُحفظ في المستودع ولا يُقتبس منه أي قيمة** — BOOTSTRAP §6.3.

شوف هذا الملف الآتي. واتصل بـ Google Ads وGoogle Console، وبعد ما تتصل إذا احتجت شيء قل لي. وإذا باقي أسئلة قل لي.

## ما في الملف (بنية فقط — بلا قيمات)
- مشروع GCP `keif-diafa-api` · مالك `keifaldiafa@gmail.com` · تاريخ تحقق 2026-08-31.
- عميل OAuth ويب (المعتمد) + عميل ديسكتوب (لا يُستخدم) · refresh token موحّد بسكوبَي `adwords` + `webmasters.readonly`.
- Google Ads: developer token (Basic Access) · حساب الحملات `3412658939` (SAR · Riyadh) · حساب مدير `7947566294` غير مربوط · **لا `login-customer-id`** (الخطأ القاتل سابقاً) · API v24.
- Search Console: `https://keifaldiafa.com/` · صلاحية `siteOwner`.
- §15 في الملف نفسه ينصح: **Reset Secret + توليد رمز جديد** بعد الاستقرار لأن الأسرار ظهرت في محادثة.

## الفهم التنفيذي
1. تحميل القيم في **الجلسة فقط** (`/tmp/gcreds/` بصلاحية 600 — خارج المستودع، تزول مع الساندبوكس).
2. الاتصال الفعلي بالخدمتَين وسحب بيانات البحث الحقيقية (GSC 16 شهراً · Ads 12 شهراً).
3. حفظ **المجاميع فقط** (كلمات/صفحات/أرقام — لا أسرار) في `data/search-intel/2026-09-18/` كمصدر حقيقة للمرحلة 7.
4. تقرير بالنتائج + الأسئلة المتبقية.

## النتيجة
- ✅ التوكن تجدّد · ✅ Search Console متصل (siteOwner) · ✅ Google Ads v24 متصل (حساب `keifaldiafa.com`).
- التقرير: `docs/reports/2026-09-18-search-intel-gsc-ads-real-data.md`.
