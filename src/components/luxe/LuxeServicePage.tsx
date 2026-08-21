/**
 * LuxeServicePage — الطبقة الفاخرة لصفحات (خدمة × مدينة).
 *
 * ═══════════════════════════════════════════════════════════════════════
 *  إعادة بناء كاملة بعد جولة الهاتف (20 لقطة على iPhone 14 — 390×844)
 * ═══════════════════════════════════════════════════════════════════════
 * القياس على الإصدار السابق: 14948px = 17.7 شاشة، 15 قسماً، 27 صورة،
 * 19 رابط واتساب، 4942 كلمة. الحكم كان: غير صالحة للنشر. الأسباب المقيسة
 * والإصلاح المقابل لكل واحد:
 *
 *  1) الطول: 17.7 شاشة. العميل لا ينزل 17 مرة. الأقسام دُمجت إلى ثمانية،
 *     والنصّ الطويل لم يُحذف بل طُوي في <details> (يبقى في HTML لمحرّكات
 *     البحث ولا يستهلك شاشة).
 *  2) الصور المعطوبة: تدقيق المكتبة كلها (25 صورة) أثبت أن كل الصور
 *     النسائية غربية أو بكمّامات، و8 من 10 صور طاقم بكمّامات كورونا،
 *     وواحدة فيها قوس بالونات. النظيف: buffet-1, buffet-2, counter-1 فقط.
 *     ⇒ شبكة CREW حُذفت بالكامل. لا نعرض بشراً بصور تُسيء للوعد.
 *  3) المربّع الأبيض: كان لوحة .lx-tile حول صورة خلفيتها بيضاء وفيها
 *     الشعار محروق في البكسل. حُذف المسار كله — الأجسام تطفو بلا صناديق.
 *  4) اللون: بطاقات كحلية rgb(38,40,62) داخل صفحة بنّية دافئة، وزر
 *     واتساب أخضر فاقع. وُحّد الكل إلى البنّي/الذهبي في luxe.css.
 *  5) التكرار: العدّة كانت تُذكر ثلاث مرات، والاعتراضات تكرار للأسئلة
 *     الشائعة، و«أعمالنا/من أعمالنا» عنوان مكرّر. كلها وُحّدت.
 *  6) الترتيب: أفضل قسم (نموذج الطلب) كان على العمق 8/20. رُفع إلى 3/20 —
 *     «أهم حاجة إنه يدخل يكلمنا».
 *  7) الهيرو: H1 على أربعة سطور فوق رؤوس الطاقم + شعار مرتين. الآن
 *     العنوان مقسوم عند الشرطة (رأس كبير سطران + ذيل صغير) وبراند واحد.
 *
 * Server Component بالكامل. الجزيرتان العميلتان الوحيدتان:
 * LuxeReveal (ظهور تدريجي) و LuxeRequest (نموذج الطلب).
 */

import Image from "next/image";
import Link from "next/link";
import type { LocalServicePageProps } from "@/components/LocalServicePage";
import { HERO, EQUIPMENT, DALLAH, DALLAH_SILVER, SECTIONS, FRAME } from "@/lib/luxeAssets";
import { PROTOCOL, STANDARDS, KIT, BADGES } from "@/lib/luxeCopy";
import LuxeReveal from "./LuxeReveal";
import LuxeRequest from "./LuxeRequest";
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
  IconArrow,
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

