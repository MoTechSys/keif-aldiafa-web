import Image from "next/image";
import CatalogImg from "@/components/home/CatalogImg";
import { ContactBlock, PageHero } from "@/components/pages/shared";
import { getImageById } from "@/lib/imageCatalog";
import { LEGAL_NAME, SOCIAL, UNIFIED_NUMBER } from "@/lib/site";

/**
 * AboutPage — من نحن = النموذج v6.9 build_about 1:1 (D115):
 * phero → قصتنا (نص + أرقام + صورة) → قيمنا (4) → التوثيق (س.ت + شارات) → تواصل.
 * الأرقام المسموحة فقط (+500 · منذ 2016 · س.ت 7033069720): «15 خدمة» و«4.5★ من 49
 * تقييماً» في النموذج غير مؤكَّدة من المالك (data/proof.json) → حُذفتا (D133).
 */
export const ABOUT_HERO = getImageById(133)!;   // فريق قهوجيين — الزي الأبيض (الكتالوج يستهدف /about)
const STORY_IMG = getImageById(121)!;           // فريق قهوجيين في قاعة زواج — جدة

const VALUES = [
  { b: "الجودة أولاً", p: "نختار طاقمنا وتقديماتنا ومعداتنا بمعيار واحد: هل يليق بضيفك؟" },
  { b: "الأصالة والهوية", p: "قهوة سعودية، دلال، زي حزام ودقلة وسديرية ومكاوي — هوية لا تُستعار." },
  { b: "الاحترافية", p: "مواعيد دقيقة، بروتوكول واضح، وعروض أسعار وعقود وفواتير رسمية." },
  { b: "الابتكار", p: "سقّاء زمزم، سوّاس، خطاط ورسّام، مرآة تصوير — لمسات تجدّد الضيافة دون أن تفقد أصلها." },
];
const BADGES = [
  { src: "/images/badges/commerce-crop.svg", alt: "وزارة التجارة", w: 771, h: 294 },
  { src: "/images/badges/zatca-crop.svg", alt: "هيئة الزكاة والضريبة والجمارك", w: 833, h: 581 },
  { src: "/images/badges/sbc-crop.svg", alt: "المركز السعودي للأعمال", w: 748, h: 206 },
];
export const ABOUT_WA = "السلام عليكم، أرغب بالاستفسار عن خدمات كيف الضيافة لمناسبة:\nالمدينة: \nالتاريخ: \nعدد الضيوف: ";

export default function AboutPage() {
  return (
    <div className="v7">
      <PageHero
        label="تعرّف علينا"
        h1={<>من نحن في <em>كيف الضيافة</em></>}
        p="منذ 2016 ونحن نقدم خدمات الضيافة الفاخرة بطاقم قهوجيين وصبابين وصبابات محترفين، بأعلى معايير الجودة والاحترافية."
        img={ABOUT_HERO}
        crumbs={[{ label: "من نحن" }]}
      />
      <section className="on-deep glow" id="story">
        <div className="wrap">
          <div className="sec-head"><span className="label rv">قصتنا</span><h2 className="rv">منذ 2016 — ضيافة تُحترم فيها المقامات</h2></div>
          <div className="story">
            <div className="rv">
              <p>بدأنا رحلتنا عام 2016 برؤية واضحة: أن تكون الضيافة السعودية الأصيلة حاضرة بأرقى صورة في كل مناسبة — من الاستقبال الرسمي إلى مجلس العائلة.</p>
              <p>اليوم، وبعد أكثر من 500 مناسبة للجهات والشركات والأفراد في مدن المملكة، ما زلنا نعمل بالمبدأ نفسه: طاقم مدرّب، زيّ يليق بالمقام، وتقديم يُحترم فيه الضيف قبل كل شيء.</p>
              <div className="nums">
                <div><b>+500</b><small>مناسبة نُفّذت</small></div>
                <div><b className="ar">منذ 2016</b><small>خبرة متواصلة</small></div>
                <div><b className="ar">8 مدن</b><small>نصل إليها بطاقم وعدّة</small></div>
              </div>
            </div>
            <figure className="rv" data-g="about" style={{ cursor: "zoom-in" }}>
              <CatalogImg img={STORY_IMG} sizes="(max-width:899px) 92vw, 560px" sub={STORY_IMG.place} />
            </figure>
          </div>
        </div>
      </section>
      <section className="on-rich" id="values">
        <div className="wrap">
          <div className="sec-head"><span className="label rv">قيمنا</span><h2 className="rv">أربعة مبادئ لا نتنازل عنها</h2></div>
          <div className="vals">{VALUES.map((v) => <div key={v.b} className="val rv"><b>{v.b}</b><p>{v.p}</p></div>)}</div>
        </div>
      </section>
      <section className="on-deep" id="trust">
        <div className="wrap">
          <div className="sec-head">
            <span className="label rv">التوثيق</span>
            <h2 className="rv">مؤسسة مسجّلة وموثّقة</h2>
            <p className="rv">{LEGAL_NAME} — الرقم الوطني الموحّد <span className="num-ltr">{UNIFIED_NUMBER}</span>. نعمل بعروض أسعار وعقود وفواتير رسمية، ونلتزم بمتطلبات المشتريات والبروتوكول لكل جهة.</p>
          </div>
          <div className="badges rv trust-badges">
            {BADGES.map((b) => <Image key={b.src} src={b.src} alt={b.alt} width={b.w} height={b.h} loading="lazy" unoptimized />)}
          </div>
          <p className="rv trust-maps">تقييمات عملائنا على <a href={SOCIAL.googleMaps} target="_blank" rel="noopener">خرائط Google</a></p>
        </div>
      </section>
      <ContactBlock h2={<>نسعد <em>بخدمتكم</em></>} p="استشارة مجانية حول الطاقم والزي والتقديمات المناسبة لمناسبتك." wa={ABOUT_WA} />
    </div>
  );
}
