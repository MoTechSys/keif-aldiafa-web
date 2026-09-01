import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProtectedImage from "@/components/ProtectedImage";
import LocalReveal from "@/components/LocalReveal";
import {
  LuxeIconDefs,
  IconDallah,
  IconCup,
  IconCrew,
  IconShield,
  IconClock,
  IconPin,
  IconStar,
  IconWhatsApp,
  IconPhone,
} from "@/components/luxe/LuxeIcons";
import { generatePageMetadata } from "@/components/SEO";
import {
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateWebPageSchema,
} from "@/lib/schema";
import { SITE_URL, WHATSAPP_NUMBER } from "@/lib/site";
import { HALL, COUNTER, TAWZEEAT, MAJLIS, BUFFET, CUT_DALLAH_GOLD } from "@/lib/localImagery";

/**
 * ═══════════════════════════════════════════════════════════════════════
 *  /mubashirin-qahwa-jeddah — صفحة نية مستقلة (W1)
 * ═══════════════════════════════════════════════════════════════════════
 * لماذا صفحة مستقلة وليست ضمن مصفوفة (خدمة × مدينة)؟
 *  • الطلب مُقاس: «مباشرين قهوة جدة» = 405 نقرات إعلانية (ثالث أعلى
 *    مصطلح في حساب Ads) + 101 ظهور عضوي × 0% CTR — بلا صفحة إطلاقاً.
 *    (allpro تقرير 11 — مصفوفة النوايا، بيانات 2026-09-01)
 *  • جدة فقط، عمداً: تعميم النية على 8 مدن = doorway مؤكد
 *    (تشابه 88.3% مُقاس بين صفحات المدن — سياسة جوجل محققة المصدر).
 *  • المحتوى مكتوب يدوياً بالكامل وفريد — لا يشارك نصوص LocalServicePage
 *    القالبية، حتى يمرّ فاحص التشابه (S12) بلا أزواج مخالفة جديدة.
 *  • لا أسعار (قيد المالك المقدس) — نية السعر تُخدم بواتساب.
 *  • «+500 مناسبة» بالصيغة الكاملة المعتمدة — موثقة في data/proof.json
 *    بتأكيد المالك الكتابي (verified_by_owner:true).
 * Server Component بالكامل: كل النص في HTML الـ SSR.
 */

const WA_DISPLAY = "0508252134";
const PATH = "/mubashirin-qahwa-jeddah";

// العنوان: 49 حرفاً شامل «| كيف الضيافة» (حد S1 = 60) — الكلمة المفتاحية أولاً ثم خطّاف.
const META_TITLE = "مباشرين قهوة جدة — تنظيم تقديم فوري";
// الوصف: 153 حرفاً (حد S4 = 158) — قيمة أولاً + إثبات موثق + CTA بلا تسعير.
const META_DESCRIPTION = `✓ مباشرين ومباشرات بزيّ موحّد ✓ تنظيم كامل لحركة تقديم القهوة ✓ +500 مناسبة نفّذها فريقنا في جدة والمنطقة الغربية. اطلب ترتيب مناسبتك — واتساب ${WA_DISPLAY}`;

export const metadata: Metadata = generatePageMetadata({
  title: META_TITLE,
  description: META_DESCRIPTION,
  path: PATH,
  keywords: [
    "مباشرين قهوة جدة",
    "مباشرين قهوه جده",
    "مباشرين جدة",
    "مباشرات قهوة جدة",
    "مباشرين ومباشرات جدة",
    "مباشرين قهوة للمناسبات",
    "تنظيم تقديم القهوة جدة",
  ],
});

