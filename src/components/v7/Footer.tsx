import Link from "next/link";
import Image from "next/image";
import { CITIES } from "@/lib/cities";
import { waLink, PHONE, WHATSAPP_DISPLAY, LEGAL_NAME, UNIFIED_NUMBER } from "@/lib/site";
import { FOOTER_LINKS } from "./nav";
import { SOCIAL_ICONS } from "./socialIcons";
import { WaIcon } from "./WaIcon";

/**
 * Footer — فوتر مُهيكل (D94) منقول 1:1 من النموذج v6.9:
 * العلامة+تواصل / الخدمات / المدن → صف أقسام الموقع (doormat) → التوثيق والحقوق.
 * مكوّن خادم صرف (لا JS). النصوص حرفية من النموذج؛ الأرقام المسموحة فقط
 * (+500 · منذ 2016 · الرقم الموحّد) — PLAN قاعدة 2.
 * روابط الخدمات: مراسي /services#<id> بنفس معرّفات data.py (تُبنى في المرحلة 5).
 * روابط المدن: slugs العربية القائمة في Next (قاعدة 5: لا تغيير slug).
 */
const SERVICE_LINKS: readonly { hash: string; label: string }[] = [
  { hash: "hosts", label: "قهوجيين وصبابين ومباشرين" },
  { hash: "hostesses", label: "صبابات ومباشرات" },
  { hash: "zamzam", label: "سقّاء زمزم" },
  { hash: "safarjia", label: "سفرجية ومقدمي طعام" },
  { hash: "counter", label: "كاونترات واستقبال" },
  { hash: "buffet", label: "بوفيه متكامل" },
  { hash: "heritage-tent", label: "خيمة تراثية" },
];

const BADGES: readonly { src: string; alt: string; w: number; h: number }[] = [
  { src: "/images/badges/commerce-crop.svg", alt: "وزارة التجارة", w: 771, h: 294 },
  { src: "/images/badges/zatca-crop.svg", alt: "هيئة الزكاة والضريبة والجمارك", w: 833, h: 581 },
  { src: "/images/badges/sbc-crop.svg", alt: "المركز السعودي للأعمال", w: 748, h: 206 },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="v7-footer">
      <div className="wrap">
        <div className="fgrid">
          <div className="fbrand">
            <div className="brand-f">
              <Image src="/images/brand/logo-emblem-120.webp" alt="" width={37} height={44} />
              <b>كيف الضيافة</b>
            </div>
            <p className="fdesc">
              قهوجيون وصبّابون ومباشرون وطاقم ضيافة متكامل بزيّ موحّد — قاعدتنا جدة ونصل إلى ثماني مدن بعدّتنا كاملة. +500 مناسبة منذ 2016.
            </p>
            <a
              className="btn btn-wa btn-sm"
              href={waLink("السلام عليكم، أرغب بالاستفسار عن خدمات كيف الضيافة")}
              target="_blank"
              rel="noopener"
              data-ev="wa_footer"
            >
              <WaIcon />
              واتساب {WHATSAPP_DISPLAY}
            </a>
            <a className="ftel" href={`tel:${PHONE}`}>
              اتصال: <span>{WHATSAPP_DISPLAY}</span>
            </a>
            <div className="fsoc" aria-label="حساباتنا">
              {SOCIAL_ICONS.map((s) => (
                <a key={s.key} className={`s-${s.key}`} href={s.href} target="_blank" rel="noopener" data-ev={`f_${s.key}`} aria-label={s.label}>
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d={s.d} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <nav className="fcol" aria-labelledby="fh-svc">
            <h3 id="fh-svc">الخدمات</h3>
            <ul>
              {SERVICE_LINKS.map((s) => (
                <li key={s.hash}>
                  <Link href={`/services#${s.hash}`}>{s.label}</Link>
                </li>
              ))}
              <li>
                <Link className="all" href="/services">كل الخدمات ›</Link>
              </li>
            </ul>
          </nav>

          <nav className="fcol" aria-labelledby="fh-city">
            <h3 id="fh-city">نخدم في</h3>
            <ul>
              {CITIES.map((c) => (
                <li key={c.slug}>
                  <Link href={`/locations/${c.slug}`}>{c.name}</Link>
                </li>
              ))}
              <li>
                <Link className="all" href="/locations">كل المدن ›</Link>
              </li>
            </ul>
          </nav>
        </div>

        <nav className="links" aria-label="أقسام الموقع">
          {FOOTER_LINKS.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </nav>

        <div className="trust">
          <span className="trust-lbl">شهادات التوثيق والاعتماد</span>
          <div className="badges" aria-label="التسجيلات الرسمية">
            {BADGES.map((b) => (
              <Image key={b.src} src={b.src} alt={b.alt} width={b.w} height={b.h} loading="lazy" />
            ))}
          </div>
          <p className="legal">
            <b>{LEGAL_NAME}</b>الرقم الوطني الموحّد: <span>{UNIFIED_NUMBER}</span>
          </p>
        </div>

        <div className="bottom">
          <p>
            © {year} كيف الضيافة. جميع الحقوق محفوظة. · <Link href="/legal">الحقوق القانونية</Link>
          </p>
          <p className="dev">
            Developed by <b>Alabbasi Soft</b>
          </p>
          <p className="tag">KEIF AL-DIAFA · LUXURY HOSPITALITY · KSA</p>
        </div>
      </div>
    </footer>
  );
}
