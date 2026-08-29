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

/** رقم الهاتف بصيغة E.164 (للاتصال المباشر و Schema.org) */
export const PHONE = "+966508252134";

/** البريد الرسمي */
export const EMAIL = "info@keifaldiafa.com";

/** رابط محادثة واتساب جاهز؛ مرّر نصاً مسبقاً اختيارياً */
export function waLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** حسابات التواصل المؤكّدة (تُستخدم في Schema sameAs) */
export const SOCIAL = {
  instagram: "https://www.instagram.com/keifaldiafa",
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
} as const;
