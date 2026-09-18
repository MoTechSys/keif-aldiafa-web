import type { LocalFaq, LocalLink, LocalPackage, LocalRole } from "@/lib/localPage";

/**
 * IntentContent — محتوى صفحة نيّة مستقلة مكتوب يدوياً (D156 · المرحلة 7).
 * ملف واحد لكل slug في `src/lib/intent/` — لا قوالب نصية مشتركة بين الصفحات
 * (هدف التشابه ≤45%). الأرقام المسموحة فقط: +500 · منذ 2016 · رقم الواتساب.
 * الصور من الكتالوج فقط (D111): `images.ids` تُختار أولاً بمعرّفاتها، ثم
 * `images.paths` (المستهدِفة للصفحة → المستعارة)، ثم احتياط tier≤3.
 */
export interface IntentGuide { h3: string; ps: string[] }

export interface IntentContent {
  slug: string;
  /** مفتاح المدينة في CITIES — null للصفحات العامة (بلا مدينة) */
  city: string | null;
  /** الاسم كما يكتبه الباحث (H1 الأول · بطاقات الروابط) */
  ar: string;
  short: string;
  serviceAr: string;
  kicker: string;
  h1: [string, string];
  title: string;
  desc: string;
  intro: string;
  keywords: string[];
  /** فئات العملاء في الهيرو (3) — افتراضي القالب إن غابت */
  pts?: string[];
  /** الشارة الثالثة في الهيرو — افتراضي «كل أحياء {المدينة}» */
  badge3?: string;
  worksH2?: [string, string];
  roles: LocalRole[];
  /** «الدليل» — أقسام معرفية عميقة (h3 + فقرات) تُعرض بعد الترتيبات */
  guide: IntentGuide[];
  guideH2: [string, string];
  guideP?: string;
  packages: LocalPackage[] | null;
  packagesP?: string;
  why: string[];
  faqs: LocalFaq[];
  districtsH2?: string;
  districts?: string[];
  /** بدل الأحياء: روابط (المدن الثماني للصفحات العامة) */
  districtLinks?: LocalLink[];
  related: { h2: [string, string]; links: LocalLink[] };
  wa: string;
  images: { ids?: number[]; paths: string[]; seed: number; pool: number };
  schema: { serviceName: string; serviceType: string };
}
