import Image from "next/image";
import Link from "next/link";

import CatalogImg from "@/components/home/CatalogImg";
import HeroPicture from "@/components/home/HeroPicture";
import Strip from "@/components/home/Strip";
import { Em, OfferingTiles, SecHead, SvcCard, UniformFigures } from "@/components/home/shared";
import HeroSlides from "@/components/local/HeroSlides";
import PartnersCompact from "@/components/local/PartnersCompact";
import { WaIcon } from "@/components/v7/WaIcon";
import { SOCIAL_ICONS } from "@/components/v7/socialIcons";
import { SERVICE_GROUPS } from "@/lib/homeContent";
import type { LocalPageRecord } from "@/lib/localPage";
import { PARTNERS, partnerSrc } from "@/lib/partners";
import { PHONE, WHATSAPP_DISPLAY, waLink } from "@/lib/site";

/**
 * LocalPage — قالب الصفحة المحلية (المرحلة 4 — D127) = `master_page()` في النموذج
 * v6.9 بأقسامه الـ14 بالترتيب وبثلاثة أنواع (svc · city · intent):
 *   1 هيرو (مسار + بطاقة + شارات + واتساب) → 2 أعمالنا (8) → 3 شركاء (مضغوط) →
 *   4 الخدمات (محلية ✦ + تكمّل مناسبتك) → 5 كيف نعمل (أدوار) → 6 الطاقم والزي →
 *   7 التقديمات والعدّة → 8 الترتيبات (svc فقط) → 9 لماذا نحن → 10 الأسئلة →
 *   11 التغطية (الأحياء) → 12 احجز → 13 روابط → 14 تابعنا.
 * مكوّن خادم؛ العميل: Strip · HeroSlides · PartnersCompact (+ Lightbox/Reveal من الشِل).
 */

/** «تكمّل مناسبتك» — 6 خدمات من مجموعات الرئيسية (D86: hostesses zamzam safarjia counter heritage-tent buffet) */
const COMPLEMENT = ["hostesses", "zamzam", "safarjia", "counter", "heritage-tent", "buffet"];
const COMPLEMENT_CARDS = COMPLEMENT.map((k) => SERVICE_GROUPS.flatMap((g) => g.items).find((it) => it.href === `/services#${k}`)).filter((x): x is NonNullable<typeof x> => !!x);

function WaBtn({ text, cls, label, ev }: { text: string; cls: string; label: string; ev: string }) {
  return (
    <a className={cls} href={waLink(text)} target="_blank" rel="noopener" data-ev={ev}><WaIcon />{label}</a>
  );
}

