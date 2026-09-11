# AGENTS.md — نقطة الدخول الوحيدة لأي وكيل (اقرأ هذا أولاً، كاملاً)

> آخر تحديث: 2026-09-11 · يُحدَّث في نهاية كل جلسة. إن تعارض مع أي ملف آخر في المستودع فهذا الملف + `docs/AGENT-STATE.md` + `docs/DECISIONS.md` هي المُلزمة (الأحدث يغلب).

## 0. ترتيب القراءة الإلزامي (≈ 25 دقيقة — لا تختصر)
1. **هذا الملف** كاملاً.
2. `docs/AGENT-STATE.md` — أين نحن بالضبط، ما تم بأرقام، **ما بقي ومن يقرر كل بند**، أوامر التحقق، الدروس.
3. `PLAN.md` كاملاً — الخطة بالمراحل 0–7، بوابات الخروج، ملف المالك (§1)، القواعد (§2).
4. `docs/DECISIONS.md` كاملاً — **D109–D155** قرار مرقّم لكل شيء؛ القرار لا يُعدَّل بل يُنسَخ بقرار جديد يذكر ما ألغاه. **التالي الحر مكتوب في رأس الملف** — استعمله ولا تكرّر رقماً.
5. `docs/owner-messages/` — **كل** الملفات بترتيب الاسم (التاريخ ثم الموضوع). هذه كلمات المالك حرفياً؛ ملفات 2026-09-11 (11 ملفاً) هي سياق الجلسة الأخيرة — آخرها «كوكيز… ثم نرجع للمحتوى» و«هل وثقت كل شي».
6. `docs/reports/2026-09-09-phase-6-performance.md` — آخر تقرير أداء مُقاس · **ثم** `docs/reports/2026-09-11-project-history-deep-analysis.md` و`2026-09-11-competitors-and-global-standards-research.md` (فجوات G1–G13) و`2026-09-11-structure-images-content-deep-analysis.md` (تحليل ثلاثي هيكلية/صور/محتوى بأرقام من HTML المبني — قائمة مرتّبة §4).
7. `docs/PROMPT-AGENT-BOOTSTRAP-v2.txt` — منهج العمل (أدوار الشركة البرمجية، بوابات، نقطة العمى).
8. ثم شغّل بوابة الجودة (§4 في AGENT-STATE) **قبل أي تعديل** وسجّل الأرقام.

**ملفات تاريخية لا تُعتمد** (تبقى للأرشيف فقط): `CLAUDE.md` (يعلن هو نفسه أنه تاريخي)، `docs/agents/AI_INSTRUCTIONS.md` (رقم واتساب قديم `535636933` وتوصية framer-motion — كلاهما مُلغى)، `docs/ROADMAP.md`، `docs/PROJECT_ANALYSIS.md`، `audit/`، `reports/`، `research/`، و**تقارير الجذر القديمة التي نُقلت إلى `docs/archive/root-reports-2026-09/`** (D153 — تاريخ 2026-09-08 وما قبل، من الموقع القديم قبل النموذج v6.9). المصدر الوحيد للحقيقة الحالية: الكود + الملفات في §0.

## 1. المالك وكيف تخاطبه (من PLAN §1 — مُلزم)
- **MoTechSys** — يُنادَى **«يا غالي»**. عامية يمنية/سعودية ورسائل صوتية أحياناً («اشتي» = أريد، «سوي» = افعل). **فسّر النية لا الحرف.**
- يريد: **عربية موجزة** · عناوين · **أرقام مقاسة** فقط (لا ادّعاء غير مُقاس) · **سؤال واحد كحد أقصى** وبسيط (نعم/لا أو أ/ب). الأسئلة المعقدة تربشه — إن قال «ما فهمت سؤالك» أعِد صياغته أبسط بخيارين.
- يفوّض: «قرّر أنت ووثّق». لكن قرارات **المحتوى/الصور/النشر** له وحده.
- **كل رسالة منه تُحفظ حرفياً** في `docs/owner-messages/YYYY-MM-DD-<موضوع>.md` (النص كما ورد + الفهم التنفيذي)، حتى القصيرة، وحتى الصوتية (تُنقل نصاً).

