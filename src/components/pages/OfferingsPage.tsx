import CatalogImg from "@/components/home/CatalogImg";
import { Chips, ContactBlock, FaqBlock, PageHero, WaBtn } from "@/components/pages/shared";
import {
  DISTRIBUTIONS_WA, EQUIPMENT, EQUIPMENT_TOTAL, EQUIPMENT_WA, FAQ_OFFERINGS,
  OFFERINGS_CONTACT_WA, OFFERINGS_HERO, OFFERINGS_HERO_WA, OFFERING_CATEGORIES, type OfferingItem,
} from "@/lib/offeringsContent";

/**
 * OfferingsPage — صفحة التقديمات والمعدات = النموذج v6.9 build_offerings 1:1 (D115):
 * phero → chips لاصقة → أقسام .cat (شبكة .items بعقد Lightbox) → معدات → توزيعات
 * → أسئلة → تواصل. مكوّن خادم؛ العميل: Lightbox/Reveal من الشِل + ChipsActive.
 * contain-intrinsic-size (cis) كما في النموذج: جوال 160+⌈n/2⌉×242 · حاسوب 180+⌈n/4⌉×328.
 */
function cis(n: number) {
  const m = 160 + Math.ceil(n / 2) * 242, d = 180 + Math.ceil(n / 4) * 328;
  return { ["--cis-m" as string]: `${m}px`, ["--cis-d" as string]: `${d}px` } as React.CSSProperties;
}

function Items({ items, g }: { items: OfferingItem[]; g: string }) {
  return (
    <div className="items">
      {items.map((it) => (
        <figure key={it.img.src} className="item rv" data-g={g}>
          <CatalogImg img={it.img} sizes="(max-width:899px) 46vw, 300px" cap={it.name} sub={it.desc} />
          <figcaption><b>{it.name}</b><small>{it.desc}</small></figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function OfferingsPage() {
  const chips = [
    ...OFFERING_CATEGORIES.map((c) => ({ href: `#${c.id}`, label: c.label, count: c.items.length })),
    { href: "#equipment", label: "المعدات", count: EQUIPMENT_TOTAL },
    { href: "#distributions", label: "التوزيعات" },
  ];
  return (
    <div className="v7">
      <PageHero
        label="التقديمات والمعدات"
        h1={<>ما الذي يصل إلى <em>ضيوفك؟</em></>}
        p="قهوة سعودية وشاي، مشروبات باردة، تمور محشية، حلويات ومعجنات، سناكات وسندوتشات وفواكه ومكسرات — ودلال وفناجين تليق بها. اختر ما تريد ونرتّبه لك."
        img={OFFERINGS_HERO.mobile}
        crumbs={[{ label: "التقديمات" }]}
        ctas={<><WaBtn text={OFFERINGS_HERO_WA} cls="btn btn-gold" label="اطلب قائمة تقديمات" ev="wa_hero" /><a className="btn btn-glass" href="#hot">استعرض الأصناف</a></>}
      />
      <Chips items={chips} ariaLabel="فئات التقديمات" />

      {OFFERING_CATEGORIES.map((c, ci) => (
        <section key={c.id} className={`cat ${ci % 2 === 0 ? "on-rich" : "on-deep"}`} id={c.id} style={cis(c.items.length)}>
          <div className="wrap">
            <div className="sec-head">
              <span className="label rv">{c.items.length} أصناف</span>
              <h2 className="rv">{c.label}</h2>
              <p className="rv">{c.desc}</p>
            </div>
            {c.note && <p className="rv cat-note">{c.note}</p>}
            <Items items={c.items} g={`of-${c.id}`} />
            <div className="cta-row rv"><WaBtn text={c.wa} cls="btn btn-glass btn-sm" label={c.waLabel} ev={`wa_off_${c.id}`} /></div>
          </div>
        </section>
      ))}

      {/* المعدات */}
      <section className="cat on-rich" id="equipment" style={cis(EQUIPMENT.length)}>
        <div className="wrap">
          <div className="sec-head">
            <span className="label rv">{EQUIPMENT_TOTAL} قطعة</span>
            <h2 className="rv">معدات التقديم</h2>
            <p className="rv">دلال ذهبية وفضية، فناجين وكاسات، استاندات وصواني — كلها من مخزوننا وتصل مع الطاقم.</p>
          </div>
          <Items items={EQUIPMENT} g="of-equipment" />
          <div className="cta-row rv"><WaBtn text={EQUIPMENT_WA} cls="btn btn-glass btn-sm" label="اسأل عن المعدات" ev="wa_off_equipment" /></div>
        </div>
      </section>

      {/* التوزيعات — نصي (لا صور توزيعات مستقلة في الكتالوج) */}
      <section className="cat on-deep" id="distributions">
        <div className="wrap">
          <div className="sec-head">
            <span className="label rv">هدايا الضيوف</span>
            <h2 className="rv">التوزيعات</h2>
            <p className="rv">صواني توزيعات VIP — تمر وحلا وقهوة — بتغليف فاخر يمكن طباعة شعار الجهة عليه.</p>
          </div>
          <div className="cta-row rv"><WaBtn text={DISTRIBUTIONS_WA} cls="btn btn-glass btn-sm" label="اطلب توزيعات" ev="wa_off_distributions" /></div>
        </div>
      </section>

      <FaqBlock items={FAQ_OFFERINGS} h2="عن التقديمات والمعدات" />
      <ContactBlock h2={<>أرسل قائمتك <em>ونعود إليك بعرض</em></>} p="اختر الأصناف، وأخبرنا بالمدينة والتاريخ وعدد الضيوف." wa={OFFERINGS_CONTACT_WA} />
    </div>
  );
}
