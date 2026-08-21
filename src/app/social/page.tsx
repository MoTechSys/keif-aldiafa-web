import { Metadata } from "next";
import SocialClient from "./SocialClient";
import { generatePageMetadata } from "@/components/SEO";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/schema";

const SITE_URL = "https://keifaldiafa.com";

export const metadata: Metadata = generatePageMetadata({
  title: "حسابات كيف الضيافة على مواقع التواصل — شاهد أعمالنا",
  description:
    "تابع كيف الضيافة على إنستغرام وتيك توك وسناب شات وإكس وفيسبوك، وشاهد ضيافتنا في المناسبات. امسح الباركود للوصول إلى كل حساباتنا، أو تواصل واتساب +966508252134.",
  path: "/social",
  keywords: [
    "كيف الضيافة انستقرام",
    "كيف الضيافة تيك توك",
    "كيف الضيافة سناب",
    "حسابات كيف الضيافة",
    "باركود كيف الضيافة",
    "صور ضيافة مناسبات",
  ],
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "الرئيسية", url: SITE_URL },
  { name: "مواقع التواصل", url: `${SITE_URL}/social` },
]);

const webPageSchema = generateWebPageSchema({
  name: "مواقع التواصل الاجتماعي - كيف الضيافة",
  description:
    "حسابات كيف الضيافة الرسمية على إنستغرام وتيك توك وسناب شات وإكس وفيسبوك، مع باركود للوصول السريع",
  url: `${SITE_URL}/social`,
});

export default function SocialPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <SocialClient />
    </>
  );
}
