"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { CatalogImage } from "@/lib/imageCatalog";

/**
 * HeroSlides — خلفية الهيرو المتغيّرة في الصفحات المحلية (النموذج D84):
 * شرائح تتبدّل فوق صورة الهيرو بتلاشٍ + تقريب بطيء (Ken Burns)، تبدأ بعد أول
 * خمول (لا تنافس LCP) وتتوقف حين يخرج الهيرو من الشاشة أو مع reduced-motion.
 * الصور من الكتالوج؛ alt="" لأنها زخرفية (الهيرو الأساسي يحمل alt الكتالوج).
 */
export default function HeroSlides({ slides }: { slides: CatalogImage[] }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const box = ref.current; const hero = box?.closest<HTMLElement>(".hero-anim");
    if (!box || !hero || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const sl = Array.from(box.querySelectorAll("img"));
    if (!sl.length) return;
    let i = -1, vis = true, t: number | null = null, cancelled = false;
    const step = () => { if (!vis) return; if (i >= 0) sl[i].classList.remove("on"); i = (i + 1) % sl.length; sl[i].classList.add("on"); hero.classList.add("away"); };
    const loop = () => { step(); t = window.setTimeout(loop, 7000); };
    const start = () => { if (cancelled) return; sl.forEach((im) => { im.loading = "eager"; }); t = window.setTimeout(loop, 2600); };
    const hasIdle = typeof window.requestIdleCallback === "function";
    const idle = hasIdle ? window.requestIdleCallback(start, { timeout: 2500 }) : window.setTimeout(start, 1200);
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      vis = e.isIntersecting;
      if (vis && t === null && i >= 0) loop();
      if (!vis && t !== null) { clearTimeout(t); t = null; }
    }), { threshold: 0.05 });
    io.observe(hero);
    return () => { cancelled = true; if (hasIdle) window.cancelIdleCallback(idle); else clearTimeout(idle); if (t !== null) clearTimeout(t); io.disconnect(); };
  }, []);
  if (!slides.length) return null;
  return (
    <div className="slides" ref={ref}>
      {slides.map((s) => (
        <Image key={s.src} className="slide" src={s.src} alt="" width={s.width} height={s.height} sizes="100vw" quality={60} loading="lazy" />
      ))}
    </div>
  );
}
