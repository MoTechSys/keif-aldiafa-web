"use client";

/**
 * LuxeRequest — نموذج طلب بلا أسعار.
 *
 * ── سبب استبدال LuxeQuote (الحاسبة) به ──
 * الحاسبة كانت تُخرج رقماً تقديرياً (مثال: 1,450–1,780 ريال). قرار العميل:
 * لا توجد أسعار محددة أصلاً — السعر يُبنى على المناسبة والعميل نفسه،
 * يُرفع لبعضهم ويُخفض لآخرين. إظهار رقم يُنتج ثلاثة أضرار قابلة للقياس:
 *   1) العميل يقارن الرقم بمنافس أرخص ويخرج قبل أي محادثة.
 *   2) الرقم يصبح سقفاً تفاوضياً لا يمكن رفعه بعد ذلك.
 *   3) إن اختلف الرقم النهائي عن التقدير، تُفقد الثقة.
 * الهدف الوحيد هنا: أن يبدأ محادثة. لذلك لا حقول كثيرة، ولا التزام سعري.
 *
 * التصميم: سؤالان فقط + زر واحد. القياس البصري لمراجع العميل أظهر
 * 30–35 كلمة في الشاشة و«زر أساسي واحد بلا منافس».
 */

import { useMemo, useState } from "react";
import { IconWhatsApp, IconPhone } from "./LuxeIcons";

const WA = "966508252134";
const TEL = "+966508252134";

/** أنواع المناسبات — تختار بلمسة واحدة، بلا كتابة */
const OCCASIONS = [
  "زواج",
  "مؤتمر أو معرض",
  "مجلس أو عزاء",
  "افتتاح",
  "مناسبة نسائية",
  "استقبال كبار ضيوف",
];

/** نطاقات العدد — تقريبية بلا رقم دقيق: تُخبرنا بالحجم لا بالسعر */
const SIZES = ["أقل من 50", "50–150", "150–400", "أكثر من 400"];

export default function LuxeRequest({ cityAr }: { cityAr: string }) {
  const [occasion, setOccasion] = useState<string | null>(null);
  const [size, setSize] = useState<string | null>(null);

  const href = useMemo(() => {
    const lines = [
      "السلام عليكم،",
      `أرغب بخدمة ضيافة في ${cityAr}.`,
      occasion ? `المناسبة: ${occasion}` : null,
      size ? `عدد الضيوف تقريباً: ${size}` : null,
      "أفيدوني بالتفاصيل والعرض المناسب.",
    ].filter(Boolean);
    return `https://wa.me/${WA}?text=${encodeURIComponent(lines.join("\n"))}`;
  }, [cityAr, occasion, size]);

  return (
    <div className="lx-lift p-6 sm:p-9 text-center">
      <p className="lx-kicker mb-3">RESERVATION</p>
      <h2 className="lx-h2 !mb-2">
        نبني لك <em>عرضاً خاصاً</em>
      </h2>
      {/* الرسالة الصريحة بدل الرقم: لا سعر ثابت، والسبب مذكور بصدق */}
      <p className="lx-lead !mb-8 mx-auto max-w-[46ch]">
        لا نعمل بقائمة أسعار جاهزة. كل مناسبة تُقدَّر على حالها — المكان،
        عدد الضيوف، وطول الخدمة. أخبرنا بمناسبتك ويصلك العرض.
      </p>

      <fieldset className="lx-field text-start mb-6">
        <legend className="lx-label mb-3">المناسبة</legend>
        <div className="flex flex-wrap gap-2.5 justify-center">
          {OCCASIONS.map((o) => (
            <button
              key={o}
              type="button"
              aria-pressed={occasion === o}
              onClick={() => setOccasion(occasion === o ? null : o)}
              className={`lx-chip ${occasion === o ? "lx-chip--on" : ""}`}
            >
              {o}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="lx-field text-start mb-8">
        <legend className="lx-label mb-3">عدد الضيوف تقريباً</legend>
        <div className="flex flex-wrap gap-2.5 justify-center">
          {SIZES.map((s) => (
            <button
              key={s}
              type="button"
              aria-pressed={size === s}
              onClick={() => setSize(size === s ? null : s)}
              className={`lx-chip ${size === s ? "lx-chip--on" : ""}`}
            >
              {s}
            </button>
          ))}
        </div>
      </fieldset>

      {/* زر أساسي واحد — بلا منافس، كما في كل مرجع مقيس */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="lx-btn lx-btn--gold w-full !min-h-[58px] text-base"
      >
        <IconWhatsApp className="w-5 h-5" />
        أرسل طلبي على واتساب
      </a>

      <a href={`tel:${TEL}`} className="lx-btn lx-btn--ghost w-full mt-3">
        <IconPhone className="w-4 h-4" />
        أو اتصل مباشرة
      </a>

      <p className="lx-note !mt-5 mx-auto max-w-[40ch]">
        الردّ خلال دقائق طوال أيام الأسبوع. الاستشارة والعرض بلا أي مقابل.
      </p>
    </div>
  );
}
