# تقرير 2026-09-11 — المنافسون والمعايير العالمية (فهرسة · Google Ads · GBP · توثيق · تسويق) — فجوات مُقاسة وأولويات

> بأمر المالك 2026-09-11: «تبحث وتحلل المنافسين والمعايير العالمية… لنخليه الأفضل في العالم من ناحية الفهرسة وفي تخصصه». كل معيار من **مصدر رسمي مقروء نصاً اليوم** (الرابط + تاريخ آخر تحديث للصفحة)، وكل فجوة **مُقاسة بأمر** على البناء الجديد (`next start 3111`) أو على الإنتاج الحي. **لا كود عُدِّل.** يبني على تقارير `allpro` 00–30 (لا يكررها).

## 0. الخلاصة في 5 أسطر
1. **السوق**: صفحة واحدة عميقة (kahwgysa · Wix · ~2,375 كلمة · 45 h2) تتصدر «قهوجيين جدة»؛ Instagram/حراج يحتلون 30–40% من النتائج؛ **موقعنا الحي غائب** عن «قهوجيين جدة» و«صبابين قهوة جدة» (أول 10) وحاضر #2 في «ضيافة مناسبات جدة» فقط.
2. **السبب الجذري ما زال حياً**: الإنتاج يخدم الموقع القديم (2 يوليو) — كل ما بُني منذ سبتمبر غير منشور. **النشر هو أكبر رافعة فهرسة الآن.**
3. **Google 2026 رسمياً**: لا llms.txt · لا chunking · لا schema خاص للـAI — «المحتوى غير السلعي + بنية تقنية نظيفة + GBP» هي الطريق (ai-optimization-guide · 2026-07-10). **صفحاتنا المحلية (تشابه 92–94%) تقع تحت تعريف doorway/scaled content حرفياً** → المرحلة 7 ليست تحسيناً بل إزالة خطر.
4. **فجوات جديدة مُكتشفة** (ليست في التقارير السابقة): لا سياسة خصوصية رغم Pixels (PDPL ساري · غرامة حتى 5M ر.س) · لا موافقة كوكيز · `lastmod` كاذب · `image` واحد فقط في Organization (Google يوصي 3 نسب) · لا `VideoObject` لفيديو الهيرو · لا مراجعات مرئية في الموقع رغم GBP 4.5★/49.
5. **التوثيق**: مستودعنا **يتجاوز** معيار AGENTS.md العالمي (agents.md/Linux Foundation) — الفجوة الوحيدة: طول AGENTS.md (65 سطراً ✓ < 200) وعدم وجود `docs/adr/` بصيغة ملف‑لكل‑قرار (لدينا DECISIONS.md جدولاً — مقبول).

---

## 1. المنافسون — SERP حي 2026-09-11 (hl=ar، بلا تخصيص موقع)

### 1.1 من يتصدر
| الاستعلام | #1 | #2–#4 | موقعنا |
|---|---|---|---|
| قهوجيين جدة | **kahwgysa.com** | حراج · suar.me · Instagram | ❌ غير موجود في أول 10 |
| صبابين قهوة جدة | **حراج** | noblesoiree · Instagram · hevaldiafa | ❌ غير موجود |
| ضيافة مناسبات جدة | Instagram (دليل جدة) | **keifaldiafa.com #2** · رتيل · **asoulaldiafa #5** | ✅ #2 |
| قهوجيين الرياض | Instagram | qahwajie · Instagram Reel · otlobmehany | ❌ |
| كيف الضيافة جدة | keifaldiafa.com | Instagram · Facebook | ✅ #1 (علامة) |

**ملاحظة استراتيجية**: `asoulaldiafa.com` (مشروع المالك الآخر) يظهر #4–#5 في استعلامَي «ضيافة مناسبات جدة» و«كيف الضيافة جدة» بنفس slug `/diyafa-munasabat-jeddah` — **تنافس داخلي (cannibalization)** بين موقعَي المالك على نفس النية. قرار مالك: تمايز النية أو ربط الكيانين (sameAs/parentOrganization).

