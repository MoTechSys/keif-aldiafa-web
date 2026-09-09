/* eslint-disable */
// ⚠️ ملف مولَّد آلياً — لا يُحرَّر يدوياً.
// المصدر: MoTechSys/catalog-keif-aldiafa-photots (catalog/catalog.json) · المولِّد: scripts/import-catalog.mjs
// D111: alt والعناوين منقولة حرفياً من الكتالوج.

export type CatalogPublish = "yes" | "decorative";

export interface CatalogRecord {
  /** رقم السجل في الكتالوج */
  id: number;
  /** مستوى قوة الإثبات 1 (حكومي/جامعات) → 6 (ستوك) — D110 */
  tier: number;
  /** اسم الملف داخل public/images/catalog/ */
  file: string;
  width: number;
  height: number;
  kb: number;
  /** alt حرفي من الكتالوج (D111) */
  alt: string;
  /** العنوان — يُستخدم كـ ImageObject.name */
  title: string;
  entity: string;
  entityEn: string;
  sector: string;
  service: string;
  place: string;
  /** الصفحات المستهدفة (مسارات لاتينية؛ "/" = الرئيسية). قد تحوي صفحات لم تُبنَ بعدُ (المرحلة 7). */
  pages: string[];
  /** decorative = خلفيات فقط: لا image-sitemap ولا ImageObject */
  publish: CatalogPublish;
}

export const CATALOG_VERSION = "v4 — 2026-09-07";

