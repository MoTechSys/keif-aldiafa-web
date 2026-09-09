import Image from "next/image";
import { ContactBlock, PageHero, WaBtn } from "@/components/pages/shared";
import { SecHead } from "@/components/home/shared";
import { PHONE, SOCIAL, WHATSAPP_DISPLAY } from "@/lib/site";

/**
 * SocialPage — تابعنا = النموذج v6.9 build_social 1:1 (D115):
 * phero بلا صورة → باركود واتساب (.qr) → بطاقات المنصّات الخمس (.cgrid-l) → تواصل.
 * الروابط من SOCIAL في lib/site.ts (لا نخترع روابط).
 */
const NETS: { k: keyof typeof SOCIAL; n: string; h: string; d: string }[] = [
  { k: "instagram", n: "إنستغرام", h: "@keifaldiafa", d: "معرض أعمالنا بالصور — قاعات وكاونترات وتوزيعات" },
  { k: "tiktok", n: "تيك توك", h: "@keifaldiafa", d: "فيديوهات من قلب المناسبات لحظة بلحظة" },
  { k: "snapchat", n: "سناب شات", h: "keifaldiafa", d: "تغطية حيّة للمناسبات يوم تنفيذها" },
  { k: "x", n: "إكس", h: "@keifaldiafa", d: "أخبارنا وجديد خدمات الضيافة" },
  { k: "facebook", n: "فيسبوك", h: "كيف الضيافة", d: "صفحتنا الرسمية وتقييمات عملائنا" },
];
const WA_QR = "السلام عليكم، أرغب بالاستفسار عن خدمات كيف الضيافة";
const WA = "السلام عليكم، شاهدت حساباتكم وأرغب بالاستفسار لمناسبة:\nالمدينة: \nالتاريخ: \nعدد الضيوف: ";

export default function SocialPage() {
  return (
    <div className="v7">
      <PageHero
        label="تابعنا"
        h1={<>تابعنا وشاهد <em>ضيافتنا</em> — قبل أن تحجزها</>}
        p="كل مناسبة نخدمها نصوّرها: القاعات، الكاونترات، الطاقم بزيّه، والتوزيعات. تابعنا على المنصّة التي تفضّلها أو امسح الباركود."
        crumbs={[{ label: "حساباتنا" }]}
      />
      <section className="lsec on-deep glow" id="qr">
        <div className="wrap">
          <div className="qr rv">
            <Image src="/images/brand/qr-keif-aldiafa.png" alt="باركود واتساب كيف الضيافة" width={984} height={984} sizes="220px" loading="lazy" />
            <div>
              <h2 style={{ color: "var(--gold-hi)", fontSize: "1.3rem" }}>امسح الباركود</h2>
              <p>وجّه كاميرا هاتفك إلى الرمز لفتح محادثة واتساب معنا مباشرة — أو احفظ الرقم: <a className="num" href={`tel:${PHONE}`}>{WHATSAPP_DISPLAY}</a></p>
              <WaBtn text={WA_QR} cls="btn btn-wa btn-sm" label="افتح واتساب" ev="wa_qr" />
            </div>
          </div>
        </div>
      </section>
      <section className="lsec on-rich" id="nets">
        <div className="wrap">
          <SecHead label="منصّاتنا" h2="خمس منصّات — محتوى مختلف في كل واحدة" />
          <div className="cgrid-l">
            {NETS.map((x) => (
              <a key={x.k} className="rv" href={SOCIAL[x.k]} target="_blank" rel="noopener" data-ev={x.k}>
                <b>{x.n}</b><small dir="ltr" style={{ unicodeBidi: "isolate" }}>{x.h}</small><p>{x.d}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
      <ContactBlock h2={<>أعجبك ما رأيت؟ <em>احجزه</em></>} p="أرسل المدينة والتاريخ وعدد الضيوف على واتساب." wa={WA} />
    </div>
  );
}
