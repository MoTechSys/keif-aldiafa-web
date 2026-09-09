import type { Metadata } from "next";
import PortfolioPage from "@/components/pages/PortfolioPage";
import { generatePageMetadata } from "@/components/SEO";
import { generateBreadcrumbSchema, generateImageGallerySchema, generateWebPageSchema } from "@/lib/schema";
import { PORTFOLIO_HERO, PORTFOLIO_IMAGES, SHOTS } from "@/lib/portfolioContent";
import { SITE_URL } from "@/lib/site";

const PATH = "/portfolio";
const URL = `${SITE_URL}${PATH}`;
const TITLE = "أعمالنا — صور من مناسبات نفّذناها";
const DESC = `معرض أعمال كيف الضيافة: ${SHOTS.length} صورة من فعاليات الجهات الحكومية والرسمية، الشركات والمعارض، الزواجات والمناسبات الخاصة، وتجهيزات الضيافة في قاعات وفنادق وأجنحة.`;

export const metadata: Metadata = generatePageMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  keywords: ["معرض أعمال ضيافة", "فعاليات حكومية", "معارض", "مؤتمرات", "زواجات", "مناسبات خاصة", "تجهيزات ضيافة", "قهوجيين في فعاليات", "ضيافة شركات"],
  ogImage: PORTFOLIO_HERO.url,
  ogImageAlt: PORTFOLIO_HERO.alt,
  ogImageWidth: PORTFOLIO_HERO.width,
  ogImageHeight: PORTFOLIO_HERO.height,
});

const schemas = [
  generateBreadcrumbSchema([{ name: "الرئيسية", url: SITE_URL }, { name: "أعمالنا", url: URL }]),
  generateWebPageSchema({ name: `${TITLE} | كيف الضيافة`, description: DESC, url: URL, primaryImage: PORTFOLIO_HERO.url }),
  generateImageGallerySchema(URL, PORTFOLIO_IMAGES),
];

export default function Page() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <PortfolioPage />
    </>
  );
}
