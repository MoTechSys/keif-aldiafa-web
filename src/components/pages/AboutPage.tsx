import Image from "next/image";
import Link from "next/link";
import CatalogImg from "@/components/home/CatalogImg";
import { ContactBlock, IntentLinks, PageHero } from "@/components/pages/shared";
import { getImageById } from "@/lib/imageCatalog";
import { LEGAL_NAME, SOCIAL, UNIFIED_NUMBER } from "@/lib/site";

/**
 * AboutPage — من نحن (المرحلة 7 · D160 — إعادة كتابة كاملة من فهم العمل):
 * phero → قصتنا (نص + أرقام + صورة) → كيف نعمل (4 خطوات) → من نخدم (3 قطاعات بصور إثبات T1/T2)
 * → قيمنا (4) → الشهادات الثلاث كلٌّ ببطاقة مستقلة (وزارة التجارة · الزكاة والضريبة · المركز السعودي للأعمال)
 * → روابط صفحات النيّة → تواصل.
 * الأرقام المسموحة فقط: +500 · منذ 2016 · الرقم الموحّد (data/proof.json · D133). الصور من الكتالوج (D111).
 */
export const ABOUT_HERO = getImageById(133)!;   // فريق قهوجيين — الزي الأبيض (الكتالوج يستهدف /about)
const STORY_IMG = getImageById(121)!;           // صف 14 قهوجي — قاعة زواج جدة

/** من نخدم — صورة إثبات لكل قطاع (المستوى 1–2 في الكتالوج) */
const SECTORS = [
  {
    img: getImageById(9)!, // جناح وزارة الإعلام
    b: "الجهات الحكومية والوزارات",
    p: "أجنحة المعارض والمؤتمرات والاستقبالات الرسمية: قهوجي بزيّ رسمي، دلة وفناجين تليق بالجناح، وطاقم يفهم البروتوكول — من يُقدَّم له أولاً ومتى ينسحب. نعمل بأمر شراء وعقد وفاتورة إلكترونية.",
    links: [{ href: "/coffee-break-sharikat-jeddah", label: "ضيافة الشركات والجهات" }, { href: "/diyafa-alyawm-alwatani", label: "ضيافة اليوم الوطني" }],
  },
  {
    img: getImageById(53)!, // افتتاح قصر التنين بجدة
    b: "الشركات والافتتاحات والمعارض",
    p: "افتتاح متجر، حفل شركة، جناح في معرض غرفة جدة أو مؤتمر الحج: نضع ركن القهوة حيث يمرّ الزائر، ونضبط الطاقم على عدد الحضور بالساعة لا بالتخمين. الفاتورة تشمل كل شيء — بلا مفاجآت يوم الفعالية.",
    links: [{ href: "/portfolio", label: "صور من فعاليات نفّذناها" }],
  },
  {
    img: getImageById(11)!, // استقبال رسمي بالقهوة والبخور
    b: "الزواجات والمناسبات العائلية",
    p: "استقبال بالبخور والقهوة على المدخل، صف قهوجيين بالدقلة والشماغ، وقسم نسائي مستقل بمشرفة تديره من الداخل. نعرف أن العائلة لا تريد أن تفكّر في القهوة ليلة الزواج — فنتولّاها نحن من أول ضيف إلى آخر فنجان.",
    links: [{ href: "/diyafa-a3ras-jeddah", label: "ضيافة زواجات جدة" }, { href: "/qahwajiyat-sababat-jeddah", label: "قهوجيات وصبابات" }],
  },
];

/** كيف نعمل — أربع خطوات ثابتة في كل طلب */
const STEPS = [
  { n: "١", b: "تخبرنا بالمناسبة", p: "المدينة والتاريخ وعدد الضيوف ونوع المناسبة — على واتساب أو النموذج. نردّ خلال ساعات العمل بسؤال أو اثنين إن لزم." },
  { n: "٢", b: "نقترح الطاقم والزي", p: "كم قهوجي وصباب تحتاج، وأي زيّ يليق: دقلة سوداء للرسمي، ثوب وصديري للشركات، زي تراثي للتراثي. مع عرض سعر مكتوب." },
  { n: "٣", b: "نصل قبل الضيوف", p: "الطاقم والدلال والفناجين والبخور تصل مبكراً، نرتّب ركن القهوة، ونتأكد من مسار التقديم قبل أول ضيف." },
  { n: "٤", b: "نقدّم حتى آخر ضيف", p: "بأصول القهوة السعودية: الفنجان من اليمين، الكبير أولاً، والصبّ متجدد حتى ينتهي الضيف. ثم نجمع العدّة ونغادر بلا أثر." },
];

