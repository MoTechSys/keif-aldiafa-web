"use client";

/**
 * LuxeReveal — كشف تدريجي بـ IntersectionObserver خالص (بدون مكتبة motion).
 *
 * سبب عدم استخدام motion هنا: صفحة المحتوى ثابتة بالكامل، وإضافة motion
 * لكل قسم كانت تجرّ ~58KB JS لتشغيل حركة يمكن أن يؤديها CSS. هذا المكوّن
 * لا يضيف سوى بضع مئات البايتات ويشتغل على العنصر الأب مرة واحدة.
 *
 * المحتوى يبقى موجوداً في HTML الخاص بـ SSR (لا opacity:0 من السيرفر عبر JS)
 * — الطبقة تُضاف بعد التحميل فقط، فلا يتأثر Googlebot ولا يظهر وميض.
 */

import { useEffect } from "react";

export default function LuxeReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-rise]")
    );
    if (!targets.length) return;

    // إضافة الحالة الابتدائية بعد التحميل فقط (تفادي الوميض قبل الترطيب)
    targets.forEach((el) => el.classList.add("lx-rise"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          const sibs = Array.from(el.parentElement?.children ?? []);
          const idx = Math.min(sibs.indexOf(el), 5);
          el.style.transitionDelay = `${idx * 70}ms`;
          el.classList.add("is-in");
          io.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
