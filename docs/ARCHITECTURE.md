# الهيكل التقني

## المنظومة

| البند | القيمة |
|---|---|
| الإطار | Next.js **14.2.35** — App Router |
| اللغة | TypeScript |
| الستايل | Tailwind CSS 3.4 + ثلاث طبقات CSS مخصّصة |
| النشر | Vercel |
| الصور | `next/image` (AVIF + WebP) |
| الخطوط | El Messiri (عناوين) · Cairo (متن) |

**لا قاعدة بيانات، ولا API، ولا حالة على السيرفر.** كل المحتوى في ملفات TypeScript، وكل الصفحات ثابتة (SSG) وقت البناء. هذا قرار مقصود: موقع تسويقي هدفه سرعة وثبات، والمحتوى يُعدَّل بـ pull request لا بلوحة تحكّم.

---

## الفكرة المعمارية المركزية: ٢٤ صفحة من مكوّن واحد

```
src/lib/localPages.ts          →  CITIES (٨) × SERVICES (٣) = LOCAL_PAGES (٢٤)
              ↓
src/app/[serviceCity]/page.tsx →  generateStaticParams() تُولّد ٢٤ مساراً
              ↓
src/components/LocalServicePage.tsx  →  العرض (٥٤١ سطراً)
              ↑
src/lib/localContent.tsx       →  النصّ الخاصّ بكل تركيبة
src/lib/localImagery.ts        →  الصور الخاصّة بكل تركيبة
```

**المسار** بصيغة `[service]-[city]` مثل `sababin-qahwa-jeddah`. يُفكَّك بـ `parseServiceCity()` ويُبنى بـ `localSlug()` — دالّتان في `localPages.ts`، **لا تُبنَ المسارات نصّياً في أي مكان آخر**.

### ⚠️ نقطة الحذر الأولى في المشروع
تعديل `LocalServicePage.tsx` يمسّ **٢٤ صفحة دفعةً واحدة**. وتعديل `localContent.tsx` يمسّ صفحةً واحدة.
**فالقاعدة:** ما كان خاصّاً بمدينة → في طبقة البيانات. ما كان بنيوياً → في المكوّن. من خصّص المكوّن بشروط `if (city === …)` أفسد المعمار.

### ولماذا هذا لا يخالف مطلب «كل صفحة مميّزة»؟
لأن التمايز يأتي من **طبقة البيانات**: كل تركيبة لها عنوانها، غلافها، صورها، وأسئلتها. المكوّن يوفّر *الجودة* الموحّدة، والبيانات توفّر *الهوية* المختلفة. تحقّقتُ بصرياً: الرياض ومكّة لهما عنوان مختلف وغلاف مختلف وسطر فرعي مختلف.

---

## شجرة الملفات

```
src/
├── app/
│   ├── layout.tsx              الهيكل الجامع + الخطوط + Schema العام
│   ├── template.tsx            انتقال بين الصفحات
│   ├── page.tsx + HomePageClient.tsx
│   ├── [serviceCity]/page.tsx  ★ مُولِّد الـ ٢٤ صفحة
│   ├── social/                 ★ الحسابات + الباركود
│   │   ├── page.tsx            metadata + JSON-LD
│   │   └── SocialClient.tsx    العرض
│   ├── services/ offerings/ portfolio/ about/ contact/ locations/ legal/
│   ├── sitemap.ts robots.ts
│   ├── sitemap_index.xml/route.ts
│   ├── image-sitemap.xml/route.ts
│   ├── loading.tsx not-found.tsx
│
├── components/
│   ├── LocalServicePage.tsx    ★ ٥٤١ سطراً — قلب الصفحات الفرعية
│   ├── Navbar.tsx              + الشريط اللاصق (سطر ١٧٥)
│   ├── Footer.tsx
│   ├── LocalReveal.tsx         IntersectionObserver لـ data-rise
│   ├── ProtectedImage.tsx      منع السحب/النقر الأيمن
│   ├── luxe/
│   │   ├── LuxeIcons.tsx       ★ الأيقونات الذهبية المجسّمة
│   │   ├── LuxeServicePage.tsx ⚠️ يتيم
│   │   ├── LuxeReveal.tsx      ⚠️ يتيم
│   │   └── LuxeRequest.tsx     ⚠️ يتيم
│   └── Breadcrumbs · SEO · GoogleAnalytics · OptimizedImage · …
│
├── lib/
│   ├── localPages.ts           ★ CITIES · SERVICES · LOCAL_PAGES
│   ├── localContent.tsx        ★ نصّ كل تركيبة (٢٨٣ سطراً)
│   ├── localImagery.ts         ربط الصور بالصفحات
│   ├── schema.ts               بيانات جوجل المُهيكلة
│   ├── imageCatalog.ts         فهرس الصور لخريطة الصور
│   ├── cities.ts homeFaqs.ts images.ts utils.ts
│   ├── luxeCopy.ts luxeAssets.ts   ⚠️ يتيمان
│
├── styles/
│   ├── globals.css             الأساس + Tailwind
│   ├── luxe.css                ★ ١٠٦١ سطراً — نظام الفخامة
│   └── local.css               ★ ٤٧٣ سطراً — الصفحات الفرعية والصور
│
└── middleware.ts

public/
├── images/keif/                ★ ١٥ صورة .webp موقّعة (٢٫٨م.ب)
├── images/brand/qr-keif-aldiafa.png   ★ الباركود
└── brand/logo-official.png     الشعار الأصلي (مصدر العلامة المائية)
```

