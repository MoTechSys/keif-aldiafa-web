# تقرير البحث في مستودعات MoTechSys عن أصول الصور «قبل وبعد» — 2026-09-22

> الكاتب: وكيل الترميز (Claude — Anthropic) — الجلسة 2026-09-22 — بأمر المالك MoTechSys. النوع: **تحليل فقط** (لا تعديل على أي صورة ولا على الكتالوج). المنهج: مسح **برمجي** لكل مستودعات الحساب عبر GitHub REST API (`/user/repos` بكل الانتماءات + `git/trees?recursive=1`)، ثم تنزيل الصور المرشّحة ومطابقتها **بالمحتوى** مع صور الكتالوج الـ314 (pHash/dHash للترشيح → ORB 1500 نقطة + BFMatcher نسبة 0.75 + RANSAC homography لعدّ النقاط المتوافقة)، ثم تحقّق بصري بلوحات جنباً إلى جنب. رمز الوصول لم يُكتب في أي ملف (استُعمل في الذاكرة فقط).

تنفيذاً لرسالة المالك: «ابحث هنا بجميع المستودعات. أنا معي مجلد خاص أو مستودع خاص لهن قبل وبعد التحسين؛ تأكد منهن. وإذا ما لقيت، ارجع للأصل، لمستودع "كيف فرجن 2"».

## 0. الخلاصة

