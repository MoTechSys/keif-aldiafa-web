"use client";

import { useState } from "react";

/**
 * PartnersCompact — زر «كل شركاء النجاح» في الصفحات المحلية (النموذج D85):
 * 6 شعارات على الجوال / 12 على الحاسوب ثم ينبثق الباقي في الصفحة نفسها.
 */
export default function PartnersCompact({ count }: { count: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="works-foot">
      <button
        className="btn btn-sm"
        id="plogosMore"
        type="button"
        aria-expanded={open}
        aria-controls="plogos"
        onClick={() => {
          const el = document.getElementById("plogos");
          const next = !open;
          setOpen(next);
          el?.classList.toggle("collapsed", !next);
          if (!next) el?.scrollIntoView({ block: "nearest", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
        }}
      >
        {open ? "إظهار أقل" : `كل شركاء النجاح · ${count} جهة`}
      </button>
    </div>
  );
}
