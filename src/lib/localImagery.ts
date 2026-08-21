/**
 * localImagery.ts — الصور المنتقاة لصفحات (خدمة × مدينة).
 *
 * ═══════════════════════════════════════════════════════════════════════
 *  لماذا هذا الملف موجود؟
 * ═══════════════════════════════════════════════════════════════════════
 * `pickImages()` في localContent.tsx يختار الصور بمعادلة حسابية:
 *     start = (seed * 7) % pool.length ; step = 3
 * أي أنها تختار «الصورة رقم كذا» لا «الصورة المناسبة». نتيجة القياس:
 *   • تحت عنوان «المناسبات النسائية» ظهر بانر تسويقي فيه رجال.
 *   • تحت عنوان «القهوة والتمر والأدوات» ظهرت صورة بكمّامات وبالونات.
 *   • الصور غير مختومة بعلامتنا ⇒ قابلة للسرقة.
 *   • أسماء الملفات عامة (hero-desktop) ⇒ صفر قيمة في فهرسة الصور.
 *
 * الحلّ: تجاهل مخرجات pickImages بصريّاً، والاعتماد على مكتبة مقيسة
 * ومختومة ومسمّاة للسيو في /images/keif/. كل صورة أدناه فُحصت بالعين
 * في ورقة مجمّعة (sheet15.png) وسُجّل حكمها.
 *
 * ═══ المستبعدة بعد الفحص البصري ═══
 *   khaima-turathiya-jeddah-diyafa-tent — في الكادر أشخاص بملابس عادية
 *     ومشهد تقرأه العين كسوق شعبي لا كمناسبة فاخرة. لا تُعرض إطلاقاً.
 *   dallah-dhahabiya / dallah-fidhiya / fanajeel / nakhla — خلفياتها
 *     بيضاء أو كحلية (كروت منتج) ⇒ داخل صفحة بنّية داكنة تُقرأ كمربّع
 *     أبيض دخيل، وهو حرفياً العطب الذي وصفه العميل. تُستخدم القصّات
 *     الشفّافة من /images/cutouts/ بدلاً منها.
 *
 * ═══ التمايز بين الصفحات (مطلب الفهرسة) ═══
 * 24 صفحة بنفس الصور = محتوى متشابه. لذلك الاختيار يدور بدالة تجزئة
 * ثابتة من (الخدمة + المدينة): كل صفحة تحصل على هيرو وترتيب صور مختلف،
 * لكنه **ثابت** بين البناءات (لا عشوائية) فلا تتغيّر الصور بين النشرات.
 */

export type Ratio = "portrait" | "landscape" | "wide" | "square";

export interface Shot {
  src: string;
  w: number;
  h: number;
  alt: string;
  /** موضع التركيز عند القصّ الحتمي */
  focus: string;
  ratio: Ratio;
}

function ratioOf(w: number, h: number): Ratio {
  const r = w / h;
  if (r > 1.9) return "wide";
  if (r > 1.12) return "landscape";
  if (r < 0.9) return "portrait";
  return "square";
}

const K = "/images/keif/";
function s(file: string, w: number, h: number, alt: string, focus = "center 45%"): Shot {
  return { src: K + file, w, h, alt, focus, ratio: ratioOf(w, h) };
}

/* ═══════════════════════════════════════════════════════════════════════
   المشاهد الحقيقية — كلّها مختومة بعلامة «كيف الضيافة» ومسمّاة للسيو
   ═══════════════════════════════════════════════════════════════════════ */

/** قاعة الاستقبال الرخامية — أفخم أصل في المكتبة (عمودي) */
export const HALL = s(
  "qahwajiyeen-jeddah-hall-reception-keif-aldiafa.webp",
  1536,
  2074,
  "قهوجيين وصبابين قهوة بالبشت المطرّز في قاعة استقبال رخامية فاخرة",
  "center 30%"
);

/** نفس القاعة بعدسة عريضة — للشاشات الواسعة */
export const HALL_WIDE = s(
  "sabab-qahwa-jeddah-majlis-hall-keif-aldiafa.webp",
  3168,
  1088,
  "صبابين قهوة عربية في مجلس استقبال فاخر بأعمدة مذهّبة وثريا كريستال",
  "center 38%"
);

/** كاونتر الضيافة الذهبي المضاء (أفقي) */
export const COUNTER = s(
  "qahwa-counter-jeddah-gold-station-keif-aldiafa.webp",
  2720,
  1756,
  "كاونتر ضيافة قهوة ذهبي مضاء بالدلال النحاسية والفناجيل",
  "center 50%"
);

/** بوفيه ضيافة كامل — تمر وحلويات ومعجّنات */
export const BUFFET = s(
  "diyafa-buffet-jeddah-dates-sweets-keif-aldiafa.webp",
  1200,
  1600,
  "بوفيه ضيافة فاخر بأطباق التمر والحلويات والمعجّنات على حاملات ذهبية",
  "center 42%"
);

/** حاملات المعجّنات المتدرّجة */
export const PASTRY = s(
  "diyafa-pastry-tiers-jeddah-keif-aldiafa.webp",
  864,
  1600,
  "مستويات معجّنات وحلويات الضيافة على حاملات فضية متدرّجة",
  "center 45%"
);

/** صواني الكانابيه المرتّبة */
export const CANAPE = s(
  "diyafa-canape-trays-jeddah-keif-aldiafa.webp",
  899,
  1599,
  "صواني كانابيه وتقديمات باردة مرتّبة بدقّة لضيافة المؤتمرات",
  "center 45%"
);

