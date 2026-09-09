"use client";

import { useState } from "react";

/**
 * PartnersMore — زر «عرض كل الشركاء» (النموذج §3): على الجوال تظهر 12 خانة
 * ثم يبدّل الصنف .collapsed على #logos. الشبكة نفسها تُرسَم على الخادم.
 */
export default function PartnersMore({ count }: { count: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="more-row rv">
      <button
        className="btn btn-sm"
        id="logosMore"
        type="button"
        aria-expanded={open}
        aria-controls="logos"
        onClick={() => {
          const next = !open;
          setOpen(next);
          document.getElementById("logos")?.classList.toggle("collapsed", !next);
        }}
      >
        {open ? "إظهار أقل" : `عرض كل الشركاء · ${count} جهة`}
      </button>
    </div>
  );
}
