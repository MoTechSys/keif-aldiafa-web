# CLAUDE.md - دليل الوكلاء الذكي لمشروع كيف الضيافة

> **تعليمات إلزامية:** عند دخول أي وكيل ذكي (Claude, Gemini, GPT, أو غيره) يجب قراءة هذا الملف **كاملاً** قبل أي عمل. يجب فهم المشروع أولاً ثم تحديث هذا الملف وملفات التوثيق بعد كل تعديل.

---

## 1. نظرة عامة على المشروع

| البند | القيمة |
|-------|--------|
| **الاسم** | كيف الضيافة (Keif Al-Diafa) |
| **النوع** | موقع تعريفي فاخر لشركة خدمات ضيافة سعودية |
| **الإطار** | Next.js 14 (App Router) + React 18 + TypeScript |
| **التنسيق** | Tailwind CSS 3.4 + PostCSS + Autoprefixer |
| **الأنيميشن** | motion (Framer Motion) 12.x |
| **الكاروسيل** | embla-carousel-react 8.x |
| **اللغة** | عربي (RTL) - اتجاه من اليمين لليسار |
| **الموقع** | https://keifaldiafa.com |
| **المستودع** | https://github.com/moain2026/keif-aldiafa-website |
| **الفرع الرئيسي** | main |

---

## 2. هيكل المشروع التفصيلي

```
keif-aldiafa-website/
├── public/
│   ├── favicon.ico, icon-192.png, icon-512.png
│   ├── og-image.jpg              # صورة OpenGraph
│   ├── manifest.json             # PWA manifest
│   └── images/                   # الصور (Git LFS)
│       ├── hero/                 # 3 صور رئيسية
│       ├── events/               # 82 صورة فعالية
│       ├── weddings/             # 18 صورة زفاف
│       ├── distributions/        # 5 صور توزيعات
│       ├── equipment/            # 21 صورة معدات
│       ├── partners/             # 36 شعار شريك
│       └── services/             # صور الخدمات
│           ├── male/             # خدمات رجالية
│           ├── female/           # خدمات نسائية
│           └── artistic/         # خدمات فنية
├── src/
│   ├── app/                      # App Router (الصفحات)
│   │   ├── layout.tsx            # التخطيط الجذري (RootLayout)
│   │   ├── template.tsx          # قالب مشترك (ClientLayout wrapper)
│   │   ├── page.tsx              # الصفحة الرئيسية (Server Component)
│   │   ├── HomePageClient.tsx    # مكون العميل للصفحة الرئيسية
│   │   ├── loading.tsx           # مؤشر التحميل
│   │   ├── not-found.tsx         # صفحة 404
│   │   ├── robots.ts             # ملف robots.txt
│   │   ├── sitemap.ts            # خريطة الموقع
│   │   ├── services/             # صفحة الخدمات
│   │   ├── offerings/            # صفحة التقديمات
│   │   ├── portfolio/            # صفحة معرض الأعمال
│   │   ├── about/                # صفحة من نحن
│   │   └── contact/              # صفحة التواصل
│   ├── components/               # المكونات المشتركة
│   │   ├── ClientLayout.tsx      # تخطيط العميل (Navbar + Footer + WhatsApp)
│   │   ├── Navbar.tsx            # شريط التنقل (ديسكتوب + جوال)
│   │   ├── Footer.tsx            # التذييل
│   │   ├── FloatingWhatsApp.tsx  # زر واتساب العائم
│   │   ├── ImageWithFallback.tsx # مكون صورة مع fallback
│   │   ├── OptimizedImage.tsx    # مكون صورة محسّن (بديل)
│   │   ├── PartnersSlider.tsx    # سلايدر الشركاء (Embla Carousel)
│   │   ├── Breadcrumbs.tsx       # مسار التنقل
│   │   ├── DallahLogo.tsx        # شعار الدلة SVG
│   │   ├── ImageSkeleton.tsx     # هيكل تحميل الصور
│   │   └── SEO.tsx               # مولد Metadata للصفحات
│   ├── lib/                      # المكتبات المساعدة
│   │   ├── images.ts             # مسارات الصور المركزية
│   │   ├── schema.ts             # Schema.org generators
│   │   └── utils.ts              # أدوات مساعدة (cn)
│   └── styles/
│       └── globals.css           # الأنماط العامة + Design System
├── scripts/
│   └── copy-images.sh            # سكريبت نسخ الصور
├── docs/                         # ملفات التوثيق
│   └── PROJECT_ANALYSIS.md       # التحليل التفصيلي
├── CLAUDE.md                     # هذا الملف (دليل الوكلاء)
├── README.md                     # الملف التعريفي
├── AUDIT_REPORT_AR.md            # تقرير التدقيق
├── next.config.js                # إعدادات Next.js
├── tailwind.config.js            # إعدادات Tailwind
├── tsconfig.json                 # إعدادات TypeScript
├── postcss.config.js             # إعدادات PostCSS
├── package.json                  # التبعيات والأوامر
└── .gitattributes                # Git LFS tracking
```