export const CATALOG: readonly CatalogRecord[] = [
  {
    "id": 1,
    "tier": 1,
    "file": "keif-aldiafa-event-aljar-marina-madinah-chamber-reception-qahwaji-dates.webp",
    "width": 703,
    "height": 1200,
    "kb": 59,
    "alt": "قهوجي من كيف الضيافة خلف مكتب استقبال مرسى الجار مع تمور وقهوة وعلم السعودية وعلم الغرفة التجارية بالمدينة المنورة",
    "title": "ضيافة كيف الضيافة في استقبال مرسى الجار — غرفة المدينة",
    "entity": "مرسى الجار · الغرفة التجارية بالمدينة المنورة",
    "entityEn": "Aljar Marina · Madinah Chamber of Commerce",
    "sector": "غرفة تجارية / عقاري",
    "service": "قهوجي — قهوة وتمور على مكتب استقبال",
    "place": "مكتب استقبال — المدينة المنورة",
    "pages": [
      "/coffee-break-sharikat-jeddah",
      "/qahwajiin-madinah"
    ],
    "publish": "yes"
  },
  {
    "id": 2,
    "tier": 1,
    "file": "keif-aldiafa-event-hajj-conference-exhibition-vision-2030-qahwaji-jeddah.webp",
    "width": 900,
    "height": 1200,
    "kb": 118,
    "alt": "قهوجي من كيف الضيافة يقدم القهوة العربية أمام شاشة مؤتمر ومعرض الحج — رؤية 2030 بجدة",
    "title": "ضيافة كيف الضيافة في مؤتمر ومعرض الحج بجدة",
    "entity": "مؤتمر ومعرض الحج — رؤية 2030",
    "entityEn": "Hajj Conference & Exhibition",
    "sector": "حكومي — مؤتمر وطني",
    "service": "قهوجي أمام شاشة المؤتمر",
    "place": "مؤتمر ومعرض الحج",
    "pages": [
      "/",
      "/portfolio",
      "/coffee-break-sharikat-jeddah",
      "/qahwajiin-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 3,
    "tier": 1,
    "file": "keif-aldiafa-event-ibn-sina-national-college-medical-qahwaji-hostess-expo.webp",
    "width": 759,
    "height": 1200,
    "kb": 54,
    "alt": "قهوجي ومضيفة من كيف الضيافة يقدمان الضيافة في جناح كلية ابن سينا الأهلية للعلوم الطبية بمعرض تعليمي في جدة",
    "title": "ضيافة كيف الضيافة في جناح كلية ابن سينا الأهلية",
    "entity": "كلية ابن سينا الأهلية للعلوم الطبية",
    "entityEn": "Ibn Sina National College for Medical Studies",
    "sector": "أكاديمي — كلية",
    "service": "قهوجي + مضيفة في جناح الكلية",
    "place": "معرض تعليمي",
    "pages": [
      "/",
      "/portfolio",
      "/coffee-break-sharikat-jeddah",
      "/qahwajiin-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 4,
    "tier": 1,
    "file": "keif-aldiafa-event-jeddah-municipality-national-day-94-qahwaji-arabic-coffee.webp",
    "width": 720,
    "height": 1178,
    "kb": 71,
    "alt": "قهوجي من كيف الضيافة يحمل دلة ذهبية أمام لوحة أمانة جدة «نحلم ونحقق» في احتفال اليوم الوطني السعودي 94",
    "title": "ضيافة كيف الضيافة في احتفال أمانة جدة باليوم الوطني 94",
    "entity": "أمانة جدة  اليوم الوطني السعودي 94",
    "entityEn": "Jeddah Municipality  Saudi National Day 94",
    "sector": "حكومي  أمانة",
    "service": "قهوجي — تقديم قهوة عربية",
    "place": "فعالية اليوم الوطني — جدة",
    "pages": [
      "/coffee-break-sharikat-jeddah",
      "/qahwajiin-jeddah",
      "/portfolio"
    ],
    "publish": "yes"
  },
  {
    "id": 5,
    "tier": 1,
    "file": "keif-aldiafa-event-king-salman-chair-history-heritage-tent-four-qahwajiin.webp",
    "width": 1200,
    "height": 675,
    "kb": 98,
    "alt": "أربعة قهوجيين من كيف الضيافة بالدقلة السوداء ذات الحواف الذهبية في خيمة التاريخ والتراث لكرسي الملك سلمان بن عبدالعزيز لدراسات التاريخ",
    "title": "ضيافة كيف الضيافة في خيمة التراث — كرسي الملك سلمان لدراسات التاريخ",
    "entity": "كرسي الملك سلمان بن عبدالعزيز لدراسات تاريخ… — خيمة التاريخ والتراث",
    "entityEn": "King Salman Chair for History Studies — Heritage Tent",
    "sector": "أكاديمي / ثقافي",
    "service": "4 قهوجيين — دقلة سوداء بحواف ذهبية",
    "place": "فعالية ثقافية",
    "pages": [
      "/",
      "/portfolio",
      "/coffee-break-sharikat-jeddah",
      "/qahwajiin-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 6,
    "tier": 1,
    "file": "keif-aldiafa-event-madinah-municipality-jeddah-chamber-exhibition-vip-reception.webp",
    "width": 690,
    "height": 1200,
    "kb": 118,
    "alt": "قهوجي من كيف الضيافة بزي أسود مطرز يستقبل مسؤولاً في جناح أمانة منطقة المدينة المنورة بمعرض الغرفة التجارية الصناعية بجدة",
    "title": "ضيافة كيف الضيافة في جناح أمانة المدينة المنورة — معرض غرفة جدة",
    "entity": "أمانة منطقة المدينة المنورة · الغرفة التجارية الصناعية بجدة",
    "entityEn": "Madinah Regional Municipality · Jeddah Chamber of Commerce",
    "sector": "حكومي  أمانة",
    "service": "استقبال VIP — قهوجي بزي رسمي وسيف احتفالي",
    "place": "جناح معرض — جدة",
    "pages": [
      "/coffee-break-sharikat-jeddah",
      "/portfolio"
    ],
    "publish": "yes"
  },
  {
    "id": 7,
    "tier": 1,
    "file": "keif-aldiafa-event-makkah-halal-forum-qahwaji-lounge-coffee-dates.webp",
    "width": 1200,
    "height": 900,
    "kb": 83,
    "alt": "قهوجي من كيف الضيافة بالدقلة السوداء يقدم القهوة والتمور في لاونج منتدى مكة للحلال",
    "title": "ضيافة كيف الضيافة في منتدى مكة للحلال",
    "entity": "منتدى مكة للحلال",
    "entityEn": "Makkah Halal Forum",
    "sector": "منتدى دولي — مكة",
    "service": "قهوجي — دقلة سوداء — قهوة وتمور في اللاونج",
    "place": "منتدى مكة للحلال",
    "pages": [
      "/",
      "/portfolio",
      "/coffee-break-sharikat-jeddah",
      "/qahwajiin-makkah"
    ],
    "publish": "yes"
  },
  {
    "id": 8,
    "tier": 1,
    "file": "keif-aldiafa-event-ministry-of-hajj-umrah-hafawah-qahwaji-coffee-dates.webp",
    "width": 900,
    "height": 1200,
    "kb": 70,
    "alt": "قهوجي من كيف الضيافة يقدم القهوة العربية والتمور في جناح وزارة الحج والعمرة ببرنامج «حفاوة — من مكة إلى العالم»",
    "title": "ضيافة كيف الضيافة في جناح وزارة الحج والعمرة — حفاوة",
    "entity": "وزارة الحج والعمرة — حفاوة · من مكة إلى العالم",
    "entityEn": "Ministry of Hajj and Umrah — Hafawah",
    "sector": "حكومي — وزارة",
    "service": "قهوجي — قهوة وتمور",
    "place": "جناح وزارة الحج والعمرة",
    "pages": [
      "/",
      "/portfolio",
      "/coffee-break-sharikat-jeddah",
      "/qahwajiin-makkah"
    ],
    "publish": "yes"
  },
  {
    "id": 9,
    "tier": 1,
    "file": "keif-aldiafa-event-ministry-of-media-qahwaji-golden-dallah-booth.webp",
    "width": 900,
    "height": 1200,
    "kb": 57,
    "alt": "قهوجي من كيف الضيافة بالدقلة السوداء يحمل دلة ذهبية أمام جدار جناح وزارة الإعلام",
    "title": "ضيافة كيف الضيافة في جناح وزارة الإعلام",
    "entity": "وزارة الإعلام",
    "entityEn": "Ministry of Media",
    "sector": "حكومي — وزارة",
    "service": "قهوجي — دقلة سوداء — دلة ذهبية أمام جدار الوزارة",
    "place": "جناح وزارة الإعلام",
    "pages": [
      "/",
      "/portfolio",
      "/coffee-break-sharikat-jeddah",
      "/qahwajiin-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 10,
    "tier": 1,
    "file": "keif-aldiafa-event-ministry-of-transport-tga-mawani-qahwaji-arabic-coffee-exhibition.webp",
    "width": 720,
    "height": 1178,
    "kb": 108,
    "alt": "قهوجي من كيف الضيافة يصب القهوة العربية من دلة في جناح وزارة النقل والخدمات اللوجستية والهيئة العامة للنقل ومواني بأحد المعارض",
    "title": "ضيافة كيف الضيافة في جناح وزارة النقل والخدمات اللوجستية",
    "entity": "وزارة النقل والخدمات اللوجستية · الهيئة العامة للنقل · مواني",
    "entityEn": "Ministry of Transport & Logistics · TGA · MAWANI",
    "sector": "حكومي  وزارة",
    "service": "قهوجي — تقديم قهوة عربية",
    "place": "جناح معرض",
    "pages": [
      "/coffee-break-sharikat-jeddah",
      "/portfolio"
    ],
    "publish": "yes"
  },
  {
    "id": 11,
    "tier": 1,
    "file": "keif-aldiafa-event-official-vip-reception-hall-saudi-emblem-qahwajiin-incense.webp",
    "width": 681,
    "height": 1200,
    "kb": 122,
    "alt": "ثلاثة قهوجيين من كيف الضيافة بزي أسود مطرز يحملون المباخر أمام الشعار الوطني السعودي في قاعة استقبال رسمية",
    "title": "استقبال رسمي بالقهوة والبخور — كيف الضيافة",
    "entity": "قاعة استقبال رسمية  الشعار الوطني السعودي",
    "entityEn": "Official VIP hall  Saudi national emblem",
    "sector": "حكومي  استقبال رسمي",
    "service": "قهوجيين + مباخر — استقبال كبار الشخصيات",
    "place": "قاعة استقبال رسمية",
    "pages": [
      "/mubashirin-qahwa-jeddah",
      "/portfolio"
    ],
    "publish": "yes"
  },
  {
    "id": 12,
    "tier": 1,
    "file": "keif-aldiafa-event-saudi-electricity-company-anti-corruption-day-qahwajiin-coffee-stand.webp",
    "width": 720,
    "height": 1178,
    "kb": 91,
    "alt": "قهوجيان من كيف الضيافة بزي أسود مطرز خلف ركن قهوة عربية وتمور وبخور في فعالية الشركة السعودية للكهرباء لليوم الدولي لمكافحة الفساد",
    "title": "ضيافة كيف الضيافة في فعالية الشركة السعودية للكهرباء",
    "entity": "الشركة السعودية للكهرباء  اليوم الدولي لمكافحة الفساد",
    "entityEn": "Saudi Electricity Company  International Anti-Corruption Day",
    "sector": "حكومي  شركة حكومية",
    "service": "قهوجيين — ركن قهوة وتمور وبخور",
    "place": "بهو شركة / فعالية داخلية",
    "pages": [
      "/coffee-break-sharikat-jeddah",
      "/portfolio"
    ],
    "publish": "yes"
  },
  {
    "id": 13,
    "tier": 1,
    "file": "keif-aldiafa-event-saudi-national-day-92-carved-watermelon-banquet-hall.webp",
    "width": 1200,
    "height": 900,
    "kb": 133,
    "alt": "بطيخة منحوتة بعبارة «عزنا بوطننا — اليوم الوطني السعودي 92» على طاولة بوفيه كيف الضيافة في قاعة احتفالات",
    "title": "ضيافة اليوم الوطني 92 — كيف الضيافة",
    "entity": "اليوم الوطني السعودي 92  «عزنا بوطننا»",
    "entityEn": "Saudi National Day 92",
    "sector": "مناسبة وطنية",
    "service": "بوفيه — نحت فني على البطيخ",
    "place": "قاعة احتفالات",
    "pages": [
      "/offerings",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 14,
    "tier": 1,
    "file": "keif-aldiafa-event-saudia-awqaf-exhibition-qahwaji-floral-reception.webp",
    "width": 703,
    "height": 1200,
    "kb": 158,
    "alt": "قهوجي من كيف الضيافة بزي أسود مطرز خلف طاولة ورد أبيض في معرض تظهر فيه أجنحة الخطوط السعودية وأوقاف",
    "title": "ضيافة كيف الضيافة في معرض السعودية وأوقاف",
    "entity": "السعودية · أوقاف",
    "entityEn": "Saudia · AWQAF",
    "sector": "حكومي  معرض",
    "service": "قهوجي — استقبال",
    "place": "جناح معرض",
    "pages": [
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 15,
    "tier": 1,
    "file": "keif-aldiafa-event-saudia-group-cybersecurity-awareness-qahwaji-arabic-coffee.webp",
    "width": 900,
    "height": 1200,
    "kb": 127,
    "alt": "قهوجي من كيف الضيافة يحمل دلة ذهبية أمام لافتة فعالية التوعية بالأمن السيبراني لمجموعة السعودية — مركز التميز للأمن السيبراني",
    "title": "ضيافة كيف الضيافة في فعالية مجموعة السعودية للأمن السيبراني",
    "entity": "مجموعة السعودية  فعالية التوعية بالأمن السيبراني",
    "entityEn": "Saudia Group  Cybersecurity Awareness Event",
    "sector": "شركة حكومية  طيران",
    "service": "قهوجي — تقديم قهوة عربية",
    "place": "فعالية داخلية للموظفين",
    "pages": [
      "/coffee-break-sharikat-jeddah",
      "/portfolio"
    ],
    "publish": "yes"
  },
  {
    "id": 16,
    "tier": 1,
    "file": "keif-aldiafa-event-turkish-pilgrims-affairs-office-alrifadah-qahwaji-exhibition.webp",
    "width": 900,
    "height": 1200,
    "kb": 86,
    "alt": "قهوجي من كيف الضيافة يحمل دلة ذهبية أمام جدار جناح مكتب شؤون حجاج تركيا وشركة الرفادة في معرض الحج",
    "title": "ضيافة كيف الضيافة في جناح مكتب شؤون حجاج تركيا",
    "entity": "مكتب شؤون حجاج تركيا · شركة الرفادة",
    "entityEn": "Turkish Pilgrims Affairs Office · Al-Rifadah",
    "sector": "حج وعمرة",
    "service": "قهوجي بدلة ذهبية أمام جدار المعرض",
    "place": "معرض",
    "pages": [
      "/",
      "/portfolio",
      "/coffee-break-sharikat-jeddah",
      "/qahwajiin-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 17,
    "tier": 1,
    "file": "keif-aldiafa-event-umm-al-qura-university-investment-booth-qahwaji-1.webp",
    "width": 720,
    "height": 1178,
    "kb": 101,
    "alt": "قهوجي من كيف الضيافة بثوب أبيض وصديري أسود يحمل دلة ذهبية في جناح جامعة أم القرى بمعرض الاستثمار",
    "title": "ضيافة كيف الضيافة في جناح جامعة أم القرى",
    "entity": "جامعة أم القرى  جناح استثمار",
    "entityEn": "Umm Al-Qura University  Investment booth",
    "sector": "جامعة",
    "service": "قهوجي — تقديم قهوة عربية",
    "place": "جناح معرض — مكة",
    "pages": [
      "/coffee-break-sharikat-jeddah",
      "/qahwajiin-makkah",
      "/portfolio"
    ],
    "publish": "yes"
  },
  {
    "id": 18,
    "tier": 1,
    "file": "keif-aldiafa-event-umm-al-qura-university-investment-booth-qahwaji-2.webp",
    "width": 720,
    "height": 1178,
    "kb": 98,
    "alt": "قهوجي من كيف الضيافة يقدم القهوة العربية في جناح جامعة أم القرى — لقطة ثانية",
    "title": "ضيافة كيف الضيافة في جناح جامعة أم القرى — 2",
    "entity": "جامعة أم القرى  جناح استثمار",
    "entityEn": "Umm Al-Qura University",
    "sector": "جامعة",
    "service": "قهوجي — تقديم قهوة عربية",
    "place": "جناح معرض — مكة",
    "pages": [
      "/qahwajiin-makkah"
    ],
    "publish": "yes"
  },
  {
    "id": 19,
    "tier": 2,
    "file": "keif-aldiafa-event-75-years-heritage-company-qahwaji-dates-palm-display-1.webp",
    "width": 675,
    "height": 1200,
    "kb": 162,
    "alt": "قهوجي من كيف الضيافة يصب القهوة العربية بجانب نخلة تمور على طاولة سدو في احتفال شركة بمرور 75 عاماً",
    "title": "ضيافة كيف الضيافة في احتفال 75 عاماً لشركة",
    "entity": "شركة بذكرى 75 عاماً  «A Tradition of Business Heritage»",
    "entityEn": "75 Years  corporate anniversary",
    "sector": "شركات ومجموعات",
    "service": "قهوجي — قهوة عربية ونخلة تمور",
    "place": "بهو شركة بجدران خشبية مزخرفة",
    "pages": [
      "/coffee-break-sharikat-jeddah",
      "/portfolio"
    ],
    "publish": "yes"
  },
  {
    "id": 20,
    "tier": 2,
    "file": "keif-aldiafa-event-75-years-heritage-company-qahwaji-dates-palm-display-2.webp",
    "width": 675,
    "height": 1200,
    "kb": 160,
    "alt": "قهوجي من كيف الضيافة واقف خلف طاولة تمور وقهوة في احتفال شركة بمرور 75 عاماً — لقطة ثانية",
    "title": "ضيافة كيف الضيافة في احتفال 75 عاماً — 2",
    "entity": "شركة بذكرى 75 عاماً",
    "entityEn": "75 Years anniversary",
    "sector": "شركات ومجموعات",
    "service": "قهوجي — قهوة عربية ونخلة تمور",
    "place": "بهو شركة",
    "pages": [
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 21,
    "tier": 2,
    "file": "keif-aldiafa-event-adidas-hackett-london-store-mirror-photo-booth.webp",
    "width": 718,
    "height": 1200,
    "kb": 130,
    "alt": "مرآة تصوير من كيف الضيافة بإطار مضيء وسجادة بنفسجية أمام متجري أديداس وهاكيت لندن",
    "title": "مرآة تصوير كيف الضيافة في فعالية أديداس وهاكيت لندن",
    "entity": "أديداس · هاكيت لندن",
    "entityEn": "adidas · Hackett London",
    "sector": "تجزئة",
    "service": "خدمات فنية — مرآة تصوير",
    "place": "متجر ملابس — مول",
    "pages": [
      "/services"
    ],
    "publish": "yes"
  },
  {
    "id": 22,
    "tier": 2,
    "file": "keif-aldiafa-event-ajdal-jeddah-alinma-investment-qahwaji-exhibition.webp",
    "width": 900,
    "height": 1200,
    "kb": 83,
    "alt": "قهوجي من كيف الضيافة يحمل دلة أمام مخطط مشروع أجدال جدة للإنماء للاستثمار في معرض عقاري بجدة",
    "title": "ضيافة كيف الضيافة في جناح مخطط أجدال — الإنماء للاستثمار",
    "entity": "مخطط أجدال جدة — الإنماء للاستثمار",
    "entityEn": "Ajdal Jeddah · Alinma Investment",
    "sector": "عقاري",
    "service": "قهوجي",
    "place": "جناح معرض — جدة",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 23,
    "tier": 2,
    "file": "keif-aldiafa-event-al-amjaad-trading-manufacturing-vip-welcome-qahwajiin.webp",
    "width": 720,
    "height": 1140,
    "kb": 70,
    "alt": "قهوجيان من كيف الضيافة بزي أسود مطرز يستقبلان الضيوف بجانب شاشة وعلم شركة الأمجاد للتجارة والصناعة",
    "title": "ضيافة كيف الضيافة في شركة الأمجاد",
    "entity": "شركة الأمجاد للتجارة والصناعة",
    "entityEn": "Al Amjaad Trading & Manufacturing",
    "sector": "صناعي",
    "service": "قهوجيين — استقبال VIP",
    "place": "بهو شركة",
    "pages": [
      "/coffee-break-sharikat-jeddah",
      "/portfolio"
    ],
    "publish": "yes"
  },
  {
    "id": 24,
    "tier": 2,
    "file": "keif-aldiafa-event-al-borg-diagnostics-labs-qahwaji-dates-coffee-1.webp",
    "width": 900,
    "height": 1200,
    "kb": 152,
    "alt": "قهوجي من كيف الضيافة خلف طاولة سدو حمراء عليها تمور وحلا ودلة ذهبية في فعالية مختبرات البرج",
    "title": "ضيافة كيف الضيافة في مختبرات البرج",
    "entity": "مختبرات البرج",
    "entityEn": "Al Borg Diagnostics",
    "sector": "صحي",
    "service": "قهوجي — ركن قهوة وتمور وحلا",
    "place": "بهو مختبرات",
    "pages": [
      "/coffee-break-sharikat-jeddah",
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 25,
    "tier": 2,
    "file": "keif-aldiafa-event-al-borg-diagnostics-labs-qahwaji-dates-coffee-2.webp",
    "width": 900,
    "height": 1200,
    "kb": 177,
    "alt": "قهوجي من كيف الضيافة يقدم القهوة والتمور والحلا في منطقة انتظار مختبرات البرج — لقطة ثانية",
    "title": "ضيافة كيف الضيافة في مختبرات البرج — 2",
    "entity": "مختبرات البرج",
    "entityEn": "Al Borg Diagnostics",
    "sector": "صحي",
    "service": "قهوجي — ركن قهوة وتمور وحلا",
    "place": "منطقة انتظار مختبرات",
    "pages": [
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 26,
    "tier": 2,
    "file": "keif-aldiafa-event-al-borg-diagnostics-labs-qahwaji-dates-coffee-3.webp",
    "width": 900,
    "height": 1200,
    "kb": 157,
    "alt": "قهوجي من كيف الضيافة خلف ركن التمور والقهوة في منطقة الانتظار بمختبرات البرج — لقطة ثالثة",
    "title": "ضيافة كيف الضيافة في مختبرات البرج — 3",
    "entity": "مختبرات البرج",
    "entityEn": "Al Borg Diagnostics",
    "sector": "صحي",
    "service": "قهوجي — ركن قهوة وتمور",
    "place": "منطقة انتظار مختبرات",
    "pages": [
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 27,
    "tier": 2,
    "file": "keif-aldiafa-event-al-miftah-showroom-qahwaji-dallah.webp",
    "width": 900,
    "height": 1200,
    "kb": 41,
    "alt": "قهوجي من كيف الضيافة يحمل دلة بجانب لافتة المفتاح في صالة العرض",
    "title": "ضيافة كيف الضيافة في صالة عرض المفتاح",
    "entity": "المفتاح",
    "entityEn": "Al-Miftah",
    "sector": "شركات",
    "service": "قهوجي",
    "place": "صالة عرض المفتاح",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 28,
    "tier": 2,
    "file": "keif-aldiafa-event-al-rayyan-al-makkiya-hotels-sadaa-qahwaji-exhibition.webp",
    "width": 900,
    "height": 1200,
    "kb": 105,
    "alt": "قهوجي من كيف الضيافة يقدم القهوة العربية في جناح فنادق الريان المكية — سدى بأحد معارض الحج والعمرة",
    "title": "ضيافة كيف الضيافة في جناح فنادق الريان المكية",
    "entity": "فنادق الريان المكية — سدى",
    "entityEn": "Al-Rayyan Al-Makkiya Hotels · SADAA",
    "sector": "فنادق",
    "service": "قهوجي",
    "place": "جناح معرض",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 29,
    "tier": 2,
    "file": "keif-aldiafa-event-al-safeer-watania-qahwaji-hostess-exhibition.webp",
    "width": 1200,
    "height": 903,
    "kb": 88,
    "alt": "قهوجي ومضيفة من كيف الضيافة يقدمان القهوة في جناح السفير والوطنية بأحد المعارض",
    "title": "ضيافة كيف الضيافة في جناح السفير — الوطنية",
    "entity": "السفير · الوطنية",
    "entityEn": "Al Safeer · Watania",
    "sector": "شركات",
    "service": "قهوجي + مضيفة",
    "place": "جناح معرض",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 30,
    "tier": 2,
    "file": "keif-aldiafa-event-al-wessam-transport-exhibition-booth-qahwaji.webp",
    "width": 675,
    "height": 1200,
    "kb": 137,
    "alt": "قهوجي من كيف الضيافة يصب القهوة من دلة أمام جناح شركة الوسام المتميزة للنقل في المعرض",
    "title": "ضيافة كيف الضيافة في جناح الوسام المتميزة للنقل",
    "entity": "الوسام المتميزة للنقل",
    "entityEn": "Al-Wessam Al-Mutamayizah Transport",
    "sector": "نقل",
    "service": "قهوجي — تقديم قهوة عربية",
    "place": "جناح معرض",
    "pages": [
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 31,
    "tier": 2,
    "file": "keif-aldiafa-event-alinma-kayan-qahwaji-dallah-exhibition.webp",
    "width": 900,
    "height": 1200,
    "kb": 126,
    "alt": "قهوجي من كيف الضيافة يحمل دلة ذهبية في جناح الإنماء وكيان بأحد المعارض",
    "title": "ضيافة كيف الضيافة في جناح الإنماء — كيان",
    "entity": "الإنماء · كيان",
    "entityEn": "Alinma · KAYAN",
    "sector": "بنوك وتمويل",
    "service": "قهوجي",
    "place": "جناح معرض",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 32,
    "tier": 2,
    "file": "keif-aldiafa-event-almana-medical-group-qahwaji-booth-wide-3.webp",
    "width": 960,
    "height": 1200,
    "kb": 48,
    "alt": "قهوجي من كيف الضيافة بالثوب الأبيض والصديري الأسود يحمل دلة ذهبية أمام جدار جناح مجموعة المانع الطبية — لقطة ثالثة واسعة",
    "title": "ضيافة كيف الضيافة في جناح مجموعة المانع الطبية — 3",
    "entity": "مجموعة المانع الطبية",
    "entityEn": "Almana Medical Group",
    "sector": "صحي",
    "service": "قهوجي — يحمل دلة ذهبية أمام جدار الجناح",
    "place": "جناح معرض",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 33,
    "tier": 2,
    "file": "keif-aldiafa-event-almana-medical-group-qahwaji-exhibition-1.webp",
    "width": 900,
    "height": 1200,
    "kb": 50,
    "alt": "قهوجي من كيف الضيافة يقدم القهوة في جناح مجموعة المانع الطبية",
    "title": "ضيافة كيف الضيافة في جناح مجموعة المانع الطبية — 1",
    "entity": "مجموعة المانع الطبية",
    "entityEn": "Almana Medical Group",
    "sector": "صحي",
    "service": "قهوجي",
    "place": "جناح معرض",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 34,
    "tier": 2,
    "file": "keif-aldiafa-event-almana-medical-group-qahwaji-pouring-coffee-2.webp",
    "width": 960,
    "height": 1200,
    "kb": 58,
    "alt": "قهوجي من كيف الضيافة يصب القهوة العربية في جناح مجموعة المانع الطبية — لقطة ثانية",
    "title": "ضيافة كيف الضيافة في جناح مجموعة المانع الطبية — 2",
    "entity": "مجموعة المانع الطبية",
    "entityEn": "Almana Medical Group",
    "sector": "صحي",
    "service": "قهوجي يصب (لقطة 2)",
    "place": "جناح معرض",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 35,
    "tier": 2,
    "file": "keif-aldiafa-event-alrifadah-pilgrims-services-qahwaji-exhibition.webp",
    "width": 900,
    "height": 1200,
    "kb": 66,
    "alt": "قهوجي من كيف الضيافة يقدم القهوة العربية في جناح شركة الرفادة لخدمات الحجاج",
    "title": "ضيافة كيف الضيافة في جناح شركة الرفادة",
    "entity": "شركة الرفادة لخدمات الحجاج",
    "entityEn": "ALRIFADAH Pilgrims Services",
    "sector": "حج وعمرة",
    "service": "قهوجي",
    "place": "جناح معرض",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah",
      "/qahwajiin-makkah"
    ],
    "publish": "yes"
  },
  {
    "id": 36,
    "tier": 2,
    "file": "keif-aldiafa-event-alwagehat-algharbiya-contracting-qahwaji-dates.webp",
    "width": 675,
    "height": 1200,
    "kb": 101,
    "alt": "قهوجي من كيف الضيافة بالدقلة السوداء يقدم صينية تمور في جناح شركة الواجهات الغربية للمقاولات",
    "title": "ضيافة كيف الضيافة في جناح الواجهات الغربية للمقاولات",
    "entity": "الواجهات الغربية للمقاولات",
    "entityEn": "Alwagehat Algharbiya Contracting",
    "sector": "مقاولات",
    "service": "قهوجي — دقلة سوداء — صينية تمور",
    "place": "جناح معرض",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 37,
    "tier": 2,
    "file": "keif-aldiafa-event-amak-mining-company-qahwaji-exhibition.webp",
    "width": 900,
    "height": 1200,
    "kb": 74,
    "alt": "قهوجي من كيف الضيافة بالدقلة السوداء في جناح شركة المصانع الكبرى للتعدين أماك بمعرض التعدين",
    "title": "ضيافة كيف الضيافة في جناح أماك للتعدين",
    "entity": "شركة المصانع الكبرى للتعدين أماك",
    "entityEn": "AMAK Al Masane Al Kobra Mining",
    "sector": "صناعي — تعدين",
    "service": "قهوجي — دقلة سوداء",
    "place": "جناح معرض تعدين",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 38,
    "tier": 2,
    "file": "keif-aldiafa-event-amjad-alsalam-hotels-qahwaji-exhibition.webp",
    "width": 900,
    "height": 1200,
    "kb": 113,
    "alt": "قهوجي من كيف الضيافة يقدم القهوة في جناح شركة أمجاد السلام لإدارة وتشغيل الفنادق",
    "title": "ضيافة كيف الضيافة في جناح أمجاد السلام للفنادق",
    "entity": "شركة أمجاد السلام لإدارة وتشغيل الفنادق",
    "entityEn": "Amjad Al Salam Hotels",
    "sector": "فنادق",
    "service": "قهوجي",
    "place": "جناح معرض",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 39,
    "tier": 2,
    "file": "keif-aldiafa-event-anjum-hotel-makkah-qahwaji-exhibition.webp",
    "width": 900,
    "height": 1200,
    "kb": 103,
    "alt": "قهوجي من كيف الضيافة يقدم القهوة في جناح فندق أنجم مكة بأحد المعارض",
    "title": "ضيافة كيف الضيافة في جناح فندق أنجم مكة",
    "entity": "فندق أنجم",
    "entityEn": "Anjum Hotel",
    "sector": "فنادق",
    "service": "قهوجي",
    "place": "جناح معرض",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah",
      "/qahwajiin-makkah"
    ],
    "publish": "yes"
  },
  {
    "id": 40,
    "tier": 2,
    "file": "keif-aldiafa-event-basma-emaar-group-umrah-exhibition-qahwaji.webp",
    "width": 720,
    "height": 1178,
    "kb": 137,
    "alt": "قهوجي من كيف الضيافة بثوب أبيض وصديري أسود يحمل دلة أمام جناح مجموعة بسمة إعمار للعمرة والإعاشة والسياحة",
    "title": "ضيافة كيف الضيافة في جناح مجموعة بسمة إعمار",
    "entity": "مجموعة بسمة إعمار",
    "entityEn": "Basma Emaar Group",
    "sector": "حج وعمرة",
    "service": "قهوجي — تقديم قهوة عربية",
    "place": "جناح معرض",
    "pages": [
      "/coffee-break-sharikat-jeddah",
      "/portfolio"
    ],
    "publish": "yes"
  },
  {
    "id": 41,
    "tier": 2,
    "file": "keif-aldiafa-event-bci-basic-chemical-industries-qahwaji-dates-exhibition.webp",
    "width": 900,
    "height": 1200,
    "kb": 65,
    "alt": "قهوجي من كيف الضيافة بالدقلة السوداء يقدم التمور في جناح شركة الصناعات الكيميائية الأساسية BCI — 14 مايو 2025",
    "title": "ضيافة كيف الضيافة في جناح الصناعات الكيميائية الأساسية BCI",
    "entity": "الصناعات الكيميائية الأساسية BCI",
    "entityEn": "Basic Chemical Industries",
    "sector": "صناعي",
    "service": "قهوجي — دقلة سوداء",
    "place": "جناح معرض · 14 مايو 2025",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 42,
    "tier": 2,
    "file": "keif-aldiafa-event-bolt-jeddah-chamber-exhibition-two-qahwajiin-coffee-dates.webp",
    "width": 675,
    "height": 1200,
    "kb": 95,
    "alt": "قهوجيان من كيف الضيافة يقدمان القهوة والتمور في جناح بولت Bolt بمعرض الغرفة التجارية الصناعية بجدة",
    "title": "ضيافة كيف الضيافة في جناح بولت — معرض غرفة جدة",
    "entity": "بولت Bolt — معرض غرفة جدة",
    "entityEn": "Bolt · Jeddah Chamber exhibition",
    "sector": "تقنية/نقل",
    "service": "قهوجيان — قهوة وتمور",
    "place": "معرض الغرفة التجارية الصناعية بجدة",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 43,
    "tier": 2,
    "file": "keif-aldiafa-event-bon-cafe-qahwaji-black-daglah-exhibition.webp",
    "width": 900,
    "height": 1200,
    "kb": 82,
    "alt": "قهوجي من كيف الضيافة بالدقلة السوداء يقدم القهوة العربية في جناح بون كافيه Bon Cafe",
    "title": "ضيافة كيف الضيافة في جناح بون كافيه",
    "entity": "بون كافيه Bon Cafe",
    "entityEn": "Bon Cafe",
    "sector": "أغذية ومشروبات",
    "service": "قهوجي — دقلة سوداء",
    "place": "جناح معرض",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 44,
    "tier": 2,
    "file": "keif-aldiafa-event-brunello-cucinelli-de-beers-mall-qahwaji-red-shemagh.webp",
    "width": 1200,
    "height": 675,
    "kb": 80,
    "alt": "قهوجي من كيف الضيافة بالدقلة السوداء والشماغ الأحمر أمام بوتيكات برونيلو كوتشينيلي ودي بيرز في مول فاخر",
    "title": "ضيافة كيف الضيافة أمام بوتيكات فاخرة — برونيلو كوتشينيلي",
    "entity": "برونيلو كوتشينيلي · De Beers",
    "entityEn": "Brunello Cucinelli · De Beers",
    "sector": "تجزئة فاخرة",
    "service": "قهوجي — دقلة سوداء وشماغ أحمر أمام البوتيك",
    "place": "مول فاخر",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 45,
    "tier": 2,
    "file": "keif-aldiafa-event-dallah-albaraka-namaa-qahwaji-exhibition-1.webp",
    "width": 900,
    "height": 1200,
    "kb": 100,
    "alt": "قهوجي من كيف الضيافة يقدم القهوة العربية في جناح دلة البركة — نماء للإعمار بأحد المعارض",
    "title": "ضيافة كيف الضيافة في جناح دلة البركة — 1",
    "entity": "دلة البركة · نماء للإعمار",
    "entityEn": "Dallah Albaraka · Namaa",
    "sector": "مجموعات كبرى",
    "service": "قهوجي",
    "place": "جناح معرض",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 46,
    "tier": 2,
    "file": "keif-aldiafa-event-dallah-albaraka-qahwaji-exhibition-2.webp",
    "width": 900,
    "height": 1200,
    "kb": 61,
    "alt": "قهوجي من كيف الضيافة يحمل دلة ذهبية في جناح دلة البركة — لقطة ثانية",
    "title": "ضيافة كيف الضيافة في جناح دلة البركة — 2",
    "entity": "دلة البركة",
    "entityEn": "Dallah Albaraka",
    "sector": "مجموعات كبرى",
    "service": "قهوجي (لقطة 2)",
    "place": "جناح معرض",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 47,
    "tier": 2,
    "file": "keif-aldiafa-event-dallah-albaraka-qahwaji-exhibition-3.webp",
    "width": 900,
    "height": 1200,
    "kb": 58,
    "alt": "قهوجي من كيف الضيافة يحمل دلة في جناح دلة البركة «استثمر للإعمار» — لقطة ثالثة",
    "title": "ضيافة كيف الضيافة في جناح دلة البركة — 3",
    "entity": "دلة البركة — استثمر للإعمار",
    "entityEn": "Dallah Albaraka",
    "sector": "مجموعات كبرى",
    "service": "قهوجي (لقطة 3)",
    "place": "جناح معرض",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 48,
    "tier": 2,
    "file": "keif-aldiafa-event-dallah-albaraka-qahwaji-pouring-coffee-4.webp",
    "width": 674,
    "height": 1200,
    "kb": 74,
    "alt": "قهوجي من كيف الضيافة يصب القهوة العربية من دلة ذهبية في جناح دلة البركة — لقطة رابعة",
    "title": "ضيافة كيف الضيافة في جناح دلة البركة — 4",
    "entity": "دلة البركة",
    "entityEn": "Dallah Albaraka",
    "sector": "مجموعات كبرى",
    "service": "قهوجي يصب (لقطة 4)",
    "place": "جناح معرض",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 49,
    "tier": 2,
    "file": "keif-aldiafa-event-dallah-haj-transport-booth-qahwaji.webp",
    "width": 727,
    "height": 1200,
    "kb": 61,
    "alt": "قهوجي من كيف الضيافة يصب القهوة العربية من دلة ذهبية عند مكتب دلة لنقل الحجاج Dallah Haj Transport",
    "title": "ضيافة كيف الضيافة في جناح دلة لنقل الحجاج",
    "entity": "دلة لنقل الحجاج",
    "entityEn": "Dallah Haj Transport",
    "sector": "حج وعمرة  نقل",
    "service": "قهوجي — تقديم قهوة عربية",
    "place": "جناح معرض",
    "pages": [
      "/coffee-break-sharikat-jeddah",
      "/portfolio"
    ],
    "publish": "yes"
  },
  {
    "id": 50,
    "tier": 2,
    "file": "keif-aldiafa-event-dallah-taibah-hotel-madinah-qahwaji-exhibition.webp",
    "width": 900,
    "height": 1200,
    "kb": 121,
    "alt": "قهوجي من كيف الضيافة يصب القهوة العربية في جناح فندق دلة طيبة بالمدينة المنورة",
    "title": "ضيافة كيف الضيافة في جناح فندق دلة طيبة",
    "entity": "فندق دلة طيبة",
    "entityEn": "Dallah Taibah Hotel",
    "sector": "فنادق",
    "service": "قهوجي",
    "place": "جناح معرض",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah",
      "/qahwajiin-madinah"
    ],
    "publish": "yes"
  },
  {
    "id": 51,
    "tier": 2,
    "file": "keif-aldiafa-event-dareen-travel-agency-qahwaji-exhibition.webp",
    "width": 900,
    "height": 1200,
    "kb": 76,
    "alt": "قهوجي من كيف الضيافة يقدم القهوة العربية في جناح وكالة دارين للسفر والسياحة",
    "title": "ضيافة كيف الضيافة في جناح وكالة دارين للسفر",
    "entity": "وكالة دارين للسفر والسياحة",
    "entityEn": "Dareen Travel Agency",
    "sector": "سفر وسياحة",
    "service": "قهوجي",
    "place": "جناح معرض",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 52,
    "tier": 2,
    "file": "keif-aldiafa-event-dawood-trading-company-lobby-qahwaji-golden-dallah.webp",
    "width": 675,
    "height": 1200,
    "kb": 87,
    "alt": "قهوجي من كيف الضيافة ببشت أسود مطرز يحمل دلة ذهبية أمام كاونتر استقبال شركة داود التجارية",
    "title": "ضيافة كيف الضيافة في مقر شركة داود التجارية",
    "entity": "شركة داود التجارية",
    "entityEn": "Dawood Trading Co.",
    "sector": "شركات",
    "service": "قهوجي ببشت مطرّز يحمل دلة ذهبية في بهو الشركة",
    "place": "مقر شركة",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 53,
    "tier": 2,
    "file": "keif-aldiafa-event-dragon-city-jeddah-grand-opening-qahwajiin-stage-1.webp",
    "width": 900,
    "height": 1200,
    "kb": 103,
    "alt": "قهوجيان من كيف الضيافة بالدلال الذهبية على المسرح في الافتتاح الكبير لقصر التنين (Dragon City) بجدة",
    "title": "ضيافة كيف الضيافة في افتتاح قصر التنين بجدة — 1",
    "entity": "الافتتاح الكبير لقصر التنين بجدة (Dragon City)",
    "entityEn": "Dragon City Jeddah grand opening",
    "sector": "تجزئة / افتتاحات",
    "service": "قهوجيان — دلال ذهبية — افتتاح",
    "place": "افتتاح — جدة",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 54,
    "tier": 2,
    "file": "keif-aldiafa-event-dragon-city-jeddah-grand-opening-two-qahwajiin-red-carpet-2.webp",
    "width": 900,
    "height": 1200,
    "kb": 89,
    "alt": "قهوجيان من كيف الضيافة على السجادة الحمراء أمام خلفية الافتتاح الكبير لقصر التنين بجدة",
    "title": "ضيافة كيف الضيافة في افتتاح قصر التنين بجدة — 2",
    "entity": "قصر التنين بجدة · الافتتاح الكبير",
    "entityEn": "Jeddah Dragon City Grand Opening",
    "sector": "تجزئة/مولات",
    "service": "قهوجيان على السجادة الحمراء أمام خلفية الافتتاح",
    "place": "مول",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 55,
    "tier": 2,
    "file": "keif-aldiafa-event-flyadeal-airline-booth-qahwaji-arabic-coffee.webp",
    "width": 691,
    "height": 1200,
    "kb": 48,
    "alt": "قهوجي من كيف الضيافة يصب القهوة العربية من دلة أمام شعار طيران أديل flyadeal في جناح المعرض",
    "title": "ضيافة كيف الضيافة في جناح طيران أديل",
    "entity": "طيران أديل",
    "entityEn": "flyadeal",
    "sector": "طيران",
    "service": "قهوجي — تقديم قهوة عربية",
    "place": "جناح معرض",
    "pages": [
      "/coffee-break-sharikat-jeddah",
      "/portfolio"
    ],
    "publish": "yes"
  },
  {
    "id": 56,
    "tier": 2,
    "file": "keif-aldiafa-event-foot-locker-adidas-red-sea-mall-photo-mirror-customers.webp",
    "width": 900,
    "height": 1200,
    "kb": 128,
    "alt": "مرآة تصوير تفاعلية من كيف الضيافة يستخدمها زبائن داخل متجر فوت لوكر وأديداس في رد سي مول جدة",
    "title": "مرآة التصوير من كيف الضيافة في فوت لوكر — رد سي مول",
    "entity": "فوت لوكر × أديداس — رد سي مول",
    "entityEn": "Foot Locker · adidas · Red Sea Mall",
    "sector": "تجزئة",
    "service": "مرآة تصوير",
    "place": "متجر فوت لوكر — رد سي مول جدة",
    "pages": [
      "/services",
      "/portfolio"
    ],
    "publish": "yes"
  },
  {
    "id": 57,
    "tier": 2,
    "file": "keif-aldiafa-event-foot-locker-american-eagle-national-day-printed-tote-bags.webp",
    "width": 900,
    "height": 1200,
    "kb": 102,
    "alt": "حقائب قماش مطبوعة بالشعار الوطني «عزنا بطبعنا» من ركن الخط العربي لكيف الضيافة في متجر فوت لوكر وأمريكان إيغل باليوم الوطني",
    "title": "ركن الطباعة والخط العربي من كيف الضيافة — اليوم الوطني في فوت لوكر",
    "entity": "فوت لوكر · American Eagle · Victoria — «عزنا بطبعنا»",
    "entityEn": "Foot Locker · American Eagle",
    "sector": "تجزئة",
    "service": "خط عربي — حقائب مطبوعة بالشعار الوطني (اليوم الوطني)",
    "place": "متجر — مول",
    "pages": [
      "/services",
      "/portfolio"
    ],
    "publish": "yes"
  },
  {
    "id": 58,
    "tier": 2,
    "file": "keif-aldiafa-event-foot-locker-new-balance-coffee-kiosk-qahwaji-1.webp",
    "width": 900,
    "height": 1200,
    "kb": 123,
    "alt": "قهوجي من كيف الضيافة في كشك قهوة داخل متجر فوت لوكر ونيو بالانس بالمول",
    "title": "كشك قهوة كيف الضيافة في فوت لوكر — نيو بالانس — 1",
    "entity": "فوت لوكر · نيو بالانس · Starbucks",
    "entityEn": "Foot Locker · New Balance · Starbucks kiosk",
    "sector": "تجزئة",
    "service": "قهوجي — كشك قهوة داخل المتجر",
    "place": "متجر — مول",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 59,
    "tier": 2,
    "file": "keif-aldiafa-event-foot-locker-new-balance-coffee-kiosk-qahwaji-2.webp",
    "width": 900,
    "height": 1200,
    "kb": 122,
    "alt": "كشك قهوة كيف الضيافة داخل متجر فوت لوكر ونيو بالانس — لقطة ثانية",
    "title": "كشك قهوة كيف الضيافة في فوت لوكر — نيو بالانس — 2",
    "entity": "فوت لوكر · نيو بالانس · Starbucks",
    "entityEn": "Foot Locker · New Balance",
    "sector": "تجزئة",
    "service": "قهوجي — كشك قهوة (لقطة 2)",
    "place": "متجر — مول",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 60,
    "tier": 2,
    "file": "keif-aldiafa-event-foot-locker-store-arabic-calligraphy-station.webp",
    "width": 900,
    "height": 1200,
    "kb": 154,
    "alt": "خطاطة من كيف الضيافة تكتب أسماء الزبائن بالخط العربي على بطاقات نخلة ملونة داخل متجر فوت لوكر",
    "title": "خطاطة كيف الضيافة في فعالية فوت لوكر",
    "entity": "فوت لوكر",
    "entityEn": "Foot Locker",
    "sector": "تجزئة",
    "service": "خدمات فنية — خطاطة عربية",
    "place": "متجر أحذية — مول",
    "pages": [
      "/services",
      "/qahwajiyat-sababat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 61,
    "tier": 2,
    "file": "keif-aldiafa-event-gaib-furniture-arabic-calligrapher-tote-bag.webp",
    "width": 828,
    "height": 928,
    "kb": 41,
    "alt": "خطاط من كيف الضيافة يكتب اسم «سارة» بالخط العربي على حقيبة قماش في ستاند GAIB Furniture",
    "title": "خطاط كيف الضيافة في فعالية GAIB Furniture",
    "entity": "GAIB Furniture",
    "entityEn": "GAIB Furniture",
    "sector": "تجزئة / مفروشات",
    "service": "خط عربي — كتابة اسم «سارة» على حقيبة قماش",
    "place": "ستاند فعالية",
    "pages": [
      "/services",
      "/portfolio"
    ],
    "publish": "yes"
  },
  {
    "id": 62,
    "tier": 2,
    "file": "keif-aldiafa-event-gaib-furniture-calligrapher-writing-sarah-tote-2.webp",
    "width": 828,
    "height": 928,
    "kb": 33,
    "alt": "خطاط كيف الضيافة يكتب اسم «سارة» بالخط العربي على حقيبة قماش GAIB Furniture — لقطة ثانية",
    "title": "خطاط كيف الضيافة في فعالية GAIB Furniture — 2",
    "entity": "GAIB Furniture",
    "entityEn": "GAIB Furniture",
    "sector": "مفروشات",
    "service": "خط عربي — كتابة «سارة» على حقيبة قماش (لقطة 2)",
    "place": "ستاند فعالية",
    "pages": [
      "/services",
      "/portfolio"
    ],
    "publish": "yes"
  },
  {
    "id": 63,
    "tier": 2,
    "file": "keif-aldiafa-event-glory-of-luxury-dar-alfakhama-booth-qahwaji.webp",
    "width": 720,
    "height": 1178,
    "kb": 84,
    "alt": "قهوجي من كيف الضيافة يحمل دلة فضية وذهبية أمام جناح دار الفخامة Glory of Luxury",
    "title": "ضيافة كيف الضيافة في جناح دار الفخامة",
    "entity": "دار الفخامة Glory of Luxury",
    "entityEn": "Glory of Luxury",
    "sector": "فاخر  معرض",
    "service": "قهوجي — تقديم قهوة عربية",
    "place": "جناح معرض",
    "pages": [
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 64,
    "tier": 2,
    "file": "keif-aldiafa-event-hafil-transport-exhibition-booth-qahwaji.webp",
    "width": 720,
    "height": 1178,
    "kb": 95,
    "alt": "قهوجي من كيف الضيافة يصب القهوة العربية خلف كاونتر جناح شركة حافل HAFIL في المعرض",
    "title": "ضيافة كيف الضيافة في جناح حافل",
    "entity": "حافل",
    "entityEn": "HAFIL",
    "sector": "نقل",
    "service": "قهوجي — تقديم قهوة عربية",
    "place": "جناح معرض",
    "pages": [
      "/coffee-break-sharikat-jeddah",
      "/portfolio"
    ],
    "publish": "yes"
  },
  {
    "id": 65,
    "tier": 2,
    "file": "keif-aldiafa-event-hilmuna-al-ghalya-wall-qahwaji-black-daglah.webp",
    "width": 675,
    "height": 1200,
    "kb": 60,
    "alt": "قهوجي من كيف الضيافة بالدقلة السوداء المطرزة يحمل دلة ذهبية أمام جدار فعالية بعبارة «حلمنا الغلياء ووافقنا وصل»",
    "title": "ضيافة كيف الضيافة في فعالية «حلمنا الغلياء»",
    "entity": "جدار «حلمنا الغلياء ووافقنا وصل»",
    "entityEn": "",
    "sector": "فعالية شركة",
    "service": "قهوجي — دقلة سوداء مطرزة يحمل دلة ذهبية",
    "place": "فعالية داخلية",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 66,
    "tier": 2,
    "file": "keif-aldiafa-event-iconica-boutique-opening-mall-qahwaji.webp",
    "width": 1200,
    "height": 903,
    "kb": 62,
    "alt": "قهوجي من كيف الضيافة داخل محل أيقونيكا للأزياء في افتتاحه بالمول",
    "title": "ضيافة كيف الضيافة في افتتاح محل أيقونيكا",
    "entity": "أيقونيكا",
    "entityEn": "Iconica",
    "sector": "تجزئة",
    "service": "قهوجي في افتتاح محل أزياء داخل مول",
    "place": "مول",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 67,
    "tier": 2,
    "file": "keif-aldiafa-event-ishraq-almadina-mias-sunrise-hotels-axiscare-qahwaji.webp",
    "width": 900,
    "height": 1200,
    "kb": 107,
    "alt": "قهوجي من كيف الضيافة في جناح إشراق المدينة وفنادق MIAS وSunrise ومحور الرعاية AxisCare بأحد المعارض",
    "title": "ضيافة كيف الضيافة في جناح إشراق المدينة — فنادق MIAS",
    "entity": "إشراق المدينة · فنادق MIAS · Sunrise Hotels · محور الرعاية AxisCare",
    "entityEn": "Ishraq Almadina · MIAS Hotel · Sunrise Hotels · AxisCare",
    "sector": "فنادق / صحي",
    "service": "قهوجي",
    "place": "جناح معرض",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah",
      "/qahwajiin-madinah"
    ],
    "publish": "yes"
  },
  {
    "id": 68,
    "tier": 2,
    "file": "keif-aldiafa-event-jeddah-central-development-company-qahwaji-vip-guests.webp",
    "width": 638,
    "height": 570,
    "kb": 36,
    "alt": "قهوجي من كيف الضيافة بالشماغ الأحمر يقدم القهوة لضيوف VIP في جناح شركة وسط جدة للتطوير",
    "title": "ضيافة كيف الضيافة في جناح شركة وسط جدة للتطوير",
    "entity": "شركة وسط جدة للتطوير",
    "entityEn": "Jeddah Central Development Co.",
    "sector": "عقاري — مشاريع كبرى",
    "service": "قهوجي بشماغ أحمر يخدم ضيوف VIP",
    "place": "جناح ضيافة — جدة",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 69,
    "tier": 2,
    "file": "keif-aldiafa-event-luxury-menswear-boutique-qahwaji-coffee-sweets.webp",
    "width": 900,
    "height": 1200,
    "kb": 98,
    "alt": "قهوجي من كيف الضيافة بالدقلة السوداء يقدم القهوة والحلا داخل بوتيك ملابس رجالية فاخرة",
    "title": "ضيافة كيف الضيافة في بوتيك أزياء رجالية",
    "entity": "بوتيك ملابس رجالية فاخرة",
    "entityEn": "luxury menswear boutique",
    "sector": "تجزئة فاخرة",
    "service": "قهوجي — دقلة سوداء — قهوة وحلا داخل البوتيك",
    "place": "بوتيك",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 70,
    "tier": 2,
    "file": "keif-aldiafa-event-makkah-hotel-towers-mcdc-qahwaji-exhibition-1.webp",
    "width": 900,
    "height": 1200,
    "kb": 82,
    "alt": "قهوجي من كيف الضيافة يقدم القهوة في جناح فندق وأبراج مكة — MCDC للسياحة والعمرة",
    "title": "ضيافة كيف الضيافة في جناح فندق وأبراج مكة — 1",
    "entity": "فندق وأبراج مكة — MCDC سياحة وعمرة",
    "entityEn": "Makkah Hotel & Towers · MCDC",
    "sector": "فنادق",
    "service": "قهوجي",
    "place": "جناح معرض",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah",
      "/qahwajiin-makkah"
    ],
    "publish": "yes"
  },
  {
    "id": 71,
    "tier": 2,
    "file": "keif-aldiafa-event-makkah-hotel-towers-mcdc-qahwaji-pouring-coffee-2.webp",
    "width": 678,
    "height": 1200,
    "kb": 48,
    "alt": "قهوجي من كيف الضيافة يصب القهوة العربية أمام لافتة فندق وأبراج مكة — MCDC في معرض الحج — لقطة ثانية",
    "title": "ضيافة كيف الضيافة في جناح فندق وأبراج مكة — 2",
    "entity": "فندق وأبراج مكة — MCDC",
    "entityEn": "Makkah Hotel & Towers",
    "sector": "فنادق",
    "service": "قهوجي يصب (لقطة 2)",
    "place": "جناح معرض الحج",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah",
      "/qahwajiin-makkah"
    ],
    "publish": "yes"
  },
  {
    "id": 72,
    "tier": 2,
    "file": "keif-aldiafa-event-makkiyoon-golden-qahwaji-exhibition-makkah.webp",
    "width": 900,
    "height": 1200,
    "kb": 127,
    "alt": "قهوجي من كيف الضيافة يقدم القهوة العربية في جناح مكيون الذهبية بمعرض الحج والعمرة",
    "title": "ضيافة كيف الضيافة في جناح مكيون الذهبية",
    "entity": "مكيون الذهبية",
    "entityEn": "Makkiyoon",
    "sector": "حج وعمرة",
    "service": "قهوجي",
    "place": "جناح معرض",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah",
      "/qahwajiin-makkah"
    ],
    "publish": "yes"
  },
  {
    "id": 73,
    "tier": 2,
    "file": "keif-aldiafa-event-manasik-almashaer-ghufranak-qahwaji-hajj-expo-1.webp",
    "width": 900,
    "height": 1200,
    "kb": 86,
    "alt": "قهوجي من كيف الضيافة أمام لوحة الكعبة في جناح مناسك المشاعر لخدمات الحجاج — غفرانك بمعرض الحج والعمرة",
    "title": "ضيافة كيف الضيافة في جناح مناسك المشاعر — 1",
    "entity": "مناسك المشاعر لخدمات الحجاج — غفرانك",
    "entityEn": "Manasik Al-Mashaer Pilgrims Services",
    "sector": "حج وعمرة",
    "service": "قهوجي",
    "place": "معرض الحج والعمرة",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah",
      "/qahwajiin-makkah"
    ],
    "publish": "yes"
  },
  {
    "id": 74,
    "tier": 2,
    "file": "keif-aldiafa-event-manasik-almashaer-ghufranak-qahwaji-hajj-expo-2.webp",
    "width": 900,
    "height": 1200,
    "kb": 81,
    "alt": "قهوجي من كيف الضيافة يقدم القهوة في جناح مناسك المشاعر — غفرانك — لقطة ثانية",
    "title": "ضيافة كيف الضيافة في جناح مناسك المشاعر — 2",
    "entity": "مناسك المشاعر لخدمات الحجاج — غفرانك",
    "entityEn": "Manasik Al-Mashaer",
    "sector": "حج وعمرة",
    "service": "قهوجي (لقطة 2)",
    "place": "معرض الحج والعمرة",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah",
      "/qahwajiin-makkah"
    ],
    "publish": "yes"
  },
  {
    "id": 75,
    "tier": 2,
    "file": "keif-aldiafa-event-millennium-hotels-resorts-qahwaji-exhibition.webp",
    "width": 900,
    "height": 1200,
    "kb": 91,
    "alt": "قهوجي من كيف الضيافة يحمل دلة في جناح فنادق ومنتجعات ميلينيوم بأحد المعارض",
    "title": "ضيافة كيف الضيافة في جناح فنادق ميلينيوم",
    "entity": "فنادق ومنتجعات ميلينيوم",
    "entityEn": "Millennium Hotels and Resorts",
    "sector": "فنادق",
    "service": "قهوجي",
    "place": "جناح معرض",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 76,
    "tier": 2,
    "file": "keif-aldiafa-event-nahda-park-view-113-real-estate-qahwaji-jeddah.webp",
    "width": 900,
    "height": 1200,
    "kb": 76,
    "alt": "قهوجي من كيف الضيافة يحمل دلة ذهبية في جناح مشروع Nahda Park View 113 بحي النهضة في معرض عقاري بجدة",
    "title": "ضيافة كيف الضيافة في جناح مشروع نهضة بارك فيو 113",
    "entity": "مشروع Nahda Park View 113 — حي النهضة جدة",
    "entityEn": "Nahda Park View 113 — real estate",
    "sector": "عقاري",
    "service": "قهوجي",
    "place": "جناح معرض عقاري — جدة",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 77,
    "tier": 2,
    "file": "keif-aldiafa-event-najeeb-auto-jimny-ksa-club-qahwaji-dates.webp",
    "width": 540,
    "height": 1200,
    "kb": 56,
    "alt": "قهوجي من كيف الضيافة بالدقلة السوداء يقدم التمور في جناح نجيب أوتو ونادي جيمني السعودية",
    "title": "ضيافة كيف الضيافة في جناح نجيب أوتو — Jimny KSA Club",
    "entity": "نجيب أوتو — Jimny KSA Club",
    "entityEn": "NajeebAuto · Jimny KSA Club",
    "sector": "سيارات",
    "service": "قهوجي — دقلة سوداء — تمور",
    "place": "جناح معرض",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 78,
    "tier": 2,
    "file": "keif-aldiafa-event-najeeb-auto-suzuki-showroom-qahwaji-dates-palm-counter-3.webp",
    "width": 900,
    "height": 1200,
    "kb": 77,
    "alt": "قهوجي من كيف الضيافة خلف كاونتر ضيافة بنخلة تمور ودلال ذهبية في معرض شركة نجيب أوتو للسيارات — سوزوكي",
    "title": "ضيافة كيف الضيافة في معرض نجيب أوتو — سوزوكي — 3",
    "entity": "شركة نجيب أوتو للسيارات · سوزوكي",
    "entityEn": "Najeeb Auto · Suzuki",
    "sector": "سيارات",
    "service": "قهوجي خلف كاونتر ضيافة (نخلة تمر + دلال ذهبية)",
    "place": "معرض سيارات",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 79,
    "tier": 2,
    "file": "keif-aldiafa-event-nayifat-finance-qahwaji-exhibition.webp",
    "width": 903,
    "height": 1200,
    "kb": 125,
    "alt": "قهوجي من كيف الضيافة يحمل دلة في جناح شركة النايفات للتمويل",
    "title": "ضيافة كيف الضيافة في جناح النايفات للتمويل",
    "entity": "النايفات للتمويل",
    "entityEn": "Nayifat Finance",
    "sector": "بنوك وتمويل",
    "service": "قهوجي",
    "place": "جناح معرض",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 80,
    "tier": 2,
    "file": "keif-aldiafa-event-new-balance-kiehls-store-interactive-photo-mirror.webp",
    "width": 675,
    "height": 1200,
    "kb": 82,
    "alt": "مرآة تصوير تفاعلية مضيئة من كيف الضيافة مع زبائن داخل متجر نيو بالانس",
    "title": "مرآة التصوير من كيف الضيافة في متجر نيو بالانس",
    "entity": "نيو بالانس · Kiehl's",
    "entityEn": "New Balance",
    "sector": "تجزئة",
    "service": "مرآة تصوير تفاعلية — زبائن",
    "place": "متجر نيو بالانس",
    "pages": [
      "/services",
      "/portfolio"
    ],
    "publish": "yes"
  },
  {
    "id": 81,
    "tier": 2,
    "file": "keif-aldiafa-event-omoda-c5-car-launch-mirror-photo-booth.webp",
    "width": 900,
    "height": 1200,
    "kb": 161,
    "alt": "مرآة تصوير تفاعلية من كيف الضيافة مع سجادة حمراء وحواجز مخملية في فعالية إطلاق سيارة أومودا C5",
    "title": "مرآة تصوير كيف الضيافة في فعالية أومودا C5",
    "entity": "أومودا OMODA C5",
    "entityEn": "OMODA C5",
    "sector": "سيارات",
    "service": "خدمات فنية — مرآة تصوير",
    "place": "صالة عرض سيارات",
    "pages": [
      "/services",
      "/portfolio"
    ],
    "publish": "yes"
  },
  {
    "id": 82,
    "tier": 2,
    "file": "keif-aldiafa-event-osus-alinsha-contracting-qahwaji-exhibition.webp",
    "width": 900,
    "height": 1200,
    "kb": 98,
    "alt": "قهوجي من كيف الضيافة يحمل دلة ذهبية في جناح أسس الإنشاء بأحد المعارض",
    "title": "ضيافة كيف الضيافة في جناح أسس الإنشاء",
    "entity": "أسس الإنشاء",
    "entityEn": "OSUS ALINSHA",
    "sector": "مقاولات / عقاري",
    "service": "قهوجي",
    "place": "جناح معرض",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 83,
    "tier": 2,
    "file": "keif-aldiafa-event-rawahel-almashaer-pilgrims-qahwaji-exhibition.webp",
    "width": 675,
    "height": 1200,
    "kb": 73,
    "alt": "قهوجي من كيف الضيافة يقدم القهوة من الدلة في جناح شركة رواحل المشاعر بمعرض الحج",
    "title": "ضيافة كيف الضيافة في جناح رواحل المشاعر",
    "entity": "شركة رواحل المشاعر",
    "entityEn": "Rawahel Al Mashaer Co.",
    "sector": "حج وعمرة",
    "service": "قهوجي",
    "place": "جناح معرض",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah",
      "/qahwajiin-makkah"
    ],
    "publish": "yes"
  },
  {
    "id": 84,
    "tier": 2,
    "file": "keif-aldiafa-event-safwat-alshaaer-pilgrims-services-qahwaji-hajj-expo.webp",
    "width": 720,
    "height": 870,
    "kb": 88,
    "alt": "قهوجي من كيف الضيافة خلف كاونتر جناح شركة صفوة الشعائر لخدمات الحجاج والمعتمرين في معرض الحج والعمرة",
    "title": "ضيافة كيف الضيافة في جناح صفوة الشعائر",
    "entity": "شركة صفوة الشعائر لخدمات الحجاج والمعتمرين",
    "entityEn": "Safwat Al-Shaaer Pilgrims Services",
    "sector": "حج وعمرة",
    "service": "قهوجي",
    "place": "معرض الحج والعمرة",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah",
      "/qahwajiin-makkah"
    ],
    "publish": "yes"
  },
  {
    "id": 85,
    "tier": 2,
    "file": "keif-aldiafa-event-shs-saja-hospitality-solutions-exhibition-qahwaji.webp",
    "width": 720,
    "height": 1178,
    "kb": 121,
    "alt": "قهوجي من كيف الضيافة بثوب أبيض وصديري أسود عند كاونتر جناح سجى لحلول الضيافة SHS في معرض الضيافة",
    "title": "ضيافة كيف الضيافة في جناح سجى لحلول الضيافة",
    "entity": "سجى لحلول الضيافة SHS",
    "entityEn": "SHS Saja Hospitality Solutions",
    "sector": "ضيافة  معرض",
    "service": "قهوجي — تقديم قهوة عربية",
    "place": "معرض ضيافة",
    "pages": [
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 86,
    "tier": 2,
    "file": "keif-aldiafa-event-suzuki-najeeb-auto-showroom-qahwaji-balloon-arch-1.webp",
    "width": 900,
    "height": 1200,
    "kb": 71,
    "alt": "قهوجي من كيف الضيافة بالدقلة السوداء يقدم القهوة العربية بجانب قوس بالونات في صالة عرض سوزوكي — نجيب أوتو",
    "title": "ضيافة كيف الضيافة في صالة سوزوكي — نجيب أوتو — 1",
    "entity": "سوزوكي — نجيب أوتو",
    "entityEn": "Suzuki · Najeeb Auto",
    "sector": "سيارات",
    "service": "قهوجي — دقلة سوداء — قوس بالونات",
    "place": "صالة عرض سيارات",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 87,
    "tier": 2,
    "file": "keif-aldiafa-event-suzuki-najeeb-auto-showroom-qahwaji-red-thobe-dates-palm-2.webp",
    "width": 675,
    "height": 1200,
    "kb": 80,
    "alt": "قهوجي من كيف الضيافة بثوب أحمر مزخرف بجانب نخلة تمور في صالة عرض سوزوكي — نجيب أوتو",
    "title": "ضيافة كيف الضيافة في صالة سوزوكي — نجيب أوتو — 2",
    "entity": "سوزوكي — نجيب أوتو",
    "entityEn": "Suzuki · Najeeb Auto",
    "sector": "سيارات",
    "service": "قهوجي بثوب أحمر مزخرف — نخلة تمور (لقطة 2)",
    "place": "صالة عرض",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 88,
    "tier": 2,
    "file": "keif-aldiafa-event-takween-alwatan-support-services-qahwaji-exhibition.webp",
    "width": 675,
    "height": 1200,
    "kb": 83,
    "alt": "قهوجي من كيف الضيافة يحمل دلة في جناح شركة تكوين الوطن للخدمات المساندة",
    "title": "ضيافة كيف الضيافة في جناح تكوين الوطن",
    "entity": "شركة تكوين الوطن — Support Services",
    "entityEn": "Takween Alwatan Co.",
    "sector": "شركات",
    "service": "قهوجي",
    "place": "جناح معرض",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 89,
    "tier": 2,
    "file": "keif-aldiafa-event-tawkeel-umrah-qahwaji-dates-sweets-exhibition-1.webp",
    "width": 675,
    "height": 1200,
    "kb": 110,
    "alt": "قهوجي من كيف الضيافة بالدقلة السوداء يقدم التمور والحلا في جناح توكيل — عمرة بالنيابة",
    "title": "ضيافة كيف الضيافة في جناح توكيل — 1",
    "entity": "توكيل Tawkeel — عمرة بالنيابة",
    "entityEn": "Tawkeel",
    "sector": "حج وعمرة",
    "service": "قهوجي — دقلة سوداء — تمور وحلا",
    "place": "جناح معرض",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah",
      "/qahwajiin-makkah"
    ],
    "publish": "yes"
  },
  {
    "id": 90,
    "tier": 2,
    "file": "keif-aldiafa-event-tawkeel-umrah-qahwaji-pouring-coffee-2.webp",
    "width": 675,
    "height": 1200,
    "kb": 96,
    "alt": "قهوجي من كيف الضيافة يصب القهوة العربية في جناح توكيل — لقطة ثانية",
    "title": "ضيافة كيف الضيافة في جناح توكيل — 2",
    "entity": "توكيل Tawkeel",
    "entityEn": "Tawkeel",
    "sector": "حج وعمرة",
    "service": "قهوجي (لقطة 2)",
    "place": "جناح معرض",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah",
      "/qahwajiin-makkah"
    ],
    "publish": "yes"
  },
  {
    "id": 91,
    "tier": 2,
    "file": "keif-aldiafa-event-the-private-aviation-company-booth-qahwaji-1.webp",
    "width": 720,
    "height": 1178,
    "kb": 79,
    "alt": "قهوجي من كيف الضيافة يصب القهوة العربية أمام لوحة شركة الطيران الخاص The Private Aviation",
    "title": "ضيافة كيف الضيافة في جناح شركة الطيران الخاص",
    "entity": "شركة الطيران الخاص",
    "entityEn": "The Private Aviation",
    "sector": "طيران",
    "service": "قهوجي — تقديم قهوة عربية",
    "place": "جناح معرض طيران",
    "pages": [
      "/coffee-break-sharikat-jeddah",
      "/portfolio"
    ],
    "publish": "yes"
  },
  {
    "id": 92,
    "tier": 2,
    "file": "keif-aldiafa-event-the-private-aviation-company-booth-qahwaji-2.webp",
    "width": 720,
    "height": 1166,
    "kb": 123,
    "alt": "قهوجي من كيف الضيافة يصب القهوة من دلة فضية أمام شاشة شركة الطيران الخاص — لقطة ثانية",
    "title": "ضيافة كيف الضيافة في جناح شركة الطيران الخاص — 2",
    "entity": "شركة الطيران الخاص",
    "entityEn": "The Private Aviation",
    "sector": "طيران",
    "service": "قهوجي — تقديم قهوة عربية",
    "place": "جناح معرض طيران",
    "pages": [
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 93,
    "tier": 2,
    "file": "keif-aldiafa-event-york-hvac-company-lobby-qahwaji-dates-sweets-2.webp",
    "width": 554,
    "height": 1200,
    "kb": 70,
    "alt": "قهوجي من كيف الضيافة بالدقلة السوداء يقدم التمور والحلا في بهو شركة يورك YORK للتكييف — لقطة ثانية",
    "title": "ضيافة كيف الضيافة في بهو شركة يورك — 2",
    "entity": "يورك YORK",
    "entityEn": "YORK",
    "sector": "صناعي — تكييف",
    "service": "قهوجي — دقلة سوداء — تمور وحلا (لقطة 2)",
    "place": "بهو شركة",
    "pages": [
      "/portfolio",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 94,
    "tier": 2,
    "file": "keif-aldiafa-event-york-hvac-showroom-qahwaji-dates-coffee.webp",
    "width": 900,
    "height": 1200,
    "kb": 164,
    "alt": "قهوجي من كيف الضيافة خلف طاولة سدو عليها تمور ودلال ذهبية أمام شعار يورك YORK",
    "title": "ضيافة كيف الضيافة في فعالية يورك",
    "entity": "يورك YORK",
    "entityEn": "YORK (HVAC)",
    "sector": "صناعي  تكييف",
    "service": "قهوجي — ركن قهوة وتمور",
    "place": "معرض/بهو شركة",
    "pages": [
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 95,
    "tier": 3,
    "file": "keif-aldiafa-event-mavera-hall-jeddah-incense-mabkhara-server-1.webp",
    "width": 864,
    "height": 1184,
    "kb": 77,
    "alt": "معطّر بخور من كيف الضيافة بثوب أبيض وقفازات يحمل مبخرة ذهبية بجانب علم قاعة مافيرا بجدة",
    "title": "تعطير البخور من كيف الضيافة في قاعة مافيرا — 1",
    "entity": "قاعة مافيرا",
    "entityEn": "Mavera Hall",
    "sector": "قاعات",
    "service": "معطّر بخور بمبخرة ذهبية بجانب علم القاعة",
    "place": "قاعة أفراح",
    "pages": [
      "/diyafa-a3ras-jeddah",
      "/sababin-qahwa-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 96,
    "tier": 3,
    "file": "keif-aldiafa-event-mavera-hall-jeddah-incense-mabkhara-server-2.webp",
    "width": 900,
    "height": 1200,
    "kb": 88,
    "alt": "معطّر بخور من كيف الضيافة بالشماغ والعقال يحمل مبخرة ذهبية بجانب علم قاعة مافيرا بجدة",
    "title": "تعطير البخور من كيف الضيافة في قاعة مافيرا — 2",
    "entity": "قاعة مافيرا",
    "entityEn": "Mavera Hall",
    "sector": "قاعات",
    "service": "معطّر بخور بمبخرة ذهبية بجانب علم القاعة",
    "place": "قاعة أفراح",
    "pages": [
      "/diyafa-a3ras-jeddah",
      "/sababin-qahwa-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 97,
    "tier": 3,
    "file": "keif-aldiafa-golden-backlit-outdoor-coffee-bar-night-dallahs-incense.webp",
    "width": 900,
    "height": 1200,
    "kb": 166,
    "alt": "ركن قهوة ذهبي مضيء من كيف الضيافة في فعالية خارجية ليلية عليه دلال ومباخر وحلا وصباب خلفه",
    "title": "ركن القهوة الذهبي الليلي — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "ركن قهوة ذهبي مضيء — خارجي",
    "place": "فعالية خارجية ليلية",
    "pages": [
      "/offerings",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 98,
    "tier": 3,
    "file": "keif-aldiafa-golden-hospitality-counter-saudi-emblem-server-drinks-station.webp",
    "width": 1200,
    "height": 527,
    "kb": 91,
    "alt": "ركن ضيافة ذهبي طويل بزخارف هندسية والشعار الوطني السعودي مع صباب من كيف الضيافة خلف موزعات المشروبات",
    "title": "ركن الضيافة الذهبي — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "ركن ضيافة ذهبي — مشروبات وقهوة",
    "place": "قاعة أفراح / بهو",
    "pages": [
      "/offerings",
      "/diyafa-a3ras-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 99,
    "tier": 3,
    "file": "keif-aldiafa-luxury-majlis-gold-columns-buffet-guests-panoramic.webp",
    "width": 1200,
    "height": 509,
    "kb": 65,
    "alt": "مجلس فاخر بأعمدة ذهبية وضيوف بالثوب والغترة مع طاولات ضيافة كيف الضيافة الطويلة على الجانب",
    "title": "ضيافة مجلس كبير — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "ضيافة مجلس كبير — بوفيه وقهوة",
    "place": "مجلس فاخر بأعمدة ذهبية",
    "pages": [
      "/diyafa-munasabat-jeddah",
      "/diyafa-a3ras-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 100,
    "tier": 3,
    "file": "keif-aldiafa-mubashirin-lined-along-wedding-hall-aisle-golden-dallahs.webp",
    "width": 900,
    "height": 1200,
    "kb": 132,
    "alt": "مباشرين من كيف الضيافة بالدقلة السوداء موزعين على طول ممر قاعة أفراح بكراسي مخملية ذهبية",
    "title": "مباشرين قهوة كيف الضيافة في قاعة أفراح",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "مباشرين — توزيع على ممر القاعة",
    "place": "قاعة أفراح",
    "pages": [
      "/mubashirin-qahwa-jeddah",
      "/diyafa-a3ras-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 101,
    "tier": 3,
    "file": "keif-aldiafa-qahwaji-black-daglah-behind-coffee-water-sweets-table.webp",
    "width": 720,
    "height": 1178,
    "kb": 78,
    "alt": "قهوجي من كيف الضيافة بالدقلة المطرزة خلف طاولة عليها فناجين ومياه وحلا يحمل دلة ذهبية",
    "title": "ركن قهوة كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "قهوجي — ركن قهوة وماء وحلا",
    "place": "غرفة استقبال",
    "pages": [
      "/sababin-qahwa-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 102,
    "tier": 3,
    "file": "keif-aldiafa-qahwaji-black-daglah-carrying-tray-dallah-cups-hotel-lobby.webp",
    "width": 681,
    "height": 1200,
    "kb": 94,
    "alt": "قهوجي من كيف الضيافة بالدقلة السوداء يحمل صينية عليها دلة ذهبية وفناجين في بهو فندق",
    "title": "قهوجي كيف الضيافة يحمل صينية القهوة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "قهوجي — صينية قهوة كاملة",
    "place": "بهو فندق",
    "pages": [
      "/qahwajiin-jeddah",
      "/sababin-qahwa-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 103,
    "tier": 3,
    "file": "keif-aldiafa-qahwaji-lavender-themed-hospitality-corner-camel-cutout.webp",
    "width": 737,
    "height": 1200,
    "kb": 79,
    "alt": "قهوجي من كيف الضيافة بصديري أسود وطاقية ذهبية يصب المشروب في ركن ضيافة بثيم «لافندر» وخلفية جمل",
    "title": "ركن ضيافة بثيم — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "قهوجي — ركن ضيافة بثيم",
    "place": "قاعة فعاليات",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 104,
    "tier": 3,
    "file": "keif-aldiafa-qahwaji-red-shemagh-saudi-flag-national-pavilion.webp",
    "width": 900,
    "height": 1200,
    "kb": 101,
    "alt": "قهوجي من كيف الضيافة بشماغ أحمر وصديري أسود يحمل دلة مزخرفة بجانب علم السعودية في جناح وطني",
    "title": "قهوجي كيف الضيافة بالعلم السعودي",
    "entity": "",
    "entityEn": "",
    "sector": "جناح وطني",
    "service": "قهوجي — تقديم قهوة",
    "place": "جناح بطابع وطني",
    "pages": [
      "/qahwajiin-jeddah",
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 105,
    "tier": 3,
    "file": "keif-aldiafa-qahwajiin-incense-and-dallah-majlis-hall-guests-seated.webp",
    "width": 1200,
    "height": 900,
    "kb": 134,
    "alt": "قهوجيان من كيف الضيافة يقدمان البخور والقهوة العربية لضيوف جالسين في مجلس فاخر بثريا كريستال",
    "title": "ضيافة المجالس بالقهوة والبخور — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "قهوجيين — قهوة وبخور للمجلس",
    "place": "مجلس / قاعة فاخرة",
    "pages": [
      "/mubashirin-qahwa-jeddah",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 106,
    "tier": 3,
    "file": "keif-aldiafa-qahwajiin-incense-welcome-luxury-hotel-lobby-chandelier.webp",
    "width": 675,
    "height": 1200,
    "kb": 80,
    "alt": "قهوجيان من كيف الضيافة يستقبلان الضيوف بالمبخرة والدلة الذهبية في بهو فندق فاخر بثريا كريستال ضخمة",
    "title": "استقبال بالبخور والقهوة — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "قهوجيين — استقبال بالبخور والقهوة",
    "place": "بهو فندق فاخر",
    "pages": [
      "/mubashirin-qahwa-jeddah",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 107,
    "tier": 3,
    "file": "keif-aldiafa-server-black-suit-gold-tray-six-glasses-red-tea.webp",
    "width": 1200,
    "height": 1039,
    "kb": 175,
    "alt": "صباب من كيف الضيافة ببدلة سوداء يحمل صينية ذهبية بستة أكواب شاي أحمر",
    "title": "تقديم الشاي — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "تقديم شاي — صينية ذهبية",
    "place": "قاعة اجتماعات",
    "pages": [
      "/sababin-qahwa-jeddah",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 108,
    "tier": 3,
    "file": "keif-aldiafa-server-gold-tray-four-turkish-coffee-cups-qr-card-roses.webp",
    "width": 900,
    "height": 1200,
    "kb": 110,
    "alt": "صينية ذهبية من كيف الضيافة بأربعة فناجين قهوة تركية وورد أبيض وبطاقة «قهوة تركي Turkish Coffee» مع باركود",
    "title": "قهوة تركية بالتقديم الفاخر — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "تقديم قهوة تركية — بطاقة QR",
    "place": "قاعة أفراح",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 109,
    "tier": 3,
    "file": "keif-aldiafa-server-gold-tray-green-tea-glasses-qr-card-white-roses.webp",
    "width": 1200,
    "height": 1139,
    "kb": 155,
    "alt": "صينية ذهبية من كيف الضيافة بأكواب شاي أخضر وورد أبيض وبطاقة «شاي أخضر Green Tea» مع باركود الموقع",
    "title": "شاي أخضر بالتقديم الفاخر — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "تقديم شاي أخضر — بطاقة QR",
    "place": "قاعة أفراح / فندق",
    "pages": [
      "/offerings",
      "/sababin-qahwa-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 110,
    "tier": 3,
    "file": "keif-aldiafa-server-white-jacket-gold-tray-pineapple-ginger-juice.webp",
    "width": 900,
    "height": 1200,
    "kb": 112,
    "alt": "صباب من كيف الضيافة بجاكيت أبيض يحمل صينية ذهبية بأكواب عصير زنجبيل وأناناس مع بطاقة تعريف",
    "title": "تقديم العصائر — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "تقديم عصائر — صينية ذهبية",
    "place": "قاعة فعاليات",
    "pages": [
      "/offerings",
      "/sababin-qahwa-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 111,
    "tier": 3,
    "file": "keif-aldiafa-team-catering-staff-uniform-apron-badge.webp",
    "width": 777,
    "height": 672,
    "kb": 41,
    "alt": "طاقم ضيافة من كيف الضيافة بقمصان موحدة وبابيون وشارات في قاعة مناسبات",
    "title": "طاقم ضيافة كيف الضيافة بالزي الموحد",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "طاقم ضيافة — قمصان وبابيون",
    "place": "قاعة",
    "pages": [
      "/qahwajiin-jeddah",
      "/sababin-qahwa-jeddah",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 112,
    "tier": 3,
    "file": "keif-aldiafa-team-female-hospitality-staff-rose-wall-promo.webp",
    "width": 768,
    "height": 1091,
    "kb": 95,
    "alt": "سبع مضيفات من كيف الضيافة بزي موحد أمام جدار ورد في قاعة أفراح مع لافتة «الخدمات النسائية»",
    "title": "فريق الخدمات النسائية — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "مضيفات — 7 بزي موحد — لافتة «الخدمات النسائية»",
    "place": "قاعة أفراح — جدار ورد",
    "pages": [
      "/qahwajiyat-sababat-jeddah",
      "/diyafa-a3ras-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 113,
    "tier": 3,
    "file": "keif-aldiafa-team-female-server-serving-tray-of-tea.webp",
    "width": 880,
    "height": 1200,
    "kb": 86,
    "alt": "مضيفة من كيف الضيافة تقدم صينية مشروبات في لاونج فندق",
    "title": "مضيفة كيف الضيافة تقدم المشروبات",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "مضيفة — صينية مشروبات",
    "place": "لاونج فندق",
    "pages": [
      "/qahwajiyat-sababat-jeddah",
      "/diyafa-a3ras-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 114,
    "tier": 3,
    "file": "keif-aldiafa-team-female-staff-lineup-floral-backdrop.webp",
    "width": 768,
    "height": 1112,
    "kb": 68,
    "alt": "خمس مضيفات من كيف الضيافة بزي موحد أمام خلفية زهور في قاعة أفراح",
    "title": "مضيفات كيف الضيافة في قاعة أفراح",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "مضيفات — 5 بزي موحد",
    "place": "قاعة أفراح",
    "pages": [
      "/qahwajiyat-sababat-jeddah",
      "/diyafa-a3ras-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 115,
    "tier": 3,
    "file": "keif-aldiafa-team-five-hostesses-uniform-white-shirt-gloves-rose-wall.webp",
    "width": 1024,
    "height": 1024,
    "kb": 170,
    "alt": "خمس مضيفات من كيف الضيافة بزي موحد: قميص أبيض وربطة عنق وتنورة سوداء وقفازات بيضاء أمام جدار ورد",
    "title": "فريق المضيفات — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "مضيفات / مباشرات — زي موحد",
    "place": "قاعة أفراح نسائية",
    "pages": [
      "/qahwajiyat-sababat-jeddah",
      "/diyafa-a3ras-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 116,
    "tier": 3,
    "file": "keif-aldiafa-team-five-qahwajiin-black-daglah-golden-dallah-wedding-hall.webp",
    "width": 675,
    "height": 1200,
    "kb": 150,
    "alt": "خمسة قهوجيين من كيف الضيافة بالدقلة السوداء المطرزة يحملون الدلال الذهبية في قاعة أفراح فاخرة بثريات كريستال",
    "title": "قهوجيين كيف الضيافة في قاعة أفراح",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "قهوجيين — تقديم قهوة عربية في زواج",
    "place": "قاعة أفراح فاخرة",
    "pages": [
      "/diyafa-a3ras-jeddah",
      "/mubashirin-qahwa-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 117,
    "tier": 3,
    "file": "keif-aldiafa-team-four-male-staff-traditional-dress-standing-indoor.webp",
    "width": 900,
    "height": 1200,
    "kb": 76,
    "alt": "أربعة قهوجيين من كيف الضيافة بالثوب الأبيض والصديري المطرز في بهو قاعة",
    "title": "قهوجيين كيف الضيافة بالثوب والصديري",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "4 قهوجيين — ثوب أبيض وصديري مطرز",
    "place": "بهو قاعة",
    "pages": [
      "/qahwajiin-jeddah",
      "/sababin-qahwa-jeddah",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 118,
    "tier": 3,
    "file": "keif-aldiafa-team-four-masked-servers-group-photo.webp",
    "width": 720,
    "height": 1041,
    "kb": 47,
    "alt": "أربعة مباشرين من كيف الضيافة بقمصان بيضاء وبابيون في ممر فندق",
    "title": "مباشرين كيف الضيافة في الفندق",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "4 مباشرين — قميص أبيض وبابيون",
    "place": "ممر فندق",
    "pages": [
      "/mubashirin-qahwa-jeddah",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 119,
    "tier": 3,
    "file": "keif-aldiafa-team-four-servers-in-white-tulle-dresses-holding-trays.webp",
    "width": 768,
    "height": 1060,
    "kb": 55,
    "alt": "أربع مضيفات من كيف الضيافة بفساتين بيضاء رسمية يحملن صواني فضية في قاعة زواج",
    "title": "مضيفات كيف الضيافة بالصواني الفضية في قاعة زواج",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "4 مضيفات — فساتين بيضاء رسمية — صواني فضية",
    "place": "قاعة زواج",
    "pages": [
      "/qahwajiyat-sababat-jeddah",
      "/diyafa-a3ras-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 120,
    "tier": 3,
    "file": "keif-aldiafa-team-fourteen-qahwajiin-black-daglah-lineup-wedding-hall-2.webp",
    "width": 1200,
    "height": 900,
    "kb": 163,
    "alt": "صف قهوجيين كيف الضيافة بالدقلة السوداء المطرزة في قاعة زواج فاخرة — لقطة ثانية",
    "title": "فريق قهوجيين كيف الضيافة في قاعة زواج — 2",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "صف 14 قهوجي — دقلة سوداء مطرزة (لقطة 2)",
    "place": "قاعة زواج فاخرة",
    "pages": [
      "/diyafa-a3ras-jeddah",
      "/qahwajiin-riyadh"
    ],
    "publish": "yes"
  },
  {
    "id": 121,
    "tier": 3,
    "file": "keif-aldiafa-team-fourteen-qahwajiin-black-daglah-lineup-wedding-hall-jeddah-1.webp",
    "width": 1200,
    "height": 900,
    "kb": 131,
    "alt": "صف من أربعة عشر قهوجياً من كيف الضيافة بالدقلة السوداء المطرزة والشماغ في قاعة زواج فاخرة بجدة",
    "title": "فريق قهوجيين كيف الضيافة في قاعة زواج — جدة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "صف 14 قهوجي — دقلة سوداء مطرزة وشماغ",
    "place": "قاعة زواج فاخرة",
    "pages": [
      "/diyafa-a3ras-jeddah",
      "/qahwajiin-jeddah",
      "/"
    ],
    "publish": "yes"
  },
  {
    "id": 122,
    "tier": 3,
    "file": "keif-aldiafa-team-golden-tray-karak-chai-tea.webp",
    "width": 807,
    "height": 639,
    "kb": 77,
    "alt": "صينية ذهبية بأكواب شاي كرك وبطاقة «Karak Chai» يقدمها فريق كيف الضيافة في فعالية",
    "title": "تقديم شاي الكرك — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "تقديم شاي كرك — صينية ذهبية وبطاقة «Karak Chai»",
    "place": "فعالية",
    "pages": [
      "/qahwajiin-jeddah",
      "/sababin-qahwa-jeddah",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 123,
    "tier": 3,
    "file": "keif-aldiafa-team-hospitality-staff-three-uniforms-banner.webp",
    "width": 572,
    "height": 943,
    "kb": 42,
    "alt": "ثلاثة سفرجية من كيف الضيافة بقمصان بيضاء وبابيون وحمالات في قاعة مع لافتة «خدمات السفرجية»",
    "title": "خدمات السفرجية — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "3 سفرجية — قميص أبيض وبابيون وحمالات — لافتة «خدمات السفرجية»",
    "place": "قاعة",
    "pages": [
      "/mubashirin-qahwa-jeddah",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 124,
    "tier": 3,
    "file": "keif-aldiafa-team-man-holding-golden-incense-burner-entrance.webp",
    "width": 900,
    "height": 1200,
    "kb": 58,
    "alt": "قهوجي من كيف الضيافة يحمل مبخرة ذهبية لاستقبال الضيوف عند المدخل",
    "title": "استقبال الضيوف بالبخور — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "قهوجي — مبخرة ذهبية عند المدخل",
    "place": "استقبال",
    "pages": [
      "/diyafa-a3ras-jeddah",
      "/sababin-qahwa-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 125,
    "tier": 3,
    "file": "keif-aldiafa-team-man-in-traditional-attire-holding-dallah.webp",
    "width": 675,
    "height": 1200,
    "kb": 52,
    "alt": "قهوجي من كيف الضيافة بعمامة ذهبية وصديري مطرز يحمل إبريقاً ذهبياً في قاعة استقبال",
    "title": "قهوجي كيف الضيافة بالزي التراثي الذهبي",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "قهوجي — عمامة ذهبية وصديري مطرز — إبريق ذهبي",
    "place": "قاعة استقبال",
    "pages": [
      "/qahwajiin-jeddah",
      "/sababin-qahwa-jeddah",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 126,
    "tier": 3,
    "file": "keif-aldiafa-team-man-pouring-coffee-from-dallah.webp",
    "width": 900,
    "height": 1200,
    "kb": 79,
    "alt": "قهوجي من كيف الضيافة بالدقلة السوداء يصب القهوة العربية على منصة قاعة أفراح",
    "title": "صب القهوة العربية في قاعة أفراح — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "قهوجي — دقلة سوداء يصب على منصة",
    "place": "قاعة أفراح",
    "pages": [
      "/qahwajiin-jeddah",
      "/sababin-qahwa-jeddah",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 127,
    "tier": 3,
    "file": "keif-aldiafa-team-man-served-incense-mabkhara.webp",
    "width": 900,
    "height": 1200,
    "kb": 95,
    "alt": "قهوجي من كيف الضيافة يقدم البخور لضيف بالشماغ الأحمر في قاعة استقبال",
    "title": "تقديم البخور للضيوف — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "تقديم البخور لضيف بالشماغ الأحمر",
    "place": "قاعة استقبال",
    "pages": [
      "/diyafa-a3ras-jeddah",
      "/sababin-qahwa-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 128,
    "tier": 3,
    "file": "keif-aldiafa-team-man-serving-arabic-coffee-cup.webp",
    "width": 1200,
    "height": 801,
    "kb": 77,
    "alt": "قهوجي من كيف الضيافة بالدقلة السوداء يقدم فنجان قهوة عربية لضيف بالشماغ في قاعة فاخرة",
    "title": "تقديم فنجان القهوة العربية — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "قهوجي — دقلة سوداء يقدم فنجان قهوة لضيف بالشماغ",
    "place": "قاعة فاخرة",
    "pages": [
      "/qahwajiin-jeddah",
      "/sababin-qahwa-jeddah",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 129,
    "tier": 3,
    "file": "keif-aldiafa-team-men-in-traditional-garments-indoor-hall.webp",
    "width": 271,
    "height": 300,
    "kb": 14,
    "alt": "صف من قهوجيين كيف الضيافة بالدقلة السوداء المطرزة في قاعة مناسبات",
    "title": "صف قهوجيين كيف الضيافة بالدقلة السوداء",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "صف قهوجيين بالدقلة السوداء",
    "place": "قاعة",
    "pages": [
      "/qahwajiin-jeddah",
      "/sababin-qahwa-jeddah",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 130,
    "tier": 3,
    "file": "keif-aldiafa-team-men-serving-coffee-and-sweets-at-table.webp",
    "width": 1200,
    "height": 675,
    "kb": 131,
    "alt": "ضيف بالبشت يختار من بوفيه الحلا مع قهوجيين ومبخرة من كيف الضيافة في استقبال فعالية",
    "title": "بوفيه الحلا والقهوة في استقبال فعالية — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "ضيف بالبشت يختار من بوفيه الحلا مع قهوجيين ومبخرة",
    "place": "استقبال فعالية",
    "pages": [
      "/diyafa-a3ras-jeddah",
      "/sababin-qahwa-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 131,
    "tier": 3,
    "file": "keif-aldiafa-team-nine-hostesses-rose-wall-womens-services-banner-hires.webp",
    "width": 768,
    "height": 1091,
    "kb": 85,
    "alt": "تسع مضيفات من كيف الضيافة بقمصان بيضاء وربطات مزخرفة أمام جدار ورد أحمر — لافتة «نسعد بتقديم أرقى وأفخر خدمات الضيافة النسائية»",
    "title": "فريق الخدمات النسائية — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "مضيفات — 9 بزي موحد أمام جدار ورد أحمر · لافتة «الخدمات النسائية»",
    "place": "قاعة أفراح",
    "pages": [
      "/qahwajiyat-sababat-jeddah",
      "/diyafa-a3ras-jeddah",
      "/"
    ],
    "publish": "yes"
  },
  {
    "id": 132,
    "tier": 3,
    "file": "keif-aldiafa-team-nine-qahwajiin-black-embroidered-daglah-banquet-hall-2.webp",
    "width": 1200,
    "height": 900,
    "kb": 138,
    "alt": "تسعة قهوجيين من كيف الضيافة بالدقلة السوداء المطرزة في قاعة أفراح — لقطة ثانية",
    "title": "فريق قهوجيين كيف الضيافة — الدقلة السوداء 2",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "طاقم قهوجيين — دقلة سوداء مطرزة",
    "place": "قاعة أفراح",
    "pages": [
      "/mubashirin-qahwa-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 133,
    "tier": 3,
    "file": "keif-aldiafa-team-nine-qahwajiin-white-thobe-black-vest-luxury-hall.webp",
    "width": 1200,
    "height": 900,
    "kb": 171,
    "alt": "تسعة قهوجيين من كيف الضيافة بزي موحد: ثوب أبيض وصديري أسود وغترة بيضاء وقفازات في قاعة فاخرة",
    "title": "فريق قهوجيين كيف الضيافة — الزي الأبيض",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "طاقم قهوجيين — زي موحد",
    "place": "قاعة فاخرة",
    "pages": [
      "/qahwajiin-jeddah",
      "/about",
      "/"
    ],
    "publish": "yes"
  },
  {
    "id": 134,
    "tier": 3,
    "file": "keif-aldiafa-team-nine-qahwajiin-white-thobe-black-vest-ornate-hall-2.webp",
    "width": 1200,
    "height": 900,
    "kb": 138,
    "alt": "صف من تسعة قهوجيين من كيف الضيافة بثوب أبيض وصديري أسود مطرز في قاعة فاخرة — لقطة ثانية",
    "title": "فريق قهوجيين كيف الضيافة — 2",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "طاقم قهوجيين — زي موحد",
    "place": "قاعة فاخرة",
    "pages": [
      "/qahwajiin-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 135,
    "tier": 3,
    "file": "keif-aldiafa-team-person-offering-tray-of-assorted-sweets-embroidered-garment.webp",
    "width": 768,
    "height": 1024,
    "kb": 102,
    "alt": "قهوجي من كيف الضيافة بالدقلة المطرزة يقدم صينية شوكولاتة لضيف بالبشت في قاعة فعالية",
    "title": "تقديم الشوكولاتة للضيوف — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "قهوجي بالدقلة يقدم صينية شوكولاتة لضيف بالبشت",
    "place": "قاعة فعالية",
    "pages": [
      "/qahwajiin-jeddah",
      "/sababin-qahwa-jeddah",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 136,
    "tier": 3,
    "file": "keif-aldiafa-team-person-serving-golden-dallah-coffee.webp",
    "width": 900,
    "height": 1200,
    "kb": 67,
    "alt": "قهوجي من كيف الضيافة بالثوب الأبيض والصديري الأسود يحمل دلة ذهبية في قاعة مسرح",
    "title": "قهوجي كيف الضيافة بالدلة الذهبية في قاعة مسرح",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "قهوجي — ثوب أبيض وصديري أسود — دلة ذهبية",
    "place": "قاعة مسرح",
    "pages": [
      "/qahwajiin-jeddah",
      "/sababin-qahwa-jeddah",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 137,
    "tier": 3,
    "file": "keif-aldiafa-team-qahwaji-floral-counter-exhibition-hall-tv-screens.webp",
    "width": 675,
    "height": 1200,
    "kb": 154,
    "alt": "قهوجي من كيف الضيافة خلف كاونتر ضيافة مزين بالورد الأبيض في قاعة معرض بشاشات كبيرة",
    "title": "ركن ضيافة الورد في المعرض — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "قهوجي — خلف كاونتر ورد أبيض في قاعة معرض",
    "place": "قاعة معرض",
    "pages": [
      "/coffee-break-sharikat-jeddah",
      "/portfolio"
    ],
    "publish": "yes"
  },
  {
    "id": 138,
    "tier": 3,
    "file": "keif-aldiafa-team-qahwaji-mobile-sadu-table-water-cups-hall.webp",
    "width": 675,
    "height": 1200,
    "kb": 67,
    "alt": "قهوجي من كيف الضيافة بالثوب الأبيض والصديري يحمل دلة خلف طاولة سدو متنقلة عليها أكواب مياه",
    "title": "الطاولة المتنقلة مع القهوجي — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "قهوجي — خلف طاولة سدو متنقلة بأكواب مياه",
    "place": "قاعة",
    "pages": [
      "/offerings",
      "/sababin-qahwa-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 139,
    "tier": 3,
    "file": "keif-aldiafa-team-qahwajiin-black-bisht-lineup-luxury-hall-lowres.webp",
    "width": 271,
    "height": 300,
    "kb": 11,
    "alt": "صف قهوجيين من كيف الضيافة بالبشت الأسود في قاعة فاخرة — صورة صغيرة الدقة",
    "title": "قهوجيين كيف الضيافة بالبشت — قاعة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "صف قهوجيين — بشت أسود",
    "place": "قاعة فاخرة",
    "pages": [],
    "publish": "decorative"
  },
  {
    "id": 140,
    "tier": 3,
    "file": "keif-aldiafa-team-qahwajiin-black-daglah-serving-guests-hotel-corridor.webp",
    "width": 1200,
    "height": 801,
    "kb": 44,
    "alt": "قهوجيان من كيف الضيافة بالدقلة السوداء يقدمان القهوة العربية لضيوف بالبشت في ممر فندق",
    "title": "تقديم القهوة للضيوف في الفندق — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "قهوجيين — يقدمون القهوة لضيوف بالبشت في ممر فندق",
    "place": "ممر فندق",
    "pages": [
      "/sababin-qahwa-jeddah",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 141,
    "tier": 3,
    "file": "keif-aldiafa-team-server-holding-dallah-and-dates.webp",
    "width": 900,
    "height": 1200,
    "kb": 78,
    "alt": "قهوجي من كيف الضيافة بالثوب الأبيض يحمل دلة ذهبية بجانب بوفيه تمور وشوكولاتة في قاعة",
    "title": "قهوجي كيف الضيافة بجانب بوفيه التمور",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "قهوجي — ثوب أبيض — دلة ذهبية بجانب بوفيه تمور وشوكولاتة",
    "place": "قاعة",
    "pages": [
      "/qahwajiin-jeddah",
      "/sababin-qahwa-jeddah",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 142,
    "tier": 3,
    "file": "keif-aldiafa-team-server-pouring-dallah-at-exhibition-booth.webp",
    "width": 900,
    "height": 1200,
    "kb": 104,
    "alt": "قهوجي من كيف الضيافة يصب القهوة من دلة زجاج وذهب في معرض",
    "title": "صب القهوة من الدلة الزجاجية الذهبية — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "قهوجي يصب من دلة زجاج وذهب",
    "place": "معرض",
    "pages": [
      "/qahwajiin-jeddah",
      "/sababin-qahwa-jeddah",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 143,
    "tier": 3,
    "file": "keif-aldiafa-team-server-presenting-gold-tray-to-seated-men.webp",
    "width": 900,
    "height": 1200,
    "kb": 110,
    "alt": "قهوجي من كيف الضيافة يقدم الصينية الذهبية لضيوف المجلس",
    "title": "ضيافة المجالس — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "قهوجي يقدم الصينية الذهبية لضيوف المجلس",
    "place": "مجلس استقبال",
    "pages": [
      "/qahwajiin-jeddah",
      "/sababin-qahwa-jeddah",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 144,
    "tier": 3,
    "file": "keif-aldiafa-team-server-serving-tray-in-indoor-gathering.webp",
    "width": 900,
    "height": 1200,
    "kb": 108,
    "alt": "قهوجي من كيف الضيافة يقدم الصينية لضيوف جالسين في مجلس",
    "title": "تقديم الضيافة في المجلس — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "قهوجي يقدم الصينية لضيوف جالسين",
    "place": "مجلس",
    "pages": [
      "/qahwajiin-jeddah",
      "/sababin-qahwa-jeddah",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 145,
    "tier": 3,
    "file": "keif-aldiafa-team-servers-holding-dallah-in-banquet-hall.webp",
    "width": 1200,
    "height": 801,
    "kb": 59,
    "alt": "صف قهوجيين من كيف الضيافة بالدقلة السوداء يحملون الدلال في قاعة فاخرة",
    "title": "قهوجيين كيف الضيافة بالدلال في قاعة فاخرة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "صف قهوجيين بالدقلة السوداء يحملون الدلال",
    "place": "قاعة فاخرة",
    "pages": [
      "/qahwajiin-jeddah",
      "/sababin-qahwa-jeddah",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 146,
    "tier": 3,
    "file": "keif-aldiafa-team-ten-qahwajiin-black-embroidered-daglah-banquet-hall.webp",
    "width": 1200,
    "height": 900,
    "kb": 166,
    "alt": "عشرة قهوجيين من كيف الضيافة بالدقلة السوداء المطرزة بالفضي والغترة البيضاء في قاعة أفراح فاخرة",
    "title": "فريق قهوجيين كيف الضيافة — الدقلة السوداء",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "طاقم قهوجيين — دقلة سوداء مطرزة",
    "place": "قاعة أفراح",
    "pages": [
      "/mubashirin-qahwa-jeddah",
      "/diyafa-a3ras-jeddah",
      "/"
    ],
    "publish": "yes"
  },
  {
    "id": 147,
    "tier": 3,
    "file": "keif-aldiafa-team-three-hospitality-staff-standing-banqueting-room.webp",
    "width": 1200,
    "height": 597,
    "kb": 66,
    "alt": "فريق سفرجية من كيف الضيافة بقمصان بيضاء وبابيون وحمالات حمراء في قاعة",
    "title": "فريق السفرجية بالزي الأحمر — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "فريق سفرجية — قمصان بيضاء وببيونة وحمالات حمراء",
    "place": "قاعة",
    "pages": [
      "/mubashirin-qahwa-jeddah",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 148,
    "tier": 3,
    "file": "keif-aldiafa-team-three-masked-servers-with-gold-sign.webp",
    "width": 572,
    "height": 795,
    "kb": 45,
    "alt": "ثلاثة سفرجية من كيف الضيافة بقمصان سوداء وبابيون أحمر بجانب ستاند ذهبي في بهو",
    "title": "سفرجية كيف الضيافة بالزي الأسود والأحمر",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "فريق سفرجية بقمصان سوداء وببيونة حمراء بجانب ستاند ذهبي",
    "place": "بهو فندق/قاعة",
    "pages": [
      "/mubashirin-qahwa-jeddah",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 149,
    "tier": 3,
    "file": "keif-aldiafa-team-three-staff-in-black-uniforms-with-gold-sign.webp",
    "width": 958,
    "height": 939,
    "kb": 63,
    "alt": "زي السفرجية الأسود مع البابيون الأحمر والمرايل لدى كيف الضيافة — لقطة للزي بلا وجوه",
    "title": "زي السفرجية الأسود — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "زي سفرجية أسود وببيونة حمراء (بلا رؤوس)",
    "place": "بهو",
    "pages": [
      "/mubashirin-qahwa-jeddah",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 150,
    "tier": 3,
    "file": "keif-aldiafa-team-three-staff-in-white-shirts-and-beige-aprons.webp",
    "width": 958,
    "height": 788,
    "kb": 100,
    "alt": "زي السفرجية الأبيض مع المرايل والبابيون البيج لدى كيف الضيافة — لقطة للزي بلا وجوه",
    "title": "زي السفرجية البيج — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "زي سفرجية أبيض ومرايل بيج (بلا رؤوس)",
    "place": "قاعة",
    "pages": [
      "/mubashirin-qahwa-jeddah",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 151,
    "tier": 3,
    "file": "keif-aldiafa-team-three-waitstaff-in-banquet-hall.webp",
    "width": 720,
    "height": 987,
    "kb": 75,
    "alt": "ثلاثة سفرجية من كيف الضيافة بمرايل وبابيون بيج في قاعة أفراح فاخرة",
    "title": "سفرجية كيف الضيافة بالزي البيج في قاعة أفراح",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "فريق سفرجية بمرايل بيج وببيونة بيج في قاعة فاخرة",
    "place": "قاعة أفراح",
    "pages": [
      "/mubashirin-qahwa-jeddah",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 152,
    "tier": 3,
    "file": "keif-aldiafa-team-three-waitstaff-in-black-aprons.webp",
    "width": 571,
    "height": 800,
    "kb": 31,
    "alt": "ثلاثة سفرجية من كيف الضيافة بمرايل سوداء وحمالات في تشكيل V داخل قاعة",
    "title": "سفرجية كيف الضيافة بالمرايل السوداء",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "فريق سفرجية بمرايل سوداء وحمالات — تشكيل V",
    "place": "قاعة",
    "pages": [
      "/mubashirin-qahwa-jeddah",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 153,
    "tier": 3,
    "file": "keif-aldiafa-team-three-waitstaff-standing-in-banquet-hall.webp",
    "width": 548,
    "height": 592,
    "kb": 30,
    "alt": "زي السفرجية الأبيض مع المرايل السوداء لدى كيف الضيافة — لقطة للزي بلا وجوه",
    "title": "زي السفرجية الأبيض والأسود — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "زي سفرجية أبيض ومرايل سوداء (بلا رؤوس)",
    "place": "قاعة",
    "pages": [
      "/mubashirin-qahwa-jeddah",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 154,
    "tier": 3,
    "file": "keif-aldiafa-team-three-women-white-dresses-in-mirror.webp",
    "width": 756,
    "height": 1200,
    "kb": 44,
    "alt": "أربع مضيفات من كيف الضيافة بفساتين بيضاء بحواف سوداء وقفازات في قاعة مرايا",
    "title": "مضيفات كيف الضيافة بالفساتين البيضاء",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "فريق مضيفات — فساتين بيضاء بحواف سوداء وقفازات",
    "place": "قاعة مرايا",
    "pages": [
      "/qahwajiyat-sababat-jeddah",
      "/diyafa-a3ras-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 155,
    "tier": 3,
    "file": "keif-aldiafa-team-two-servers-holding-brass-pots-indoor.webp",
    "width": 1200,
    "height": 675,
    "kb": 84,
    "alt": "سقّايا زمزم من كيف الضيافة بطاقيات صفراء وأباريق ذهبية في قاعة",
    "title": "سقيا زمزم — كيف الضيافة — 1",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "سقّايا زمزم بطاقيات صفراء وأباريق ذهبية",
    "place": "قاعة",
    "pages": [
      "/services",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 156,
    "tier": 3,
    "file": "keif-aldiafa-team-two-servers-holding-dallah-coffee-pots.webp",
    "width": 1200,
    "height": 675,
    "kb": 88,
    "alt": "سقّايا زمزم من كيف الضيافة بالأباريق الذهبية — لقطة أوسع في القاعة",
    "title": "سقيا زمزم — كيف الضيافة — 2",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "سقّايا زمزم — لقطة أوسع",
    "place": "قاعة",
    "pages": [
      "/services",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 157,
    "tier": 3,
    "file": "keif-aldiafa-team-two-servers-serving-desserts-and-arabic-coffee.webp",
    "width": 880,
    "height": 1200,
    "kb": 98,
    "alt": "صبابتان من كيف الضيافة إحداهما بدلة ذهبية والأخرى بصينية حلويات في بهو فاخر",
    "title": "صبابات قهوة كيف الضيافة بالقهوة والحلا",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "صبابات قهوة — دلة ذهبية وصينية حلويات",
    "place": "بهو فاخر",
    "pages": [
      "/qahwajiyat-sababat-jeddah",
      "/diyafa-a3ras-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 158,
    "tier": 3,
    "file": "keif-aldiafa-team-two-staff-masked-lobby.webp",
    "width": 880,
    "height": 1200,
    "kb": 61,
    "alt": "مضيفتان من كيف الضيافة بزي رسمي أسود في بهو فندق مزين",
    "title": "مضيفات كيف الضيافة بالزي الرسمي",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "مضيفات بزي رسمي أسود في بهو فندق",
    "place": "بهو فندق",
    "pages": [
      "/qahwajiyat-sababat-jeddah",
      "/diyafa-a3ras-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 159,
    "tier": 3,
    "file": "keif-aldiafa-team-two-women-red-uniforms-lobby.webp",
    "width": 896,
    "height": 1200,
    "kb": 80,
    "alt": "مضيفتان من كيف الضيافة بفساتين حمراء وقفازات في ممر كلاسيكي فاخر",
    "title": "مضيفات كيف الضيافة بالزي الأحمر",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "مضيفات بفساتين حمراء وقفازات في ممر كلاسيكي",
    "place": "قاعة",
    "pages": [
      "/qahwajiyat-sababat-jeddah",
      "/diyafa-a3ras-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 160,
    "tier": 3,
    "file": "keif-aldiafa-team-uniformed-staff-portrait.webp",
    "width": 880,
    "height": 1200,
    "kb": 57,
    "alt": "ثلاث صبابات قهوة مبتسمات من كيف الضيافة بقمصان بيضاء وربطات في قاعة مزينة",
    "title": "صبابات قهوة كيف الضيافة — لقطة قريبة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "ثلاث صبابات قهوة مبتسمات — قمصان بيضاء وربطات",
    "place": "قاعة",
    "pages": [
      "/qahwajiyat-sababat-jeddah",
      "/diyafa-a3ras-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 161,
    "tier": 3,
    "file": "keif-aldiafa-team-woman-niqab-holding-green-cutout.webp",
    "width": 828,
    "height": 758,
    "kb": 28,
    "alt": "مضيفة من كيف الضيافة تحمل خريطة السعودية الخضراء بالخط الذهبي في فعالية اليوم الوطني",
    "title": "ضيافة اليوم الوطني — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "مضيفة تحمل خريطة السعودية الخضراء — اليوم الوطني",
    "place": "فعالية",
    "pages": [
      "/qahwajiyat-sababat-jeddah",
      "/diyafa-a3ras-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 162,
    "tier": 3,
    "file": "keif-aldiafa-three-qahwajiin-black-daglah-wedding-reception-cb-monogram-balloons.webp",
    "width": 675,
    "height": 1200,
    "kb": 131,
    "alt": "ثلاثة قهوجيين من كيف الضيافة بالدقلة السوداء المطرزة أمام خلفية زواج بشعار C&B وقوس بالونات ذهبي وأسود",
    "title": "قهوجيين كيف الضيافة في استقبال زواج",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "قهوجيين — استقبال زواج",
    "place": "مدخل قاعة زواج",
    "pages": [
      "/diyafa-a3ras-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 163,
    "tier": 3,
    "file": "keif-aldiafa-two-hostesses-uniform-serving-arabic-coffee-and-pastries-majlis.webp",
    "width": 896,
    "height": 1200,
    "kb": 178,
    "alt": "مضيفتان من كيف الضيافة بزي موحد، إحداهما بصينية معجنات والأخرى بدلة ذهبية وفناجين في مجلس فاخر",
    "title": "مضيفات كيف الضيافة يقدمن القهوة والحلا",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "مضيفات — قهوة عربية وحلا",
    "place": "مجلس نسائي",
    "pages": [
      "/qahwajiyat-sababat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 164,
    "tier": 3,
    "file": "keif-aldiafa-two-qahwajiin-black-daglah-dates-tray-and-dallah-corridor.webp",
    "width": 476,
    "height": 813,
    "kb": 51,
    "alt": "قهوجيان من كيف الضيافة بالدقلة السوداء، أحدهما بصينية تمور والآخر بدلة ذهبية وأكواب في ممر حديث",
    "title": "قهوجيين كيف الضيافة بالتمور والقهوة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "قهوجيين — تمور وقهوة",
    "place": "ممر مبنى حديث",
    "pages": [
      "/sababin-qahwa-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 165,
    "tier": 3,
    "file": "keif-aldiafa-two-sababin-white-thobe-crossed-belt-tea-coffee-bar-wedding-hall.webp",
    "width": 1200,
    "height": 675,
    "kb": 171,
    "alt": "صبابان من كيف الضيافة بثوب أبيض وحزام متقاطع أسود خلف بار رخامي عليه أباريق شاي زجاجية ودلال",
    "title": "بار الشاي والقهوة — صبابين كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "صبابين — بار شاي وقهوة",
    "place": "قاعة أفراح",
    "pages": [
      "/sababin-qahwa-jeddah",
      "/diyafa-a3ras-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 166,
    "tier": 4,
    "file": "keif-aldiafa-equipment-brass-dallah-coffee-pots-and-cups-display.webp",
    "width": 280,
    "height": 307,
    "kb": 14,
    "alt": "دلال من تجهيزات الضيافة لدى كيف الضيافة — صورة كتالوج",
    "title": "دلال — تجهيزات كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — دلال",
    "place": "استوديو",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 167,
    "tier": 4,
    "file": "keif-aldiafa-equipment-clear-glass-cup-and-saucer-product-display.webp",
    "width": 1080,
    "height": 1080,
    "kb": 40,
    "alt": "فنجان زجاج من تجهيزات الضيافة لدى كيف الضيافة — صورة كتالوج",
    "title": "فنجان زجاج — تجهيزات كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — فنجان زجاج (كتالوج)",
    "place": "استوديو",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 168,
    "tier": 4,
    "file": "keif-aldiafa-equipment-clear-glass-cup-gold-stripes.webp",
    "width": 1080,
    "height": 1080,
    "kb": 39,
    "alt": "كوب زجاج ذهبي من تجهيزات الضيافة لدى كيف الضيافة — صورة كتالوج",
    "title": "كوب زجاج ذهبي — تجهيزات كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — كوب زجاج ذهبي (كتالوج)",
    "place": "استوديو",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 169,
    "tier": 4,
    "file": "keif-aldiafa-equipment-clear-glass-cup-with-gold-stripes-and-logo.webp",
    "width": 1000,
    "height": 1000,
    "kb": 54,
    "alt": "كوب زجاج ذهبي من تجهيزات الضيافة لدى كيف الضيافة — صورة كتالوج — لقطة 2",
    "title": "كوب زجاج ذهبي — تجهيزات كيف الضيافة — 2",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — كوب زجاج ذهبي (كتالوج)",
    "place": "استوديو",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 170,
    "tier": 4,
    "file": "keif-aldiafa-equipment-clear-ribbed-glass-cup-and-saucer.webp",
    "width": 1000,
    "height": 1000,
    "kb": 38,
    "alt": "كوب شاي مضلع من تجهيزات الضيافة لدى كيف الضيافة — صورة كتالوج",
    "title": "كوب شاي مضلع — تجهيزات كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — كوب شاي مضلع (كتالوج)",
    "place": "استوديو",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 171,
    "tier": 4,
    "file": "keif-aldiafa-equipment-clear-stem-glass-on-branded-white-background.webp",
    "width": 1080,
    "height": 1080,
    "kb": 43,
    "alt": "كوب بساق من تجهيزات الضيافة لدى كيف الضيافة — صورة كتالوج",
    "title": "كوب بساق — تجهيزات كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — كوب بساق (كتالوج)",
    "place": "استوديو",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 172,
    "tier": 4,
    "file": "keif-aldiafa-equipment-clear-stemmed-wine-glass-on-branded-background.webp",
    "width": 1080,
    "height": 1080,
    "kb": 38,
    "alt": "كوب بساق من تجهيزات الضيافة لدى كيف الضيافة — صورة كتالوج — لقطة 2",
    "title": "كوب بساق — تجهيزات كيف الضيافة — 2",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — كوب بساق (كتالوج)",
    "place": "استوديو",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 173,
    "tier": 4,
    "file": "keif-aldiafa-equipment-clear-stemmed-wine-glass-with-brand-logo.webp",
    "width": 1000,
    "height": 1000,
    "kb": 30,
    "alt": "كوب بساق من تجهيزات الضيافة لدى كيف الضيافة — صورة كتالوج — لقطة 3",
    "title": "كوب بساق — تجهيزات كيف الضيافة — 3",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — كوب بساق (كتالوج)",
    "place": "استوديو",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 174,
    "tier": 4,
    "file": "keif-aldiafa-equipment-decorative-glass-teacup-and-saucer.webp",
    "width": 1000,
    "height": 1000,
    "kb": 67,
    "alt": "كوب شاي مزخرف من تجهيزات الضيافة لدى كيف الضيافة — صورة كتالوج",
    "title": "كوب شاي مزخرف — تجهيزات كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — كوب شاي مزخرف (كتالوج)",
    "place": "استوديو",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 175,
    "tier": 4,
    "file": "keif-aldiafa-equipment-decorative-gold-pattern-glass-cups-saucer.webp",
    "width": 1080,
    "height": 1080,
    "kb": 68,
    "alt": "كوب شاي ذهبي مزخرف من تجهيزات الضيافة لدى كيف الضيافة — صورة كتالوج",
    "title": "كوب شاي ذهبي مزخرف — تجهيزات كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — كوب شاي ذهبي مزخرف (كتالوج)",
    "place": "استوديو",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 176,
    "tier": 4,
    "file": "keif-aldiafa-equipment-glass-cup-gold-stripes-saucer-logo.webp",
    "width": 1000,
    "height": 1000,
    "kb": 34,
    "alt": "كوب شاي بمقبض ذهبي من تجهيزات الضيافة لدى كيف الضيافة — صورة كتالوج",
    "title": "كوب شاي بمقبض ذهبي — تجهيزات كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — كوب شاي بمقبض ذهبي (كتالوج)",
    "place": "استوديو",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 177,
    "tier": 4,
    "file": "keif-aldiafa-equipment-glass-cup-with-gold-vertical-stripes-on-saucer.webp",
    "width": 1080,
    "height": 1080,
    "kb": 44,
    "alt": "كوب شاي بمقبض ذهبي من تجهيزات الضيافة لدى كيف الضيافة — صورة كتالوج — لقطة 2",
    "title": "كوب شاي بمقبض ذهبي — تجهيزات كيف الضيافة — 2",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — كوب شاي بمقبض ذهبي (كتالوج)",
    "place": "استوديو",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 178,
    "tier": 4,
    "file": "keif-aldiafa-equipment-glass-mug-gold-rim-palm-and-crossed-swords.webp",
    "width": 1080,
    "height": 1080,
    "kb": 44,
    "alt": "كوب زجاج بحافة ذهبية من تجهيزات الضيافة لدى كيف الضيافة — صورة كتالوج",
    "title": "كوب زجاج بحافة ذهبية — تجهيزات كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — كوب زجاج بحافة ذهبية (كتالوج)",
    "place": "استوديو",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 179,
    "tier": 4,
    "file": "keif-aldiafa-equipment-glass-mug-with-gold-stripes-on-saucer.webp",
    "width": 1080,
    "height": 1080,
    "kb": 50,
    "alt": "كوب شاي ذهبي من تجهيزات الضيافة لدى كيف الضيافة — صورة كتالوج",
    "title": "كوب شاي ذهبي — تجهيزات كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — كوب شاي ذهبي (كتالوج)",
    "place": "استوديو",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 180,
    "tier": 4,
    "file": "keif-aldiafa-equipment-glass-mug-with-palm-and-crossed-swords-emblem.webp",
    "width": 1080,
    "height": 1080,
    "kb": 39,
    "alt": "كوب زجاج بحافة ذهبية من تجهيزات الضيافة لدى كيف الضيافة — صورة كتالوج — لقطة 2",
    "title": "كوب زجاج بحافة ذهبية — تجهيزات كيف الضيافة — 2",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — كوب زجاج بحافة ذهبية (كتالوج)",
    "place": "استوديو",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 181,
    "tier": 4,
    "file": "keif-aldiafa-equipment-glass-tea-sets-with-gold-display-stands.webp",
    "width": 900,
    "height": 1200,
    "kb": 88,
    "alt": "شجرة أكواب ذهبية من تجهيزات الضيافة لدى كيف الضيافة — قاعة فاخرة",
    "title": "شجرة أكواب ذهبية — تجهيزات كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — شجرة أكواب ذهبية",
    "place": "قاعة فاخرة",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 182,
    "tier": 4,
    "file": "keif-aldiafa-equipment-glass-teacup-jug-saucer-display.webp",
    "width": 1080,
    "height": 1080,
    "kb": 47,
    "alt": "كوب شاي مضلع من تجهيزات الضيافة لدى كيف الضيافة — صورة كتالوج — لقطة 2",
    "title": "كوب شاي مضلع — تجهيزات كيف الضيافة — 2",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — كوب شاي مضلع (كتالوج)",
    "place": "استوديو",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 183,
    "tier": 4,
    "file": "keif-aldiafa-equipment-glass-tumbler-gold-stripes-branded-background.webp",
    "width": 1080,
    "height": 1080,
    "kb": 44,
    "alt": "كوب بقاعدة ذهبية من تجهيزات الضيافة لدى كيف الضيافة — صورة كتالوج",
    "title": "كوب بقاعدة ذهبية — تجهيزات كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — كوب بقاعدة ذهبية (كتالوج)",
    "place": "استوديو",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 184,
    "tier": 4,
    "file": "keif-aldiafa-equipment-gold-and-glass-multi-tier-stand.webp",
    "width": 900,
    "height": 1200,
    "kb": 99,
    "alt": "شجرة أكواب ذهبية على كاونتر من تجهيزات الضيافة لدى كيف الضيافة — فعالية",
    "title": "شجرة أكواب ذهبية على كاونتر — تجهيزات كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — شجرة أكواب ذهبية على كاونتر",
    "place": "فعالية",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 185,
    "tier": 4,
    "file": "keif-aldiafa-equipment-gold-dallah-arabic-coffee-pot.webp",
    "width": 1080,
    "height": 1080,
    "kb": 48,
    "alt": "دلة ذهبية من تجهيزات الضيافة لدى كيف الضيافة — صورة كتالوج",
    "title": "دلة ذهبية — تجهيزات كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — دلة ذهبية (كتالوج)",
    "place": "استوديو",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 186,
    "tier": 4,
    "file": "keif-aldiafa-equipment-gold-dallah-blue-pattern-background-catalog.webp",
    "width": 1080,
    "height": 1080,
    "kb": 38,
    "alt": "دلة ذهبية على خلفية زرقاء منقوشة — صورة كتالوج من تجهيزات كيف الضيافة",
    "title": "الدلة الذهبية — كتالوج تجهيزات كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — دلة ذهبية (خلفية زرقاء منقوشة)",
    "place": "استوديو",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 187,
    "tier": 4,
    "file": "keif-aldiafa-equipment-gold-emblem-porcelain-coffee-cups.webp",
    "width": 1080,
    "height": 1080,
    "kb": 54,
    "alt": "فناجين بورسلين بالشعار الوطني من تجهيزات الضيافة لدى كيف الضيافة — صورة كتالوج",
    "title": "فناجين بورسلين بالشعار الوطني — تجهيزات كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — فناجين بورسلين بالشعار الوطني (كتالوج)",
    "place": "استوديو",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 188,
    "tier": 4,
    "file": "keif-aldiafa-equipment-gold-glass-multi-tier-serving-stand.webp",
    "width": 900,
    "height": 1200,
    "kb": 97,
    "alt": "ستاند أكواب ذهبي من تجهيزات الضيافة لدى كيف الضيافة — قاعة",
    "title": "ستاند أكواب ذهبي — تجهيزات كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — ستاند أكواب ذهبي",
    "place": "قاعة",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 189,
    "tier": 4,
    "file": "keif-aldiafa-equipment-gold-glass-tea-stand-table.webp",
    "width": 900,
    "height": 1200,
    "kb": 107,
    "alt": "ستاندان أكواب ذهبيان وشاي من تجهيزات الضيافة لدى كيف الضيافة — قاعة",
    "title": "ستاندان أكواب ذهبيان وشاي — تجهيزات كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — ستاندان أكواب ذهبيان وشاي",
    "place": "قاعة",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 190,
    "tier": 4,
    "file": "keif-aldiafa-equipment-gold-pitchers-tripod-stands-orchid-centerpiece.webp",
    "width": 900,
    "height": 1200,
    "kb": 158,
    "alt": "أباريق ذهبية بأغطية خضراء على حوامل ثلاثية مزخرفة أمام باقة أوركيد من معدات كيف الضيافة",
    "title": "معدات التقديم الذهبية — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — أباريق ذهبية",
    "place": "طاولة استقبال زواج",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 191,
    "tier": 4,
    "file": "keif-aldiafa-equipment-gold-rimmed-porcelain-cups-on-gold-tray.webp",
    "width": 900,
    "height": 1200,
    "kb": 48,
    "alt": "فناجين بورسلين بنخلة ذهبية من تجهيزات الضيافة لدى كيف الضيافة — تجهيز",
    "title": "فناجين بورسلين بنخلة ذهبية — تجهيزات كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — فناجين بورسلين بنخلة ذهبية",
    "place": "تجهيز",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 192,
    "tier": 4,
    "file": "keif-aldiafa-equipment-gold-tea-glass-tree-stand-white-table.webp",
    "width": 1200,
    "height": 675,
    "kb": 73,
    "alt": "شجرة أكواب شاي ذهبية على طاولة بيضاء من تجهيزات كيف الضيافة",
    "title": "شجرة الأكواب الذهبية — تجهيزات كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — شجرة أكواب ذهبية على طاولة بيضاء",
    "place": "قاعة",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 193,
    "tier": 4,
    "file": "keif-aldiafa-equipment-gold-tray-clear-glasses-palm-motif.webp",
    "width": 900,
    "height": 1200,
    "kb": 80,
    "alt": "أكواب شاي بنخلة خضراء على صينية ذهبية من تجهيزات الضيافة لدى كيف الضيافة — تجهيز",
    "title": "أكواب شاي بنخلة خضراء على صينية ذهبية — تجهيزات كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — أكواب شاي بنخلة خضراء على صينية ذهبية",
    "place": "تجهيز",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 194,
    "tier": 4,
    "file": "keif-aldiafa-equipment-golden-brass-pitchers-set-collection.webp",
    "width": 280,
    "height": 307,
    "kb": 12,
    "alt": "مجموعة أباريق وسقّايات نحاسية ذهبية من تجهيزات كيف الضيافة",
    "title": "الأباريق النحاسية الذهبية — تجهيزات كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — مجموعة أباريق نحاسية ذهبية",
    "place": "استوديو",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 195,
    "tier": 4,
    "file": "keif-aldiafa-equipment-golden-dallah-and-cups-display.webp",
    "width": 900,
    "height": 1200,
    "kb": 75,
    "alt": "موزعان ذهبيان على حوامل من تجهيزات الضيافة لدى كيف الضيافة — تجهيز",
    "title": "موزعان ذهبيان على حوامل — تجهيزات كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — موزعان ذهبيان على حوامل",
    "place": "تجهيز",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 196,
    "tier": 4,
    "file": "keif-aldiafa-equipment-golden-dallah-coffee-pot-on-glass-table.webp",
    "width": 678,
    "height": 678,
    "kb": 45,
    "alt": "دلة ذهبية على طاولة زجاج من تجهيزات الضيافة لدى كيف الضيافة — غرفة",
    "title": "دلة ذهبية على طاولة زجاج — تجهيزات كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — دلة ذهبية على طاولة زجاج",
    "place": "غرفة",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 197,
    "tier": 4,
    "file": "keif-aldiafa-equipment-golden-dallah-coffee-pot-product-shot.webp",
    "width": 1080,
    "height": 1080,
    "kb": 42,
    "alt": "دلة ذهبية من تجهيزات الضيافة لدى كيف الضيافة — صورة كتالوج — لقطة 2",
    "title": "دلة ذهبية — تجهيزات كيف الضيافة — 2",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — دلة ذهبية (كتالوج)",
    "place": "استوديو",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 198,
    "tier": 4,
    "file": "keif-aldiafa-equipment-golden-decorative-vessel-on-marble-table.webp",
    "width": 900,
    "height": 1200,
    "kb": 63,
    "alt": "موزع ذهبي على حامل ثلاثي من تجهيزات الضيافة لدى كيف الضيافة — غرفة",
    "title": "موزع ذهبي على حامل ثلاثي — تجهيزات كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — موزع ذهبي على حامل ثلاثي",
    "place": "غرفة",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 199,
    "tier": 4,
    "file": "keif-aldiafa-equipment-metal-dallah-coffee-pot-product-display.webp",
    "width": 1080,
    "height": 1080,
    "kb": 48,
    "alt": "دلة فضية من تجهيزات الضيافة لدى كيف الضيافة — صورة كتالوج",
    "title": "دلة فضية — تجهيزات كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — دلة فضية (كتالوج)",
    "place": "استوديو",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 200,
    "tier": 4,
    "file": "keif-aldiafa-equipment-ornate-gold-accent-tea-glass-with-saucer.webp",
    "width": 1080,
    "height": 1080,
    "kb": 58,
    "alt": "أكواب شاي بزخارف ذهبية من تجهيزات الضيافة لدى كيف الضيافة — صورة كتالوج",
    "title": "أكواب شاي بزخارف ذهبية — تجهيزات كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — أكواب شاي بزخارف ذهبية (كتالوج)",
    "place": "استوديو",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 201,
    "tier": 4,
    "file": "keif-aldiafa-equipment-ornate-gold-vessel-with-blue-beads.webp",
    "width": 880,
    "height": 1200,
    "kb": 108,
    "alt": "ستاند ذهبي تراثي بخرز أزرق من تجهيزات الضيافة لدى كيف الضيافة — معرض معدات",
    "title": "ستاند ذهبي تراثي بخرز أزرق — تجهيزات كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — ستاند ذهبي تراثي بخرز أزرق",
    "place": "معرض معدات",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 202,
    "tier": 4,
    "file": "keif-aldiafa-equipment-ornate-golden-decorative-vessel-display.webp",
    "width": 880,
    "height": 1200,
    "kb": 117,
    "alt": "ستاند ذهبي تراثي (لقطة كاملة) من تجهيزات الضيافة لدى كيف الضيافة — معرض معدات",
    "title": "ستاند ذهبي تراثي (لقطة كاملة) — تجهيزات كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — ستاند ذهبي تراثي (لقطة كاملة)",
    "place": "معرض معدات",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 203,
    "tier": 4,
    "file": "keif-aldiafa-equipment-ornate-golden-tiered-stand-blue-beads-dallah-cup-tray.webp",
    "width": 546,
    "height": 1200,
    "kb": 89,
    "alt": "ستاند ذهبي متعدد الطبقات بخرز أزرق مع دلة صغيرة وصينية فناجين من معدات كيف الضيافة",
    "title": "المعدات الذهبية التراثية — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — ستاند ذهبي مزخرف",
    "place": "معرض معدات",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 204,
    "tier": 4,
    "file": "keif-aldiafa-equipment-ornate-golden-tiered-stand-coins-turquoise-beads-glass-cups.webp",
    "width": 595,
    "height": 1200,
    "kb": 81,
    "alt": "ستاند نحاسي ذهبي بعملات معلقة وخرز تركوازي مع دلة وأكواب زجاجية من معدات كيف الضيافة",
    "title": "المعدات التراثية الذهبية — 2",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — ستاند ذهبي بعملات",
    "place": "معرض معدات",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 205,
    "tier": 4,
    "file": "keif-aldiafa-equipment-silver-arabic-coffee-pot-dallah.webp",
    "width": 1080,
    "height": 1080,
    "kb": 43,
    "alt": "دلة فضية من تجهيزات الضيافة لدى كيف الضيافة — صورة كتالوج — لقطة 2",
    "title": "دلة فضية — تجهيزات كيف الضيافة — 2",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — دلة فضية (كتالوج)",
    "place": "استوديو",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 206,
    "tier": 4,
    "file": "keif-aldiafa-equipment-silver-dallah-coffee-pot-with-k-logo.webp",
    "width": 1000,
    "height": 1000,
    "kb": 39,
    "alt": "دلة فضية بشعار K من تجهيزات الضيافة لدى كيف الضيافة — صورة كتالوج",
    "title": "دلة فضية بشعار K — تجهيزات كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — دلة فضية بشعار K (كتالوج)",
    "place": "استوديو",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 207,
    "tier": 4,
    "file": "keif-aldiafa-equipment-white-ceramic-cup-on-saucer-with-branded-frame.webp",
    "width": 1080,
    "height": 1080,
    "kb": 37,
    "alt": "كوب قهوة أبيض (خلفية زرقاء) من تجهيزات الضيافة لدى كيف الضيافة — صورة كتالوج",
    "title": "كوب قهوة أبيض (خلفية زرقاء) — تجهيزات كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — كوب قهوة أبيض (خلفية زرقاء)",
    "place": "استوديو",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 208,
    "tier": 4,
    "file": "keif-aldiafa-equipment-white-cup-and-saucer-with-brand-frame.webp",
    "width": 1080,
    "height": 1080,
    "kb": 41,
    "alt": "كوب قهوة أبيض (خلفية زرقاء) من تجهيزات الضيافة لدى كيف الضيافة — صورة كتالوج — لقطة 2",
    "title": "كوب قهوة أبيض (خلفية زرقاء) — تجهيزات كيف الضيافة — 2",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — كوب قهوة أبيض (خلفية زرقاء)",
    "place": "استوديو",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 209,
    "tier": 4,
    "file": "keif-aldiafa-equipment-white-cup-and-saucer-with-k-logo.webp",
    "width": 1000,
    "height": 1000,
    "kb": 26,
    "alt": "كوب وصحن بشعار K الذهبي من تجهيزات الضيافة لدى كيف الضيافة — صورة كتالوج",
    "title": "كوب وصحن بشعار K الذهبي — تجهيزات كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — كوب وصحن بشعار K الذهبي",
    "place": "استوديو",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 210,
    "tier": 4,
    "file": "keif-aldiafa-equipment-white-emblem-cups-stacked-gold-tray.webp",
    "width": 900,
    "height": 1200,
    "kb": 37,
    "alt": "فناجين قهوة بيضاء بالشعار السعودي الذهبي مرصوصة على صينية ذهبية من تجهيزات كيف الضيافة",
    "title": "فناجين الشعار السعودي على الصينية — تجهيزات كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — فناجين بيضاء بالشعار السعودي على صينية ذهبية",
    "place": "تجهيز",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 211,
    "tier": 4,
    "file": "keif-aldiafa-equipment-white-gold-porcelain-coffee-cups.webp",
    "width": 1080,
    "height": 1080,
    "kb": 48,
    "alt": "فناجيل قهوة بشعار السعودية الذهبي من تجهيزات الضيافة لدى كيف الضيافة — صورة كتالوج",
    "title": "فناجيل قهوة بشعار السعودية الذهبي — تجهيزات كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — فناجيل قهوة بشعار السعودية الذهبي",
    "place": "استوديو",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 212,
    "tier": 4,
    "file": "keif-aldiafa-equipment-white-porcelain-cup-saucer-k-logo-catalog.webp",
    "width": 1000,
    "height": 1000,
    "kb": 13,
    "alt": "كوب وصحن بورسلين أبيض مع شعار K الذهبي — صورة كتالوج من تجهيزات كيف الضيافة",
    "title": "كوب البورسلين الأبيض — كتالوج تجهيزات كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معدات — كوب بورسلين أبيض بشعار K",
    "place": "استوديو",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 213,
    "tier": 4,
    "file": "keif-aldiafa-offering-assorted-stuffed-dates-on-trays.webp",
    "width": 478,
    "height": 823,
    "kb": 86,
    "alt": "صواني تمور محشوة متنوعة من كيف الضيافة على طاولة فعالية",
    "title": "تمور محشوة على الصواني — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "تمور محشوة — صواني",
    "place": "طاولة فعالية",
    "pages": [
      "/offerings",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 214,
    "tier": 4,
    "file": "keif-aldiafa-offering-baklava-silver-trays-fruit-platters-gold-stands-1.webp",
    "width": 1200,
    "height": 800,
    "kb": 140,
    "alt": "بوفيه من كيف الضيافة ببقلاوة بالفستق على صواني فضية وصواني فاكهة على ستاندات ذهبية مزخرفة",
    "title": "بوفيه البقلاوة والفاكهة — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "بقلاوة وفاكهة",
    "place": "قاعة",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 215,
    "tier": 4,
    "file": "keif-aldiafa-offering-baklava-silver-trays-fruit-platters-gold-stands-2.webp",
    "width": 1200,
    "height": 801,
    "kb": 135,
    "alt": "بوفيه البقلاوة والفاكهة من كيف الضيافة — نسخة ثانية",
    "title": "بوفيه البقلاوة — 2",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "بقلاوة وفاكهة",
    "place": "قاعة",
    "pages": [],
    "publish": "yes"
  },
  {
    "id": 216,
    "tier": 4,
    "file": "keif-aldiafa-offering-bedouin-tent-majlis-sadu-cushions-outdoor-turf-stage.webp",
    "width": 1200,
    "height": 675,
    "kb": 164,
    "alt": "مجلس تقليدي من كيف الضيافة على منصة عشب: بيت شعر مقلم ووسائد سدو ودلال ومبخرة نحاسية طويلة",
    "title": "مجلس بيت الشعر — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "مجلس خيمة بيت شعر",
    "place": "فناء خارجي",
    "pages": [
      "/offerings",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 217,
    "tier": 4,
    "file": "keif-aldiafa-offering-brass-coffee-urn-and-cups-table-setup.webp",
    "width": 1200,
    "height": 675,
    "kb": 86,
    "alt": "ركن قهوة من كيف الضيافة بدلة نحاسية على ستاند وفناجين في قاعة فعاليات",
    "title": "ركن القهوة بالدلة النحاسية — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "ركن قهوة — دلة على ستاند",
    "place": "قاعة فعاليات",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 218,
    "tier": 4,
    "file": "keif-aldiafa-offering-buffet-dessert-display-glasses-cakes.webp",
    "width": 1200,
    "height": 540,
    "kb": 112,
    "alt": "بوفيه حلا من كيف الضيافة بأكواب حلويات وكيك في قاعة فندق",
    "title": "بوفيه الحلا في الفندق — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "بوفيه حلا — فندق",
    "place": "بوفيه فندق",
    "pages": [
      "/offerings",
      "/diyafa-a3ras-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 219,
    "tier": 4,
    "file": "keif-aldiafa-offering-caramel-pistachio-sweets-platter.webp",
    "width": 835,
    "height": 1000,
    "kb": 81,
    "alt": "صينية تمور مزينة بالكراميل والفستق من كيف الضيافة",
    "title": "تمور بالكراميل والفستق — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "تمور مزينة — صينية",
    "place": "",
    "pages": [
      "/offerings",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 220,
    "tier": 4,
    "file": "keif-aldiafa-offering-corporate-buffet-tiered-wooden-stands-mini-pastries-flowers.webp",
    "width": 900,
    "height": 1200,
    "kb": 160,
    "alt": "بوفيه من كيف الضيافة بستاندات خشبية متدرجة عليها معجنات صغيرة وساندويتشات وورد أبيض",
    "title": "بوفيه المعجنات — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "بوفيه معجنات — ستاندات خشبية",
    "place": "بهو شركة",
    "pages": [
      "/offerings",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 221,
    "tier": 4,
    "file": "keif-aldiafa-offering-date-palm-food-display.webp",
    "width": 666,
    "height": 1000,
    "kb": 55,
    "alt": "نخلة تمور للتقديم من كيف الضيافة — تمور مرصوصة على شكل جذع نخلة",
    "title": "نخلة التمور — كيف الضيافة — 1",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "نخلة تمور — تقديم",
    "place": "استوديو",
    "pages": [
      "/offerings",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 222,
    "tier": 4,
    "file": "keif-aldiafa-offering-date-trunk-palm-food-display.webp",
    "width": 666,
    "height": 1000,
    "kb": 56,
    "alt": "نخلة تمور للتقديم من كيف الضيافة — لقطة ثانية",
    "title": "نخلة التمور — كيف الضيافة — 2",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "نخلة تمور — تقديم (مكررة)",
    "place": "استوديو",
    "pages": [
      "/offerings",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 223,
    "tier": 4,
    "file": "keif-aldiafa-offering-dates-sweets-woven-trays-golden-incense-burner-dallah.webp",
    "width": 900,
    "height": 1200,
    "kb": 165,
    "alt": "صواني خوص بالتمور والحلا الملفوف مع مبخرة ذهبية ودلة على طاولة حمراء في ضيافة كيف الضيافة",
    "title": "ركن التمور والبخور — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "تمور وحلا وبخور",
    "place": "فعالية خارجية",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 224,
    "tier": 4,
    "file": "keif-aldiafa-offering-decorative-palm-sweets-tray-arrangement.webp",
    "width": 1200,
    "height": 1200,
    "kb": 110,
    "alt": "صينية تمور وحلويات بتشكيل نخلة من كيف الضيافة",
    "title": "صينية التمور بشكل النخلة — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "صينية تمور بنخلة — تقديم",
    "place": "استوديو",
    "pages": [
      "/offerings",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 225,
    "tier": 4,
    "file": "keif-aldiafa-offering-dessert-appetizer-buffet-creme-caramel-petit-fours-fruit-skewers.webp",
    "width": 1200,
    "height": 675,
    "kb": 134,
    "alt": "بوفيه من كيف الضيافة بكريم كراميل وبيتي فور وأسياخ فاكهة وخضار في غرفة اجتماعات",
    "title": "بوفيه الاجتماعات — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "بوفيه حلا ومقبلات",
    "place": "غرفة اجتماعات",
    "pages": [
      "/offerings",
      "/coffee-break-sharikat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 226,
    "tier": 4,
    "file": "keif-aldiafa-offering-dessert-buffet-parfait-glasses-cake-slices-oriental-sweets.webp",
    "width": 1200,
    "height": 540,
    "kb": 127,
    "alt": "بوفيه حلا من كيف الضيافة بأكواب بارفيه وقطع كيك وحلويات شرقية على أطباق مربعة",
    "title": "بوفيه الحلا — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "بوفيه حلا — كيك وبارفيه",
    "place": "قاعة فندق",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 227,
    "tier": 4,
    "file": "keif-aldiafa-offering-dessert-buffet-table-with-chalkboard.webp",
    "width": 516,
    "height": 1200,
    "kb": 107,
    "alt": "طاولة بوفيه حلا وفاكهة من كيف الضيافة مع لوح أسود في قاعة فندق",
    "title": "بوفيه الحلا والفاكهة — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "بوفيه حلا وفاكهة — فندق",
    "place": "قاعة فندق",
    "pages": [
      "/offerings",
      "/diyafa-a3ras-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 228,
    "tier": 4,
    "file": "keif-aldiafa-offering-dessert-buffet-table-with-cups-and-pastries.webp",
    "width": 1200,
    "height": 900,
    "kb": 114,
    "alt": "طاولة بوفيه حلا شرقي بأكواب ومعجنات من كيف الضيافة في قاعة فندق",
    "title": "بوفيه الحلا الشرقي — كيف الضيافة — 1",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "بوفيه حلا شرقي — فندق",
    "place": "قاعة فندق",
    "pages": [
      "/offerings",
      "/diyafa-a3ras-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 229,
    "tier": 4,
    "file": "keif-aldiafa-offering-dessert-buffet-table-with-varied-pastries.webp",
    "width": 1165,
    "height": 960,
    "kb": 121,
    "alt": "طاولة بوفيه حلا شرقي متنوع من كيف الضيافة في قاعة فندق — لقطة ثانية",
    "title": "بوفيه الحلا الشرقي — كيف الضيافة — 2",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "بوفيه حلا شرقي — فندق (مكررة)",
    "place": "قاعة فندق",
    "pages": [
      "/offerings",
      "/diyafa-a3ras-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 230,
    "tier": 4,
    "file": "keif-aldiafa-offering-fatayer-manakish-sesame-croissants-platter.webp",
    "width": 720,
    "height": 900,
    "kb": 124,
    "alt": "صينية معجنات من كيف الضيافة بفطائر الجبن ومناقيش الزعتر وكرواسون السمسم",
    "title": "معجنات الصباح — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معجنات — فطائر ومناقيش",
    "place": "بوفيه",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 231,
    "tier": 4,
    "file": "keif-aldiafa-offering-glass-buffet-black-platters-canapes-croissants-top-view.webp",
    "width": 675,
    "height": 1200,
    "kb": 133,
    "alt": "طاولة بوفيه زجاجية من كيف الضيافة بصواني سوداء عليها ساندويتشات وكرواسون ومقبلات — لقطة علوية",
    "title": "بوفيه الكانابيه — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "بوفيه كانابيه — لقطة علوية",
    "place": "قاعة فعاليات",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 232,
    "tier": 4,
    "file": "keif-aldiafa-offering-glass-tea-on-decorative-tray.webp",
    "width": 1080,
    "height": 837,
    "kb": 90,
    "alt": "كوب شاي على صينية ذهبية مزينة باللآلئ من تقديم كيف الضيافة في فعالية",
    "title": "تقديم الشاي على الصينية الذهبية — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "تقديم شاي — صينية ذهبية بلآلئ",
    "place": "فعالية",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 233,
    "tier": 4,
    "file": "keif-aldiafa-offering-gold-accented-tea-glass-and-flower-on-ornate-tray.webp",
    "width": 900,
    "height": 1200,
    "kb": 61,
    "alt": "كوب شاي بزخارف ذهبية وزهرة على صينية مزخرفة من تقديم كيف الضيافة",
    "title": "تقديم الشاي بالزهرة — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "تقديم شاي — صينية ذهبية وزهرة",
    "place": "فعالية",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 234,
    "tier": 4,
    "file": "keif-aldiafa-offering-gold-platter-assorted-pistachio-baklava.webp",
    "width": 720,
    "height": 720,
    "kb": 98,
    "alt": "صينية ذهبية من بقلاوة الفستق المشكلة من كيف الضيافة في فعالية",
    "title": "بقلاوة بالفستق — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "بقلاوة بالفستق — صينية ذهبية",
    "place": "فعالية",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 235,
    "tier": 4,
    "file": "keif-aldiafa-offering-gold-tiered-stands-mini-pizzas-savory-bites-banquet.webp",
    "width": 900,
    "height": 1200,
    "kb": 149,
    "alt": "بوفيه من كيف الضيافة بستاندات ذهبية متدرجة عليها بيتزا صغيرة ومقبلات مالحة وصباب بالثوب الأبيض خلفها",
    "title": "بوفيه المقبلات الذهبي — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "بوفيه مالح — ستاندات ذهبية",
    "place": "قاعة",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 236,
    "tier": 4,
    "file": "keif-aldiafa-offering-gold-white-wrapped-chocolates-platter.webp",
    "width": 600,
    "height": 600,
    "kb": 19,
    "alt": "صينية شوكولاتة ملفوفة بالذهبي والأبيض من كيف الضيافة",
    "title": "شوكولاتة ملفوفة للضيافة — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "شوكولاتة ملفوفة ذهبي — صينية",
    "place": "استوديو",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 237,
    "tier": 4,
    "file": "keif-aldiafa-offering-golden-dallah-dates-finjan-glass-table-bokeh.webp",
    "width": 1200,
    "height": 801,
    "kb": 65,
    "alt": "دلة ذهبية وتمر وفنجان مزخرف على طاولة زجاجية بإضاءة ناعمة",
    "title": "القهوة العربية — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "دلة وتمر وفنجان",
    "place": "—",
    "pages": [
      "/offerings",
      "/"
    ],
    "publish": "yes"
  },
  {
    "id": 238,
    "tier": 4,
    "file": "keif-aldiafa-offering-golden-hospitality-counter-rooftop-night-string-lights.webp",
    "width": 900,
    "height": 1200,
    "kb": 166,
    "alt": "كاونتر ضيافة ذهبي مضيء من كيف الضيافة على سطح مفتوح ليلاً تحت أضواء متدلية",
    "title": "كاونتر الضيافة الذهبي الليلي — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "كاونتر ضيافة ذهبي مضيء — سطح ليلي",
    "place": "سطح مفتوح ليلاً",
    "pages": [
      "/offerings",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 239,
    "tier": 4,
    "file": "keif-aldiafa-offering-golden-tray-decorated-dates.webp",
    "width": 1000,
    "height": 1000,
    "kb": 63,
    "alt": "صينية ذهبية بتمور مزينة بالمكسرات من كيف الضيافة",
    "title": "تمور ومكسرات على صينية ذهبية — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "تمور ومكسرات — صينية ذهبية",
    "place": "استوديو",
    "pages": [
      "/offerings",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 240,
    "tier": 4,
    "file": "keif-aldiafa-offering-mini-sadu-tent-station-dallahs-clay-jar-incense-indoor.webp",
    "width": 1200,
    "height": 900,
    "kb": 156,
    "alt": "ركن خيمة صغيرة بقماش السدو الأحمر من كيف الضيافة عليها دلال نحاسية وزير ماء ومبخرة داخل قاعة فندق",
    "title": "ركن الخيمة التقليدية — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "ركن خيمة سدو — معدات تقليدية",
    "place": "قاعة فندق",
    "pages": [
      "/offerings",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 241,
    "tier": 4,
    "file": "keif-aldiafa-offering-ornate-gold-coffee-service-with-flowers.webp",
    "width": 280,
    "height": 316,
    "kb": 29,
    "alt": "طقم قهوة ذهبي مزخرف مع ورود من تجهيزات كيف الضيافة في فعالية",
    "title": "طقم القهوة الذهبي بالورود — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "طقم قهوة ذهبي مع ورود — تجهيز",
    "place": "فعالية",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 242,
    "tier": 4,
    "file": "keif-aldiafa-offering-oval-tray-dates-with-pistachios-and-coconut.webp",
    "width": 1024,
    "height": 1200,
    "kb": 73,
    "alt": "صينية بيضاوية بتمور بالفستق وجوز الهند من كيف الضيافة",
    "title": "تمور بالفستق وجوز الهند — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "تمور بالفستق وجوز الهند — صينية",
    "place": "استوديو",
    "pages": [
      "/offerings",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 243,
    "tier": 4,
    "file": "keif-aldiafa-offering-pyramid-of-dates-with-palm-leaves.webp",
    "width": 918,
    "height": 1200,
    "kb": 86,
    "alt": "نخلة تمور هرمية بسعف النخيل للتقديم من كيف الضيافة",
    "title": "هرم التمور بسعف النخيل — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "نخلة تمور هرمية — تقديم",
    "place": "استوديو",
    "pages": [
      "/offerings",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 244,
    "tier": 4,
    "file": "keif-aldiafa-offering-sadu-glass-buffet-booth-guests-self-serve-qahwaji.webp",
    "width": 1200,
    "height": 900,
    "kb": 151,
    "alt": "ركن بوفيه زجاجي بزخارف السدو من كيف الضيافة يخدم الضيوف أنفسهم وقهوجي بالدقلة داخله",
    "title": "ركن البوفيه بالسدو — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "ركن بوفيه زجاجي بالسدو",
    "place": "جناح داخلي مطل على نخيل",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 245,
    "tier": 4,
    "file": "keif-aldiafa-offering-small-sandwich-on-white-plate.webp",
    "width": 900,
    "height": 1200,
    "kb": 47,
    "alt": "ساندويتش باقيت بالتركي والجبن والخس من بوفيهات كيف الضيافة",
    "title": "ساندويتش باقيت تركي — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "بوفيه — ساندويتش باقيت تركي وجبن وخس",
    "place": "استوديو",
    "pages": [
      "/offerings",
      "/diyafa-a3ras-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 246,
    "tier": 4,
    "file": "keif-aldiafa-offering-square-arranged-clustered-box.webp",
    "width": 500,
    "height": 500,
    "kb": 18,
    "alt": "بوكس مربع من حلويات الفستق والمكسرات المرصوصة من كيف الضيافة",
    "title": "بوكس حلويات الفستق — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "بوفيه — صينية حلويات بالفستق (بوكس مربع)",
    "place": "استوديو",
    "pages": [
      "/offerings",
      "/diyafa-a3ras-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 247,
    "tier": 4,
    "file": "keif-aldiafa-offering-stuffed-dates-platter-pistachio-sesame-chocolate.webp",
    "width": 900,
    "height": 778,
    "kb": 147,
    "alt": "صينية تمور فاخرة محشوة ومغطاة بالفستق والسمسم والشوكولاتة مرتبة بدوائر من كيف الضيافة",
    "title": "تمور فاخرة — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "تمور فاخرة",
    "place": "—",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 248,
    "tier": 4,
    "file": "keif-aldiafa-offering-table-with-arabic-coffee-and-sweets.webp",
    "width": 1200,
    "height": 675,
    "kb": 119,
    "alt": "طاولة استقبال فاخرة من كيف الضيافة بمباخر ذهبية ودلة وحلويات وتمور وهدايا ملفوفة في قاعة",
    "title": "طاولة الاستقبال الفاخرة — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "طاولة استقبال فاخرة — مباخر ودلة وحلويات وتمور وهدايا",
    "place": "قاعة",
    "pages": [
      "/offerings",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 249,
    "tier": 4,
    "file": "keif-aldiafa-offering-three-glasses-dark-beverage.webp",
    "width": 900,
    "height": 1200,
    "kb": 73,
    "alt": "قهوة مثلجة بالفوم في أكواب زجاجية مع إبريق قهوة من مشروبات كيف الضيافة",
    "title": "القهوة المثلجة — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "مشروبات — قهوة مثلجة (آيس كوفي) بالفوم",
    "place": "استوديو",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 250,
    "tier": 4,
    "file": "keif-aldiafa-offering-three-mini-cheeseburgers-on-slate.webp",
    "width": 1100,
    "height": 1100,
    "kb": 82,
    "alt": "ثلاث قطع ميني برجر على لوح سليت مع صوص من بوفيهات كيف الضيافة",
    "title": "ميني برجر — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "بوفيه — ميني برجر على لوح سليت",
    "place": "استوديو",
    "pages": [
      "/offerings",
      "/diyafa-a3ras-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 251,
    "tier": 4,
    "file": "keif-aldiafa-offering-three-trays-dates-filled-with-nuts.webp",
    "width": 478,
    "height": 823,
    "kb": 91,
    "alt": "ثلاث صواني تمور فاخرة محشوة بالفستق والمكسرات وجوز الهند من كيف الضيافة",
    "title": "صواني التمور الفاخرة — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "تمور فاخرة محشوة بالمكسرات — ثلاث صواني",
    "place": "استوديو",
    "pages": [
      "/offerings",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 252,
    "tier": 4,
    "file": "keif-aldiafa-offering-traditional-sweets-dates-nuts-buffet-villa-courtyard.webp",
    "width": 900,
    "height": 1200,
    "kb": 154,
    "alt": "بوفيه تقليدي من كيف الضيافة بالحلا والمعجنات والتمور والمكسرات ومبخرة طويلة في فناء فيلا",
    "title": "بوفيه الحلا التقليدي — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "بوفيه حلا وتمور ومكسرات",
    "place": "فناء فيلا",
    "pages": [
      "/offerings",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 253,
    "tier": 4,
    "file": "keif-aldiafa-offering-tray-fried-triangular-pastries.webp",
    "width": 736,
    "height": 736,
    "kb": 50,
    "alt": "سمبوسة مقلية ذهبية على ورق زبدة من بوفيهات كيف الضيافة",
    "title": "سمبوسة مقلية — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "بوفيه — سمبوسة مقلية",
    "place": "استوديو",
    "pages": [
      "/offerings",
      "/diyafa-a3ras-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 254,
    "tier": 4,
    "file": "keif-aldiafa-offering-tray-of-sahlab-drinks-with-golden-glasses.webp",
    "width": 807,
    "height": 632,
    "kb": 74,
    "alt": "صينية ذهبية بستة أكواب سحلب بالقرفة وجوز الهند والفستق من مشروبات كيف الضيافة",
    "title": "السحلب على الصينية الذهبية — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "مشروبات — سحلب بالقرفة والفستق على صينية ذهبية",
    "place": "فعالية",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 255,
    "tier": 4,
    "file": "keif-aldiafa-offering-tray-with-four-cappuccinos.webp",
    "width": 1172,
    "height": 1200,
    "kb": 134,
    "alt": "صينية ذهبية بأربعة أكواب كابتشينو بالكاكاو من مشروبات كيف الضيافة",
    "title": "الكابتشينو على الصينية الذهبية — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "مشروبات — كابتشينو على صينية ذهبية",
    "place": "فعالية",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 256,
    "tier": 4,
    "file": "keif-aldiafa-offering-tuna-salad-sesame-roll-on-white-plate.webp",
    "width": 900,
    "height": 1200,
    "kb": 53,
    "alt": "باقيت سلطة تونة مغطى بالسمسم الأبيض والأسود من بوفيهات كيف الضيافة",
    "title": "باقيت التونة بالسمسم — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "بوفيه — باقيت سلطة تونة بالسمسم",
    "place": "استوديو",
    "pages": [
      "/offerings",
      "/diyafa-a3ras-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 257,
    "tier": 4,
    "file": "keif-aldiafa-offering-white-birthday-cake-with-red-hearts.webp",
    "width": 736,
    "height": 752,
    "kb": 37,
    "alt": "كيك عيد ميلاد أبيض بقلوب حمراء في علبة توصيل من كيف الضيافة",
    "title": "كيك عيد الميلاد — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "كيك عيد ميلاد أبيض بقلوب حمراء",
    "place": "استوديو",
    "pages": [
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 258,
    "tier": 5,
    "file": "keif-aldiafa-service-erksous-carrier-red-carpet-outdoor-night-4.webp",
    "width": 675,
    "height": 1200,
    "kb": 149,
    "alt": "سقّا العرقسوس من كيف الضيافة بالزي الشامي يحمل الموزع النحاسي المزخرف على سجادة حمراء في فعالية ليلية",
    "title": "سقّا العرقسوس — كيف الضيافة — 4",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "سقّا عرقسوس — زي شامي على سجادة حمراء",
    "place": "فعالية خارجية ليلاً",
    "pages": [
      "/services"
    ],
    "publish": "yes"
  },
  {
    "id": 259,
    "tier": 5,
    "file": "keif-aldiafa-service-erksous-juice-carrier-fez-heritage-street.webp",
    "width": 770,
    "height": 1200,
    "kb": 97,
    "alt": "سقّا عرقسوس بالطربوش الأحمر والصديري المطرز يحمل الموزع النحاسي في حارة تراثية",
    "title": "سقّا العرقسوس بالطربوش — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "سقّا عرقسوس بالطربوش",
    "place": "حارة تراثية",
    "pages": [
      "/services"
    ],
    "publish": "yes"
  },
  {
    "id": 260,
    "tier": 5,
    "file": "keif-aldiafa-service-erksous-juice-carrier-levantine-costume-night-2.webp",
    "width": 675,
    "height": 1200,
    "kb": 172,
    "alt": "سقّا العرقسوس بالزي الشامي من كيف الضيافة — لقطة ثانية",
    "title": "سقّا العرقسوس — 2",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "سقّا عرقسوس تراثي",
    "place": "فناء خارجي ليلي",
    "pages": [
      "/services"
    ],
    "publish": "yes"
  },
  {
    "id": 261,
    "tier": 5,
    "file": "keif-aldiafa-service-erksous-juice-carrier-pouring-cup-night-3.webp",
    "width": 800,
    "height": 1200,
    "kb": 167,
    "alt": "سقّا العرقسوس من كيف الضيافة يصب من الموزع النحاسي في كوب — لقطة حركة",
    "title": "سقّا العرقسوس يصب — 3",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "سقّا عرقسوس — يصب",
    "place": "فناء خارجي ليلي",
    "pages": [
      "/services"
    ],
    "publish": "yes"
  },
  {
    "id": 262,
    "tier": 5,
    "file": "keif-aldiafa-service-erksous-tamarind-juice-carrier-levantine-costume-night-1.webp",
    "width": 726,
    "height": 1200,
    "kb": 161,
    "alt": "سقّا بالزي الشامي التراثي يحمل موزع عرقسوس نحاسياً ذهبياً ضخماً على ظهره في فعالية ليلية من كيف الضيافة",
    "title": "سقّا العرقسوس التراثي — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "سقّا عرقسوس تراثي",
    "place": "فناء خارجي ليلي",
    "pages": [
      "/services",
      "/offerings"
    ],
    "publish": "yes"
  },
  {
    "id": 263,
    "tier": 5,
    "file": "keif-aldiafa-service-folk-drummers-performance-red-carpet-night.webp",
    "width": 1200,
    "height": 900,
    "kb": 172,
    "alt": "عازفو طبول بالزي الشعبي والصديري المطرز من فرقة كيف الضيافة يؤدون على سجاد أحمر ليلاً",
    "title": "عرض الطبول الشعبي — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "فرقة شعبية — طبول",
    "place": "فناء خارجي ليلي",
    "pages": [
      "/services"
    ],
    "publish": "yes"
  },
  {
    "id": 264,
    "tier": 5,
    "file": "keif-aldiafa-service-hand-henna-artist-applying-design.webp",
    "width": 828,
    "height": 817,
    "kb": 63,
    "alt": "فنانة حناء من كيف الضيافة ترسم نقشاً على يد ضيفة في فعالية",
    "title": "خدمة الحناء — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "حنّاء — لقطة قريبة لليد",
    "place": "فعالية",
    "pages": [
      "/services",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 265,
    "tier": 5,
    "file": "keif-aldiafa-service-hand-lifting-decorative-arabic-coffee-cup.webp",
    "width": 828,
    "height": 1073,
    "kb": 50,
    "alt": "فناجين قهوة مكتوب عليها أسماء الضيوف بالخط العربي من ركن الخطاط لدى كيف الضيافة",
    "title": "فناجين بأسماء الضيوف — خطاط كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "خط عربي — فناجين بأسماء الضيوف (فاطمة، وشم)",
    "place": "فعالية",
    "pages": [
      "/services",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 266,
    "tier": 5,
    "file": "keif-aldiafa-service-hands-drawing-on-cutout-shapes.webp",
    "width": 828,
    "height": 748,
    "kb": 53,
    "alt": "خطاط من كيف الضيافة يكتب بالخط العربي على قصّات خريطة السعودية في ركن الخطاط",
    "title": "ركن الخطاط — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "خط عربي — كتابة على قصّات خريطة السعودية",
    "place": "ركن خطاط",
    "pages": [
      "/services",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 267,
    "tier": 5,
    "file": "keif-aldiafa-service-henna-artist-station-outdoor-tent-night-1.webp",
    "width": 900,
    "height": 1200,
    "kb": 172,
    "alt": "فنانة حنّاء من كيف الضيافة بعباية وقبعة قش ترسم الحنّاء على يد ضيفة في خيمة تراثية ليلاً",
    "title": "ركن الحنّاء — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "خدمة حنّاء",
    "place": "خيمة خارجية ليلية",
    "pages": [
      "/services",
      "/qahwajiyat-sababat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 268,
    "tier": 5,
    "file": "keif-aldiafa-service-henna-artist-station-outdoor-tent-night-2-closeup.webp",
    "width": 900,
    "height": 1200,
    "kb": 164,
    "alt": "لقطة قريبة لفنانة الحنّاء من كيف الضيافة ترسم على يد ضيفة فوق طاولة زجاجية بدليل نقوش",
    "title": "ركن الحنّاء — 2",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "خدمة حنّاء — لقطة قريبة",
    "place": "خيمة خارجية ليلية",
    "pages": [
      "/qahwajiyat-sababat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 269,
    "tier": 5,
    "file": "keif-aldiafa-service-heritage-tent-sadu-majlis-indoor-hall-1.webp",
    "width": 1200,
    "height": 900,
    "kb": 157,
    "alt": "بيت شعر تراثي من كيف الضيافة بأقمشة السدو ودلال نحاسية داخل قاعة",
    "title": "الخيمة التراثية — كيف الضيافة — 1",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "بيت شعر تراثي — سدو ودلال",
    "place": "قاعة داخلية",
    "pages": [
      "/services",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 270,
    "tier": 5,
    "file": "keif-aldiafa-service-heritage-tent-sadu-majlis-outdoor-turf-2.webp",
    "width": 1200,
    "height": 675,
    "kb": 158,
    "alt": "بيت شعر تراثي من كيف الضيافة بأقمشة السدو الحمراء على أرضية عشبية خارجية",
    "title": "الخيمة التراثية — كيف الضيافة — 2",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "بيت شعر تراثي — على عشب خارجي",
    "place": "حديقة",
    "pages": [
      "/services"
    ],
    "publish": "yes"
  },
  {
    "id": 271,
    "tier": 5,
    "file": "keif-aldiafa-service-man-serving-traditional-cups-with-golden-stand.webp",
    "width": 880,
    "height": 1200,
    "kb": 136,
    "alt": "سقّا تراثي من كيف الضيافة يحمل شمعدان أكواب ذهبياً في حديقة فعالية",
    "title": "السقّا التراثي بشمعدان الأكواب — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "سقّا تراثي يحمل شمعدان أكواب ذهبي",
    "place": "حديقة فعالية",
    "pages": [
      "/services",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 272,
    "tier": 5,
    "file": "keif-aldiafa-service-men-using-mirror-photo-booth.webp",
    "width": 800,
    "height": 1200,
    "kb": 92,
    "alt": "ضيوف يستخدمون مرآة التصوير التفاعلية من كيف الضيافة في معرض",
    "title": "مرآة التصوير — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "مرآة تصوير — ضيوف يستخدمونها",
    "place": "معرض",
    "pages": [
      "/services",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 273,
    "tier": 5,
    "file": "keif-aldiafa-service-mirror-photo-booth-red-carpet-corporate-lobby.webp",
    "width": 900,
    "height": 1200,
    "kb": 146,
    "alt": "مرآة تصوير تفاعلية من كيف الضيافة مع طابعة فورية وسجادة حمراء وحواجز في بهو شركة",
    "title": "مرآة تصوير فورية — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "خدمات فنية — مرآة تصوير",
    "place": "بهو شركة",
    "pages": [
      "/services"
    ],
    "publish": "yes"
  },
  {
    "id": 274,
    "tier": 5,
    "file": "keif-aldiafa-service-saudi-ardah-folk-troupe-drums-flag-night-garden.webp",
    "width": 675,
    "height": 1200,
    "kb": 174,
    "alt": "فرقة العرضة الشعبية من كيف الضيافة: عشرة رجال بالزي التقليدي والخناجر والطبول مع علم السعودية في فعالية ليلية",
    "title": "الفرقة الشعبية — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "فرقة شعبية — عرضة سعودية",
    "place": "فناء خارجي ليلي",
    "pages": [
      "/services",
      "/diyafa-a3ras-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 275,
    "tier": 5,
    "file": "keif-aldiafa-service-street-beverage-vendor-dallah-traditional-fez.webp",
    "width": 880,
    "height": 1200,
    "kb": 97,
    "alt": "سقّا شعبي من كيف الضيافة بالطربوش يحمل موزع مشروبات نحاسياً على ظهره في شارع تراثي",
    "title": "السقّا الشعبي — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "سقّا شعبي بطربوش وموزّع مشروبات نحاسي على الظهر",
    "place": "شارع تراثي",
    "pages": [
      "/services",
      "/diyafa-munasabat-jeddah"
    ],
    "publish": "yes"
  },
  {
    "id": 276,
    "tier": 6,
    "file": "keif-aldiafa-generic-fruit-parfait-honey-stock.webp",
    "width": 867,
    "height": 1200,
    "kb": 60,
    "alt": "كوب بارفيه فاكهة بالكريمة وعسل يُصب من ملعقة خشبية",
    "title": "بارفيه",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "حلا — ستوك",
    "place": "استوديو",
    "pages": [],
    "publish": "decorative"
  },
  {
    "id": 277,
    "tier": 6,
    "file": "keif-aldiafa-generic-grapes-closeup-stock.webp",
    "width": 889,
    "height": 1200,
    "kb": 132,
    "alt": "عنب أخضر وأحمر بقطرات ماء لقطة علوية",
    "title": "عنب",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "فاكهة — ستوك",
    "place": "—",
    "pages": [],
    "publish": "decorative"
  },
  {
    "id": 278,
    "tier": 6,
    "file": "keif-aldiafa-generic-kiwi-slices-closeup-stock.webp",
    "width": 1200,
    "height": 799,
    "kb": 140,
    "alt": "شرائح كيوي خضراء لقطة قريبة",
    "title": "كيوي",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "فاكهة — ستوك",
    "place": "—",
    "pages": [],
    "publish": "decorative"
  },
  {
    "id": 279,
    "tier": 6,
    "file": "keif-aldiafa-generic-mixed-berries-red-bowl-stock.webp",
    "width": 889,
    "height": 1200,
    "kb": 177,
    "alt": "توت مشكل في وعاء أحمر مع نعناع",
    "title": "توت",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "فاكهة — ستوك",
    "place": "—",
    "pages": [],
    "publish": "decorative"
  },
  {
    "id": 280,
    "tier": 6,
    "file": "keif-aldiafa-generic-pineapple-chunks-bowl.webp",
    "width": 1200,
    "height": 1179,
    "kb": 142,
    "alt": "قطع أناناس طازج في وعاء أبيض",
    "title": "أناناس",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "فاكهة عامة",
    "place": "—",
    "pages": [
      "/offerings"
    ],
    "publish": "decorative"
  },
  {
    "id": 281,
    "tier": 6,
    "file": "keif-aldiafa-generic-social-banner-safraji-waiters-service-design.webp",
    "width": 1137,
    "height": 417,
    "kb": 48,
    "alt": "تصميم إعلاني لخدمات السفرجية من كيف الضيافة — ثلاثة سفرجية بالمرايل والحمالات",
    "title": "إعلان خدمات السفرجية — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "تصميم إعلاني — خدمات السفرجية",
    "place": "تصميم",
    "pages": [],
    "publish": "decorative"
  },
  {
    "id": 282,
    "tier": 6,
    "file": "keif-aldiafa-generic-social-banner-zamzam-saqya-service-design.webp",
    "width": 1200,
    "height": 513,
    "kb": 52,
    "alt": "تصميم إعلاني أزرق لخدمة سقيا زمزم من كيف الضيافة — «نسعد بتقديم أرقى وأفخر خدمات سقيا زمزم»",
    "title": "إعلان سقيا زمزم — كيف الضيافة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "تصميم إعلاني — سقيا زمزم (بانر أزرق)",
    "place": "تصميم",
    "pages": [],
    "publish": "decorative"
  },
  {
    "id": 283,
    "tier": 6,
    "file": "keif-aldiafa-generic-stock-assorted-canapes-on-slate-board.webp",
    "width": 1100,
    "height": 1100,
    "kb": 140,
    "alt": "كانابيه — صورة عامة زخرفية غير حصرية",
    "title": "كانابيه — صورة زخرفية",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "كانابيه — ستوك",
    "place": "",
    "pages": [
      "/offerings"
    ],
    "publish": "decorative"
  },
  {
    "id": 284,
    "tier": 6,
    "file": "keif-aldiafa-generic-stock-assorted-pastries-plates.webp",
    "width": 736,
    "height": 1103,
    "kb": 122,
    "alt": "معجنات — صورة عامة زخرفية غير حصرية",
    "title": "معجنات — صورة زخرفية",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معجنات — ستوك",
    "place": "",
    "pages": [
      "/offerings"
    ],
    "publish": "decorative"
  },
  {
    "id": 285,
    "tier": 6,
    "file": "keif-aldiafa-generic-stock-bowl-of-glossy-dates-on-white.webp",
    "width": 600,
    "height": 600,
    "kb": 28,
    "alt": "تمور — صورة عامة زخرفية غير حصرية",
    "title": "تمور — صورة زخرفية",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "تمور — ستوك",
    "place": "",
    "pages": [
      "/offerings"
    ],
    "publish": "decorative"
  },
  {
    "id": 286,
    "tier": 6,
    "file": "keif-aldiafa-generic-stock-bruschetta-slate-serving-with-olive-oil.webp",
    "width": 1100,
    "height": 1100,
    "kb": 129,
    "alt": "بروسكيتا — صورة عامة زخرفية غير حصرية",
    "title": "بروسكيتا — صورة زخرفية",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "بروسكيتا — ستوك",
    "place": "",
    "pages": [
      "/offerings"
    ],
    "publish": "decorative"
  },
  {
    "id": 287,
    "tier": 6,
    "file": "keif-aldiafa-generic-stock-cheese-sandwich-on-white-plate.webp",
    "width": 900,
    "height": 1200,
    "kb": 43,
    "alt": "ساندويتش — صورة عامة زخرفية غير حصرية",
    "title": "ساندويتش — صورة زخرفية",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "ساندويتش — ستوك",
    "place": "",
    "pages": [
      "/offerings"
    ],
    "publish": "decorative"
  },
  {
    "id": 288,
    "tier": 6,
    "file": "keif-aldiafa-generic-stock-chocolate-filled-croissants-on-plate.webp",
    "width": 736,
    "height": 920,
    "kb": 87,
    "alt": "كرواسون — صورة عامة زخرفية غير حصرية",
    "title": "كرواسون — صورة زخرفية",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "كرواسون — ستوك",
    "place": "",
    "pages": [
      "/offerings"
    ],
    "publish": "decorative"
  },
  {
    "id": 289,
    "tier": 6,
    "file": "keif-aldiafa-generic-stock-crispy-fried-bites-with-mustard-dip.webp",
    "width": 1100,
    "height": 1100,
    "kb": 117,
    "alt": "مقبلات مقلية — صورة عامة زخرفية غير حصرية",
    "title": "مقبلات مقلية — صورة زخرفية",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "مقبلات مقلية — ستوك",
    "place": "",
    "pages": [
      "/offerings"
    ],
    "publish": "decorative"
  },
  {
    "id": 290,
    "tier": 6,
    "file": "keif-aldiafa-generic-stock-dark-beverage-with-mint-lemon-and-brown-pods.webp",
    "width": 800,
    "height": 1035,
    "kb": 58,
    "alt": "مشروب تمر هندي — صورة عامة زخرفية غير حصرية",
    "title": "مشروب تمر هندي — صورة زخرفية",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "مشروب تمر هندي — ستوك",
    "place": "",
    "pages": [
      "/offerings"
    ],
    "publish": "decorative"
  },
  {
    "id": 291,
    "tier": 6,
    "file": "keif-aldiafa-generic-stock-dates-in-silver-dish.webp",
    "width": 1000,
    "height": 1000,
    "kb": 40,
    "alt": "تمور — صورة عامة زخرفية غير حصرية — لقطة 2",
    "title": "تمور — صورة زخرفية — 2",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "تمور — ستوك",
    "place": "",
    "pages": [
      "/offerings"
    ],
    "publish": "decorative"
  },
  {
    "id": 292,
    "tier": 6,
    "file": "keif-aldiafa-generic-stock-fried-cheese-croquettes-with-dipping-sauce.webp",
    "width": 1100,
    "height": 1100,
    "kb": 139,
    "alt": "كروكيت — صورة عامة زخرفية غير حصرية",
    "title": "كروكيت — صورة زخرفية",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "كروكيت — ستوك",
    "place": "",
    "pages": [
      "/offerings"
    ],
    "publish": "decorative"
  },
  {
    "id": 293,
    "tier": 6,
    "file": "keif-aldiafa-generic-stock-fruit-parfait-trio-glasses.webp",
    "width": 500,
    "height": 500,
    "kb": 20,
    "alt": "بارفيه — صورة عامة زخرفية غير حصرية",
    "title": "بارفيه — صورة زخرفية",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "بارفيه — ستوك",
    "place": "",
    "pages": [
      "/offerings"
    ],
    "publish": "decorative"
  },
  {
    "id": 294,
    "tier": 6,
    "file": "keif-aldiafa-generic-stock-fruit-topped-puff-pastries-on-stand.webp",
    "width": 575,
    "height": 653,
    "kb": 38,
    "alt": "معجنات فاكهة — صورة عامة زخرفية غير حصرية",
    "title": "معجنات فاكهة — صورة زخرفية",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "معجنات فاكهة — ستوك",
    "place": "",
    "pages": [
      "/offerings"
    ],
    "publish": "decorative"
  },
  {
    "id": 295,
    "tier": 6,
    "file": "keif-aldiafa-generic-stock-glass-of-red-drink-with-petals-and-straw.webp",
    "width": 828,
    "height": 683,
    "kb": 41,
    "alt": "كركديه — صورة عامة زخرفية غير حصرية",
    "title": "كركديه — صورة زخرفية",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "كركديه — ستوك",
    "place": "",
    "pages": [
      "/offerings"
    ],
    "publish": "decorative"
  },
  {
    "id": 296,
    "tier": 6,
    "file": "keif-aldiafa-generic-stock-halved-fig-and-whole-fig-on-table.webp",
    "width": 970,
    "height": 646,
    "kb": 50,
    "alt": "تين — صورة عامة زخرفية غير حصرية",
    "title": "تين — صورة زخرفية",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "تين — ستوك",
    "place": "",
    "pages": [
      "/offerings"
    ],
    "publish": "decorative"
  },
  {
    "id": 297,
    "tier": 6,
    "file": "keif-aldiafa-generic-stock-iced-coffee-glass-on-marble-table.webp",
    "width": 500,
    "height": 750,
    "kb": 31,
    "alt": "آيس كوفي — صورة عامة زخرفية غير حصرية",
    "title": "آيس كوفي — صورة زخرفية",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "آيس كوفي — ستوك",
    "place": "",
    "pages": [
      "/offerings"
    ],
    "publish": "decorative"
  },
  {
    "id": 298,
    "tier": 6,
    "file": "keif-aldiafa-generic-stock-kunafa-melted-cheese-on-fork.webp",
    "width": 735,
    "height": 1099,
    "kb": 56,
    "alt": "كنافة — صورة عامة زخرفية غير حصرية",
    "title": "كنافة — صورة زخرفية",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "كنافة — ستوك",
    "place": "",
    "pages": [
      "/offerings"
    ],
    "publish": "decorative"
  },
  {
    "id": 299,
    "tier": 6,
    "file": "keif-aldiafa-generic-stock-loaded-nachos-with-cheese-guacamole-sour-cream.webp",
    "width": 1100,
    "height": 1100,
    "kb": 139,
    "alt": "ناتشوز — صورة عامة زخرفية غير حصرية",
    "title": "ناتشوز — صورة زخرفية",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "ناتشوز — ستوك",
    "place": "",
    "pages": [
      "/offerings"
    ],
    "publish": "decorative"
  },
  {
    "id": 300,
    "tier": 6,
    "file": "keif-aldiafa-generic-stock-mini-flatbreads-with-various-toppings-on-board.webp",
    "width": 720,
    "height": 720,
    "kb": 59,
    "alt": "مناقيش — صورة عامة زخرفية غير حصرية",
    "title": "مناقيش — صورة زخرفية",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "مناقيش — ستوك",
    "place": "",
    "pages": [
      "/offerings"
    ],
    "publish": "decorative"
  },
  {
    "id": 301,
    "tier": 6,
    "file": "keif-aldiafa-generic-stock-mini-margherita-pizzas-on-slate.webp",
    "width": 1100,
    "height": 1100,
    "kb": 124,
    "alt": "بيتزا صغيرة — صورة عامة زخرفية غير حصرية",
    "title": "بيتزا صغيرة — صورة زخرفية",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "بيتزا صغيرة — ستوك",
    "place": "",
    "pages": [
      "/offerings"
    ],
    "publish": "decorative"
  },
  {
    "id": 302,
    "tier": 6,
    "file": "keif-aldiafa-generic-stock-mint-lime-mojito-bottle-poolside.webp",
    "width": 340,
    "height": 509,
    "kb": 23,
    "alt": "موهيتو — صورة عامة زخرفية غير حصرية",
    "title": "موهيتو — صورة زخرفية",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "موهيتو — ستوك",
    "place": "",
    "pages": [
      "/offerings"
    ],
    "publish": "decorative"
  },
  {
    "id": 303,
    "tier": 6,
    "file": "keif-aldiafa-generic-stock-mozzarella-sticks-on-slate-with-marinara.webp",
    "width": 1100,
    "height": 1100,
    "kb": 103,
    "alt": "موزاريلا ستيكس — صورة عامة زخرفية غير حصرية",
    "title": "موزاريلا ستيكس — صورة زخرفية",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "موزاريلا ستيكس — ستوك",
    "place": "",
    "pages": [
      "/offerings"
    ],
    "publish": "decorative"
  },
  {
    "id": 304,
    "tier": 6,
    "file": "keif-aldiafa-generic-stock-plate-of-spring-rolls-with-chili-sauce.webp",
    "width": 1100,
    "height": 1100,
    "kb": 93,
    "alt": "سبرنغ رول — صورة عامة زخرفية غير حصرية",
    "title": "سبرنغ رول — صورة زخرفية",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "سبرنغ رول — ستوك",
    "place": "",
    "pages": [
      "/offerings"
    ],
    "publish": "decorative"
  },
  {
    "id": 305,
    "tier": 6,
    "file": "keif-aldiafa-generic-stock-pomegranate-half-on-white.webp",
    "width": 969,
    "height": 1024,
    "kb": 91,
    "alt": "رمان — صورة عامة زخرفية غير حصرية",
    "title": "رمان — صورة زخرفية",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "رمان — ستوك",
    "place": "",
    "pages": [
      "/offerings"
    ],
    "publish": "decorative"
  },
  {
    "id": 306,
    "tier": 6,
    "file": "keif-aldiafa-generic-stock-potato-wedges-slate-dip.webp",
    "width": 1100,
    "height": 1100,
    "kb": 107,
    "alt": "بطاطس — صورة عامة زخرفية غير حصرية",
    "title": "بطاطس — صورة زخرفية",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "بطاطس — ستوك",
    "place": "",
    "pages": [
      "/offerings"
    ],
    "publish": "decorative"
  },
  {
    "id": 307,
    "tier": 6,
    "file": "keif-aldiafa-generic-stock-red-iced-drink-with-mint-garnish.webp",
    "width": 1024,
    "height": 768,
    "kb": 52,
    "alt": "كركديه مثلج — صورة عامة زخرفية غير حصرية",
    "title": "كركديه مثلج — صورة زخرفية",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "كركديه مثلج — ستوك",
    "place": "",
    "pages": [
      "/offerings"
    ],
    "publish": "decorative"
  },
  {
    "id": 308,
    "tier": 6,
    "file": "keif-aldiafa-generic-stock-ripe-mango-cubes-on-gray-surface.webp",
    "width": 1200,
    "height": 799,
    "kb": 53,
    "alt": "مانجو — صورة عامة زخرفية غير حصرية",
    "title": "مانجو — صورة زخرفية",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "مانجو — ستوك",
    "place": "",
    "pages": [
      "/offerings"
    ],
    "publish": "decorative"
  },
  {
    "id": 309,
    "tier": 6,
    "file": "keif-aldiafa-generic-stock-sandwich-cheese-lettuce-tomato-on-white-plate.webp",
    "width": 900,
    "height": 1200,
    "kb": 43,
    "alt": "ساندويتش — صورة عامة زخرفية غير حصرية — لقطة 2",
    "title": "ساندويتش — صورة زخرفية — 2",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "ساندويتش — ستوك",
    "place": "",
    "pages": [
      "/offerings"
    ],
    "publish": "decorative"
  },
  {
    "id": 310,
    "tier": 6,
    "file": "keif-aldiafa-generic-stock-sandwich-on-white-plate-on-stainless-counter.webp",
    "width": 900,
    "height": 1200,
    "kb": 47,
    "alt": "ساندويتش — صورة عامة زخرفية غير حصرية — لقطة 3",
    "title": "ساندويتش — صورة زخرفية — 3",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "ساندويتش — ستوك",
    "place": "",
    "pages": [
      "/offerings"
    ],
    "publish": "decorative"
  },
  {
    "id": 311,
    "tier": 6,
    "file": "keif-aldiafa-generic-stock-seeded-bun-sandwich-with-lettuce.webp",
    "width": 900,
    "height": 1200,
    "kb": 51,
    "alt": "ساندويتش — صورة عامة زخرفية غير حصرية — لقطة 4",
    "title": "ساندويتش — صورة زخرفية — 4",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "ساندويتش — ستوك",
    "place": "",
    "pages": [
      "/offerings"
    ],
    "publish": "decorative"
  },
  {
    "id": 312,
    "tier": 6,
    "file": "keif-aldiafa-generic-stock-sesame-bun-chicken-salad-sandwich-on-white-plate.webp",
    "width": 900,
    "height": 1200,
    "kb": 47,
    "alt": "ساندويتش — صورة عامة زخرفية غير حصرية — لقطة 5",
    "title": "ساندويتش — صورة زخرفية — 5",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "ساندويتش — ستوك",
    "place": "",
    "pages": [
      "/offerings"
    ],
    "publish": "decorative"
  },
  {
    "id": 313,
    "tier": 6,
    "file": "keif-aldiafa-generic-stock-sesame-coated-balls-with-cream-filling.webp",
    "width": 988,
    "height": 1000,
    "kb": 65,
    "alt": "كرات تمر بالسمسم — صورة عامة زخرفية غير حصرية",
    "title": "كرات تمر بالسمسم — صورة زخرفية",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "كرات تمر بالسمسم — ستوك",
    "place": "",
    "pages": [
      "/offerings"
    ],
    "publish": "decorative"
  },
  {
    "id": 314,
    "tier": 6,
    "file": "keif-aldiafa-generic-strawberries-closeup-stock.webp",
    "width": 1200,
    "height": 900,
    "kb": 175,
    "alt": "فراولة حمراء طازجة لقطة قريبة",
    "title": "فراولة",
    "entity": "",
    "entityEn": "",
    "sector": "",
    "service": "فاكهة — ستوك",
    "place": "—",
    "pages": [],
    "publish": "decorative"
  }
];
