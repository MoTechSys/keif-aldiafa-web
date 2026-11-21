> نسخة عامة: حُذفت روابط التنزيل، الجدول اليومي للإعلانات، وأرقام الحملات. الملفات الخام (11 ملف JSON) لم تُرفع.

# خط الأساس — keifaldiafa.com — ستة قياسات
تاريخ السحب: 2026-11-21. آخر يوم متاح في Search Console: 2026-11-19. لم يتغيّر شيء في Google Ads ولا في إعدادات Search Console. محاولة إرسال الخريطة رُفضت، والتفاصيل في البند 3.

## الأجوبة المباشرة
1. **الطلب على «قهوجيين» في الرياض لا في جدة.** في الرياض 3,600 بحث شهرياً، وفي جدة 140. أما «قهوجيين جدة» فعليها 2,400 بحث في جدة، ومخطط الكلمات يدمج معها «قهوجي جدة». فظهور /qahwajiin-riyadh على «قهوجيين» (3,146 ظهوراً، ترتيب 8.5) يطابق مكان الطلب.
2. **لا دليل على أن نشر 2026-09-23 أنزل الأداء العضوي ولا رفعه.**
   - النقرات تكاد تثبت: 415 ثم 395 ثم 390.
   - الظهور ارتفع 46% في الفترة الأخيرة مقارنة بالثانية، و CTR نزل من 2.60% إلى 1.76%.
   - الترتيب يكاد يثبت: 7.35 ثم 7.14 ثم 7.87.
3. **الصفحات السبع ما زالت غير مفهرسة. وإرسال الخريطة رُفض (403)** لأن مفتاح الوصول صلاحيته قراءة فقط (webmasters.readonly).
   - /qahwajiin صار ردّها الآن «URL is unknown to Google»، وكان صباح اليوم نفسه «Discovered». وهي موجودة فعلاً في sitemap.xml الحي، lastmod 2026-09-18.
4. **لم يظهر في الحساب سبب إداري للتوقف:** الفوترة APPROVED، و17 إعلاناً كلها APPROVED / ELIGIBLE، والميزانية غير مشتركة. الحالة الأساسية الآن LIMITED وسببها UNKNOWN.
   - **أقوى ما في البيانات:** معدل التحويل نزل من 29.3% (09-15 → 09-22) إلى 9.4% (09-23 → 09-30) ثم 0% بعد 10-01. أي أنه بدأ ينهار يوم نشر الموقع الجديد بالضبط. بعدها خنق هدف tCPA الظهور حتى توقف.
   - لا علاقة ظاهرة بحملة أخرى أُنشئت في الحساب بعد بدء الهبوط.
5. **CrUX غير متاح من هنا.** CrUX API يحتاج API key، والطلب بـ OAuth رجع 400، وبدون مفتاح رجع 403. وحصة PageSpeed المجانية منتهية (429). لا أقدّر أرقاماً.
6. **642 صفاً ليست حدّ الطلب.** بحد 25,000 رجع 639 استعلاماً و1,567 صف query×page. لكن مجموع ظهور الاستعلامات الراجعة 23,939 من 57,987 للموقع (41%). يعني **59% من الظهور في استعلامات يُخفيها Google** (anonymized) ولا يعطيها أي API.

---

## 1) الطلب على «قهوجيين»
المصدر: Google Ads API `generateKeywordHistoricalMetrics`، شبكة بحث Google، اللغة العربية، متوسط آخر 12 شهراً (افتراضي الـAPI). القيم يقرّبها Google إلى فئات (مثل 3600، 2400، 140).

| الكلمة | السعودية | جدة | الرياض |
|---|---|---|---|
| قهوجيين | 3600 | 140 | 3600 |
| قهوجي | 60500 | 49500 | 6600 |
| قهوجيين جدة | 3600 | 2400 | 140 |
| قهوجي جدة | مدموجة مع «قهوجيين جدة» | مدموجة مع «قهوجيين جدة» | مدموجة مع «قهوجيين جدة» |
| قهوجيين وصبابين | 1600 | 40 | 1300 |
| قهوجيات جدة | 170 | 170 | 10 |
| صبابين قهوة | 1000 | 390 | 390 |
| صبابين قهوة جدة | 260 | 170 | 10 |
| مباشرين قهوة جدة | 720 | 480 | 10 |
| قهوجيين الرياض | 6600 | 50 | 6600 |
| ضيافة مناسبات جدة | 50 | 40 | 10 |
| قهوجي عزاء | لا رقم | لا رقم | لا رقم |

