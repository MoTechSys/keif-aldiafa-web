import type { LocalFaq, LocalPackage, LocalRole } from "@/lib/localPage";
import type { IntentGuide } from "@/lib/intent/types";

/**
 * نص صفحة (خدمة × مدينة) مكتوب يدوياً (D160 · المرحلة 7):
 * كل مدينة ملف واحد يحوي الخدمات الثلاث بزاوية مُقاسة من GSC (ما يكتبه الباحث في تلك المدينة)
 * وبمفردات المدينة نفسها — لا قالب ${ar}. الهدف المُقاس: تشابه الشقيقات ≤ 45% (كان 88–95%).
 * الأرقام المسموحة فقط: +500 · منذ 2016 · واتساب (data/proof.json). الإملاء المُقاس (S15).
 */
export interface LocalSvcText {
  kicker: string;
  h1: [string, string];
  title: string;
  desc: string;
  intro: string;
  /** ثلاث كلمات في الهيرو تحت العنوان */
  pts: [string, string, string];
  /** الشارة الثالثة في الهيرو */
  badge3: string;
  /** فقرة قسم الخدمات (اختيارية) */
  servicesP?: string;
  roles: LocalRole[];
  packages: LocalPackage[];
  packagesP?: string;
  guideH2: [string, string];
  guideP?: string;
  guide: IntentGuide[];
  why: string[];
  faqs: LocalFaq[];
  districtsH2?: string;
  /** صور مختارة يدوياً (معرّفات الكتالوج) تتقدّم على المجمّع الآلي */
  imageIds?: number[];
}
export type CityLocalText = Record<"sababin-qahwa" | "qahwajiin" | "diyafa-munasabat", LocalSvcText>;
