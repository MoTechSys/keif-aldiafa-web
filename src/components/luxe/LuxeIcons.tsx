/**
 * LuxeIcons.tsx — أيقونات SVG مرسومة يدوياً بعمق ثلاثي الأبعاد.
 *
 * سبب وجودها: القالب السابق كان يستخدم إيموجي (👤 🏢 ☰) — تُرسم بخط
 * النظام فتختلف شكلاً بين أندرويد وآيفون وويندوز، ولا تقبل التلوين،
 * وتُقرأ كنص لدى قارئ الشاشة. البديل: SVG بتدرّج ذهبي + ظل داخلي
 * (feDropShadow) + إبراز عُلوي، فتبدو معدنية مجسّمة وتُطبع بدقة أي حجم.
 *
 * كل أيقونة: مسار واحد نظيف، viewBox 24، لا تبعية خارجية.
 */

import type { SVGProps } from "react";

/** التدرّجات المشتركة — تُحقن مرة واحدة في الصفحة */
export function LuxeIconDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" style={{ position: "absolute" }}>
      <defs>
        {/* تدرّج ذهبي معدني: فاتح أعلى-يسار، غامق أسفل-يمين */}
        <linearGradient id="lxAu" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F6E3BC" />
          <stop offset="38%" stopColor="#D8A877" />
          <stop offset="72%" stopColor="#C5A059" />
          <stop offset="100%" stopColor="#8A6A2F" />
        </linearGradient>
        {/* ظل داخلي يعطي إحساس النقش */}
        <filter id="lxDepth" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="1.1" stdDeviation="0.9" floodColor="#000" floodOpacity="0.55" />
        </filter>
        {/* هالة ذهبية للأيقونات الكبيرة */}
        <filter id="lxGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="0" stdDeviation="1.6" floodColor="#D8A877" floodOpacity="0.55" />
        </filter>
      </defs>
    </svg>
  );
}

type P = SVGProps<SVGSVGElement> & { glow?: boolean };

function Base({ children, glow, ...p }: P & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="url(#lxAu)"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      filter={glow ? "url(#lxGlow)" : "url(#lxDepth)"}
      aria-hidden="true"
      focusable="false"
      {...p}
    >
      {children}
    </svg>
  );
}

/** دلّة القهوة العربية — رمز البراند الأساسي */
export function IconDallah(p: P) {
  return (
    <Base {...p}>
      <path d="M9.2 8.6h5.6c1.2 0 2.1 1 2 2.2l-.6 6.4a2.2 2.2 0 0 1-2.2 2H10a2.2 2.2 0 0 1-2.2-2l-.6-6.4c-.1-1.2.8-2.2 2-2.2Z" />
      <path d="M14.8 9.4c1.6-.5 2.6-1.4 2.6-2.4 0-.8-.6-1.4-1.4-1.6" />
      <path d="M9.2 11.2c-1.5.3-2.4 1-2.4 1.9 0 .9.9 1.6 2.3 1.9" />
      <path d="M11 8.6V6.4M13 8.6V6.4" />
      <path d="M10.6 5.2h2.8" />
      <path d="M10.4 19.2h3.2" opacity="0.55" />
    </Base>
  );
}

/** فنجان قهوة على صحن */
export function IconCup(p: P) {
  return (
    <Base {...p}>
      <path d="M7.6 8.4h8.8l-.7 6.2a2.4 2.4 0 0 1-2.4 2.1h-2.6a2.4 2.4 0 0 1-2.4-2.1L7.6 8.4Z" />
      <path d="M16.2 10.2c1.3 0 2.2.7 2.2 1.7s-.9 1.7-2 1.8" />
      <path d="M5.6 19.2h12.8" />
      <path d="M10.4 5.6c0 .8-.8 1.1-.8 1.9M13.4 5.2c0 .9-.9 1.3-.9 2.2" opacity="0.7" />
    </Base>
  );
}

/** طاقم — ثلاثة أشخاص */
export function IconCrew(p: P) {
  return (
    <Base {...p}>
      <circle cx="12" cy="7.6" r="2.7" />
      <path d="M7.4 19.4c0-2.6 2.1-4.4 4.6-4.4s4.6 1.8 4.6 4.4" />
      <path d="M6.2 11.4a2 2 0 1 0-.1-4M4 17.8c0-1.6.9-2.8 2.3-3.3" opacity="0.65" />
      <path d="M17.8 11.4a2 2 0 1 1 .1-4M20 17.8c0-1.6-.9-2.8-2.3-3.3" opacity="0.65" />
    </Base>
  );
}