## 2. القواعد الحمراء (لا استثناء — التفصيل في PLAN §2 وDECISIONS)
1. **لا PR** — commit مباشر إلى `main` بعد بوابة الجودة (`git push origin main`). فرع `genspark_ai_developer` قديم ومهمل.
2. **لا تغيير slug** لأي مسار موجود. إضافة مسار جديد مسموحة (`/links` مثال — D145).
3. **لا أسعار · لا يوتيوب · لا أرقام** إلا: `+500` · `منذ 2016` · `س.ت / الرقم الموحّد 7033069720`. أي رقم آخر يجب أن يكون `verified_by_owner:true` في `data/proof.json` (S10 يفشل البناء).
4. **D111**: alt/title/الأسماء من الكتالوج **حرفياً** (`src/lib/imageCatalog.data.ts` — 314 سجلاً، مولَّد من `MoTechSys/catalog-keif-aldiafa-photots`؛ لا يُعدَّل يدوياً). CH9 يفشل البناء عند أي تركيب.
5. **D113**: لا علامة مائية برمجية على الصور.
6. **D115**: الهيكل والCSS = النموذج **prototype-home v6.9** 1:1 (`MoTechSys/allpro` → `prototype-home/build/{build.py,data.py,local.py}`). أي انحراف يُوثَّق بقرار.
7. **D117**: كل تغيير بصري يُفحص على **390/768/1024/1440** + axe + `scripts/pixel-audit.mjs` + لقطة تُقرأ بالعين.
8. **كل قرار جديد = رقم في DECISIONS.md** (صف واحد: التاريخ · القرار · ما ألغاه · ملاحظة).
9. **لا نشر** (keif-v2 / Vercel) إلا بأمر صريح من المالك.
10. بوابة الجودة قبل كل commit: `npx tsc --noEmit && npm run lint && npm run build && npm run guard` — خطوط الأساس (`scripts/baselines/*.json`) **تُخفَّض فقط**؛ رفعها = قرار مالك موثّق (D130 مثال).

