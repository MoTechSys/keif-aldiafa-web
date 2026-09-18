import IntentRoute, { intentMetadata } from "@/components/local/IntentRoute";

/** قهوجيات وصبابات ومباشرات جدة — صفحة نيّة نسائية (D156). المحتوى: lib/intent/qahwajiyat-sababat-jeddah.ts */
const SLUG = "qahwajiyat-sababat-jeddah";
export const metadata = intentMetadata(SLUG);
export default function Page() { return <IntentRoute slug={SLUG} />; }