ملاحظات:
- «قهوجي جدة» لم يرجع لها رقم مستقل. الـAPI دمجها كمتغيّر قريب مع «قهوجيين جدة» (closeVariants)، فرقم 2,400 لجدة يشمل الصيغتين.
- «قهوجي» (49,500 بحث في جدة) كلمة عامة، ومقهى اسمه «قهوجي» يزاحم فيها كما ذكرتَ.
- «قهوجي عزاء»: الـAPI لم يعطِ لها رقماً.

### «قهوجيين» مطابقة تامة، Search Console، مقسومة بالصفحة (2026-08-22 → 2026-11-19)
| الصفحة | الظهور | النقرات | الترتيب الموزون | أيام الظهور |
|---|---|---|---|---|
| /qahwajiin-riyadh | 3146 | 2 | 8.5 | 90 |
| /qahwajiin-jeddah | 1588 | 0 | 17.9 | 88 |
| / | 823 | 0 | 22.9 | 76 |
| /services | 732 | 0 | 36.7 | 86 |
| /locations/الرياض | 224 | 0 | 20.7 | 31 |
| /qahwajiin-makkah | 184 | 1 | 25.4 | 33 |
| /qahwajiin-madinah | 163 | 0 | 67.6 | 50 |
| /qahwajiin-dammam | 105 | 0 | 65.5 | 28 |
| /qahwajiin-abha | 19 | 0 | 121.4 | 11 |
| /qahwajiin-taif | 9 | 0 | 223.6 | 8 |
| /sababin-qahwa-riyadh | 7 | 0 | 76.1 | 6 |
| /qahwajiin-yanbu | 6 | 0 | 192.0 | 4 |
| /diyafa-alyawm-alwatani | 1 | 0 | 265.0 | 1 |
| /sababin-qahwa-jeddah | 1 | 0 | 276.0 | 1 |

بالشهر (الظهور / الترتيب الموزون بالظهور):
| الصفحة | 2026-08 | 2026-09 | 2026-10 | 2026-11 |
|---|---|---|---|---|
| /qahwajiin-riyadh | 246 ظ / 10.6 | 1052 ظ / 8.4 | 1006 ظ / 7.4 | 842 ظ / 9.2 |
| /qahwajiin-jeddah | 87 ظ / 20.0 | 537 ظ / 22.2 | 410 ظ / 16.7 | 554 ظ / 14.4 |
| / | 214 ظ / 12.4 | 439 ظ / 22.1 | 104 ظ / 42.3 | 66 ظ / 32.2 |
| /services | 49 ظ / 59.2 | 200 ظ / 45.8 | 226 ظ / 30.0 | 257 ظ / 31.2 |

السلسلة اليومية الكاملة، يوم × صفحة (الظهور والترتيب): `1b_qahwajiin_daily_pivot.csv` والملف الخام `1b_gsc_qahwajiin_daily_by_page.json` (513 صفاً).

## 2) أثر نشر 2026-09-23 على البحث العضوي
المصدر: Search Console searchAnalytics. الفترة الثالثة هي آخر 28 يوماً متاحاً (10-23 → 11-19).

| الفترة | النقرات | الظهور | CTR | الترتيب |
|---|---|---|---|---|
| 2026-08-26..09-22 | 415 | 17253 | 2.41% | 7.35 |
| 2026-09-24..10-21 | 395 | 15181 | 2.60% | 7.14 |
| 2026-10-23..11-19 | 390 | 22170 | 1.76% | 7.87 |

