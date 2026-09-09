import CatalogImg from "@/components/home/CatalogImg";
import { ContactBlock, PageHero, WaBtn } from "@/components/pages/shared";
import PortfolioFilters from "@/components/pages/PortfolioFilters";
import { PORTFOLIO_HERO, PORTFOLIO_WA, SHOTS } from "@/lib/portfolioContent";

/**
 * PortfolioPage — معرض الأعمال = النموذج v6.9 build_portfolio 1:1 (D115):
 * phero → أزرار تصفية → عدّاد → شبكة .pgrid (كل لقطة بوسم نوعها، عقد Lightbox،
 * data-go إلى نفس النوع) → ملاحظتان → تواصل. الشبكة تُصيَّر في الخادم كاملة.
 */
export default function PortfolioPage() {
  return (
    <div className="v7">
      <PageHero
        label="أعمالنا"
        h1={<>صور من مناسبات <em>نفّذناها</em></>}
        p={`${SHOTS.length} صورة من فعاليات الشركات والاستقبالات الرسمية والزواجات وتجهيزاتنا. اضغط على أي صورة لتكبيرها.`}
        img={PORTFOLIO_HERO}
        crumbs={[{ label: "أعمالنا" }]}
        ctas={<WaBtn text={PORTFOLIO_WA} cls="btn btn-gold" label="اطلب عرضًا مشابهًا" ev="wa_hero" />}
      />
      <section className="on-rich" id="gallery" style={{ paddingTop: 28 }}>
        <div className="wrap">
          <PortfolioFilters />
          <p className="pcount" id="pcount" aria-live="polite">{SHOTS.length} · كل الأعمال</p>
          <div className="pgrid" id="pgrid">
            {SHOTS.map((s) => (
              <figure key={s.img.src} className="shot rv" data-g="pf" data-type={s.type} data-go={`/portfolio?type=${s.type}`} data-go-txt="المزيد من هذا النوع">
                <CatalogImg img={s.img} sizes="(max-width:899px) 46vw, 300px" sub={s.img.service} />
                <span className="tag">{s.tag}</span>
                <figcaption><b>{s.img.title}</b><span>{s.img.service}</span></figcaption>
              </figure>
            ))}
          </div>
          <p className="pnote rv" id="govnote" hidden>تُعرض أعمال الجهات الحكومية كما وثّقها العميل — بلا أسماء أو شعارات مضافة من طرفنا.</p>
          <p className="pnote rv">شعارات الشركات في الصور تُعرض بوصفها جزءًا من المناسبة نفسها، وتوسم بـ «شركة».</p>
        </div>
      </section>
      <ContactBlock h2={<>تريد مناسبة <em>بهذا المستوى؟</em></>} p="أرسل المدينة والتاريخ وعدد الضيوف — ونعود إليك بعرض." wa={PORTFOLIO_WA} />
    </div>
  );
}