---

## 3. نمط البنية (Architecture Pattern)

### نمط الصفحات (Server + Client Split)
كل صفحة تتبع نمطاً ثابتاً:
1. **`page.tsx`** (Server Component): يحتوي Metadata + Schema.org JSON-LD + يستدعي مكون العميل
2. **`*Client.tsx`** (Client Component): يحتوي الواجهة التفاعلية

```
صفحة.tsx (Server) → Metadata + Schema → ClientComponent.tsx (Client) → الواجهة
```

### التخطيط (Layout Stack)
```
RootLayout (layout.tsx)
  └─ Template (template.tsx)
       └─ ClientLayout (Navbar + main + Footer + FloatingWhatsApp)
            └─ Page Content
```

---

## 4. التقنيات والمكتبات

| المكتبة | الإصدار | الاستخدام |
|---------|---------|----------|
| next | ^14.2.15 | إطار العمل الأساسي |
| react / react-dom | ^18.3.1 | واجهة المستخدم |
| motion | ^12.23.24 | الأنيميشن (Framer Motion) |
| embla-carousel-react | ^8.6.0 | سلايدر الشركاء |
| react-responsive-masonry | ^2.7.1 | (مثبّت لكن غير مستخدم حالياً) |
| lucide-react | ^0.487.0 | (مثبّت لكن غير مستخدم حالياً) |
| class-variance-authority | ^0.7.1 | (مثبّت لكن غير مستخدم حالياً) |
| clsx + tailwind-merge | latest | دمج الكلاسات (cn helper) |
| tailwindcss | ^3.4.0 | التنسيق |
| typescript | ^5.5.0 | نوع البيانات |

---

## 5. نظام التصميم (Design System)

### الألوان
```
charcoal:     #0f0f0f (الخلفية الأساسية)
charcoal-mid: #1a1a1a
charcoal-light: #242424
gold:         #B8860B (اللون الرئيسي)
gold-deep:    #8B6914
gold-bright:  #D4A017
gold-shimmer: #F0C040
cream:        #F5F5DC (النصوص)
```

### الخطوط
- **IBM Plex Sans Arabic**: الخط الأساسي (Google Fonts)
- **Tajawal**: الخط الثانوي (للعناوين)

### الكلاسات المخصصة (globals.css)
- `.gold-gradient-text` - نص بتدرج ذهبي متحرك
- `.card-luxury` - بطاقة فاخرة مع hover effect
- `.img-overlay` - طبقة gradient فوق الصور
- `.glass` / `.glass-light` - تأثير زجاجي
- `.whatsapp-pulse` - نبض زر واتساب
- `.bottom-nav` - شريط التنقل السفلي (جوال)

---

## 6. الأوامر المتاحة

```bash
npm run dev    # تشغيل بيئة التطوير (http://localhost:3000)
npm run build  # بناء للإنتاج
npm run start  # تشغيل الإنتاج
npm run lint   # فحص الكود
```

---

## 7. ملاحظات مهمة للوكلاء

### يجب الانتباه إلى:
1. **RTL (اتجاه اليمين لليسار)**: الموقع بالعربية، كل التنسيقات RTL
2. **Git LFS**: الصور تُتبّع عبر Git LFS (انظر `.gitattributes`)
3. **Client Components**: معظم الصفحات تعتمد على Client Components (لاحظ `"use client"`)
4. **Google Fonts**: الخطوط تُحمّل من `next/font/google` - قد تفشل في بيئات محظورة
5. **رقم الواتساب**: `966508252134` — مصدر الحقيقة `src/lib/site.ts`، **مؤكَّد** بملف Google Business الرسمي (2026-08-29)
6. **SITE_URL**: `https://keifaldiafa.com` - معرّف في عدة ملفات

