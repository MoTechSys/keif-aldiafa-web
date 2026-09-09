import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/pages/shared";
import { generatePageMetadata } from "@/components/SEO";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/schema";
import { EMAIL, LEGAL_NAME, SITE_URL, UNIFIED_NUMBER, WHATSAPP_DISPLAY } from "@/lib/site";

/**
 * /legal — الحقوق القانونية = النموذج v6.9 build_legal 1:1 (D115): phero بلا صورة → .prose.
 * النصوص من LEGAL_SECTIONS حرفياً (مع «المؤسسة» لا «الشركة» — الكيان مؤسسة).
 * ملاحظة D113: لا علامة مائية برمجية في الموقع؛ عبارة «الصور تحمل علامة مائية» في النموذج
 * وصفٌ للصور الأصلية كما يسلّمها المالك، لا لمعالجة في الموقع — أُبقيت بصياغة دقيقة.
 */
const PATH = "/legal";
const URL = `${SITE_URL}${PATH}`;
const TITLE = "الحقوق القانونية والملكية الفكرية";
const DESC = "الحقوق القانونية والملكية الفكرية لصور ومحتوى موقع كيف الضيافة: شروط استخدام الصور، الحصول على ترخيص، العلامة التجارية، والتواصل القانوني.";

export const metadata: Metadata = generatePageMetadata({ title: TITLE, description: DESC, path: PATH, keywords: ["حقوق الصور", "الملكية الفكرية", "ترخيص استخدام الصور", "العلامة التجارية كيف الضيافة"] });

const schemas = [
  generateBreadcrumbSchema([{ name: "الرئيسية", url: SITE_URL }, { name: "الحقوق القانونية", url: URL }]),
  generateWebPageSchema({ name: `${TITLE} | كيف الضيافة`, description: DESC, url: URL }),
];

export default function LegalPage() {
  const year = new Date().getFullYear();
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <div className="v7">
        <PageHero
          label="الحقوق"
          h1={<>الحقوق القانونية <em>والملكية الفكرية</em></>}
          p="معلومات الحقوق القانونية والملكية الفكرية لصور ومحتوى موقع كيف الضيافة."
          crumbs={[{ label: "الحقوق القانونية" }]}
        />
        <section className="lsec on-deep" id="legal">
          <div className="wrap">
            <div className="prose rv">
              <h2>حقوق الصور والمحتوى</h2>
              <p>جميع الصور ومقاطع الفيديو والنصوص المنشورة على موقع <b>كيف الضيافة</b> محمية بموجب قوانين حقوق النشر والملكية الفكرية في المملكة العربية السعودية والاتفاقيات الدولية.</p>
              <p>© {year} {LEGAL_NAME} — جميع الحقوق محفوظة.</p>
              <h2>شروط استخدام الصور</h2>
              <p>يُمنع نسخ أو إعادة نشر أو استخدام أي صورة من صور موقعنا لأغراض تجارية أو غير تجارية دون الحصول على إذن كتابي مسبق من إدارة المؤسسة.</p>
              <p>الصور الأصلية موثّقة لدى المؤسسة، وأي استخدام غير مرخّص يعرّض المستخدم للمساءلة القانونية.</p>
              <h2>الحصول على ترخيص استخدام</h2>
              <p>للحصول على ترخيص استخدام أي من صور أو مقاطع الموقع لأغراض تسويقية، إعلامية، أو تحريرية، يرجى التواصل معنا مباشرة عبر البريد الإلكتروني <span dir="ltr">{EMAIL}</span> أو واتساب <span dir="ltr">{WHATSAPP_DISPLAY}</span> أو <Link href="/contact">صفحة التواصل</Link>.</p>
              <h2>العلامة التجارية</h2>
              <p>«كيف الضيافة» و«Keif Al-Diafa» علامات تجارية للمؤسسة.</p>
              <p>الشعار وهوية العلامة البصرية محمية ومسجّلة، ويُمنع استخدامها إلا بإذن رسمي.</p>
              <h2>التواصل القانوني</h2>
              <p>لأي استفسار قانوني، طلب ترخيص، أو الإبلاغ عن استخدام غير مصرّح به، يرجى مراسلتنا على <span dir="ltr">{EMAIL}</span> أو زيارة <Link href="/contact">صفحة التواصل</Link>.</p>
              <p className="foot">{LEGAL_NAME} — الرقم الوطني الموحّد <span dir="ltr">{UNIFIED_NUMBER}</span> · آخر تحديث {year}.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
