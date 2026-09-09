import Image from "next/image";
import Link from "next/link";
import { WaIcon } from "@/components/v7/WaIcon";
import { SOCIAL_ICONS } from "@/components/v7/socialIcons";
import { EMAIL, PHONE, SOCIAL, WHATSAPP_DISPLAY, waLink } from "@/lib/site";

/**
 * ContactChannels — رأس الشعار + بطاقات القنوات (النموذج v6.9 contact_channels · D99/D102):
 * بطاقة لكل قناة بلون منصّتها، أيقونة webp من النموذج، وتأثير «الأومنتريكس» عند الضغط
 * (ChannelFx). حاجز النموذج محفوظ: لا بطاقة بلا رابط حقيقي (https/tel/mailto).
 * الأرقام: لا «4.5★ من 49» — غير مؤكَّد في data/proof.json (D133).
 */
type Ch = { k: string; en: string; ar: string; handle: string; href: string; tint: string; icon: React.ReactNode; ext: boolean };

const TEL = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg>;
const MAIL = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m3.5 7.5 8.5 6 8.5-6" /></svg>;
const MAPS = <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 21.5s-7-6.4-7-11.5a7 7 0 0 1 14 0c0 5.1-7 11.5-7 11.5z" /><circle cx="12" cy="10" r="2.6" /></svg>;
const si = (k: string) => { const d = SOCIAL_ICONS.find((s) => s.key === k)?.d ?? ""; return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={d} /></svg>; };

export function channels(src: "contact" | "links"): Ch[] {
  const wa = waLink(`السلام عليكم، وصلتكم من ${src === "contact" ? "صفحة التواصل" : "صفحة الروابط"}. أرغب بالاستفسار عن خدمات كيف الضيافة لمناسبة.`);
  const list: Ch[] = [
    { k: "whatsapp", en: "WhatsApp", ar: "واتساب", handle: WHATSAPP_DISPLAY, href: wa, tint: "#25D366", icon: <WaIcon />, ext: true },
    { k: "tel", en: "Call", ar: "اتصال مباشر", handle: WHATSAPP_DISPLAY, href: `tel:${PHONE}`, tint: "#E2C68E", icon: TEL, ext: false },
    { k: "instagram", en: "Instagram", ar: "إنستغرام", handle: "@keifaldiafa", href: SOCIAL.instagram, tint: "#E1306C", icon: si("instagram"), ext: true },
    { k: "tiktok", en: "TikTok", ar: "تيك توك", handle: "@keifaldiafa", href: SOCIAL.tiktok, tint: "#69C9D0", icon: si("tiktok"), ext: true },
    { k: "snapchat", en: "Snapchat", ar: "سناب شات", handle: "keifaldiafa", href: SOCIAL.snapchat, tint: "#FFFC00", icon: si("snapchat"), ext: true },
    { k: "x", en: "X", ar: "إكس", handle: "@keifaldiafa", href: SOCIAL.x, tint: "#D9D9D9", icon: si("x"), ext: true },
    { k: "facebook", en: "Facebook", ar: "فيسبوك", handle: "keifaldiafa", href: SOCIAL.facebook, tint: "#1877F2", icon: si("facebook"), ext: true },
    { k: "maps", en: "Google Maps", ar: "خرائط Google", handle: "كيف الضيافة للأفراح والمناسبات", href: SOCIAL.googleMaps, tint: "#34A853", icon: MAPS, ext: true },
    { k: "mail", en: "Email", ar: "البريد", handle: EMAIL, href: `mailto:${EMAIL}`, tint: "#C5A059", icon: MAIL, ext: false },
  ];
  return list.filter((c) => /^(https?:\/\/|tel:|mailto:).+/.test(c.href));
}

export default function ContactChannels({ src = "contact" }: { src?: "contact" | "links" }) {
  const CH = channels(src);
  return (
    <>
      <section className="linkhead grain" aria-label="تواصل معنا">
        <div className="wrap">
          {src === "contact" && <nav className="crumb" aria-label="مسار التنقل"><Link href="/">الرئيسية</Link><span>›</span><span>تواصل</span></nav>}
          <div className="lh-row">
            <div className="emblem" aria-hidden="true">
              <span className="emblem-orbit" /><span className="emblem-orbit o2" />
              <Image src="/images/brand/logo-emblem.webp" alt="" width={225} height={270} priority unoptimized />
            </div>
            <div className="lh-tx">
              <span className="label">تواصل معنا</span>
              <h1>كيف <em>الضيافة</em></h1>
              <p className="tag">قهوجيين · صبّابين · ضيافة فاخرة</p>
            </div>
          </div>
          <p className="sub">اختر القناة الأنسب لك — واتساب هو الأسرع، والاستشارة مجانية بلا التزام.</p>
        </div>
      </section>
      <section className="on-rich" id="channels" aria-label="قنوات التواصل">
        <div className="wrap">
          <nav className="chlist" aria-label="قنوات التواصل مع كيف الضيافة">
            {CH.map((c, i) => (
              <a key={c.k} className={`ch ch-${c.k}`} href={c.href} target={c.ext ? "_blank" : undefined} rel={c.ext ? "noopener" : undefined} data-ev={`c_${c.k}`}
                style={{ ["--tint" as string]: c.tint, ["--i" as string]: i } as React.CSSProperties} aria-label={`${c.ar} — ${c.handle}`}>
                <span className="ch-shine" aria-hidden="true" /><span className="ch-ring" aria-hidden="true" />
                <span className="ch-ic" aria-hidden="true">
                  <span className="ch-dial" />
                  <Image src={`/images/links/icon-${c.k}.webp`} alt="" width={256} height={256} loading={i < 3 ? "eager" : "lazy"} unoptimized />
                </span>
                <span className="ch-tx"><span className="ch-name"><b>{c.en}</b><i>— {c.ar}</i></span><small dir="ltr">{c.handle}</small></span>
                <span className="ch-arrow" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg></span>
              </a>
            ))}
          </nav>
          <p className="chnote rv">نعمل من السبت إلى الخميس، ونستقبل طلبات المناسبات الطارئة على واتساب في أي وقت.</p>
        </div>
      </section>
    </>
  );
}
