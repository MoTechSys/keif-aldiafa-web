"use client";

import { useEffect, useRef } from "react";

/**
 * HeroVideo — فيديو خلفية الهيرو من النموذج v6.9 §4: preload=none، يُحمَّل
 * بعد أول رسم (requestIdleCallback ≤1.5s) ويعمل فقط حين يكون ظاهراً؛ يتلاشى
 * فوق صورة الهيرو عند أول تشغيل (.ready). لا يعمل مع prefers-reduced-motion.
 */
export default function HeroVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const hv = ref.current;
    if (!hv || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const start = () => {
      hv.preload = "auto"; hv.load();
      hv.play().then(() => hv.classList.add("ready")).catch(() => {});
    };
    // D143: يبدأ التحميل بعد حدث load (لا قبل اكتمال الصورة/الخطوط/JS) ثم أول خمول —
    // كان requestIdleCallback مباشرةً فتنافس الفيديو (240KB) الموارد الحرجة على الجوال.
    const hasIdle = typeof window.requestIdleCallback === "function";
    let t = 0; let loaded = false;
    const arm = () => { loaded = true; t = hasIdle ? window.requestIdleCallback(start, { timeout: 1500 }) : window.setTimeout(start, 300); };
    if (document.readyState === "complete") arm(); else addEventListener("load", arm, { once: true });
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) hv.play().catch(() => {}); else hv.pause(); }),
      { threshold: 0.1 }
    );
    io.observe(hv);
    return () => { io.disconnect(); removeEventListener("load", arm); if (loaded) { if (hasIdle) window.cancelIdleCallback(t); else clearTimeout(t); } };
  }, []);
  return (
    <video id="heroVid" ref={ref} muted loop playsInline preload="none" aria-hidden="true" tabIndex={-1}>
      <source src={src} type="video/mp4" />
    </video>
  );
}