## 3. ذاكرة الوكيل السابق — ما ليس في الكود ويجب أن تعرفه (محدَّث 2026-09-11 نهاية الجلسة)
- **أين نحن بجملة**: المراحل 0–6 مكتملة + إصلاحات تقنية 2026-09-11 (D149–D155: خصوصية/كوكيز PDPL · sitemap صادق · مجمّع صور محلي · أرشفة الجذر). **الموقع الجديد غير منشور** — الإنتاج `keifaldiafa.com` ما زال الموقع القديم (يوليو). **لا شغل تقني معلّق**؛ كل المعلّق قرارات مالك (AGENT-STATE §3).
- **آخر كلمة من المالك** (`owner-messages/2026-09-11-كوكيز-ليش-مافيش-…`): «اصلح الداخلي والخراب **ثم نرجع إلى المحتوى والصفحات**». الإصلاح تم. **السؤال المطروح له الآن بلا جواب**: نبدأ المرحلة 7 بـ (أ) محتوى فريد للمدن الثماني (حلّ doorway — الأكبر أثراً) أم (ب) صفحة `/coffee-break-sharikat-jeddah` أولاً (87 صورة جاهزة، 8 منها إثبات T1–T2 غير معروضة في أي صفحة — أسرع نتيجة)؟ **لا تبدأ أيّاً منهما قبل جوابه.** نموذج الصفحة المكتوبة يدوياً = `getIntentPage` في `src/lib/localPage.ts` (`/mubashirin-qahwa-jeddah` — 1,052 كلمة / 619 مميزة، أغنى صفحة محلية).
- **ثلاثة تقارير 2026-09-11 هي مرجع كل قرار قادم** (`docs/reports/2026-09-11-*`): التاريخ · المنافسون والمعايير (G1–G13؛ G8/G11 مسحوبتان بعد التحقق) · التحليل الثلاثي (§4 قائمة مرتّبة مع صاحب القرار). كل تقرير فيه **سجل تحقق** مستقل — اقرأه قبل الاعتماد على أي رقم، وكلها تحمل سطر مؤلف (D148).
- **الأرقام التي تحكم المرحلة 7**: كلمات فريدة لكل مدينة **7–8%** فقط (Jaccard خام 49–50%؛ S12 92–95%) · 15 سؤال FAQ × 8 مدن · هدف PLAN للمرحلة 7: تشابه ≤45% · صور الشقيقات المتغيّرة الآن 14–32% تطابقاً بعد D152 (الثابت 21–22 صورة من أقسام staff/offerings/services بحكم القالب).
- **مراجعة الصور D139** ما زالت عند المالك — قال «آخر شي الصور بعدما أقلك». **لا تبدأها قبل أمره**، وحين يأمر اسأله بخيارين: (أ) صفحة‑صفحة بدءاً بالتقديمات، (ب) قائمة موحّدة. ملاحظاته المحفوظة: «كركديه مثلج» #307 = ستوك (شاي أحمر) · «قهوة تركية — QR» #108 · «شعارات مكررة». مبدأه: **وصف الكتالوج للفهرسة، أما العرض في موقعنا فبما يناسب القسم**. 32 صورة زخرفية في `/offerings` (30%).
- **سؤال مطروح بلا جواب منذ 09-09** (D138): مقاسات النموذج الصغيرة على الجوال `.tag` 10.9px · `.l2` 9.9px · `<small>` 9px — تُكبَّر أم تبقى 1:1؟ لا تقرر بالنيابة.
- **الكوكيز (D149)**: Consent Mode v2 افتراضي denied في `layout.tsx`؛ الشريط `src/components/CookieConsent.tsx` يحفظ `localStorage.kd_consent`. **قاعدة**: أي أداة تتبّع جديدة (Meta/TikTok عبر ENV) تُذكر في `/privacy` قبل تفعيلها. CSP في `next.config.js` يشمل `pagead2.googlesyndication.com` (لولاه تُحجب pings الموافقة — قِيس بالمتصفح).
- **`/links`** (D145/D150): index,follow لكن **خارج sitemap** عمداً (يتيمة + نصّ مكرر مع /contact) — وجهة الباركود المطبوع؛ لا تُعِدها للخريطة ولا تضع noindex بلا قرار.
- **الأداء**: Lighthouse جوال ≥90 لم يتحقق في محاكاة الساندبوكس (services 84 · home 69–83)؛ المتبقي gtag + LCP محاكى (المرصود 0.46s). يُقاس على الاستضافة الفعلية بعد النشر. gtag مؤجّل بعد load/تفاعل (D141) — إن ظهر تحذير «لا تتوفر علامة» في Google Ads يُعاد `<script async>` فوراً.
- **خطوط الأساس** (`scripts/baselines/`): seo 178 · similarity 178 · assets 11 — **تُخفَّض فقط**. حُدّثت 185→178 في D155 لسبب موثّق (تغيّر تركيبة أزواج التشابه حول عتبة 60% بعد D152، المتوسط لم يتغيّر). أي رفع = قرار موثّق.
- **البيئة**: الخادم `next start -p 3111`؛ بعد كل build **اقتل العملية الماسكة للمنفذ** (`ps aux | grep next-server` → kill pid؛ لا `pkill -f next` من داخل أداة Bash — يقتل الجلسة) ثم `(setsid nohup npx next start -p 3111 > /tmp/next.log 2>&1 &)`. Playwright/axe/Lighthouse غير مُثبَّتة عمداً — انظر `scripts/browser/README.md`. المراجع الخارجية تُستنسخ إلى `/tmp/allpro` و`/tmp/catalog` (PLAN §7). سكربتات التحليل الثلاثي محفوظة في `scripts/analysis/` (README فيها) — أعد تشغيلها بعد أي تغيير في الصور/المحتوى.
- **التوكن/الدفع**: `git push origin main` مباشرة (لا PR). مصادقة `~/.git-credentials` بتوكن المالك (D147؛ خارج المستودع، لا يُطبع أبداً). إن سقط: اطلب من المالك توكناً جديداً. التوكن المكشوف في محادثة 2026-09-11 يجب أن **يبطله المالك** بعد الجلسة (A5).
- **يدوي من المالك**: تفعيل CI (`ci/quality.yml` → `.github/workflows/quality.yml` — توكن الوكيل بلا صلاحية workflows)، إبطال التوكنات المكشوفة، **أمر النشر** (خطواته كاملة في `docs/DEPLOYMENT.md` المُعاد كتابته 2026-09-11).
- **الدروس المدفوعة** (لا تكرّرها): AGENT-STATE §5 — أهمها: بوابة كل مرحلة تُقارَن بقائمة PLAN حرفياً؛ لا تعتمد على DOM/axe بلا لقطة بالعين؛ عند نقل CSS احفظ `@media`/`}` وعدّ الأقواس؛ **كل ادّعاء تحليلي يُمرَّر على تحقق ثانٍ قبل كتابته** (سقط ادّعاءان في 09-11: pixels محمَّلة، TTFB 0.9s — كلاهما إيجابي كاذب).

