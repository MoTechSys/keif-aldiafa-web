import { Metadata } from "next";
import { notFound } from "next/navigation";

import LocalPage from "@/components/local/LocalPage";
import { generatePageMetadata } from "@/components/SEO";
import { CITIES, getCity } from "@/lib/cities";
import { getCityPage } from "@/lib/localPage";
import { CITIES as SC_CITIES } from "@/lib/localPages";
import { generateBreadcrumbSchema, generateImageGallerySchema, generateServiceSchema, generateWebPageSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

/**
 * صفحات المدن الثماني (/locations/جدة …) — نفس قالب الصفحة المحلية بنوع `city`
 * (النموذج D96): الأدوار = أول فقرة محلية لكل خدمة مع زر إلى صفحتها، بلا ترتيبات.
 */
interface Params { params: { city: string } }

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}
export const dynamicParams = false;

function keyOf(slug: string): string | undefined {
  const city = getCity(slug);
  return city ? Object.keys(SC_CITIES).find((k) => SC_CITIES[k].ar === city.name) : undefined;
}

export function generateMetadata({ params }: Params): Metadata {
  const key = keyOf(decodeURIComponent(params.city));
  if (!key) return generatePageMetadata({ title: "غير موجود", description: "", path: "/locations", noIndex: true });
  const rec = getCityPage(key);
  return generatePageMetadata({ title: rec.title, description: rec.desc, path: rec.path, keywords: rec.keywords, ogImage: rec.hero.url, ogImageAlt: rec.hero.alt, ogImageWidth: rec.hero.width, ogImageHeight: rec.hero.height });
}

export default function CityPage({ params }: Params) {
  const key = keyOf(decodeURIComponent(params.city));
  if (!key) notFound();
  const rec = getCityPage(key);
  const url = `${SITE_URL}${rec.path}`;
  const city = getCity(decodeURIComponent(params.city))!;

  const breadcrumbSchema = generateBreadcrumbSchema(rec.crumbs.map((b) => ({ name: b.label, url: `${SITE_URL}${b.href === "/" ? "" : b.href}` })));
  const webPageSchema = generateWebPageSchema({ name: `خدمات الضيافة في ${rec.cityAr}`, description: city.intro, url, primaryImage: rec.hero.url });
  const serviceSchema = generateServiceSchema({ name: `خدمات ضيافة فاخرة في ${rec.cityAr}`, description: city.body, url, cityAr: rec.cityAr, serviceType: "خدمات الضيافة" });
  const gallerySchema = generateImageGallerySchema(url, rec.shots.map((g) => ({ url: g.url, alt: g.alt, title: g.title, width: g.width, height: g.height })));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }} />
      <LocalPage rec={rec} />
    </>
  );
}
