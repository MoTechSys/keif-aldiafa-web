/**
 * روابط التنقّل الرئيسية — نفس ترتيب وتسمية النموذج (prototype-home v6.9 header).
 * مصدر واحد يستهلكه Header وFooter (صف «أقسام الموقع»).
 */
export const NAV_LINKS: readonly { href: string; label: string }[] = [
  { href: "/", label: "الرئيسية" },
  { href: "/services", label: "الخدمات" },
  { href: "/offerings", label: "التقديمات" },
  { href: "/portfolio", label: "أعمالنا" },
  { href: "/locations", label: "المدن" },
  { href: "/about", label: "من نحن" },
  { href: "/contact", label: "تواصل" },
];

/** صف الفوتر «أقسام الموقع» (doormat) — يزيد على الهيدر رابط /social بنفس تسميات النموذج */
export const FOOTER_LINKS: readonly { href: string; label: string }[] = [
  { href: "/", label: "الرئيسية" },
  { href: "/services", label: "خدماتنا" },
  { href: "/offerings", label: "تقديماتنا" },
  { href: "/portfolio", label: "أعمالنا" },
  { href: "/locations", label: "المدن" },
  { href: "/about", label: "من نحن" },
  { href: "/social", label: "حساباتنا" },
  { href: "/contact", label: "تواصل معنا" },
];

/** نص واتساب الافتراضي — حرفياً من النموذج */
export const WA_DEFAULT_MSG = "السلام عليكم، أرغب بالاستفسار عن خدمات كيف الضيافة لمناسبة";