export default function LocalPage({ rec }: { rec: LocalPageRecord }) {
  const ar = rec.cityAr; const isCity = rec.kind === "city";
  const roles = rec.roleImgs.length ? rec.roleImgs : rec.shots;
  return (
    <div className="v7">
      {/* 1) الهيرو — الوعد + واتساب + الأرقام؛ فئات العملاء في .pts (D71) */}
      <section className="hero hero-l hero-anim" aria-label={`${rec.serviceAr} في ${ar}`}>
        <div className="bg" aria-hidden="true">
          <HeroPicture mobile={rec.hero} />
          <HeroSlides slides={rec.slides} />
        </div>
        <div className="wrap">
          <nav className="crumb" aria-label="مسار التنقل">
            {rec.crumbs.map((c, i) => (
              <span key={c.href} style={{ display: "contents" }}>
                {i > 0 && <span>›</span>}
                {i === rec.crumbs.length - 1 ? <span>{c.label}</span> : <Link href={c.href}>{c.label}</Link>}
              </span>
            ))}
          </nav>
          <div className="hcard">
            <p className="kicker latin">{rec.cityLatin} · Since 2016</p>
            <p className="brandword">كيف الضيافة</p>
            <div className="rule" aria-hidden="true" />
            <div className="sub-latin latin"><span className="l1">Keif Al-Diafa</span><span className="l2">{rec.cityLatin}</span></div>
            <h1>{rec.h1[0]} <em>{rec.h1[1]}</em></h1>
            <p className="sub">{rec.intro}</p>
            <div className="pts"><span>جهات وفعاليات رسمية</span><span>شركات ومعارض</span><span>أعراس ومناسبات خاصة</span></div>
            <div className="badges-l"><span>+500 مناسبة منذ 2016</span><span>طاقم سعودي مدرّب</span><span>كل أحياء {ar}</span></div>
          </div>
          <div className="cta">
            <WaBtn text={rec.wa} cls="btn btn-gold" label="احجز عبر واتساب" ev="wa_hero" />
            <a className="btn btn-glass" href="#works">أعمالنا</a>
          </div>
          <div className="proof" aria-label="أرقامنا">
            <a href="#works" title="شاهد الأعمال"><b>+500</b>مناسبة نُفّذت</a><i />
            <span><b className="ar">منذ 2016</b>خبرة متواصلة</span>
          </div>
        </div>
      </section>

      {/* 2) أعمالنا — 8 لقطات (لايت بوكس) */}
      <section className="on-black grain" id="works">
        <div className="wrap">
          <SecHead label="أعمالنا" h2={isCity ? <Em a="من أعمالنا في" b={ar} /> : <Em a="من أعمالنا —" b={rec.serviceAr} />} p="لقطات حقيقية من مناسبات نفّذناها. اضغط على أي صورة لتكبيرها والتنقّل بين الباقي." hint />
          <Strip>
            {rec.shots.map((im) => (
              <figure key={im.src} className="shot" data-g={rec.g} data-go="/portfolio" data-go-txt="معرض الأعمال">
                <CatalogImg img={im} sizes="(max-width:899px) 72vw, 260px" sub={im.service} />
                <figcaption><b>{im.title}</b><span>{im.service}</span></figcaption>
              </figure>
            ))}
          </Strip>
          <div className="works-foot rv"><Link className="btn btn-glass" href="/portfolio">معرض الأعمال الكامل</Link></div>
        </div>
      </section>

      {/* 3) شركاء النجاح — مضغوط (D73) */}
      <section className="partners compact" id="partners" data-sim="chrome">
        <div className="wrap">
          <div className="sec-head"><span className="label">شركاء النجاح</span><h2>جهات وشركات وثقت بنا — في {ar} وخارجها</h2></div>
          <div className="logos collapsed" id="plogos" aria-label="شركاء النجاح">
            {PARTNERS.map((p) => (
              <div className="logo" key={p.file}>
                <Image src={partnerSrc(p)} alt={p.alt} width={p.width} height={p.height} sizes="(max-width:899px) 30vw, 180px" loading="lazy" quality={80} />
              </div>
            ))}
          </div>
          <PartnersCompact count={PARTNERS.length} />
        </div>
      </section>

      {/* 4) الخدمات — بطاقات محلية ✦ + تكمّل مناسبتك */}
      <section className="on-deep glow" id="services">
        <div className="wrap">
          <SecHead label="الخدمات" h2={<Em a={`كل ما تحتاجه مناسبتك في ${ar} —`} b="من طاقم واحد" />} p={`قهوجيون وصبّابون ومباشرون، ومعهم كل ما يكمّل الضيافة: سقّاة زمزم، سفرجية، كاونترات وخيام وبوفيهات — طاقم واحد يصل إلى مناسبتك في ${ar} بعدّته كاملة.`} />
          <div className="svcs">
            <h3 className="svc-grp rv">خدماتنا في {ar}</h3>
            {rec.localServices.map((s) => <SvcCard key={s.href} {...s} local />)}
            <h3 className="svc-grp rv">تكمّل مناسبتك</h3>
            {/* وحدة موقع متكررة (D128) — display:contents لا يغيّر الشبكة */}
            <div data-sim="chrome" style={{ display: "contents" }}>
              {COMPLEMENT_CARDS.map((s) => <SvcCard key={s.href} href={s.href} img={s.img} b={s.b} small={s.small} />)}
            </div>
          </div>
          <div className="works-foot rv"><Link className="btn btn-glass" href="/services">كل الخدمات</Link></div>
        </div>
      </section>

      {/* 5) كيف نعمل — الأدوار (D75) */}
      <section className="lsec on-rich roles" id="roles">
        <div className="wrap">
          {isCity
            ? <SecHead label="خدماتنا" h2={<Em a="خدماتنا في" b={`${ar} — عن قرب`} />} p={`ثلاث خدمات محلية بطاقم واحد — اختر ما يناسب مناسبتك في ${ar} أو اجمعها.`} />
            : <SecHead label="كيف نعمل" h2={<Em a="ماذا يفعل طاقمنا في مناسبتك" b={`في ${ar}؟`} />} p="أدوار واضحة يعرفها أهل الضيافة في السعودية — ونوزّعها على عدد ضيوفك." />}
          {rec.roles.map((r, i) => {
            const im = roles[i % roles.length];
            return (
              <div key={r.h2} className={`split${i % 2 ? " rev" : ""}`}>
                <div className="rv">
                  <span className="kick">{r.kick}</span>
                  <h2>{r.h2}</h2>
                  <p>{r.p}</p>
                  {r.href && <Link className="btn btn-glass btn-sm" href={r.href}>{r.linkLabel}</Link>}
                </div>
                <figure className="rv" data-g={rec.g}>
                  <CatalogImg img={im} sizes="(max-width:899px) 92vw, 560px" sub={im.service} />
                  <span className="zoom" aria-hidden="true">⤢</span>
                </figure>
              </div>
            );
          })}
          <div className="works-foot rv"><WaBtn text={rec.wa} cls="btn btn-wa" label="اسأل عن التفاصيل" ev="wa_sec" /></div>
        </div>
      </section>

      {/* 6) الطاقم والزي */}
      <section className="on-rich glow" id="staff" data-sim="chrome">
        <div className="wrap">
          <SecHead label="الطاقم والزي" h2={`اختر زيّ طاقمك في ${ar}`} p="قهوجيين وصبابين ومباشرين بزي موحد — وطاقم نسائي للمناسبات النسائية." hint />
          <Strip><UniformFigures /></Strip>
          <div className="works-foot rv"><Link className="btn btn-glass" href="/services#hosts">تفاصيل الزي والطاقم</Link></div>
        </div>
      </section>

      {/* 7) التقديمات والعدّة — 8 مربعات (D75) */}
      <section className="on-black grain" id="offerings" data-sim="chrome">
        <div className="wrap">
          <SecHead label="التقديمات والعدّة" h2={<Em a="ما الذي يصل إلى ضيوفك في" b={`${ar}؟`} />} p="تمور وقهوة وحلويات ومشروبات — والدلال والفناجين وأطقم التقديم تصل مع الطاقم." hint />
          <Strip><OfferingTiles count={8} /></Strip>
          <div className="works-foot rv"><Link className="btn btn-glass" href="/offerings">كل التقديمات والمعدات</Link></div>
        </div>
      </section>

      {/* 8) الترتيبات — svc فقط (D97) */}
      {rec.packages && (
        <section className="lsec on-rich glow" id="packages">
          <div className="wrap">
            <SecHead label="الترتيبات" h2={<Em a={`كيف نرتّب ${rec.serviceAr} لمناسبتك في`} b={ar} />} p="ثلاثة أشكال شائعة — والتشكيل يُحسب على عدد ضيوفك وشكل المكان." />
            <div className="pk">
              {rec.packages.map((p) => (
                <article key={p.name} className="rv">
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <ul className="feats">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
                  <WaBtn text={`السلام عليكم، أرغب بالاستفسار عن «${p.name}» في ${ar}:\nالتاريخ: \nالمكان: \nعدد الضيوف: `} cls="btn btn-gold btn-sm" label="اطلب هذا الترتيب" ev="wa_pk" />
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9) لماذا نحن */}
      <section className="lsec on-deep" id="why">
        <div className="wrap">
          <SecHead label="لماذا نحن" h2={<Em a="لماذا يختارنا أهل" b={`${ar}؟`} />} />
          <ul className="why">{rec.why.map((w) => <li key={w} className="rv">{w}</li>)}</ul>
          <div className="works-foot rv"><Link className="btn btn-glass" href="/about">تعرّف علينا أكثر</Link></div>
        </div>
      </section>

      {/* 10) الأسئلة */}
      <section className="on-deep" id="faq">
        <div className="wrap">
          <SecHead label="أسئلة شائعة" h2={isCity ? `أسئلة شائعة عن الضيافة في ${ar}` : `أسئلة شائعة عن ${rec.serviceAr} في ${ar}`} />
          <div className="faqs">
            {rec.faqs.map((f, i) => (
              <details key={f.q} className="rv" open={i === 0}><summary>{f.q}</summary><p>{f.a}</p></details>
            ))}
          </div>
        </div>
      </section>

      {/* 11) التغطية */}
      <section className="lsec on-deep" id="districts">
        <div className="wrap">
          <SecHead label="التغطية" h2={`نصل إلى كل أحياء ${ar}`} />
          <div className="dist rv">{rec.districts.map((d) => <span key={d}>{d}</span>)}</div>
        </div>
      </section>

      {/* 12) احجز */}
      <section className="on-black grain glow contact" id="contact" data-sim="chrome">
        <div className="wrap">
          <span className="label rv">تواصل</span>
          <h2 className="rv">{isCity ? <Em a="مناسبتك في" b={ar} /> : <Em a={`احجز ${rec.serviceAr}`} b={`في ${ar}`} />}</h2>
          <p className="rv">أرسل التاريخ والمكان وعدد الضيوف — ونرتّب لك الطاقم والعدّة كاملة.</p>
          <div className="actions rv">
            <WaBtn text={rec.wa} cls="btn btn-wa" label="تواصل عبر واتساب" ev="wa_contact" />
            <Link className="btn btn-glass" href="/contact">نموذج طلب عرض</Link>
          </div>
          <p className="tel rv">واتساب واتصال: <a href={`tel:${PHONE}`}>{WHATSAPP_DISPLAY}</a></p>
          <p className="assure rv">عروض أسعار وعقود وفواتير رسمية للجهات والشركات</p>
        </div>
      </section>

      {/* 13) روابط */}
      <section className="lsec on-rich" id="rel">
        <div className="wrap">
          <SecHead label="روابط" h2={<Em a={rec.related.h2[0]} b={rec.related.h2[1]} />} />
          <div className="lnk rv">{rec.related.links.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}</div>
        </div>
      </section>

      {/* 14) تابعنا */}
      <section className="lsec on-black grain" id="follow" data-sim="chrome">
        <div className="wrap">
          <SecHead label="تابعنا" h2={<Em a="شاهد مناسباتنا" b="لحظة بلحظة" />} p="صور وفيديوهات من قلب المناسبات على حساباتنا." />
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
    </div>
  );
}
