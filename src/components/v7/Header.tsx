"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { waLink } from "@/lib/site";
import { NAV_LINKS, WA_DEFAULT_MSG } from "./nav";
import { WaIcon } from "./WaIcon";

/**
 * Header — الهيدر النحيف (D29) منقول 1:1 من النموذج prototype-home v6.9:
 * صفّان على الجوال (العلامة + زر واتساب / صف الصفحات القابل للتمرير)،
 * وصف واحد من 900px. لا درج جانبي ولا قائمة — أُزيلت بطلب المالك 2026-09-04.
 * "use client" فقط لأجل usePathname (aria-current) — لا حالة ولا تأثيرات.
 */
export default function Header() {
  const pathname = usePathname() ?? "/";
  const isCurrent = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="v7-header">
      <div className="wrap nav">
        <div className="nav-row">
          <Link className="brand" href="/" title="الرئيسية">
            <Image src="/images/brand/logo-emblem-120.webp" alt="" width={35} height={42} priority />
            <span className="word">
              <b>كيف الضيافة</b>
              <small>KEIF AL-DIAFA</small>
            </span>
          </Link>
          <a className="btn btn-gold btn-sm" href={waLink(WA_DEFAULT_MSG)} target="_blank" rel="noopener" data-ev="wa_header">
            <WaIcon />
            تواصل الآن
          </a>
        </div>
        <nav className="pages" aria-label="صفحات الموقع">
          {NAV_LINKS.map((l) => (
            <Link key={l.href} className="nav-link" href={l.href} aria-current={isCurrent(l.href) ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