## 4. بنية المستودع (الحالية — 2026-09-11)
```
src/app/(site)/        كل الصفحات + template.tsx (الشِل) + loading.tsx · privacy/ (D149) · legal/ · social/ · [serviceCity]/ · locations/ · mubashirin-qahwa-jeddah/
src/app/(bare)/links/  صفحة الروابط بلا شِل (D145) — خارج sitemap (D150)
src/app/layout.tsx     خطوط محلية · ميتا · Consent Mode v2 + gtag مؤجّل · شِيمات Organization/LocalBusiness/WebSite · <CookieConsent/>
src/app/sitemap.ts     lastmod حقيقي من git (D150) · sitemap_index.xml/ · image-sitemap.xml/ · robots.ts
src/components/CookieConsent.tsx  شريط الكوكيز (D149) · GoogleAnalytics.tsx (تحويلات + pixels مشروطة بENV) · SEO.tsx (generatePageMetadata) · ClientLayout.tsx
src/components/v7/     الشِل: Header · Footer (رابط /legal + /privacy) · WhatsAppFab · Lightbox · Reveal · WaIcon · socialIcons · nav
src/components/home/   الرئيسية + قطع مشتركة (shared.tsx · CatalogImg · HeroPicture · Strip)
src/components/local/  LocalPage (33 صفحة محلية) · HeroSlides · PartnersCompact
src/components/pages/  الصفحات العامة: shared.tsx (PageHero/Chips/Fig/FaqBlock/ContactBlock) · Offerings/Services/Portfolio/About/Contact/Locations/Social · PageFx · ChannelFx · ContactForm · PortfolioFilters · ContactChannels
src/lib/               imageCatalog(.data) · homeContent · offeringsContent · servicesContent · portfolioContent · localPages/localPage (svcText قوالب ${ar} · poolFor/slots D152 · getIntentPage نموذج الصفحة اليدوية) · cities · site (SOCIAL متحقَّق) · schema · partners
src/styles/v7.css      CSS النموذج 1:1 (764 قوساً متوازنة) · globals.css (بقايا Tailwind لـ404/loading + .ck شريط الكوكيز)
public/images/         catalog(314) · partners(49) · brand · badges · cutouts(6) · links(9)
scripts/               seo-guard · similarity-check · check-assets · baseline · import-catalog · html-audit · browser-sweep · pixel-audit · browser/* · baselines/{seo,similarity,assets}.json
data/proof.json        الأرقام المعتمدة من المالك (+500 · 2016 = true؛ 200 · 100% = false ولا تُعرض)
docs/                  AGENT-STATE · DECISIONS · DEPLOYMENT (2026-09-11) · reports/ · owner-messages/ · shots/ · archive/ (تقارير الجذر القديمة + manus/agent-skills — لا تُعتمد)
ci/quality.yml         نسخة workflow — تفعيلها يدوي من المالك
```
مسارات الموقع: 44 (رئيسية · 10 عامة + /privacy · 24 خدمة×مدينة · 8 مدن) + /links · sitemap 43 (بلا /links).

## 5. بداية الجلسة — ما تقوله للمالك
تقرير جاهزية قصير: (1) قرأت §0 كاملاً (2) أرقام بوابة الجودة الفعلية الآن (3) ما ينتظره منه بالترتيب (من AGENT-STATE §3) (4) **سؤال واحد** فقط إن لزم. ثم لا تتحرك في المحتوى/الصور/النشر إلا بأمره.
