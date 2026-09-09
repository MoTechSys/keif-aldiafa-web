import type { Metadata } from "next";
import ServicesPage from "@/components/pages/ServicesPage";
import { generatePageMetadata } from "@/components/SEO";
import { generateBreadcrumbSchema, generateImageGallerySchema, generateServiceSchema, generateWebPageSchema } from "@/lib/schema";
import { SERVICES, SERVICES_HERO, SERVICES_IMAGES } from "@/lib/servicesContent";
import { SITE_URL } from "@/lib/site";

const PATH = "/services";
const URL = `${SITE_URL}${PATH}`;
const TITLE = "الخدمات — قهوجيين وصبابين وطاقم نسائي وتجهيز";
const DESC = "خدمات كيف الضيافة: قهوجيين وصبابين ومباشرين، سقّاء زمزم، سفرجية، صبابات ومباشرات، خطاط ورسّام، فرقة شعبية، خيمة تراثية، كاونترات، ركن تصوير وبوفيه.";

export const metadata: Metadata = generatePageMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  keywords: ["قهوجيين", "صبابين قهوة", "مباشرين", "صبابات زواجات", "سقاء زمزم", "سفرجية", "سواس", "خطاط", "رسام بورتريه", "فرقة شعبية", "خيمة تراثية", "كاونتر قهوة", "ركن تصوير", "بوفيه", "طاولة متنقلة"],
  ogImage: SERVICES_HERO.url,
  ogImageAlt: SERVICES_HERO.alt,
  ogImageWidth: SERVICES_HERO.width,
  ogImageHeight: SERVICES_HERO.height,
});

const schemas = [
  generateBreadcrumbSchema([{ name: "الرئيسية", url: SITE_URL }, { name: "الخدمات", url: URL }]),
  ...Object.values(SERVICES).map((s) => generateServiceSchema({ name: s.title, description: s.desc, url: `${URL}#${s.id}`, serviceType: s.latin })),
  generateWebPageSchema({ name: `${TITLE} | كيف الضيافة`, description: DESC, url: URL, primaryImage: SERVICES_HERO.url }),
  generateImageGallerySchema(URL, SERVICES_IMAGES),
];

export default function Page() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <ServicesPage />
    </>
  );
}