أعلى 10 صفحات ظهوراً (النقرات / الظهور / CTR / الترتيب):
| الصفحة | 2026-08-26..09-22 | 2026-09-24..10-21 | 2026-10-23..11-19 |
|---|---|---|---|
| /sababin-qahwa-riyadh | 27 / 1837 / 1.5% / 6.8 | 16 / 1617 / 1.0% / 5.8 | 23 / 2572 / 0.9% / 10.6 |
| / | 60 / 2865 / 2.1% / 13.3 | 45 / 1396 / 3.2% / 12.6 | 43 / 1722 / 2.5% / 12.2 |
| /qahwajiin-jeddah | 13 / 1369 / 0.9% / 12.1 | 10 / 1341 / 0.7% / 11.6 | 22 / 2275 / 1.0% / 10.4 |
| /qahwajiin-riyadh | 9 / 1499 / 0.6% / 8.9 | 7 / 1202 / 0.6% / 8.2 | 5 / 1879 / 0.3% / 9.7 |
| /diyafa-munasabat-jeddah | 54 / 1591 / 3.4% / 8.1 | 43 / 1635 / 2.6% / 7.4 | 35 / 1267 / 2.8% / 7.2 |
| /diyafa-munasabat-riyadh | 23 / 1222 / 1.9% / 8.8 | 20 / 1157 / 1.7% / 7.4 | 20 / 1817 / 1.1% / 7.1 |
| /sababin-qahwa-jeddah | 23 / 1127 / 2.0% / 5.4 | 15 / 768 / 2.0% / 7.1 | 16 / 1333 / 1.2% / 15.6 |
| /qahwajiin-dammam | 7 / 320 / 2.2% / 9.7 | 2 / 235 / 0.9% / 7.1 | 7 / 2385 / 0.3% / 9.0 |
| /diyafa-munasabat-dammam | 14 / 734 / 1.9% / 11.0 | 23 / 728 / 3.2% / 9.2 | 18 / 881 / 2.0% / 8.6 |
| /diyafa-munasabat-madinah | 43 / 638 / 6.7% / 9.4 | 28 / 514 / 5.4% / 7.2 | 33 / 866 / 3.8% / 7.3 |

قراءة الأرقام:
- **صعدت بعد النشر:** /qahwajiin-jeddah (ترتيب 12.1 ← 10.4، ونقرات 13 ← 22).
- **نزلت:**
  - /sababin-qahwa-jeddah (ترتيب 5.4 ← 15.6 في الفترة الثالثة).
  - /sababin-qahwa-riyadh (6.8 ← 10.6).
- /qahwajiin-dammam: ظهورها قفز 235 ← 2,385 بلا نقرات تُذكر.

## 3) الصفحات السبع + صفحتا المقارنة
المصدر: URL Inspection API، 2026-11-21.

| الصفحة | الحكم | حالة التغطية | آخر زحف | الزحف بهوية | الرابط الأصلي عند Google | الصفحات المُحيلة | في خرائط الموقع |
|---|---|---|---|---|---|---|---|
| /qahwajiin | NEUTRAL | URL is unknown to Google | — | — | — | لا شيء | لا شيء |
| /qahwajiyat-sababat-jeddah | NEUTRAL | Discovered - currently not indexed | — | — | — | لا شيء | image-sitemap.xml, sitemap.xml, sitemap_index.xml |
| /mubashirin-qahwa-jeddah | NEUTRAL | Discovered - currently not indexed | — | — | — | لا شيء | image-sitemap.xml, sitemap.xml, sitemap_index.xml |
| /coffee-break-sharikat-jeddah | NEUTRAL | Discovered - currently not indexed | — | — | — | لا شيء | image-sitemap.xml, sitemap.xml, sitemap_index.xml |
| /contact | NEUTRAL | Discovered - currently not indexed | — | — | — | /, /locations | sitemap.xml, sitemap_index.xml |
| /locations/مكة-المكرمة | NEUTRAL | Discovered - currently not indexed | — | — | — | /locations/الرياض, /locations/ينبع | sitemap.xml, sitemap_index.xml |
| /offerings | NEUTRAL | Duplicate without user-selected canonical | 2026-09-09T05:15:50Z | MOBILE | https://www.afpintegra.pe/iniciar-sesion | /qahwajiin-yanbu, / | image-sitemap.xml, sitemap.xml, sitemap_index.xml |
| /diyafa-alyawm-alwatani | PASS | Submitted and indexed | 2026-11-02T22:37:29Z | MOBILE | https://keifaldiafa.com/diyafa-alyawm-alwatani | / | sitemap.xml, sitemap_index.xml |
| /diyafa-a3ras-jeddah | PASS | Submitted and indexed | 2026-10-27T15:23:15Z | MOBILE | https://keifaldiafa.com/diyafa-a3ras-jeddah | لا شيء | image-sitemap.xml, sitemap.xml, sitemap_index.xml |

