/**
 * portfolioContent.ts — بيانات معرض الأعمال (المرحلة 5 — D132).
 *
 * الهيكل = النموذج v6.9 build_portfolio (phero → أزرار تصفية → شبكة .pgrid بوسم
 * لكل لقطة → ملاحظات → تواصل). الصور = الكتالوج فقط (D111): كل ما يستهدف
 * /portfolio بـ publish=yes (80 لقطة، مستويات 1–3) + لقطات الزواجات (قاعات أفراح،
 * المستوى 3) + التجهيزات (المستوى 4) التي يستهدف كتالوجها صفحات مبنية أخرى.
 *
 * التصنيف للتصفية يُشتق من حقول الكتالوج نفسها (sector · tier · place) لا من اجتهاد:
 *   government = المستوى 1 أو قطاع حكومي/وزارة/أمانة/جامعة/أكاديمي/حج وعمرة
 *   corporate  = بقية أعمال /portfolio (شركات، فنادق، تجزئة، عقاري، سيارات…)
 *   private    = مكان الصورة قاعة أفراح/زواج (place/title)
 *   equipment  = المستوى 4 (بوفيهات ومعدات) من /offerings
 * الترتيب: تداخل الأنواع بالتناوب كما في النموذج ليتنوّع أول صف.
 * قاعدة النموذج محفوظة: أعمال الجهات الحكومية تُعرض بلا شعارات مختلقة — الوسم
 * على البطاقة هو نوع الجهة، والعنوان من الكتالوج (يذكر الجهة كما وثّقها المالك).
 */
import { getAllImages, type CatalogImage } from "@/lib/imageCatalog";

export type ShotType = "government" | "corporate" | "private" | "equipment";
export type Shot = { img: CatalogImage; type: ShotType; tag: string };

const GOV = /حكومي|وزارة|أمانة|جامعة|أكاديمي|منتدى|مؤتمر وطني|مناسبة وطنية|حج وعمرة|شركة حكومية|هيئة/;
const WEDDING = /زواج|أفراح|عرس/;
const TAG: Record<ShotType, string> = { government: "فعالية رسمية", corporate: "شركة", private: "مناسبة خاصة", equipment: "تجهيزات" };

const all = getAllImages().filter((im) => !im.decorative);

const portfolioSet = all.filter((im) => im.pages.includes("/portfolio"));
const weddingSet = all.filter((im) => im.tier === 3 && WEDDING.test(`${im.place} ${im.title}`) && !im.pages.includes("/portfolio"));
const equipmentSet = all.filter((im) => im.tier === 4 && /بوفيه|ركن|كاونتر|طاولة|خيمة|تجهيز/.test(im.service) && !/كتالوج/.test(im.service));

function typeOf(im: CatalogImage): ShotType {
  if (im.tier === 4) return "equipment";
  if (im.tier === 1 || GOV.test(im.category)) return "government";
  if (im.tier === 3 && WEDDING.test(`${im.place} ${im.title}`)) return "private";
  return "corporate";
}

const raw: Shot[] = [...portfolioSet, ...weddingSet, ...equipmentSet].map((img) => {
  const type = typeOf(img);
  return { img, type, tag: TAG[type] };
});

/* ترتيب متنوّع: تداخل الأنواع بالتناوب (النموذج) — داخل كل نوع بالمستوى ثم الرقم */
const order: ShotType[] = ["government", "corporate", "private", "equipment"];
const buckets: Record<ShotType, Shot[]> = { government: [], corporate: [], private: [], equipment: [] };
for (const s of raw) buckets[s.type].push(s);
for (const k of order) buckets[k].sort((a, b) => a.img.tier - b.img.tier || a.img.src.localeCompare(b.img.src));
export const SHOTS: Shot[] = [];
while (order.some((k) => buckets[k].length)) for (const k of order) { const s = buckets[k].shift(); if (s) SHOTS.push(s); }

const count = (t: ShotType) => SHOTS.filter((s) => s.type === t).length;
export const COUNTS: Record<ShotType | "all", number> = {
  all: SHOTS.length, government: count("government"), corporate: count("corporate"), private: count("private"), equipment: count("equipment"),
};

export const FILTERS: { f: ShotType | "all"; label: string }[] = [
  { f: "all", label: "الكل" },
  { f: "government", label: "جهات حكومية ورسمية" },
  { f: "corporate", label: "شركات" },
  { f: "private", label: "مناسبات خاصة وزواجات" },
  { f: "equipment", label: "تجهيزات ومعدات" },
];

export const PORTFOLIO_HERO = SHOTS.find((s) => s.img.tier === 1 && s.img.width > s.img.height)?.img ?? SHOTS[0].img;
export const PORTFOLIO_WA = "السلام عليكم، شاهدت أعمالكم وأرغب بعرض سعر لمناسبة:\nالمدينة: \nالتاريخ: \nعدد الضيوف: ";
export const PORTFOLIO_IMAGES: CatalogImage[] = SHOTS.map((s) => s.img);

/* حارس: لا تكرار */
{
  const seen = new Set<string>();
  for (const s of SHOTS) { if (seen.has(s.img.src)) throw new Error(`portfolioContent: صورة مكرّرة ${s.img.src}`); seen.add(s.img.src); }
}
