import type { ReactNode } from "react";
import Image from "next/image";
import CatalogImg from "@/components/home/CatalogImg";
import { OFFERINGS, UNIFORMS } from "@/lib/homeContent";
import type { CatalogImage } from "@/lib/imageCatalog";

/**
 * shared.tsx — قطع النموذج v6.9 المشتركة بين الرئيسية والصفحات المحلية
 * (sec_head · HINT · شريط الزي · مربعات التقديمات · بطاقة الخدمة) — مكوّنات خادم.
 */

export const HINT = (
  <span className="hint rv">
    اسحب لليسار
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 12H5m7-7-7 7 7 7" />
    </svg>
  </span>
);

/** <em> ذهبي داخل h2 — النموذج يكتب `نص <em>مميّز</em>` */
export function Em({ a, b }: { a: string; b?: string }) {
  return b ? (<>{a} <em>{b}</em></>) : <>{a}</>;
}

export function SecHead({ label, h2, p, hint = false, style }: { label: string; h2: ReactNode; p?: string; hint?: boolean; style?: React.CSSProperties }) {
  return (
    <div className="sec-head" style={style}>
      <span className="label rv">{label}</span>
      <h2 className="rv">{h2}</h2>
      {p && <p className="rv">{p}</p>}
      {hint && HINT}
    </div>
  );
}

/** شريط الزي (8) — نفس عناصر الرئيسية */
export function UniformFigures() {
  return (
    <>
      {UNIFORMS.map((u) => (
        <figure key={u.img.src} className="uni" data-g="uni" data-go={u.go} data-go-txt="تفاصيل الزي والطاقم">
          <CatalogImg img={u.img} sizes="(max-width:899px) 46vw, 210px" cap={u.b} sub={u.sub} />
          <b>{u.b}</b>
        </figure>
      ))}
    </>
  );
}

/** مربعات التقديمات — الرئيسية 13، الصفحات المحلية أول 8 (D75) */
export function OfferingTiles({ count = OFFERINGS.length }: { count?: number }) {
  return (
    <>
      {OFFERINGS.slice(0, count).map((o) => (
        <figure key={o.img.src + o.b} className="tile" data-g="off" data-go={o.go} data-go-txt="صفحة التقديمات">
          <CatalogImg img={o.img} sizes="(max-width:899px) 42vw, 200px" cap={o.b} />
          <span>{o.b}</span>
        </figure>
      ))}
    </>
  );
}

/** بطاقة خدمة (.svc) — <a> عادي لا Link: Lightbox يفتح الصورة ويمنع التنقّل كما في النموذج */
export function SvcCard({ href, img, b, small, local = false }: { href: string; img: CatalogImage; b: string; small: string; local?: boolean }) {
  return (
    <a className={`svc rv${local ? " local" : ""}`} href={href} data-g="svc" data-go-txt="صفحة الخدمة">
      <CatalogImg img={img} sizes="(max-width:899px) 48vw, 370px" cap={b} sub={small} />
      <div><b>{b}</b><small>{small}</small></div>
    </a>
  );
}

/** مقصوصات العدّة (النموذج v6.9 local.py CUTOUT_ITEMS — D142): 6 قصاصات 480×480 شفافة
 *  من `img/cutouts/` بأسمائها حرفياً. ليست صور كتالوج (لا alt كتالوج) — عناصر تصميم. */
export const CUTOUT_ITEMS: { f: string; n: string }[] = [
  { f: "dallah-gold", n: "دلة ذهبية" },
  { f: "cup-stripes", n: "فنجان مخطّط" },
  { f: "cup-emblem", n: "فنجان بالشعار" },
  { f: "cup-faceted", n: "فنجان مضلّع" },
  { f: "cup-porcelain", n: "فنجان بورسلان" },
  { f: "dallah-silver", n: "دلة فضية" },
];

export function CutoutGrid() {
  return (
    <div className="eq">
      {CUTOUT_ITEMS.map((c) => (
        <figure key={c.f} className="rv">
          <Image src={`/images/cutouts/${c.f}.webp`} alt={c.n} width={480} height={480} sizes="(max-width:899px) 30vw, 120px" loading="lazy" />
          <figcaption>{c.n}</figcaption>
        </figure>
      ))}
    </div>
  );
}