const FAQS = [
  {
    q: "وش يسوّي مباشر القهوة بالضبط في المناسبة؟",
    a: `المباشر هو منظّم حركة التقديم: يرتّب مسار الصبّابين بين الضيوف، يضمن أن كل ضيف يُخدَم من اليمين وبالترتيب دون انتظار، ويراقب امتلاء الدلال وتجدّد الفناجين طوال المناسبة. باختصار: الصبّاب يصبّ، والمباشر يدير الحركة حتى لا يتزاحم التقديم ولا ينقطع.`,
  },
  {
    q: "متى أحتاج مباشرين إضافة إلى الصبّابين؟",
    a: `في المجالس الصغيرة يكفي صبّاب أو اثنان. لكن متى تجاوز ضيوفك نحو الخمسين، أو كانت المناسبة رسمية (استقبال، مؤتمر، عرس)، يصبح المباشر ضرورة: هو من يمنع تكدّس التقديم في جهة وإهمال جهة، ويحفظ إيقاع الضيافة من أول ضيف إلى آخرهم.`,
  },
  {
    q: "هل توفّرون مباشرات نساء للمناسبات النسائية في جدة؟",
    a: `نعم. نوفّر مباشرات وقهوجيات بطاقم نسائي كامل للمناسبات النسائية في جدة، بزيّ مرتّب موحّد وتنسيق مباشر مع مسؤولة المناسبة، وبخصوصية تامة من الدخول حتى الانصراف.`,
  },
  {
    q: "كم مباشر يلزم لمناسبة 200 ضيف؟",
    a: `القاعدة العملية التي نشتغل بها: مباشر واحد يدير كل ثلاثة إلى أربعة صبّابين، وصبّاب لكل 40–60 ضيفاً. فمناسبة 200 ضيف تحتاج غالباً 4–5 صبّابين ومباشراً واحداً أو اثنين حسب توزيع القاعة. أرسل لنا عدد ضيوفك على واتساب ونحدد لك التشكيل الأنسب.`,
  },
  {
    q: "هل المباشرون لديكم سعوديون وبأي زيّ يحضرون؟",
    a: `فريقنا سعودي مدرّب على أصول الضيافة. للمناسبات التراثية والأعراس يحضر المباشرون بالزيّ السعودي والبشوت المطرّزة، وللمؤتمرات والفعاليات الرسمية بزيّ رسمي موحّد — تختار ما يناسب طابع مناسبتك.`,
  },
  {
    q: "كيف أحجز مباشرين قهوة في جدة وكم أحتاج من وقت؟",
    a: `أرسل لنا على واتساب ${WA_DISPLAY}: تاريخ المناسبة، مكانها في جدة، عدد الضيوف، ونوعها (رجالية/نسائية/مختلطة الأقسام). نرد عليك بالتشكيل المقترح خلال دقائق. ننصح بالحجز قبل أسبوع في مواسم الأعراس، ونلبّي الطلبات العاجلة بنفس اليوم قدر التوفّر.`,
  },
];

const DISTRICTS = ["أبحر الشمالية", "الشاطئ", "الحمراء", "الروضة", "الصفا", "النعيم", "الخالدية", "السلامة", "الحمدانية", "المرجان", "النهضة", "الزهراء"];

