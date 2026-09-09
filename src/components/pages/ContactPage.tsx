import Link from "next/link";
import ContactChannels from "@/components/pages/ContactChannels";
import ContactForm from "@/components/pages/ContactForm";
import { CITIES } from "@/lib/cities";

/**
 * ContactPage — تواصل معنا = النموذج v6.9 build_contact 1:1 (D99/D102):
 * رأس الشعار + بطاقات القنوات → نموذج طلب عرض (واتساب) → شريط المدن.
 * لا قسم #contact هنا (الصفحة كلها تواصل)؛ الواتساب الطافي يبقى كما في النموذج.
 */
export default function ContactPage() {
  return (
    <div className="v7">
      <ContactChannels src="contact" />
      <section className="on-deep glow" id="form">
        <div className="wrap">
          <div className="sec-head">
            <span className="label rv">أو أرسل تفاصيل مناسبتك</span>
            <h2 className="rv">نموذج <em>طلب عرض</em></h2>
            <p className="rv">املأ الحقول وستُفتح رسالة واتساب مُعدّة بكل التفاصيل — لا يُخزَّن أي شيء هنا.</p>
          </div>
          <ContactForm />
        </div>
      </section>
      <section className="cities on-black" id="cities" aria-label="المدن التي نخدمها">
        <div className="wrap rv">
          <span className="lbl">نصل إليكم في:</span>
          {CITIES.map((c) => <Link key={c.slug} className={c.slug === "جدة" ? "main" : undefined} href={`/locations/${c.slug}`}>{c.name}</Link>)}
          <Link href="/locations">كل المدن ›</Link>
          <span className="lbl" style={{ marginInlineStart: 6 }}>وجميع مناطق المملكة</span>
        </div>
      </section>
    </div>
  );
}
