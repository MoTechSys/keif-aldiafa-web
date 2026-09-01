import { MetadataRoute } from "next";
import { CITIES } from "@/lib/cities";
import { LOCAL_PAGES, INTENT_PAGES, localSlug } from "@/lib/localPages";
import { SITE_URL } from "@/lib/site";


// خريطة تواريخ lastmod ثابتة — تعكس آخر تعديل حقيقي لكل قسم (من سجل git).
// ثابتة ومتنوّعة: لا تتغيّر عند كل زحف = صادقة مع Google. تُحدّث يدوياً عند تعديل قسم.
// ملاحظة: Vercel يستنسخ git بعمق 1 (shallow)، فلا يُعوّل على git log per-file وقت البناء.
const DATES = {
  home: "2026-07-08", // آخر تعديل: الفوتر + روابط المدن + gtag head
  services: "2026-07-06",
  offerings: "2026-07-06",
  portfolio: "2026-07-06",
  about: "2026-07-06",
  contact: "2026-07-06",
  locations: "2026-07-06",
  cityPage: "2026-07-06",
  serviceCity: "2026-07-06",
  legal: "2026-07-08", // صفحة قانونية أُنشئت 2026-07-08
  intentPages: "2026-09-01", // صفحات النوايا المستقلة (W1) — أولها مباشرين قهوة جدة
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
    { path: "/social", priority: 0.6, changeFrequency: "monthly" as const, lastModified: DATES.contact },
    { path: "/legal", priority: 0.3, changeFrequency: "yearly" as const, lastModified: DATES.legal },
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
