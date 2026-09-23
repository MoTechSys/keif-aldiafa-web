# تقرير — تحليل `MoTechSys/keif-v2` والفرق مع النسخة الحالية ثم الرفع إليه

**التاريخ:** 2026-09-23 · **المؤلف:** Claude (Anthropic) · **بأمر المالك:** «ادخل للمستودع كيف الضيافة فيرجن 2، وسوّي فرق بالنسخة اللي فيه… بعدين سوّي رفع لحقنا النسخة الجديدة… باسم الحساب حقنا MoTechSys/keif-v2».

## 1. ما كان في keif-v2 (قبل الرفع)
| البند | القيمة |
|---|---|
| آخر commit | `ce3aaf4` — 2026-07-25 «fix(ads): تصحيح رمز تحويل الاتصال» |
| عدد الـcommits | 141 |
| الطبيعة | **الموقع القديم (يوليو 2026)** — نفس ما هو منشور حالياً على keifaldiafa.com (Tailwind + Tajawal + motion + embla) |
| المسارات | 10 صفحات: `/`, `/about`, `/contact`, `/legal`, `/locations`, `/locations/[city]`, `/offerings`, `/portfolio`, `/services`, `/[serviceCity]` |
| الصور | `public/images/**` 393 ملفاً / 35MB — **الأصول النظيفة بلا أي علامة** (مصدر D164/D165/D171) |
| SEO | `robots.ts`, `sitemap.ts`, og واحدة `og-cover-v2.jpg` لكل الصفحات |
| توثيق | 14 تقرير جذر + `reports/` (47) + `audit/` + `agent-skills/` + `manus-updates/` — تحليلات يوليو 2026 |
| علاقته بمستودعنا | فرع `old-version-2026-09-01` في keif-aldiafa-web = نفس القاعدة تقريباً (14 ملف src مطابق بالبايت، 35 مختلف بتعديلات لاحقة، 13 ملف زيادة/نقص) |

## 2. الفرق مع النسخة الحالية (`keif-aldiafa-web` main @ `44eabcd`)
| المحور | keif-v2 القديم | النسخة الحالية |
|---|---|---|
| الصفحات المبنية | 10 قوالب → ~21 مساراً | **56 مساراً** (8 مدن × 3 خدمات + 5 صفحات نوايا + /links /privacy /social /qahwajiin …) |
| الصور | 393 أصل نظيف، بلا كتالوج | 314 صورة كتالوج بختم واحد (0 مكرّر · 0 فوق وجه — D165) + alt/title حرفي (D111) + image-sitemap 274 |
| المعاينة الاجتماعية | صورة واحدة للجميع | **49 بطاقة فريدة** (D171) |
| الخصوصية/الكوكيز | لا شيء (GA4 وAds بلا موافقة) | `/privacy` + Consent Mode v2 (D149) |
| الجوال | غير مقاس | WCAG 2.5.5: 0 هدف تحت 44px (D168) |
| بوابة الجودة | لا | seo/similarity/assets(+CH10)/html-audit + baselines |
| CSS | Tailwind + luxe.css | v7.css من النموذج v6.9 1:1 (D115/D121) |
| التبعيات | motion, embla, clsx, tailwind-merge | Next 14 + React فقط |

**الخلاصة:** keif-v2 كان أرشيف الموقع القديم ومخزن الأصول النظيفة؛ لا يحوي شيئاً يجب دمجه في النسخة الحالية سوى **الصور الأصلية** (وهي مستخدمة أصلاً كمصدر لـ D164–D171 ومحفوظة في الفرع الأرشيفي).

## 3. ما نُفِّذ
1. **حفظ القديم**: `main` القديم دُفع كما هو إلى فرع `archive-v2-old-site-2026-07-25` (141 commit، الأصول النظيفة كاملة) — لا شيء فُقد. (كان هناك أيضاً `backup-before-replace-20260605-134836` من سابق.)
2. **الرفع**: تاريخ `keif-aldiafa-web/main` كاملاً دُفع إلى `keif-v2/main` (`358a19f`) بحساب MoTechSys.
3. **استثناء واحد موثّق**: `.github/workflows/quality.yml` لم يُرفع (GitHub يرفض من رمز بلا صلاحية `workflows`) — أُضيف `.github/WORKFLOW-NOTE.md` يشرح كيفية تفعيله بنسخ `ci/quality.yml` من الواجهة. كل ما عداه مطابق لـ `44eabcd`.

## 4. تحقّق
```
git ls-remote https://github.com/MoTechSys/keif-v2.git
358a19f… refs/heads/main                            ← النسخة الجديدة
ce3aaf4… refs/heads/archive-v2-old-site-2026-07-25  ← القديم محفوظ
```

## 5. توصية
مستودع واحد مصدر الحقيقة = `keif-aldiafa-web` (مرتبط بـ Vercel). keif-v2 الآن مرآة؛ إن أراد المالك إبقاءه مرآة دائمة يُضاف push إلى remote ثانٍ في خطوات النشر (`docs/DEPLOYMENT.md`). وإن كان Vercel مربوطاً بـ keif-v2 (لا بـ keif-aldiafa-web)، فهذا الرفع يجعل النشر التالي من kv2 يخرج بالنسخة الجديدة — **يُتحقَّق منه في لوحة Vercel قبل النشر**.
