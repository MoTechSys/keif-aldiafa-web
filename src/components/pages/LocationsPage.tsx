import Link from "next/link";
import { ContactBlock, PageHero, WaBtn } from "@/components/pages/shared";
import { SecHead } from "@/components/home/shared";
import { getImageById } from "@/lib/imageCatalog";
import { CITIES as LOCAL_CITIES, INTENT_PAGES, LOCAL_PAGES, SERVICES as LOCAL_SERVICES, localSlug } from "@/lib/localPages";
import { cityPath } from "@/lib/localPage";

/**
 * LocationsPage — فهرس المدن = النموذج v6.9 build_locations 1:1 (D115):
 * phero → بطاقات المدن الثماني (.cgrid-l) → روابط صفحات الخدمات بحسب المدينة (.lnk)
 * → تواصل. البيانات من localPages.ts (المصدر الوحيد لمفاتيح المدن والخدمات).
 */
export const LOCATIONS_HERO = getImageById(2)!;   // مؤتمر ومعرض الحج بجدة — المستوى 1
const WA = "السلام عليكم، أرغب بالاستفسار عن خدمات الضيافة لمناسبة:\nالمدينة: \nالتاريخ: \nعدد الضيوف: ";

export default function LocationsPage() {
  const cities = Object.values(LOCAL_CITIES);
  const links = [
    ...LOCAL_PAGES.map((p) => ({ label: `${LOCAL_SERVICES[p.service].ar} ${LOCAL_CITIES[p.city].ar}`, href: `/${localSlug(p.service, p.city)}` })),
    ...INTENT_PAGES.map((p) => ({ label: p.ar, href: `/${p.slug}` })),
  ];
  return (
    <div className="v7">
      <PageHero
        label="المدن"
        h1={<>نصل إليكم في <em>ثماني مدن</em> وما حولها</>}
        p="قاعدتنا جدة، ونخدم مكة والمدينة والرياض والطائف والدمام وأبها وينبع بطاقم وعدّة كاملة — مع ترتيب الانتقال والإقامة عند الحاجة."
        img={LOCATIONS_HERO}
        crumbs={[{ label: "المدن" }]}
        ctas={<WaBtn text={WA} cls="btn btn-gold" label="تواصل عبر واتساب" ev="wa_hero" />}
      />
      <section className="lsec on-deep glow" id="cities">
        <div className="wrap">
          <SecHead label="التغطية" h2="اختر مدينتك" />
          <div className="cgrid-l">
            {cities.map((c) => (
              <Link key={c.slug} className="rv" href={cityPath(c.slug)}>
                <b>{c.ar}</b><small>{c.region}</small><p>{c.intro}</p><span className="more">خدماتنا في {c.ar} ›</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="lsec on-rich" id="all">
        <div className="wrap">
          <SecHead label="روابط" h2="صفحات الخدمات بحسب المدينة" />
          <div className="lnk rv">{links.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}</div>
        </div>
      </section>
      <ContactBlock h2={<>مدينتك غير موجودة؟ <em>تواصل معنا</em></>} p="نصل إلى جميع مناطق المملكة بحسب التوفّر وترتيب الانتقال." wa={WA} />
    </div>
  );
}