const VALUES = [
  { b: "الجودة أولاً", p: "نختار طاقمنا وتقديماتنا ومعداتنا بمعيار واحد: هل يليق بضيفك؟ إن لم يكن الجواب نعم، لا يخرج معنا." },
  { b: "الأصالة والهوية", p: "قهوة سعودية بحمصتها الغربية، دلال ذهبية وفضية، زي حزام ودقلة وسديرية ومكاوي — هوية لا تُستعار ولا تُقلَّد." },
  { b: "الاحترافية", p: "مواعيد دقيقة، بروتوكول واضح، وعروض أسعار وعقود وفواتير رسمية تمرّ من إدارة المشتريات بلا ملاحظات." },
  { b: "الابتكار", p: "سقّاء زمزم، سوّاس، خطاط ورسّام، مرآة تصوير — لمسات تجدّد الضيافة دون أن تفقد أصلها." },
];

/** الشهادات الثلاث — كل شهادة ببطاقة مستقلة تشرح ما تعنيه للعميل */
const CERTS = [
  {
    src: "/images/badges/commerce-crop.svg", alt: "وزارة التجارة", w: 771, h: 294,
    b: "سجل تجاري — وزارة التجارة",
    p: `${LEGAL_NAME} مؤسسة مسجّلة بسجل تجاري ساري، نشاطها الضيافة وتنظيم المناسبات. يعني أن العقد الذي توقّعه مع جهة قانونية قائمة، لا مع فرد.`,
  },
  {
    src: "/images/badges/zatca-crop.svg", alt: "هيئة الزكاة والضريبة والجمارك", w: 833, h: 581,
    b: "مسجّلة في هيئة الزكاة والضريبة والجمارك",
    p: "فواتيرنا إلكترونية متوافقة مع متطلبات الهيئة (فاتورة)، برقم ضريبي ورمز QR. تصل الفاتورة إلى إدارة المشتريات صالحة للاعتماد والصرف من أول مرة.",
  },
  {
    src: "/images/badges/sbc-crop.svg", alt: "المركز السعودي للأعمال", w: 748, h: 206,
    b: "موثّقة عبر المركز السعودي للأعمال",
    p: `الرقم الوطني الموحّد للمنشأة ${UNIFIED_NUMBER} — مرجع واحد تتحقق منه أي جهة حكومية أو شركة قبل التعاقد. نضعه على كل عرض سعر وعقد.`,
  },
];

export const ABOUT_WA = "السلام عليكم، أرغب بالاستفسار عن خدمات كيف الضيافة لمناسبة:\nالمدينة: \nالتاريخ: \nعدد الضيوف: ";