### 1.2 تشريح المتصدرين (curl + قياس فعلي)
| الموقع | المنصة | كلمات عربية | h2 | صور | أسعار | JSON-LD | Pixels | ملاحظة |
|---|---|---|---|---|---|---|---|---|
| kahwgysa.com | **Wix** · 1.59MB HTML | **2,375** | **45** | 23 | 0 | LocalBusiness+PostalAddress | gtag | «خبرة 20 عاماً»، 15 رابط tel + 10 واتساب، عدّادات مكسورة (+0 · 0.0/0) |
| qahwajie.com/قهوجي-جدة | WordPress | 1,713 | 11 | 8 | 4 | Article+Breadcrumb+WebPage | — | تاريخ نشر ظاهر (2026-06-30) → Google يعرض date |
| noblesoiree.com | مخصص | 1,107 | 20 | 29 | 1 | Organization | gtag | 17 واتساب · 13 tel · robots max-image-preview |
| alqahwaalmalakiya.com | مخصص | 615 | 4 | 47 | 1 | LocalBusiness+**Service+Offer**+City | — | خفيف نصاً، schema خدمات |
| asoulaldiafa.com/diyafa-… | Next | 657 | 8 | 5 | 0 | FAQPage+GeoCircle+ImageObject… | gtag | مشروع المالك |
| **keifaldiafa.com/diyafa-… (الحي)** | Next قديم | 668 | 10 | 22 | **4** («عرض سعر») | CateringService+FAQPage+… | gtag+FB+TikTok | **FAQPage محذوفة في البناء الجديد** (Google أوقفتها) |
| **البناء الجديد (محلي)** qahwajiin-jeddah | Next v6.9 | **~1,020** | — | 13+ | 0 | Organization/CateringService/WebSite/Breadcrumb/Service/WebPage | gtag(+pixels بشرط ENV) | مطابق للنموذج |

**ما نتفوق به بعد النشر**: صور حقيقية بأسماء جهات (المستوى 1) · بنية Next SSG · 43 مساراً بسيو نظيف · a11y 100 · لا keyword stuffing (المنافسون يكررون الأرقام في العناوين = مخالفة صريحة لسياسة Google).
**ما يتفوقون به**: عمق نصي أكبر بمرتين (kahwgysa) · ظهور Instagram/TikTok في SERP · تاريخ نشر ظاهر · أرقام هاتف في العنوان (تكتيك CTR — لا نقلده: Google يصنفه keyword stuffing «lists of phone numbers»).

---

## 2. معايير Google — مقروءة نصاً اليوم مع الفجوات

### 2.1 سياسات السبام (`/essentials/spam-policies`)
- **Doorway abuse**: «صفحات متشابهة جوهرياً… تستهدف مدناً» — **تطابق حرفي مع مصفوفة 3×8 عندنا** (S12 = 92–94%). خط الأساس 185 زوجاً. **الخطر**: عقوبة على مستوى الموقع. **الإغلاق**: المرحلة 7 (≤45%) أو دمج/إعادة توجيه 301 لصفحات المدن الضعيفة إلى صفحة المدينة — **قرار مالك** (PLAN §7).
- **Scaled content abuse**: «صفحات كثيرة… بتحويلات آلية (synonymizing)» — قالبنا يستبدل `${ar}` فقط. نفس الحكم.
- **Keyword stuffing**: «قوائم أرقام هواتف بلا قيمة… كتل نصية تسرد مدناً» — الفوتر عندنا يسرد 8 مدن كروابط تنقل (مقبول: navigation)، لكن قسم «الأحياء» (8 أحياء نصاً) في كل صفحة محلية **حدّي** — يُفضَّل ربطه بمحتوى (قاعات/مواقع فعلية).

### 2.2 المحتوى المفيد + E-E-A-T (`/fundamentals/creating-helpful-content`)
- «**Who**: هل واضح من كتب المحتوى؟ byline؟» → لا byline ولا صفحة مؤلف. `/about` 309 كلمة فقط (أقل صفحة). **فجوة E-E-A-T**.
- «**How**: صور تثبت العمل» → ✅ قوتنا الكبرى (314 صورة حقيقية موسومة بالجهات).
- «لا عدد كلمات مفضل» — لكن «substantial, complete» → صفحاتنا المحلية 1,020 كلمة **مكررة** = ليست substantial بمعيارهم.