| البند | النتيجة |
|---|---|
| مستودعات الحساب المفحوصة | **72** (عامة + خاصة + عضوية) |
| مستودعات تحوي صور كيف الضيافة | **3** (تفصيلها في §1) |
| مستودع «قبل» (الأصول النظيفة بلا أي علامة) | ✅ موجود: **`keif-v2`** → `public/images/` (322 صورة غير شعارات شركاء) |
| مستودع «بعد» (مختومة ختماً واحداً صحيحاً) | ✅ موجود: **`keif-aldiafa-images-watermarked`** (خاص) — 320 صورة، إنتاج 2026-08-11، `watermarked/` JPEG + `web/` WebP، **نفس أسماء ومسارات keif-v2 حرفياً** |
| مصدر الصور الحالية في الموقع | **`catalog-keif-aldiafa-photots`** (خاص) — `images/` 325 + `web/` 314 — وهي **المعكومة أصلاً** (الشعار المكرّر جاء منها، لا من موقعنا) |
| مطابقة صور الكتالوج الـ314 ↔ أصول keif-v2 | **314/314** (310 آلياً بقوّة ≥30 نقطة متوافقة — وسيطها بالمئات — و4 يدوياً بصرياً) |
| الصور المعكومة الـ175 لها أصل نظيف في keif-v2 | **175/175** ✅ |
| الصور المعكومة الـ175 لها نسخة «بعد» جاهزة في images-watermarked/web | **173/175** (الناقصتان #99 و#106 أصلهما `hero/` المُستثنى من ذاك المستودع بطلب المالك) |

**الحكم:** لا حاجة للرجوع إلى الأصل «كخطة بديلة» — الأصل موجود ومطابق، وفوقه نسخة «بعد» جاهزة بختم واحد. القرار المطلوب من المالك في §5.

## 1. المستودعات الثلاثة ودورها

| # | المستودع | الحالة | المحتوى | الدور | التحقّق |
|---|---|---|---|---|---|
| 1 | `MoTechSys/keif-v2` | خاص | `public/images/` — 393 ملفاً (منها 66 شعار شريك في `partners/` + `hero/` + `badges/` + `watermarks/`) → **322 صورة محتوى** في 36 مجلداً (events 82 · services 95 · equipment 28 · weddings 18 · sweets 14 · dates 12 · …) | **الأصل «قبل»** — صور نظيفة بلا أي علامة مائية | فحص بصري مباشر لعيّنات متعدّدة (#7 منتدى مكة الحلال، #106 لوبي الفندق، #280 أناناس، #308 مانجو، #309/#310 ساندويتش…) — كلها **بلا شعار إطلاقاً** |
| 2 | `MoTechSys/keif-aldiafa-images-watermarked` | خاص | `watermarked/` 320 JPEG q88 (60MB) · `web/` 320 WebP (36MB) · `logo/` (SVG+PNG+wm-mark) · `tools/watermark.py` + `optimize.py` · `reports/report-A..D.md` · `FIHRIS.md` | **«بعد»** — النسخة المختومة الرسمية بتاريخ 2026-08-11 من keif-v2 مباشرة | README يوثّق: «أسماء الملفات ومسارات المجلدات محفوظة حرفياً كما في المصدر — 320/320». العلامة: **طبقتان** (زاوية واضحة في أهدأ ركن 4.3–12.5% من العرض + حماية مركزية خفيفة عتامة 14%) — أي **ختم واحد بارز** + طبقة حماية شفافة، **ليس** شعاراً فوق شعار |
| 3 | `MoTechSys/catalog-keif-aldiafa-photots` | خاص | `images/` 325 · `web/` 314 · `catalog.json` (325 سجلاً بمفاتيح عربية: رقم / الاسم_الجديد / الاسم_القديم / مصدر_النسخة) · `originals/` يحوي **قوائم فقط** لا صوراً | مصدر ملفات `public/images/catalog/` الحالية في الموقع (الأسماء `keif-aldiafa-*.webp` مطابقة) | هذه النسخة **مختومة مرّتين** (175 صورة) كما في تقرير الفحص البصري 2026-09-22؛ أي أن العيب ورثه الموقع من هذا المستودع |

باقي المستودعات الـ69: لا تحوي صور الضيافة (مشاريع أخرى/قوالب/أدوات).

## 2. سلسلة النسب (كيف وصلت الصور إلى الموقع)

```
keif-v2/public/images/*             ← الأصل النظيف (322)
   │  ختم رسمي 2026-08-11 (tools/watermark.py)
   ▼
keif-aldiafa-images-watermarked/{watermarked,web}/*   ← «بعد» بختم واحد صحيح (320)
   │  (إعادة تسمية إلى keif-aldiafa-* + ختم ثانٍ بالعلامة البيضاوية)  ← هنا وقع التكرار
   ▼
catalog-keif-aldiafa-photots/web/*  ← 314 · منها 175 بشعارَين
   │  نسخ 1:1
   ▼
keif-aldiafa-web/public/images/catalog/*  ← الموقع الحالي
```

## 3. كيف تأكّدت من المطابقة

1. **الترشيح:** pHash + dHash (12 بت) لكل صورة كتالوج ضدّ 322 أصلاً → أفضل 12 مرشّحاً.
2. **التثبيت:** ORB (1500 نقطة) + BFMatcher (نسبة Lowe 0.75) + RANSAC homography → عدد النقاط المتوافقة هندسياً. عتبة القبول الآلي ≥30.
3. **النتيجة:** 310/314 ≥30 (غالبها 200–800). الأربع الباقية (#280 أناناس · #308 مانجو · #309 · #310 ساندويتش) صور زخرفية مقطوعة/معاد تأطيرها → حُسمت **بصرياً** بلوحة جنباً إلى جنب (`/tmp/pairs3.jpg`): #280→`fruits/saudi-fresh-pineapple-slices-…` ✓ · #308→`fruits/saudi-fresh-mango-cubes-…` ✓ · #309→`sandwiches/saudi-catering-turkey-sandwich-soft-roll-tomato` ✓ · #310→`sandwiches/saudi-catering-smoked-turkey-cheese-tomato-sandwich` ✓ (المطابق الآلي الأول لـ#310 كان خاطئاً `glass-tea-cup` — صُحّح).
4. **تكرارات مشروعة:** 20 أصلاً يخدم سجلَين في الكتالوج (مثلاً `hosts/dagla/dagla-4` → #4 و#65؛ `hero/hero-desktop` → #99؛ `hero/hero-mobile` → #106) — أي 294 أصلاً مميّزاً لـ314 سجلاً.

**ملف المطابقة الكامل (314 صفاً):** [`2026-09-22-image-sources-mapping.csv`](./2026-09-22-image-sources-mapping.csv) — الأعمدة: `id · catalog_file · publish · watermark_status · keif_v2_source_path · orb_inliers · match_method · has_equivalent_in_images-watermarked/web`.

## 4. جدول الـ175 صورة المعكومة → أصلها النظيف في keif-v2 (`public/images/…`)

| id | ملف الكتالوج | publish | أصل keif-v2 | نقاط | طريقة |
|---|---|---|---|---|---|
| 7 | `keif-aldiafa-event-makkah-halal-forum-qahwaji-lounge-coffee-dates.webp` | yes | `events/saudi-event-vip-reception-makkah-halal-forum-coffee-lounge.webp` | 598 | آلي |
| 17 | `keif-aldiafa-event-umm-al-qura-university-investment-booth-qahwaji-1.webp` | yes | `events/corporate-event-qahwa-service-luxury-catering-basma-emaar.webp` | 1322 | آلي |
| 18 | `keif-aldiafa-event-umm-al-qura-university-investment-booth-qahwaji-2.webp` | yes | `events/corporate-event-formal-reception-umm-al-qura-university-saudi-hosts.webp` | 1268 | آلي |
| 20 | `keif-aldiafa-event-75-years-heritage-company-qahwaji-dates-palm-display-2.webp` | yes | `events/majlis-traditional-attire-dates-tower-ceremonial-coffee-display.webp` | 403 | آلي |
| 24 | `keif-aldiafa-event-al-borg-diagnostics-labs-qahwaji-dates-coffee-1.webp` | yes | `services/artistic/mobile-table/table-2.webp` | 762 | آلي |
| 25 | `keif-aldiafa-event-al-borg-diagnostics-labs-qahwaji-dates-coffee-2.webp` | yes | `services/artistic/mobile-table/table-4.webp` | 804 | آلي |
| 26 | `keif-aldiafa-event-al-borg-diagnostics-labs-qahwaji-dates-coffee-3.webp` | yes | `services/artistic/mobile-table/table-5.webp` | 833 | آلي |
| 28 | `keif-aldiafa-event-al-rayyan-al-makkiya-hotels-sadaa-qahwaji-exhibition.webp` | yes | `events/vip-reception-luxury-catering-millennium-hotels-golden-dallah.webp` | 1202 | آلي |
| 29 | `keif-aldiafa-event-al-safeer-watania-qahwaji-hostess-exhibition.webp` | yes | `events/saudi-event-corporate-al-safir-masked-hospitality.webp` | 614 | آلي |
| 30 | `keif-aldiafa-event-al-wessam-transport-exhibition-booth-qahwaji.webp` | yes | `events/vip-reception-corporate-event-aljar-marina-qahwa-service.webp` | 667 | آلي |
| 31 | `keif-aldiafa-event-alinma-kayan-qahwaji-dallah-exhibition.webp` | yes | `events/saudi-event-conference-catering-bci-counter-ceremonial-coffee.webp` | 1172 | آلي |
| 35 | `keif-aldiafa-event-alrifadah-pilgrims-services-qahwaji-exhibition.webp` | yes | `events/exhibition-alrifadah-pilgrims-services-arabic-coffee-ceremony.webp` | 903 | آلي |
| 36 | `keif-aldiafa-event-alwagehat-algharbiya-contracting-qahwaji-dates.webp` | yes | `events/saudi-event-qahwa-service-hospitality-staff-exhibition-booth.webp` | 583 | آلي |
| 38 | `keif-aldiafa-event-amjad-alsalam-hotels-qahwaji-exhibition.webp` | yes | `events/exhibition-hospitality-staff-almadina-hotel-resorts-saudi-event.webp` | 903 | آلي |
| 39 | `keif-aldiafa-event-anjum-hotel-makkah-qahwaji-exhibition.webp` | yes | `events/royal-protocol-vip-reception-makkah-hotel-towers-majlis.webp` | 1147 | آلي |
| 40 | `keif-aldiafa-event-basma-emaar-group-umrah-exhibition-qahwaji.webp` | yes | `events/official-ceremony-hospitality-staff-umm-al-qura-exhibition.webp` | 1189 | آلي |
| 41 | `keif-aldiafa-event-bci-basic-chemical-industries-qahwaji-dates-exhibition.webp` | yes | `events/riyadh-event-vip-reception-alinma-booth-ceremonial-coffee.webp` | 968 | آلي |
| 43 | `keif-aldiafa-event-bon-cafe-qahwaji-black-daglah-exhibition.webp` | yes | `events/qahwa-service-bon-cafe-arabic-coffee-ceremony-corporate.webp` | 828 | آلي |
| 44 | `keif-aldiafa-event-brunello-cucinelli-de-beers-mall-qahwaji-red-shemagh.webp` | yes | `events/luxury-catering-foot-locker-sneaker-host-ceremonial.webp` | 816 | آلي |
| 45 | `keif-aldiafa-event-dallah-albaraka-namaa-qahwaji-exhibition-1.webp` | yes | `events/corporate-event-hospitality-staff-formal-reception-saudi-hosts.webp` | 1134 | آلي |
| 46 | `keif-aldiafa-event-dallah-albaraka-qahwaji-exhibition-2.webp` | yes | `events/ksa-event-exhibition-dallah-albarka-dates-tray-ceremonial.webp` | 891 | آلي |
| 47 | `keif-aldiafa-event-dallah-albaraka-qahwaji-exhibition-3.webp` | yes | `events/conference-catering-saudi-hosts-vip-reception-dallah-albaraka.webp` | 923 | آلي |
| 48 | `keif-aldiafa-event-dallah-albaraka-qahwaji-pouring-coffee-4.webp` | yes | `events/corporate-event-vip-reception-dallah-albaraka-ceremonial-coffee.webp` | 512 | آلي |
| 49 | `keif-aldiafa-event-dallah-haj-transport-booth-qahwaji.webp` | yes | `events/corporate-event-dallah-hajj-transport-ceremonial-coffee.webp` | 674 | آلي |
| 50 | `keif-aldiafa-event-dallah-taibah-hotel-madinah-qahwaji-exhibition.webp` | yes | `events/hotel-event-dallah-taibah-luxury-catering-qahwa-service.webp` | 1039 | آلي |
| 51 | `keif-aldiafa-event-dareen-travel-agency-qahwaji-exhibition.webp` | yes | `events/saudi-event-conference-catering-dareen-travel-agency-indoor.webp` | 1116 | آلي |
| 53 | `keif-aldiafa-event-dragon-city-jeddah-grand-opening-qahwajiin-stage-1.webp` | yes | `events/indoor-event-new-balance-foot-locker-coffee-booth.webp` | 1238 | آلي |
| 54 | `keif-aldiafa-event-dragon-city-jeddah-grand-opening-two-qahwajiin-red-carpet-2.webp` | yes | `events/exhibition-vip-reception-foot-locker-coffee-kiosk.webp` | 1214 | آلي |
| 56 | `keif-aldiafa-event-foot-locker-adidas-red-sea-mall-photo-mirror-customers.webp` | yes | `services/artistic/photo-booth/photo-booth-3.webp` | 1184 | آلي |
| 60 | `keif-aldiafa-event-foot-locker-store-arabic-calligraphy-station.webp` | yes | `services/artistic/artist/artist-7.webp` | 1325 | آلي |
| 64 | `keif-aldiafa-event-hafil-transport-exhibition-booth-qahwaji.webp` | yes | `events/ksa-event-exhibition-hafil-pink-luxury-catering.webp` | 1239 | آلي |
| 66 | `keif-aldiafa-event-iconica-boutique-opening-mall-qahwaji.webp` | yes | `events/saudi-event-vip-reception-luxury-retail-traditional-attire.webp` | 433 | آلي |
| 69 | `keif-aldiafa-event-luxury-menswear-boutique-qahwaji-coffee-sweets.webp` | yes | `events/vip-reception-luxury-catering-menswear-boutique-host.webp` | 1200 | آلي |
| 76 | `keif-aldiafa-event-nahda-park-view-113-real-estate-qahwaji-jeddah.webp` | yes | `events/indoor-event-luxury-catering-ceremonial-coffee-exhibition-reception.webp` | 749 | آلي |
| 77 | `keif-aldiafa-event-najeeb-auto-jimny-ksa-club-qahwaji-dates.webp` | yes | `events/expo-jimny-ksa-club-saudi-hosts-gift-presentation.webp` | 605 | آلي |
| 79 | `keif-aldiafa-event-nayifat-finance-qahwaji-exhibition.webp` | yes | `events/indoor-event-saudi-hosts-bisht-qahwa-service-traditional.webp` | 1238 | آلي |
| 80 | `keif-aldiafa-event-new-balance-kiehls-store-interactive-photo-mirror.webp` | yes | `services/artistic/photo-booth/photo-booth-2.webp` | 763 | آلي |
| 88 | `keif-aldiafa-event-takween-alwatan-support-services-qahwaji-exhibition.webp` | yes | `events/ksa-event-corporate-event-takween-al-watan-ceremonial-coffee.webp` | 563 | آلي |
| 89 | `keif-aldiafa-event-tawkeel-umrah-qahwaji-dates-sweets-exhibition-1.webp` | yes | `events/luxury-catering-arabic-coffee-ceremony-gala-dinner-indoor.webp` | 726 | آلي |
| 97 | `keif-aldiafa-golden-backlit-outdoor-coffee-bar-night-dallahs-incense.webp` | yes | `services/artistic/counter/counter-1.webp` | 1059 | آلي |
| 98 | `keif-aldiafa-golden-hospitality-counter-saudi-emblem-server-drinks-station.webp` | yes | `services/artistic/counter/counter-2.webp` | 585 | آلي |
| 99 | `keif-aldiafa-luxury-majlis-gold-columns-buffet-guests-panoramic.webp` | yes | `hero/hero-desktop.webp` | 274 | آلي |
| 101 | `keif-aldiafa-qahwaji-black-daglah-behind-coffee-water-sweets-table.webp` | yes | `services/artistic/mobile-table/table-3.webp` | 1084 | آلي |
| 102 | `keif-aldiafa-qahwaji-black-daglah-carrying-tray-dallah-cups-hotel-lobby.webp` | yes | `services/male/hosts/dagla-janbiya/dagla-janbiya-1.webp` | 558 | آلي |
| 103 | `keif-aldiafa-qahwaji-lavender-themed-hospitality-corner-camel-cutout.webp` | yes | `events/majlis-qahwa-service-saudi-event-camel-decor.webp` | 331 | آلي |
| 104 | `keif-aldiafa-qahwaji-red-shemagh-saudi-flag-national-pavilion.webp` | yes | `events/ksa-event-qahwa-service-hospitality-staff-arabic-coffee-ceremony.webp` | 620 | آلي |
| 105 | `keif-aldiafa-qahwajiin-incense-and-dallah-majlis-hall-guests-seated.webp` | yes | `events/saudi-event-vip-reception-luxury-catering-majlis-traditional-attire.webp` | 681 | آلي |
| 106 | `keif-aldiafa-qahwajiin-incense-welcome-luxury-hotel-lobby-chandelier.webp` | yes | `hero/hero-mobile.webp` | 555 | آلي |
| 107 | `keif-aldiafa-server-black-suit-gold-tray-six-glasses-red-tea.webp` | yes | `hot-drinks/red-tea.webp` | 630 | آلي |
| 108 | `keif-aldiafa-server-gold-tray-four-turkish-coffee-cups-qr-card-roses.webp` | yes | `hot-drinks/turkish-coffee.webp` | 526 | آلي |
| 109 | `keif-aldiafa-server-gold-tray-green-tea-glasses-qr-card-white-roses.webp` | yes | `hot-drinks/green-tea.webp` | 686 | آلي |
| 110 | `keif-aldiafa-server-white-jacket-gold-tray-pineapple-ginger-juice.webp` | yes | `hot-drinks/ginger-pineapple.webp` | 345 | آلي |
| 111 | `keif-aldiafa-team-catering-staff-uniform-apron-badge.webp` | yes | `services/male/safarjia/safarjia-6.webp` | 547 | آلي |
| 112 | `keif-aldiafa-team-female-hospitality-staff-rose-wall-promo.webp` | yes | `services/female-services/female-7.webp` | 1327 | آلي |
| 113 | `keif-aldiafa-team-female-server-serving-tray-of-tea.webp` | yes | `services/female-services/female-3.webp` | 1294 | آلي |
| 115 | `keif-aldiafa-team-five-hostesses-uniform-white-shirt-gloves-rose-wall.webp` | yes | `services/female/hostesses/hostess-1.webp` | 1281 | آلي |
| 118 | `keif-aldiafa-team-four-masked-servers-group-photo.webp` | yes | `services/safarjia/safarji-3.webp` | 745 | آلي |
| 123 | `keif-aldiafa-team-hospitality-staff-three-uniforms-banner.webp` | yes | `services/safarjia/safarjia-main-bg.webp` | 1009 | آلي |
| 124 | `keif-aldiafa-team-man-holding-golden-incense-burner-entrance.webp` | yes | `weddings/qahwa-station-male-host-dallah-wedding-hall-ceremony.webp` | 366 | آلي |
| 125 | `keif-aldiafa-team-man-in-traditional-attire-holding-dallah.webp` | yes | `services/male/souqiya/souqiya-3.webp` | 489 | آلي |
| 126 | `keif-aldiafa-team-man-pouring-coffee-from-dallah.webp` | yes | `services/male/hosts/dagla/dagla-1.webp` | 509 | آلي |
| 127 | `keif-aldiafa-team-man-served-incense-mabkhara.webp` | yes | `weddings/saudi-wedding-qahwa-station-dallah-white-thobe.webp` | 698 | آلي |
| 128 | `keif-aldiafa-team-man-serving-arabic-coffee-cup.webp` | yes | `weddings/saudi-wedding-male-host-arabic-coffee-luxury-wedding.webp` | 645 | آلي |
| 130 | `keif-aldiafa-team-men-serving-coffee-and-sweets-at-table.webp` | yes | `events/formal-reception-indoor-event-saudi-hosts-luxury-catering.webp` | 821 | آلي |
| 132 | `keif-aldiafa-team-nine-qahwajiin-black-embroidered-daglah-banquet-hall-2.webp` | yes | `weddings/jeddah-wedding-men-section-traditional-uniform-luxury-wedding.webp` | 847 | آلي |
| 133 | `keif-aldiafa-team-nine-qahwajiin-white-thobe-black-vest-luxury-hall.webp` | yes | `weddings/luxury-wedding-men-section-traditional-uniform-wedding-hall.webp` | 1121 | آلي |
| 134 | `keif-aldiafa-team-nine-qahwajiin-white-thobe-black-vest-ornate-hall-2.webp` | yes | `weddings/luxury-wedding-men-section-traditional-uniform-wedding-hall.webp` | 662 | آلي |
| 135 | `keif-aldiafa-team-person-offering-tray-of-assorted-sweets-embroidered-garment.webp` | yes | `distributions/jeddah-vip-dates-dessert-gahwa-gift-tray.webp` | 1249 | آلي |
| 143 | `keif-aldiafa-team-server-presenting-gold-tray-to-seated-men.webp` | yes | `weddings/arab-wedding-male-host-qahwa-station-vip-wedding.webp` | 911 | آلي |
| 144 | `keif-aldiafa-team-server-serving-tray-in-indoor-gathering.webp` | yes | `weddings/saudi-wedding-male-host-coffee-vip-wedding-hall.webp` | 850 | آلي |
| 145 | `keif-aldiafa-team-servers-holding-dallah-in-banquet-hall.webp` | yes | `weddings/saudi-wedding-men-section-male-host-dallah-traditional.webp` | 940 | آلي |
| 146 | `keif-aldiafa-team-ten-qahwajiin-black-embroidered-daglah-banquet-hall.webp` | yes | `weddings/riyadh-wedding-vip-wedding-hall-male-host.webp` | 845 | آلي |
| 147 | `keif-aldiafa-team-three-hospitality-staff-standing-banqueting-room.webp` | yes | `services/male/safarjia/safarjia-2.webp` | 755 | آلي |
| 148 | `keif-aldiafa-team-three-masked-servers-with-gold-sign.webp` | yes | `services/safarjia/safarji-2.webp` | 504 | آلي |
| 149 | `keif-aldiafa-team-three-staff-in-black-uniforms-with-gold-sign.webp` | yes | `services/male/safarjia/safarjia-3.webp` | 599 | آلي |
| 151 | `keif-aldiafa-team-three-waitstaff-in-banquet-hall.webp` | yes | `services/safarjia/safarji-4.webp` | 974 | آلي |
| 152 | `keif-aldiafa-team-three-waitstaff-in-black-aprons.webp` | yes | `services/safarjia/safarji-1.webp` | 1110 | آلي |
| 153 | `keif-aldiafa-team-three-waitstaff-standing-in-banquet-hall.webp` | yes | `services/male/safarjia/safarjia-4.webp` | 621 | آلي |
| 154 | `keif-aldiafa-team-three-women-white-dresses-in-mirror.webp` | yes | `services/female/hostesses/hostess-2.webp` | 176 | آلي |
| 155 | `keif-aldiafa-team-two-servers-holding-brass-pots-indoor.webp` | yes | `services/male/hosts/makkawi/makkawi-1.webp` | 1007 | آلي |
| 156 | `keif-aldiafa-team-two-servers-holding-dallah-coffee-pots.webp` | yes | `services/male/hosts/makkawi/makkawi-2.webp` | 854 | آلي |
| 157 | `keif-aldiafa-team-two-servers-serving-desserts-and-arabic-coffee.webp` | yes | `services/female-services/female-2.webp` | 1083 | آلي |
| 158 | `keif-aldiafa-team-two-staff-masked-lobby.webp` | yes | `services/female-services/female-1.webp` | 785 | آلي |
| 159 | `keif-aldiafa-team-two-women-red-uniforms-lobby.webp` | yes | `services/female-services/female-4.webp` | 1023 | آلي |
| 160 | `keif-aldiafa-team-uniformed-staff-portrait.webp` | yes | `services/female-services/female-5.webp` | 446 | آلي |
| 163 | `keif-aldiafa-two-hostesses-uniform-serving-arabic-coffee-and-pastries-majlis.webp` | yes | `services/female-services/female-main-bg.webp` | 1191 | آلي |
| 164 | `keif-aldiafa-two-qahwajiin-black-daglah-dates-tray-and-dallah-corridor.webp` | yes | `services/male/hosts/dagla/dagla-2.webp` | 1121 | آلي |
| 165 | `keif-aldiafa-two-sababin-white-thobe-crossed-belt-tea-coffee-bar-wedding-hall.webp` | yes | `services/male/hosts/hizam/hizam-2.webp` | 1066 | آلي |
| 189 | `keif-aldiafa-equipment-gold-glass-tea-stand-table.webp` | yes | `equipment/saudi-arabic-coffee-vip-golden-cup-stand-majlis.webp` | 562 | آلي |
| 190 | `keif-aldiafa-equipment-gold-pitchers-tripod-stands-orchid-centerpiece.webp` | yes | `services/male/souqiya/souqiya-4.webp` | 1166 | آلي |
| 195 | `keif-aldiafa-equipment-golden-dallah-and-cups-display.webp` | yes | `services/male/souqiya/souqiya-5.webp` | 729 | آلي |
| 196 | `keif-aldiafa-equipment-golden-dallah-coffee-pot-on-glass-table.webp` | yes | `equipment/vip-saudi-golden-dallah-dates-table.webp` | 665 | آلي |
| 198 | `keif-aldiafa-equipment-golden-decorative-vessel-on-marble-table.webp` | yes | `services/male/souqiya/souqiya-6.webp` | 190 | آلي |
| 201 | `keif-aldiafa-equipment-ornate-gold-vessel-with-blue-beads.webp` | yes | `services/sawas/sawas-style-2.webp` | 1125 | آلي |
| 202 | `keif-aldiafa-equipment-ornate-golden-decorative-vessel-display.webp` | yes | `services/sawas/sawas-style-4.webp` | 1076 | آلي |
| 203 | `keif-aldiafa-equipment-ornate-golden-tiered-stand-blue-beads-dallah-cup-tray.webp` | yes | `services/male/sawas/sawas-5.webp` | 582 | آلي |
| 204 | `keif-aldiafa-equipment-ornate-golden-tiered-stand-coins-turquoise-beads-glass-cups.webp` | yes | `services/male/sawas/sawas-3.webp` | 519 | آلي |
| 213 | `keif-aldiafa-offering-assorted-stuffed-dates-on-trays.webp` | yes | `dates/stuffed-dates.webp` | 1012 | آلي |
| 214 | `keif-aldiafa-offering-baklava-silver-trays-fruit-platters-gold-stands-1.webp` | yes | `sweets/saudi-traditional-baklava-kunafa-pistachio-fruit-platter.webp` | 870 | آلي |
| 215 | `keif-aldiafa-offering-baklava-silver-trays-fruit-platters-gold-stands-2.webp` | yes | `sweets/saudi-fruit-platter-baklava-pistachio-dessert.webp` | 844 | آلي |
| 217 | `keif-aldiafa-offering-brass-coffee-urn-and-cups-table-setup.webp` | yes | `services/male/souqiya/souqiya-2.webp` | 248 | آلي |
| 218 | `keif-aldiafa-offering-buffet-dessert-display-glasses-cakes.webp` | yes | `sweets/saudi-luxury-dessert-buffet-mini-cakes-shooters.webp` | 939 | آلي |
| 220 | `keif-aldiafa-offering-corporate-buffet-tiered-wooden-stands-mini-pastries-flowers.webp` | yes | `services/artistic/buffet/buffet-2.webp` | 965 | آلي |
| 221 | `keif-aldiafa-offering-date-palm-food-display.webp` | yes | `dates/palm-khalas-stuffed.webp` | 1185 | آلي |
| 222 | `keif-aldiafa-offering-date-trunk-palm-food-display.webp` | yes | `distributions/saudi-luxury-palm-date-sweets-distribution.webp` | 1190 | آلي |
| 223 | `keif-aldiafa-offering-dates-sweets-woven-trays-golden-incense-burner-dallah.webp` | yes | `equipment/royal-saudi-gold-qahwa-dates-service.webp` | 1006 | آلي |
| 224 | `keif-aldiafa-offering-decorative-palm-sweets-tray-arrangement.webp` | yes | `dates/palm-sukari-stuffed.webp` | 1034 | آلي |
| 225 | `keif-aldiafa-offering-dessert-appetizer-buffet-creme-caramel-petit-fours-fruit-skewers.webp` | yes | `sweets/saudi-elegant-dessert-buffet-panna-cotta-shooters.webp` | 387 | آلي |
| 226 | `keif-aldiafa-offering-dessert-buffet-parfait-glasses-cake-slices-oriental-sweets.webp` | yes | `sweets/saudi-luxury-dessert-buffet-chocolate-mousse-basbousa.webp` | 963 | آلي |
| 227 | `keif-aldiafa-offering-dessert-buffet-table-with-chalkboard.webp` | yes | `sweets/saudi-luxury-dessert-station-fresh-fruit-mix.webp` | 479 | آلي |
| 229 | `keif-aldiafa-offering-dessert-buffet-table-with-varied-pastries.webp` | yes | `sweets/saudi-elegant-dessert-station-mango-panna-cotta-red-velvet.webp` | 846 | آلي |
| 230 | `keif-aldiafa-offering-fatayer-manakish-sesame-croissants-platter.webp` | yes | `pastry/arabic-pastry.webp` | 1120 | آلي |
| 231 | `keif-aldiafa-offering-glass-buffet-black-platters-canapes-croissants-top-view.webp` | yes | `services/artistic/buffet/buffet-3.webp` | 791 | آلي |
| 232 | `keif-aldiafa-offering-glass-tea-on-decorative-tray.webp` | yes | `equipment/jeddah-luxury-ornate-tea-cup-saucer.webp` | 1009 | آلي |
| 235 | `keif-aldiafa-offering-gold-tiered-stands-mini-pizzas-savory-bites-banquet.webp` | yes | `services/artistic/buffet/buffet-1.webp` | 1035 | آلي |
| 237 | `keif-aldiafa-offering-golden-dallah-dates-finjan-glass-table-bokeh.webp` | yes | `equipment/saudi-hospitality-glass-tea-set-equipment.webp` | 523 | آلي |
| 240 | `keif-aldiafa-offering-mini-sadu-tent-station-dallahs-clay-jar-incense-indoor.webp` | yes | `services/artistic/heritage-tent/tent-2.webp` | 689 | آلي |
| 241 | `keif-aldiafa-offering-ornate-gold-coffee-service-with-flowers.webp` | yes | `services/male/souqiya/souqiya-8.webp` | 447 | آلي |
| 242 | `keif-aldiafa-offering-oval-tray-dates-with-pistachios-and-coconut.webp` | yes | `dates/stuffed-dates-5.webp` | 618 | آلي |
| 243 | `keif-aldiafa-offering-pyramid-of-dates-with-palm-leaves.webp` | yes | `dates/palm-sukari.webp` | 959 | آلي |
| 244 | `keif-aldiafa-offering-sadu-glass-buffet-booth-guests-self-serve-qahwaji.webp` | yes | `services/artistic/heritage-tent/tent-3.webp` | 907 | آلي |
| 245 | `keif-aldiafa-offering-small-sandwich-on-white-plate.webp` | yes | `sandwiches/saudi-catering-turkey-cheese-tomato-long-sandwich.webp` | 76 | آلي |
| 248 | `keif-aldiafa-offering-table-with-arabic-coffee-and-sweets.webp` | yes | `distributions/riyadh-luxury-hospitality-gift-tray-qahwa-ceremony.webp` | 724 | آلي |
| 250 | `keif-aldiafa-offering-three-mini-cheeseburgers-on-slate.webp` | yes | `snacks/saudi-mini-beef-sliders-cheese-luxury-catering.webp` | 818 | آلي |
| 251 | `keif-aldiafa-offering-three-trays-dates-filled-with-nuts.webp` | yes | `distributions/ksa-dates-arabic-sweets-gahwa-distribution.webp` | 992 | آلي |
| 252 | `keif-aldiafa-offering-traditional-sweets-dates-nuts-buffet-villa-courtyard.webp` | yes | `services/artistic/heritage-tent/tent-1.webp` | 1127 | آلي |
| 254 | `keif-aldiafa-offering-tray-of-sahlab-drinks-with-golden-glasses.webp` | yes | `hot-drinks/sahlab.webp` | 686 | آلي |
| 255 | `keif-aldiafa-offering-tray-with-four-cappuccinos.webp` | yes | `hot-drinks/cappuccino.webp` | 466 | آلي |
| 256 | `keif-aldiafa-offering-tuna-salad-sesame-roll-on-white-plate.webp` | yes | `sandwiches/saudi-catering-tuna-salad-sandwich-long-roll.webp` | 727 | آلي |
| 260 | `keif-aldiafa-service-erksous-juice-carrier-levantine-costume-night-2.webp` | yes | `services/male/sawas/sawas-1.webp` | 621 | آلي |
| 261 | `keif-aldiafa-service-erksous-juice-carrier-pouring-cup-night-3.webp` | yes | `services/sawas/sawas-main.webp` | 1121 | آلي |
| 262 | `keif-aldiafa-service-erksous-tamarind-juice-carrier-levantine-costume-night-1.webp` | yes | `services/male/sawas/sawas-2.webp` | 554 | آلي |
| 263 | `keif-aldiafa-service-folk-drummers-performance-red-carpet-night.webp` | yes | `services/artistic/folkband/folkband-1.webp` | 1135 | آلي |
| 265 | `keif-aldiafa-service-hand-lifting-decorative-arabic-coffee-cup.webp` | yes | `services/artistic/artist/artist-2.webp` | 566 | آلي |
| 267 | `keif-aldiafa-service-henna-artist-station-outdoor-tent-night-1.webp` | yes | `services/artistic/artist/artist-8.webp` | 1233 | آلي |
| 268 | `keif-aldiafa-service-henna-artist-station-outdoor-tent-night-2-closeup.webp` | yes | `services/artistic/artist/artist-9.webp` | 1304 | آلي |
| 271 | `keif-aldiafa-service-man-serving-traditional-cups-with-golden-stand.webp` | yes | `services/sawas/sawas-style-1.webp` | 1151 | آلي |
| 273 | `keif-aldiafa-service-mirror-photo-booth-red-carpet-corporate-lobby.webp` | yes | `services/artistic/photo-booth/photo-booth-5.webp` | 1012 | آلي |
| 274 | `keif-aldiafa-service-saudi-ardah-folk-troupe-drums-flag-night-garden.webp` | yes | `services/artistic/folkband/folkband-2.webp` | 627 | آلي |
| 275 | `keif-aldiafa-service-street-beverage-vendor-dallah-traditional-fez.webp` | yes | `services/sawas/sawas-style-3.webp` | 799 | آلي |
| 276 | `keif-aldiafa-generic-fruit-parfait-honey-stock.webp` | decorative | `cold-drinks/fresh-juice.webp` | 309 | آلي |
| 277 | `keif-aldiafa-generic-grapes-closeup-stock.webp` | decorative | `fruits/saudi-red-green-grapes-premium-catering-fruit.webp` | 1137 | آلي |
| 278 | `keif-aldiafa-generic-kiwi-slices-closeup-stock.webp` | decorative | `fruits/saudi-fresh-sliced-kiwi-luxury-hospitality-fruit.webp` | 448 | آلي |
| 279 | `keif-aldiafa-generic-mixed-berries-red-bowl-stock.webp` | decorative | `fruits/saudi-mixed-berries-bowl-premium-catering-fruit.webp` | 855 | آلي |
| 280 | `keif-aldiafa-generic-pineapple-chunks-bowl.webp` | decorative | `fruits/saudi-fresh-pineapple-slices-premium-catering-fruit.webp` | — | يدوي |
| 281 | `keif-aldiafa-generic-social-banner-safraji-waiters-service-design.webp` | decorative | `services/male/safarjia/safarjia-1.webp` | 923 | آلي |
| 282 | `keif-aldiafa-generic-social-banner-zamzam-saqya-service-design.webp` | decorative | `services/male/souqiya/souqiya-1.webp` | 275 | آلي |
| 284 | `keif-aldiafa-generic-stock-assorted-pastries-plates.webp` | decorative | `pastry/assorted-pastry.webp` | 1043 | آلي |
| 285 | `keif-aldiafa-generic-stock-bowl-of-glossy-dates-on-white.webp` | decorative | `dates/dates-plain.webp` | 1263 | آلي |
| 286 | `keif-aldiafa-generic-stock-bruschetta-slate-serving-with-olive-oil.webp` | decorative | `snacks/saudi-italian-bruschetta-tomato-basil-luxury-appetizer.webp` | 1070 | آلي |
| 287 | `keif-aldiafa-generic-stock-cheese-sandwich-on-white-plate.webp` | decorative | `sandwiches/saudi-catering-grilled-chicken-sandwich-lettuce-cheese.webp` | 37 | آلي |
| 288 | `keif-aldiafa-generic-stock-chocolate-filled-croissants-on-plate.webp` | decorative | `sweets/chocolate-croissant.webp` | 782 | آلي |
| 289 | `keif-aldiafa-generic-stock-crispy-fried-bites-with-mustard-dip.webp` | decorative | `snacks/saudi-crispy-chicken-popcorn-bites-honey-mustard.webp` | 1207 | آلي |
| 290 | `keif-aldiafa-generic-stock-dark-beverage-with-mint-lemon-and-brown-pods.webp` | decorative | `cold-drinks/tamarind.webp` | 281 | آلي |
| 292 | `keif-aldiafa-generic-stock-fried-cheese-croquettes-with-dipping-sauce.webp` | decorative | `snacks/saudi-golden-potato-cheese-croquettes-luxury-catering.webp` | 894 | آلي |
| 293 | `keif-aldiafa-generic-stock-fruit-parfait-trio-glasses.webp` | decorative | `cold-drinks/smoothie.webp` | 463 | آلي |
| 294 | `keif-aldiafa-generic-stock-fruit-topped-puff-pastries-on-stand.webp` | decorative | `pastry/fruit-pie.webp` | 696 | آلي |
| 295 | `keif-aldiafa-generic-stock-glass-of-red-drink-with-petals-and-straw.webp` | decorative | `cold-drinks/sobia.webp` | 440 | آلي |
| 296 | `keif-aldiafa-generic-stock-halved-fig-and-whole-fig-on-table.webp` | decorative | `fruits/saudi-fresh-figs-luxury-hospitality-fruit.webp` | 433 | آلي |
| 297 | `keif-aldiafa-generic-stock-iced-coffee-glass-on-marble-table.webp` | decorative | `cold-drinks/iced-latte.webp` | 436 | آلي |
| 298 | `keif-aldiafa-generic-stock-kunafa-melted-cheese-on-fork.webp` | decorative | `sweets/kunafa.webp` | 396 | آلي |
| 299 | `keif-aldiafa-generic-stock-loaded-nachos-with-cheese-guacamole-sour-cream.webp` | decorative | `snacks/saudi-loaded-nachos-cheese-jalapeno-vip-snacks.webp` | 1163 | آلي |
| 300 | `keif-aldiafa-generic-stock-mini-flatbreads-with-various-toppings-on-board.webp` | decorative | `pastry/appetizers.webp` | 737 | آلي |
| 301 | `keif-aldiafa-generic-stock-mini-margherita-pizzas-on-slate.webp` | decorative | `snacks/saudi-mini-margherita-pizza-luxury-catering-finger-food.webp` | 796 | آلي |
| 303 | `keif-aldiafa-generic-stock-mozzarella-sticks-on-slate-with-marinara.webp` | decorative | `snacks/saudi-crispy-mozzarella-cheese-sticks-marinara-snacks.webp` | 819 | آلي |
| 304 | `keif-aldiafa-generic-stock-plate-of-spring-rolls-with-chili-sauce.webp` | decorative | `snacks/saudi-crispy-spring-rolls-sweet-chili-luxury-snacks.webp` | 630 | آلي |
| 305 | `keif-aldiafa-generic-stock-pomegranate-half-on-white.webp` | decorative | `fruits/saudi-fresh-pomegranate-premium-catering-fruit.webp` | 876 | آلي |
| 306 | `keif-aldiafa-generic-stock-potato-wedges-slate-dip.webp` | decorative | `snacks/saudi-crispy-golden-potato-wedges-rosemary-catering.webp` | 960 | آلي |
| 307 | `keif-aldiafa-generic-stock-red-iced-drink-with-mint-garnish.webp` | decorative | `cold-drinks/karkade.webp` | 849 | آلي |
| 308 | `keif-aldiafa-generic-stock-ripe-mango-cubes-on-gray-surface.webp` | decorative | `fruits/saudi-fresh-mango-cubes-luxury-hospitality-fruit.webp` | — | يدوي |
| 309 | `keif-aldiafa-generic-stock-sandwich-cheese-lettuce-tomato-on-white-plate.webp` | decorative | `sandwiches/saudi-catering-turkey-sandwich-soft-roll-tomato.webp` | — | يدوي |
| 310 | `keif-aldiafa-generic-stock-sandwich-on-white-plate-on-stainless-counter.webp` | decorative | `sandwiches/saudi-catering-smoked-turkey-cheese-tomato-sandwich.webp` | — | يدوي |
| 311 | `keif-aldiafa-generic-stock-seeded-bun-sandwich-with-lettuce.webp` | decorative | `sandwiches/saudi-catering-chicken-cheese-sandwich-long-roll.webp` | 317 | آلي |
| 312 | `keif-aldiafa-generic-stock-sesame-bun-chicken-salad-sandwich-on-white-plate.webp` | decorative | `sandwiches/saudi-catering-tuna-sandwich-sesame-bun.webp` | 31 | آلي |
| 314 | `keif-aldiafa-generic-strawberries-closeup-stock.webp` | decorative | `fruits/saudi-fresh-strawberries-luxury-hospitality-fruit.webp` | 871 | آلي |
## 5. الخيارات المطروحة على المالك (قرار المالك — لا يُتَّخذ بدونه؛ سيُرقَّم D163)

| الخيار | الوصف | المزايا | المحاذير |
|---|---|---|---|
| **أ** | استبدال الـ175 (أو الـ314 كلها) بنسخ **`images-watermarked/web/`** الجاهزة، بنفس أسماء الكتالوج الحالية (لا تغيير في slug ولا alt/title — D111) | جاهزة اليوم · ختم رسمي موثّق بتقارير A–D · أسماء الموقع لا تتغيّر · 173/175 مغطّاة | #99 و#106 (hero) غير موجودتَين هناك → تُختمان بنفس `tools/watermark.py` من أصل keif-v2 · علامة الزاوية **الشعار الرسمي (icons_logo-1)** وليست العلامة البيضاوية (رسمة القهوجي) الموجودة على الصور السليمة الـ139 → سيظهر في الموقع نمطا ختم مختلفان إن استُبدلت 175 فقط |
| **ب** | إعادة الختم من **أصول keif-v2** بالعلامة البيضاوية الحالية (نفس نمط الـ139 السليمة) **مرّة واحدة فقط** | توحيد كامل مع بقية الصور · «شعار واحد فقط» حرفياً كما قال المالك | يلزم تحديد المواصفة: الملف المصدر للعلامة البيضاوية (غير موجود في المستودعات الثلاثة — يُطلب من المالك) · الموضع · الحجم · العتامة |
| **ج** | استبدال **الـ314 كلها** بنسخ `images-watermarked/web/` + ختم hero (2) بنفس الأداة | نمط واحد موحّد لكل الموقع · مصدر واحد قابل لإعادة التشغيل | يغيّر مظهر الـ139 السليمة أيضاً (من البيضاوية إلى الشعار الرسمي) — قرار هوية |

**توصيتي الفنية:** الخيار **ج** إن أراد المالك الشعار الرسمي (المستودع «بعد» بُني لهذا ومُراجَع في 4 تقارير)، أو **ب** إن أراد إبقاء العلامة البيضاوية — وعندها أحتاج ملف العلامة الأصلي.

## 6. ما لم يُمسّ

- لا تعديل على `public/images/catalog/` ولا على `imageCatalog.data.ts` ولا على أي مستودع آخر.
- لا رفع لأي شيء إلى مستودعات keif-v2 / images-watermarked / catalog.
- الرمز لم يُخزَّن في أي ملف أو سجل.

## 7. أدلّة (لوحات بصرية أُنتجت في الجلسة)

- `/tmp/pairs.jpg` · `/tmp/pairs2.jpg` — كتالوج (معكوم) ↔ keif-v2 (نظيف) ↔ images-watermarked (ختم واحد) لعيّنات #7 · #106 · #280 · #309.
- `/tmp/pairs3.jpg` — حسم الأربع اليدوية #280 · #308 · #309 · #310.
- تقرير الفحص البصري السابق: [`2026-09-22-catalog-double-watermark-audit.md`](./2026-09-22-catalog-double-watermark-audit.md).
