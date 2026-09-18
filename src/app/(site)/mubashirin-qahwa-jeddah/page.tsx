import IntentRoute, { intentMetadata } from "@/components/local/IntentRoute";

/**
 * مباشرين قهوة جدة (W1) — صفحة نيّة (D97 → D156). المحتوى اليدوي في
 * lib/intent/mubashirin-qahwa-jeddah.ts؛ الميتا والـ JSON-LD من مصنع IntentRoute.
 */
const SLUG = "mubashirin-qahwa-jeddah";
export const metadata = intentMetadata(SLUG);
export default function Page() { return <IntentRoute slug={SLUG} />; }
