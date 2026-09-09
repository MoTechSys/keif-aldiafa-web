import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";
import { generatePageMetadata } from "@/components/SEO";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/schema";
import { SITE_URL, WHATSAPP_DISPLAY } from "@/lib/site";

const PATH = "/contact";
const URL = `${SITE_URL}${PATH}`;
const TITLE = "تواصل معنا — واتساب واتصال ونموذج طلب عرض";
const DESC = `تواصل مع كيف الضيافة: واتساب ${WHATSAPP_DISPLAY}، اتصال مباشر، إنستغرام وتيك توك وسناب شات وإكس وفيسبوك، خرائط Google، ونموذج طلب عرض يُرسل عبر واتساب.`;

export const metadata: Metadata = generatePageMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  keywords: ["تواصل كيف الضيافة", "واتساب قهوجيين", "حجز طاقم ضيافة", "طلب عرض سعر ضيافة", "رقم كيف الضيافة"],
});

const schemas = [
  generateBreadcrumbSchema([{ name: "الرئيسية", url: SITE_URL }, { name: "تواصل", url: URL }]),
  generateWebPageSchema({ name: `${TITLE} | كيف الضيافة`, description: DESC, url: URL }),
];

export default function Page() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <ContactPage />
    </>
  );
}
