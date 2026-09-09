"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Strip — شريط أفقي بحلقة لا نهائية بطيئة + سحب بالماوس/الإصبع، منقول من
 * النموذج v6.9 §2 (D79/D92): تُستنسخ العناصر مرة قبل الأصل ومرة بعده
 * (data-clone + aria-hidden) فيصبح الشريط دائرة في الاتجاهين، ثم يتحرك
 * 22px/ث ويُعاد ضبطه بلا قفزة. يتوقف عند: hover بالماوس · لمس · خروج
 * الشريط من الشاشة · إخفاء التبويب · prefers-reduced-motion.
 * فرقان أداء عن النموذج (D124): البدء بعد أول خمول، وبلا قراءة تخطيط في كل إطار.
 * الأطفال يُرسَمون على الخادم (SEO + LCP)؛ هذا المكوّن يضيف السلوك فقط.
 */
export default function Strip({ children, id }: { children: ReactNode; id?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const kids = Array.from(el.children).filter((k) => !k.classList.contains("edge") && !(k as HTMLElement).dataset.clone) as HTMLElement[];
    if (kids.length < 3) return;
    const edge = el.querySelector<HTMLElement>(":scope > .edge");
    const rtl = getComputedStyle(el).direction === "rtl";
    const cleanups: (() => void)[] = [];
    let cancelled = false;

    // أداء (يختلف عن النموذج): الاستنساخ والحلقة يبدآن بعد أول خمول (لا يزاحمان
    // الترطيب وLCP)، وحلقة rAF لا تقرأ التخطيط (offsetLeft/scrollLeft) كل إطار —
    // عرض الدورة يُحسب مرة ويُعاد عند تغيّر المقاس، وموضع المستخدم يُلتقط من حدث scroll.
    const init = () => {
      if (cancelled) return;
      const clone = (k: HTMLElement) => {
        const c = k.cloneNode(true) as HTMLElement;
        c.dataset.clone = "1";
        c.setAttribute("aria-hidden", "true");
        c.querySelectorAll("img").forEach((i) => { i.setAttribute("loading", "lazy"); i.setAttribute("decoding", "async"); i.removeAttribute("fetchpriority"); });
        c.querySelectorAll("[id]").forEach((n) => n.removeAttribute("id"));
        // النسخة مخفية عن القارئ فيجب ألا تكون قابلة للتركيز — تشمل الـ figure نفسها
        // (Lightbox قد أضاف لها tabindex=0 قبل الاستنساخ) والروابط داخلها
        if (c.hasAttribute("tabindex") || c.matches("a")) c.setAttribute("tabindex", "-1");
        c.querySelectorAll("a,[tabindex]").forEach((n) => n.setAttribute("tabindex", "-1"));
        return c;
      };
      const before = kids.map(clone);
      const after = kids.map(clone);
      before.forEach((c) => el.insertBefore(c, kids[0]));
      after.forEach((c) => el.insertBefore(c, edge));
      el.classList.add("auto");

      const pos = () => Math.abs(el.scrollLeft);
      const setPos = (v: number) => { el.scrollLeft = rtl ? -v : v; };
      let w = 0, x = 0;
      const measure = () => { w = Math.abs(kids[0].offsetLeft - (el.firstElementChild as HTMLElement).offsetLeft); };
      const home = () => { measure(); if (w) { x = w; setPos(x); } };
      home();
      const ro = "ResizeObserver" in window ? new ResizeObserver(() => { const before = w; measure(); if (before && w && before !== w) { x = (x / before) * w; setPos(Math.round(x)); } }) : null;
      ro?.observe(el);

      let paused = reduce, seen = true, hold = 0, last = 0, dragging = false, syncing = false;
      const norm = () => { if (!w) return; if (x >= w * 1.5) x -= w; else if (x < w * 0.5) x += w; };
      let raf = 0;
      const tick = (t: number) => {
        if (!paused && seen && !dragging && !document.hidden && t - hold > 0 && w) {
          const dt = Math.min(48, t - (last || t));
          x += dt * 0.022; norm(); syncing = true; setPos(Math.round(x));
        }
        last = t; raf = requestAnimationFrame(tick);
      };
      if (!reduce) raf = requestAnimationFrame(tick);
      const rest = (ms: number) => { hold = performance.now() + ms; };

      const enter = (e: PointerEvent) => { if (e.pointerType === "mouse") paused = true; };
      const leave = () => { paused = false; rest(600); };
      const ts = () => { paused = true; };
      const te = () => { paused = false; rest(2600); };
      // تمرير المستخدم (لا تمريرنا): التقط الموضع وأعد الضبط إن تجاوز الدورة
      const sc = () => { if (syncing) { syncing = false; return; } x = pos(); const b = x; norm(); if (b !== x) setPos(Math.round(x)); };
      el.addEventListener("pointerenter", enter);
      el.addEventListener("pointerleave", leave);
      el.addEventListener("touchstart", ts, { passive: true });
      el.addEventListener("touchend", te, { passive: true });
      el.addEventListener("scroll", sc, { passive: true });
      const io = "IntersectionObserver" in window
        ? new IntersectionObserver((es) => es.forEach((e) => { seen = e.isIntersecting; }), { threshold: 0.05 })
        : null;
      io?.observe(el);

      // سحب بالماوس على الحاسوب
      let sx = 0, sp = 0;
      const down = (e: PointerEvent) => { if (e.pointerType !== "mouse" || e.button !== 0) return; dragging = true; sx = e.clientX; sp = pos(); el.classList.add("drag"); };
      const move = (e: PointerEvent) => { if (!dragging) return; setPos(sp + (rtl ? sx - e.clientX : e.clientX - sx)); };
      const end = () => { if (!dragging) return; dragging = false; el.classList.remove("drag"); rest(1800); };
      el.addEventListener("pointerdown", down);
      el.addEventListener("pointermove", move);
      el.addEventListener("pointerup", end);
      el.addEventListener("pointercancel", end);
      window.addEventListener("pointerup", end);

      cleanups.push(() => {
        cancelAnimationFrame(raf);
        window.removeEventListener("pointerup", end);
        io?.disconnect(); ro?.disconnect();
        el.removeEventListener("pointerenter", enter); el.removeEventListener("pointerleave", leave);
        el.removeEventListener("touchstart", ts); el.removeEventListener("touchend", te);
        el.removeEventListener("scroll", sc);
        el.removeEventListener("pointerdown", down); el.removeEventListener("pointermove", move);
        el.removeEventListener("pointerup", end); el.removeEventListener("pointercancel", end);
        [...before, ...after].forEach((c) => c.remove());
        el.classList.remove("auto", "drag");
      });
    };

    const hasIdle = typeof window.requestIdleCallback === "function";
    const idle = hasIdle ? window.requestIdleCallback(init, { timeout: 2500 }) : window.setTimeout(init, 1200);
    return () => {
      cancelled = true;
      if (hasIdle) window.cancelIdleCallback(idle); else clearTimeout(idle);
      cleanups.forEach((f) => f());
    };
  }, []);

  return (
    <div className="strip rv" id={id} ref={ref}>
      {children}
      <span className="edge" aria-hidden="true" />
    </div>
  );
}
