"use client";

/**
 * SocialClient.tsx — صفحة التواصل الاجتماعي الفاخرة.
 *
 * ═══ القرارات وسندها ═══
 *
 * ١) لماذا نفس لغة `.luxe` لا تصميم جديد؟
 *    الصفحات الفرعية الـ٢٤ صارت بلغة واحدة: خلفية بنّية داكنة، حبر
 *    كريمي، ذهب دافئ، فواصل معيّنة، نهوض تدريجي عند التمرير. صفحة
 *    بلغة أخرى تُقرأ كأنها موقع آخر — والفخامة هي الاتّساق قبل
 *    الزخرفة. فكل ما هنا يستعمل الأصناف القائمة (lx-lift · lx-orn ·
 *    lx-medal · data-rise) لا أصنافاً جديدة.
 *
 * ٢) لماذا الأيقونات ذهبية لا بألوان المنصّات؟
 *    ستّة ألوان متضاربة في صفٍّ واحد تُحوّل الصفحة إلى شريط أدوات عام.
 *    الشكل هو ما يُعرَّف به إنستغرام أو سناب، لا اللون — والذهب يُبقي
 *    الصفحة داخل اللوحة.
 *
 * ٣) الباركود: المسح لا الزينة.
 *    وُلِّد بتصحيح أخطاء H وشعار يغطّي ١٩٪ فقط، وتحقّقنا من فكّه
 *    برمجياً بـpyzbar حتى حجم ١٨٠px — أصغر من أي عرض واقعي. لذلك
 *    يُعرض هنا بـ ٢٢٤px على الهاتف: هامش أمان مضاعف.
 *    وهو داخل بطاقة كريمية لا داكنة: الماسح يحتاج قطبية موجبة
 *    (حبر داكن على ورق فاتح)، وعكسها يُفشل بعض الماسحات.
 *
 * ٤) ترتيب الأولوية: واتساب أولاً دائماً.
 *    ٩٥٪ من العملاء على الهاتف، وقاعدة الخمس ثوان تقول إن أول ما
 *    يُرى يجب أن يكون طريق التواصل. فالمنصّات — وهي متابعة لا
 *    تحويل — تأتي بعده.
 */

import Link from "next/link";
import Image from "next/image";
import LocalReveal from "@/components/LocalReveal";
import {
  LuxeIconDefs,
  IconWhatsApp,
  IconPhone,
  IconInstagram,
  IconTiktok,
  IconSnapchat,
  IconX,
  IconFacebook,
  IconStar,
  IconArrow,
} from "@/components/luxe/LuxeIcons";

const WA = "https://wa.me/966508252134";
const TEL = "tel:+966508252134";

type Net = {
  name: string;
  handle: string;
  href: string;
  Ico: typeof IconInstagram;
  note: string;
};

/* المنصّات مرتّبة بحسب ما يفيد العميل فعلاً:
   إنستغرام وتيك توك أولاً لأنهما حيث تُرى أعمالنا (صور وفيديو)،
   ثم سناب (اللحظي)، ثم إكس وفيسبوك (الحضور الرسمي). */
const NETS: Net[] = [
  {
    name: "إنستغرام",
    handle: "@keifaldiafa",
    href: "https://www.instagram.com/keifaldiafa",
    Ico: IconInstagram,
    note: "معرض أعمالنا بالصور — قاعات وكاونترات وتوزيعات",
  },
  {
    name: "تيك توك",
    handle: "@keifaldiafa",
    href: "https://www.tiktok.com/@keifaldiafa",
    Ico: IconTiktok,
    note: "فيديوهات من قلب المناسبات لحظة بلحظة",
  },
  {
    name: "سناب شات",
    handle: "keifaldiafa",
    href: "https://www.snapchat.com/add/keifaldiafa",
    Ico: IconSnapchat,
    note: "تغطية حيّة للمناسبات يوم تنفيذها",
  },
  {
    name: "إكس",
    handle: "@keifaldiafa",
    href: "https://x.com/keifaldiafa",
    Ico: IconX,
    note: "أخبارنا وجديد خدمات الضيافة",
  },
  {
    name: "فيسبوك",
    handle: "كيف الضيافة",
    href: "https://www.facebook.com/keifaldiafa",
    Ico: IconFacebook,
    note: "صفحتنا الرسمية وتقييمات عملائنا",
  },
];

function Orn() {
  return (
    <div className="lx-orn" aria-hidden="true">
      <i />
      <IconStar className="w-4 h-4" />
      <i />
    </div>
  );
}

