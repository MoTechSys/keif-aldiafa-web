import Link from "next/link";
import Image from "next/image";

import CatalogImg from "@/components/home/CatalogImg";
import HeroPicture from "@/components/home/HeroPicture";
import HeroVideo from "@/components/home/HeroVideo";
import PartnersMore from "@/components/home/PartnersMore";
import Strip from "@/components/home/Strip";
import { WaIcon } from "@/components/v7/WaIcon";
import { WA_DEFAULT_MSG } from "@/components/v7/nav";
import { SOCIAL_ICONS } from "@/components/v7/socialIcons";
import { CITIES } from "@/lib/cities";
import {
  CONTACT_WA, FAQS, HERO, OFFERINGS, PACKAGES, ROLES, ROLES_WA, SERVICE_GROUPS, UNIFORMS, WHO, WHY, WORKS, packageWa,
} from "@/lib/homeContent";
import { PARTNERS, partnerSrc } from "@/lib/partners";
import { PHONE, WHATSAPP_DISPLAY, waLink } from "@/lib/site";

/**
 * HomePage — جسم الصفحة الرئيسية = أقسام النموذج prototype-home v6.9 بالترتيب
 * (D115): هيرو → لمن نخدم → أعمالنا → شركاء النجاح → الطاقم والزي → التقديمات
 * → الخدمات → الأدوار → الترتيبات → لماذا نحن → المدن → الأسئلة → تابعنا → تواصل.
 * مكوّن خادم؛ "use client" فقط في Strip/HeroVideo/PartnersMore (+ Lightbox/Reveal
 * من الشِل). الصور من الكتالوج عبر CatalogImg (D111/CH9)، الشعارات من partners.ts.
 */

const HINT = (
  <span className="hint rv">
    اسحب لليسار
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M19 12H5m7-7-7 7 7 7" />
    </svg>
  </span>
);

/** ترتيب المدن كما في النموذج — جدة أولاً (main) */
const CITY_ORDER = ["جدة", "مكة-المكرمة", "المدينة-المنورة", "الرياض", "الطائف", "الدمام", "أبها", "ينبع"];
const HOME_CITIES = CITY_ORDER.map((slug) => CITIES.find((c) => c.slug === slug)).filter((c): c is NonNullable<typeof c> => !!c);

function Hero() {
  return (
    <section className="hero" aria-label="الشاشة الرئيسية">
      <div className="bg" aria-hidden="true">
        <HeroPicture mobile={HERO.mobile} desktop={HERO.desktop} />
        <HeroVideo src={HERO.video} />
      </div>
      <div className="lx-particle" style={{ left: "15%", top: "20%", ["--d" as string]: "4s" }} aria-hidden="true" />
      <div className="lx-particle" style={{ left: "45%", top: "70%", ["--d" as string]: "6s" }} aria-hidden="true" />
      <div className="lx-particle" style={{ left: "75%", top: "45%", ["--d" as string]: "8s" }} aria-hidden="true" />
      <div className="wrap">
        <div className="hcard">
          <p className="kicker latin">{HERO.kicker}</p>
          <p className="brandword">{HERO.brand}</p>
          <div className="rule" aria-hidden="true" />
          <div className="sub-latin latin"><span className="l1">{HERO.latin1}</span><span className="l2">{HERO.latin2}</span></div>
          <h1>{HERO.h1}</h1>
          <p className="sub">{HERO.sub}</p>
          <div className="pts">{HERO.pts.map((p) => <span key={p}>{p}</span>)}</div>
        </div>
        <div className="cta">
          <a className="btn btn-gold" href="#works">شاهد أعمالنا</a>
          <a className="btn btn-glass" href={waLink(WA_DEFAULT_MSG)} target="_blank" rel="noopener">
            <WaIcon />
            تواصل عبر واتساب
          </a>
        </div>
        <div className="proof" aria-label="أرقامنا">
          <a href="#works" title="شاهد الأعمال"><b>+500</b>مناسبة نُفّذت</a><i />
          <span><b className="ar">منذ 2016</b>خبرة متواصلة</span>
        </div>
      </div>
    </section>
  );
}

