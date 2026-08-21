"use client";

/**
 * LocalReveal — كشف تدريجي للصفحات الفرعية بـ IntersectionObserver خالص.
 *
 * لماذا لا motion؟ الصفحة محتوى ثابت بالكامل. جرّ ~58KB من JS لتشغيل
 * حركة يؤديها CSS في بضع مئات البايتات خسارة صافية في سرعة الهاتف —
 * و95٪ من الزوّار على الهاتف.
 *
 * يدعم مستويين:
 *   [data-rise]    → ظهور مستوٍ  (.lx-rise   من luxe.css)
 *   [data-rise3d]  → ظهور بعمق   (.ls-rise3d من local.css — دوران محوري)
 *
 * المحتوى موجود كاملاً في HTML الخاص بـ SSR؛ الحالة الابتدائية تُضاف
 * بعد التحميل فقط، فلا Googlebot يرى نصّاً مخفيّاً ولا الزائر يرى وميضاً.
 */

import { useEffect } from "react";

export default function LocalReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const groups: [string, string][] = [
      ["[data-rise]", "lx-rise"],
      ["[data-rise3d]", "ls-rise3d"],
    ];

    const targets: HTMLElement[] = [];
    groups.forEach(([sel, cls]) => {
      document.querySelectorAll<HTMLElement>(sel).forEach((el) => {
        el.classList.add(cls);
        targets.push(el);
      });
    });
    if (!targets.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          // تأخير متتالٍ داخل الصفّ الواحد ⇒ البطاقات تظهر تباعاً لا دفعة
          const sibs = Array.from(el.parentElement?.children ?? []);
          const idx = Math.min(sibs.indexOf(el), 5);
          el.style.transitionDelay = `${idx * 80}ms`;
          el.classList.add("is-in");
          io.unobserve(el);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