### 2.3 دليل الـAI الرسمي (`/fundamentals/ai-optimization-guide` · 2026-07-10)
- **صريح**: «لا تحتاج llms.txt … لا chunking … لا schema خاص … لا تعِد الكتابة للـAI» → ✅ نحن متوافقون (لا llms.txt عندنا — التقرير 12 القديم أوصى به وهو **ملغى رسمياً**).
- «query fan-out» + «non-commodity content» → صفحات النوايا المكتوبة يدوياً (مثل `/mubashirin-qahwa-jeddah` 1,156 كلمة، تشابه 36–40%) هي **النموذج الصحيح** للمرحلة 7.
- «Google Business Profile يساعد الظهور في AI responses» → GBP إلزامي.
- شرط جديد: الموقع يجب أن يكون **مُضمَّناً في ميزات الـAI داخل Search Console** (`webmasters/answer/16908024`) → **يتحقق المالك** في GSC.

### 2.4 LocalBusiness structured data (`…/structured-data/local-business` · 2026-09-08)
| الخاصية | التوصية الرسمية | عندنا (البناء الجديد) | حكم |
|---|---|---|---|
| `address` | مطلوب (قدر الإمكان) | مدينة+دولة فقط (قرار موثق S8: لا streetAddress) | ✅ مقبول لـSAB |
| `geo` | 5 خانات عشرية | ✅ 21.4858/39.1925 | ✅ |
| `image` | **3 نسب 1×1 · 4×3 · 16×9** | **1 فقط** | ⚠️ فجوة |
| `priceRange` | نص <100 | `$$-$$$$` | ✅ |
| `openingHoursSpecification` | موصى | ✅ 1 | ✅ |
| `aggregateRating/review` | **فقط لمواقع تجمع مراجعات عن غيرها** | 0 | ✅ صحيح (self-serving ممنوع) |
| `telephone`/`url`/`sameAs` | ✅ | ✅ 3/3/2 | ✅ |
| `@type` أكثر تخصصاً | «use the most specific subtype» | `CateringService` | ✅ |

### 2.5 الصور (`/appearance/google-images`)
- `<img>` قياسي + alt وصفي + اسم ملف وصفي + image sitemap + `og:image`/`primaryImageOfPage` → ✅ كلها (274 في الخريطة · أسماء ملفات وصفية لاتينية · alt الكتالوج).
- «Google لا يفهرس صور CSS» → هيرو الرئيسية عبر `<picture><img>` ✅ · **شرائح الهيرو المحلية**: تحقق أنها `<img>` لا background (D131 نعم).
- **فيديو**: hero-bg.mp4 بلا `VideoObject` — Google يذكر «video SEO» ضمن الـAI guide. فجوة صغيرة (فيديو زخرفي — قرار: تجاهل أو وسم).

### 2.6 Core Web Vitals (`/appearance/core-web-vitals` · 2025-12-10)
- العتبات: LCP ≤2.5s · INP <200ms · CLS <0.1 (عند 75%). **PSI API تجاوز الحصة اليوم** — يُقاس غداً على الرابط الحي بعد النشر (CrUX الحقيقي أهم من Lighthouse المحاكى — B1).
- الإنتاج الحي: HTML 276KB · TTFB 0.9s (Vercel بعيد؟) مقابل asoulaldiafa 0.17s — **يُراجع إقليم Vercel** (`fra1`/`dxb1`).

### 2.7 Google Ads
- **Destination Requirements** (`adspolicy/answer/6368661`): يعمل · لا mismatch · crawlable لـAdsBot · تجربة · **محتوى أصلي** («replicated without adding value» = خطر مطابق لصفحات المدن المكررة إذا استُعملت كصفحات هبوط).
- **Quality Score** (`google-ads/answer/6167118` + `6167130`): 3 مكوّنات — Expected CTR · Ad relevance · **Landing page experience** (relevance, transparency, mobile, speed). «الكلمة حرفياً لا يلزم وجودها» لكن الرسالة يجب أن تتطابق → صفحات النوايا أفضل وجهات (بيانات allpro: الرئيسية 722 ر.س/تحويل مقابل 11–15 لصفحات الخدمة).
- **Message assets → WhatsApp** (ppc.land/omnichat 2025): Google Ads يدعم أصول رسائل واتساب مباشرة من الإعلان + WhatsApp Conversion Import — **قناة غير مستغلة** (99% جوال + هدف واتساب).
- التتبع: gtag مؤجّل (D141) — **تحذير**: يجب مراقبة «لا تتوفر علامة» في Ads أسبوعاً بعد النشر (B2).

