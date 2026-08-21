/**
 * LuxeServicePage — الطبقة الفاخرة لصفحات (خدمة × مدينة).
 *
 * ═══ لماذا مكوّن جديد بدل تعديل LocalServicePage؟ ═══
 * LocalServicePage يخدم 24 صفحة منشورة على Vercel الآن. تعديله المباشر يعني
 * تغيير 24 صفحة دفعة واحدة بلا مراجعة. هذا المكوّن يقبل نفس الـ props بالحرف
 * (LocalServicePageProps) فيمكن تفعيله لصفحة واحدة كنموذج، ثم تعميمه بتغيير
 * سطر واحد بعد موافقتك.
 *
 * ═══ العطب الذي يُصلحه ═══
 * 1) القصّ: القالب القديم يفرض aspect-[4/5] على كل صورة. صور أفقية بنسبة
 *    1.78 و 2.36 كانت تُحشر في إطار 0.8 ⇒ ضياع 60–70% من الصورة.
 *    هنا كل صورة تُعرض بنسبتها المقيسة فعلياً (luxeAssets).
 * 2) الهيرو: كان min-h-[62vh] مع صورة 3168×1344 ⇒ القاعة تُقصّ جانبياً.
 *    هنا الهيرو نصّي على عمق كحلي، والقاعة تُعرض كاملة بعرضها في لوحة عريضة.
 * 3) اللون: الموقع كان ذهبي على رمادي #0f0f0f بلا الكحلي #1B224A الموجود
 *    في الشعار الأصلي. الكحلي أُعيد كأساس العمق.
 * 4) الأيقونات: كانت إيموجي. استُبدلت بـ SVG بتدرّج ذهبي وظلال (LuxeIcons).
 * 5) الهاتف: الشريط السفلي الثابت كان يغطي آخر الصفحة، والرقائق 26px.
 *    هنا مسافة أمان أسفل + كل هدف لمس ≥44px.
 * 6) <main> مكرّر: ClientLayout يوفّر <main>. هذا المكوّن يبدأ بـ <div>.
 *
 * Server Component بالكامل. الجزء التفاعلي معزول في جزيرتين عميلتين فقط
 * (LuxeReveal + LuxeQuote) فيبقى First Load JS منخفضاً والمحتوى كله في HTML.
 */

import Image from "next/image";
import Link from "next/link";
import type { LocalServicePageProps } from "@/components/LocalServicePage";
import { HERO, CREW, EQUIPMENT, DALLAH, GALLERY, SECTIONS, LOGO, FRAME } from "@/lib/luxeAssets";
import { PROTOCOL, STANDARDS, KIT, OBJECTIONS, BADGES } from "@/lib/luxeCopy";
import LuxeReveal from "./LuxeReveal";
import LuxeQuote from "./LuxeQuote";
import {
  LuxeIconDefs,
  IconDallah,
  IconCup,
  IconCrew,
  IconShield,
  IconClock,
  IconPin,
  IconIncense,
  IconStar,
  IconWhatsApp,
  IconPhone,
  IconArrow,
  IconCrestMark,
} from "./LuxeIcons";

const WA = "966508252134";
const WA_DISPLAY = "0508252134";

/* فاصل ماسي */
function Orn() {
  return (
    <div className="lx-orn" aria-hidden="true">
      <i />
    </div>
  );
}

