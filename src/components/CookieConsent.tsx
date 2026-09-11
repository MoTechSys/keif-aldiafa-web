"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

/**
 * CookieConsent — شريط موافقة الكوكيز (D149 — نظام حماية البيانات الشخصية PDPL).
 * يعمل مع Consent Mode v2 المضبوط افتراضياً على «denied» في layout.tsx:
 *   • قبول  → gtag('consent','update', granted…) + localStorage kd_consent=granted
 *   • رفض   → يبقى denied + localStorage kd_consent=denied (لا يُعاد السؤال)
 * لا يظهر إذا سبق للزائر أن اختار. لا يحجب الصفحة (شريط أسفل، فوق زر واتساب الطافي).
 * النص يشرح ما نستخدمه فعلاً: Google Analytics وGoogle Ads فقط.
 */
declare global {
  interface Window { gtag?: (...args: unknown[]) => void }
}

const KEY = "kd_consent";
const GRANTED = { ad_storage: "granted", ad_user_data: "granted", ad_personalization: "granted", analytics_storage: "granted" };

export default function CookieConsent() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setOpen(true);
    } catch {
      /* التخزين معطّل — لا نعرض الشريط (لا يمكن حفظ الاختيار) */
    }
  }, []);

  const choose = (v: "granted" | "denied") => {
    try { localStorage.setItem(KEY, v); } catch { /* ignore */ }
    if (v === "granted" && typeof window.gtag === "function") window.gtag("consent", "update", GRANTED);
    setOpen(false);
  };

  if (!open) return null;
  return (
    <div className="ck" role="dialog" aria-live="polite" aria-label="إشعار الكوكيز">
      <p>
        نستخدم كوكيز Google Analytics وGoogle Ads لقياس زيارات الموقع وتحسين إعلاناتنا. لا نجمع بيانات شخصية دون موافقتك.{" "}
        <Link href="/privacy">سياسة الخصوصية</Link>
      </p>
      <div className="ck-a">
        <button type="button" className="btn btn-gold btn-sm" onClick={() => choose("granted")}>موافق</button>
        <button type="button" className="btn btn-sm ck-no" onClick={() => choose("denied")}>الضروري فقط</button>
      </div>
    </div>
  );
}
