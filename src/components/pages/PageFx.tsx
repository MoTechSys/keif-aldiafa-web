"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * PageFx — سلوك PAGE_JS من النموذج v6.9 للصفحات الداخلية:
 *  1) إبراز الهدف (.hit) عند الوصول برابط #id.
 *  2) شريط .chips اللاصق: تفعيل الرابط حسب القسم الظاهر (IntersectionObserver).
 * يُعاد الربط عند تغيّر المسار. لا يقرأ التخطيط في كل إطار.
 */
export default function PageFx() {
  const pathname = usePathname();
  useEffect(() => {
    const hit = () => {
      const id = decodeURIComponent(location.hash.slice(1)); if (!id) return;
      const el = document.getElementById(id); if (!el) return;
      el.classList.remove("hit"); requestAnimationFrame(() => el.classList.add("hit"));
    };
    addEventListener("hashchange", hit); const t = setTimeout(hit, 150);

    const chips = Array.from(document.querySelectorAll<HTMLAnchorElement>(".chips a"));
    let io: IntersectionObserver | null = null;
    if (chips.length) {
      const map = new Map(chips.map((a) => [a.getAttribute("href")!.slice(1), a]));
      io = new IntersectionObserver((es) => {
        es.forEach((e) => {
          if (!e.isIntersecting) return;
          chips.forEach((c) => c.classList.remove("on"));
          const c = map.get((e.target as HTMLElement).id);
          if (c) { c.classList.add("on"); c.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" }); }
        });
      }, { rootMargin: "-40% 0px -55% 0px" });
      map.forEach((_, id) => { const s = document.getElementById(id); if (s) io!.observe(s); });
    }
    return () => { removeEventListener("hashchange", hit); clearTimeout(t); io?.disconnect(); };
  }, [pathname]);
  return null;
}
