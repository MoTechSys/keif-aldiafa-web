// Centralized Schema.org structured data generators
// كل الثوابت من المصدر المركزي — لا نسخ محلية.
import {
  SITE_URL,
  SITE_NAME,
  PHONE,
  EMAIL,
  LEGAL_NAME,
  UNIFIED_NUMBER,
  SAME_AS,
} from "@/lib/site";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: LEGAL_NAME,
    alternateName: "Keif Al-Diafa",
    identifier: UNIFIED_NUMBER,
    url: SITE_URL,
    email: EMAIL,
    logo: `${SITE_URL}/icon-512.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE,
      contactType: "customer service",
      availableLanguage: ["Arabic", "English"],
      areaServed: {
      "@type": "Country",
      name: "Saudi Arabia",
    },
    },
    // sameAs: صفحات ملفات تعريفية متحقق منها فقط — انظر SAME_AS في site.ts
    // (wa.me أُزيل: رابط فعل لا صفحة ملف — التعريف الرسمي في وثيقة Organization).
    sameAs: SAME_AS,
  };
}

export function generateLocalBusinessSchema() {
  // Service Area Business (SAB) — المقر الفعلي: جدة، التغطية: كل المملكة.
  // الفريق يتنقل لموقع العميل (لا العكس) — تصميم SAB مطابق لتوجيهات Google:
  //   — استخدام CateringService (فرع رسمي من FoodEstablishment → LocalBusiness) بدل FoodService الخاطئ (ليس LocalBusiness).
  //   — address بمستوى المدينة (جدة) دون streetAddress — تجنّب عنوان خاطئ في الخرائط.
  //   — geo بإحداثيات مركز جدة (recommended من Google — ترسّخ الإشارة المحلية بلا حصر التغطية).
  //   — جدة أول مدينة في areaServed (إشارة أولوية للسوق الأساسي).
  //   — foundingDate + founder لتعزيز E-E-A-T.
  const cities = [
    "جدة",
    "الرياض",
    "مكة المكرمة",
    "المدينة المنورة",
    "الدمام",
    "الطائف",
    "أبها",
    "ينبع",
  ].map((name) => ({ "@type": "City" as const, name }));

  return {
    "@context": "https://schema.org",
    "@type": "CateringService",
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    alternateName: "Keif Al-Diafa",
    description:
      "خدمات ضيافة فاخرة متنقلة في جميع مدن المملكة العربية السعودية — قهوة سعودية، شاي، تقديمات، وفريق ضيافة احترافي يصل إلى موقع مناسبتك. المقر الرئيسي: جدة.",
    url: SITE_URL,
    image: `${SITE_URL}/icon-512.png`,
    logo: `${SITE_URL}/icon-512.png`,
    telephone: PHONE,
    email: EMAIL,
    foundingDate: "2016",
    founder: { "@type": "Person", name: "فريق كيف الضيافة" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "جدة",
      addressRegion: "منطقة مكة المكرمة",
      addressCountry: "SA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 21.4858,
      longitude: 39.1925,
    },
    areaServed: [...cities, { "@type": "Country" as const, name: "Saudi Arabia" }],
    serviceArea: cities,
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    // priceRange (خاصية Recommended في وثيقة LocalBusiness الرسمية — أثرها
    // «عرض» فقط لا ترتيب): نطاق "$$-$$$$" = من المتوسط إلى الأفخم، بقرار
    // المالك 2026-09-01: «يظهر لكل الناس ولكل فئات المجتمع سوا فقير او غني VIP».
    // لم نستخدم "$" (توحي «رخيص جداً» وتناقض هوية الفخامة). مؤشر نسبي بلا
    // أرقام — لا يخالف قاعدة «لا أسعار». التوثيق: allpro تقرير 13.
    priceRange: "$$-$$$$",
    servesCuisine: "قهوة سعودية وضيافة عربية",
    sameAs: SAME_AS,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE,
      email: EMAIL,
      contactType: "customer service",
      availableLanguage: ["Arabic", "English"],
      areaServed: "SA",
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateWebPageSchema(page: {
  name: string;
  description: string;
  url: string;
  /** Preferred/representative image for this page (Google: primaryImageOfPage). */
  primaryImage?: string;
}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": page.url,
    name: page.name,
    description: page.description,
    url: page.url,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    inLanguage: "ar",
  };
  // Google recommends primaryImageOfPage to influence the representative image
  // shown in Search / Google Images / Discover.
  if (page.primaryImage) {
    schema.primaryImageOfPage = {
      "@type": "ImageObject",
      contentUrl: page.primaryImage,
      url: page.primaryImage,
    };
  }
  return schema;
}

/**
 * ImageGallery of ImageObject entries for a page's images.
 * `contentUrl` is REQUIRED by Google for image rich-result / badge eligibility
 * in Google Images. `caption`/`name` provide the descriptive text (this is where
 * captions live now that image:caption was removed from the sitemap spec).
 */
export function generateImageGallerySchema(
  pageUrl: string,
  images: { url: string; alt: string; title?: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "@id": `${pageUrl}#gallery`,
    url: pageUrl,
    inLanguage: "ar",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
    },
    // المُنشئ/المالك مرّة واحدة على مستوى المعرض (لا تكرار Organization لكل صورة).
    author: { "@id": `${SITE_URL}/#business` },
    copyrightHolder: { "@id": `${SITE_URL}/#business` },
    associatedMedia: images.map((img) => ({
      "@type": "ImageObject",
      contentUrl: img.url,
      url: img.url,
      // Google prefers width/height on ImageObject; images are standardized WebP.
      width: 1200,
      height: 900,
      name: img.title || img.alt,
      caption: img.alt,
      // مرجع بـ@id بدل تضمين Organization كاملة (يقلّص حجم HTML بشدة).
      creditText: SITE_NAME,
      creator: {
        "@type": "Organization",
        "@id": `${SITE_URL}/#business`,
        name: SITE_NAME,
        url: SITE_URL,
      },
      // إشارات حقوق النشر والترخيص (الحقول الاختيارية التي يرصدها GSC):
      // — license: رابط لـ/legal يوضح حقوق الاستخدام
      // — copyrightNotice: إشعار جميع الحقوق محفوظة للعلامة
      // — acquireLicensePage: صفحة تواصل للحصول على ترخيص (contact page)
      // — هذه تحسّن ظهور الصور في Google Images مع أيقونة licensable
      license: `${SITE_URL}/legal`,
      acquireLicensePage: `${SITE_URL}/contact`,
      copyrightNotice: `© ${new Date().getFullYear()} ${SITE_NAME}. جميع الحقوق محفوظة.`,
      copyrightYear: new Date().getFullYear(),
    })),
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  /** إذا مُرّرت مدينة محددة → areaServed = City (أقوى للسيو المحلي) */
  cityAr?: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      "@id": `${SITE_URL}/#business`,
    },
    areaServed: service.cityAr
      ? { "@type": "City", name: service.cityAr }
      : { "@type": "Country", name: "Saudi Arabia" },
    serviceType: service.serviceType || "Hospitality Services",
  };
}

/*
 * generateFAQSchema — حُذفت نهائياً (2026-09-01).
 * السبب الرسمي: Google أوقفت FAQ rich results — changelog:
 *   2026-05-08: "This feature will no longer appear in Google Search starting May 7, 2026"
 *   2026-06-15: حذف وثائق FAQPage نفسها.
 * القرار موثق (allpro تقرير 14) ومعتمد من المالك. المحتوى المرئي للأسئلة
 * بقي كما هو في الصفحات (قيمته للزائر ولـAI Overviews قائمة) — المحذوف
 * هو بث JSON-LD فقط.
 */

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: "Keif Al-Diafa",
    url: SITE_URL,
    inLanguage: "ar",
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon-512.png`,
      },
    },
  };
}