export default function Page() {
  const waLink = (t: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t)}`;
  const waMain = waLink("السلام عليكم، أرغب بحجز مباشرين قهوة لمناسبة في جدة.");
  const tel = `tel:+966${WA_DISPLAY.replace(/^0/, "")}`;
  const url = `${SITE_URL}${PATH}`;

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "الرئيسية", url: `${SITE_URL}/` },
    { name: "المناطق", url: `${SITE_URL}/locations` },
    { name: "مباشرين قهوة جدة", url },
  ]);
  const serviceSchema = generateServiceSchema({
    name: "مباشرين قهوة في جدة",
    description: META_DESCRIPTION,
    url,
    cityAr: "جدة",
    serviceType: "مباشرين قهوة",
  });
  const webPageSchema = generateWebPageSchema({
    name: `${META_TITLE} | كيف الضيافة`,
    description: META_DESCRIPTION,
    url,
    primaryImage: `${SITE_URL}${HALL.src}`,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      <main className="luxe" dir="rtl">
        <LuxeIconDefs />
        <LocalReveal />

        {/* ══ 1 — الهيرو ══ */}
        <section className="ls-hero">
          <div className="ls-hero-img">
            <Image
              src={HALL.src}
              alt="مباشرين قهوة بالبشت المطرّز أثناء تنظيم تقديم الضيافة في قاعة فاخرة بجدة"
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: HALL.focus }}
            />
          </div>
          <span aria-hidden="true" className="ls-scrim" />

          <div className="absolute inset-0 flex items-end">
            <div className="w-full max-w-5xl mx-auto px-5 pb-10 sm:pb-14">
              <nav className="text-[0.7rem] mb-4 text-[color:var(--lx-cream-55)]" aria-label="مسار التنقّل">
                <Link href="/" className="hover:text-[color:var(--lx-gold-hi)] transition-colors">الرئيسية</Link>
                <span className="mx-1.5 opacity-50">/</span>
                <Link href="/locations" className="hover:text-[color:var(--lx-gold-hi)] transition-colors">المناطق</Link>
                <span className="mx-1.5 opacity-50">/</span>
                <span className="text-[color:var(--lx-cream-75)]">مباشرين قهوة جدة</span>
              </nav>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="ls-badge">
                  <IconStar className="w-3.5 h-3.5" />
                  +500 مناسبة نفّذها فريقنا
                </span>
                <span className="ls-badge">
                  <IconClock className="w-3.5 h-3.5" />
                  ردّ خلال دقائق
                </span>
                <span className="ls-badge hidden sm:inline-flex">
                  <IconPin className="w-3.5 h-3.5" />
                  جدة والمنطقة الغربية
                </span>
              </div>

              <h1 className="mb-1">
                <span className="ls-h1 lx-sheen">مباشرين قهوة في جدة</span>
                <span className="ls-h1-tail">تنظيم تقديم الضيافة لكبار الضيوف</span>
              </h1>

              <div className="mt-7 flex flex-wrap gap-3">
                <a href={waMain} target="_blank" rel="noopener noreferrer" className="lx-btn lx-btn--gold">
                  <IconWhatsApp className="w-4 h-4" />
                  تواصل واتساب
                </a>
                <a href={tel} className="lx-btn lx-btn--ghost">
                  <IconPhone className="w-4 h-4" />
                  {WA_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-5">
          {/* ══ 2 — الإجابة المباشرة (الكلمة المفتاحية في أول 100 كلمة) ══ */}
          <section className="pt-10 sm:pt-20 grid md:grid-cols-[1.55fr_1fr] gap-6 md:gap-12 items-center">
            <div data-rise>
              <p className="lx-eyebrow">
                <IconDallah className="w-4 h-4" />
                مباشرين قهوة — جدة
              </p>
              <p className="lx-lead">
                نوفّر مباشرين قهوة في جدة يديرون حركة التقديم في مناسبتك من أولها لآخرها:
                توزيع الصبّابين على أقسام القاعة، خدمة كل ضيف من اليمين وبالترتيب، ومتابعة
                تجدّد القهوة والشاي والتمر بلا انقطاع. مباشرون رجال للمجالس والفعاليات،
                ومباشرات للمناسبات النسائية — بزيّ موحّد وانضباط يليق بضيوفك.
              </p>
            </div>
            <div className="lx-float lx-obj lx-obj--hero mx-auto w-40 sm:w-52 md:w-full max-w-[240px]" data-rise>
              <Image
                src={CUT_DALLAH_GOLD}
                alt="دلّة قهوة عربية ذهبية من عدّة مباشرين كيف الضيافة في جدة"
                width={640}
                height={640}
                sizes="(max-width:768px) 40vw, 240px"
                className="w-full h-auto"
              />
            </div>
          </section>

          <div className="lx-orn" aria-hidden="true"><i /></div>

          {/* ══ 3 — دور المباشر ══ */}
          <div className="space-y-12 sm:space-y-24">
            <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div data-rise>
                <p className="lx-eyebrow">
                  <span className="lx-medal" aria-hidden="true"><i />I</span>
                  الدور
                </p>
                <h2 className="lx-h2">ماذا يفعل مباشر القهوة في مناسبتك؟</h2>
                <p className="lx-lead">
                  كثير من أصحاب المناسبات في جدة يحجزون صبّابين ويكتشفون ليلة المناسبة أن
                  المشكلة ليست في الصبّ — بل في الحركة: جهة من القاعة تُخدَم مرتين وجهة
                  تنتظر، وضيف كبير يُترَك آخر من يُقدَّم له. هنا عمل المباشر: يقسّم القاعة
                  مناطق، يرسم مسار كل صبّاب، يقدّم أهل الصدارة أولاً، ويبقى عينه على
                  الدلال والفناجين حتى لا يحمل صبّاب دلّة باردة. النتيجة التي تلمسها أنت:
                  ضيافة تمشي وحدها، وأنت متفرّغ لضيوفك.
                </p>
                <a href={waLink("السلام عليكم، أبغى أفهم أكثر عن دور المباشر في المناسبة.")} target="_blank" rel="noopener noreferrer" className="lx-btn lx-btn--ghost mt-6">
                  <IconWhatsApp className="w-4 h-4" />
                  اسأل عن هذا
                </a>
              </div>
              <figure className="ls-fig ls-fig--l relative ls-h-sec" data-rise3d>
                <ProtectedImage
                  src={COUNTER.src}
                  alt="كاونتر قهوة ذهبي يديره مباشرون في مناسبة بجدة"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <span aria-hidden="true" className="ls-tone" />
                <span aria-hidden="true" className="ls-corner ls-corner--tr" />
                <span aria-hidden="true" className="ls-corner ls-corner--bl" />
              </figure>
            </section>

            {/* ══ 4 — مباشرين رجال ══ */}
            <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="md:order-2" data-rise>
                <p className="lx-eyebrow">
                  <span className="lx-medal" aria-hidden="true"><i />II</span>
                  رجالي
                </p>
                <h2 className="lx-h2">مباشرون للمجالس والأعراس والفعاليات الرسمية</h2>
                <p className="lx-lead">
                  في مجالس الأعيان يحضر المباشر بالبشت المطرّز ويعرف بروتوكول الصدارة:
                  من يُقدَّم له أولاً، ومتى تُعاد الجولة، ومتى يُرفَع الفنجان. وفي مؤتمرات
                  جدة وفعاليات الشركات يتحوّل الزيّ إلى رسمي موحّد، ويتحوّل الدور إلى
                  تقديم صامت منظّم لا يقاطع جلسة ولا كلمة متحدّث — تنسيقاً مسبقاً مع
                  منظّم الفعالية على التوقيتات والمداخل.
                </p>
                <a href={waLink("السلام عليكم، أستفسر عن مباشرين لمناسبة رجالية في جدة.")} target="_blank" rel="noopener noreferrer" className="lx-btn lx-btn--ghost mt-6">
                  <IconWhatsApp className="w-4 h-4" />
                  اسأل عن هذا
                </a>
              </div>
              <figure className="ls-fig ls-fig--r relative ls-h-sec" data-rise3d>
                <ProtectedImage
                  src={MAJLIS.src}
                  alt="فرشة مجلس تراثية بالسدو مع دلال نحاسية جاهزة لمباشري القهوة بجدة"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <span aria-hidden="true" className="ls-tone" />
                <span aria-hidden="true" className="ls-corner ls-corner--tr" />
                <span aria-hidden="true" className="ls-corner ls-corner--bl" />
              </figure>
            </section>

            {/* ══ 5 — مباشرات نساء ══ */}
            <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div data-rise>
                <p className="lx-eyebrow">
                  <span className="lx-medal" aria-hidden="true"><i />III</span>
                  نسائي
                </p>
                <h2 className="lx-h2">مباشرات قهوة للمناسبات النسائية في جدة</h2>
                <p className="lx-lead">
                  القسم النسائي عندنا ليس امتداداً للرجالي — طاقم مستقل من المباشرات
                  والقهوجيات تديره مشرفة، يدخل القاعة النسائية ويخرج منها دون أي احتكاك
                  بالقسم الآخر. التنسيق كله يجري مع مسؤولة المناسبة: توقيت الجولات،
                  ترتيب الصدارة، وطريقة التقديم التي تفضّلها صاحبة المناسبة.
                </p>
                <a href={waLink("السلام عليكم، أستفسر عن مباشرات لمناسبة نسائية في جدة.")} target="_blank" rel="noopener noreferrer" className="lx-btn lx-btn--ghost mt-6">
                  <IconWhatsApp className="w-4 h-4" />
                  اسأل عن هذا
                </a>
              </div>
              <figure className="ls-fig ls-fig--l relative ls-h-sec" data-rise3d>
                <ProtectedImage
                  src={TAWZEEAT.src}
                  alt="صينية توزيعات قهوة وتمر تقدّمها مباشرات الضيافة في مناسبة نسائية بجدة"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <span aria-hidden="true" className="ls-tone" />
                <span aria-hidden="true" className="ls-corner ls-corner--tr" />
                <span aria-hidden="true" className="ls-corner ls-corner--bl" />
              </figure>
            </section>

            {/* ══ 6 — التشكيل حسب الحجم ══ */}
            <section className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="md:order-2" data-rise>
                <p className="lx-eyebrow">
                  <span className="lx-medal" aria-hidden="true"><i />IV</span>
                  التشكيل
                </p>
                <h2 className="lx-h2">كم مباشراً وصبّاباً تحتاج مناسبتك؟</h2>
                <p className="lx-lead">
                  لا نرسل «رقماً جاهزاً» — نحسب التشكيل من ثلاثة أشياء: عدد الضيوف،
                  شكل المكان (قاعة واحدة أم أقسام؟ استراحة مفتوحة؟)، وطبيعة المناسبة.
                  قاعدتنا العملية بعد مئات المناسبات في جدة: صبّاب لكل 40–60 ضيفاً،
                  ومباشر يدير كل ثلاثة إلى أربعة صبّابين. أرسل التفاصيل على واتساب
                  وخلال دقائق يصلك التشكيل المقترح كاملاً: العدد، الزيّ، والعدّة.
                </p>
                <a href={waLink("السلام عليكم، عندي مناسبة في جدة وأبغى أعرف التشكيل المناسب من المباشرين والصبابين.")} target="_blank" rel="noopener noreferrer" className="lx-btn lx-btn--gold mt-6">
                  <IconWhatsApp className="w-4 h-4" />
                  أرسل تفاصيل مناسبتك
                </a>
              </div>
              <figure className="ls-fig ls-fig--r relative ls-h-sec" data-rise3d>
                <ProtectedImage
                  src={BUFFET.src}
                  alt="بوفيه ضيافة متكامل جهّزه فريق المباشرين لمناسبة كبيرة في جدة"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <span aria-hidden="true" className="ls-tone" />
                <span aria-hidden="true" className="ls-corner ls-corner--tr" />
                <span aria-hidden="true" className="ls-corner ls-corner--bl" />
              </figure>
            </section>
          </div>

          <div className="lx-orn" aria-hidden="true"><i /></div>

          {/* ══ 7 — ما يميز مباشرينا ══ */}
          <section>
            <div data-rise>
              <p className="lx-eyebrow">
                <IconShield className="w-4 h-4" />
                لماذا فريقنا
              </p>
              <h2 className="lx-h2">ما الذي يميّز مباشري <em>كيف الضيافة</em>؟</h2>
            </div>
            <div className="mt-7 grid grid-cols-2 gap-2.5 sm:gap-4">
              {[
                { ico: IconCrew, t: "+500 مناسبة نفّذها فريقنا بأنفسنا في جدة والمنطقة الغربية — خبرة ميدانية لا وساطة" },
                { ico: IconShield, t: "طاقم واحد ثابت: المباشر الذي تراه في المعاينة هو من يحضر مناسبتك" },
                { ico: IconClock, t: "جاهزية بنفس اليوم للطلبات العاجلة داخل جدة قدر التوفّر" },
                { ico: IconDallah, t: "العدّة كاملة معنا: دلال نحاسية وفناجين وأطقم تقديم مذهّبة" },
                { ico: IconPin, t: "نغطي جدة كلها ونمتد للمنطقة الغربية عند الطلب" },
                { ico: IconStar, t: "قسم نسائي مستقل بمشرفة — لا يُدار من القسم الرجالي" },
              ].map(({ ico: Ico, t }) => (
                <div key={t} className="lx-lift flex flex-col sm:flex-row items-start gap-2 sm:gap-3.5 p-3.5 sm:p-5" data-rise>
                  <span className="lx-medal" aria-hidden="true"><i /><Ico className="w-4 h-4" /></span>
                  <p className="text-[0.8rem] sm:text-[0.95rem] leading-snug sm:leading-relaxed text-[color:var(--lx-cream-75)] sm:pt-2">{t}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="lx-orn" aria-hidden="true"><i /></div>

          {/* ══ 8 — الأسئلة الشائعة ══ */}
          <section>
            <div data-rise>
              <p className="lx-eyebrow">
                <IconCup className="w-4 h-4" />
                يسألنا العملاء
              </p>
              <h2 className="lx-h2">أسئلة شائعة عن مباشرين القهوة في <em>جدة</em></h2>
            </div>
            <div className="mt-8 space-y-3">
              {FAQS.map((f, fi) => (
                <details key={f.q} className="lx-faq" open={fi === 0} data-rise>
                  <summary>
                    <h3 className="text-inherit font-inherit m-0 text-[0.95rem]">{f.q}</h3>
                  </summary>
                  <p className="lx-faq-body">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* ══ 9 — التغطية ══ */}
          <section className="mt-14">
            <div data-rise>
              <p className="lx-eyebrow">
                <IconPin className="w-4 h-4" />
                أين نصل
              </p>
              <h2 className="lx-h2">مباشرونا يصلونك في أحياء <em>جدة</em></h2>
            </div>
            <div className="mt-6 flex flex-wrap gap-2.5" data-rise>
              {DISTRICTS.map((d) => (
                <span key={d} className="lx-chip">{d}</span>
              ))}
            </div>
          </section>

          {/* ══ 10 — النداء الأخير ══ */}
          <section className="mt-14 sm:mt-24">
            <div className="ls-band" data-rise3d>
              <p className="lx-eyebrow justify-center">
                <IconDallah className="w-4 h-4" />
                كيف الضيافة
              </p>
              <h2 className="lx-h2 !mb-3">مباشرون جاهزون لمناسبتك في <em>جدة</em></h2>
              <p className="lx-lead mx-auto max-w-xl">
                تاريخ المناسبة، مكانها، وعدد الضيوف — أرسلها الآن ويصلك التشكيل المقترح خلال دقائق.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <a href={waMain} target="_blank" rel="noopener noreferrer" className="lx-btn lx-btn--gold">
                  <IconWhatsApp className="w-4 h-4" />
                  تواصل واتساب
                </a>
                <a href={tel} className="lx-btn lx-btn--ghost">
                  <IconPhone className="w-4 h-4" />
                  اتصل: {WA_DISPLAY}
                </a>
              </div>
            </div>
          </section>

          {/* ══ 11 — ربط داخلي: خدمات جدة الشقيقة ══ */}
          <section className="mt-14 pb-6 border-t border-[color:var(--lx-hair-soft)] pt-8">
            <h2 className="lx-kicker mb-5">خدمات الضيافة الأخرى في جدة</h2>
            <div className="flex flex-wrap gap-2.5">
              <Link href="/qahwajiin-jeddah" className="lx-chip">قهوجيين ومباشرين جدة</Link>
              <Link href="/sababin-qahwa-jeddah" className="lx-chip">صبابين قهوة جدة</Link>
              <Link href="/diyafa-munasabat-jeddah" className="lx-chip">ضيافة مناسبات جدة</Link>
              <Link href="/locations/جدة" className="lx-chip">كل خدماتنا في جدة</Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