---

## نظام CSS — ثلاث طبقات لكل واحدة دور

| الملف | الدور |
|---|---|
| `globals.css` | الأساس، Tailwind، المتغيّرات |
| `luxe.css` | مفردات الفخامة **المشتركة**: `lx-btn` `lx-lift` `lx-h2` `lx-orn` `lx-medal` `lx-qr` `lx-lead` |
| `local.css` | خاصّ بالصفحات الفرعية والصور: `ls-h1` `ls-band` `ls-fig` `ls-tone` `ls-veil` `ls-scrim` `ls-svc` |

**البادئة تحدّد الموطن:** `lx-` مشترك، `ls-` خاصّ بالصفحات الفرعية.

### أصناف يجب معرفتها قبل التعديل

```css
.ls-tone   /* mix-blend-mode: multiply · inset:0 · z:2 — توحيد نبرة الصورة */
.ls-veil   /* تدرّج من الأسفل · z:1 — ليقرأ النصّ */
.ls-band   /* شريط النداء الأخير — يوفّر حشوه وتوسيطه بنفسه */
.lx-lift   /* بطاقة ترتفع عند اللمس */
.lx-medal  /* حاوية أيقونة دائرية ذهبية */
.lx-qr     /* بطاقة الباركود — كريمية إلزاماً (قطبية الماسح) */
.lx-orn    /* فاصل زخرفي — ٧٢px، احترس من تراكمه */
```

**قاعدتان لا تُكسران:**
1. **لا تخترع صنفاً موازياً.** `grep` أولاً. (اختراع `lx-cta` كان خطأً — الصحيح `ls-band`.)
2. **`filter` يُستبدل عند `:hover`** — أعِد كتابة التدريج كاملاً في قاعدة الـ hover.

---

## الحركة والعمق ثلاثي الأبعاد

`LocalReveal.tsx` يُثبّت `IntersectionObserver` على العناصر التي تحمل:

| السمة | الأثر |
|---|---|
| `data-rise` | صعود + ظهور تدريجي |
| `data-rise3d` | صعود + ميل ثلاثي الأبعاد |

**يعمل على الهاتف** — لأن ٩٥٪ من العملاء لا يملكون `:hover`، فربط الحركة بالتمرير لا باللمس.

**قاعدة أداء إلزامية:** `contain: paint` على الحاويات المتحرّكة. بدونها يُعيد المتصفّح رسم الصفحة كاملة فتتقطّع الحركة على الهاتف.

---

## الصور

**المسار:** `public/images/keif/` — ١٥ صورة `.webp` (`quality=86, method=6`)، كلها:
- **بأسماء تحمل كلمات مفتاحية** (`sabab-qahwa-jeddah-majlis-hall-keif-aldiafa.webp`)
- **بنصّ بديل عربي وصفي**
- **موقّعة بعلامة مائية منقوشة** (الإصدار ٥)

الفهرس الكامل: [`research/data/watermark_manifest.json`](../research/data/watermark_manifest.json)

### مصيدة `next.config.js`
```js
images: { localPatterns: [{ pathname: "/images/**" }] }
```
هذه **قائمة سماح أمنية**. أي صورة خارج `/images/**` تُرفض بـ **HTTP 400** `"url" parameter is not allowed`.
لهذا نُقل الباركود من `/brand/` إلى `/images/brand/` — **ولم تُوسَّع السياسة**.

### ومصيدة أخطر: المُحسِّن يقتل الباركود
`unoptimized` على `<Image>` الباركود **شرط صحّة لا مقايضة أداء**. التفصيل في [QR-BARCODE.md](QR-BARCODE.md).

---

## ⚠️ مكوّنات يتيمة — دَينٌ تقني معروف

خمسة ملفات **غير مستوردة في أي مكان**:
```
src/components/luxe/LuxeServicePage.tsx
src/components/luxe/LuxeReveal.tsx
src/components/luxe/LuxeRequest.tsx
src/lib/luxeCopy.ts
src/lib/luxeAssets.ts
```
المستعمل فعلاً من مجلّد `luxe/` هو **`LuxeIcons.tsx` وحده**.

هذه بقايا محاولة تصميم سابقة. **تُحذف أو تُستعمل — لكن لا تُترك**، لأن القارئ الجديد سيظنّها حيّة فيعدّلها بلا أثر. القرار مؤجّل في [ROADMAP.md](ROADMAP.md).

---

## أوامر التشغيل

```bash
npm run dev          # تطوير
npm run build        # بناء الإنتاج (يُولّد ٢٤ صفحة SSG)
npx tsc --noEmit     # فحص الأنواع
```

**في بيئة الاختبار المعزولة** يُشغَّل الموقع عبر `pm2` بالاسم `keif`:
```bash
pm2 restart keif --update-env
pm2 logs keif --nostream
```
</content>
