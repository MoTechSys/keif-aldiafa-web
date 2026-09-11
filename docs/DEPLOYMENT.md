# النشر — keif-aldiafa-web

> أُعيدت كتابته 2026-09-11 (D153) — النسخة السابقة وصفت الموقع القديم (`SocialClient.tsx` محذوف، معرّفات «بالتخمين» صارت متحقَّقة في `src/lib/site.ts`). **النشر لا يحدث إلا بأمر صريح من المالك** (PLAN §المرحلة 6).

## الحالة الفعلية (2026-09-11)
- **الإنتاج الحي `keifaldiafa.com` = الموقع القديم** (يوليو 2026): `/links` و`/mubashirin-qahwa-jeddah` تُرجعان 404 على الحي، والخطوط `font-tajawal`. كل ما بُني منذ 2026-09-07 (43 صفحة على النموذج v6.9) **غير منشور**.
- المستودع `MoTechSys/keif-aldiafa-web` فرع `main` = النسخة الجديدة الجاهزة. الموقع القديم محفوظ في فرع `old-version-2026-09-07`.
- المنصّة المقصودة: **Vercel** (مشروع `keif-v2` — بحسب PLAN). لا يوجد ربط تلقائي مؤكَّد بين `main` وVercel في هذه الجلسة — المالك يتحقّق من لوحة Vercel.

## ما يجب أن يكون صحيحاً قبل النشر (مُقاس في المستودع)
| البند | الحالة | الدليل |
|---|---|---|
| بوابة الجودة | ✅ | `npx tsc --noEmit && npm run lint && npm run build && npm run guard` |
| HTML audit | ✅ 44/44 | `node scripts/html-audit.mjs` |
| خصوصية + موافقة كوكيز (PDPL) | ✅ D149 | `/privacy` · `CookieConsent.tsx` · Consent Mode v2 افتراضي denied |
| sitemap lastmod حقيقي | ✅ D150 | `src/app/sitemap.ts` — من `git log -1 --format=%cs` |
| معرّفات الحسابات | ✅ متحقَّقة | `src/lib/site.ts` SOCIAL — كل رابط عليه ملاحظة التحقق؛ يوتيوب مستثنى (404) |
| Google verification | ✅ | `layout.tsx` metadata.verification (رمزان) |
| CI | ⬜ يدوي من المالك | نسخ `ci/quality.yml` → `.github/workflows/quality.yml` (توكن الوكيل بلا صلاحية workflows) |

## متغيّرات البيئة (Vercel → Settings → Environment Variables)
| المتغيّر | إلزامي؟ | ملاحظة |
|---|---|---|
| — | لا شيء إلزامي | GA4 `G-ZZHYDVVMT1` وAds `AW-11081441847` مكتوبان في `layout.tsx` (D141) |
| `NEXT_PUBLIC_GADS_LABEL_WHATSAPP` / `_CALL` | اختياري | لهما قيم افتراضية مؤكَّدة في `GoogleAnalytics.tsx` |
| `NEXT_PUBLIC_META_PIXEL_ID` / `NEXT_PUBLIC_TIKTOK_PIXEL_ID` | اختياري | **غير مضبوطة = لا تُحمَّل** · إن ضُبطت يجب تحديث `/privacy` أولاً (D149) |

## خطوات النشر (عند أمر المالك)
1. `git fetch && git status` — `main` نظيف ومساوٍ لـ `origin/main`.
2. في Vercel: المشروع مربوط بـ `MoTechSys/keif-aldiafa-web` فرع `main` · Framework = Next.js · Node ≥ 18 · Build = `npm run build`.
3. الدومين `keifaldiafa.com` + `www` → المشروع؛ `middleware.ts` يوحّد على non-www (301).
4. Deploy → انتظر الاكتمال.

## بعد النشر — إلزامي (من هاتف حقيقي + curl)
```bash
for p in / /links /privacy /mubashirin-qahwa-jeddah /sitemap.xml /image-sitemap.xml /robots.txt; do
  printf "%-32s %s\n" "$p" "$(curl -s -o /dev/null -w '%{http_code}' https://keifaldiafa.com$p)"; done
curl -s https://keifaldiafa.com/ | grep -c "v7-header"        # يجب > 0 (الموقع الجديد)
curl -s https://keifaldiafa.com/ | grep -c "font-tajawal"      # يجب = 0 (القديم اختفى)
```
- [ ] شريط الكوكيز يظهر مرة واحدة، و«موافق» يُطلق gtag consent update (DevTools → Network → `collect?...&gcs=G111`).
- [ ] زر واتساب + زر الاتصال من هاتف حقيقي · 3 صفحات مدن مختلفة.
- [ ] الباركود المطبوع → `/links` يفتح (خارج sitemap عمداً — D150 — لكن قابل للفهرسة).
- [ ] Search Console: أرسل `https://keifaldiafa.com/sitemap_index.xml` · اطلب فهرسة الرئيسية + `/qahwajiin-jeddah` + `/sababin-qahwa-jeddah`.
- [ ] Google Ads: تحقّق أن العلامة مكتشفة (Tools → Google tag) وأن التحويلات «واتساب/الاتصال» تسجّل.
- [ ] بعد 48 ساعة: PageSpeed Insights جوال للرئيسية و`/qahwajiin-jeddah` (الهدف ≥ 90؛ آخر قياس ساندبوكس 69–84 بسبب gtag — يُقاس على CDN فعلي).

## بيئة الاختبار المحلية
```bash
npm run build && npx next start -p 3111     # الوكيل يستخدم 3111
rm -rf .next/cache/images && npm run build  # بعد أي تغيير في الصور
```

## قاعدة الفرع
`main` = الإنتاج. لا PRs (بقرار المالك) — كل commit إلى `main` يجب أن يمرّ بوابة الجودة قبله.