export default function AboutPage() {
  return (
    <div className="v7">
      <PageHero
        label="تعرّف علينا"
        h1={<>من نحن في <em>كيف الضيافة</em></>}
        p="مؤسسة سعودية من جدة تعمل منذ 2016 في شيء واحد: ضيافة القهوة السعودية للمناسبات — قهوجيين وصبابين وطاقم نسائي، بالدلال والفناجين والزي، للجهات والشركات والعائلات في ثماني مدن."
        img={ABOUT_HERO}
        crumbs={[{ label: "من نحن" }]}
      />

      <section className="on-deep glow" id="story">
        <div className="wrap">
          <div className="sec-head"><span className="label rv">قصتنا</span><h2 className="rv">بدأنا بدلّة وصينية — وبقينا على الأصل</h2></div>
          <div className="story">
            <div className="rv">
              <p>في 2016 كان الطلب بسيطاً: قهوجي يعرف كيف يصبّ القهوة السعودية في مجلس بجدة — من اليمين، للكبير أولاً، ويقف حتى يفرغ الضيف. لبّينا الطلب، ثم الثاني، ثم صار طاقماً كاملاً بزيّ واحد ودلال متطابقة.</p>
              <p>ما تغيّر بعدها هو الحجم لا المبدأ: من مجلس العائلة إلى جناح وزارة في معرض، ومن عشرة ضيوف إلى مؤتمر بآلاف الزوار. أكثر من 500 مناسبة نفّذناها بفريقنا — لا نوكّل الطاقم لطرف ثالث، ولا نرسل من لا نعرفه.</p>
              <p>اليوم يعمل معنا قهوجيين وصبابين ومباشرين، وقهوجيات وصبابات لقسم النساء، وسقّاء زمزم وخطاط ورسّام حين تحتاج المناسبة لمسة تراثية. المعدات كلها من مخزوننا في جدة وتصل معنا إلى أي مدينة.</p>
              <div className="nums">
                <div><b>+500</b><small>مناسبة نفّذناها بفريقنا</small></div>
                <div><b className="ar">منذ 2016</b><small>سنة البداية — جدة</small></div>
                <div><b className="ar">8 مدن</b><small>نصل إليها بطاقم وعدّة</small></div>
              </div>
            </div>
            <figure className="rv" data-g="about" style={{ cursor: "zoom-in" }}>
              <CatalogImg img={STORY_IMG} sizes="(max-width:899px) 92vw, 560px" sub={STORY_IMG.place} />
            </figure>
          </div>
        </div>
      </section>

      <section className="on-rich" id="how">
        <div className="wrap">
          <div className="sec-head"><span className="label rv">كيف نعمل</span><h2 className="rv">أربع خطوات — من رسالتك إلى آخر فنجان</h2></div>
          <div className="vals steps">
            {STEPS.map((s) => (
              <div key={s.b} className="val rv"><b><span className="num-ar">{s.n}</span> {s.b}</b><p>{s.p}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="on-deep" id="sectors">
        <div className="wrap">
          <div className="sec-head">
            <span className="label rv">من نخدم</span>
            <h2 className="rv">ثلاثة أنواع عملاء — وطاقم واحد يفهمهم جميعاً</h2>
            <p className="rv">الصور من مناسبات حقيقية وثّقها عملاؤنا — اضغط للتكبير.</p>
          </div>
          <div className="sectors">
            {SECTORS.map((s) => (
              <article key={s.b} className="sector rv">
                <figure className="shot" data-g="about-sectors" data-go="/portfolio" data-go-txt="معرض الأعمال">
                  <CatalogImg img={s.img} sizes="(max-width:899px) 92vw, 360px" sub={s.img.service} />
                  <figcaption><b>{s.img.title}</b><span>{s.img.service}</span></figcaption>
                </figure>
                <div className="sector-txt">
                  <h3>{s.b}</h3>
                  <p>{s.p}</p>
                  <div className="lnk">{s.links.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="on-rich" id="values">
        <div className="wrap">
          <div className="sec-head"><span className="label rv">قيمنا</span><h2 className="rv">أربعة مبادئ لا نتنازل عنها</h2></div>
          <div className="vals">{VALUES.map((v) => <div key={v.b} className="val rv"><b>{v.b}</b><p>{v.p}</p></div>)}</div>
        </div>
      </section>

      <section className="on-deep glow" id="trust">
        <div className="wrap">
          <div className="sec-head">
            <span className="label rv">شهادات التوثيق والاعتماد</span>
            <h2 className="rv">ثلاث شهادات رسمية — تتحقق منها قبل أن تتعاقد</h2>
            <p className="rv">مسؤول المشتريات يسأل ثلاثة أسئلة قبل أي تعاقد: هل المنشأة مسجّلة؟ هل فواتيرها معتمدة ضريبياً؟ وما رقمها الموحّد؟ هذه إجاباتنا الموثّقة.</p>
          </div>
          <div className="certs">
            {CERTS.map((c) => (
              <article key={c.src} className="cert rv">
                <div className="cert-badge"><Image src={c.src} alt={c.alt} width={c.w} height={c.h} loading="lazy" unoptimized /></div>
                <h3>{c.b}</h3>
                <p>{c.p}</p>
              </article>
            ))}
          </div>
          <p className="rv trust-maps">{LEGAL_NAME} — الرقم الوطني الموحّد <span className="num-ltr">{UNIFIED_NUMBER}</span> · تقييمات عملائنا على <a href={SOCIAL.googleMaps} target="_blank" rel="noopener">خرائط Google</a></p>
          <p className="rv trust-maps">خدمناك من قبل؟ <a href={SOCIAL.googleReview} target="_blank" rel="noopener" data-ev="review_about">قيّمنا على Google</a> — تقييمك يساعد أهل جدة على معرفتنا.</p>
        </div>
      </section>

      <IntentLinks
        cls="on-rich"
        label="ابدأ من مناسبتك"
        h2={<>صفحة لكل <em>نوع مناسبة</em></>}
        p="اختر ما يشبه مناسبتك — تجد فيها الطاقم المناسب وعدده وخطوات التقديم والأسعار التقريبية."
        slugs={["qahwajiin", "diyafa-a3ras-jeddah", "coffee-break-sharikat-jeddah", "qahwajiyat-sababat-jeddah", "diyafa-alyawm-alwatani", "mubashirin-qahwa-jeddah"]}
      />

      <ContactBlock h2={<>نسعد <em>بخدمتكم</em></>} p="استشارة مجانية حول الطاقم والزي والتقديمات المناسبة لمناسبتك." wa={ABOUT_WA} />
    </div>
  );
}
