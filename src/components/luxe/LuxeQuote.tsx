"use client";

/**
 * LuxeQuote — حاسبة الضيافة + نموذج طلب.
 *
 * سبب وجوده: تدقيق الصفحة المنشورة أظهر `<form>` = 0. كل مسارات التحويل
 * كانت روابط واتساب مباشرة بنص ثابت، فلا يعرف العميل التكلفة قبل أن يسأل،
 * ولا يصل للنشاط أي بيانات مؤهِّلة (عدد الضيوف / التاريخ / الحيّ).
 *
 * التصميم: مكوّن عميل واحد معزول. بقية الصفحة تبقى Server Component،
 * فلا يزيد JS إلا بحجم هذا الملف.
 *
 * التسعير تقديري ومصرّح به كـ«نطاق» لا كسعر نهائي — تفادياً لالتزام
 * تعاقدي غير مقصود.
 */

import { useMemo, useState } from "react";
import { IconWhatsApp, IconCup, IconCrew } from "./LuxeIcons";

const WA = "966508252134";

/* أساس التسعير — قابل للتعديل من مكان واحد */
const BASE = 450;       // باقة الصبّاب الواحد (حتى 50 ضيفاً)
const PER_STAFF = 380;  // كل فرد إضافي
const SUP = 320;        // مباشر لتنظيم التقديم (يلزم فوق 150 ضيفاً)
const HR_EXTRA = 90;    // كل ساعة تزيد عن 4

type Ev = { id: string; label: string; ratio: number };

const EVENTS: Ev[] = [
  { id: "wedding", label: "عرس / استقبال", ratio: 45 },
  { id: "corporate", label: "شركات ومؤتمرات", ratio: 55 },
  { id: "vip", label: "كبار ضيوف VIP", ratio: 35 },
  { id: "majlis", label: "مجلس / عزاء", ratio: 50 },
  { id: "opening", label: "افتتاح ومعارض", ratio: 60 },
];

const HOURS = [3, 4, 6, 8];

