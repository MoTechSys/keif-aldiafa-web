import Link from "next/link";
import type { ReactNode } from "react";
import CatalogImg from "@/components/home/CatalogImg";
import HeroPicture from "@/components/home/HeroPicture";
import { WaIcon } from "@/components/v7/WaIcon";
import type { CatalogImage } from "@/lib/imageCatalog";
import { WHATSAPP_DISPLAY, PHONE, waLink } from "@/lib/site";

/**
 * pages/shared.tsx — قطع النموذج v6.9 المشتركة بين الصفحات الرئيسية
 * (build.py: phero · chips · fig · faq_block · contact_block) — مكوّنات خادم.
 * المرحلة 5 (D132). الصور من الكتالوج فقط (D111): alt/عنوان حرفيان.
 */

export type Crumb = { label: string; href?: string };

export function WaBtn({ text, cls = "btn btn-wa", label = "تواصل عبر واتساب", ev = "wa" }: { text: string; cls?: string; label?: string; ev?: string }) {
  return (
    <a className={cls} href={waLink(text)} target="_blank" rel="noopener" data-ev={ev}><WaIcon />{label}</a>
  );
}

/** فتات الخبز — النموذج: الرئيسية › … › الحالية */
export function Crumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className="crumb" aria-label="مسار التنقل">
      <Link href="/">الرئيسية</Link>
      {items.map((c) => (
        <span key={c.label} style={{ display: "contents" }}>
          <span>›</span>
          {c.href ? <Link href={c.href}>{c.label}</Link> : <span>{c.label}</span>}
        </span>
      ))}
    </nav>
  );
}

/**
 * phero — هيرو الصفحة الداخلية: صورة كتالوج خلفية (أو بلا صورة .noimg)
 * + label + h1 (مع <em>) + فقرة + شارات اختيارية + أزرار.
 */
export function PageHero({ label, h1, p, img, crumbs, ctas, after, ariaLabel }: {
  label: string; h1: ReactNode; p: string; img?: CatalogImage | null; crumbs: Crumb[]; ctas?: ReactNode; after?: ReactNode; ariaLabel?: string;
}) {
  return (
    <section className={`phero${img ? "" : " noimg"}`} aria-label={ariaLabel ?? label}>
      {img && <div className="bg" aria-hidden="true"><HeroPicture mobile={img} /></div>}
      <div className="wrap">
        <Crumbs items={crumbs} />
        <span className="label">{label}</span>
        <h1>{h1}</h1>
        <p>{p}</p>
        {after}
        {ctas && <div className="cta">{ctas}</div>}
      </div>
    </section>
  );
}

/** شريط الروابط اللاصق (.chips) — مع عدّاد لاتيني اختياري */
export function Chips({ items, ariaLabel }: { items: { href: string; label: string; count?: number }[]; ariaLabel: string }) {
  return (
    <nav className="chips" aria-label={ariaLabel}>
      <div className="wrap">
        {items.map((c) => (
          <a key={c.href} href={c.href}>{c.label}{c.count !== undefined && <b>{c.count}</b>}</a>
        ))}
      </div>
    </nav>
  );
}

/** fig — صورة معرض بعقد Lightbox (data-g) وأيقونة تكبير */
export function Fig({ img, g, sizes, cap, sub, tag, cls, hidden, more, go, goTxt }: {
  img: CatalogImage; g: string; sizes: string; cap?: string; sub?: string; tag?: string; cls?: string; hidden?: boolean; more?: string; go?: string; goTxt?: string;
}) {
  const className = [cls, more ? "more" : ""].filter(Boolean).join(" ") || undefined;
  return (
    <figure className={className} data-g={g} data-more={more} data-go={go} data-go-txt={goTxt} hidden={hidden || undefined}>
      <CatalogImg img={img} sizes={sizes} cap={cap} sub={sub} />
      {tag && <span className="tag">{tag}</span>}
      <span className="zoom" aria-hidden="true">⤢</span>
    </figure>
  );
}

export function FaqBlock({ items, h2 }: { items: { q: string; a: string }[]; h2: string }) {
  return (
    <section className="on-deep" id="faq">
      <div className="wrap">
        <div className="sec-head"><span className="label rv">أسئلة شائعة</span><h2 className="rv">{h2}</h2></div>
        <div className="faqs">
          {items.map((f, i) => (
            <details key={f.q} className="rv" open={i === 0}><summary>{f.q}</summary><p>{f.a}</p></details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactBlock({ h2, p, wa }: { h2: ReactNode; p: string; wa: string }) {
  return (
    <section className="on-black grain glow contact" id="contact" data-sim="chrome">
      <div className="wrap">
        <span className="label rv">تواصل</span>
        <h2 className="rv">{h2}</h2>
        <p className="rv">{p}</p>
        <div className="actions rv">
          <WaBtn text={wa} cls="btn btn-wa" label="تواصل عبر واتساب" ev="wa_contact" />
          <Link className="btn btn-glass" href="/contact">نموذج طلب عرض</Link>
        </div>
        <p className="tel rv">واتساب واتصال: <a href={`tel:${PHONE}`}>{WHATSAPP_DISPLAY}</a></p>
        <p className="assure rv">عروض أسعار وعقود وفواتير رسمية للجهات والشركات</p>
      </div>
    </section>
  );
}
