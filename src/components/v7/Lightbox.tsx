"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Lightbox — المعرض الموحّد (data-g) منقول من النموذج v6.9.
 *
 * العقد مع الصفحات (بلا استيراد): أي <figure data-g="<group>"> يحوي <img>
 * يصبح قابلاً للتكبير؛ العناصر بنفس data-g تشكّل مجموعة واحدة.
 *   data-cap / data-sub على <img>  → العنوان والسطر الثاني
 *   data-go / data-go-txt على figure → زر «المزيد» (أو href أقرب <a>)
 * الاختلاف عن النموذج: لا استبدال /img/photos/→/img/full/ — صور الكتالوج
 * web/ هي النسخة الكاملة أصلاً (≤1200px، D113).
 * لوحة المفاتيح: Esc يغلق · ← التالي · → السابق (RTL كما في النموذج) · سحب ≥50px.
 */
interface Item { thumb: string; src: string; alt: string; cap: string; sub: string; go: string; goTxt: string }

const ARROW = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19 12H5m7-7-7 7 7 7" />
  </svg>
);

function collect(group: string): Item[] {
  return Array.from(document.querySelectorAll<HTMLElement>(`[data-g="${group}"]:not([data-clone])`)).flatMap((f) => {
    const im = f.querySelector("img");
    if (!im) return [];
    const a = f.closest("a");
    const src = im.currentSrc || im.src;
    return [{
      thumb: src,
      src,
      alt: im.alt,
      cap: im.dataset.cap || "",
      sub: im.dataset.sub || "",
      go: f.dataset.go || (a ? a.getAttribute("href") || "" : ""),
      goTxt: f.dataset.goTxt || "تفاصيل الخدمة",
    }];
  });
}