export default function LuxeQuote({ cityAr }: { cityAr: string }) {
  const [guests, setGuests] = useState(150);
  const [ev, setEv] = useState<Ev>(EVENTS[0]);
  const [hours, setHours] = useState(4);
  const [female, setFemale] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [err, setErr] = useState<{ name?: string; phone?: string }>({});

  const calc = useMemo(() => {
    const staff = Math.max(1, Math.ceil(guests / ev.ratio));
    const needSup = guests > 150;
    let price = BASE + (staff - 1) * PER_STAFF;
    if (needSup) price += SUP;
    if (hours > 4) price += (hours - 4) * HR_EXTRA;
    if (female) price += 200;
    const low = Math.round(price / 50) * 50;
    const high = Math.round((price * 1.22) / 50) * 50;
    const cups = Math.round((guests * 3) / 10) * 10;
    return { staff, needSup, low, high, cups };
  }, [guests, ev, hours, female]);

  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);

  const msg = useMemo(() => {
    const L = [
      "السلام عليكم، أرغب بعرض سعر للضيافة:",
      `• المدينة: ${cityAr}`,
      `• نوع المناسبة: ${ev.label}`,
      `• عدد الضيوف: ${guests}`,
      `• مدة الخدمة: ${hours} ساعات`,
      female ? "• المطلوب: طاقم نسائي" : null,
      `• الطاقم المقترح: ${calc.staff} صبّاب${calc.needSup ? " + مباشر" : ""}`,
      `• التقدير المبدئي: ${calc.low}–${calc.high} ريال`,
      name ? `• الاسم: ${name}` : null,
      phone ? `• الجوال: ${phone}` : null,
      date ? `• التاريخ: ${date}` : null,
    ].filter(Boolean);
    return L.join("\n");
  }, [cityAr, ev, guests, hours, female, calc, name, phone, date]);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const next: typeof err = {};
    if (name.trim().length < 3) next.name = "اكتب الاسم كاملاً (3 أحرف على الأقل)";
    if (!/^(?:\+?966|0)?5\d{8}$/.test(phone.replace(/[\s-]/g, "")))
      next.phone = "رقم جوال سعودي غير صحيح — مثال 0501234567";
    setErr(next);
    if (Object.keys(next).length) return;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, "_blank", "noopener");
  }

  const fill = ((guests - 20) / (600 - 20)) * 100;

  return (
    <div className="lx-card p-5 sm:p-7" data-rise>
      <p className="lx-eyebrow">حاسبة فورية</p>
      <h2 className="lx-h2">
        اعرف <em>التقدير</em> قبل ما تتواصل
      </h2>
      <p className="lx-lead mb-6 text-sm">
        حرّك عدد الضيوف واختر نوع المناسبة — يظهر لك الطاقم المناسب وعدد الفناجيل
        ونطاق التكلفة فوراً، بدون انتظار رد.
      </p>

      {/* ── عدد الضيوف ── */}
      <label htmlFor="lxg" className="block text-sm font-bold mb-3">
        عدد الضيوف:{" "}
        <output htmlFor="lxg" className="text-[--lx-gold-hi] text-lg font-extrabold">
          {guests}
        </output>
      </label>
      <input
        id="lxg"
        type="range"
        min={20}
        max={600}
        step={10}
        value={guests}
        onChange={(e) => setGuests(+e.target.value)}
        className="lx-range"
        style={{ ["--fill" as string]: `${fill}%` }}
        aria-describedby="lxg-hint"
      />
      <p id="lxg-hint" className="text-xs text-[--lx-cream-55] mt-2 mb-6">
        من 20 إلى 600 ضيف
      </p>

      {/* ── نوع المناسبة ── */}
      <fieldset className="mb-6">
        <legend className="text-sm font-bold mb-3">نوع المناسبة</legend>
        <div className="flex flex-wrap gap-2">
          {EVENTS.map((o) => (
            <button
              key={o.id}
              type="button"
              onClick={() => setEv(o)}
              aria-pressed={ev.id === o.id}
              className={`lx-chip ${ev.id === o.id ? "lx-chip--on" : ""}`}
            >
              {o.label}
            </button>
          ))}
        </div>
      </fieldset>

      {/* ── المدة ── */}
      <fieldset className="mb-6">
        <legend className="text-sm font-bold mb-3">مدة الخدمة</legend>
        <div className="flex flex-wrap gap-2">
          {HOURS.map((h) => (
            <button
              key={h}
              type="button"
              onClick={() => setHours(h)}
              aria-pressed={hours === h}
              className={`lx-chip ${hours === h ? "lx-chip--on" : ""}`}
            >
              {h} ساعات
            </button>
          ))}
          <button
            type="button"
            onClick={() => setFemale(!female)}
            aria-pressed={female}
            className={`lx-chip ${female ? "lx-chip--on" : ""}`}
          >
            طاقم نسائي
          </button>
        </div>
      </fieldset>

      {/* ── النتيجة ── */}
      <div className="grid grid-cols-3 gap-2.5 mb-6" role="status" aria-live="polite">
        <div className="lx-stat">
          <IconCrew className="w-6 h-6 mx-auto mb-1.5" />
          <b>{calc.staff}</b>
          <span>صبّاب{calc.needSup ? " + مباشر" : ""}</span>
        </div>
        <div className="lx-stat">
          <IconCup className="w-6 h-6 mx-auto mb-1.5" />
          <b>{calc.cups}</b>
          <span>فنجان تقديري</span>
        </div>
        <div className="lx-stat">
          <b className="!text-[1.05rem] sm:!text-[1.25rem]">
            {calc.low}–{calc.high}
          </b>
          <span>ريال (نطاق)</span>
        </div>
      </div>

      {/* ── النموذج ── */}
      <form onSubmit={submit} noValidate className="grid gap-3.5">
        <div>
          <label htmlFor="lxn" className="block text-sm font-bold mb-1.5">
            الاسم <span className="text-[--lx-gold-warm]">*</span>
          </label>
          <input
            id="lxn"
            className="lx-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={!!err.name}
            aria-describedby={err.name ? "lxn-e" : undefined}
            autoComplete="name"
            placeholder="الاسم الكامل"
          />
          {err.name && (
            <p id="lxn-e" className="lx-err">
              {err.name}
            </p>
          )}
        </div>

        <div className="grid sm:grid-cols-2 gap-3.5">
          <div>
            <label htmlFor="lxp" className="block text-sm font-bold mb-1.5">
              الجوال <span className="text-[--lx-gold-warm]">*</span>
            </label>
            <input
              id="lxp"
              className="lx-input"
              type="tel"
              inputMode="tel"
              dir="ltr"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              aria-invalid={!!err.phone}
              aria-describedby={err.phone ? "lxp-e" : undefined}
              autoComplete="tel"
              placeholder="05XXXXXXXX"
            />
            {err.phone && (
              <p id="lxp-e" className="lx-err">
                {err.phone}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="lxd" className="block text-sm font-bold mb-1.5">
              تاريخ المناسبة
            </label>
            <input
              id="lxd"
              className="lx-input"
              type="date"
              min={today}
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="lx-btn lx-btn--wa w-full mt-1">
          <IconWhatsApp className="w-5 h-5" />
          أرسل الطلب مع التقدير
        </button>
        <p className="text-xs text-[--lx-cream-55] text-center leading-relaxed">
          التقدير مبدئي ويُحسب على الضيوف والمدة والطاقم. السعر النهائي يُثبَّت في
          عرض مكتوب بدون بنود مخفية.
        </p>
      </form>
    </div>
  );
}
