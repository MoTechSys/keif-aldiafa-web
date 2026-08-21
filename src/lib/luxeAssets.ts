/**
 * luxeAssets.ts — فهرس الأصول البصرية بأبعادها الحقيقية.
 *
 * سبب وجود هذا الملف:
 * القالب السابق كان يفرض `aspect-[4/5]` على كل الصور. عند القياس الفعلي وُجد أن
 * صوراً أفقية بنسبة 2.0 و 2.73 كانت تُحشر في إطار عمودي 0.8 — أي قصّ 60–70% من
 * الصورة وإخفاء أشخاص كاملين. لذلك لا يُسمح بعد الآن بعرض صورة دون معرفة نسبتها.
 *
 * كل صورة هنا مقيسة فعلياً من الملف (Pillow) وليست تقديراً.
 * قاعدة: نسبة الإطار تتبع نسبة الصورة، لا العكس.
 */

export type Ratio = "portrait" | "landscape" | "wide" | "square";

export interface Asset {
  src: string;
  w: number;
  h: number;
  alt: string;
  /** تصنيف النسبة — يحدد الإطار المسموح */
  ratio: Ratio;
  /** موضع التركيز عند القصّ الحتمي (object-position) */
  focus?: string;
}

function classify(w: number, h: number): Ratio {
  const r = w / h;
  if (r > 1.9) return "wide";
  if (r > 1.12) return "landscape";
  if (r < 0.9) return "portrait";
  return "square";
}

function a(src: string, w: number, h: number, alt: string, focus?: string): Asset {
  return { src, w, h, alt, ratio: classify(w, h), focus };
}

/* ═══════════════════════════════════════════════════════════
   الهيرو — القاعة الكبرى 3168×1344 (نسبة 2.36)
   أفخم أصل في المكتبة: أعمدة، ثريا كريستال، أرائك مخملية
   أخضر/ذهبي، بوفيه، وشعار البراند على الأرض.
   يُعرض بعرضه الكامل — أي قصّ عمودي يقتل إحساس القاعة.
   ═══════════════════════════════════════════════════════════ */
export const HERO = a(
  "/images/hero/hero-desktop.webp",
  3168,
  1344,
  "قاعة استقبال فاخرة — طاقم كيف الضيافة يقدّم القهوة العربية بين أعمدة القاعة",
  "center 42%"
);

export const HERO_MOBILE = a(
  "/images/hero/hero-mobile.webp",
  1536,
  2784,
  "طاقم ضيافة كيف الضيافة في قاعة استقبال فاخرة",
  "center 35%"
);

/* ═══════════════════════════════════════════════════════════
   بطاقات الطاقم — عمودية فقط، دقة ≥700px
   استُثنيت sawas-style-3 (الوجه مطمّس بالبكسل) و dagla-6
   (271×300 — تظهر ضبابية عند أي تكبير).
   ═══════════════════════════════════════════════════════════ */
export const CREW: Asset[] = [
  a(
    "/images/services/male/hosts/dagla/dagla-3.webp",
    720,
    1280,
    "ثلاثة صبابين بزيّ الدقلة المطرّزة يقدّمون القهوة العربية والبخور في قاعة استقبال",
    "center 30%"
  ),
  a(
    "/images/services/male/hosts/sideriya/sideriya-2.webp",
    960,
    1280,
    "صبّاب بزيّ السديرية السعودي يحمل دلّة القهوة العربية",
    "center 25%"
  ),
  a(
    "/images/services/male/hosts/dagla-janbiya/dagla-janbiya-2.webp",
    720,
    1280,
    "قهوجي بزيّ الدقلة والجنبية التراثي في استقبال رسمي",
    "center 28%"
  ),
  a(
    "/images/services/female/female-2.webp",
    816,
    1296,
    "صبابة سعودية بزيّ لائق تقدّم القهوة العربية في مناسبة نسائية",
    "center 25%"
  ),
];

/* ═══════════════════════════════════════════════════════════
   المعدات — مربعة 1080×1080، خلفية بيضاء ناصعة.
   ⚠️ لا تُعرض مباشرة على خلفية داكنة: تظهر كمربع أبيض فاقع.
   تُعرض داخل لوحة كريمية فاتحة مقصودة (.eqp-tile).
   ═══════════════════════════════════════════════════════════ */
