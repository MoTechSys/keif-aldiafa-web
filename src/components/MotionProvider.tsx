"use client";

/**
 * مزوّد الحركة الكسول — المرحلة 3 من خطة الأداء (2026-08-29)
 *
 * يلفّ التطبيق بـ LazyMotion بحيث:
 * 1. الحزمة الرئيسية تحتوي فقط مكوّن <m /> الخفيف (بضعة كيلوبايتات)
 * 2. محرك الميزات الكامل (domMax ~30KB gzip) يُحمَّل عبر dynamic import
 *    بعد الترطيب — خارج المسار الحرج لـ LCP/TBT
 * 3. strict يرمي خطأ إن استُخدم <m.div> القديم في أي مكان —
 *    حماية بنائية تمنع عودة الحزمة الكاملة للمسار الحرج بالخطأ
 *
 * القاعدة للمطورين: استخدم دائماً `m.div` من "motion/react" وليس `motion.div`.
 */
import { LazyMotion } from "motion/react";

// دالة تحميل كسولة — webpack يفصلها في chunk مستقل يُجلب بعد التفاعل الأول
const loadFeatures = () => import("@/lib/motion-features").then((mod) => mod.default);

export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={loadFeatures} strict>
      {children}
    </LazyMotion>
  );
}
