/**
 * LocalServicePage — التصميم الأصلي لصفحات (خدمة × مدينة) بعد الترقية.
 *
 * ═══════════════════════════════════════════════════════════════════════
 *  ما تغيّر ولماذا — ترقية لا إعادة بناء
 * ═══════════════════════════════════════════════════════════════════════
 * هذا هو نفس المكوّن الذي يخدم كل الصفحات الفرعية المنشورة. لم تُبنَ صفحة
 * جديدة ولم يُغيَّر عقد الـ props ولا ترتيب المعلومات — بُنيَت الفخامة
 * والعمق والحركة داخل التصميم القائم. سجلّ العطب والإصلاح:
 *
 *  1) الخطّ — العطب رقم واحد. العنوان كان Cairo بوزن 900: خطّ هندسي
 *     سماكته موحّدة، فيقرأه العين كلافتة تخفيضات لا كعلامة فاخرة.
 *     الآن El Messiri (تباين سماكة حقيقي بين الشدّة والرقّة ⇒ أثر محفور)
 *     بوزن 700 — أقصى وزن حقيقي للخطّ. طلب 900 منه يجعل المتصفح يزوّر
 *     السماكة فتتشوّه الحروف العربية.
 *
 *  2) العنوان يُقسم عند الشرطة الطويلة داخل نفس الـ<h1>: الرأس بقياس
 *     كبير يُقرأ في ثانية، والذيل بقياس صغير يحمل الكلمات المفتاحية.
 *     محرّك البحث يقرأ الـ<h1> كاملاً، والعين تقرأ الرأس وحده. القياس
 *     السابق: 60 حرفاً بقياس 8.6vw = أربعة أسطر تصطدم برؤوس الطاقم.
 *
 *  3) الباقات ⇒ خدمات. القرار ليس تجميلياً: الباقة تدعو إلى مقارنة سعر،
 *     والخدمة تصف قدرة فيصبح السؤال الوحيد «هل تناسب مناسبتي؟» — وجوابه
 *     مكالمة. ومعها حُذف سطر «الأسعار تقديرية» وكل ذكر للسعر من الصفحة.
 *
 *  4) الصور. القديم كان يأخذ مخرجات pickImages() (اختيار بالبذرة لا
 *     بالمعنى ⇒ رجال تحت عنوان نسائي، وكمّامات وبالونات تحت عنوان
 *     «الأصول»)، ويحشرها كلها في aspect-[4/3] و aspect-[4/5] مع أن نسب
 *     المكتبة تمتدّ من 0.47 إلى 2.91 ⇒ قصّ يبلغ 70٪ وارتفاعات متفاوتة
 *     في الصفّ الواحد. الآن الصور من localImagery.ts: منتقاة بالعين،
 *     مختومة بعلامتنا في البكسل، مسمّاة بكلمات مفتاحية، بارتفاع موحّد
 *     و object-position مقيس لكل صورة.
 *
 *  5) العمق. البطاقة كانت مستطيلاً بحدّ 1px بلا ظلّ ⇒ ورق لا معدن.
 *     الآن لكل سطح ثلاث طبقات: حافة مضيئة تتلاشى، فِلّ بتدرّج مائل،
 *     وظلّ عميق يفصله عن الأرضية. والإطارات بميل محوري 3° مع منظور
 *     1400px (يستوي عند اللمس — الميل بلا فأرة التواء بلا سبب).
 *
 *  6) الحركة. كانت fade/translateY واحدة. أُضيف: زحف بطيء للهيرو
 *     (Ken Burns)، ظهور بدوران محوري طفيف، وتكبير الصورة داخل إطارها.
 *     كلّها تحترم prefers-reduced-motion.
 *
 * Server Component بالكامل: كل نصّ في HTML الخاص بـ SSR (لا شيء مخفيّ
 * عن Googlebot). العميل الوحيد: LocalReveal (مراقب ظهور) و ProtectedImage.
 */

import { WHATSAPP_NUMBER as WA } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";
import ProtectedImage from "@/components/ProtectedImage";
import LocalReveal from "@/components/LocalReveal";
import { getPageImagery } from "@/lib/localImagery";
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

const WA_DISPLAY = "0508252134";

