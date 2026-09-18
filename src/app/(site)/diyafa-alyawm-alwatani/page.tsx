import IntentRoute, { intentMetadata } from "@/components/local/IntentRoute";

/** صفحة نيّة — المرحلة 7 (D156). المحتوى اليدوي: lib/intent/diyafa-alyawm-alwatani.ts */
const SLUG = "diyafa-alyawm-alwatani";
export const metadata = intentMetadata(SLUG);
export default function Page() { return <IntentRoute slug={SLUG} />; }
