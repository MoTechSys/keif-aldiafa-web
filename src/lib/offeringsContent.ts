/**
 * offeringsContent.ts — بيانات صفحة التقديمات والمعدات (المرحلة 5 — D132).
 *
 * الهيكل = النموذج v6.9 build_offerings (phero → chips → أقسام .cat بشبكة .items
 * → معدات → توزيعات → أسئلة → تواصل). الصور = الكتالوج فقط (D111): النموذج كان
 * يستخدم 109 صورة منتجات قديمة غير موجودة في الكتالوج، فأُعيد تكوين الفئات على
 * ما يستهدفه الكتالوج فعلاً لـ /offerings (102 صورة حقيقية + 32 زخرفية ستوك).
 *
 * قواعد:
 *  - كل صورة تُستخدم مرة واحدة في الصفحة (يُفحص عند التحميل).
 *  - كل صورة يجب أن يستهدف كتالوجها /offerings (يُفحص عند التحميل).
 *  - الحقيقية أولاً في كل فئة؛ الزخرفية (publish=decorative) تُكمّل الفئات
 *    التي لا تكفيها صور الأعمال، وهي مستثناة من خريطة الصور والـ schema أصلاً.
 *  - المعرّفات (#hot #cold #dates #sweets #snacks #sandwiches #fruits #nuts
 *    #buffet #equipment #distributions) هي ما تربط إليه مربعات الرئيسية — لا تُغيَّر.
 *  - التسمية على البطاقة = حقل «service» أو «title» من الكتالوج بعد إزالة
 *    بادئة الفئة («معدات — ») ولاحقات الترقيم/الزخرفة («— 2»، «— صورة زخرفية»،
 *    «(كتالوج)») — تشذيب لا تسمية.
 */
import { getImageById, type CatalogImage } from "@/lib/imageCatalog";

export type OfferingItem = { img: CatalogImage; name: string; desc: string };
export type OfferingCategory = {
  id: string; label: string; desc: string; items: OfferingItem[];
  /** نص واتساب لزر آخر القسم */
  wa: string; waLabel: string;
  /** ملاحظة صغيرة تحت الرأس (اختيارية) */
  note?: string;
};

function pick(id: number): CatalogImage {
  const im = getImageById(id);
  if (!im) throw new Error(`offeringsContent: صورة #${id} غير موجودة في الكتالوج`);
  if (!im.pages.includes("/offerings")) throw new Error(`offeringsContent: صورة #${id} لا يستهدف كتالوجها /offerings`);
  return im;
}

/** تشذيب تسمية الكتالوج للبطاقة (لا يخترع اسماً — يزيل بادئة الفئة ولاحقات الترقيم) */
export function tidy(s: string): string {
  return s
    .replace(/^معدات — /, "")
    .replace(/ — كيف الضيافة.*$/, "")
    .replace(/ — صورة زخرفية.*$/, "")
    .replace(/ — ستوك$/, "")
    .replace(/ \(كتالوج\)/, "")
    .replace(/ \(مكررة\)$/, "")
    .replace(/ — \d+$/, "")
    .trim();
}

const waFor = (label: string) =>
  `السلام عليكم، أرغب بإضافة «${label}» لتقديمات مناسبة:\nالمدينة: \nالتاريخ: \nعدد الضيوف: `;

/** عنصر من الكتالوج: الاسم = service مشذّباً، الوصف = place أو وصف الفئة */
function item(id: number, fallbackDesc: string): OfferingItem {
  const img = pick(id);
  const name = tidy(img.service || img.title);
  // place «استوديو/—/تجهيز» ليس سياقاً يفيد الضيف → وصف الفئة
  const place = img.place && !/^(—|-|استوديو|تجهيز)$/.test(img.place.trim()) ? img.place : "";
  const desc = img.decorative || !place ? fallbackDesc : place;
  return { img, name, desc };
}

function cat(id: string, label: string, desc: string, ids: number[], note?: string): OfferingCategory {
  return { id, label, desc, items: ids.map((i) => item(i, desc)), wa: waFor(label), waLabel: `اطلب ${label}`, note };
}