ملاحظات:
- **الإحالات:** لا يذكر Google أي صفحة مُحيلة لـ /qahwajiin و/qahwajiyat-sababat-jeddah و/mubashirin-qahwa-jeddah و/coffee-break-sharikat-jeddah، ولا لصفحة المقارنة /diyafa-a3ras-jeddah المفهرسة.
- **/qahwajiin:** الـAPI لا يربطها بأي خريطة، رغم أنها في sitemap.xml الحي.
- **/offerings:** آخر زحف 2026-09-09 (قبل النشر الجديد). الرابط الأصلي الذي اختاره Google خارجي: afpintegra.pe.

### حالة الخرائط وإرسالها
- sitemap.xml:
  - آخر إرسال 2026-07-22، آخر تنزيل 2026-11-14، 48 رابطاً، 0 أخطاء.
  - حقل indexed يرجع 0 دائماً في هذا الـAPI، فلا يُعتمد عليه.
- **إعادة الإرسال: HTTP 403 `ACCESS_TOKEN_SCOPE_INSUFFICIENT`.** المفتاح الحالي يحمل `webmasters.readonly` فقط.
  - الحل: يولّد المالك رمزاً جديداً بسكوب `https://www.googleapis.com/auth/webmasters`. أو يرسلها يدوياً: Search Console ← خرائط الموقع ← إرسال `sitemap.xml`.
  - الرد كاملاً في `3_sitemap_submit_response.json`.

### ترتيب طلب الفهرسة اليدوي للمالك (Search Console ← فحص الرابط ← طلب الفهرسة)
الترتيب حسب الطلب الفعلي على كلمة كل صفحة:
1. https://keifaldiafa.com/qahwajiin
2. https://keifaldiafa.com/mubashirin-qahwa-jeddah (480 بحثاً شهرياً في جدة)
3. https://keifaldiafa.com/qahwajiyat-sababat-jeddah (170 في جدة)
4. https://keifaldiafa.com/offerings
5. https://keifaldiafa.com/coffee-break-sharikat-jeddah
6. https://keifaldiafa.com/locations/مكة-المكرمة
7. https://keifaldiafa.com/contact

## 4) توقف الإعلانات — الحملة [رقم محذوف] (قراءة فقط)
المصدر: Google Ads API v24، توقيت Asia/Riyadh. التحويلات = الإجراءات الأساسية (واتساب + الاتصال).

[الجدول اليومي للإعلانات محذوف من النسخة العامة — المستودع عام. الملخص أدناه يكفي.]

ملخص قبل النشر وبعده:
| الفترة | الظهور | النقرات | التحويلات | معدل التحويل |
|---|---|---|---|---|
| 09-15 → 09-22 (قبل النشر) | 1100 | 121 | 35.4 | 29.3% |
| 09-23 → 09-30 | 881 | 96 | 9.0 | 9.4% |
| 10-01 → 10-11 | 330 | 41 | 0.0 | 0.0% |

الحالة الآن:
- **الحملة:**
  - status ENABLED، serving_status SERVING.
  - **primary_status LIMITED، primary_status_reasons ["UNKNOWN"].**
  - المزايدة: MAXIMIZE_CONVERSIONS بهدف tCPA. الميزانية اليومية غير مشتركة. [القيم محذوفة من النسخة العامة]
