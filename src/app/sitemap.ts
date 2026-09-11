import { MetadataRoute } from "next";
import { CITIES } from "@/lib/cities";
import { LOCAL_PAGES, INTENT_PAGES, localSlug } from "@/lib/localPages";
import { SITE_URL } from "@/lib/site";


// خريطة تواريخ lastmod ثابتة — آخر تعديل حقيقي لكل قسم من سجل git (D150):
//   git log -1 --format=%cs -- <ملفات القسم>   (قيست 2026-09-11؛ كل الأقسام أُعيد بناؤها على v6.9 في 2026-09-09)
// ثابتة ومتنوّعة: لا تتغيّر عند كل زحف = صادقة مع Google. تُحدَّث يدوياً عند تعديل قسم.
// ملاحظة: Vercel يستنسخ git بعمق 1 (shallow)، فلا يُعوّل على git log per-file وقت البناء.
const DATES = {
  home: "2026-09-09", // src/components/home · homeContent.ts · (site)/page.tsx
  services: "2026-09-09", // ServicesPage.tsx · servicesContent.ts
  offerings: "2026-09-09", // OfferingsPage.tsx · offeringsContent.ts
  portfolio: "2026-09-09", // PortfolioPage.tsx · portfolioContent.ts
  about: "2026-09-09", // (site)/about
  contact: "2026-09-09", // (site)/contact · ContactChannels.tsx
  locations: "2026-09-09", // (site)/locations/page.tsx
  cityPage: "2026-09-09", // components/local · localPage.ts · cities.ts
  serviceCity: "2026-09-09", // components/local · localPage.ts
  social: "2026-09-09", // (site)/social
  legal: "2026-09-09", // (site)/legal
  privacy: "2026-09-11", // (site)/privacy — أُنشئت D149
  intentPages: "2026-09-09", // (site)/mubashirin-qahwa-jeddah
};

export default function sitemap(): MetadataRoute.Sitemap {
  const cityRoutes = CITIES.map((c) => ({
    path: `/locations/${c.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
    lastModified: DATES.cityPage,
  }));

  // صفحات الخدمة × المدينة (تطابق البحث: صبابين قهوة جدة...)
  const serviceCityRoutes = LOCAL_PAGES.map((p) => ({
    path: `/${localSlug(p.service, p.city)}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
    lastModified: DATES.serviceCity,
  }));

  // صفحات النوايا المستقلة (W1) — نية مُقاسة × مدينة واحدة، لا مصفوفة
  const intentRoutes = INTENT_PAGES.map((p) => ({
    path: `/${p.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
    lastModified: DATES.intentPages,
  }));

  const routes = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" as const, lastModified: DATES.home },
    { path: "/services", priority: 0.9, changeFrequency: "weekly" as const, lastModified: DATES.services },
    { path: "/offerings", priority: 0.9, changeFrequency: "weekly" as const, lastModified: DATES.offerings },
    { path: "/portfolio", priority: 0.8, changeFrequency: "monthly" as const, lastModified: DATES.portfolio },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const, lastModified: DATES.about },
    { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const, lastModified: DATES.contact },
    { path: "/locations", priority: 0.8, changeFrequency: "monthly" as const, lastModified: DATES.locations },
    { path: "/social", priority: 0.6, changeFrequency: "monthly" as const, lastModified: DATES.social },
    // /links (وجهة الباركود المطبوع — D145) تبقى قابلة للفهرسة لكنها خارج الخريطة (D150):
    // يتيمة (0 روابط واردة) ونصّها نسخة من قسم القنوات في /contact — إدراجها يُضعف الخريطة لا يُقوّيها.
    { path: "/legal", priority: 0.3, changeFrequency: "yearly" as const, lastModified: DATES.legal },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const, lastModified: DATES.privacy },
    ...cityRoutes,
    ...serviceCityRoutes,
    ...intentRoutes,
  ];

  return routes.map((route) => ({
    // ترميز percent-encoding للأحرف العربية في <loc> لمطابقة مواصفة sitemaps.org
    url: encodeURI(`${SITE_URL}${route.path}`),
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
