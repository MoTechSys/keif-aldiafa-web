import type { Metadata } from "next";

import LocalPage from "@/components/local/LocalPage";
import { generatePageMetadata } from "@/components/SEO";
import { INTENT_CONTENT } from "@/lib/intent";
import { getIntentPage } from "@/lib/localPage";
import { generateBreadcrumbSchema, generateImageGallerySchema, generateServiceSchema, generateWebPageSchema } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

/**
 * IntentRoute — مصنع صفحات النيّة (D156): ميتا + JSON-LD (Breadcrumb · Service ·
 * WebPage · ImageGallery) + قالب LocalPage. كل مسار `app/(site)/<slug>/page.tsx`
 * يستدعيه بسطرين، فيبقى المحتوى في `lib/intent/<slug>.ts` وحده.
 * ملاحظة أداء (Google 2026 — أول 2MB من HTML): JSON-LD يأتي قبل المحتوى مباشرةً.
 */
export function intentMetadata(slug: string): Metadata {
  const rec = getIntentPage(slug);
  return generatePageMetadata({
    title: rec.title,
    description: rec.desc,
    path: rec.path,
    keywords: rec.keywords,
    ogImage: rec.hero.url,
    ogImageAlt: rec.hero.alt,
    ogImageWidth: rec.hero.width,
    ogImageHeight: rec.hero.height,
  });
}

export default function IntentRoute({ slug }: { slug: string }) {
  const rec = getIntentPage(slug);
  const c = INTENT_CONTENT[slug];
  const url = `${SITE_URL}${rec.path}`;
  const breadcrumb = generateBreadcrumbSchema(rec.crumbs.map((b) => ({ name: b.label, url: `${SITE_URL}${b.href === "/" ? "" : b.href}` })));
  const service = generateServiceSchema({ name: c.schema.serviceName, description: rec.desc, url, cityAr: c.city ? rec.cityAr : undefined, serviceType: c.schema.serviceType });
  const webPage = generateWebPageSchema({ name: `${rec.title} | كيف الضيافة`, description: rec.desc, url, primaryImage: rec.hero.url });
  const imgs = [rec.hero, ...rec.shots, ...rec.roleImgs, ...rec.gallery];
  const gallery = generateImageGallerySchema(url, imgs.map((g) => ({ url: g.url, alt: g.alt, title: g.title, width: g.width, height: g.height })));
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gallery) }} />
      <LocalPage rec={rec} />
    </>
  );
}