function Who() {
  return (
    <section className="on-deep glow" id="who" style={{ paddingBlock: 40 }}>
      <div className="wrap">
        <div className="sec-head" style={{ marginBottom: 16 }}>
          <span className="label rv">لمن نخدم</span>
          <h2 className="rv">طاقم واحد مدرّب — وزيّ وتقديم بحسب طابع مناسبتك</h2>
        </div>
        <div className="who-grid">
          {WHO.map((w) => (
            <Link key={w.href} className="who rv" href={w.href}>
              <CatalogImg img={w.img} sizes="(max-width:899px) 31vw, 380px" />
              <div><b>{w.b}</b><small>{w.small}</small></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Works() {
  return (
    <section className="on-black grain" id="works">
      <div className="wrap">
        <div className="sec-head">
          <span className="label rv">أعمالنا</span>
          <h2 className="rv">صور من مناسبات نفّذناها</h2>
          <p className="rv">اضغط على أي صورة لتكبيرها والتنقّل بين الباقي.</p>
          {HINT}
        </div>
        <Strip id="shots">
          {WORKS.map((w) => (
            <figure key={w.img.src} className="shot" data-g="works" data-go={w.go} data-go-txt={w.goTxt}>
              <CatalogImg img={w.img} sizes="(max-width:899px) 72vw, 260px" sub={w.img.service} />
              <span className="tag">{w.tag}</span>
              <figcaption><b>{w.img.title}</b><span>{w.img.service}</span></figcaption>
            </figure>
          ))}
        </Strip>
        <div className="works-foot rv"><Link className="btn btn-glass" href="/portfolio">معرض الأعمال الكامل</Link></div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="partners" id="partners">
      <div className="wrap">
        <div className="sec-head">
          <span className="label rv">شركاء النجاح</span>
          <h2 className="rv">جهات وشركات وثقت بنا</h2>
        </div>
        <p className="kinds rv">جهات حكومية · جامعات · منتديات ومؤتمرات دولية · شركات ومجموعات</p>
        <div className="logos rv collapsed" id="logos" aria-label="شركاء النجاح">
          {PARTNERS.map((p) => (
            <div className="logo" key={p.file}>
              <Image src={partnerSrc(p)} alt={p.alt} width={p.width} height={p.height} sizes="(max-width:899px) 30vw, 180px" loading="lazy" quality={80} />
            </div>
          ))}
          <div className="logo more"><div><b>+500</b><small>مناسبة منذ 2016</small></div></div>
        </div>
        <PartnersMore count={PARTNERS.length} />
      </div>
    </section>
  );
}

function Staff() {
  return (
    <section className="on-rich glow" id="staff">
      <div className="wrap">
        <div className="sec-head">
          <span className="label rv">الطاقم والزي</span>
          <h2 className="rv">اختر زيّ طاقمك</h2>
          <p className="rv">قهوجيين وصبابين ومباشرين بزي موحد — وطاقم نسائي للمناسبات النسائية.</p>
          {HINT}
        </div>
        <Strip>
          {UNIFORMS.map((u) => (
            <figure key={u.img.src} className="uni" data-g="uni" data-go={u.go} data-go-txt="تفاصيل الزي والطاقم">
              <CatalogImg img={u.img} sizes="(max-width:899px) 46vw, 210px" cap={u.b} sub={u.sub} />
              <b>{u.b}</b>
            </figure>
          ))}
        </Strip>
        <div className="works-foot rv"><Link className="btn btn-glass" href="/services#hosts">كل الأزياء والطاقم</Link></div>
      </div>
    </section>
  );
}

function Offerings() {
  return (
    <section className="on-deep" id="offerings">
      <div className="wrap">
        <div className="sec-head">
          <span className="label rv">التقديمات والمعدات</span>
          <h2 className="rv">ما الذي يصل إلى ضيوفك؟</h2>
          {HINT}
        </div>
        <Strip>
          {OFFERINGS.map((o) => (
            <figure key={o.img.src + o.b} className="tile" data-g="off" data-go={o.go} data-go-txt="صفحة التقديمات">
              <CatalogImg img={o.img} sizes="(max-width:899px) 42vw, 200px" cap={o.b} />
              <span>{o.b}</span>
            </figure>
          ))}
        </Strip>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="on-rich glow" id="services">
      <div className="wrap">
        <div className="sec-head">
          <span className="label rv">الخدمات</span>
          <h2 className="rv">كل ما تحتاجه مناسبتك — من طاقم واحد</h2>
          <p className="rv">طاقم مدرّب، وتجهيز المكان، ولمسات فنية تكمّل الضيافة.</p>
        </div>
        <div className="svcs">
          {SERVICE_GROUPS.map((g) => (
            <SvcGroup key={g.title} title={g.title} items={g.items} />
          ))}
        </div>
        <div className="works-foot rv"><Link className="btn btn-glass" href="/services">تفاصيل كل الخدمات</Link></div>
      </div>
    </section>
  );
}

function SvcGroup({ title, items }: { title: string; items: (typeof SERVICE_GROUPS)[number]["items"] }) {
  return (
    <>
      <h3 className="svc-grp rv">{title}</h3>
      {items.map((s) => (
        // <a> عادي (لا Link): Lightbox يفتح الصورة ويمنع التنقّل — كما في النموذج
        <a key={s.href + s.b} className="svc rv" href={s.href} data-g="svc" data-go-txt="صفحة الخدمة">
          <CatalogImg img={s.img} sizes="(max-width:899px) 48vw, 370px" cap={s.b} sub={s.small} />
          <div><b>{s.b}</b><small>{s.small}</small></div>
        </a>
      ))}
    </>
  );
}

function Roles() {
  return (
    <section className="on-deep roles" id="roles">
      <div className="wrap">
        <div className="sec-head">
          <span className="label rv">كيف نعمل</span>
          <h2 className="rv">ماذا يفعل طاقمنا في مناسبتك؟</h2>
          <p className="rv">ثلاثة أدوار يعرفها أهل الضيافة في السعودية — ونوزّعها على عدد ضيوفك وشكل المكان.</p>
        </div>
        {ROLES.map((r) => (
          <div key={r.h} className={`split${r.rev ? " rev" : ""}`}>
            <div className="rv"><span className="kick">الأدوار</span><h2>{r.h}</h2><p>{r.p}</p></div>
            <figure className="rv" data-g="home-roles" data-go="/services#hosts" data-go-txt="تفاصيل الطاقم">
              <CatalogImg img={r.img} sizes="(max-width:899px) 92vw, 560px" sub={r.img.service} />
              <span className="zoom" aria-hidden="true">⤢</span>
            </figure>
          </div>
        ))}
        <div className="works-foot rv">
          <a className="btn btn-wa" href={waLink(ROLES_WA)} target="_blank" rel="noopener" data-ev="wa_roles"><WaIcon />اسأل عن التفاصيل</a>
        </div>
      </div>
    </section>
  );
}

function Packages() {
  return (
    <section className="on-rich glow" id="packages">
      <div className="wrap">
        <div className="sec-head">
          <span className="label rv">الترتيبات</span>
          <h2 className="rv">كيف نرتّب الطاقم لمناسبتك</h2>
          <p className="rv">ثلاثة أشكال شائعة — والتشكيل يُحسب على عدد ضيوفك وشكل المكان.</p>
        </div>
        <div className="pk">
          {PACKAGES.map((p) => (
            <article key={p.h} className="rv">
              <h3>{p.h}</h3>
              <p>{p.p}</p>
              <ul className="feats">{p.feats.map((f) => <li key={f}>{f}</li>)}</ul>
              <a className="btn btn-gold btn-sm" href={waLink(packageWa(p.h))} target="_blank" rel="noopener" data-ev="wa_pk"><WaIcon />اطلب هذا الترتيب</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="on-deep" id="why">
      <div className="wrap">
        <div className="sec-head">
          <span className="label rv">لماذا نحن</span>
          <h2 className="rv">لماذا يختارنا منظّمو الفعاليات؟</h2>
        </div>
        <ul className="why">{WHY.map((w) => <li key={w} className="rv">{w}</li>)}</ul>
        <div className="works-foot rv"><Link className="btn btn-glass" href="/about">تعرّف علينا أكثر</Link></div>
      </div>
    </section>
  );
}

function Cities() {
  return (
    <section className="cities on-black" aria-label="المدن التي نخدمها">
      <div className="wrap rv">
        <span className="lbl">نخدم في:</span>
        {HOME_CITIES.map((c, i) => (
          <Link key={c.slug} className={i === 0 ? "main" : undefined} href={`/locations/${c.slug}`}>{c.name}</Link>
        ))}
        <Link href="/locations">كل المدن ›</Link>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="on-deep" id="faq">
      <div className="wrap">
        <div className="sec-head">
          <span className="label rv">أسئلة شائعة</span>
          <h2 className="rv">ما يسأله عنه مسؤولو المشتريات والفعاليات</h2>
        </div>
        <div className="faqs">
          {FAQS.map((f, i) => (
            <details key={f.q} className="rv" open={i === 0}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Follow() {
  return (
    <section className="on-black grain" id="follow">
      <div className="wrap">
        <div className="sec-head">
          <span className="label rv">تابعنا</span>
          <h2 className="rv">شاهد مناسباتنا <em>لحظة بلحظة</em></h2>
          <p className="rv">صور وفيديوهات من قلب المناسبات على حساباتنا.</p>
        </div>
        <div className="socrow rv">
          {SOCIAL_ICONS.map((s) => (
            <a key={s.key} className={`s-${s.key}`} href={s.href} target="_blank" rel="noopener" data-ev={s.key} aria-label={s.label}>
              <span className="ic"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={s.d} /></svg></span>
              <small>{s.label.split(" — ")[0]}</small>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="on-black grain glow contact" id="contact">
      <div className="wrap">
        <span className="label rv">تواصل</span>
        <h2 className="rv">أرسل تفاصيل مناسبتك <em>ونعود إليك بعرض</em></h2>
        <p className="rv">المدينة · التاريخ · عدد الضيوف — والرسالة مُعدّة مسبقًا في واتساب.</p>
        <div className="actions rv">
          <a className="btn btn-wa" href={waLink(CONTACT_WA)} target="_blank" rel="noopener"><WaIcon />تواصل عبر واتساب</a>
          <a className="btn btn-glass" href={`tel:${PHONE}`}>اتصال مباشر</a>
        </div>
        <p className="tel rv">واتساب واتصال: <a href={`tel:${PHONE}`}>{WHATSAPP_DISPLAY}</a></p>
        <p className="assure rv">عروض أسعار وعقود وفواتير رسمية للجهات والشركات</p>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="v7" id="top">
      <Hero />
      <Who />
      <Works />
      <Partners />
      <Staff />
      <Offerings />
      <Services />
      <Roles />
      <Packages />
      <Why />
      <Cities />
      <Faq />
      <Follow />
      <Contact />
    </div>
  );
}