### المشاكل المعروفة:
1. **اعتماد مكثف على Client Components**: يزيد حجم JS المنقول للمتصفح
2. **أنيميشن كثيف بـ motion**: يؤثر على الأداء في الأجهزة المتوسطة
3. **مكتبات غير مستخدمة**: `lucide-react`, `react-responsive-masonry`, `class-variance-authority`
4. **صور كثيرة**: ~236 صورة webp في `public/images/`

### عند إجراء تعديلات:
1. **اقرأ الملف المعني بالكامل** قبل التعديل
2. **حافظ على نمط التصميم** (الألوان الذهبية، الخلفية الداكنة)
3. **تأكد من RTL** في أي مكون جديد
4. **حدّث هذا الملف** بعد أي تغيير جوهري
5. **حدّث `docs/PROJECT_ANALYSIS.md`** عند إضافة مكونات أو صفحات
6. **اختبر البناء** بـ `npm run build` بعد التعديلات

---

## 8. سجل التحديثات

| التاريخ | التحديث | الملفات المتأثرة |
|---------|---------|-----------------|
| 2026-03-08 | إنشاء ملف CLAUDE.md وملفات التوثيق | CLAUDE.md, README.md, docs/ |
| 2026-03-08 | إصلاح robots.ts (إزالة حظر `/_next/`) | src/app/robots.ts |
| 2026-03-08 | تحليل شامل وتوثيق المشروع | docs/PROJECT_ANALYSIS.md |
| 2026-08-29 | **إصلاح جذري لربط الخطوط**: كانت `globals.css` و`tailwind.config.js` تطلب `'Tajawal'`/`'Cairo'` بالاسم الحرفي بينما next/font يولّد اسماً مُهجّناً (`__Tajawal_xxx`) — فكانت النصوص تسقط على خط النظام رغم تحميل ملفات الخط. رُبطت كلها بـ`var(--font-*)` | globals.css, tailwind.config.js |
| 2026-08-29 | تقليص أوزان الخطوط: Cairo 6→4 أوزان، El Messiri 4→1 (وزن 700 فقط المستخدم فعلاً) — كل وزن محذوف = ملف woff2 أقل على الجوال | src/app/layout.tsx |
| 2026-08-29 | **مصدر واحد للحقيقة** `src/lib/site.ts`: كان SITE_URL منسوخاً في 16 ملفاً ورقم الواتساب في 10+ — وحّدت كلها في ملف ثوابت مركزي | src/lib/site.ts + 25 ملفاً |
| 2026-08-29 | حذف كود ميت مؤكد (غير مستورد من أي ملف): LuxeServicePage, LuxeRequest, LuxeReveal, luxeCopy, luxeAssets, OptimizedImage, ImageSkeleton, utils.ts + إزالة clsx/tailwind-merge من التبعيات | src/components, src/lib, package.json |
| 2026-08-29 | ضغط 17 صورة كانت فوق 250KB (أسوأها 1.1MB→239KB) + تحسين SVG بـsvgo (74KB→58KB) + حذف 4 أيقونات غير مستخدمة — توفير ~2.8MB | public/images, public/icons |
| 2026-08-29 | تصفير تحذيرات ESLint: alt صريح في ImageWithFallback، أبعاد صريحة في DallahLogo، توثيق استثناء gtag في head | ImageWithFallback, DallahLogo, layout.tsx |
| 2026-08-29 | **المرحلة 1 — منظومة الحماية الآلية** (منقولة من osoul-aldiafa-v2): فاحص سيو S1–S14 (عناوين/أوصاف/H1/canonical/JSON-LD/كلمات محظورة/أرقام غير موثّقة E-E-A-T/تشابه Doorway) + فاحص تشابه بعتبة 60% مع تحييد أسماء المدن + فاحص أصول CH1–CH8 (ميزانية 250KB/صورة، تنسيقات، بصمات مكررة) — كلها بوضع baseline-diff: تفشل فقط على المخالفات **الجديدة**. خط الأساس: seo=156، similarity=118، assets=29 دَيناً موثّقاً يُصفّى في المراحل 2–5 | scripts/{seo-guard,similarity-check,check-assets,baseline}.mjs, scripts/baselines/ |
| 2026-08-29 | Lighthouse CI بعتبات ملزمة (أداء≥0.9، وصولية≥0.95، سيو=1.0) + GitHub Actions يشغّل typecheck+lint+build+الفواحص الثلاثة على كل push/PR | lighthouserc.json, .github/workflows/quality.yml, package.json |
| 2026-08-29 | إصلاحات سيو من الفاحص: 14 عنواناً كان >60 حرفاً قُصّرت (قالب serviceCity + locations)، حذف تكرار البراند في legal/social (القالب يضيفه)، وصفان >158 حرفاً، ضغط counter-1.webp (264→190KB)، استثناء بكسل Meta noscript من CH5 | localContent.tsx, locations/[city]/page.tsx, legal/page.tsx, social/page.tsx |
| 2026-08-29 | سجل إثبات الأرقام data/proof.json: الأرقام التسويقية (+500 مناسبة، +200 عميل، 100% رضا، 10 سنوات) مسجّلة verified_by_owner:false بانتظار تأكيد المالك — فاحص S10 يرصد أي رقم جديد غير موثّق | data/proof.json |
| 2026-08-29 | استيعاب بحث خارجي (14 ملف): 13 مكسباً متبنّى (أبرزها GBP + PDPL + Dynamic OG + لهجة سعودية)، 9 توصيات مرفوضة/مشروطة (صفحات أحياء=N1 doorway، AggregateRating وهمي، شهادات مؤلفة، LCP 9.4s رقم قديم يحتاج إعادة قياس)، تصحيح رقم واتساب في التوثيق ليطابق site.ts | docs/RESEARCH-INTAKE-2026-08.md, CLAUDE.md |
| 2026-08-29 | تحقق من المالك: **GBP موجود وفعّال** (4.5⭐/49 مراجعة — الباحث الخارجي أخطأ بادعاء غيابه) + حسم رقم الواتساب 0508252134 نهائياً + إضافة رابط Maps إلى SOCIAL وإلى sameAs في Organization/LocalBusiness Schema | src/lib/site.ts, src/lib/schema.ts, docs/RESEARCH-INTAKE-2026-08.md |
| 2026-08-29 | **قياس Lighthouse حقيقي (موبايل، بناء إنتاجي)**: الأساس 49/100 — LCP 4.2s (أسطورة 9.4s ماتت رسمياً)، العنق الحقيقي TBT 3,540ms سببه حركات motion لا نهائية (repeat:Infinity) تشغّل JS كل إطار | /tmp/lh-home-mobile.json (تقرير الأساس) |
| 2026-08-29 | **إصلاح أداء المرحلة 2**: تحويل كل الحركات اللانهائية (جسيمات + شرارات HomePageClient، توهج شعار Navbar) من motion/JS إلى CSS keyframes على خيط الـ compositor مع حماية prefers-reduced-motion — **النتيجة المقاسة: Perf 49→62، TBT 3,540→1,830ms (-48%)، SI 7.6→3.2s، LCP 4.2→3.6s، TTI 12.9→8.7s** | src/styles/luxe.css, src/app/HomePageClient.tsx, src/components/Navbar.tsx |
| 2026-08-29 | أيقونات PWA maskable (192+512 بمنطقة أمان 72% على خلفية سوداء) مضافة إلى manifest.json — خط أساس assets حُدّث 29→31 (استثناء PNG مقصود: معيار maskable يتطلب PNG) | public/icon-maskable-*.png, public/manifest.json, بصمة الفاحص |

---

## 9. التواصل والمعلومات

- **الموقع**: https://keifaldiafa.com
- **واتساب**: +966508252134 (مؤكَّد بملف Google Business الرسمي)
- **Google Business**: «كيف الضيافة للأفراح والمناسبات» — 4.5⭐/49 مراجعة، مفتوح 24/7، CID: 15151944507933206223
- **البريد**: keifdiafa@gmail.com
- **إنستغرام**: @keifdiafa
- **العنوان**: الرياض، المملكة العربية السعودية
