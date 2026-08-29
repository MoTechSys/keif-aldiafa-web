import type { Metadata, Viewport } from "next";
import { Tajawal, Cairo, Marcellus, El_Messiri } from "next/font/google";
import "@/styles/globals.css";
// طبقة الفخامة — إضافية بالكامل ومحصورة داخل .luxe فلا تؤثر على بقية الصفحات
import "@/styles/luxe.css";
// طبقة العمق والحركة للصفحات الفرعية — تبني على luxe.css ولا تعدّلها
import "@/styles/local.css";
import {
  generateLocalBusinessSchema,
  generateWebSiteSchema,
  generateOrganizationSchema,
} from "@/lib/schema";
import GoogleAnalytics from "@/components/GoogleAnalytics";
// مزوّد الحركة الكسول (المرحلة 3): يخرج محرك motion من المسار الحرج — راجع MotionProvider.tsx
import MotionProvider from "@/components/MotionProvider";
import { SITE_URL } from "@/lib/site";


// أوزان مُقلّصة لما يُستخدم فعلاً فقط (مُدقّق بمسح كامل للكود 2026-08-29):
// كل وزن إضافي = ملف woff2 إضافي يُحمّل على الجوال ويؤخّر العرض.
// • Tajawal (نص الجسم): 300 (font-light) · 400 (افتراضي) · 500 · 700 · 800
//   (800 مطلوب: عناصر p/span في Footer/Navbar/الهيرو تستخدم fontWeight:800 على خط الجسم)
const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800"],
  display: "swap",
  variable: "--font-tajawal",
  preload: true,
});

// • Cairo (العناوين): 400 (نصوص ثانوية) · 700/800/900 (h1–h6 والهيرو)
//   — وزنا 300 و500 حُذفا: غير مستخدمين في أي ملف.
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "700", "800", "900"],
  display: "swap",
  variable: "--font-cairo",
  preload: true,
});

/* Marcellus — خط عرض لاتيني بروماني رفيع (serif).
   السبب: التحليل البصري لمراجع العميل أظهر أن كل تصميم فاخر يزاوج
   خط عرض serif مع sans للنص. الموقع كان يستخدم Cairo (sans) للجميع
   فبدا مسطّحاً. يُستخدم للأرقام والوسمات اللاتينية والميداليات فقط. */
/* ═══════════════════════════════════════════════════════════════════
   El Messiri — خط العناوين الفاخر. أُضيف بعد تشريح بكسلي للعنوان.
   ───────────────────────────────────────────────────────────────────
   العطب المقيس: العناوين كانت Cairo وزن 900. Cairo خط هندسي
   (geometric sans) سماكة حروفه ثابتة تماماً بلا أي تباين. النتيجة
   على شاشة الهاتف: كتلة سوداء متساوية السماكة تُقرأ كبنر تخفيضات
   في سوق، لا كعلامة ضيافة فاخرة.

   الاختبار: صُيّر نفس العنوان بثمانية خطوط عربية على 780px@2x
   وقُوبل بصرياً (Amiri, Aref Ruqaa, Reem Kufi, El Messiri, Rakkas,
   Marhey, Tajawal, Cairo). النتيجة:
     • Aref Ruqaa / Rakkas: خطّان نسخيان جميلان لكن قراءتهما تحتاج
       تركيزاً — يخالفان قاعدة الخمس ثوان.
     • Reem Kufi: كوفي هندسي، تشابك الحروف يربك العين.
     • Marhey: مستدير مرح — عكس الفخامة تماماً.
     • Amiri: أنيق جداً لكن رفيع، يضعف على خلفية صورة.
     • El Messiri: ✅ فيه تباين سماكة حقيقي (نهايات مدبّبة وأعناق
       رفيعة) فيقرأه العين كخطّ محفور، ومع ذلك مقروء في لمحة.
   ⇒ El Messiri للعناوين، Tajawal للنصّ. مزاوجة تباين لا تسطيح.
   ═══════════════════════════════════════════════════════════════════ */
// وزن 700 فقط — كل استخدامات El Messiri في luxe.css/local.css بوزن 700
// (أوزان 400/500/600 كانت تُحمّل بلا أي استخدام — 3 ملفات خط مهدورة).
// preload:false — يُستخدم في الصفحات الفرعية فقط لا في الرئيسية.
const elMessiri = El_Messiri({
  subsets: ["arabic", "latin"],
  weight: ["700"],
  display: "swap",
  variable: "--font-messiri",
  preload: false,
});

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-marcellus",
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
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "48x48" },
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
    { media: "(prefers-color-scheme: dark)", color: "#0f0f0f" },
    { media: "(prefers-color-scheme: light)", color: "#0f0f0f" },
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
      className={`scroll-smooth ${tajawal.variable} ${cairo.variable} ${marcellus.variable} ${elMessiri.variable}`}
    >
      <head>
        {/* Google tag (gtag.js) — محقون مباشرة في <head> (ليظهر في HTML المُقدّم فوراً
            ويُكتشف من فحص Google Ads الآلي — يحل تحذير "لا تتوفر علامة تتبّع").
            async يحمي الأداء. GA4 + Ads معاً. التتبّع المتقدّم (Pixels + التحويلات) يبقى في GoogleAnalytics.
            استثناء مقصود من قاعدة next/script: الفحص الآلي لا يرى سكربتات
            تُحقن بعد التفاعل (كوميت af96b9a في الأرشيف يوثّق العطب الأصلي). */}
        {/* eslint-disable-next-line @next/next/next-script-for-ga */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11081441847"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-ZZHYDVVMT1');gtag('config','AW-11081441847');`,
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
        <MotionProvider>{children}</MotionProvider>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
