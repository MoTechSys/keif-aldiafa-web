"use client";

import { useEffect, useRef } from "react";
import { WaIcon } from "@/components/v7/WaIcon";
import { WHATSAPP_NUMBER } from "@/lib/site";

const CITIES = ["جدة", "مكة المكرمة", "المدينة المنورة", "الرياض", "الطائف", "الدمام", "أبها", "ينبع"];

/**
 * ContactForm — نموذج طلب عرض (النموذج v6.9 CONTACT_JS): لا يُخزَّن شيء؛ عند الإرسال
 * تُفتح رسالة واتساب مُعدّة بالتفاصيل. ?service= يملأ الاختيار مسبقاً.
 * ChannelFx (الأومنتريكس) يُربط هنا أيضاً لأنه في نفس مسار العميل.
 */
// D140: قائمة الخدمات تأتي props من الخادم — استيراد servicesContent هنا كان يجرّ الكتالوج كاملاً إلى حزمة العميل.
export type ServiceGroupOpt = { key: string; label: string; items: { id: string; title: string }[] };

export default function ContactForm({ groups }: { groups: ServiceGroupOpt[] }) {
  const ref = useRef<HTMLFormElement>(null);
  const err = useRef<HTMLParagraphElement>(null);
  const sel = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    const pre = new URLSearchParams(location.search).get("service");
    if (pre && sel.current?.querySelector(`option[value="${pre}"]`)) sel.current.value = pre;

    // الأومنتريكس — بطاقات القنوات
    const rm = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cards = Array.from(document.querySelectorAll<HTMLAnchorElement>(".ch"));
    const hs = cards.map((a) => {
      const h = (e: MouseEvent) => {
        if (rm || a.classList.contains("fire") || e.metaKey || e.ctrlKey || e.button) return;
        e.preventDefault(); a.classList.add("fire"); document.body.classList.add("ch-flash");
        document.body.style.setProperty("--tint", getComputedStyle(a).getPropertyValue("--tint"));
        setTimeout(() => { if (a.target === "_blank") window.open(a.href, "_blank", "noopener"); else location.href = a.href; }, 620);
        setTimeout(() => { a.classList.remove("fire"); document.body.classList.remove("ch-flash"); }, 1300);
      };
      a.addEventListener("click", h); return [a, h] as const;
    });
    return () => hs.forEach(([a, h]) => a.removeEventListener("click", h));
  }, []);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = e.currentTarget; const d = Object.fromEntries(new FormData(f)) as Record<string, string>;
    const E = err.current!; E.hidden = true;
    if (!d.name?.trim() || !d.phone?.trim() || !d.message?.trim()) {
      E.textContent = "يرجى إدخال الاسم والجوال وتفاصيل المناسبة."; E.hidden = false;
      (f.querySelector(":invalid") as HTMLElement | null)?.focus(); return;
    }
    const svcName = (v: string) => (sel.current?.querySelector(`option[value="${v}"]`) as HTMLOptionElement | null)?.textContent ?? "";
    const lines = [`مرحباً، أنا ${d.name.trim()}`, `📱 ${d.phone.trim()}`];
    if (d.email) lines.push(`📧 ${d.email}`);
    if (d.service) lines.push(`🎯 الخدمة: ${svcName(d.service)}`);
    if (d.date) lines.push(`📅 التاريخ: ${d.date}`);
    if (d.city) lines.push(`📍 المدينة: ${d.city}`);
    if (d.guests) lines.push(`👥 عدد الضيوف: ${d.guests}`);
    lines.push(`💬 ${d.message.trim()}`);
    (window as unknown as { dataLayer: unknown[] }).dataLayer = ((window as unknown as { dataLayer?: unknown[] }).dataLayer || []);
    (window as unknown as { dataLayer: unknown[] }).dataLayer.push({ event: "lead_wa", service: d.service || "", city: d.city });
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`, "_blank", "noopener");
  };

  const star = <span aria-hidden="true" style={{ color: "var(--gold)" }}>*</span>;
  return (
    <form className="form rv" id="leadForm" ref={ref} noValidate onSubmit={submit}>
      <div className="row">
        <label>الاسم {star}<input name="name" required autoComplete="name" placeholder="اسمك أو اسم الجهة" /></label>
        <label>الجوال {star}<input name="phone" type="tel" required autoComplete="tel" inputMode="tel" placeholder="05xxxxxxxx" dir="ltr" /></label>
      </div>
      <div className="row">
        <label>البريد الإلكتروني<input name="email" type="email" autoComplete="email" placeholder="اختياري" dir="ltr" /></label>
        <label>تاريخ المناسبة<input name="date" type="date" /></label>
      </div>
      <div className="row">
        <label>المدينة<select name="city" defaultValue="جدة">{CITIES.map((c) => <option key={c}>{c}</option>)}<option>مدينة أخرى</option></select></label>
        <label>عدد الضيوف التقريبي<input name="guests" type="number" min={1} inputMode="numeric" placeholder="مثال: 200" dir="ltr" /></label>
      </div>
      <label>الخدمة المطلوبة
        <select name="service" id="svcSel" ref={sel} defaultValue="">
          <option value="">اختر الخدمة</option>
          {groups.map((g) => (
            <optgroup key={g.key} label={g.label}>{g.items.map((i) => <option key={i.id} value={i.id}>{i.title}</option>)}</optgroup>
          ))}
          <optgroup label="أخرى"><option value="offerings">تقديمات ومعدات</option><option value="package">باقة متكاملة · طاقم + تقديمات + تجهيز</option></optgroup>
        </select>
      </label>
      <label>تفاصيل المناسبة {star}<textarea name="message" required placeholder="نوع المناسبة، المكان، الوقت، أي طلبات خاصة" /></label>
      <p className="note" id="formErr" role="alert" hidden ref={err} style={{ color: "#f0b3b3" }} />
      <button className="btn btn-gold btn-block" type="submit" data-ev="lead_submit"><WaIcon />أرسل عبر واتساب</button>
      <p className="note">تُفتح رسالة واتساب بالتفاصيل ليتابعها فريقنا معك مباشرة.</p>
    </form>
  );
}
