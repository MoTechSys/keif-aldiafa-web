# AGENTS.md — نقطة الدخول الوحيدة لأي وكيل (اقرأ هذا أولاً، كاملاً)

> آخر تحديث: 2026-09-11 · يُحدَّث في نهاية كل جلسة. إن تعارض مع أي ملف آخر في المستودع فهذا الملف + `docs/AGENT-STATE.md` + `docs/DECISIONS.md` هي المُلزمة (الأحدث يغلب).

## 0. ترتيب القراءة الإلزامي (≈ 25 دقيقة — لا تختصر)
1. **هذا الملف** كاملاً.
2. `docs/AGENT-STATE.md` — أين نحن بالضبط، ما تم بأرقام، **ما بقي ومن يقرر كل بند**، أوامر التحقق، الدروس.
3. `PLAN.md` كاملاً — الخطة بالمراحل 0–7، بوابات الخروج، ملف المالك (§1)، القواعد (§2).
4. `docs/DECISIONS.md` كاملاً — **D109–D155** قرار مرقّم لكل شيء؛ القرار لا يُعدَّل بل يُنسَخ بقرار جديد يذكر ما ألغاه. **التالي الحر مكتوب في رأس الملف** — استعمله ولا تكرّر رقماً.
5. `docs/owner-messages/` — **كل** الملفات بترتيب الاسم (التاريخ ثم الموضوع). هذه كلمات المالك حرفياً؛ آخر 6 ملفات هي سياق الجلسة الأخيرة.
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

## 3. ذاكرة الوكيل السابق — ما ليس في الكود ويجب أن تعرفه
- **الحالة**: المراحل 0–6 مكتملة (بناء + فحص + توثيق). **لا شغل معلّق تقنياً**؛ المعلّق كله قرارات مالك — قائمته المرتّبة في `docs/AGENT-STATE.md` §3. أول ما ينتظره المالك: **مراجعة الصور بطاقة‑بطاقة (D139)** — قال «آخر شي الصور بعدما أقلك» — **لا تبدأها قبل أمره**، وحين يأمر اسأله بخيارين: (أ) صفحة‑صفحة بدءاً بالتقديمات، (ب) قائمة موحّدة لكل الصور المشكوك فيها في الموقع.
- **سؤال مطروح بلا جواب** (D138): مقاسات النموذج الصغيرة على الجوال `.tag` 10.9px · `.l2` 9.9px · `<small>` 9px — تُكبَّر أم تبقى 1:1؟ لا تقرر بالنيابة.
- **ملاحظتا المالك الأخيرتان على المحتوى** (D139، محفوظتان صوتياً): «كركديه مثلج» = ستوك زخرفي #307 (هو شاي أحمر) · «قهوة تركية — بطاقة QR» #108 (لا علاقة لـQR بالتقديمات) · «شعارات مكررة». مبدأه: **وصف الكتالوج للفهرسة، أما العرض في موقعنا فبما يناسب القسم**.
- **الأداء**: Lighthouse جوال ≥90 لم يتحقق في محاكاة الساندبوكس (services 84 · home 69–83)؛ المتبقي gtag داخل نافذة Lantern + LCP محاكى (المرصود 0.46s). يُقاس على الاستضافة الفعلية قبل أي تعديل آخر. gtag مؤجّل بعد load/تفاعل (D141) — إن ظهر تحذير «لا تتوفر علامة» في Google Ads يُعاد `<script async>` فوراً.
- **المحتوى المحلي مكرر** بين المدن (S12 ≈ 92–94%) بقبول المالك المؤقت (D129/D130) — يُعالَج في المرحلة 7 بقراره.
- **البيئة**: الخادم `next start -p 3111`؛ بعد كل build **اقتل العملية الماسكة للمنفذ** ثم شغّل (خادم قديم = 400 على chunks). Playwright/axe/Lighthouse غير مُثبَّتة في package.json عمداً — انظر `scripts/browser/README.md`. المراجع الخارجية تُستنسخ إلى `/tmp/allpro` و`/tmp/catalog` (الأوامر في PLAN §7).
- **التوكن**: يسقط أحياناً أثناء الجلسة (`Invalid username or token`) — أعِد المصادقة ثم `git push`؛ لا تترك commit محلياً.
- **يدوي من المالك**: تفعيل CI (`.github/workflows/quality.yml` موجود منذ 11252a7 — تحقّق أنه يعمل على GitHub)، حذف توكن قديم كُشف في محادثة سابقة.
- **الدروس المدفوعة** (لا تكرّرها): AGENT-STATE §5 — أهمها: بوابة كل مرحلة تُقارَن بقائمة PLAN حرفياً (سقطت `/links` بسبب الذاكرة)؛ لا تعتمد على DOM/axe بلا لقطة بالعين؛ عند نقل CSS احفظ `@media`/`}` وعدّ الأقواس.

## 4. بنية المستودع (الحالية — 2026-09-09)
```
src/app/(site)/        كل الصفحات + template.tsx (الشِل) + loading.tsx
src/app/(bare)/links/  صفحة الروابط بلا شِل (D145)
src/app/layout.tsx     خطوط محلية · ميتا · gtag مؤجّل · شِيمات Organization/LocalBusiness/WebSite
src/components/v7/     الشِل: Header · Footer · WhatsAppFab · Lightbox · Reveal · WaIcon · socialIcons · nav
src/components/home/   الرئيسية + قطع مشتركة (shared.tsx: SecHead/Em/UniformFigures/OfferingTiles/SvcCard/CutoutGrid · CatalogImg · HeroPicture · Strip)
src/components/local/  LocalPage (33 صفحة محلية) · HeroSlides · PartnersCompact
src/components/pages/  الصفحات العامة: shared.tsx (PageHero/Chips/Fig/FaqBlock/ContactBlock/WaBtn) · Offerings/Services/Portfolio/About/Contact/Locations/Social · PageFx · ChannelFx · ContactForm · PortfolioFilters · ContactChannels
src/lib/               imageCatalog(.data) · homeContent · offeringsContent · servicesContent · portfolioContent · localPages/localPage · cities · site · schema · partners
src/styles/v7.css      CSS النموذج 1:1 (764 قوساً متوازنة) · globals.css (بقايا Tailwind لـ404/loading فقط)
public/images/         catalog(314) · partners(49) · brand · badges · cutouts(6) · links(9)
scripts/               seo-guard · similarity-check · check-assets · baseline · import-catalog · html-audit · browser-sweep · pixel-audit · browser/*
data/proof.json        الأرقام المعتمدة من المالك
docs/                  AGENT-STATE · DECISIONS · reports/ · owner-messages/ · shots/phase-{1..6}/
```

## 5. بداية الجلسة — ما تقوله للمالك
تقرير جاهزية قصير: (1) قرأت §0 كاملاً (2) أرقام بوابة الجودة الفعلية الآن (3) ما ينتظره منه بالترتيب (من AGENT-STATE §3) (4) **سؤال واحد** فقط إن لزم. ثم لا تتحرك في المحتوى/الصور/النشر إلا بأمره.