export default function LuxeServicePage(props: LocalServicePageProps) {
  const wa = (t: string) => `https://wa.me/${WA}?text=${encodeURIComponent(t)}`;
  const waMain = wa(`السلام عليكم، أرغب بالاستفسار عن خدمة ${props.serviceAr} في ${props.cityAr}.`);
  const tel = `tel:+966${WA_DISPLAY.replace(/^0/, "")}`;

  /* العنوان يُقسم عند الشرطة الطويلة: الرأس يقرأه العميل في ثانية،
     والذيل يحمل الكلمات المفتاحية ويبقى داخل نفس الـ<h1> فلا يخسر SEO. */
  const [h1Main, ...h1Rest] = props.h1.split("—");
  const h1Tail = h1Rest.join("—").trim();

  /* الصورتان النظيفتان الوحيدتان في المكتبة كلها (بلا وجوه ولا كمّامات) */
  const showcase = SECTIONS[0];

  return (
    <div className="luxe" dir="rtl">
      <LuxeIconDefs />
      <LuxeReveal />

      {/* ══════════ 1 / 8 — الهيرو ══════════
          الشاشة الأولى: صورة + 14 كلمة + زر واحد. لا شعار مكرّر،
          لا مسار تنقّل، لا مقدّمة. الانطباع يُبنى بالصورة لا بالقراءة. */}
      <section className="relative">
        <div className="relative h-[76svh] min-h-[500px] max-h-[700px] w-full overflow-hidden">
          <Image
            src={HERO.src}
            alt={HERO.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: HERO.focus }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(13,10,8,0.97) 4%, rgba(13,10,8,0.66) 32%, rgba(13,10,8,0.16) 60%, rgba(13,10,8,0.48) 100%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 45% at 82% 22%, rgba(216,168,119,0.20), transparent 70%)",
            }}
          />

          <div className="absolute inset-x-0 bottom-0 px-5 pb-8 sm:pb-11">
            <div className="max-w-3xl mx-auto text-center">
              {/* الرأس: سطران على الهاتف بقياس مضبوط على 26ch */}
              <h1 className="mb-4">
                <span className="lx-h1-main lx-sheen">{h1Main.trim()}</span>
                {h1Tail && <span className="lx-h1-tail">{h1Tail}</span>}
              </h1>

              <a
                href={waMain}
                target="_blank"
                rel="noopener noreferrer"
                className="lx-btn lx-btn--gold w-full max-w-sm mx-auto !min-h-[58px]"
              >
                <IconWhatsApp className="w-5 h-5" />
                احجز طاقمك الآن
              </a>
            </div>
          </div>
        </div>

        {/* الشارات الثلاث — نصّ لا أرقام، فقياس الخطّ نصّي لا رقمي
            (العطب السابق: 2rem لكلمة «طاقم سعودي» فطفحت خارج بطاقتها). */}
        <ul className="max-w-3xl mx-auto px-4 pt-7 grid grid-cols-3 gap-2 sm:gap-3">
          {BADGES.map((b, i) => (
            <li key={b.t} className="lx-stat" data-rise>
              {i === 0 ? (
                <IconCrew className="w-6 h-6 mx-auto mb-2" />
              ) : i === 1 ? (
                <IconClock className="w-6 h-6 mx-auto mb-2" />
              ) : (
                <IconShield className="w-6 h-6 mx-auto mb-2" />
              )}
              <b>{b.t}</b>
              <span>{b.d}</span>
            </li>
          ))}
        </ul>
      </section>

      <Orn />

      {/* ══════════ 2 / 8 — طلب العرض ══════════
          رُفع من العمق 8/20 إلى 3/20 بأمر صريح: «أهم حاجة إنه يدخل
          يكلمنا». لا أسعار — السعر يُبنى على المناسبة بعد المحادثة. */}
      <section className="max-w-3xl mx-auto px-4">
        <LuxeRequest cityAr={props.cityAr} />
      </section>

      <Orn />

      {/* ══════════ 3 / 8 — العدّة (مرة واحدة) ══════════
          كانت تُذكر ثلاث مرات: فقرة، ثم قائمة 8 بنود، ثم الأجسام.
          هنا كلها في كتلة واحدة: 12 كلمة + القائمة + الأجسام الطافية.
          الأجسام مقصوصة ومطبَّعة على لوحة 640×640 بقاعٍ عند 88%، فظلّ
          التلامس يصدُق على الجميع والأحجام موحّدة. بلا صناديق — هذه
          هي الآلية المقيسة في المراجع السبعة كلها. */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-8 lg:gap-12 items-center">
          <div data-rise>
            <p className="lx-eyebrow">
              <IconCup className="w-4 h-4" />
              العدّة
            </p>
            <h2 className="lx-h2">
              نأتي بعدّتنا <em>كاملة</em>
            </h2>
            <p className="lx-lead mb-6">
              لا نستعير من المكان، ولا نطلب منك تجهيز شيء.
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-5 gap-y-2.5">
              {KIT.map((k) => (
                <li
                  key={k}
                  className="flex items-start gap-2.5 text-[0.94rem] text-[--lx-cream-75] leading-relaxed"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[9px] w-[6px] h-[6px] shrink-0 rotate-45 border border-[--lx-gold-warm]"
                  />
                  {k}
                </li>
              ))}
            </ul>
          </div>

          <div data-rise className="grid grid-cols-3 gap-1 sm:gap-3">
            <figure className="lx-obj lx-obj--hero relative">
              <Image
                src={DALLAH.src}
                alt={DALLAH.alt}
                fill
                sizes="(max-width: 1024px) 31vw, 15vw"
                loading="eager"
              />
            </figure>
            <figure className="lx-obj relative">
              <Image
                src={DALLAH_SILVER.src}
                alt={DALLAH_SILVER.alt}
                fill
                sizes="(max-width: 1024px) 31vw, 15vw"
                loading="eager"
              />
            </figure>
            {EQUIPMENT.map((e) => (
              <figure key={e.src} className="lx-obj relative">
                <Image
                  src={e.src}
                  alt={e.alt}
                  fill
                  sizes="(max-width: 1024px) 31vw, 15vw"
                  loading="eager"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Orn />

      {/* ══════════ 4 / 8 — الطاقم والمعايير ══════════
          شبكة صور الطاقم حُذفت: أربع صور، كلّها بكمّامات أو غربية.
          وُضعت مكانها الصورة النظيفة الوحيدة (كاونتر ضيافة بلا وجوه)
          مع أربع بطاقات معايير — التعاقد يُقرأ لا يُصوَّر. */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <Head
              eyebrow="الهيئة"
              icon={<IconCrew className="w-4 h-4" />}
              lead="الفخامة تُرى قبل أن تُذاق. الزيّ والوقفة والهدوء في الحركة أول ما يلاحظه ضيفك."
            >
              طاقم بزيّ <em>سعودي تراثي</em>
            </Head>

            <div className="mt-8 grid sm:grid-cols-2 gap-3.5">
              {STANDARDS.map((s) => (
                <article key={s.t} data-rise className="lx-card p-5">
                  <h3 className="flex items-center gap-2.5 font-bold text-[--lx-gold-hi] mb-1.5 text-[1rem]">
                    <IconStar className="w-[18px] h-[18px] shrink-0" />
                    {s.t}
                  </h3>
                  <p className="lx-lead !text-[0.92rem] !leading-[1.8]">{s.d}</p>
                </article>
              ))}
            </div>
          </div>

          {showcase && (
            <figure data-rise className={`lx-shot relative ${FRAME[showcase.ratio]}`}>
              <Image
                src={showcase.src}
                alt={showcase.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                style={{ objectPosition: "center 35%" }}
              />
            </figure>
          )}
        </div>
      </section>

      <Orn />

      {/* ══════════ 5 / 8 — البروتوكول ══════════
          الميدالية مقيسة من بوستر «10 Shades of Black»: حلقة شعرية
          بفِلّ شفّاف يُظهر الخلفية. القرص المملوء يبدو أثقل وأرخص. */}
      <section className="max-w-4xl mx-auto px-4">
        <Head
          eyebrow="البروتوكول"
          icon={<IconClock className="w-4 h-4" />}
          center
          lead="خمس خطوات تمرّ بها كل مناسبة، من قبل يومها إلى ما بعد آخر ضيف."
        >
          كيف تُدار <em>الضيافة</em> عندنا
        </Head>

        <ol className="mt-9 divide-y divide-[--lx-hair-soft]">
          {PROTOCOL.map((p, pi) => (
            <li key={p.t} data-rise className="flex items-center gap-4 sm:gap-5 py-5">
              <span className="lx-medal" aria-hidden="true">
                <i />
                {String(pi + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <h3 className="font-bold text-[1.02rem] sm:text-lg text-[--lx-cream] leading-snug">
                  {p.t}
                </h3>
                <p className="lx-note !mt-1">{p.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <Orn />

      {/* ══════════ 6 / 8 — الباقات ══════════
          الشعار المعلّق (.lx-crest) حُذف: كان يظهر كـ«لسان ذهبي» مزاح
          عن المركز في RTL فيقرأه العميل كعطب برمجي لا كزخرفة. */}
      <section className="max-w-6xl mx-auto px-4">
        <Head
          eyebrow="الاختيارات"
          icon={<IconDallah className="w-4 h-4" />}
          center
          lead="ثلاث صيغ للخدمة، تُفصَّل كل واحدة على مناسبتك بعد المحادثة."
        >
          صيغ <em>{props.serviceAr}</em>
        </Head>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {props.packages.map((p) => (
            <article key={p.name} data-rise className="lx-card lx-frame p-6 flex flex-col">
              <h3 className="font-[family-name:var(--font-cairo)] text-lg font-extrabold text-[--lx-gold-hi] text-center mb-1.5">
                {p.name}
              </h3>
              <p className="lx-note text-center mb-5">{p.desc}</p>
              <ul className="space-y-2.5 mb-6">
                {p.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-[0.93rem] text-[--lx-cream-75]"
                  >
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

      {/* ══════════ 7 / 8 — الأسئلة الشائعة ══════════
          قسم «الاعتراضات» حُذف: أسئلته الثلاثة هي نفس أسئلة هذا القسم
          بصيغة أخرى. <details> أصلي بلا JS، ونصّه كامل في HTML فيتوافق
          مع FAQPage schema المُنبعث من صفحة المسار. */}
      <section className="max-w-3xl mx-auto px-4">
        <Head eyebrow="قبل الحجز" icon={<IconShield className="w-4 h-4" />} center>
          أسئلة يسألها <em>العملاء</em>
        </Head>

        <div className="mt-8" data-rise>
          {props.faqs.map((f) => (
            <details key={f.question} className="lx-faq">
              <summary>{f.question}</summary>
              <div className="lx-faq-body">{f.answer}</div>
            </details>
          ))}
        </div>
      </section>

      <Orn />

      {/* ══════════ 8 / 8 — الدعوة الختامية ══════════
          الزر الأخضر استُبدل بالذهبي: الأخضر لون تطبيق واتساب لا لون
          الصفحة، وظهوره في آخر شاشة كان يكسر اللوحة كلها. */}
      <section className="max-w-4xl mx-auto px-4">
        <div data-rise className="lx-card lx-frame p-8 sm:p-11 text-center">
          <p className="lx-eyebrow justify-center">الخطوة الأخيرة</p>
          <h2 className="lx-h2">
            مناسبتك تستحق ضيافة <em>لا تُنسى</em>
          </h2>
          <p className="lx-lead max-w-xl mx-auto mb-7">
            أرسل التاريخ وعدد الضيوف ونوع المناسبة، ويصلك عرض مكتوب ومفصّل.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md sm:max-w-none mx-auto">
            <a href={waMain} target="_blank" rel="noopener noreferrer" className="lx-btn lx-btn--gold">
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

      {/* ══════════ الطيّة المعرفية — للبحث لا للشاشة ══════════
          العطب: 4942 كلمة تُقرأ على الهاتف مستحيلة. والحذف يضرّ الترتيب
          (المنافسون يكتبون 1200+ كلمة). الحل الهندسي: النصّ كامل في
          HTML داخل <details> — تقرأه محرّكات البحث ويطلبه من يريده،
          ولا يستهلك من العميل شاشةً واحدة. */}
      <section className="max-w-3xl mx-auto px-4 mt-14">
        <details className="lx-fold">
          <summary>
            <span>تفاصيل الخدمة والتغطية</span>
            <IconArrow className="w-4 h-4 shrink-0" />
          </summary>

          <div className="lx-fold-body">
            <p>{props.intro}</p>

            {props.sections.map((s) => (
              <div key={s.h2}>
                <h3>{s.h2}</h3>
                <p>{s.body}</p>
              </div>
            ))}

            <h3>لماذا يُعاد اختيارنا</h3>
            <ul>
              {props.whyUs.map((w, i) => {
                /* الأيقونات كانت مُزاحة: ⏰ بجانب «طاقم سعودي» و👥 بجانب
                   «الالتزام بالمواعيد». الربط الآن صريح لكل بند. */
                const Ico = [IconPin, IconCrew, IconClock, IconDallah, IconStar, IconShield][i % 6];
                return (
                  <li key={w}>
                    <Ico className="w-[17px] h-[17px] shrink-0 mt-[3px]" />
                    {w}
                  </li>
                );
              })}
            </ul>

            <h3>الأحياء التي نخدمها في {props.cityAr}</h3>
            <p>
              نصل بمعدّاتنا وطاقمنا كاملاً إلى: {props.districts.join("، ")} — وكل ما يحيط
              بها، وبنفس مستوى التجهيز.
            </p>
          </div>
        </details>
      </section>

      {/* مسار التنقّل — سطر واحد أسفل الصفحة. قيمته لمحرّكات البحث
          تتحقق في أي موضع، ولا قيمة له في الانطباع الأول. */}
      <nav aria-label="مسار التنقّل" className="mt-9 px-4 text-[0.72rem] text-[--lx-cream-55]">
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

      {/* روابط المدن — الفراغ الميت (250px) قبل الفوتر أُزيل */}
      {props.otherCities.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 mt-8 pb-8 border-t border-[--lx-hair-soft] pt-7">
          <h2 className="text-[0.95rem] font-bold text-[--lx-cream-75] mb-4">
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