- **الحساب:**
  - ENABLED، والفوترة APPROVED.
  - account budget: INFINITE / FOREVER، بلا اقتراح معلّق.
  - conversion_tracking_status: MANAGED_BY_SELF.
- **الإعلانات:** 17 إعلاناً مفعّلاً كلها APPROVED / REVIEWED / ELIGIBLE، بلا أي policy topic.
- **التوصيات (recommendation):** لا شيء.
- **تنبيهات الدفع وإشعارات الحساب:** **غير متاح.** لا يعرضها Google Ads API.

[فقرة عن حملة أخرى في الحساب — محذوفة من النسخة العامة. خلاصتها: لا علاقة لها بالتوقف.]

اختبار الوسم (Playwright، جوال، 2026-11-21، يوم واحد فقط):
- النقر على رابط واتساب يرسل طلب تحويل إلى `pagead/conversion/[معرّف]` بالـlabel الصحيح `NIEKCOWDzPYYELfEhaQp`.
- بدون موافقة الكوكيز يُرسل بـ gcs=G100، أي ping بلا كوكيز.
- لا أستطيع إثبات أن Google يحتسبه تحويلاً، لأن الحملة بلا نقرات إعلانية منذ 10-11.

## 5) السرعة الحقيقية (CrUX)
**غير متاح.**
- CrUX API: الطلب بـ Bearer token رجع 400 INVALID_ARGUMENT، وبدون مفتاح رجع 403 PERMISSION_DENIED.
- PageSpeed Insights API (الذي يضم loadingExperience): رجع 429، أي انتهت الحصة اليومية المجهولة.
- لإكماله: ينشئ المالك API key في مشروع keif-diafa-api ويفعّل Chrome UX Report API.
- للمرجع فقط، وهو مختبر لا CrUX: قياسي السابق بـ Lighthouse 12 (جوال، 2026-11-21) لصفحة /qahwajiin-jeddah أعطى Perf 82، LCP 2.6s، TBT 550ms، CLS 0.

## 6) حدّ التصدير
المصدر: searchAnalytics بحد rowLimit 25000 مع ترقيم صفحات، للفترة 2026-08-22 → 2026-11-19.

| السحب | الصفوف | مجموع الظهور | مجموع النقرات |
|---|---|---|---|
| query | 639 | 23,939 | 293 |
| query × page | 1,567 | 30,185 | 305 |
| الموقع كله (بلا أبعاد) | — | 57,987 | 1,271 |

الرقم 639 هو كل ما يعطيه Google، وليس حدّ الطلب. الفرق كله استعلامات مخفية للخصوصية لا يعيدها أي API. الملفات الكاملة: `6_gsc_queries_90d_full.json` و`6_gsc_query_page_90d_full.json`.

---

## ما أقبله من تصحيحاتك
- الروابط الداخلية لا تفسّر عدم الفهرسة. يدعم ذلك أن /contact ليس لها عند Google إلا صفحتان مُحيلتان، رغم أن عليها روابط من 47 صفحة.
- عدم تحويل العنوان إلى المفرد، وعدم بناء صفحات السعر والرقم والأحياء. بيانات Keyword Planner أعلاه تؤيد ذلك.
- «قهوجيين» تظهر لها 14 صفحة لا 4.

## بعد كل نشر
أرسل قائمة الروابط. لكل رابط أجلبه بهوية Googlebot للجوال، وأعطيك العنوان والوصف و H1 و canonical و robots، ثم أفحص فهرسته، ثم أعيد إرسال الخريطة إذا جدّد المالك المفتاح بسكوب الكتابة.

## الملفات الخام (في الحزمة المضغوطة)
1_keyword_planner_historical.json · 1b_gsc_qahwajiin_daily_by_page.json · 1b_qahwajiin_daily_pivot.csv · 2_period_compare.json · 3_url_inspection_9pages.json · 3_sitemap_submit_response.json · 4_ads_stop_diagnosis.json · 4b_conversions_by_action_daily.json · 5_crux_attempts.json · 6_gsc_queries_90d_full.json · 6_gsc_query_page_90d_full.json