export default function Lightbox() {
  const pathname = usePathname();
  const [group, setGroup] = useState<Item[]>([]);
  const [idx, setIdx] = useState(0);
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const lastFocus = useRef<HTMLElement | null>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const touchX = useRef(0);

  const show = useCallback((i: number, g: Item[] = group) => {
    if (!g.length) return;
    const n = (i + g.length) % g.length;
    setIdx(n);
    setBusy(true);
    const nx = g[(n + 1) % g.length];
    if (nx) { const pre = new Image(); pre.src = nx.src; }
  }, [group]);

  const close = useCallback(() => {
    setOpen(false);
    document.body.classList.remove("lb-lock");
    lastFocus.current?.focus();
  }, []);

  const openGroup = useCallback((name: string, src: string) => {
    const g = collect(name);
    if (!g.length) return;
    lastFocus.current = document.activeElement as HTMLElement | null;
    setGroup(g);
    setOpen(true);
    document.body.classList.add("lb-lock");
    show(Math.max(0, g.findIndex((it) => it.thumb === src)), g);
    requestAnimationFrame(() => closeBtn.current?.focus());
  }, [show]);

  // تفويض الأحداث على document (بدل مستمع لكل figure كما في النموذج): يعمل مع
  // العناصر المضافة بعد الربط (أشرطة مستنسخة في المرحلة 3، تنقّل App Router)
  // بلا إعادة ربط. تمييز السحب عن الضغط: حركة > 8px تُلغي الفتح.
  useEffect(() => {
    const fig = (t: EventTarget | null) => (t as HTMLElement | null)?.closest<HTMLElement>("[data-g]:not([data-clone])") ?? null;
    let sx = 0, sy = 0, moved = false;
    const down = (e: PointerEvent) => { if (fig(e.target)) { sx = e.clientX; sy = e.clientY; moved = false; } };
    const move = (e: PointerEvent) => { if (Math.abs(e.clientX - sx) > 8 || Math.abs(e.clientY - sy) > 8) moved = true; };
    const click = (e: MouseEvent) => {
      const f = fig(e.target); const im = f?.querySelector("img");
      if (!f || !im) return;
      if (f.closest("a")) e.preventDefault();
      if (!moved) openGroup(f.dataset.g!, im.currentSrc || im.src);
    };
    const key = (e: KeyboardEvent) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const f = fig(e.target); const im = f?.querySelector("img");
      if (!f || !im || f !== e.target) return;
      e.preventDefault(); openGroup(f.dataset.g!, im.currentSrc || im.src);
    };
    document.addEventListener("pointerdown", down);
    document.addEventListener("pointermove", move);
    document.addEventListener("click", click);
    document.addEventListener("keydown", key);
    return () => {
      document.removeEventListener("pointerdown", down);
      document.removeEventListener("pointermove", move);
      document.removeEventListener("click", click);
      document.removeEventListener("keydown", key);
    };
  }, [openGroup]);

  // إتاحة لوحة المفاتيح: tabindex + aria-label لكل figure ليس داخل رابط — يُعاد عند تغيّر المسار
  useEffect(() => {
    document.querySelectorAll<HTMLElement>("[data-g]:not([data-clone])").forEach((f) => {
      const im = f.querySelector("img");
      if (!im || f.closest("a")) return;
      f.setAttribute("tabindex", "0");
      f.setAttribute("aria-label", "تكبير: " + (im.dataset.cap || im.alt));
    });
  }, [pathname]);

  // لوحة المفاتيح
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") show(idx + 1);
      else if (e.key === "ArrowRight") show(idx - 1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, idx, show, close]);

  // تمرير الصورة المصغّرة الحالية إلى المنتصف
  useEffect(() => {
    const t = thumbsRef.current?.children[idx] as HTMLElement | undefined;
    t?.scrollIntoView({ block: "nearest", inline: "center", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }, [idx, open]);

  const it = group[idx];
  const external = it ? /^https?:/.test(it.go) : false;

  return (
    <div className={`lb${open ? " open" : ""}`} id="lb" role="dialog" aria-modal="true" aria-label="عرض الصورة" aria-hidden={!open}>
      <div className="lb-top">
        <span id="lbCount">{it ? `${idx + 1} / ${group.length}` : ""}</span>
        <button ref={closeBtn} id="lbClose" aria-label="إغلاق" onClick={close}>×</button>
      </div>
      <div
        className={`lb-stage${busy ? " busy" : ""}`}
        id="lbStage"
        onClick={(e) => { if (e.target === e.currentTarget) close(); }}
        onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => { const dx = e.changedTouches[0].clientX - touchX.current; if (Math.abs(dx) > 50) show(dx > 0 ? idx - 1 : idx + 1); }}
      >
        <div className="lb-frame" id="lbFrame">
          {it && (
            // eslint-disable-next-line @next/next/no-img-element -- المعرض يعرض src الجاهز من DOM بلا تحسين إضافي (نفس النموذج)
            <img
              id="lbImg"
              src={it.src}
              alt={it.alt}
              className={busy ? "loading" : ""}
              onLoad={() => setBusy(false)}
              onError={() => setBusy(false)}
            />
          )}
          <div className={`lb-cap${it && !it.cap && !it.sub && !it.go ? " empty" : ""}`} id="lbCapBox">
            <b id="lbCap">{it?.cap}</b>
            <span id="lbSub">{it?.sub}</span>
            {it?.go && (
              <a className="lb-go" id="lbGo" href={it.go} target={external ? "_blank" : undefined} rel={external ? "noopener" : undefined}>
                <span id="lbGoTxt">{it.goTxt}</span>
                {ARROW}
              </a>
            )}
          </div>
        </div>
        <span className="lb-spin" aria-hidden="true" />
        <button className="lb-nav prev" id="lbPrev" aria-label="السابق" onClick={() => show(idx - 1)}>›</button>
        <button className="lb-nav next" id="lbNext" aria-label="التالي" onClick={() => show(idx + 1)}>‹</button>
      </div>
      <div className="lb-thumbs" id="lbThumbs" ref={thumbsRef}>
        {group.map((g, k) => (
          // eslint-disable-next-line @next/next/no-img-element -- مصغّرات المعرض من DOM (نفس النموذج)
          <img key={`${g.thumb}-${k}`} src={g.thumb} alt="" className={k === idx ? "on" : ""} onClick={() => show(k)} />
        ))}
      </div>
    </div>
  );
}
