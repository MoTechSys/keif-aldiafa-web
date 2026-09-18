import mubashirin from "./mubashirin-qahwa-jeddah";
import qahwajiyat from "./qahwajiyat-sababat-jeddah";
import watani from "./diyafa-alyawm-alwatani";
import qahwajiin from "./qahwajiin";
import coffee from "./coffee-break-sharikat-jeddah";
import a3ras from "./diyafa-a3ras-jeddah";
import type { IntentContent } from "./types";

/**
 * سجلّ صفحات النيّة (D156) — مفتاح = slug. كل إدخال هنا يجب أن يقابله
 * إدخال في `localPages.ts → INTENT_PAGES` (الخريطة/الروابط/الكتالوج) ومجلد
 * مسار في `app/(site)/<slug>/page.tsx`.
 */
export const INTENT_CONTENT: Record<string, IntentContent> = Object.fromEntries(
  [mubashirin, qahwajiyat, watani, qahwajiin, coffee, a3ras].map((c) => [c.slug, c])
);
