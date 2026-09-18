import IntentRoute, { intentMetadata } from "@/components/local/IntentRoute";

/** صفحة نيّة — المرحلة 7 (D156). المحتوى اليدوي: lib/intent/diyafa-a3ras-jeddah.ts */
const SLUG = "diyafa-a3ras-jeddah";
export const metadata = intentMetadata(SLUG);
export default function Page() { return <IntentRoute slug={SLUG} />; }
