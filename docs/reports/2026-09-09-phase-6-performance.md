# تقرير المرحلة 6 — الأداء (قبل/بعد) — 2026-09-09

> كل رقم من أمر فعلي: Lighthouse 13.4 · Chromium 1134 (Playwright) · `--form-factor=mobile --screenEmulation.mobile --throttling-method=simulate` على `next start -p 3111` في الساندبوكس (لا CDN). ملفات JSON في `/tmp/lh6*.json` (جلسة العمل).

## ما تغيّر (D140–D144)
| # | التغيير | الأثر المقاس |
|---|---|---|
| D140 | `ContactForm` و`PortfolioFilters` كانا يستوردان `servicesContent`/`portfolioContent` (يجرّان `imageCatalog.data.ts` كاملاً — 314 سجلاً) إلى حزمة العميل → chunk `722` بحجم **172KB** في `/contact` و`/portfolio`. أصبحت البيانات تُمرَّر props من الخادم. | chunk 722 اختفى؛ `/contact` First Load 104KB · `/portfolio` 102KB |
| D141 | محمِّل gtag.js (~350KB JS · TBT ≈1.1s) كان `<script async>` في `<head>`. الآن: مقتطف `dataLayer/gtag('config')` يبقى حرفياً في `<head>` (اكتشاف Google Ads الآلي) والمحمِّل يُحقَن بعد `load`+2.5s ثم `requestIdleCallback`، أو عند أول تفاعل. | TBT `/services` 1,370→**380–480ms** · TTI 8.4→**3.7s** · Best-Practices 77→**100** (كوكي doubleclick لم يعد ضمن نافذة الفحص) |
| D142 | شبكة `.eq` (6 مقصوصات العدّة — النموذج §7) نُقلت إلى الصفحات المحلية (كانت دَيناً منذ المرحلة 4). | Playwright: 3 أعمدة @390 · 6 @1440 · 6/6 صور تُحمَّل |
| D143 | فيديو الهيرو كان يبدأ بـ`requestIdleCallback` قبل `load` فينافس الموارد الحرجة. الآن بعد `load` ثم خمول. | الرئيسية بلا gtag: 80→**87** |
| D144 | حذف 18 مجلد صور قديمة غير مُشار إليها (333 ملفاً · ~31MB): `public/images/{cold-drinks,dates,distributions,equipment,events,fruits,hero,hot-drinks,keif,nuts,pastry,sandwiches,services,serving-equipment,snacks,sweets,watermarks,weddings}`. | public 61→**29MB** · خط أساس assets 27→**11** |

## Lighthouse جوال — قبل → بعد
| الصفحة | Perf | TBT | TTI | BP | A11y | SEO |
|---|---|---|---|---|---|---|
| `/services` | 68 → **81–84** | 1,370 → 380–480ms | 8.4 → 3.7s | 77 → **100** | 100 | 100 |
| `/contact` | — → **83** | 340ms | 4.0s | **100** | 100 | 100 |
| `/qahwajiin-jeddah` | 69 → **76** | 490ms | 4.1s | **100** | 100 | 100 |
| `/` (الرئيسية) | 69 → **69–83** (متذبذب) | 420–1,370ms | 3.9–8.9s | 77–100 | 100 | 100 |

### لماذا الرئيسية متذبذبة؟
في بعض التشغيلات يصل gtag داخل نافذة القياس (Lantern يمدّ الزمن المحاكى إلى ~9s فيلتقط مهام gtag الطويلة 250–420ms). بحجب gtag: **87** (TBT 280ms) — أي أن **كل** المتبقي من الفجوة إلى ≥90 هو gtag نفسه + LCP المحاكى 3.1s (المرصود 0.46s؛ Lantern يضيف ~2.6s لسلسلة الخطوط/CSS على 4G بطيء — لا يتغيّر بلا CDN).

## ما لم يُلمس (قرار)
- `.contact .actions` زرّان متراصّان على الجوال: تصميم النموذج (grid عمود واحد <900px) — يبقى (D115). ملاحظة المالك عن الأزرار كانت لبطاقة الخدمة وهيرو الصفحات وقد أُصلحت (D137).
- `.tag` 10.9px · `.l2` 9.9px · `<small>` 9px في شريط التواصل الاجتماعي: مقاسات النموذج — تنتظر قرار المالك (D138).

## دَين معلوم بعد هذه المرحلة
- الهدف ≥90 على الجوال **لم يتحقق** في القياس المحاكى؛ المسار الواقعي: (1) قياس على الاستضافة الفعلية مع CDN (LCP المحاكى ينزل)، (2) إن أراد المالك: نقل GA4 إلى تحميل عند التفاعل فقط وإبقاء AW فقط مؤجّلاً — قرار أعمال لا تقني.
- `public/images/brand/qr-keif-aldiafa.png` وأيقونات PNG (CH8 ×10) — مطلوبة للـmanifest/favicon، تبقى.