export default function SocialClient() {
  return (
    <main className="luxe min-h-screen">
      <LuxeIconDefs />
      <LocalReveal />

      {/* ═══ الافتتاح: العنوان + طريق التواصل فوراً ═══ */}
      <section className="max-w-5xl mx-auto px-4 pt-28 sm:pt-36 pb-2 text-center">
        <p className="lx-eyebrow justify-center" data-rise>
          <IconStar className="w-4 h-4" />
          <span>كيف الضيافة — على المنصّات</span>
        </p>

        <h1 className="ls-h1 mt-3" data-rise>
          تابعنا وشاهد ضيافتنا
          <span className="block">قبل أن تحجزها</span>
        </h1>

        <p className="lx-lead mt-4 max-w-2xl mx-auto" data-rise>
          كل مناسبة نخدمها نصوّرها: القاعة، كاونتر القهوة، الطاقم بزيّه،
          التوزيعات في يد الضيف. تابعنا على منصّتك المفضّلة — أو امسح
          الباركود لتصل إلى كل حساباتنا في نقرة.
        </p>

        {/* أزرار التحويل قبل المنصّات — قاعدة الخمس ثوان */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3" data-rise>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="lx-btn lx-btn--gold">
            <IconWhatsApp className="w-5 h-5" />
            <span>تواصل واتساب</span>
          </a>
          <a href={TEL} className="lx-btn lx-btn--ghost">
            <IconPhone className="w-5 h-5" />
            <span>0508252134</span>
          </a>
        </div>
      </section>

      <Orn />

      {/* ═══ الباركود ═══ */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="lx-lift p-5 sm:p-8 text-center" data-rise>
          <h2 className="lx-h2 text-[1.35rem] sm:text-3xl">امسح الباركود</h2>
          <p className="lx-lead mt-2 max-w-md mx-auto">
            وجّه كاميرا هاتفك إلى الرمز — يفتح لك صفحة حساباتنا كاملة.
          </p>

          {/* بطاقة كريمية: الماسح يحتاج حبراً داكناً على ورق فاتح.
              العرض ٢٢٤px على الهاتف = هامش أمان مضاعف فوق حدّ
              الـ١٨٠px الذي تحقّقنا من فكّه برمجياً. */}
          <div className="mt-6 flex justify-center">
            <div className="lx-qr">
              <Image
                src="/images/brand/qr-keif-aldiafa.png"
                alt="باركود QR لصفحة حسابات كيف الضيافة على مواقع التواصل"
                width={984}
                height={984}
                /* unoptimized إلزامي لا تحسيني: التحقّق البرمجي أثبت أن
                   مُحسِّن الصور يحوّل الباركود إلى WebP بضغط ضائع عند
                   q=75 فيُفشل فكّه تماماً (pyzbar: FAIL على المخرج
                   المُقدَّم، NJIT على الأصل). وحدات الباركود حدود حادّة
                   بين أسود وأبيض، والضغط الضائع يُلطّفها فتضيع القراءة.
                   الملف ٧٠ك.ب فقط — لا مكسب يوازي علامةً لا تُمسح. */
                unoptimized
                sizes="(max-width:640px) 224px, 288px"
                className="w-[224px] h-[224px] sm:w-[288px] sm:h-[288px]"
              />
            </div>
          </div>

          <p className="mt-5 text-[0.82rem] text-[color:var(--lx-cream-55)]">
            أو احفظ الرقم مباشرة: <span dir="ltr">+966 50 825 2134</span>
          </p>
        </div>
      </section>

      <Orn />

      {/* ═══ المنصّات ═══ */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="text-center">
          <p className="lx-eyebrow justify-center" data-rise>
            <IconStar className="w-4 h-4" />
            <span>حساباتنا الرسمية</span>
          </p>
          <h2 className="lx-h2 mt-2 text-[1.35rem] sm:text-3xl" data-rise>
            خمس منصّات — محتوى مختلف في كل واحدة
          </h2>
        </div>

        <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {NETS.map((n) => (
            <a
              key={n.name}
              href={n.href}
              target="_blank"
              rel="noopener noreferrer"
              className="lx-lift flex items-center gap-4 p-4 sm:p-5 group"
              data-rise
            >
              <span className="lx-medal shrink-0" aria-hidden="true">
                <i />
                <n.Ico className="w-5 h-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-bold text-[0.98rem] sm:text-[1.05rem] text-[color:var(--lx-cream)]">
                  {n.name}
                </span>
                <span
                  dir="ltr"
                  className="block text-[0.8rem] text-[color:var(--lx-gold-warm)] mt-0.5"
                >
                  {n.handle}
                </span>
                <span className="block text-[0.8rem] leading-snug text-[color:var(--lx-cream-55)] mt-1">
                  {n.note}
                </span>
              </span>
              <IconArrow className="w-5 h-5 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>
      </section>

      <Orn />

      {/* ═══ الختام: العودة إلى التحويل ═══ */}
      <section className="max-w-5xl mx-auto px-4 pb-6">
        <div className="ls-band" data-rise3d>
          <h2 className="lx-h2 text-[1.4rem] sm:text-3xl">
            شاهدت أعمالنا؟ لنجهّز مناسبتك
          </h2>
          <p className="lx-lead mt-3 max-w-xl mx-auto">
            كلّمنا واتساب بعدد ضيوفك وتاريخ المناسبة — نرتّب لك ضيافة تليق بك.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href={WA} target="_blank" rel="noopener noreferrer" className="lx-btn lx-btn--gold">
              <IconWhatsApp className="w-5 h-5" />
              <span>تواصل واتساب</span>
            </a>
            <a href={TEL} className="lx-btn lx-btn--ghost">
              <IconPhone className="w-5 h-5" />
              <span>اتصال مباشر</span>
            </a>
          </div>
          <p className="mt-5 text-[0.82rem] text-[color:var(--lx-cream-55)]">
            <Link href="/contact" className="underline decoration-dotted">
              صفحة التواصل الكاملة
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
