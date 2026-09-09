"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Reveal — حركة الظهور عند التمرير لعناصر `.rv` (CSS في v7.css)، منقولة من
 * النموذج v6.9: IntersectionObserver بهامش 140px وعتبة .04 وتأخير متدرّج (i%4)×50ms.
 * يحترم prefers-reduced-motion (يُظهر كل شيء فوراً — CSS يعطّل الحركة أيضاً).
 * يُعاد الربط عند تغيّر المسار (App Router لا يُعيد تحميل الصفحة).
 */
export default function Reveal() {
  const pathname = usePathname();
  useEffect(() => {
    const rvs = Array.from(document.querySelectorAll<HTMLElement>(".rv"));
    if (!rvs.length) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      rvs.forEach((e) => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px 140px 0px", threshold: 0.04 }
    );
    rvs.forEach((e, i) => { e.style.transitionDelay = `${(i % 4) * 50}ms`; io.observe(e); });
    return () => io.disconnect();
  }, [pathname]);
  return null;
}
