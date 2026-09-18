import IntentRoute, { intentMetadata } from "@/components/local/IntentRoute";

/** صفحة نيّة — المرحلة 7 (D156). المحتوى اليدوي: lib/intent/coffee-break-sharikat-jeddah.ts */
const SLUG = "coffee-break-sharikat-jeddah";
export const metadata = intentMetadata(SLUG);
export default function Page() { return <IntentRoute slug={SLUG} />; }
