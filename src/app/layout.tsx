import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
// شِل النموذج v6.9 (المرحلة 2 — D115): المتغيرات + الهيدر + الفوتر + الأزرار + المعرض — 1:1
import "@/styles/v7.css";
import {
  generateLocalBusinessSchema,
  generateWebSiteSchema,
  generateOrganizationSchema,
} from "@/lib/schema";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { SITE_URL } from "@/lib/site";


/* الخطوط (المرحلة 2 — D115): ثلاثة ملفات woff2 محلية مُقلَّصة من النموذج
   (allpro/prototype-home/fonts — build/fonts.py): Amiri 700 ≈42KB للعناوين ·
   Noto Naskh Arabic متغيّر 400–700 ≈21KB للنص · Marcellus ≈9KB للاتيني.
   بدل Tajawal/Cairo/El Messiri من Google Fonts (4 عائلات × أوزان = 12+ ملفاً).
   adjustFontFallback:false — الخطوط عربية والقياس الآلي مبني على Arial/Times فقط. */
const amiri = localFont({
  src: "../../public/fonts/amiri-700.woff2",
  weight: "700",
  display: "swap",
  variable: "--font-amiri",
  preload: true,
  adjustFontFallback: false,
});
const naskh = localFont({
  src: "../../public/fonts/noto-naskh.woff2",
  weight: "400 700",
  display: "swap",
  variable: "--font-naskh",
  preload: true,
  adjustFontFallback: false,
});
const marcellus = localFont({
  src: "../../public/fonts/marcellus.woff2",
  weight: "400",
  display: "swap",
  variable: "--font-marcellus",
  preload: false,
});

export const metadata: Metadata = {
  title: {
    default: "كيف الضيافة | خدمات الضيافة الفاخرة في المملكة",
    template: "%s | كيف الضيافة",
  },
  description:
    "كيف الضيافة - أفضل صبابين قهوة وصبابات زواجات في المملكة. نقدم ضيافة مناسبات VIP، قهوجية ومباشرين بزي فاخر، وتجهيز طاولات استقبال ملكية لكافة المحافل.",
  keywords: [
    "كيف الضيافة",
    "خدمات الضيافة",
    "ضيافة فاخرة",
    "قهوة سعودية",
    "ضيافة الرياض",
    "صبابين قهوة",
    "صبابات زواجات",
    "قهوجية ومباشرين",
    "مباشرات ضيافة",
    "ضيافة مناسبات VIP",
    "تجهيز طاولات استقبال",
    "عدة ضيافة ملكية",
    "تقديمات فاخرة",
    "معدات ضيافة",
    "حفلات",
    "مناسبات",
    "ضيافة السعودية",
    "Keif Al-Diafa",
    "Saudi hospitality",
    "luxury catering",
  ],
  metadataBase: new URL(SITE_URL),
  verification: {
    // ندعم الرمزين معاً (Search Console القديم + الجديد)
    google: [
      "qiyji6ldzrSpPA0KolUsquX_SF3BDLfiphfkoXJibro",
      "r2i2igipi3DvgQTW6POkWgw-GhT5E0zXWFrKnm9ilfY",
    ],
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "ar-SA": SITE_URL,
    },
  },
  openGraph: {
    type: "website",
    siteName: "كيف الضيافة",
    locale: "ar_SA",
    title: "كيف الضيافة | خدمات الضيافة الفاخرة في المملكة",
    description:
      "منصة تجربة فاخرة تعكس جودة وفخامة خدمات الضيافة السعودية - قهوة، شاي، تقديمات راقية وفريق احترافي.",
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/og-cover-v2.jpg`,
        width: 1200,
        height: 630,
        alt: "كيف الضيافة - خدمات الضيافة الفاخرة",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "كيف الضيافة | خدمات الضيافة الفاخرة في المملكة",
    description:
      "منصة تجربة فاخرة تعكس جودة وفخامة خدمات الضيافة السعودية",
    images: [`${SITE_URL}/og-cover-v2.jpg`],
    creator: "@keifdiafa",
  },
  robots: {
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
  manifest: "/manifest.json",
  icons: {
    // ترتيب مقصود: ICO أولاً — تحديث Google 2026-08-28 حصر صيغ favicon
    // المدعومة في البحث بـ BMP/GIF/ICO/PNG/JPEG/PPM/TIFF (SVG غير مدعومة لجوجل؛
    // تبقى ثانيةً للمتصفحات الحديثة فقط). الملف أُعيد توليده فعلياً بمقاسات
    // 16+32+48 (كان يعلن 48x48 والملف يحوي 16+32 فقط). allpro تقرير 15.
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "كيف الضيافة",
    "mobile-web-app-capable": "yes",
    "application-name": "كيف الضيافة",
    "format-detection": "telephone=no",
  },
  category: "hospitality",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0D0D0D" },
    { media: "(prefers-color-scheme: light)", color: "#0D0D0D" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`scroll-smooth ${amiri.variable} ${naskh.variable} ${marcellus.variable}`}
    >
      <head>
        {/* Google tag (gtag.js) — GA4 + Ads معاً (D141):
            • مقتطف الإعداد (dataLayer + gtag('config', G-… / AW-…)) يبقى في <head> حرفياً
              في HTML المُقدّم — هو ما يفحصه Google Ads آلياً لاكتشاف العلامة (تحذير
              «لا تتوفر علامة تتبّع» — كوميت af96b9a في الأرشيف). أي استدعاء gtag() قبل
              التحميل يُصفّ في dataLayer ويُرسَل عند وصول المكتبة (لا تُفقد تحويلات).
            • المُحمِّل (~350KB JS · ≈1.1s حجب للخيط الرئيسي على الجوال) يُحقَن بعد
              اكتمال تحميل الصفحة + 2.5s ثم أول خمول للخيط الرئيسي (requestIdleCallback ≤3s)،
              أو عند أول تفاعل (أسبق الاثنين) — لكل زائر،
              لا بعد التفاعل فقط (ذلك ما عطّل الاكتشاف سابقاً). يقيس Core Web Vitals
              للزائر الحقيقي (INP/TBT) لا Lighthouse وحده.
            استثناء مقصود من قاعدة next/script (السبب أعلاه). */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-ZZHYDVVMT1');gtag('config','AW-11081441847');
(function(){var d=0;function l(){if(d)return;d=1;var s=document.createElement('script');s.async=true;s.src='https://www.googletagmanager.com/gtag/js?id=AW-11081441847';document.head.appendChild(s);}
var ev=['pointerdown','keydown','touchstart','scroll'];function u(){ev.forEach(function(e){removeEventListener(e,u,{passive:true})});l();}
ev.forEach(function(e){addEventListener(e,u,{passive:true})});
function q(){setTimeout(function(){(window.requestIdleCallback||function(f){f()})(l,{timeout:3000});},2500);}
if(document.readyState==='complete'){q();}else{addEventListener('load',q);}})();`,
          }}
        />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateLocalBusinessSchema()),
          }}
        />
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebSiteSchema()),
          }}
        />
      </head>
      <body className="bg-luxury-black text-cream antialiased">
        {/* Skip to main content - Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-[100] focus:px-6 focus:py-3 focus:rounded-full focus:text-[#0f0f0f] focus:font-bold focus:outline-none"
          style={{ background: "linear-gradient(135deg, #B8860B, #D4A017)" }}
        >
          تخطي إلى المحتوى الرئيسي
        </a>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