/** يبقى مصدَّراً: localContent.tsx لا يزال يبني هذا الشكل. */
export type Package = { name: string; desc: string; features: string[] };
export type FAQ = { question: string; answer: string };

export interface LocalServicePageProps {
  h1: string;
  cityAr: string;
  serviceAr: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  sections: { h2: string; body: string; img?: string; imgAlt?: string }[];
  districts: string[];
  /** يُقرأ كـ«خدماتنا» لا كباقات — الأسعار لا تُعرض إطلاقاً. */
  packages: Package[];
  pricingNote: string;
  whyUs: string[];
  faqs: FAQ[];
  gallery: { src: string; alt: string }[];
  otherCities: { label: string; href: string }[];
  breadcrumbItems: { label: string; href: string }[];
}

const ROMAN = ["I", "II", "III", "IV", "V", "VI"];

/* أيقونة لكل بند «لماذا نحن» — تدوير ثابت بدل نقطة مكرّرة */
const WHY_ICONS = [IconPin, IconCrew, IconClock, IconDallah, IconShield, IconStar];

/* فاصل ماسي (نفس مفردة .lx-orn في الطبقة الفاخرة) */
function Orn() {
  return (
    <div className="lx-orn" aria-hidden="true">
      <i />
    </div>
  );
}

/* ترويسة قسم موحّدة: عين صغيرة + عنوان El Messiri + سطر تمهيد */
function Head({
  eyebrow,
  children,
  lead,
  center,
  icon,
}: {
  eyebrow: string;
  children: React.ReactNode;
  lead?: string;
  center?: boolean;
  icon?: React.ReactNode;
}) {
  return (
    <div className={center ? "text-center" : ""} data-rise>
      <p className={`lx-eyebrow ${center ? "justify-center" : ""}`}>
        {icon}
        {eyebrow}
      </p>
      <h2 className="lx-h2">{children}</h2>
      {lead && <p className={`lx-lead ${center ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>{lead}</p>}
    </div>
  );
}

export default function LocalServicePage(props: LocalServicePageProps) {
  const waLink = (t: string) => `https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
  const waMain = waLink(
    `السلام عليكم، أرغب بالاستفسار عن خدمة ${props.serviceAr} في ${props.cityAr}.`
  );
  const tel = `tel:+966${WA_DISPLAY.replace(/^0/, "")}`;

  /* العنوان: رأس للعين + ذيل للكلمات المفتاحية، داخل <h1> واحد */
  const [h1Main, ...h1Rest] = props.h1.split("—");
  const h1Tail = h1Rest.join("—").trim();

  /* الصور: منتقاة بالعين ومختومة ومسمّاة — لا مخرجات pickImages البذرية.
     التوزيع مربوط بـ(الخدمة+المدينة) بتجزئة ثابتة ⇒ كل صفحة بمظهر
     مختلف (شرط الفهرسة) وثابت بين البناءات (لا صور تتبدّل بعد النشر). */
  const art = getPageImagery(
    props.serviceAr,
    props.cityAr,
    props.sections.length,
    props.packages.length,
    Math.max(props.gallery.length, 4)
  );

  return (
    <main className="luxe" dir="rtl">
      <LuxeIconDefs />
      <LocalReveal />

      {/* ══════════════ 1 — الهيرو ══════════════
          الشاشة الأولى تُحكم في خمس ثوانٍ: صورة قاعة فاخرة + عنوان
          يُقرأ في ثانية + زرّان. لا مقدّمة طويلة هنا — المقدّمة نزلت
          إلى القسم التالي حيث يصل من قرّر أنه مهتم. */}
      <section className="ls-hero">
        <div className="ls-hero-img">
          <Image
            src={art.hero.src}
            alt={art.hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: art.hero.focus }}
          />
        </div>
        <span aria-hidden="true" className="ls-scrim" />

        <div className="absolute inset-0 flex items-end">
          <div className="w-full max-w-5xl mx-auto px-5 pb-10 sm:pb-14">
            <nav className="text-[0.7rem] mb-4 text-[color:var(--lx-cream-55)]" aria-label="مسار التنقّل">
              {props.breadcrumbItems.map((b, i) => (
                <span key={b.href}>
                  {i > 0 && <span className="mx-1.5 opacity-50">/</span>}
                  {i < props.breadcrumbItems.length - 1 ? (
                    <Link href={b.href} className="hover:text-[color:var(--lx-gold-hi)] transition-colors">
                      {b.label}
                    </Link>
                  ) : (
                    <span className="text-[color:var(--lx-cream-75)]">{b.label}</span>
                  )}
                </span>
              ))}
            </nav>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="ls-badge">
                <IconStar className="w-3.5 h-3.5" />
                خبرة +500 مناسبة
              </span>
              <span className="ls-badge">
                <IconClock className="w-3.5 h-3.5" />
                جاهزية بنفس اليوم
              </span>
              <span className="ls-badge hidden sm:inline-flex">
                <IconPin className="w-3.5 h-3.5" />
                كل أحياء {props.cityAr}
              </span>
            </div>

            <h1 className="mb-1">
              <span className="ls-h1 lx-sheen">{h1Main.trim()}</span>
              {h1Tail && <span className="ls-h1-tail">{h1Tail}</span>}
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
        {/* ══════════════ 2 — المقدّمة + الدلّة الطافية ══════════════
            الدلّة قصّة شفّافة تطفو بلا صندوق (لا مربّع أبيض حول جسم).
            القياس أثبت أن كل صور المعدّات ذات الخلفية البيضاء أو الكحلية
            تُقرأ داخل صفحة بنّية داكنة كعطب لا كصورة منتج. */}
        <section className="pt-10 sm:pt-20 grid md:grid-cols-[1.55fr_1fr] gap-6 md:gap-12 items-center">
          <div data-rise>
            <p className="lx-eyebrow">
              <IconDallah className="w-4 h-4" />
              {props.serviceAr} — {props.cityAr}
            </p>
            <p className="lx-lead">{props.intro}</p>
          </div>
          <div className="lx-float lx-obj lx-obj--hero mx-auto w-40 sm:w-52 md:w-full max-w-[240px]" data-rise>
            <Image
              src={art.dallah}
              alt={`دلّة قهوة عربية فاخرة من عدّة ضيافة كيف الضيافة في ${props.cityAr}`}
              width={640}
              height={640}
              sizes="(max-width:768px) 40vw, 240px"
              className="w-full h-auto"
            />
          </div>
        </section>

        <Orn />

        {/* ══════════════ 3 — الأقسام النصية بإطارات ثلاثية الأبعاد ══════════════
            الإطارات تتبادل جهة الميل مع تبادل ترتيب الأعمدة، فيتولّد
            إيقاع بصري: العين تنزل متعرّجة لا مستقيمة. */}
        <div className="space-y-12 sm:space-y-24">
          {props.sections.map((s, i) => {
            const shot = art.sections[i];
            const flip = i % 2 === 1;
            return (
              <section key={i} className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className={flip ? "md:order-2" : ""} data-rise>
                  <p className="lx-eyebrow">
                    <span className="lx-medal" aria-hidden="true">
                      <i />
                      {ROMAN[i] ?? i + 1}
                    </span>
                    {props.cityAr}
                  </p>
                  <h2 className="lx-h2">{s.h2}</h2>
                  <p className="lx-lead whitespace-pre-line">{s.body}</p>
                  <a
                    href={waLink(`السلام عليكم، أستفسر عن «${s.h2}».`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lx-btn lx-btn--ghost mt-6"
                  >
                    <IconWhatsApp className="w-4 h-4" />
                    اسأل عن هذا
                  </a>
                </div>

                {shot && (
                  <figure
                    className={`ls-fig ${flip ? "ls-fig--r" : "ls-fig--l"} relative ls-h-sec`}
                    data-rise3d
                  >
                    <ProtectedImage
                      src={shot.src}
                      alt={s.imgAlt || shot.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <span aria-hidden="true" className="ls-tone" />
                    <span aria-hidden="true" className="ls-corner ls-corner--tr" />
                    <span aria-hidden="true" className="ls-corner ls-corner--bl" />
                  </figure>
                )}
              </section>
            );
          })}
        </div>

        <Orn />

        {/* ══════════════ 4 — خدماتنا (كان: باقات) ══════════════
            لا أسماء باقات، لا أسعار، لا سطر «الأسعار تقديرية». كل بطاقة
            تصف قدرة ومعها زرّ سؤال مباشر عنها. */}
        <section>
          <Head
            eyebrow="ما نقدّمه"
            center
            icon={<IconCrew className="w-4 h-4" />}
            lead={`اختر ما يناسب مناسبتك وأخبرنا بتفاصيلها، ونجهّز لك كل شيء في ${props.cityAr} — الطاقم والعدّة والقهوة والتقديمات.`}
          >
            خدماتنا في <em>{props.cityAr}</em>
          </Head>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {props.packages.map((p, pi) => {
              const shot = art.services[pi];
              return (
                <article key={p.name} className="ls-svc" data-rise3d>
                  {shot && (
                    <div className="relative ls-h-svc overflow-hidden">
                      <ProtectedImage
                        src={shot.src}
                        alt={shot.alt}
                        fill
                        sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                        className="object-cover"
                      />
                      {/* حجاب النبرة: العين رصدت أن ls-veil يُعتم الأسفل فقط،
                          فيبقى أعلى صورة القاعة (سطوعها 135/255) ساطعاً
                          مقابل البوفيه تحتها — فتُقرأ البطاقتان من مصدرين. */}
                      <span aria-hidden="true" className="ls-tone" />
                      <span aria-hidden="true" className="ls-veil" />
                      <span aria-hidden="true" className="ls-idx">
                        {ROMAN[pi] ?? pi + 1}
                      </span>
                    </div>
                  )}

                  <div className="relative z-[3] p-6 flex flex-col flex-1">
                    <h3 className="lx-offer-t">{p.name}</h3>
                    <p className="lx-note mt-2">{p.desc}</p>
                    <ul className="mt-4 space-y-2.5 flex-1">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5 text-sm leading-relaxed text-[color:var(--lx-cream-75)]">
                          <span aria-hidden="true" className="ls-dot" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={waLink(`السلام عليكم، أستفسر عن «${p.name}» في ${props.cityAr}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="lx-btn lx-btn--gold mt-6 w-full justify-center"
                    >
                      <IconWhatsApp className="w-4 h-4" />
                      اسأل عن التفاصيل
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <Orn />

        {/* ══════════════ 5 — العدّة: أجسام تطفو ══════════════
            الفناجيل قصّات شفّافة على خطّ أساس واحد (القياس قبل التطبيع:
            ارتفاعات 341→745 بكسل = تباين 118٪، وهو سبب «بعضهن كبار
            بعضهن صغار»). الآن لوحة 640×640 وقاع مثبَّت عند 88٪. */}
        <section>
          <Head
            eyebrow="بأدواتنا"
            center
            icon={<IconCup className="w-4 h-4" />}
            lead="دلال وفناجين وعدّة تقديم مذهّبة نحضرها معنا — لا تحتاج إلى تجهيز أي شيء."
          >
            عدّة الضيافة
          </Head>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {[
              { src: "/images/cutouts/n-cup-stripes.webp", alt: "فنجان قهوة زجاجي بخطوط ذهبية مع صحنه" },
              { src: "/images/cutouts/n-cup-emblem.webp", alt: "كوب شاي بشعار النخلة والسيفين الذهبي" },
              { src: "/images/cutouts/n-cup-faceted.webp", alt: "فنجان قهوة مضلّع بحافة ذهبية وصحن" },
              { src: "/images/cutouts/n-cup-porcelain.webp", alt: "فنجان قهوة خزفي أبيض مع صحن" },
            ].map((c) => (
              <div key={c.src} className="lx-float lx-obj p-2" data-rise>
                <Image
                  src={c.src}
                  alt={`${c.alt} — عدّة ضيافة كيف الضيافة في ${props.cityAr}`}
                  width={640}
                  height={640}
                  sizes="(max-width:640px) 45vw, 22vw"
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </section>

        <Orn />

        {/* ══════════════ 6 — لماذا نحن ══════════════ */}
        <section>
          <Head eyebrow="ما يميّزنا" icon={<IconShield className="w-4 h-4" />}>
            لماذا تختارنا في <em>{props.cityAr}</em>
          </Head>

          <div className="mt-7 grid grid-cols-2 gap-2.5 sm:gap-4">
            {props.whyUs.map((w, wi) => {
              const Ico = WHY_ICONS[wi % WHY_ICONS.length];
              return (
                <div key={w} className="lx-lift flex flex-col sm:flex-row items-start gap-2 sm:gap-3.5 p-3.5 sm:p-5" data-rise>
                  <span className="lx-medal" aria-hidden="true">
                    <i />
                    <Ico className="w-4 h-4" />
                  </span>
                  <p className="text-[0.8rem] sm:text-[0.95rem] leading-snug sm:leading-relaxed text-[color:var(--lx-cream-75)] sm:pt-2">
                    {w}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <Orn />

        {/* ══════════════ 7 — المعرض بارتفاع موحّد ══════════════
            القديم: aspect-[4/5] لكل صورة بلا خطّ أساس. الآن ارتفاع ثابت
            بالبكسل + object-position مقيس ⇒ صفوف متساوية بلا قصّ أعمى. */}
        {art.gallery.length > 0 && (
          <section>
            <Head eyebrow="من أعمالنا" center icon={<IconStar className="w-4 h-4" />}>
              لمحات من ضيافتنا
            </Head>
            <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {art.gallery.map((g, gi) => (
                <figure key={`${g.src}-${gi}`} className="ls-fig relative ls-h-gal" data-rise3d>
                  <ProtectedImage
                    src={g.src}
                    alt={`${g.alt} — ${props.serviceAr} في ${props.cityAr}`}
                    fill
                    sizes="(max-width:640px) 50vw, 25vw"
                    className="object-cover"
                  />
                  <span aria-hidden="true" className="ls-tone" />
                </figure>
              ))}
            </div>
          </section>
        )}

        <Orn />

        {/* ══════════════ 8 — الأسئلة الشائعة في <details> ══════════════
            النصّ كامل في HTML (تفهرسه محرّكات البحث) ولا يستهلك شاشات.
            القديم كان h3/p مفتوحة كلها ⇒ خمس فقرات قبل زرّ التواصل. */}
        <section>
          <Head eyebrow="قبل أن تسأل" icon={<IconCup className="w-4 h-4" />}>
            أسئلة شائعة — {props.serviceAr} في <em>{props.cityAr}</em>
          </Head>
          <div className="mt-8 space-y-3">
            {props.faqs.map((f, fi) => (
              <details key={f.question} className="lx-faq" open={fi === 0} data-rise>
                <summary>
                  <h3 className="text-inherit font-inherit m-0 text-[0.95rem]">{f.question}</h3>
                </summary>
                <p className="lx-faq-body">{f.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ══════════════ 9 — الأحياء (إشارة جغرافية) ══════════════ */}
        <section className="mt-14">
          <Head eyebrow="تغطيتنا" icon={<IconPin className="w-4 h-4" />}>
            نصل إليك في كل <em>{props.cityAr}</em>
          </Head>
          <div className="mt-6 flex flex-wrap gap-2.5" data-rise>
            {props.districts.map((d) => (
              <span key={d} className="lx-chip">
                {d}
              </span>
            ))}
          </div>
        </section>

        {/* ══════════════ 10 — النداء الأخير ══════════════
            هدف الصفحة كلها: أن يتواصل. لذلك آخر ما يراه زرّان لا نصّ. */}
        <section className="mt-14 sm:mt-24">
          <div className="ls-band" data-rise3d>
            <p className="lx-eyebrow justify-center">
              <IconDallah className="w-4 h-4" />
              كيف الضيافة
            </p>
            <h2 className="lx-h2 !mb-3">
              جاهزون لمناسبتك في <em>{props.cityAr}</em>
            </h2>
            <p className="lx-lead mx-auto max-w-xl">
              أخبرنا بتاريخ المناسبة وعدد الضيوف، ونرسل لك التفاصيل والترتيب المناسب فوراً.
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

        {/* ══════════════ 11 — مدن أخرى (ربط داخلي) ══════════════ */}
        {props.otherCities.length > 0 && (
          <section className="mt-14 pb-6 border-t border-[color:var(--lx-hair-soft)] pt-8">
            <h2 className="lx-kicker mb-5">{props.serviceAr} في مدن أخرى</h2>
            <div className="flex flex-wrap gap-2.5">
              {props.otherCities.map((c) => (
                <Link key={c.href} href={c.href} className="lx-chip">
                  {c.label}
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