/** المبخرة والدلال الذهبية المنقوشة (عمودي جداً) */
export const MABKHARA = s(
  "mabkhara-dallah-gold-jeddah-diyafa-keif-aldiafa.webp",
  1802,
  3840,
  "مبخرة ودلّة ذهبية منقوشة من عدّة ضيافة كيف الضيافة",
  "center 40%"
);

/** طبق التمر المحشي الفاخر */
export const TAMR = s(
  "tamr-mahshi-jeddah-dates-platter-keif-aldiafa.webp",
  835,
  1000,
  "طبق تمر محشي بالمكسّرات مرتّب على شكل دائري فاخر",
  "center 50%"
);

/** التوزيعات المحمولة على صينية لكبار الضيوف */
export const TAWZEEAT = s(
  "tawzeeat-jeddah-vip-dates-qahwa-tray-keif-aldiafa.webp",
  768,
  1024,
  "توزيعات ضيافة فاخرة بالتمر والقهوة العربية تُقدَّم لكبار الضيوف",
  "center 55%"
);

/** فرشة المجلس التراثية بالسدو الأحمر */
export const MAJLIS = s(
  "khaima-diyafa-jeddah-traditional-spread-keif-aldiafa.webp",
  960,
  1280,
  "فرشة مجلس تراثية بالسدو الأحمر مع دلال نحاسية وأطباق تمر",
  "center 55%"
);

/* ═══════════════════════════════════════════════════════════════════════
   القصّات الشفّافة — أجسام تطفو بلا صندوق (تُعرض عبر .lx-obj / .lx-float)
   السبب: هذه ملفّات بخلفية شفّافة فعلاً، فلا تُنتج «مربّعاً أبيض».
   ═══════════════════════════════════════════════════════════════════════ */
export const CUT_DALLAH_GOLD = "/images/cutouts/n-dallah-gold.webp";
export const CUT_DALLAH_SILVER = "/images/cutouts/n-dallah-silver.webp";
export const CUT_CUPS: { src: string; alt: string }[] = [
  { src: "/images/cutouts/n-cup-stripes.webp", alt: "فنجان قهوة زجاجي بخطوط ذهبية مع صحنه" },
  { src: "/images/cutouts/n-cup-emblem.webp", alt: "كوب شاي بشعار النخلة والسيفين الذهبي" },
  { src: "/images/cutouts/n-cup-faceted.webp", alt: "فنجان قهوة مضلّع بحافة ذهبية وصحن" },
  { src: "/images/cutouts/n-cup-porcelain.webp", alt: "فنجان قهوة خزفي أبيض مع صحن" },
];

/* ═══════════════════════════════════════════════════════════════════════
   التوزيع على الصفحات
   ═══════════════════════════════════════════════════════════════════════ */

/** أربعة مداخل بصرية ممكنة للهيرو — تدوير ثابت يميّز الصفحات */
const HEROES: Shot[] = [HALL, COUNTER, HALL_WIDE, MAJLIS];

/** بنك المشاهد لأقسام النصّ والمعرض (بلا الخيمة المعطوبة) */
const SCENES: Shot[] = [BUFFET, COUNTER, TAWZEEAT, PASTRY, MABKHARA, TAMR, CANAPE, MAJLIS, HALL, HALL_WIDE];

/** تجزئة ثابتة (لا عشوائية) — نفس المدخل يعطي نفس الخرج في كل بناء */
function hash(str: string): number {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) % 100000;
  return h;
}

export interface PageImagery {
  hero: Shot;
  /** صور أقسام النصّ — بعدد الأقسام المطلوب */
  sections: Shot[];
  /** صور «خدماتنا» — واحدة لكل خدمة */
  services: Shot[];
  /** المعرض — ارتفاع موحّد في العرض */
  gallery: Shot[];
  /** الدلّة المميّزة لهذه الصفحة (تبادل ذهبي/فضي) */
  dallah: string;
}

/**
 * يبني حزمة الصور لصفحة واحدة.
 * القاعدة: الهيرو لا يتكرّر داخل أول قسمين، والمعرض يبدأ من بعد
 * الصور المستهلكة، فلا يرى الزائر نفس الصورة مرّتين في شاشة واحدة.
 */
export function getPageImagery(
  serviceAr: string,
  cityAr: string,
  sectionCount: number,
  serviceCount: number,
  galleryCount = 4
): PageImagery {
  const seed = hash(`${serviceAr}|${cityAr}`);
  const hero = HEROES[seed % HEROES.length];

  const pool = SCENES.filter((x) => x.src !== hero.src);

  /* ترتيب ثابت مُدوَّر بخطوة أوّلية نسبةً لطول البنك ⇒ تباديل كاملة بلا
     تكرار داخل نفس الصفحة. (الخطوة 3 كانت تعيد نفس الصورة كل 3 عناصر
     عندما يكون طول البنك من مضاعفات 3 — عطب مقيس.) */
  const step = pool.length % 4 === 0 ? 3 : 4;
  const order: Shot[] = [];
  for (let i = 0; i < pool.length; i++) order.push(pool[(seed + i * step) % pool.length]);
  const uniq = order.filter((x, i) => order.findIndex((y) => y.src === x.src) === i);

  let cur = 0;
  const take = (n: number): Shot[] => {
    const out: Shot[] = [];
    for (let i = 0; i < n; i++) out.push(uniq[(cur + i) % uniq.length]);
    cur += n;
    return out;
  };

  const sections = take(sectionCount);
  const services = take(serviceCount);
  const gallery = take(galleryCount);

  return {
    hero,
    sections,
    services,
    gallery,
    dallah: seed % 2 === 0 ? CUT_DALLAH_GOLD : CUT_DALLAH_SILVER,
  };
}
