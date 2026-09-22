# تقرير فحص الصور — «شعار فوق شعار» (العلامة المائية المكرّرة) — 2026-09-22

> الكاتب: وكيل الترميز (Claude) — تنفيذاً لرسالة المالك 2026-09-22 «حلّل الصور بدقة… أي صورة معكومة: شعار فوق الشعار». المنهج: فحص **بصري مباشر** لكل صور الكتالوج الـ314 (`public/images/catalog/`) عبر 27 لوحة تجميعية + 5 لوحات تكبير للحالات الحدّية؛ لا اعتماد على كاشف آلي (جُرّب مطابقة قوالب OpenCV فأخطأ 90% من الحالات لأن العلامة شبه شفافة فوق خلفيات متباينة). **لا تعديل على أي صورة** في هذا التقرير — رصد فقط.

## 0. الخلاصة

| البند | العدد |
|---|---|
| صور الكتالوج المفحوصة | 314 |
| **صور معكومة (شعار مائي مكرّر فوق بعضه)** | **175** (55%) |
| منها publish=yes (تظهر في الصفحات وخريطة الصور) | 140 |
| منها decorative (خلفيات) | 35 |
| شعاران متراكبان | 172 |
| ثلاثة شعارات | 1 (#106) |
| قالب تصميمي + شعاران مائيان | 2 (#112 · #123) |
| صور سليمة بشعار واحد | 139 |
| صور بلا شعار أصلاً | 8 (#139 · #140 · #192 · #194 · #212 · #269 · #270 · #291 صورة مفردة نظيفة؛ #212 بشعار K صغير فقط) |
| عيب آخر (ليس شعاراً مكرّراً) | #93 إطار واجهة إنستغرام (شريط الحالة + «Reply») داخل الصورة |

**النمط المتكرّر:** العلامة المائية البيضاوية (رسمة القهوجي + «كيف الضيافة / KEIF ALDIAFA») طُبعت **مرتين** على الصورة نفسها في تمريرتَي تصدير مختلفتَين: مرّة كبيرة في المنتصف/الأعلى ومرّة أصغر أسفلها أو بجانبها، وغالباً بإزاحة عمودية ~15–25% من ارتفاع الصورة. في صور المنتجات (#167–#212) القالب الأزرق يحمل شعار الرأس الصغير + العلامة المائية — هذا **ليس** تكراراً (شعار رأس + علامة واحدة) فلم يُحسب. صور «K كيف الضيافة» الذهبية الصغيرة أسفل الصورة (#169 · #170 · #173 · #174 · #176 · #206 · #209 · #212) هي شعار مختلف بحجم صغير — لم تُحسب أيضاً، لكنها ملاحظة للمالك: هل يُراد إبقاء هويتَين على صورة واحدة؟

## 1. الصفحات الأكثر تأثّراً (عدد الصور المعكومة المستهدفة لكل صفحة)

| الصفحة | صور معكومة |
|---|---|
| `/offerings` | 77 |
| `/coffee-break-sharikat-jeddah` | 38 |
| `/diyafa-munasabat-jeddah` | 35 |
| `/portfolio` | 32 |
| `/diyafa-a3ras-jeddah` | 22 |
| `/sababin-qahwa-jeddah` | 18 |
| `/services` | 15 |
| `/qahwajiyat-sababat-jeddah` | 12 |
| `/qahwajiin-jeddah` | 12 |
| `/mubashirin-qahwa-jeddah` | 12 |
| `/qahwajiin-makkah` | 6 |
| `/` | 4 |
| `/qahwajiin-madinah` | 1 |
| `/about` | 1 |

## 2. القائمة الكاملة للصور المعكومة (مرتّبة برقم الكتالوج)

| # | الملف | publish | tier | النوع | الجهة | الصفحات المستهدفة |
|---|---|---|---|---|---|---|
| 7 | `keif-aldiafa-event-makkah-halal-forum-qahwaji-lounge-coffee-dates.webp` | yes | 1 | شعاران | منتدى مكة للحلال | /, /portfolio, /coffee-break-sharikat-jeddah, /qahwajiin-makkah |
| 17 | `keif-aldiafa-event-umm-al-qura-university-investment-booth-qahwaji-1.webp` | yes | 1 | شعاران | جامعة أم القرى  جناح استثمار | /coffee-break-sharikat-jeddah, /qahwajiin-makkah, /portfolio |
| 18 | `keif-aldiafa-event-umm-al-qura-university-investment-booth-qahwaji-2.webp` | yes | 1 | شعاران | جامعة أم القرى  جناح استثمار | /qahwajiin-makkah |
| 20 | `keif-aldiafa-event-75-years-heritage-company-qahwaji-dates-palm-display-2.webp` | yes | 2 | شعاران | شركة بذكرى 75 عاماً | /coffee-break-sharikat-jeddah |
| 24 | `keif-aldiafa-event-al-borg-diagnostics-labs-qahwaji-dates-coffee-1.webp` | yes | 2 | شعاران | مختبرات البرج | /coffee-break-sharikat-jeddah, /offerings |
| 25 | `keif-aldiafa-event-al-borg-diagnostics-labs-qahwaji-dates-coffee-2.webp` | yes | 2 | شعاران | مختبرات البرج | /coffee-break-sharikat-jeddah |
| 26 | `keif-aldiafa-event-al-borg-diagnostics-labs-qahwaji-dates-coffee-3.webp` | yes | 2 | شعاران | مختبرات البرج | /coffee-break-sharikat-jeddah |
| 28 | `keif-aldiafa-event-al-rayyan-al-makkiya-hotels-sadaa-qahwaji-exhibition.webp` | yes | 2 | شعاران | فنادق الريان المكية — سدى | /portfolio, /coffee-break-sharikat-jeddah |
| 29 | `keif-aldiafa-event-al-safeer-watania-qahwaji-hostess-exhibition.webp` | yes | 2 | شعاران | السفير · الوطنية | /portfolio, /coffee-break-sharikat-jeddah |
| 30 | `keif-aldiafa-event-al-wessam-transport-exhibition-booth-qahwaji.webp` | yes | 2 | شعاران | الوسام المتميزة للنقل | /coffee-break-sharikat-jeddah |
| 31 | `keif-aldiafa-event-alinma-kayan-qahwaji-dallah-exhibition.webp` | yes | 2 | شعاران | الإنماء · كيان | /portfolio, /coffee-break-sharikat-jeddah |
| 35 | `keif-aldiafa-event-alrifadah-pilgrims-services-qahwaji-exhibition.webp` | yes | 2 | شعاران | شركة الرفادة لخدمات الحجاج | /portfolio, /coffee-break-sharikat-jeddah, /qahwajiin-makkah |
| 36 | `keif-aldiafa-event-alwagehat-algharbiya-contracting-qahwaji-dates.webp` | yes | 2 | شعاران | الواجهات الغربية للمقاولات | /portfolio, /coffee-break-sharikat-jeddah |
| 38 | `keif-aldiafa-event-amjad-alsalam-hotels-qahwaji-exhibition.webp` | yes | 2 | شعاران | شركة أمجاد السلام لإدارة وتشغيل الفنادق | /portfolio, /coffee-break-sharikat-jeddah |
| 39 | `keif-aldiafa-event-anjum-hotel-makkah-qahwaji-exhibition.webp` | yes | 2 | شعاران | فندق أنجم | /portfolio, /coffee-break-sharikat-jeddah, /qahwajiin-makkah |
| 40 | `keif-aldiafa-event-basma-emaar-group-umrah-exhibition-qahwaji.webp` | yes | 2 | شعاران | مجموعة بسمة إعمار | /coffee-break-sharikat-jeddah, /portfolio |
| 41 | `keif-aldiafa-event-bci-basic-chemical-industries-qahwaji-dates-exhibition.webp` | yes | 2 | شعاران | الصناعات الكيميائية الأساسية BCI | /portfolio, /coffee-break-sharikat-jeddah |
| 43 | `keif-aldiafa-event-bon-cafe-qahwaji-black-daglah-exhibition.webp` | yes | 2 | شعاران | بون كافيه Bon Cafe | /portfolio, /coffee-break-sharikat-jeddah |
| 44 | `keif-aldiafa-event-brunello-cucinelli-de-beers-mall-qahwaji-red-shemagh.webp` | yes | 2 | شعاران | برونيلو كوتشينيلي · De Beers | /portfolio, /coffee-break-sharikat-jeddah |
| 45 | `keif-aldiafa-event-dallah-albaraka-namaa-qahwaji-exhibition-1.webp` | yes | 2 | شعاران | دلة البركة · نماء للإعمار | /portfolio, /coffee-break-sharikat-jeddah |
| 46 | `keif-aldiafa-event-dallah-albaraka-qahwaji-exhibition-2.webp` | yes | 2 | شعاران | دلة البركة | /portfolio, /coffee-break-sharikat-jeddah |
| 47 | `keif-aldiafa-event-dallah-albaraka-qahwaji-exhibition-3.webp` | yes | 2 | شعاران | دلة البركة — استثمر للإعمار | /portfolio, /coffee-break-sharikat-jeddah |
| 48 | `keif-aldiafa-event-dallah-albaraka-qahwaji-pouring-coffee-4.webp` | yes | 2 | شعاران | دلة البركة | /portfolio, /coffee-break-sharikat-jeddah |
| 49 | `keif-aldiafa-event-dallah-haj-transport-booth-qahwaji.webp` | yes | 2 | شعاران | دلة لنقل الحجاج | /coffee-break-sharikat-jeddah, /portfolio |
| 50 | `keif-aldiafa-event-dallah-taibah-hotel-madinah-qahwaji-exhibition.webp` | yes | 2 | شعاران | فندق دلة طيبة | /portfolio, /coffee-break-sharikat-jeddah, /qahwajiin-madinah |
| 51 | `keif-aldiafa-event-dareen-travel-agency-qahwaji-exhibition.webp` | yes | 2 | شعاران | وكالة دارين للسفر والسياحة | /portfolio, /coffee-break-sharikat-jeddah |
| 53 | `keif-aldiafa-event-dragon-city-jeddah-grand-opening-qahwajiin-stage-1.webp` | yes | 2 | شعاران | الافتتاح الكبير لقصر التنين بجدة (Dragon City) | /portfolio, /coffee-break-sharikat-jeddah |
| 54 | `keif-aldiafa-event-dragon-city-jeddah-grand-opening-two-qahwajiin-red-carpet-2.webp` | yes | 2 | شعاران | قصر التنين بجدة · الافتتاح الكبير | /portfolio, /coffee-break-sharikat-jeddah |
| 56 | `keif-aldiafa-event-foot-locker-adidas-red-sea-mall-photo-mirror-customers.webp` | yes | 2 | شعاران | فوت لوكر × أديداس — رد سي مول | /services, /portfolio |
| 60 | `keif-aldiafa-event-foot-locker-store-arabic-calligraphy-station.webp` | yes | 2 | شعاران | فوت لوكر | /services, /qahwajiyat-sababat-jeddah |
| 64 | `keif-aldiafa-event-hafil-transport-exhibition-booth-qahwaji.webp` | yes | 2 | شعاران | حافل | /coffee-break-sharikat-jeddah, /portfolio |
| 66 | `keif-aldiafa-event-iconica-boutique-opening-mall-qahwaji.webp` | yes | 2 | شعاران | أيقونيكا | /portfolio, /coffee-break-sharikat-jeddah |
| 69 | `keif-aldiafa-event-luxury-menswear-boutique-qahwaji-coffee-sweets.webp` | yes | 2 | شعاران | بوتيك ملابس رجالية فاخرة | /portfolio, /coffee-break-sharikat-jeddah |
| 76 | `keif-aldiafa-event-nahda-park-view-113-real-estate-qahwaji-jeddah.webp` | yes | 2 | شعاران | مشروع Nahda Park View 113 — حي النهضة جدة | /portfolio, /coffee-break-sharikat-jeddah |
| 77 | `keif-aldiafa-event-najeeb-auto-jimny-ksa-club-qahwaji-dates.webp` | yes | 2 | شعاران | نجيب أوتو — Jimny KSA Club | /portfolio, /coffee-break-sharikat-jeddah |
| 79 | `keif-aldiafa-event-nayifat-finance-qahwaji-exhibition.webp` | yes | 2 | شعاران | النايفات للتمويل | /portfolio, /coffee-break-sharikat-jeddah |
| 80 | `keif-aldiafa-event-new-balance-kiehls-store-interactive-photo-mirror.webp` | yes | 2 | شعاران | نيو بالانس · Kiehl's | /services, /portfolio |
| 88 | `keif-aldiafa-event-takween-alwatan-support-services-qahwaji-exhibition.webp` | yes | 2 | شعاران | شركة تكوين الوطن — Support Services | /portfolio, /coffee-break-sharikat-jeddah |
| 89 | `keif-aldiafa-event-tawkeel-umrah-qahwaji-dates-sweets-exhibition-1.webp` | yes | 2 | شعاران | توكيل Tawkeel — عمرة بالنيابة | /portfolio, /coffee-break-sharikat-jeddah, /qahwajiin-makkah |
| 97 | `keif-aldiafa-golden-backlit-outdoor-coffee-bar-night-dallahs-incense.webp` | yes | 3 | شعاران | — | /offerings, /diyafa-munasabat-jeddah |
| 98 | `keif-aldiafa-golden-hospitality-counter-saudi-emblem-server-drinks-station.webp` | yes | 3 | شعاران | — | /offerings, /diyafa-a3ras-jeddah |
| 99 | `keif-aldiafa-luxury-majlis-gold-columns-buffet-guests-panoramic.webp` | yes | 3 | شعاران | — | /diyafa-munasabat-jeddah, /diyafa-a3ras-jeddah |
| 101 | `keif-aldiafa-qahwaji-black-daglah-behind-coffee-water-sweets-table.webp` | yes | 3 | شعاران | — | /sababin-qahwa-jeddah |
| 102 | `keif-aldiafa-qahwaji-black-daglah-carrying-tray-dallah-cups-hotel-lobby.webp` | yes | 3 | شعاران | — | /qahwajiin-jeddah, /sababin-qahwa-jeddah |
| 103 | `keif-aldiafa-qahwaji-lavender-themed-hospitality-corner-camel-cutout.webp` | yes | 3 | شعاران | — | /offerings |
| 104 | `keif-aldiafa-qahwaji-red-shemagh-saudi-flag-national-pavilion.webp` | yes | 3 | شعاران | — | /qahwajiin-jeddah, /offerings |
| 105 | `keif-aldiafa-qahwajiin-incense-and-dallah-majlis-hall-guests-seated.webp` | yes | 3 | شعاران | — | /mubashirin-qahwa-jeddah, /diyafa-munasabat-jeddah |
| 106 | `keif-aldiafa-qahwajiin-incense-welcome-luxury-hotel-lobby-chandelier.webp` | yes | 3 | 3 شعارات | — | /mubashirin-qahwa-jeddah, /diyafa-munasabat-jeddah |
| 107 | `keif-aldiafa-server-black-suit-gold-tray-six-glasses-red-tea.webp` | yes | 3 | شعاران | — | /sababin-qahwa-jeddah, /coffee-break-sharikat-jeddah |
| 108 | `keif-aldiafa-server-gold-tray-four-turkish-coffee-cups-qr-card-roses.webp` | yes | 3 | شعاران | — | /offerings |
| 109 | `keif-aldiafa-server-gold-tray-green-tea-glasses-qr-card-white-roses.webp` | yes | 3 | شعاران | — | /offerings, /sababin-qahwa-jeddah |
| 110 | `keif-aldiafa-server-white-jacket-gold-tray-pineapple-ginger-juice.webp` | yes | 3 | شعاران | — | /offerings, /sababin-qahwa-jeddah |
| 111 | `keif-aldiafa-team-catering-staff-uniform-apron-badge.webp` | yes | 3 | شعاران | — | /qahwajiin-jeddah, /sababin-qahwa-jeddah, /diyafa-munasabat-jeddah |
| 112 | `keif-aldiafa-team-female-hospitality-staff-rose-wall-promo.webp` | yes | 3 | قالب + شعاران | — | /qahwajiyat-sababat-jeddah, /diyafa-a3ras-jeddah |
| 113 | `keif-aldiafa-team-female-server-serving-tray-of-tea.webp` | yes | 3 | شعاران | — | /qahwajiyat-sababat-jeddah, /diyafa-a3ras-jeddah |
| 115 | `keif-aldiafa-team-five-hostesses-uniform-white-shirt-gloves-rose-wall.webp` | yes | 3 | شعاران | — | /qahwajiyat-sababat-jeddah, /diyafa-a3ras-jeddah |
| 118 | `keif-aldiafa-team-four-masked-servers-group-photo.webp` | yes | 3 | شعاران | — | /mubashirin-qahwa-jeddah, /diyafa-munasabat-jeddah |
| 123 | `keif-aldiafa-team-hospitality-staff-three-uniforms-banner.webp` | yes | 3 | قالب + شعاران | — | /mubashirin-qahwa-jeddah, /diyafa-munasabat-jeddah |
| 124 | `keif-aldiafa-team-man-holding-golden-incense-burner-entrance.webp` | yes | 3 | شعاران | — | /diyafa-a3ras-jeddah, /sababin-qahwa-jeddah |
| 125 | `keif-aldiafa-team-man-in-traditional-attire-holding-dallah.webp` | yes | 3 | شعاران | — | /qahwajiin-jeddah, /sababin-qahwa-jeddah, /diyafa-munasabat-jeddah |
| 126 | `keif-aldiafa-team-man-pouring-coffee-from-dallah.webp` | yes | 3 | شعاران | — | /qahwajiin-jeddah, /sababin-qahwa-jeddah, /diyafa-munasabat-jeddah |
| 127 | `keif-aldiafa-team-man-served-incense-mabkhara.webp` | yes | 3 | شعاران | — | /diyafa-a3ras-jeddah, /sababin-qahwa-jeddah |
| 128 | `keif-aldiafa-team-man-serving-arabic-coffee-cup.webp` | yes | 3 | شعاران | — | /qahwajiin-jeddah, /sababin-qahwa-jeddah, /diyafa-munasabat-jeddah |
| 130 | `keif-aldiafa-team-men-serving-coffee-and-sweets-at-table.webp` | yes | 3 | شعاران | — | /diyafa-a3ras-jeddah, /sababin-qahwa-jeddah |
| 132 | `keif-aldiafa-team-nine-qahwajiin-black-embroidered-daglah-banquet-hall-2.webp` | yes | 3 | شعاران | — | /mubashirin-qahwa-jeddah |
| 133 | `keif-aldiafa-team-nine-qahwajiin-white-thobe-black-vest-luxury-hall.webp` | yes | 3 | شعاران | — | /qahwajiin-jeddah, /about, / |
| 134 | `keif-aldiafa-team-nine-qahwajiin-white-thobe-black-vest-ornate-hall-2.webp` | yes | 3 | شعاران | — | /qahwajiin-jeddah |
| 135 | `keif-aldiafa-team-person-offering-tray-of-assorted-sweets-embroidered-garment.webp` | yes | 3 | شعاران | — | /qahwajiin-jeddah, /sababin-qahwa-jeddah, /diyafa-munasabat-jeddah |
| 143 | `keif-aldiafa-team-server-presenting-gold-tray-to-seated-men.webp` | yes | 3 | شعاران | — | /qahwajiin-jeddah, /sababin-qahwa-jeddah, /diyafa-munasabat-jeddah |
| 144 | `keif-aldiafa-team-server-serving-tray-in-indoor-gathering.webp` | yes | 3 | شعاران | — | /qahwajiin-jeddah, /sababin-qahwa-jeddah, /diyafa-munasabat-jeddah |
| 145 | `keif-aldiafa-team-servers-holding-dallah-in-banquet-hall.webp` | yes | 3 | شعاران | — | /qahwajiin-jeddah, /sababin-qahwa-jeddah, /diyafa-munasabat-jeddah |
| 146 | `keif-aldiafa-team-ten-qahwajiin-black-embroidered-daglah-banquet-hall.webp` | yes | 3 | شعاران | — | /mubashirin-qahwa-jeddah, /diyafa-a3ras-jeddah, / |
| 147 | `keif-aldiafa-team-three-hospitality-staff-standing-banqueting-room.webp` | yes | 3 | شعاران | — | /mubashirin-qahwa-jeddah, /diyafa-munasabat-jeddah |
| 148 | `keif-aldiafa-team-three-masked-servers-with-gold-sign.webp` | yes | 3 | شعاران | — | /mubashirin-qahwa-jeddah, /diyafa-munasabat-jeddah |
| 149 | `keif-aldiafa-team-three-staff-in-black-uniforms-with-gold-sign.webp` | yes | 3 | شعاران | — | /mubashirin-qahwa-jeddah, /diyafa-munasabat-jeddah |
| 151 | `keif-aldiafa-team-three-waitstaff-in-banquet-hall.webp` | yes | 3 | شعاران | — | /mubashirin-qahwa-jeddah, /diyafa-munasabat-jeddah |
| 152 | `keif-aldiafa-team-three-waitstaff-in-black-aprons.webp` | yes | 3 | شعاران | — | /mubashirin-qahwa-jeddah, /diyafa-munasabat-jeddah |
| 153 | `keif-aldiafa-team-three-waitstaff-standing-in-banquet-hall.webp` | yes | 3 | شعاران | — | /mubashirin-qahwa-jeddah, /diyafa-munasabat-jeddah |
| 154 | `keif-aldiafa-team-three-women-white-dresses-in-mirror.webp` | yes | 3 | شعاران | — | /qahwajiyat-sababat-jeddah, /diyafa-a3ras-jeddah |
| 155 | `keif-aldiafa-team-two-servers-holding-brass-pots-indoor.webp` | yes | 3 | شعاران | — | /services, /diyafa-munasabat-jeddah |
| 156 | `keif-aldiafa-team-two-servers-holding-dallah-coffee-pots.webp` | yes | 3 | شعاران | — | /services, /diyafa-munasabat-jeddah |
| 157 | `keif-aldiafa-team-two-servers-serving-desserts-and-arabic-coffee.webp` | yes | 3 | شعاران | — | /qahwajiyat-sababat-jeddah, /diyafa-a3ras-jeddah |
| 158 | `keif-aldiafa-team-two-staff-masked-lobby.webp` | yes | 3 | شعاران | — | /qahwajiyat-sababat-jeddah, /diyafa-a3ras-jeddah |
| 159 | `keif-aldiafa-team-two-women-red-uniforms-lobby.webp` | yes | 3 | شعاران | — | /qahwajiyat-sababat-jeddah, /diyafa-a3ras-jeddah |
| 160 | `keif-aldiafa-team-uniformed-staff-portrait.webp` | yes | 3 | شعاران | — | /qahwajiyat-sababat-jeddah, /diyafa-a3ras-jeddah |
| 163 | `keif-aldiafa-two-hostesses-uniform-serving-arabic-coffee-and-pastries-majlis.webp` | yes | 3 | شعاران | — | /qahwajiyat-sababat-jeddah |
| 164 | `keif-aldiafa-two-qahwajiin-black-daglah-dates-tray-and-dallah-corridor.webp` | yes | 3 | شعاران | — | /sababin-qahwa-jeddah |
| 165 | `keif-aldiafa-two-sababin-white-thobe-crossed-belt-tea-coffee-bar-wedding-hall.webp` | yes | 3 | شعاران | — | /sababin-qahwa-jeddah, /diyafa-a3ras-jeddah |
| 189 | `keif-aldiafa-equipment-gold-glass-tea-stand-table.webp` | yes | 4 | شعاران | — | /offerings |
| 190 | `keif-aldiafa-equipment-gold-pitchers-tripod-stands-orchid-centerpiece.webp` | yes | 4 | شعاران | — | /offerings |
| 195 | `keif-aldiafa-equipment-golden-dallah-and-cups-display.webp` | yes | 4 | شعاران | — | /offerings |
| 196 | `keif-aldiafa-equipment-golden-dallah-coffee-pot-on-glass-table.webp` | yes | 4 | شعاران | — | /offerings |
| 198 | `keif-aldiafa-equipment-golden-decorative-vessel-on-marble-table.webp` | yes | 4 | شعاران | — | /offerings |
| 201 | `keif-aldiafa-equipment-ornate-gold-vessel-with-blue-beads.webp` | yes | 4 | شعاران | — | /offerings |
| 202 | `keif-aldiafa-equipment-ornate-golden-decorative-vessel-display.webp` | yes | 4 | شعاران | — | /offerings |
| 203 | `keif-aldiafa-equipment-ornate-golden-tiered-stand-blue-beads-dallah-cup-tray.webp` | yes | 4 | شعاران | — | /offerings |
| 204 | `keif-aldiafa-equipment-ornate-golden-tiered-stand-coins-turquoise-beads-glass-cups.webp` | yes | 4 | شعاران | — | /offerings |
| 213 | `keif-aldiafa-offering-assorted-stuffed-dates-on-trays.webp` | yes | 4 | شعاران | — | /offerings, /diyafa-munasabat-jeddah |
| 214 | `keif-aldiafa-offering-baklava-silver-trays-fruit-platters-gold-stands-1.webp` | yes | 4 | شعاران | — | /offerings |
| 215 | `keif-aldiafa-offering-baklava-silver-trays-fruit-platters-gold-stands-2.webp` | yes | 4 | شعاران | — |  |
| 217 | `keif-aldiafa-offering-brass-coffee-urn-and-cups-table-setup.webp` | yes | 4 | شعاران | — | /offerings |
| 218 | `keif-aldiafa-offering-buffet-dessert-display-glasses-cakes.webp` | yes | 4 | شعاران | — | /offerings, /diyafa-a3ras-jeddah |
| 220 | `keif-aldiafa-offering-corporate-buffet-tiered-wooden-stands-mini-pastries-flowers.webp` | yes | 4 | شعاران | — | /offerings, /coffee-break-sharikat-jeddah |
| 221 | `keif-aldiafa-offering-date-palm-food-display.webp` | yes | 4 | شعاران | — | /offerings, /diyafa-munasabat-jeddah |
| 222 | `keif-aldiafa-offering-date-trunk-palm-food-display.webp` | yes | 4 | شعاران | — | /offerings, /diyafa-munasabat-jeddah |
| 223 | `keif-aldiafa-offering-dates-sweets-woven-trays-golden-incense-burner-dallah.webp` | yes | 4 | شعاران | — | /offerings |
| 224 | `keif-aldiafa-offering-decorative-palm-sweets-tray-arrangement.webp` | yes | 4 | شعاران | — | /offerings, /diyafa-munasabat-jeddah |
| 225 | `keif-aldiafa-offering-dessert-appetizer-buffet-creme-caramel-petit-fours-fruit-skewers.webp` | yes | 4 | شعاران | — | /offerings, /coffee-break-sharikat-jeddah |
| 226 | `keif-aldiafa-offering-dessert-buffet-parfait-glasses-cake-slices-oriental-sweets.webp` | yes | 4 | شعاران | — | /offerings |
| 227 | `keif-aldiafa-offering-dessert-buffet-table-with-chalkboard.webp` | yes | 4 | شعاران | — | /offerings, /diyafa-a3ras-jeddah |
| 229 | `keif-aldiafa-offering-dessert-buffet-table-with-varied-pastries.webp` | yes | 4 | شعاران | — | /offerings, /diyafa-a3ras-jeddah |
| 230 | `keif-aldiafa-offering-fatayer-manakish-sesame-croissants-platter.webp` | yes | 4 | شعاران | — | /offerings |
| 231 | `keif-aldiafa-offering-glass-buffet-black-platters-canapes-croissants-top-view.webp` | yes | 4 | شعاران | — | /offerings |
| 232 | `keif-aldiafa-offering-glass-tea-on-decorative-tray.webp` | yes | 4 | شعاران | — | /offerings |
| 235 | `keif-aldiafa-offering-gold-tiered-stands-mini-pizzas-savory-bites-banquet.webp` | yes | 4 | شعاران | — | /offerings |
| 237 | `keif-aldiafa-offering-golden-dallah-dates-finjan-glass-table-bokeh.webp` | yes | 4 | شعاران | — | /offerings, / |
| 240 | `keif-aldiafa-offering-mini-sadu-tent-station-dallahs-clay-jar-incense-indoor.webp` | yes | 4 | شعاران | — | /offerings, /diyafa-munasabat-jeddah |
| 241 | `keif-aldiafa-offering-ornate-gold-coffee-service-with-flowers.webp` | yes | 4 | شعاران | — | /offerings |
| 242 | `keif-aldiafa-offering-oval-tray-dates-with-pistachios-and-coconut.webp` | yes | 4 | شعاران | — | /offerings, /diyafa-munasabat-jeddah |
| 243 | `keif-aldiafa-offering-pyramid-of-dates-with-palm-leaves.webp` | yes | 4 | شعاران | — | /offerings, /diyafa-munasabat-jeddah |
| 244 | `keif-aldiafa-offering-sadu-glass-buffet-booth-guests-self-serve-qahwaji.webp` | yes | 4 | شعاران | — | /offerings |
| 245 | `keif-aldiafa-offering-small-sandwich-on-white-plate.webp` | yes | 4 | شعاران | — | /offerings, /diyafa-a3ras-jeddah |
| 248 | `keif-aldiafa-offering-table-with-arabic-coffee-and-sweets.webp` | yes | 4 | شعاران | — | /offerings, /diyafa-munasabat-jeddah |
| 250 | `keif-aldiafa-offering-three-mini-cheeseburgers-on-slate.webp` | yes | 4 | شعاران | — | /offerings, /diyafa-a3ras-jeddah |
| 251 | `keif-aldiafa-offering-three-trays-dates-filled-with-nuts.webp` | yes | 4 | شعاران | — | /offerings, /diyafa-munasabat-jeddah |
| 252 | `keif-aldiafa-offering-traditional-sweets-dates-nuts-buffet-villa-courtyard.webp` | yes | 4 | شعاران | — | /offerings, /diyafa-munasabat-jeddah |
| 254 | `keif-aldiafa-offering-tray-of-sahlab-drinks-with-golden-glasses.webp` | yes | 4 | شعاران | — | /offerings |
| 255 | `keif-aldiafa-offering-tray-with-four-cappuccinos.webp` | yes | 4 | شعاران | — | /offerings |
| 256 | `keif-aldiafa-offering-tuna-salad-sesame-roll-on-white-plate.webp` | yes | 4 | شعاران | — | /offerings, /diyafa-a3ras-jeddah |
| 260 | `keif-aldiafa-service-erksous-juice-carrier-levantine-costume-night-2.webp` | yes | 5 | شعاران | — | /services |
| 261 | `keif-aldiafa-service-erksous-juice-carrier-pouring-cup-night-3.webp` | yes | 5 | شعاران | — | /services |
| 262 | `keif-aldiafa-service-erksous-tamarind-juice-carrier-levantine-costume-night-1.webp` | yes | 5 | شعاران | — | /services, /offerings |
| 263 | `keif-aldiafa-service-folk-drummers-performance-red-carpet-night.webp` | yes | 5 | شعاران | — | /services |
| 265 | `keif-aldiafa-service-hand-lifting-decorative-arabic-coffee-cup.webp` | yes | 5 | شعاران | — | /services, /diyafa-munasabat-jeddah |
| 267 | `keif-aldiafa-service-henna-artist-station-outdoor-tent-night-1.webp` | yes | 5 | شعاران | — | /services, /qahwajiyat-sababat-jeddah |
| 268 | `keif-aldiafa-service-henna-artist-station-outdoor-tent-night-2-closeup.webp` | yes | 5 | شعاران | — | /qahwajiyat-sababat-jeddah |
| 271 | `keif-aldiafa-service-man-serving-traditional-cups-with-golden-stand.webp` | yes | 5 | شعاران | — | /services, /diyafa-munasabat-jeddah |
| 273 | `keif-aldiafa-service-mirror-photo-booth-red-carpet-corporate-lobby.webp` | yes | 5 | شعاران | — | /services |
| 274 | `keif-aldiafa-service-saudi-ardah-folk-troupe-drums-flag-night-garden.webp` | yes | 5 | شعاران | — | /services, /diyafa-a3ras-jeddah |
| 275 | `keif-aldiafa-service-street-beverage-vendor-dallah-traditional-fez.webp` | yes | 5 | شعاران | — | /services, /diyafa-munasabat-jeddah |
| 276 | `keif-aldiafa-generic-fruit-parfait-honey-stock.webp` | decorative | 6 | شعاران | — |  |
| 277 | `keif-aldiafa-generic-grapes-closeup-stock.webp` | decorative | 6 | شعاران | — |  |
| 278 | `keif-aldiafa-generic-kiwi-slices-closeup-stock.webp` | decorative | 6 | شعاران | — |  |
| 279 | `keif-aldiafa-generic-mixed-berries-red-bowl-stock.webp` | decorative | 6 | شعاران | — |  |
| 280 | `keif-aldiafa-generic-pineapple-chunks-bowl.webp` | decorative | 6 | شعاران | — | /offerings |
| 281 | `keif-aldiafa-generic-social-banner-safraji-waiters-service-design.webp` | decorative | 6 | شعاران | — |  |
| 282 | `keif-aldiafa-generic-social-banner-zamzam-saqya-service-design.webp` | decorative | 6 | شعاران | — |  |
| 284 | `keif-aldiafa-generic-stock-assorted-pastries-plates.webp` | decorative | 6 | شعاران | — | /offerings |
| 285 | `keif-aldiafa-generic-stock-bowl-of-glossy-dates-on-white.webp` | decorative | 6 | شعاران | — | /offerings |
| 286 | `keif-aldiafa-generic-stock-bruschetta-slate-serving-with-olive-oil.webp` | decorative | 6 | شعاران | — | /offerings |
| 287 | `keif-aldiafa-generic-stock-cheese-sandwich-on-white-plate.webp` | decorative | 6 | شعاران | — | /offerings |
| 288 | `keif-aldiafa-generic-stock-chocolate-filled-croissants-on-plate.webp` | decorative | 6 | شعاران | — | /offerings |
| 289 | `keif-aldiafa-generic-stock-crispy-fried-bites-with-mustard-dip.webp` | decorative | 6 | شعاران | — | /offerings |
| 290 | `keif-aldiafa-generic-stock-dark-beverage-with-mint-lemon-and-brown-pods.webp` | decorative | 6 | شعاران | — | /offerings |
| 292 | `keif-aldiafa-generic-stock-fried-cheese-croquettes-with-dipping-sauce.webp` | decorative | 6 | شعاران | — | /offerings |
| 293 | `keif-aldiafa-generic-stock-fruit-parfait-trio-glasses.webp` | decorative | 6 | شعاران | — | /offerings |
| 294 | `keif-aldiafa-generic-stock-fruit-topped-puff-pastries-on-stand.webp` | decorative | 6 | شعاران | — | /offerings |
| 295 | `keif-aldiafa-generic-stock-glass-of-red-drink-with-petals-and-straw.webp` | decorative | 6 | شعاران | — | /offerings |
| 296 | `keif-aldiafa-generic-stock-halved-fig-and-whole-fig-on-table.webp` | decorative | 6 | شعاران | — | /offerings |
| 297 | `keif-aldiafa-generic-stock-iced-coffee-glass-on-marble-table.webp` | decorative | 6 | شعاران | — | /offerings |
| 298 | `keif-aldiafa-generic-stock-kunafa-melted-cheese-on-fork.webp` | decorative | 6 | شعاران | — | /offerings |
| 299 | `keif-aldiafa-generic-stock-loaded-nachos-with-cheese-guacamole-sour-cream.webp` | decorative | 6 | شعاران | — | /offerings |
| 300 | `keif-aldiafa-generic-stock-mini-flatbreads-with-various-toppings-on-board.webp` | decorative | 6 | شعاران | — | /offerings |
| 301 | `keif-aldiafa-generic-stock-mini-margherita-pizzas-on-slate.webp` | decorative | 6 | شعاران | — | /offerings |
| 303 | `keif-aldiafa-generic-stock-mozzarella-sticks-on-slate-with-marinara.webp` | decorative | 6 | شعاران | — | /offerings |
| 304 | `keif-aldiafa-generic-stock-plate-of-spring-rolls-with-chili-sauce.webp` | decorative | 6 | شعاران | — | /offerings |
| 305 | `keif-aldiafa-generic-stock-pomegranate-half-on-white.webp` | decorative | 6 | شعاران | — | /offerings |
| 306 | `keif-aldiafa-generic-stock-potato-wedges-slate-dip.webp` | decorative | 6 | شعاران | — | /offerings |
| 307 | `keif-aldiafa-generic-stock-red-iced-drink-with-mint-garnish.webp` | decorative | 6 | شعاران | — | /offerings |
| 308 | `keif-aldiafa-generic-stock-ripe-mango-cubes-on-gray-surface.webp` | decorative | 6 | شعاران | — | /offerings |
| 309 | `keif-aldiafa-generic-stock-sandwich-cheese-lettuce-tomato-on-white-plate.webp` | decorative | 6 | شعاران | — | /offerings |
| 310 | `keif-aldiafa-generic-stock-sandwich-on-white-plate-on-stainless-counter.webp` | decorative | 6 | شعاران | — | /offerings |
| 311 | `keif-aldiafa-generic-stock-seeded-bun-sandwich-with-lettuce.webp` | decorative | 6 | شعاران | — | /offerings |
| 312 | `keif-aldiafa-generic-stock-sesame-bun-chicken-salad-sandwich-on-white-plate.webp` | decorative | 6 | شعاران | — | /offerings |
| 314 | `keif-aldiafa-generic-strawberries-closeup-stock.webp` | decorative | 6 | شعاران | — |  |

## 3. الصور السليمة (شعار واحد) — للمرجع

#1, #2, #3, #4, #5, #6, #8, #9, #10, #11, #12, #13, #14, #15, #16, #19, #21, #22, #23, #27, #32, #33, #34, #37, #42, #52, #55, #57, #58, #59, #61, #62, #63, #65, #67, #68, #70, #71, #72, #73, #74, #75, #78, #81, #82, #83, #84, #85, #86, #87, #90, #91, #92, #93, #94, #95, #96, #100, #114, #116, #117, #119, #120, #121, #122, #129, #131, #136, #137, #138, #139, #140, #141, #142, #150, #161, #162, #166, #167, #168, #169, #170, #171, #172, #173, #174, #175, #176, #177, #178, #179, #180, #181, #182, #183, #184, #185, #186, #187, #188, #191, #192, #193, #194, #197, #199, #200, #205, #206, #207, #208, #209, #210, #211, #212, #216, #219, #228, #233, #234, #236, #238, #239, #246, #247, #249, #253, #257, #258, #259, #264, #266, #269, #270, #272, #283, #291, #302, #313

## 4. ملاحظات دقّة

- الحكم بصري على لوحات بدقّة ~500px للخانة؛ الحالات الحدّية (#5 · #12 · #61 · #62 · #77 · #89 · #131 · #137 · #162) أُعيد تكبيرها وفُصل فيها: #5 و#12 و#61 و#62 و#131 و#137 و#162 = شعار واحد (سليمة)؛ #77 و#89 = شعاران (معكومة).
- أزواج شبه مكرّرة (اللقطة نفسها مرتين): #17/#18 · #19/#20 · #25/#26 · #61/#62 · #73/#74 · #120/#121 · #133/#134 · #155/#156 · #171/#172 · #178/#179/#180 · #185/#186 · #201/#202 · #203/#204 · #207/#208 · #214/#215 · #218/#226 · #221/#222 · #258/#262 · #259/#275 — تُعالج مرة واحدة من الأصل ثم تُشتق.
- لم تُفحص صور خارج الكتالوج (`public/images/` الأخرى: الهيرو، الشركاء، أيقونات) — تُفحص بطلب منفصل إن أردت.

## 5. الخطوة التالية (بأمر المالك — لم تُنفَّذ)

1. الرجوع إلى **الأصول** في مستودع الكتالوج `MoTechSys/catalog-keif-aldiafa-photots` (أو مجلد المالك الأصلي) للصور الـ175.
2. إعادة تصدير كل صورة بـ**علامة مائية واحدة** بموضع وحجم موحّدَين (مقترح: أسفل اليمين، 18% من العرض، شفافية 70%) — قرار موثّق يُرقَّم D163 عند التنفيذ.
3. استبدال الملفات بالأسماء نفسها في `public/images/catalog/` (لا تغيير في alt/title — D111) ثم `npm run guard` و`check-assets` وإعادة البناء.
4. للصور التي لا أصل لها: إزالة العلامة المكرّرة بأدوات الإزالة (inpainting) مع مراجعة بصرية واحدة واحدة.