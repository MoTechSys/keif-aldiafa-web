import Link from "next/link";
import CatalogImg from "@/components/home/CatalogImg";
import { Chips, ContactBlock, FaqBlock, Fig, PageHero, WaBtn } from "@/components/pages/shared";
import {
  FAQ_SERVICES, SERVICES, SERVICES_CONTACT_WA, SERVICES_HERO, SERVICES_HERO_WA, SERVICE_GROUPS, chipLabel, serviceWa, type Service,
} from "@/lib/servicesContent";

/**
 * ServicesPage — صفحة الخدمات = النموذج v6.9 build_services 1:1 (D115):
 * phero → chips → 4 مجموعات .grp كلٌّ ببطاقات .card (نص + معرض .gal + أزياء + أزرار)
 * → أسئلة → تواصل. مكوّن خادم. المعرض: أول 5 ظاهرة والباقي hidden مع «+N» (عقد Lightbox).
 * cis كما في النموذج (kind=grp): جوال 130+n×600 · حاسوب 150+n×450.
 */
function cis(n: number) {
  return { ["--cis-m" as string]: `${130 + n * 600}px`, ["--cis-d" as string]: `${150 + n * 450}px` } as React.CSSProperties;
}

function Card({ s }: { s: Service }) {
  const g = `svc-${s.id}`;
  const extra = s.gallery.length - 5;
  return (
    <article className="card rv" id={s.id} aria-labelledby={`h-${s.id}`}>
      <div className="txt">
        <span className="latin">{s.latin}</span>
        <h3 id={`h-${s.id}`}>{s.title}</h3>
        <p className="short">{s.short}</p>
        <p className="desc">{s.desc}</p>
        <ul className="feats">{s.features.map((f) => <li key={f}>{f}</li>)}</ul>
      </div>
      {s.gallery.length > 0 && (
        <div className="media">
          <div className="gal">
            {s.gallery.map((im, k) => (
              <Fig key={im.src} img={im} g={g} sizes={k === 0 ? "(max-width:899px) 50vw, 300px" : "(max-width:899px) 25vw, 150px"} sub={im.service} hidden={k >= 5} more={k === 4 && extra > 0 ? `+${extra}` : undefined} />
            ))}
          </div>
        </div>
      )}
      {s.outfits && (
        <div className="outfits">
          <h4>الأزياء المتاحة — اختر ما يناسب طابع مناسبتك</h4>
          <div className="ogrid">
            {s.outfits.flatMap((o) => o.imgs.map((im) => (
              <figure key={im.src} data-g={g}>
                <CatalogImg img={im} sizes="(max-width:899px) 30vw, 140px" cap={o.name} sub={o.desc} />
                <figcaption>{o.name}</figcaption>
              </figure>
            )))}
          </div>
        </div>
      )}
      <div className="acts">
        <WaBtn text={serviceWa(s.title)} cls="btn btn-gold" label="اطلب هذه الخدمة" ev={`wa_svc_${s.id}`} />
        <Link className="btn btn-glass" href={`/contact?service=${s.id}`}>نموذج طلب عرض</Link>
      </div>
    </article>
  );
}

export default function ServicesPage() {
  const chips = SERVICE_GROUPS.flatMap((g) => g.ids.map((id) => ({ href: `#${id}`, label: chipLabel(SERVICES[id].title) })));
  return (
    <div className="v7">
      <PageHero
        label="الخدمات"
        h1={<>كل ما تحتاجه مناسبتك — <em>من طاقم واحد</em></>}
        p="خمس عشرة خدمة في أربع مجموعات: طاقم رجالي ونسائي، تراث وفنون، أركان وتجهيز. اختر ما يناسب طابع مناسبتك واطلب عرضًا خلال دقائق."
        img={SERVICES_HERO}
        crumbs={[{ label: "الخدمات" }]}
        ctas={<><WaBtn text={SERVICES_HERO_WA} cls="btn btn-gold" label="اطلب عرضًا الآن" ev="wa_hero" /><a className="btn btn-glass" href="#g-male">استعرض الخدمات</a></>}
      />
      <Chips items={chips} ariaLabel="الخدمات" />
      {SERVICE_GROUPS.map((g, gi) => (
        <section key={g.key} className={`grp ${gi % 2 === 0 ? "on-rich" : "on-deep"}`} id={`g-${g.key}`} style={cis(g.ids.length)}>
          <div className="wrap">
            <div className="sec-head"><span className="label rv">{g.hint}</span><h2 className="rv">{g.label}</h2></div>
            {g.ids.map((id) => <Card key={id} s={SERVICES[id]} />)}
          </div>
        </section>
      ))}
      <FaqBlock items={FAQ_SERVICES} h2="قبل أن تختار الخدمة" />
      <ContactBlock h2={<>لم تجد ما تبحث عنه؟ <em>أخبرنا بمناسبتك</em></>} p="نقترح عليك الطاقم والزي والتقديمات المناسبة — بلا التزام." wa={SERVICES_CONTACT_WA} />
    </div>
  );
}
