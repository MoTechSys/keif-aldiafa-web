"use client";

import { useEffect, useRef } from "react";
import { waLink } from "@/lib/site";
import { WA_DEFAULT_MSG } from "./nav";
import { WaIcon } from "./WaIcon";

/**
 * WhatsAppFab — واتساب طافٍ: الإجراء الوحيد (D29)، منقول من النموذج v6.9.
 * يختفي حين يكون الهيرو (.hero — فيه زر واتساب) أو قسم التواصل (#contact)
 * ظاهراً في الشاشة — نفس عتبات النموذج (.15 / .2). عنصر واحد في الموقع كله.
 */
export default function WhatsAppFab() {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const fab = ref.current;
    if (!fab || !("IntersectionObserver" in window)) return;
    const vis = { hero: false, contact: false };
    const apply = () => fab.classList.toggle("hide", vis.hero || vis.contact);
    const observers: IntersectionObserver[] = [];
    const watch = (el: Element | null, key: keyof typeof vis, threshold: number) => {
      if (!el) return;
      const io = new IntersectionObserver(
        (es) => es.forEach((e) => { vis[key] = e.isIntersecting; apply(); }),
        { threshold }
      );
      io.observe(el);
      observers.push(io);
    };
    watch(document.querySelector(".hero"), "hero", 0.15);
    watch(document.querySelector("#contact"), "contact", 0.2);
    apply();
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <a ref={ref} className="fab" id="fab" data-ev="wa_fab" href={waLink(WA_DEFAULT_MSG)} target="_blank" rel="noopener" aria-label="تواصل واتساب">
      <WaIcon />
      <span>واتساب</span>
    </a>
  );
}