export const EQUIPMENT: Asset[] = [
  a(
    "/images/equipment/saudi-clear-cup-saucer-golden-stripes-hospitality.webp",
    1080,
    1080,
    "فنجان قهوة زجاجي بخطوط ذهبية مع صحن — من أدوات ضيافة كيف الضيافة"
  ),
  a(
    "/images/equipment/saudi-gold-palm-gahwa-cups-set.webp",
    1080,
    1080,
    "طقم فناجيل قهوة عربية بنقشة النخلة الذهبية"
  ),
  a(
    "/images/equipment/luxury-faceted-tea-cup-transparent-hospitality.webp",
    1080,
    1080,
    "كوب شاي كريستالي مضلّع للضيافة الفاخرة"
  ),
  a(
    "/images/equipment/saudi-arabic-coffee-emblem-handled-mug-golden-hospitality.webp",
    1080,
    1080,
    "فنجان قهوة عربية بمقبض وشعار ذهبي"
  ),
];

/* الدلّة الذهبية — 1000×1000، تُستخدم كعنصر بصري مفرد */
export const DALLAH = a(
  "/images/equipment/royal-golden-dallah-coffee-pot-saudi-hospitality.webp",
  1000,
  1000,
  "دلّة قهوة عربية ذهبية ملكية من معدات كيف الضيافة"
);

/* ═══════════════════════════════════════════════════════════
   المعرض — كل صورة بنسبتها الحقيقية، الشبكة تتكيّف معها
   (masonry متغيّر الارتفاع) بدل قصّها في إطار موحّد.
   ═══════════════════════════════════════════════════════════ */
export const GALLERY: Asset[] = [
  a(
    "/images/services/artistic/buffet/buffet-1.webp",
    1200,
    1600,
    "بوفيه ضيافة على رفوف زجاجية بحوامل ذهبية — معجنات وساندويتشات مرتّبة"
  ),
  a(
    "/images/events/official-ceremony-saudi-hosts-traditional-attire-vip-reception.webp",
    1600,
    900,
    "استقبال رسمي — طاقم بالبشت المطرّز بالزري الذهبي في فعالية تراثية"
  ),
  a(
    "/images/services/artistic/buffet/buffet-2.webp",
    1200,
    1600,
    "تنسيق بوفيه ضيافة متعدد الطوابق بحوامل ذهبية"
  ),
  a(
    "/images/events/saudi-event-vip-reception-luxury-catering-majlis-traditional-attire.webp",
    1280,
    960,
    "ضيافة مجلس — تقديم القهوة العربية لكبار الضيوف"
  ),
  a(
    "/images/services/artistic/counter/counter-1.webp",
    1200,
    1600,
    "كاونتر ضيافة مجهّز بدلال القهوة العربية والفناجيل"
  ),
  a(
    "/images/events/formal-reception-indoor-event-saudi-hosts-luxury-catering.webp",
    1280,
    720,
    "استقبال رسمي داخلي — طاقم ضيافة كيف الضيافة"
  ),
];

/* الشعار الأصلي — كحلي #1B224A + ذهبي #D8A877 */
export const LOGO = {
  mark: "/icons/logo-1.svg",
  gold: "/icon-gold.svg",
  watermark: "/images/watermarks",
} as const;

/** ملف نسبة → كلاس الإطار (يمنع القصّ العشوائي) */
export const FRAME: Record<Ratio, string> = {
  portrait: "aspect-[3/4]",
  square: "aspect-square",
  landscape: "aspect-[4/3]",
  wide: "aspect-[21/9]",
};

/* ═══════════════════════════════════════════════════════════
   SECTIONS — صور الأقسام النصية (تجاوز مقصود لِـ props.sections[].img)
   السبب: pickImages() في localContent.tsx يختار بالبذرة والخطوة الحسابية
   لا بالمعنى، فأنتج تحت عنوان «المناسبات النسائية» بانراً تسويقياً فيه
   رجال (تقييم بصري 1/10)، وتحت عنوان «الأصول» صورة بكمّامات وبالونات.
   هذه القائمة منتقاة بصرياً وموثّقة بالتقييم، ومقاساتها مقيسة فعلياً.
   ═══════════════════════════════════════════════════════════ */
export const SECTIONS: Asset[] = [
  a(
    "/images/services/male/hosts/dagla/dagla-5.webp",
    1280,
    854,
    "صفّ صبابين بالدقلة المطرّزة بالفضّي، والصبّاب الأول يحمل الدلّة الذهبية في قاعة بإضاءة دافئة"
  ),
  a(
    "/images/services/female-services/female-8.webp",
    768,
    1060,
    "طاقم نسائي بزيّ أبيض أنيق يحمل صواني التقديم الفضّية في قاعة بمرايا وثريّات"
  ),
  a(
    "/images/equipment/royal-golden-dallah-coffee-pot-saudi-hospitality.webp",
    1000,
    1000,
    "دلّة قهوة عربية ذهبية ملكية على طقم الضيافة السعودي"
  ),
];
