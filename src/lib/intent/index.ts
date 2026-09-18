import mubashirin from "./mubashirin-qahwa-jeddah";
import qahwajiyat from "./qahwajiyat-sababat-jeddah";
import type { IntentContent } from "./types";

/**
 * سجلّ صفحات النيّة (D156) — مفتاح = slug. كل إدخال هنا يجب أن يقابله
 * إدخال في `localPages.ts → INTENT_PAGES` (الخريطة/الروابط/الكتالوج) ومجلد
 * مسار في `app/(site)/<slug>/page.tsx`.
 */
export const INTENT_CONTENT: Record<string, IntentContent> = Object.fromEntries(
  [mubashirin, qahwajiyat].map((c) => [c.slug, c])
);
