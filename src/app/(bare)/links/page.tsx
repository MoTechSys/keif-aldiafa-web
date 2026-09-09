import type { Metadata } from "next";
import Link from "next/link";
import ContactChannels from "@/components/pages/ContactChannels";
import ChannelFx from "@/components/pages/ChannelFx";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/schema";
import { SITE_URL, UNIFIED_NUMBER, WHATSAPP_DISPLAY } from "@/lib/site";

/**
 * /links — صفحة الروابط المستقلة (link-in-bio للباركود الموحّد) = النموذج v6.9 build_links 1:1 (D101):
 * الشعار + البطاقات التسع فقط — بلا هيدر/فوتر/واتساب طافٍ/معرض/نموذج. مسار **جديد** (إضافة لا تغيير slug).
 * الفهرسة: النموذج يضع noindex؛ PLAN §المرحلة 5 قرر «تُفهرس (هي وجهة الباركود المطبوع)» — نتبع PLAN (D145).
 */
const PATH = "/links";
const URL = `${SITE_URL}${PATH}`;
const TITLE = "روابط كيف الضيافة — تواصل معنا";
const DESC = `كل قنوات التواصل مع كيف الضيافة في صفحة واحدة: واتساب ${WHATSAPP_DISPLAY}، اتصال، إنستغرام، تيك توك، سناب شات، إكس، فيسبوك، خرائط Google والبريد.`;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: URL },
  openGraph: { title: "روابط كيف الضيافة", description: "اختر قناة التواصل الأنسب لك — واتساب هو الأسرع.", url: URL, type: "website", images: [{ url: `${SITE_URL}/og-cover-v2.jpg`, width: 1200, height: 630, alt: "كيف الضيافة" }] },
};

const schemas = [
  generateBreadcrumbSchema([{ name: "الرئيسية", url: SITE_URL }, { name: "روابطنا", url: URL }]),
  generateWebPageSchema({ name: TITLE, description: DESC, url: URL }),
];

export default function LinksPage() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <ContactChannels src="links" />
      <ChannelFx />
      <footer className="lfoot">
        <Link href="/">الموقع الرئيسي</Link>
        <span aria-hidden="true">·</span>
        <span>© 2026 كيف الضيافة · الرقم الوطني الموحّد <span className="num-ltr">{UNIFIED_NUMBER}</span></span>
      </footer>
    </>
  );
}
