<div align="center">

# كيف الضيافة — Keif Al-Diafa

**موقع خدمات القهوجيين وصبابين القهوة والضيافة في السعودية**

`Next.js 14 App Router` · `TypeScript` · `Tailwind CSS 3.4` · `Vercel`

</div>

---

## ما هذا المشروع؟

موقع تسويقي لشركة **كيف الضيافة** — خدمات القهوجيين، صبابين القهوة العربية، وضيافة المناسبات في مدن السعودية.

**هدف الموقع واحد لا يتعدّد:** أن يدخل الزائر ويتواصل عبر **واتساب أو اتصال**.
ليس متجراً، وليس فيه سلّة ولا حساب مستخدم ولا حاسبة أسعار ولا باقات. كل قرار في هذا المستودع يُقاس بسؤال واحد: *هل يقرّب الزائر من زرّ التواصل أم يُبعده؟*

### ثلاث حقائق تحكم كل سطر في المشروع

| الحقيقة | الأثر على الكود |
|---|---|
| **٩٥٪ من العملاء على الهاتف** | كل قياس واختبار يجري على ٣٩٠×٨٤٤ (iPhone) أوّلاً. الحاسوب ثانوي. |
| **قاعدة الخمس ثوانٍ** | الزائر لا يقرأ. يتصفّح. فالطول عدوّ، والصور تتكلّم قبل النصّ. |
| **لا باقات ولا أسعار** | نعرض *ماذا نقدّم*، والسعر يُحدَّد في المحادثة. `price: false` مقيسة آلياً على كل صفحة. |

> 📖 **الفلسفة كاملة ولماذا اتُّخذ كل قرار:** [`docs/DESIGN-PHILOSOPHY.md`](docs/DESIGN-PHILOSOPHY.md)

---

## البدء السريع

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # بناء الإنتاج
npx tsc --noEmit     # فحص الأنواع
```

**متطلّبات أدوات البحث (اختيارية، بايثون):**
```bash
pip install pillow numpy qrcode pyzbar playwright && playwright install chromium
```

---

## الخريطة السريعة — أين أعدّل ماذا؟

| أريد أن أعدّل… | الملف |
|---|---|
| نصّ صفحة خدمة/مدينة | `src/lib/localContent.tsx` |
| إضافة مدينة أو خدمة جديدة | `src/lib/localPages.ts` |
| شكل الصفحات الفرعية (الـ ٢٤) | `src/components/LocalServicePage.tsx` |
| ستايل الفخامة (أزرار، بطاقات، حركة) | `src/styles/luxe.css` |
| ستايل الصفحات الفرعية والصور | `src/styles/local.css` |
| صفحة الحسابات والباركود | `src/app/social/` |
| بيانات جوجل المُهيكلة (Schema) | `src/lib/schema.ts` |
| ربط الصور بالصفحات | `src/lib/localImagery.ts` |

> 🗺️ **الهيكل الكامل بشرح كل ملف:** [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md)

---

## الصفحات

**٢٤ صفحة فرعية مُولَّدة تلقائياً** من مكوّن واحد — ٣ خدمات × ٨ مدن، عبر المسار الديناميكي `src/app/[serviceCity]/page.tsx` و`generateStaticParams()`. كلها ثابتة (SSG) وقت البناء.

```
/                          الرئيسية
/[service]-[city]          ٢٤ صفحة: sababin-qahwa-jeddah · qahwajiin-riyadh · diyafa-munasabat-makkah …
/services /offerings       الخدمات وما نقدّمه
/portfolio                 معرض الأعمال
/locations /locations/[city]  المدن
/social                    ★ الحسابات + باركود QR
/about /contact /legal      عن · تواصل · قانوني
/sitemap.xml /robots.txt /image-sitemap.xml
```

---

## التوثيق

| المستند | ماذا فيه |
|---|---|
| [`docs/DESIGN-PHILOSOPHY.md`](docs/DESIGN-PHILOSOPHY.md) | **أسلوب الفخامة**: الخطّ، اللون، الحركة، الصور، ولماذا رُفضت البدائل |
| [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) | الهيكل التقني، توليد الصفحات، طبقة البيانات، نظام CSS |
| [`docs/RESEARCH-LOG.md`](docs/RESEARCH-LOG.md) | **سجلّ الأعطاب**: كل عطب، كيف قِيس، ولماذا فشل الحلّ الأول |
| [`docs/WATERMARK.md`](docs/WATERMARK.md) | العلامة المائية: ٥ إصدارات، والقياس الذي كشف خطأ الفرضية |
| [`docs/QR-BARCODE.md`](docs/QR-BARCODE.md) | الباركود: لماذا لا يُحكم عليه بالعين، وكيف قتله مُحسِّن الصور |
| [`docs/SEO.md`](docs/SEO.md) | الـ SEO: أسماء الصور، البيانات المُهيكلة، خرائط الموقع |
| [`docs/TESTING.md`](docs/TESTING.md) | كيف تُقاس الصفحة وتُختبر بالأرقام لا بالانطباع |
| [`docs/ROADMAP.md`](docs/ROADMAP.md) | ما تبقّى، ولماذا لم يُنجَز |
| [`research/`](research/) | أدوات القياس (بايثون) + الأدلّة البصرية |

---

## ⚠️ قبل النشر — لازم يُقرأ

**روابط الحسابات في `src/app/social/SocialClient.tsx` مكتوبة بالتخمين** من نمط الاسم (`keifaldiafa`) ولم تُتحقَّق من صاحب المشروع.

```
instagram.com/keifaldiafa · tiktok.com/@keifaldiafa
snapchat.com/add/keifaldiafa · x.com/keifaldiafa · facebook.com/keifaldiafa
```

رابط خاطئ = العميل يمسح الباركود فتُفتح صفحة «غير موجود» — وهذا يضرّ الثقة أكثر من غياب الصفحة. **تحقّق من كل معرّف واحذف بطاقة أي منصّة بلا حساب.**

**والباركود يشير إلى `keifaldiafa.com/social`** — فلا يعمل قبل النشر. **لا تطبعه على كرت أو لوحة قبل التأكّد أن الصفحة حيّة**، لأن المطبوع لا يُعدَّل.

> 🚀 **خطوات النشر كاملة:** [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md)

---

## حالة المشروع

| البند | الحالة |
|---|---|
| البناء | ✅ ينجح · `npx tsc --noEmit` نظيف |
| الصفحات الفرعية | ✅ ٢٤ صفحة SSG · ١٢٫٢ شاشة على الهاتف |
| العلامة المائية | ✅ الإصدار ٥ (نقش) على ١٥ صورة |
| الباركود | ✅ مُتحقَّق بـ `pyzbar` — يُفكّ حتى ١٨٠px |
| صفحة الحسابات | ⚠️ جاهزة — تنتظر تأكيد المعرّفات |
| **أداء الرئيسية على الهاتف** | 🔴 **0.53 · LCP 9.4s** — أخطر رقم، انظر [SEO.md](docs/SEO.md) |
| صفحات جدة الجديدة | ⏳ لم تبدأ |

---

<div align="center">

**واتساب:** [0508252134](https://wa.me/966508252134) · **الموقع:** [keifaldiafa.com](https://keifaldiafa.com)

</div>
</content>
</invoke>
