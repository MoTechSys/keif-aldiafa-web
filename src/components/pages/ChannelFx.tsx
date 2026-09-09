"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * ChannelFx — تأثير «الأومنتريكس» على بطاقات القنوات `.ch` (النموذج v6.9 CONTACT_JS):
 * حلقات تتّسع + وميض بلون المنصّة ثم الانتقال بعد 620ms. مكوّن مستقل يُستخدم في
 * /contact و/links (كان مربوطاً داخل ContactForm — دَين D101 أُغلق).
 * يحترم prefers-reduced-motion والنقر بمفاتيح التعديل/الزر الأوسط.
 */
export default function ChannelFx() {
  const pathname = usePathname();
  useEffect(() => {
    const rm = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cards = Array.from(document.querySelectorAll<HTMLAnchorElement>(".ch"));
    const hs = cards.map((a) => {
      const h = (e: MouseEvent) => {
        if (rm || a.classList.contains("fire") || e.metaKey || e.ctrlKey || e.button) return;
        e.preventDefault(); a.classList.add("fire"); document.body.classList.add("ch-flash");
        document.body.style.setProperty("--tint", getComputedStyle(a).getPropertyValue("--tint"));
        setTimeout(() => { if (a.target === "_blank") window.open(a.href, "_blank", "noopener"); else location.href = a.href; }, 620);
        setTimeout(() => { a.classList.remove("fire"); document.body.classList.remove("ch-flash"); }, 1300);
      };
      a.addEventListener("click", h); return [a, h] as const;
    });
    return () => hs.forEach(([a, h]) => a.removeEventListener("click", h));
  }, [pathname]);
  return null;
}
