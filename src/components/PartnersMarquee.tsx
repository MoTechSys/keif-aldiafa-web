"use client";

import { m, useAnimationFrame, useMotionValue, useTransform } from "motion/react";
import { useRef, useState, useEffect, useMemo } from "react";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { PARTNERS, partnerSrc } from "@/lib/partners";

// شعارات شركاء النجاح — من الكتالوج (المرحلة 1): 46 شعاراً «يُعرض = نعم»
// مرتبة بالأولوية (حكومي أولاً — D109) ثم الرقم. alt حرفي من الكتالوج (D111).
const allPartners = PARTNERS.map((p) => ({ id: p.id, name: p.alt, logo: partnerSrc(p) }));
const HALF = Math.ceil(allPartners.length / 2);

// دالة رياضية فائقة الدقة لضمان التفاف المسبحة (Seamless Wrap) بدون أي فراغات
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

function PartnerCard({ partner }: { partner: (typeof allPartners)[0] }) {
  return (
    <div className="flex-shrink-0 select-none px-2 sm:px-3" style={{ width: "clamp(110px, 25vw, 160px)" }}>
      <div
        className="relative h-16 sm:h-20 rounded-xl flex items-center justify-center transition-all duration-300 hover:border-[rgba(184,134,11,0.4)] group hover:scale-105 overflow-hidden"
        style={{
          background: "rgba(20,16,6,0.4)",
          border: "1px solid rgba(184,134,11,0.12)",
          backdropFilter: "blur(8px)",
        }}
      >
        {/* هامش داخلي: يمنع الشعارات ذات الخلفية البيضاء من ملامسة حواف البطاقة
            فتبقى الزوايا المنحنية والإطار الذهبي والظل ظاهرة كاملة. */}
        <div className="w-full h-full flex items-center justify-center p-2 sm:p-2.5">
          <ImageWithFallback
            src={partner.logo}
            alt={partner.name}
            className="max-w-full max-h-full w-auto h-auto object-contain brightness-110 contrast-110 transition-all duration-500 pointer-events-none rounded-md"
            loading="lazy"
            width={400}
            height={400}
            quality={85}
            disableBlur
          />
        </div>
      </div>
    </div>
  );
}

interface MarqueeRowProps {
  items: typeof allPartners;
  baseVelocity: number;
  direction?: "ltr" | "rtl";
}

function MarqueeRow({ items, baseVelocity = 1, direction = "rtl" }: MarqueeRowProps) {
  const baseX = useMotionValue(0);
  const [contentWidth, setContentWidth] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  // نستخدم 4 مجموعات (بدلاً من 3) لضمان عدم وجود أي فراغ مهما كانت شاشة المستخدم عملاقة أو تم سحب الشريط بقوة
  const sets = [0, 1, 2, 3];

  // تحديد اتجاه الحركة بناءً على المتغير
  const velocityFactor = direction === "rtl" ? -1 : 1;

  useEffect(() => {
    const calculateWidth = () => {
      if (contentRef.current) {
        // نقيس عرض مجموعة واحدة فقط بدقة البكسل المتناهية
        setContentWidth(contentRef.current.getBoundingClientRect().width);
      }
    };

    calculateWidth();
    window.addEventListener("resize", calculateWidth);
    
    // تأمين إضافي: إعادة الحساب بعد تحميل الصور والخطوط
    const timer = setTimeout(calculateWidth, 1000);

    return () => {
      window.removeEventListener("resize", calculateWidth);
      clearTimeout(timer);
    };
  }, [items]);

  // هنا السحر: عند وصول الشريط لحافة معينة، يلتف بشكل مخفي 100% بدون أي قفزة بصرية
  const x = useTransform(baseX, (v) => {
    if (contentWidth === 0) return 0;
    return wrap(-contentWidth, 0, v);
  });

  useAnimationFrame((t, delta) => {
    if (contentWidth === 0) return;
    // الحفاظ على سرعة موحدة بغض النظر عن معدل تحديث الشاشة (Refresh Rate)
    const moveBy = baseVelocity * (delta / 16.6) * velocityFactor;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    // السر الأكبر هنا هو إجبار الحاوية على (dir="ltr") لفصل رياضيات الحركة عن اتجاه الموقع العربي
    <div className="relative overflow-hidden py-2 touch-pan-y" dir="ltr">
      <m.div
        className="flex whitespace-nowrap will-change-transform w-max cursor-grab active:cursor-grabbing"
        style={{ x }}
        // onPan يسمح بالسحب اليدوي بسلاسة تامة ويحدث القيمة الحركية دون كسر الدوران
        onPan={(e, info) => {
          baseX.set(baseX.get() + info.delta.x);
        }}
      >
        {sets.map((setIndex) => (
          <div 
            key={setIndex} 
            ref={setIndex === 0 ? contentRef : null} 
            className="flex shrink-0 items-center"
          >
            {items.map((partner) => (
              <PartnerCard key={`${setIndex}-${partner.id}`} partner={partner} />
            ))}
          </div>
        ))}
      </m.div>
    </div>
  );
}

export function PartnersMarquee() {
  const firstRow = useMemo(() => allPartners.slice(0, HALF), []);
  const secondRow = useMemo(() => allPartners.slice(HALF), []);

  return (
    <section className="py-12 sm:py-16 px-4 overflow-hidden contain-paint bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto mb-8 sm:mb-12">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-[#B8860B] mb-2 text-center" style={{ fontSize: "0.7rem", letterSpacing: "0.3em", fontWeight: 600 }}>
            ✦ نثق بهم ويثقون بنا ✦
          </p>
          <h2
            className="text-[#F5F5DC] text-center font-tajawal font-bold"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.4rem)", fontWeight: 800, lineHeight: 1.2 }}
          >
            شركاء النجاح
          </h2>
          <div
            className="mt-3 mb-1 rounded-full mx-auto"
            style={{
              width: 60,
              height: 2,
              background: "linear-gradient(90deg, transparent, #B8860B 30%, #D4A017 60%, transparent)",
            }}
          />
        </m.div>
      </div>

      <div className="relative space-y-4 sm:space-y-6">
        {/* تدرجات الحواف للمسة فاخرة (Gradients) */}
        <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#0f0f0f] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#0f0f0f] to-transparent z-20 pointer-events-none" />

        {/* الشريط الأول */}
        <MarqueeRow items={firstRow} baseVelocity={0.8} direction="rtl" />

        {/* الشريط الثاني */}
        <MarqueeRow items={secondRow} baseVelocity={0.6} direction="ltr" />
      </div>
      
      <m.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-[#F5F5DC]/30 text-[10px] sm:text-xs text-center mt-8 font-cairo tracking-wide"
      >
        يمكنك سحب الشريط يدوياً لاستكشاف المزيد من الشركاء
      </m.p>
    </section>
  );
}
