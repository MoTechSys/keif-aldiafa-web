import type { Metadata } from "next";
import LocationsPage, { LOCATIONS_HERO } from "@/components/pages/LocationsPage";
import { generatePageMetadata } from "@/components/SEO";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

const PATH = "/locations";
const URL = `${SITE_URL}${PATH}`;
const TITLE = "المدن التي نخدمها — جدة ومكة والرياض وأكثر";
const DESC = "كيف الضيافة تخدم جدة ومكة المكرمة والمدينة المنورة والرياض والطائف والدمام وأبها وينبع — قهوجيين وصبابين وضيافة مناسبات بطاقم وعدّة كاملة.";

export const metadata: Metadata = generatePageMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  keywords: ["ضيافة مدن السعودية", "قهوجيين جدة", "قهوجيين الرياض", "قهوجيين مكة", "قهوجيين المدينة", "ضيافة الدمام", "ضيافة الطائف", "ضيافة أبها", "ضيافة ينبع"],
  ogImage: LOCATIONS_HERO.url,
  ogImageAlt: LOCATIONS_HERO.alt,
  ogImageWidth: LOCATIONS_HERO.width,
  ogImageHeight: LOCATIONS_HERO.height,
});

const schemas = [
  generateBreadcrumbSchema([{ name: "الرئيسية", url: SITE_URL }, { name: "المدن", url: URL }]),
  generateWebPageSchema({ name: `${TITLE} | كيف الضيافة`, description: DESC, url: URL, primaryImage: LOCATIONS_HERO.url }),
];

export default function Page() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <LocationsPage />
    </>
  );
}