### 2.8 Google Business Profile (`business/answer/7091`)
- الترتيب المحلي = **Relevance + Distance + Prominence** (المراجعات وعددها + الروابط). لا يُشترى.
- موقعنا: GBP موجود (4.5★/49 · cid 15151944507933206223 يعمل 302→maps) لكن **لا مراجعة واحدة معروضة في الموقع** ولا زر «قيّمنا على Google». المنافسون أيضاً لا يعرضون — **فرصة تمايز**: زر مراجعة + عرض تقييم GBP كنص (لا AggregateRating).

### 2.9 الخصوصية — PDPL السعودي (kukie.io 2026-04-26 · نافذ منذ 2024-09)
- الموافقة **قبل** تحميل كوكيز التحليلات/الإعلانات · غرامة حتى **5M ر.س** · SDAIA أصدرت 48 قراراً تنفيذياً.
- **عندنا**: gtag + Meta Pixel + TikTok Pixel (على الحي؛ وفي الجديد بشرط ENV) **بلا بانر موافقة ولا سياسة خصوصية** (`/legal` = حقوق صور فقط · `/privacy` 404). **مخالفة قانونية محتملة + مطلب Google Ads (سياسة الشفافية)**. أولوية قانونية عالية — **قرار مالك** (Consent Mode v2 يحفظ قياس Ads بعد الرفض).

---

## 3. معايير التوثيق العالمية — مقارنة
| المعيار | المصدر | حالنا | حكم |
|---|---|---|---|
| AGENTS.md في الجذر · ≤200 سطر · أوامر setup/test · أسلوب · أمن | agents.md (Linux Foundation, 60k مشروع) | AGENTS.md 65 سطراً + ترتيب قراءة + قواعد حمراء + بنية + بداية الجلسة | ✅ يتجاوز |
| «الأقرب يفوز» للملفات المتداخلة | agents.md | مستودع واحد — لا حاجة | ✅ |
| ADR: قرار لكل ملف · معرّف ثابت · يُنسَخ لا يُعدَّل | ADR/BOOTSTRAP §11 | `DECISIONS.md` جدول D109–D147 append-only | ✅ (صيغة جدول بدل ملفات — مقبول لحجمنا) |
| HANDOFF/STATE مؤرخ | BOOTSTRAP §11 | AGENT-STATE.md + reports/ | ✅ |
| proof.json للأرقام | BOOTSTRAP §11 | ✅ + S10 آلي | ✅ فريد |
| owner-messages حرفياً | BOOTSTRAP §11 | ✅ 16 ملفاً | ✅ |
| CI على كل push | BOOTSTRAP §11 | ✅ quality.yml (المالك يتحقق من Actions) | ✅ |
| ملفات تاريخية مُعلَّمة | — | ✅ شارات على CLAUDE/AI_INSTRUCTIONS | ✅ — لكن `docs/DEPLOYMENT.md` **غير مُعلَّم وقديم** |

**الحكم**: التوثيق بمستوى عالمي؛ فجوتان: `DEPLOYMENT.md` قديم (يذكر SocialClient المحذوف) · تقارير الجذر القديمة (`*AUDIT*.md`) تُشوّش الوكيل الجديد — تُنقل إلى `docs/archive/` (قرار صغير).

---