/* ترويسة قسم موحّدة */
function Head({
  eyebrow,
  children,
  lead,
  center,
}: {
  eyebrow: string;
  children: React.ReactNode;
  lead?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""} data-rise>
      <p className="lx-eyebrow">{eyebrow}</p>
      <h2 className="lx-h2">{children}</h2>
      {lead && <p className={`lx-lead ${center ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>{lead}</p>}
    </div>
  );
}

export default function LuxeServicePage(props: LocalServicePageProps) {
  const wa = (t: string) => `https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
  const waMain = wa(`السلام عليكم، أرغب بالاستفسار عن خدمة ${props.serviceAr} في ${props.cityAr}.`);
  const tel = `tel:+966${WA_DISPLAY.replace(/^0/, "")}`;

  return (
    <div className="luxe" dir="rtl">
      {/* تعريفات التدرّج الذهبي والظلال للأيقونات — مرة واحدة لكل الصفحة */}
      <LuxeIconDefs />
      <LuxeReveal />

      {/* ══════════════════ الهيرو ══════════════════
          نصّي على عمق كحلي، لا صورة مقصوصة خلف النص.
          الشعار الأصلي في الأعلى، والـ CTA مرئي على الهاتف بلا تمرير. */}
      <section className="relative px-4 pt-24 pb-14 sm:pt-28 sm:pb-16 md:pt-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* مسار التنقّل */}
          <nav aria-label="مسار التنقّل" className="mb-7 text-[0.72rem] text-[--lx-cream-55]">
            <ol className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
              {props.breadcrumbItems.map((b, i) => (
                <li key={b.href} className="flex items-center gap-2">
                  {i > 0 && (
                    <span aria-hidden="true" className="text-[--lx-gold-deep]">
                      ·
                    </span>
                  )}
                  {i < props.breadcrumbItems.length - 1 ? (
                    <Link href={b.href} className="hover:text-[--lx-gold-warm] transition-colors">
                      {b.label}
                    </Link>
                  ) : (
                    <span className="text-[--lx-cream-75]">{b.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          {/* الشعار الأصلي — يظهر على الشاشات الواسعة فقط.
              السبب: على الهاتف يحمله الناف بار في الأعلى مباشرة، فتكراره
              على بُعد بكسلات قليلة يقرأ كخطأ نسخ لا كقصد تصميمي. */}
          <Image
            src={LOGO.mark}
            alt="كيف الضيافة"
            width={96}
            height={96}
            priority
            className="hidden md:block mx-auto mb-6 w-[92px] h-[92px] drop-shadow-[0_10px_28px_rgba(216,168,119,0.32)]"
          />

          <p className="lx-eyebrow justify-center mb-3">
            <IconPin className="w-4 h-4" />
            {props.cityAr}
          </p>

          <h1 className="font-[family-name:var(--font-cairo)] text-[clamp(1.72rem,7.4vw,3.4rem)] font-black leading-[1.22] tracking-tight mb-5">
            <span className="lx-sheen">{props.h1}</span>
          </h1>

          <p className="lx-lead max-w-3xl mx-auto">{props.intro}</p>

          {/* CTA — 52px، مرئي بلا تمرير على الهاتف */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center max-w-md sm:max-w-none mx-auto">
            <a
              href={waMain}
              target="_blank"
              rel="noopener noreferrer"
              className="lx-btn lx-btn--gold"
            >
              <IconWhatsApp className="w-5 h-5" />
              اطلب عرض سعر الآن
            </a>
            <a href={tel} className="lx-btn lx-btn--ghost">
              <IconPhone className="w-5 h-5" />
              {WA_DISPLAY}
            </a>
          </div>

          {/* شارات الثقة */}
          <ul className="mt-9 grid grid-cols-3 gap-2 sm:gap-3 max-w-2xl mx-auto">
            {BADGES.map((b, i) => (
              <li key={b.t} className="lx-stat">
                {i === 0 ? (
                  <IconCrew className="w-6 h-6 mx-auto mb-2" />
                ) : i === 1 ? (
                  <IconClock className="w-6 h-6 mx-auto mb-2" />
                ) : (
                  <IconShield className="w-6 h-6 mx-auto mb-2" />
                )}
                <b className="!text-[0.95rem] sm:!text-[1.1rem]">{b.t}</b>
                <span>{b.d}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ══════════════════ لوحة القاعة — الصورة بعرضها الكامل ══════════════════
          3168×1344 (نسبة 2.36). سابقاً كانت تُقصّ لتصير 0.8.
          الآن تُعرض كلوحة عريضة تحتفظ بالأعمدة والثريا والأرائك. */}
      <section className="px-3 sm:px-4" data-rise>
        <figure className="max-w-6xl mx-auto lx-shot lx-shot--plain lx-frame overflow-hidden">
          <div className="relative aspect-[16/9] sm:aspect-[21/9]">
            <Image
              src={HERO.src}
              alt={HERO.alt}
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 100vw, 1200px"
              className="object-cover"
              style={{ objectPosition: HERO.focus }}
            />
            {/* تدرّج خفيف أسفل الصورة لدمجها بالعمق الداكن */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, rgba(7,8,15,0.72) 0%, rgba(7,8,15,0.12) 38%, transparent 66%)",
              }}
              aria-hidden="true"
            />
          </div>
          <figcaption className="lx-note px-4 py-3 text-center border-t border-[--lx-hair-soft]">
            من تنفيذ فريق كيف الضيافة — قاعة استقبال مجهّزة بالكامل قبل وصول الضيوف
          </figcaption>
        </figure>
      </section>

      <Orn />

      {/* ══════════════════ الأقسام النصية بالصور ══════════════════
          الصور هنا من محتوى الصفحة نفسه (props.sections) لكن بإطار 4/3
          الذي يناسب النسب الأفقية، مع تدرّج سفلي بدل القصّ العمودي. */}
      <div className="max-w-6xl mx-auto px-4 space-y-16 sm:space-y-24">
        {props.sections.map((s, i) => (
          <section key={i} className="grid md:grid-cols-2 gap-7 md:gap-12 items-center">
            <div data-rise className={i % 2 === 1 ? "md:order-2" : ""}>
              <p className="lx-eyebrow">
                {i === 0 ? <IconDallah className="w-4 h-4" /> : i === 1 ? <IconCrew className="w-4 h-4" /> : <IconCup className="w-4 h-4" />}
                {i === 0 ? "الأصول" : i === 1 ? "الطاقم" : "العدّة"}
              </p>
              <h2 className="lx-h2">{s.h2}</h2>
              <p className="lx-lead whitespace-pre-line">{s.body}</p>
            </div>
            {SECTIONS[i] && (
              <div data-rise className={i % 2 === 1 ? "md:order-1" : ""}>
                <div
                  className={`lx-shot relative ${FRAME[SECTIONS[i].ratio]} ${
                    SECTIONS[i].ratio === "square" ? "lx-tile lx-shot--plain" : ""
                  }`}
                >
                  <Image
                    src={SECTIONS[i].src}
                    alt={SECTIONS[i].alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={
                      SECTIONS[i].ratio === "square"
                        ? "object-contain p-7"
                        : "object-cover"
                    }
                    style={
                      SECTIONS[i].ratio === "square"
                        ? undefined
                        : { objectPosition: "center 30%" }
                    }
                  />
                </div>
              </div>
            )}
          </section>
        ))}
      </div>

      <Orn />

      {/* ══════════════════ الطاقم — صور عمودية بإطار عمودي ══════════════════
          4 صور مقيسة (0.56 / 0.75 / 0.56 / 0.63) ⇒ إطار 3/4 يحفظ الزيّ كاملاً
          من العقال إلى أسفل البشت، وهو موضع الفخامة الحقيقي في الصورة. */}
      <section className="max-w-6xl mx-auto px-4">
        <Head
          eyebrow="الهيئة"
          center
          lead="الفخامة تُرى قبل أن تُذاق. الزيّ والوقفة والهدوء في الحركة هي أول ما يلاحظه ضيفك، قبل أن يصل الفنجان إلى يده."
        >
          طاقم بزيّ <em>سعودي تراثي</em> ورسمي
        </Head>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
          {CREW.map((c) => (
            <figure key={c.src} data-rise className={`lx-shot relative ${FRAME[c.ratio]}`}>
              <Image
                src={c.src}
                alt={c.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
                style={{ objectPosition: c.focus }}
              />
            </figure>
          ))}
        </div>

        {/* المعايير */}
        <div className="mt-9 grid sm:grid-cols-2 gap-3.5">
          {STANDARDS.map((s) => (
            <article key={s.t} data-rise className="lx-card p-5 sm:p-6">
              <h3 className="flex items-center gap-2.5 font-bold text-[--lx-gold-hi] mb-2">
                <IconStar className="w-[18px] h-[18px] shrink-0" />
                {s.t}
              </h3>
              <p className="lx-lead !text-[0.92rem]">{s.d}</p>
            </article>
          ))}
        </div>
      </section>

      <Orn />

      {/* ══════════════════ بروتوكول التقديم — الميداليات المرقّمة ══════════════════ */}
      <section className="max-w-4xl mx-auto px-4">
        <Head
          eyebrow="البروتوكول"
          lead="لا نصل ونرتّب على الحاضر. هذه هي الخطوات الخمس التي تمرّ بها كل مناسبة عندنا، من قبل يوم المناسبة إلى ما بعد آخر ضيف."
        >
          كيف تُدار <em>الضيافة</em> عندنا خطوة بخطوة
        </Head>

        <ol className="lx-steps mt-10 space-y-9">
          {PROTOCOL.map((p) => (
            <li key={p.t} data-rise className="lx-step">
              <h3 className="font-bold text-lg text-[--lx-cream] mb-1.5 pt-2.5">{p.t}</h3>
              <p className="lx-lead !text-[0.94rem]">{p.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <Orn />

      {/* ══════════════════ المعدّات — اللوحة الكريمية ══════════════════
          هذه الصور خلفيتها #FFFFFF ناصع. عرضها مباشرة على عمق داكن
          يُنتج مربعات بيضاء فاقعة تكسر الإحساس الفاخر. الحل: لوحة كريمية
          مقصودة (.lx-tile) تجعل الخلفية البيضاء عنصر تصميم لا خطأ. */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-8 lg:gap-12 items-center">
          <div data-rise>
            <p className="lx-eyebrow">
              <IconCup className="w-4 h-4" />
              العدّة
            </p>
            <h2 className="lx-h2">
              أدوات تقديم <em>أصلية</em> — لا نعتمد على المكان
            </h2>
            <p className="lx-lead mb-6">
              نأتي بكل ما تحتاجه الضيافة: الدلال والفناجيل والترامس والمباخر وحوامل
              البوفيه. لا نطلب من صاحب المناسبة تجهيز شيء، ولا نستعير من المكان
              أدواته. هذا يعني أن مستوى التقديم ثابت في كل مناسبة، لا يتغيّر بتغيّر
              القاعة.
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-5 gap-y-2.5">
              {KIT.map((k) => (
                <li key={k} className="flex items-start gap-2.5 text-[0.92rem] text-[--lx-cream-75] leading-relaxed">
                  <span
                    aria-hidden="true"
                    className="mt-[9px] w-[6px] h-[6px] shrink-0 rotate-45 border border-[--lx-gold-warm]"
                  />
                  {k}
                </li>
              ))}
            </ul>
          </div>

          <div data-rise className="grid grid-cols-2 gap-3 sm:gap-4">
            {/* الدلّة الذهبية — أكبر لأنها العنصر الأيقوني */}
            <figure className="lx-tile col-span-2 relative aspect-[16/10]">
              <Image
                src={DALLAH.src}
                alt={DALLAH.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-contain p-6"
              />
            </figure>
            {EQUIPMENT.slice(0, 4).map((e) => (
              <figure key={e.src} className="lx-tile relative aspect-square">
                <Image
                  src={e.src}
                  alt={e.alt}
                  fill
                  sizes="(max-width: 640px) 45vw, 22vw"
                  className="object-contain p-3.5"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Orn />

      {/* ══════════════════ الحاسبة + النموذج ══════════════════
          التدقيق أظهر <form> = 0 في الصفحة المنشورة: كل التحويل كان روابط
          واتساب بنص ثابت، فلا يعرف العميل التكلفة ولا يصلك بيان مؤهَّل. */}
      <section className="max-w-3xl mx-auto px-4">
        <LuxeQuote cityAr={props.cityAr} />
      </section>

      <Orn />

      {/* ══════════════════ الباقات ══════════════════ */}
      <section className="max-w-6xl mx-auto px-4">
        <Head eyebrow="الباقات" center lead={props.pricingNote}>
          باقات <em>{props.serviceAr}</em>
        </Head>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {props.packages.map((p) => (
            <article
              key={p.name}
              data-rise
              className="lx-card lx-frame p-6 pt-9 flex flex-col"
            >
              <span className="lx-crest" aria-hidden="true">
                <IconCrestMark />
              </span>
              <h3 className="font-[family-name:var(--font-cairo)] text-xl font-extrabold text-[--lx-gold-hi] text-center mb-1.5">
                {p.name}
              </h3>
              <p className="lx-note text-center mb-5">{p.desc}</p>
              <ul className="space-y-2.5 mb-5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[0.93rem] text-[--lx-cream-75]">
                    <span
                      aria-hidden="true"
                      className="mt-[9px] w-[6px] h-[6px] shrink-0 rotate-45 bg-[--lx-gold-warm]"
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={wa(`السلام عليكم، أرغب بـ«${p.name}» — ${props.serviceAr} في ${props.cityAr}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="lx-btn lx-btn--ghost mt-auto w-full"
              >
                اطلب هذه الباقة
                <IconArrow className="w-4 h-4" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <Orn />

      {/* ══════════════════ المعرض — كل صورة بنسبتها ══════════════════
          الشبكة هنا لا تفرض نسبة واحدة. الصور العمودية (0.75) تأخذ 3/4،
          والأفقية (1.78 و 1.33) تأخذ صفّاً كاملاً أو 4/3. نتيجة القياس:
          لا صورة تفقد شيئاً من إطارها. */}
      <section className="max-w-6xl mx-auto px-4">
        <Head eyebrow="أعمالنا" center lead="صور من تنفيذ فعلي — بوفيهات وكاونترات واستقبالات رسمية، بلا معالجة تُجمّل ما لم يحدث.">
          من <em>أعمالنا</em>
        </Head>

        <div className="mt-11 grid grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
          {GALLERY.map((g, gi) => (
            <figure
              key={g.src}
              data-rise
              className={`lx-shot lx-shot--load relative ${FRAME[g.ratio]} ${
                g.ratio === "landscape" || g.ratio === "wide"
                  ? "col-span-2 lg:col-span-2"
                  : ""
              }`}
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                /* eager لأول أربع: العطب السابق أن lazy + opacity:0 معاً
                   جعلا البطاقات تظهر فارغة تماماً عند الوصول إليها. */
                loading={gi < 4 ? "eager" : "lazy"}
                sizes={
                  g.ratio === "landscape" || g.ratio === "wide"
                    ? "(max-width: 1024px) 100vw, 66vw"
                    : "(max-width: 640px) 50vw, 33vw"
                }
                className="object-cover"
              />
            </figure>
          ))}
        </div>
      </section>

      <Orn />

      {/* ══════════════════ الأحياء — رقائق 44px ══════════════════
          العطب السابق: px-3 py-1.5 ≈ 26px، أقل من معيار اللمس بـ40%. */}
      <section className="max-w-5xl mx-auto px-4">
        <Head
          eyebrow="التغطية"
          lead={`نصل بمعدّاتنا وطاقمنا كاملاً إلى كل حيّ داخل ${props.cityAr} وما يحيط بها، وبنفس مستوى التجهيز — لا فرق بين حيّ وآخر في الخدمة.`}
        >
          الأحياء التي <em>نخدمها</em>
        </Head>

        <ul className="mt-8 flex flex-wrap gap-2.5" data-rise>
          {props.districts.map((d) => (
            <li key={d}>
              <span className="lx-chip">
                <IconPin className="w-[15px] h-[15px] me-2 shrink-0" />
                {d}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <Orn />

      {/* ══════════════════ لماذا نحن + معالجة الاعتراضات ══════════════════ */}
      <section className="max-w-6xl mx-auto px-4">
        <Head eyebrow="الضمانات" center>
          لماذا يُعاد <em>اختيارنا</em>
        </Head>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5">
          {props.whyUs.map((w, i) => {
            const Ico = [IconShield, IconClock, IconCrew, IconDallah, IconIncense, IconStar][i % 6];
            return (
              <article key={w} data-rise className="lx-card p-5 flex items-start gap-3.5">
                <Ico className="w-7 h-7 shrink-0 mt-0.5" />
                <p className="text-[0.95rem] leading-relaxed text-[--lx-cream-75]">{w}</p>
              </article>
            );
          })}
        </div>

        {/* الاعتراضات — محتوى يعالج الخوف الحقيقي قبل الحجز */}
        <div className="mt-8 grid md:grid-cols-3 gap-3.5">
          {OBJECTIONS.map((o) => (
            <article key={o.q} data-rise className="lx-card p-5 sm:p-6">
              <h3 className="font-bold text-[--lx-cream] mb-2 text-[0.98rem]">“{o.q}”</h3>
              <p className="lx-lead !text-[0.9rem]">{o.a}</p>
            </article>
          ))}
        </div>
      </section>

      <Orn />

      {/* ══════════════════ الأسئلة الشائعة — أكورديون أصلي ══════════════════
          <details>/<summary> بلا JS: يعمل قبل الترطيب، ونصّه كامل في HTML
          فيتوافق مع FAQPage schema المُنبعث من صفحة المسار. */}
      <section className="max-w-3xl mx-auto px-4">
        <Head eyebrow="أسئلة شائعة" center>
          أسئلة يسألها <em>العملاء</em> قبل الحجز
        </Head>

        <div className="mt-9" data-rise>
          {props.faqs.map((f) => (
            <details key={f.question} className="lx-faq">
              <summary>{f.question}</summary>
              <div className="lx-faq-body">{f.answer}</div>
            </details>
          ))}
        </div>
      </section>

      <Orn />

      {/* ══════════════════ الدعوة الختامية ══════════════════ */}
      <section className="max-w-4xl mx-auto px-4">
        <div data-rise className="lx-card lx-frame p-8 sm:p-12 pt-12 text-center">
          <span className="lx-crest" aria-hidden="true">
            <IconCrestMark />
          </span>
          <p className="lx-eyebrow justify-center">الخطوة الأخيرة</p>
          <h2 className="lx-h2">
            مناسبتك تستحق ضيافة <em>لا تُنسى</em>
          </h2>
          <p className="lx-lead max-w-xl mx-auto mb-8">
            أرسل لنا التاريخ وعدد الضيوف ونوع المناسبة، ويصلك عرض مكتوب ومفصّل —
            بلا التزام وبلا بنود مخفية.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md sm:max-w-none mx-auto">
            <a href={waMain} target="_blank" rel="noopener noreferrer" className="lx-btn lx-btn--wa">
              <IconWhatsApp className="w-5 h-5" />
              تواصل عبر واتساب
            </a>
            <a href={tel} className="lx-btn lx-btn--ghost">
              <IconPhone className="w-5 h-5" />
              اتصل: {WA_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════ روابط المدن الأخرى ══════════════════ */}
      {props.otherCities.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 mt-16 sm:mt-20 pb-14 border-t border-[--lx-hair-soft] pt-9">
          <h2 className="text-base font-bold text-[--lx-cream-75] mb-5">
            نفس الخدمة في مدن أخرى
          </h2>
          <ul className="flex flex-wrap gap-2.5">
            {props.otherCities.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className="lx-chip">
                  {c.label}
                  <IconArrow className="w-3.5 h-3.5 ms-2 shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
