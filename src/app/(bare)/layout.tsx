/**
 * مجموعة مسارات (bare) — بلا ClientLayout (لا هيدر/فوتر/واتساب طافٍ/معرض).
 * template.tsx في الجذر لا يُطبَّق هنا لأن هذه المجموعة تملك layout خاصاً بها فقط
 * ضمن RootLayout (الخطوط/الميتا/gtag/الشِيمات تبقى من الجذر). تُستخدم لـ /links (D101).
 */
export default function BareLayout({ children }: { children: React.ReactNode }) {
  return <main id="main-content" className="v7 links-page">{children}</main>;
}
