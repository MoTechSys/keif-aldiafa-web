import type { Metadata } from "next";
import AboutPage, { ABOUT_HERO } from "@/components/pages/AboutPage";
import { generatePageMetadata } from "@/components/SEO";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

const PATH = "/about";
const URL = `${SITE_URL}${PATH}`;
const TITLE = "من نحن — مؤسسة ضيافة سعودية من جدة منذ 2016";
const DESC = "كيف الضيافة: مؤسسة مسجّلة بسجل تجاري وفاتورة إلكترونية ورقم موحّد، تعمل منذ 2016 بقهوجيين وصبابين وطاقم نسائي في 8 مدن — +500 مناسبة للجهات والشركات والعائلات.";

export const metadata: Metadata = generatePageMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  keywords: ["عن كيف الضيافة", "مؤسسة ضيافة سعودية", "قهوجيين منذ 2016", "فريق ضيافة محترف", "مؤسسة كيف الضيافة للأفراح والمناسبات"],
  ogImage: ABOUT_HERO.url,
  ogImageAlt: ABOUT_HERO.alt,
  ogImageWidth: ABOUT_HERO.width,
  ogImageHeight: ABOUT_HERO.height,
});

const schemas = [
  generateBreadcrumbSchema([{ name: "الرئيسية", url: SITE_URL }, { name: "من نحن", url: URL }]),
  generateWebPageSchema({ name: `${TITLE} | كيف الضيافة`, description: DESC, url: URL, primaryImage: ABOUT_HERO.url }),
];

export default function Page() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <AboutPage />
    </>
  );
}
