/**
 * ثوابت الموقع — المصدر الوحيد للحقيقة (Single Source of Truth).
 *
 * قبل هذا الملف كانت هذه القيم منسوخة حرفياً في 15+ ملفاً:
 *   SITE_URL في 12 ملفاً، ورقم الواتساب في 8 ملفات.
 * أي تغيير للرقم كان يتطلب تعديل كل النسخ — وخطأ نسخة واحدة يعني
 * زر واتساب معطوباً في صفحة دون بقية الصفحات (عطب صامت لا يكشفه البناء).
 *
 * كل ملف يحتاج ثابتاً من هذه يستورده من هنا فقط.
 */

/** نطاق الموقع الرسمي — بلا شرطة نهائية */
export const SITE_URL = "https://keifaldiafa.com";

/** الاسم التجاري */
export const SITE_NAME = "كيف الضيافة";

/** الاسم النظامي من شهادة السجل التجاري (نشط — صدر 2023/01/29) */
export const LEGAL_NAME = "مؤسسة كيف الضيافة للأفراح والمناسبات";

/** الرقم الوطني الموحّد للمنشأة */
export const UNIFIED_NUMBER = "7033069720";

/** رقم واتساب التواصل (صيغة دولية بلا +) — يُستخدم في wa.me */
export const WHATSAPP_NUMBER = "966508252134";

/** رقم واتساب بصيغة العرض المحلية (للنص الظاهر للزائر) — مصدر واحد بدل تكراره في الصفحات */
export const WHATSAPP_DISPLAY = "0508252134";

/** رقم الهاتف بصيغة E.164 (للاتصال المباشر و Schema.org) */
export const PHONE = "+966508252134";

/** البريد الرسمي */
export const EMAIL = "info@keifaldiafa.com";

/** رابط محادثة واتساب جاهز؛ مرّر نصاً مسبقاً اختيارياً */
export function waLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/**
 * حسابات التواصل المؤكّدة (تُستخدم في Schema sameAs).
 *
 * منهجية التحقق (2026-09-01 — موثقة في allpro تقرير 16):
 *   فحص شبكي حي لكل حساب + فحص «ضبط» بحساب وهمي لكشف المنصات
 *   التي ترجع 200 دائماً، إضافةً لتأكيد المالك الحرفي:
 *   «كل حساباتي صحيحة، هي نفس كلهن بنفس اسم الدومين».
 *
 *   - x: متحقق قطعياً — <title> الصفحة: «كيف الضيافة | قهوجي جدة … (@keifaldiafa)»
 *   - tiktok: متحقق قطعياً — uniqueId:"keifaldiafa" + nickname:"كيف الضيافة | قهوجيين جدة"
 *   - snapchat: متحقق بالضبط — 200 بينما الحساب الوهمي 404
 *   - facebook: FB يحجب التحقق الآلي (الوهمي أيضاً 200) — أُدرج بشهادة المالك
 *   - youtube: @keifaldiafa وبدائله = 404 → لا يُدرج حتى يزوّدنا المالك بالرابط الصحيح
 *     (قاعدة: لا نخترع روابط أبداً)
 */
export const SOCIAL = {
  instagram: "https://www.instagram.com/keifaldiafa",
  x: "https://x.com/keifaldiafa",
  tiktok: "https://www.tiktok.com/@keifaldiafa",
  snapchat: "https://www.snapchat.com/add/keifaldiafa",
  facebook: "https://www.facebook.com/keifaldiafa",
  /**
   * wa.me: رابط «فعل» (بدء محادثة) لا صفحة ملف تعريفي — يبقى هنا لأزرار
   * التواصل، لكنه لا يدخل sameAs. التعريف الرسمي (وثيقة Organization):
   * "URL of a page on another website with additional information about your
   *  organization... profile page on a social media or review site".
   */
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
  /**
   * ملف النشاط التجاري في خرائط جوجل (Google Business Profile)
   * مؤكَّد من المالك 2026-08-29: «كيف الضيافة للأفراح والمناسبات» — 4.5⭐/49 مراجعة
   * kgmid: /g/11vz4gzwn_ · CID: 15151944507933206223
   */
  googleMaps: "https://maps.google.com/maps?cid=15151944507933206223",
} as const;

/**
 * روابط sameAs للـSchema — صفحات ملفات تعريفية فقط (بلا روابط أفعال مثل wa.me).
 * مصدر واحد يستهلكه Organization وCateringService معاً.
 */
export const SAME_AS: readonly string[] = [
  SOCIAL.instagram,
  SOCIAL.x,
  SOCIAL.tiktok,
  SOCIAL.snapchat,
  SOCIAL.facebook,
  SOCIAL.googleMaps,
];
