import IntentRoute, { intentMetadata } from "@/components/local/IntentRoute";

/** صفحة نيّة — المرحلة 7 (D156). المحتوى اليدوي: lib/intent/qahwajiin.ts */
const SLUG = "qahwajiin";
export const metadata = intentMetadata(SLUG);
export default function Page() { return <IntentRoute slug={SLUG} />; }
