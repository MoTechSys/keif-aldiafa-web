import { Metadata } from "next";
import { notFound } from "next/navigation";

import LocalPage from "@/components/local/LocalPage";
import { generatePageMetadata } from "@/components/SEO";
import { getServiceCityPage } from "@/lib/localPage";
import { CITIES, SERVICES, LOCAL_PAGES, localSlug, parseServiceCity } from "@/lib/localPages";
import { generateBreadcrumbSchema, generateServiceSchema, generateWebPageSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

/**
 * صفحات (خدمة × مدينة) — 24 صفحة SSG من قالب المرحلة 4 (`LocalPage` = master_page
 * في النموذج). أي slug خارج LOCAL_PAGES → 404 حقيقي.
 */
export function generateStaticParams(): { serviceCity: string }[] {
  return LOCAL_PAGES.map((p) => ({ serviceCity: localSlug(p.service, p.city) }));
}
export const dynamicParams = false;

interface Props { params: { serviceCity: string } }

export function generateMetadata({ params }: Props): Metadata {
  const parsed = parseServiceCity(decodeURIComponent(params.serviceCity));
  if (!parsed) return generatePageMetadata({ title: "غير موجود", description: "", path: "/", noIndex: true });
  const rec = getServiceCityPage(parsed.service, parsed.city);
  return generatePageMetadata({ title: rec.title, description: rec.desc, path: rec.path, keywords: rec.keywords, ogImage: rec.hero.url, ogImageAlt: rec.hero.alt, ogImageWidth: rec.hero.width, ogImageHeight: rec.hero.height });
}

export default function Page({ params }: Props) {
  const parsed = parseServiceCity(decodeURIComponent(params.serviceCity));
  if (!parsed) notFound();
  const rec = getServiceCityPage(parsed.service, parsed.city);
  const c = CITIES[parsed.city]; const s = SERVICES[parsed.service];
  const url = `${SITE_URL}${rec.path}`;

  const breadcrumbSchema = generateBreadcrumbSchema(rec.crumbs.map((b) => ({ name: b.label, url: `${SITE_URL}${b.href === "/" ? "" : b.href}` })));
  const serviceSchema = generateServiceSchema({ name: `${s.ar} في ${c.ar}`, description: rec.desc, url, cityAr: c.ar, serviceType: s.ar });
  // FAQPage JSON-LD حُذف (2026-09-01) — Google أوقفت FAQ rich results. الأسئلة المرئية باقية.
  const webPageSchema = generateWebPageSchema({ name: rec.title, description: rec.desc, url, primaryImage: rec.hero.url });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <LocalPage rec={rec} />
    </>
  );
}