/** درع/ضمان */
export function IconShield(p: P) {
  return (
    <Base {...p}>
      <path d="M12 3.4l6.6 2.4v5.6c0 4-2.7 7.4-6.6 8.8-3.9-1.4-6.6-4.8-6.6-8.8V5.8L12 3.4Z" />
      <path d="M9.2 11.8l2 2.1 3.7-4.2" />
    </Base>
  );
}

/** ساعة — الالتزام بالوقت */
export function IconClock(p: P) {
  return (
    <Base {...p}>
      <circle cx="12" cy="12.4" r="7.8" />
      <path d="M12 8.2v4.4l3 1.9" />
      <path d="M12 3.2v1.4M20.6 12.4h1.2M12 20.2v1.4M2.2 12.4h1.2" opacity="0.6" />
    </Base>
  );
}

/** موقع/تغطية */
export function IconPin(p: P) {
  return (
    <Base {...p}>
      <path d="M12 21.2s6.4-5.3 6.4-10.2A6.4 6.4 0 0 0 5.6 11c0 4.9 6.4 10.2 6.4 10.2Z" />
      <circle cx="12" cy="10.6" r="2.4" />
    </Base>
  );
}

/** بخور/مبخرة */
export function IconIncense(p: P) {
  return (
    <Base {...p}>
      <path d="M8.4 12.6h7.2l-.5 5.2a1.9 1.9 0 0 1-1.9 1.7h-2.4a1.9 1.9 0 0 1-1.9-1.7l-.5-5.2Z" />
      <path d="M7.6 12.6h8.8" />
      <path d="M10.6 19.5h2.8" opacity="0.5" />
      <path d="M12 10.4c-1.1-1 .3-2 -.4-3.2M14.6 10c-.9-.8.2-1.6-.3-2.6" opacity="0.75" />
    </Base>
  );
}

/** نجمة — تقييم */
export function IconStar(p: P) {
  return (
    <Base {...p} fill="url(#lxAu)" strokeWidth={0.8}>
      <path d="M12 4.2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 9.9l5.4-.8L12 4.2Z" />
    </Base>
  );
}

/** واتساب */
export function IconWhatsApp(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" {...p}>
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.91-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.03 1.02-1.03 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.49.7.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.42.25-.69.25-1.28.18-1.41-.08-.12-.28-.2-.58-.35m-5.42 7.4a9.87 9.87 0 0 1-5.03-1.37l-.36-.22-3.74.98 1-3.65-.24-.37A9.86 9.86 0 0 1 2.17 11.9c0-5.45 4.43-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.89 9.88m8.42-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45c6.55 0 11.89-5.34 11.89-11.9a11.82 11.82 0 0 0-3.48-8.41z" />
    </svg>
  );
}

/** هاتف */
export function IconPhone(p: P) {
  return (
    <Base {...p}>
      <path d="M4.4 5.6a2 2 0 0 1 2-2h2.4a1 1 0 0 1 .95.68l1.2 3.6a1 1 0 0 1-.5 1.2l-1.7.86a11 11 0 0 0 5.06 5.06l.86-1.7a1 1 0 0 1 1.2-.5l3.6 1.2a1 1 0 0 1 .68.95v2.4a2 2 0 0 1-2 2h-.7C9.3 19.35 4.4 14.45 4.4 6.3v-.7Z" />
    </Base>
  );
}

/** سهم للروابط (RTL — يشير لليسار) */
export function IconArrow(p: P) {
  return (
    <Base {...p} strokeWidth={1.7}>
      <path d="M19 12H5" />
      <path d="M11 6l-6 6 6 6" />
    </Base>
  );
}

/** شعار مصغّر للـ crest — نخلة مبسّطة */
export function IconCrestMark(p: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#16110a" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...p}>
      <path d="M12 20.5V11" />
      <path d="M12 11c-2.6-2.2-5.4-2-6.6-.6M12 11c2.6-2.2 5.4-2 6.6-.6" />
      <path d="M12 11c-1.6-3-4-3.8-5.6-3.2M12 11c1.6-3 4-3.8 5.6-3.2" />
      <path d="M12 11c0-3 1-5.2 2.2-6.2M12 11c0-3-1-5.2-2.2-6.2" />
    </svg>
  );
}
