import { Metadata } from "next";

import LocalPage from "@/components/local/LocalPage";
import { generatePageMetadata } from "@/components/SEO";
import { getIntentPage } from "@/lib/localPage";
import { generateBreadcrumbSchema, generateServiceSchema, generateWebPageSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

/**
 * صفحة النيّة المستقلة «مباشرين قهوة جدة» (W1) — قالب الصفحة المحلية بنوع `intent`
 * (النموذج D97): 4 أدوار مكتوبة يدوياً، بلا ترتيبات، الروابط = خدمات جدة الثلاث.
 * النصوص في lib/localPage.ts (getIntentPage) — منقّاة من الأرقام غير الموثّقة.
 */
const SLUG = "mubashirin-qahwa-jeddah";
const rec = getIntentPage(SLUG);

export const metadata: Metadata = generatePageMetadata({
  title: rec.title,
  description: rec.desc,
  path: rec.path,
  keywords: rec.keywords,
  ogImage: rec.hero.url,
  ogImageAlt: rec.hero.alt,
  ogImageWidth: rec.hero.width,
  ogImageHeight: rec.hero.height,
});

export default function Page() {
  const url = `${SITE_URL}${rec.path}`;
  const breadcrumbSchema = generateBreadcrumbSchema(rec.crumbs.map((b) => ({ name: b.label, url: `${SITE_URL}${b.href === "/" ? "" : b.href}` })));
  const serviceSchema = generateServiceSchema({ name: "مباشرين قهوة في جدة", description: rec.desc, url, cityAr: "جدة", serviceType: "مباشرين قهوة" });
  const webPageSchema = generateWebPageSchema({ name: `${rec.title} | كيف الضيافة`, description: rec.desc, url, primaryImage: rec.hero.url });
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <LocalPage rec={rec} />
    </>
  );
}
