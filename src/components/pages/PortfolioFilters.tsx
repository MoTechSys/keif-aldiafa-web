"use client";

import { useEffect } from "react";
// D140: لا استيراد من portfolioContent (يجرّ الكتالوج كاملاً 172KB إلى حزمة العميل) — الأزرار تأتي props من الخادم.
type F = "government" | "corporate" | "private" | "equipment" | "all";
export type FilterItem = { f: F; label: string };
const NAMES: Record<F, string> = { all: "كل الأعمال", government: "جهات حكومية ورسمية", corporate: "شركات", private: "مناسبات خاصة وزواجات", equipment: "تجهيزات ومعدات" };
const ALIAS: Record<string, F> = { events: "corporate", weddings: "private", equipment: "equipment", government: "government", corporate: "corporate", private: "private", all: "all" };

/**
 * PortfolioFilters — تصفية معرض الأعمال (النموذج v6.9 build_portfolio JS):
 * أزرار aria-pressed تُخفي/تُظهر .shot حسب data-type، عدّاد aria-live،
 * ملاحظة الجهات الحكومية عند تصفيتها، ومزامنة ?type= في العنوان (replaceState).
 * الشبكة نفسها مُصيَّرة في الخادم (SEO) — هذا المكوّن لا يرسم صوراً.
 */
export default function PortfolioFilters({ filters }: { filters: FilterItem[] }) {
  useEffect(() => {
    const btns = Array.from(document.querySelectorAll<HTMLButtonElement>(".filters button"));
    const figs = Array.from(document.querySelectorAll<HTMLElement>("#pgrid .shot"));
    const cnt = document.getElementById("pcount"); const note = document.getElementById("govnote");
    const apply = (raw: string, push: boolean) => {
      const f: F = ALIAS[raw] ?? "all"; let n = 0;
      figs.forEach((x) => { const on = f === "all" || x.dataset.type === f; x.hidden = !on; if (on) { n++; x.classList.add("in"); } });
      btns.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.f === f)));
      if (cnt) cnt.textContent = `${n} · ${NAMES[f]}`;
      if (note) note.hidden = f !== "government";
      if (push) { const u = new URL(location.href); if (f === "all") u.searchParams.delete("type"); else u.searchParams.set("type", f); history.replaceState(null, "", u); }
    };
    const handlers = btns.map((b) => { const h = () => apply(b.dataset.f!, true); b.addEventListener("click", h); return [b, h] as const; });
    apply(new URLSearchParams(location.search).get("type") || "all", false);
    return () => handlers.forEach(([b, h]) => b.removeEventListener("click", h));
  }, []);
  return (
    <div className="filters rv" role="group" aria-label="تصفية الأعمال">
      {filters.map((x) => <button key={x.f} type="button" data-f={x.f} aria-pressed={x.f === "all"}>{x.label}</button>)}
    </div>
  );
}