export const OFFERING_CATEGORIES: OfferingCategory[] = [
  cat("hot", "المشروبات الحارة", "قهوة عربية وتركية وشاي بأنواعه وسحلب وكابتشينو — تُقدَّم على صوانٍ ذهبية بيد القهوجي",
    [237, 108, 109, 232, 233, 254, 255, 217]),
  cat("cold", "المشروبات الباردة", "عصائر طبيعية وقهوة مثلجة وكركديه وموهيتو وتمر هندي — منعشة وتليق بالمناسبات",
    [110, 249, 295, 307, 302, 290, 297]),
  cat("dates", "التمور الفاخرة", "تمور محشوة ومزينة، صواني ونخلات تمر للتقديم — أجود التمور السعودية",
    [247, 251, 213, 219, 242, 224, 221, 243, 223, 285, 291, 313]),
  cat("sweets", "الحلويات", "بقلاوة وكنافة وحلا كاسات وشوكولاتة — شرقية وغربية على بوفيهات وصوانٍ ذهبية",
    [234, 236, 246, 226, 218, 228, 252, 257, 298, 293]),
  cat("pastry", "المعجنات", "فطائر ومناقيش وسمبوسة وكرواسون — طازجة على ستاندات التقديم",
    [230, 220, 253, 300, 288, 284, 294]),
  cat("snacks", "السناكات والمقبلات", "ميني برجر وكانابيه وبيتزا صغيرة ومقبلات مقرمشة — لقيمات تليق بالاستقبالات",
    [235, 225, 250, 231, 283, 301, 289, 292, 299, 303, 304, 306]),
  cat("sandwiches", "السندوتشات", "باقيت تركي وتونة بالسمسم وبروسكيتا — محضّرة بعناية وتُقدَّم على صوانٍ أنيقة",
    [245, 256, 286, 287, 309, 310, 311, 312]),
  cat("fruits", "الفواكه", "فواكه موسمية مقطّعة ومقدَّمة بأناقة إلى جانب الحلا",
    [214, 227, 280, 308, 305, 296]),
  cat("nuts", "المكسرات", "تمور ومكسرات على صوانٍ ذهبية — تكمّل ركن القهوة", [239],
    "المكسرات والغرانولا من منتجات شركة شريكة معتمدة، وتُقدَّم بتغليفها الأصلي أو في صحون التقديم."),
  cat("buffet", "أركان الضيافة والبوفيهات", "ركن قهوة ذهبي، طاولة سدو متنقلة، بوفيه بثيم — نجهّز الركن كاملاً ونديره بطاقمنا",
    [97, 98, 103, 104, 138, 13, 24, 216, 238, 240, 244, 248]),
];

/** معدات التقديم — 24 قطعة مميّزة من 47 في الكتالوج (بلا اللقطات المكرّرة «— 2») */
export const EQUIPMENT_IDS = [185, 199, 206, 196, 186, 166, 190, 194, 195, 198, 187, 191, 210, 211, 209, 212, 181, 184, 188, 189, 201, 203, 174, 175];
export const EQUIPMENT: OfferingItem[] = EQUIPMENT_IDS.map((id) => {
  const img = pick(id);
  return { img, name: tidy(img.service || img.title), desc: "ضمن الحزمة أو بحسب الطلب" };
});
export const EQUIPMENT_TOTAL = 47;
export const EQUIPMENT_WA = "السلام عليكم، أرغب بالاستفسار عن معدات التقديم (دلال، فناجين، استاندات) لمناسبة:\nالمدينة: \nالتاريخ: ";

/** التوزيعات وهدايا الضيوف — لا صور توزيعات مستقلة في الكتالوج؛ القسم نصي بزر واتساب (لا صور مكرّرة) */
export const DISTRIBUTIONS_WA = "السلام عليكم، أرغب بعرض سعر لتوزيعات VIP لمناسبة:\nالمدينة: \nالتاريخ: \nالعدد: ";

export const OFFERINGS_HERO = { mobile: pick(235), desktop: pick(218) };
export const OFFERINGS_HERO_WA = "السلام عليكم، أرغب بعرض سعر لتقديمات ضيافة لمناسبة:\nالمدينة: \nالتاريخ: \nعدد الضيوف: \nالأصناف المطلوبة: ";
export const OFFERINGS_CONTACT_WA = "السلام عليكم، أرغب بعرض سعر لتقديمات ضيافة:\nالمدينة: \nالتاريخ: \nعدد الضيوف: \nالأصناف: ";

export const FAQ_OFFERINGS = [
  { q: "هل التقديمات تشمل المعدات؟", a: "نعم — الدلال والفناجين والكاسات والصواني والاستاندات ضمن الحزمة أو بحسب طلبك." },
  { q: "هل يمكن تخصيص قائمة التقديمات؟", a: "نعم. اختر من الأصناف أعلاه أو أرسل لنا ما تفضّله ونرتّبه." },
  { q: "هل يمكن طباعة شعار الجهة على التوزيعات؟", a: "نعم للتوزيعات والتغليف بحسب مدة التحضير." },
  { q: "ما مصدر الحلويات والمكسرات؟", a: "نعمل مع موردين ومصانع معتمدة (بعض المنتجات بعلامات شركات شريكة) ونختار الأصناف حسب المناسبة." },
];

/** الأصناف الحقيقية (غير الزخرفية) — للـ schema وخريطة الصور */
export const OFFERINGS_REAL_IMAGES: CatalogImage[] = [
  ...OFFERING_CATEGORIES.flatMap((c) => c.items.map((i) => i.img)),
  ...EQUIPMENT.map((e) => e.img),
  OFFERINGS_HERO.mobile, OFFERINGS_HERO.desktop,
].filter((im) => !im.decorative);

/* حارس: لا تكرار لصورة في الصفحة */
{
  const all = [...OFFERING_CATEGORIES.flatMap((c) => c.items.map((i) => i.img.src)), ...EQUIPMENT.map((e) => e.img.src)];
  const dup = all.find((s, i) => all.indexOf(s) !== i);
  if (dup) throw new Error(`offeringsContent: صورة مكرّرة في الصفحة: ${dup}`);
}