## 4. التسويق — ما يلزم خارج الكود
1. **GBP**: صور من الكتالوج (المستوى 1) + منشورات أسبوعية + طلب مراجعات بعد كل مناسبة (رابط مباشر). Prominence = المراجعات.
2. **Instagram/TikTok**: يحتلان 3–4 من أول 10 نتائج في كل استعلام — حساب @keifaldiafa موجود (Instagram يظهر #2 على اسم العلامة) لكن لا يظهر على «قهوجيين جدة». Reels بعناوين النية («قهوجيين جدة») + ربط bio بـ `/links`.
3. **حراج**: #1–#2 على «صبابين قهوة جدة» — إعلان مجاني بمحتوى حقيقي + رابط = ظهور فوري.
4. **Google Ads**: أصول رسائل واتساب + WhatsApp Conversion Import · صفحات النوايا كوجهات لا الرئيسية · إصلاح «الاتصال» (تم 0b382a2).
5. **الأدلة**: otlobmehany · اطلب مهني — حاضران في SERP الرياض.

---

## 5. الفجوات المُقاسة على البناء الجديد — مرتبة بالأثر (من يقرر)
| # | الفجوة | الدليل | الأثر | من يقرر | الجهد |
|---|---|---|---|---|---|
| G1 | **الإنتاج قديم** — كل البناء غير منشور | curl: `/links` 404 · font-tajawal في الحي | 🔴 كل شيء | المالك (A3) | نشر |
| G2 | **صفحات المدن = doorway بتعريف Google الحرفي** (92–94%) | spam-policies §Doorway + S12 | 🔴 خطر عقوبة موقع | المالك (المرحلة 7) | كبير |
| G3 | **لا سياسة خصوصية/موافقة كوكيز** مع 3 أنظمة تتبع | `/privacy` 404 · PDPL | 🔴 قانوني + Ads | المالك | متوسط |
| G4 | `sitemap lastmod` = 2026-07 لصفحات أُعيد بناؤها 2026-09 | sitemap.ts | 🟠 إشارة كاذبة لـGoogle | تقني (D148) | صغير |
| G5 | Organization/LocalBusiness `image` نسبة واحدة | Google: 3 نسب | 🟠 knowledge panel | تقني | صغير |
| G6 | لا مراجعات مرئية + لا زر «قيّمنا» رغم GBP 4.5★/49 | grep | 🟠 Prominence + تحويل | المالك (نص) + تقني | صغير |
| G7 | `/about` 309 كلمة · لا byline · لا قصة مؤسس | E-E-A-T «Who» | 🟠 ثقة B2B | المالك (محتوى) | متوسط |
| G8 | تنافس داخلي asoulaldiafa ↔ keifaldiafa على نفس النية | SERP #2 و#5 | 🟠 تشتيت | المالك | قرار |
| G9 | Pixels FB/TikTok مشروطة بـENV — غير موثق أي ENV مضبوط في Vercel | GoogleAnalytics.tsx | 🟡 تتبع | المالك (يتحقق) | — |
| G10 | فيديو الهيرو بلا VideoObject | grep | 🟡 | تقني | صغير |
| G11 | TTFB الحي 0.9s مقابل 0.17s للمنافس | curl | 🟡 CWV | تقني (إقليم Vercel) | صغير |
| G12 | `DEPLOYMENT.md` قديم · تقارير جذر تشوّش | ls | 🟡 توثيق | تقني | صغير |
| G13 | حزم `motion`/`embla` بلا استخدام | grep 0 | 🟢 نظافة | تقني | صغير |

---

## 6. المصادر (مقروءة نصاً 2026-09-11)
- https://developers.google.com/search/docs/essentials/spam-policies
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- https://developers.google.com/search/docs/fundamentals/ai-optimization-guide (آخر تحديث 2026-07-10)
- https://developers.google.com/search/docs/appearance/structured-data/local-business (2026-09-08)
- https://developers.google.com/search/docs/appearance/google-images
- https://developers.google.com/search/docs/appearance/core-web-vitals (2025-12-10)
- https://support.google.com/adspolicy/answer/6368661 (Destination requirements)
- https://support.google.com/google-ads/answer/6167118 · /6167130 (Quality Score)
- https://support.google.com/business/answer/7091 (Local ranking)
- https://agents.md/ (Agentic AI Foundation)
- https://kukie.io/blog/cookie-consent-saudi-arabia-pdpl (2026-04-26 — مصدر ثانوي؛ النص القانوني: SDAIA)
- SERP حي: 5 استعلامات (hl=ar) + curl على 7 مواقع.
- **لم أفحصه**: PSI/CrUX (حصة API منتهية اليوم) · GSC (يحتاج وصول المالك) · حساب Ads (يحتاج وصول المالك).
