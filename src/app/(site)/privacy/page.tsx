import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/pages/shared";
import { generatePageMetadata } from "@/components/SEO";
import { generateBreadcrumbSchema, generateWebPageSchema } from "@/lib/schema";
import { EMAIL, LEGAL_NAME, SITE_URL, UNIFIED_NUMBER, WHATSAPP_DISPLAY } from "@/lib/site";

/**
 * /privacy — سياسة الخصوصية والكوكيز (D149 — نظام حماية البيانات الشخصية السعودي PDPL).
 * نفس قالب /legal (phero بلا صورة → .prose). يصف ما يجمعه الموقع فعلاً لا أكثر:
 * Google Analytics 4 + Google Ads عبر gtag مع Consent Mode v2 (افتراضي denied حتى الموافقة)،
 * ونموذج التواصل الذي يفتح واتساب فقط (لا خادم يخزّن البيانات).
 * أي نظام تتبّع يُضاف لاحقاً (Meta/TikTok عبر ENV) يجب أن يُذكر هنا قبل تفعيله.
 */
const PATH = "/privacy";
const URL = `${SITE_URL}${PATH}`;
const TITLE = "سياسة الخصوصية والكوكيز";
const DESC = "بياناتك في موقع كيف الضيافة: كوكيز Google Analytics وGoogle Ads بعد موافقتك فقط، تواصل عبر واتساب بلا تخزين، وحقوقك وفق نظام حماية البيانات الشخصية.";

export const metadata: Metadata = generatePageMetadata({ title: TITLE, description: DESC, path: PATH, keywords: ["سياسة الخصوصية", "الكوكيز", "حماية البيانات الشخصية", "كيف الضيافة"] });

const schemas = [
  generateBreadcrumbSchema([{ name: "الرئيسية", url: SITE_URL }, { name: "سياسة الخصوصية", url: URL }]),
  generateWebPageSchema({ name: `${TITLE} | كيف الضيافة`, description: DESC, url: URL }),
];

export default function PrivacyPage() {
  const year = new Date().getFullYear();
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <div className="v7">
        <PageHero
          label="الخصوصية"
          h1={<>سياسة الخصوصية <em>والكوكيز</em></>}
          p="ما نجمعه، ولماذا، وكيف تتحكّم فيه — بلغة واضحة."
          crumbs={[{ label: "سياسة الخصوصية" }]}
        />
        <section className="lsec on-deep" id="privacy">
          <div className="wrap">
            <div className="prose rv">
              <h2>من نحن</h2>
              <p>هذا الموقع تديره <b>{LEGAL_NAME}</b> (الرقم الوطني الموحّد <span dir="ltr">{UNIFIED_NUMBER}</span>)، ويهدف إلى تعريفك بخدماتنا وتسهيل تواصلك معنا عبر واتساب أو الاتصال.</p>

              <h2>ما البيانات التي نجمعها؟</h2>
              <ul>
                <li><b>بيانات التواصل التي ترسلها أنت:</b> نموذج «طلب عرض» في الموقع لا يُرسل شيئاً إلى خوادمنا؛ هو يجهّز رسالة واتساب تفتحها أنت بنفسك في تطبيق واتساب. ما تكتبه هناك يخضع لسياسة خصوصية واتساب (Meta) ولا يُخزَّن في هذا الموقع.</li>
                <li><b>بيانات الاستخدام (إحصائية):</b> عند موافقتك، تجمع أدوات Google بيانات مجهولة الهوية عن زيارتك: الصفحات التي فتحتها، نوع الجهاز والمتصفح، المدينة التقريبية، ومصدر الوصول (بحث/إعلان/رابط). لا تتضمّن اسمك أو رقمك.</li>
              </ul>

              <h2>الكوكيز التي نستخدمها</h2>
              <p>نستخدم نظامَين فقط، وكلاهما من Google، ولا يُفعَّل أيٌّ منهما إلا بعد ضغطك «موافق» في شريط الكوكيز:</p>
              <ul>
                <li><b>Google Analytics 4</b> — لقياس عدد الزوار وأكثر الصفحات فائدة، كي نحسّن الموقع.</li>
                <li><b>Google Ads</b> — لمعرفة ما إذا وصلتَ إلينا عبر إعلان، ولقياس نقرات «واتساب» و«اتصال» كتحويلات؛ يساعدنا ذلك على عدم إظهار إعلاناتنا لمن لا يحتاجها.</li>
              </ul>
              <p>قبل موافقتك يعمل الموقع في <b>وضع بلا كوكيز</b> (Consent Mode): لا يُحفَظ أي معرّف على جهازك، وتُرسَل إشارات مجهولة تماماً لقياس عام فقط. إذا اخترت «الضروري فقط» يبقى هذا الوضع دائماً.</p>

              <h2>كيف تغيّر اختيارك؟</h2>
              <p>اختيارك محفوظ في متصفحك تحت اسم <span dir="ltr">kd_consent</span>. لتغييره: امسح بيانات الموقع من إعدادات متصفحك، فيظهر الشريط مجدداً عند زيارتك التالية. يمكنك أيضاً حجب كوكيز Google من إعدادات حسابك في Google أو عبر إضافة «Google Analytics Opt-out».</p>

              <h2>حقوقك وفق نظام حماية البيانات الشخصية</h2>
              <p>وفق نظام حماية البيانات الشخصية في المملكة العربية السعودية، لك الحق في معرفة ما نجمعه، وطلب نسخة منه أو تصحيحه أو حذفه، وسحب موافقتك في أي وقت. ولأننا لا نخزّن بيانات شخصية على خوادمنا، تنحصر بياناتك في محادثة واتساب معنا؛ يمكنك طلب حذفها بمراسلتنا على <span dir="ltr">{EMAIL}</span> أو واتساب <span dir="ltr">{WHATSAPP_DISPLAY}</span>.</p>

              <h2>مشاركة البيانات</h2>
              <p>لا نبيع بياناتك ولا نشاركها مع أي جهة تسويقية. المعالج الوحيد للبيانات الإحصائية هو Google LLC وفق شروطها، وقد تُعالَج خارج المملكة على خوادم Google.</p>

              <h2>الأطفال</h2>
              <p>خدماتنا موجّهة للبالغين ومنظّمي المناسبات، ولا نجمع عن قصد أي بيانات من أطفال دون 18 عاماً.</p>

              <h2>التحديثات</h2>
              <p>إذا أضفنا أي أداة تتبّع جديدة سنذكرها هنا قبل تفعيلها، ويُعاد طلب موافقتك. آخر تحديث لهذه السياسة: {year}.</p>

              <h2>التواصل</h2>
              <p>لأي سؤال عن خصوصيتك: <span dir="ltr">{EMAIL}</span> أو <Link href="/contact">صفحة التواصل</Link>. انظر أيضاً <Link href="/legal">الحقوق القانونية والملكية الفكرية</Link>.</p>
              <p className="foot">{LEGAL_NAME} — الرقم الوطني الموحّد <span dir="ltr">{UNIFIED_NUMBER}</span>.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
