import type { Metadata } from "next";
import OfferingsPage from "@/components/pages/OfferingsPage";
import { generatePageMetadata } from "@/components/SEO";
import { generateBreadcrumbSchema, generateImageGallerySchema, generateServiceSchema, generateWebPageSchema } from "@/lib/schema";
import { OFFERINGS_HERO, OFFERINGS_REAL_IMAGES } from "@/lib/offeringsContent";
import { SITE_URL } from "@/lib/site";

const PATH = "/offerings";
const URL = `${SITE_URL}${PATH}`;
const TITLE = "التقديمات والمعدات — قهوة وتمور وحلويات ودلال";
const DESC = "تقديمات كيف الضيافة: مشروبات حارة وباردة، تمور فاخرة، حلويات ومعجنات، سناكات وسندوتشات وفواكه ومكسرات، أركان ضيافة، ومعدات تقديم ذهبية وتوزيعات VIP.";

export const metadata: Metadata = generatePageMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  keywords: ["تقديمات ضيافة", "قهوة سعودية", "شاي", "تمور فاخرة", "حلويات مناسبات", "معجنات", "سناكات", "سندوتشات", "فواكه", "مكسرات", "معدات ضيافة", "دلال ذهبية", "فناجين", "توزيعات VIP", "بوفيه ضيافة"],
  ogImage: OFFERINGS_HERO.desktop.url,
  ogImageAlt: OFFERINGS_HERO.desktop.alt,
  ogImageWidth: OFFERINGS_HERO.desktop.width,
  ogImageHeight: OFFERINGS_HERO.desktop.height,
});

const schemas = [
  generateBreadcrumbSchema([{ name: "الرئيسية", url: SITE_URL }, { name: "التقديمات", url: URL }]),
  generateServiceSchema({ name: "تقديمات ومعدات الضيافة", description: DESC, url: URL, serviceType: "Catering" }),
  generateWebPageSchema({ name: `${TITLE} | كيف الضيافة`, description: DESC, url: URL, primaryImage: OFFERINGS_HERO.desktop.url }),
  generateImageGallerySchema(URL, OFFERINGS_REAL_IMAGES),
];

export default function Page() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <OfferingsPage />
    </>
  );
}
