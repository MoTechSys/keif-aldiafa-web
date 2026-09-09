import type { Metadata } from "next";
import SocialPage from "@/components/pages/SocialPage";
import { generatePageMetadata } from "@/components/SEO";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/schema";
import { SITE_URL, WHATSAPP_DISPLAY } from "@/lib/site";

const PATH = "/social";
const URL = `${SITE_URL}${PATH}`;
const TITLE = "تابعنا — حساباتنا على مواقع التواصل";
const DESC = `حسابات كيف الضيافة على إنستغرام وتيك توك وسناب شات وإكس وفيسبوك — صور وفيديوهات من مناسبات نفّذناها، وباركود للتواصل عبر واتساب ${WHATSAPP_DISPLAY}.`;

export const metadata: Metadata = generatePageMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  keywords: ["كيف الضيافة انستقرام", "كيف الضيافة تيك توك", "كيف الضيافة سناب", "حسابات كيف الضيافة", "باركود كيف الضيافة"],
});

const schemas = [
  generateBreadcrumbSchema([{ name: "الرئيسية", url: SITE_URL }, { name: "حساباتنا", url: URL }]),
  generateWebPageSchema({ name: `${TITLE} | كيف الضيافة`, description: DESC, url: URL }),
];

export default function Page() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <SocialPage />
    </>
  );
}
