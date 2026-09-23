import type { Metadata } from "next";
import { SITE_URL, SITE_NAME, PHONE, EMAIL, WHATSAPP_NUMBER, SOCIAL } from "@/lib/site";

const DEFAULT_OG_IMAGE = `${SITE_URL}/og-cover-v2.jpg`;

/**
 * D171 — صورة معاينة مصمَّمة لكل صفحة (`public/og/<slug>.webp`، 1200×630، ≤120KB،
 * تُولَّد بـ `scripts/images/build-og.py` من `scripts/images/og-routes.json`).
 * الرقم `OG_VERSION` يكسر كاش واتساب/تيليجرام/فيسبوك عند إعادة التوليد.
 * إن لم يكن للمسار بطاقة (مسار جديد لم يُولَّد بعد) نعود إلى الغلاف الافتراضي.
 */
export const OG_VERSION = "1";
const OG_SLUGS: ReadonlySet<string> = new Set([
  "home", "about", "coffee-break-sharikat-jeddah", "contact", "diyafa-a3ras-jeddah", "diyafa-alyawm-alwatani",
  "diyafa-munasabat-abha", "diyafa-munasabat-dammam", "diyafa-munasabat-jeddah", "diyafa-munasabat-madinah",
  "diyafa-munasabat-makkah", "diyafa-munasabat-riyadh", "diyafa-munasabat-taif", "diyafa-munasabat-yanbu",
  "legal", "links", "locations", "locations__أبها", "locations__الدمام", "locations__الرياض", "locations__الطائف",
  "locations__المدينة-المنورة", "locations__جدة", "locations__مكة-المكرمة", "locations__ينبع",
  "mubashirin-qahwa-jeddah", "offerings", "portfolio", "privacy", "qahwajiin", "qahwajiin-abha", "qahwajiin-dammam",
  "qahwajiin-jeddah", "qahwajiin-madinah", "qahwajiin-makkah", "qahwajiin-riyadh", "qahwajiin-taif", "qahwajiin-yanbu",
  "qahwajiyat-sababat-jeddah", "sababin-qahwa-abha", "sababin-qahwa-dammam", "sababin-qahwa-jeddah",
  "sababin-qahwa-madinah", "sababin-qahwa-makkah", "sababin-qahwa-riyadh", "sababin-qahwa-taif", "sababin-qahwa-yanbu",
  "services", "social",
]);
export function ogImageFor(path: string): string | null {
  const slug = path === "/" ? "home" : decodeURIComponent(path).replace(/^\/|\/$/g, "").replace(/\//g, "__");
  return OG_SLUGS.has(slug) ? `${SITE_URL}/og/${encodeURI(slug)}.webp?v=${OG_VERSION}` : null;
}

export interface SEOProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogImageAlt?: string;
  /** أبعاد صورة المشاركة الحقيقية — إن غابت تُفترض 1200×630 (صورة الغلاف الافتراضية) */
  ogImageWidth?: number;
  ogImageHeight?: number;
  ogType?: "website" | "article" | "profile";
  twitterCard?: "summary" | "summary_large_image";
  keywords?: string[];
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
}

/**
 * Generates comprehensive Next.js Metadata for any page.
 * Includes Open Graph, Twitter Cards, canonical URL, and alternates.
 *
 * Usage in page.tsx:
 * ```ts
 * import { generatePageMetadata } from "@/components/SEO";
 *
 * export const metadata = generatePageMetadata({
 *   title: "خدماتنا",
 *   description: "...",
 *   path: "/services",
 * });
 * ```
 */
export function generatePageMetadata({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt = `${SITE_NAME} - ${title}`,
  ogImageWidth = 1200,
  ogImageHeight = 630,
  ogType = "website",
  twitterCard = "summary_large_image",
  keywords = [],
  noIndex = false,
  publishedTime,
  modifiedTime,
}: SEOProps): Metadata {
  const url = `${SITE_URL}${path}`;
  // D171: البطاقة المصمَّمة للصفحة لها الأولوية على صورة الهيرو المُمرَّرة من الصفحة
  const card = ogImageFor(path);
  if (card) { ogImage = card; ogImageWidth = 1200; ogImageHeight = 630; ogImageAlt = `${title} — ${SITE_NAME}`; }

  const defaultKeywords = [
    "كيف الضيافة",
    "خدمات الضيافة",
    "ضيافة فاخرة",
    "قهوة سعودية",
    "ضيافة الرياض",
    "ضيافة السعودية",
    "ضيافة في جميع أنحاء المملكة",
    "خدمات ضيافة كافة مدن السعودية",
    "صبابين قهوة",
    "صبابين قهوة جدة",
    "صبابين قهوة الرياض",
    "ضيافة زواجات VIP",
    "قهوجي",
    "Keif Al-Diafa",
    "Saudi hospitality",
  ];

  return {
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    alternates: {
      canonical: url,
      languages: {
        "ar-SA": url,
      },
    },
    openGraph: {
      type: ogType,
      siteName: SITE_NAME,
      locale: "ar_SA",
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      images: [
        {
          url: ogImage,
          width: ogImageWidth,
          height: ogImageHeight,
          alt: ogImageAlt,
          // النوع من الامتداد الحقيقي (كان "image/jpeg" ثابتاً حتى لصور WebP)
          type: /\.webp(\?|$)/i.test(ogImage) ? "image/webp" : /\.png(\?|$)/i.test(ogImage) ? "image/png" : "image/jpeg",
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: twitterCard,
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [ogImage],
      creator: "@keifaldiafa", // D154 — كان @keifdiafa (حرف ناقص)
      site: "@keifaldiafa",
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

/**
 * Site-wide constants for consistent SEO across the application.
 */
export const SEO_CONSTANTS = {
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  PHONE,
  EMAIL,
  WHATSAPP: WHATSAPP_NUMBER,
  INSTAGRAM: SOCIAL.instagram,
  ADDRESS: {
    // نشاط وطني يغطي كل المملكة (ليس محصوراً بمدينة)
    region: "المملكة العربية السعودية",
    country: "SA",
    countryName: "المملكة العربية السعودية",
  },
} as const;
