/* eslint-disable */
// ⚠️ ملف مولَّد آلياً — لا يُحرَّر يدوياً.
// المصدر: MoTechSys/catalog-keif-aldiafa-photots (logos/partners.json) · المولِّد: scripts/import-catalog.mjs
// D111: alt والعناوين منقولة حرفياً من الكتالوج.

export interface Partner {
  id: number;
  /** 1 حكومي → 5 يُراجع */
  priority: number;
  /** اسم الملف داخل public/images/partners/ */
  file: string;
  name: string;
  nameEn: string;
  sector: string;
  /** alt حرفي من الكتالوج (D111) */
  alt: string;
  width: number;
  height: number;
  /** false = «بعد المراجعة» — لا يُعرض */
  show: boolean;
}

/** كل الشعارات مرتبة بالأولوية ثم الرقم (49) */
export const ALL_PARTNERS: readonly Partner[] = [
  {
    "id": 1,
    "priority": 1,
    "file": "partner-ksau-hs.webp",
    "name": "جامعة الملك سعود بن عبدالعزيز للعلوم الصحية — كاساو",
    "nameEn": "King Saud bin Abdulaziz University for Health Sciences (KSAU-HS)",
    "sector": "حكومي — جامعة",
    "alt": "شعار جامعة الملك سعود بن عبدالعزيز للعلوم الصحية — كاساو — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 2,
    "priority": 1,
    "file": "partner-ministry-of-commerce.webp",
    "name": "وزارة التجارة · المركز السعودي للأعمال",
    "nameEn": "Ministry of Commerce · Saudi Business Center",
    "sector": "حكومي — وزارة",
    "alt": "شعار وزارة التجارة · المركز السعودي للأعمال — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 3,
    "priority": 1,
    "file": "partner-ministry-of-energy.webp",
    "name": "وزارة الطاقة",
    "nameEn": "Ministry of Energy",
    "sector": "حكومي — وزارة",
    "alt": "شعار وزارة الطاقة — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 4,
    "priority": 2,
    "file": "partner-al-ahli-fc.webp",
    "name": "النادي الأهلي السعودي",
    "nameEn": "Al Ahli Saudi FC",
    "sector": "رياضة",
    "alt": "شعار النادي الأهلي السعودي — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 5,
    "priority": 2,
    "file": "partner-binladin-international-holding.webp",
    "name": "مجموعة بن لادن الدولية القابضة BIHG",
    "nameEn": "Binladin International Holding Group",
    "sector": "مجموعات كبرى",
    "alt": "شعار مجموعة بن لادن الدولية القابضة BIHG — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 6,
    "priority": 2,
    "file": "partner-dallah-albaraka.webp",
    "name": "دلة البركة",
    "nameEn": "Dallah Albaraka",
    "sector": "مجموعات كبرى",
    "alt": "شعار دلة البركة — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 7,
    "priority": 2,
    "file": "partner-fuchs-ksa.webp",
    "name": "فوكس السعودية",
    "nameEn": "FUCHS KSA",
    "sector": "عالمي — زيوت",
    "alt": "شعار فوكس السعودية — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 8,
    "priority": 2,
    "file": "partner-olayan-group.webp",
    "name": "مجموعة العليان",
    "nameEn": "Olayan Group",
    "sector": "مجموعات كبرى",
    "alt": "شعار مجموعة العليان — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 9,
    "priority": 2,
    "file": "partner-saudi-binladin-group.webp",
    "name": "مجموعة بن لادن السعودية",
    "nameEn": "Saudi Binladin Group",
    "sector": "مجموعات كبرى — مقاولات",
    "alt": "شعار مجموعة بن لادن السعودية — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 10,
    "priority": 2,
    "file": "partner-schindler.webp",
    "name": "شندلر",
    "nameEn": "Schindler",
    "sector": "عالمي — مصاعد",
    "alt": "شعار شندلر — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 11,
    "priority": 2,
    "file": "partner-schneider-electric.webp",
    "name": "شنايدر إلكتريك",
    "nameEn": "Schneider Electric",
    "sector": "عالمي — صناعي",
    "alt": "شعار شنايدر إلكتريك — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 12,
    "priority": 2,
    "file": "partner-suzuki-najeeb-auto.webp",
    "name": "سوزوكي — نجيب أوتو",
    "nameEn": "Suzuki · Najeeb Auto",
    "sector": "سيارات",
    "alt": "شعار سوزوكي — نجيب أوتو — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 13,
    "priority": 2,
    "file": "partner-the-ritz-carlton.webp",
    "name": "ريتز كارلتون",
    "nameEn": "The Ritz-Carlton",
    "sector": "فنادق عالمية",
    "alt": "شعار ريتز كارلتون — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 14,
    "priority": 3,
    "file": "partner-ajmal-perfumes.webp",
    "name": "أجمل للعطور",
    "nameEn": "Ajmal Perfumes",
    "sector": "تجزئة — عطور",
    "alt": "شعار أجمل للعطور — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 15,
    "priority": 3,
    "file": "partner-al-afaq-insurance.webp",
    "name": "الآفاق لوساطة التأمين",
    "nameEn": "Al Afaq Insurance Brokers",
    "sector": "تأمين",
    "alt": "شعار الآفاق لوساطة التأمين — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 16,
    "priority": 3,
    "file": "partner-al-mousa-group.webp",
    "name": "مجموعة الموسى للمقاولات",
    "nameEn": "Al Mousa Group Contracting",
    "sector": "مقاولات",
    "alt": "شعار مجموعة الموسى للمقاولات — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 17,
    "priority": 3,
    "file": "partner-albait-alarabi-tents.webp",
    "name": "شركة الدرة العربية الفريدة للمعدات الطبية",
    "nameEn": "Al-Durra Al-Arabia Al-Farida Medical Equipment",
    "sector": "طبي",
    "alt": "شعار شركة الدرة العربية الفريدة للمعدات الطبية — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 18,
    "priority": 3,
    "file": "partner-al-guthmi-al-qushmi.webp",
    "name": "القثمي — الشركة العربية للمعدات الطبية",
    "nameEn": "Al-Guthmi",
    "sector": "طبي",
    "alt": "شعار القثمي — الشركة العربية للمعدات الطبية — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 19,
    "priority": 3,
    "file": "partner-benchmark-strategies.webp",
    "name": "بنشمارك للاستراتيجيات",
    "nameEn": "Benchmark Strategies",
    "sector": "استشارات",
    "alt": "شعار بنشمارك للاستراتيجيات — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 20,
    "priority": 3,
    "file": "partner-daam-broker.webp",
    "name": "دعم للوساطة التأمينية",
    "nameEn": "DAAM Broker Insurance",
    "sector": "تأمين",
    "alt": "شعار دعم للوساطة التأمينية — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 21,
    "priority": 3,
    "file": "partner-damanat.webp",
    "name": "ضمانات — الشركة السعودية لضمانات التمويل العقاري",
    "nameEn": "Damanat",
    "sector": "مالية",
    "alt": "شعار ضمانات — الشركة السعودية لضمانات التمويل العقاري — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 22,
    "priority": 3,
    "file": "partner-glamera.webp",
    "name": "غلاميرا",
    "nameEn": "Glamera",
    "sector": "تقنية — تجميل",
    "alt": "شعار غلاميرا — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 23,
    "priority": 3,
    "file": "partner-al-murtafiat-real-estate.webp",
    "name": "شركة المرتفعات الشاهقة العقارية",
    "nameEn": "High Rise Real Estate Company",
    "sector": "عقاري",
    "alt": "شعار شركة المرتفعات الشاهقة العقارية — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 24,
    "priority": 3,
    "file": "partner-milia-travel.webp",
    "name": "ميليا للسفر والسياحة",
    "nameEn": "Milia Travel & Tourism",
    "sector": "سفر",
    "alt": "شعار ميليا للسفر والسياحة — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 25,
    "priority": 3,
    "file": "partner-mokab.webp",
    "name": "مكعب",
    "nameEn": "Mokab",
    "sector": "تقنية",
    "alt": "شعار مكعب — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 26,
    "priority": 3,
    "file": "partner-my-clinic.webp",
    "name": "عيادتي — الرعاية الصحية عن بعد",
    "nameEn": "My Clinic · TeleMedicine",
    "sector": "صحي",
    "alt": "شعار عيادتي — الرعاية الصحية عن بعد — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 27,
    "priority": 3,
    "file": "partner-napco-national.webp",
    "name": "نابكو الوطنية",
    "nameEn": "Napco National",
    "sector": "صناعي — تغليف",
    "alt": "شعار نابكو الوطنية — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 28,
    "priority": 3,
    "file": "partner-saudi-emaar.webp",
    "name": "سعودي إعمار للمفروشات",
    "nameEn": "Saudi Emaar Furniture & Design",
    "sector": "مفروشات",
    "alt": "شعار سعودي إعمار للمفروشات — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 29,
    "priority": 3,
    "file": "partner-al-istisharyoon.webp",
    "name": "الاستشاريون لطب العيون TEC",
    "nameEn": "The Eye Consultants (TEC)",
    "sector": "طبي",
    "alt": "شعار الاستشاريون لطب العيون TEC — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 30,
    "priority": 3,
    "file": "partner-wsm-digital.webp",
    "name": "WSM للتحول الرقمي",
    "nameEn": "WSM Digitalization & Transformation",
    "sector": "تقنية",
    "alt": "شعار WSM للتحول الرقمي — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 31,
    "priority": 4,
    "file": "partner-360-live.webp",
    "name": "360 لايف",
    "nameEn": "360 LIVE",
    "sector": "فعاليات",
    "alt": "شعار 360 لايف — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 32,
    "priority": 4,
    "file": "partner-bahja-events.webp",
    "name": "بهجة للفعاليات",
    "nameEn": "Bahja Events",
    "sector": "فعاليات",
    "alt": "شعار بهجة للفعاليات — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 33,
    "priority": 4,
    "file": "partner-bahjat-alimtiyaz.webp",
    "name": "بهجة الامتياز",
    "nameEn": "Bahjat Al-Imtiaz",
    "sector": "فعاليات",
    "alt": "شعار بهجة الامتياز — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 34,
    "priority": 4,
    "file": "partner-emotion-group.webp",
    "name": "إيموشن جروب",
    "nameEn": "Emotion Group",
    "sector": "فعاليات",
    "alt": "شعار إيموشن جروب — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 35,
    "priority": 4,
    "file": "partner-footprint.webp",
    "name": "فوت برنت",
    "nameEn": "Footprint",
    "sector": "رحلات",
    "alt": "شعار فوت برنت — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 36,
    "priority": 4,
    "file": "partner-hamat-leading.webp",
    "name": "هامات — حاضنة الأعمال الرائدة",
    "nameEn": "Hamat Leading Business Incubator",
    "sector": "أعمال",
    "alt": "شعار هامات — حاضنة الأعمال الرائدة — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 37,
    "priority": 4,
    "file": "partner-life-scent.webp",
    "name": "لايف سنت",
    "nameEn": "Life Scent",
    "sector": "عطور",
    "alt": "شعار لايف سنت — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 38,
    "priority": 4,
    "file": "partner-munera-made.webp",
    "name": "منيرة العيسى — Munera Made",
    "nameEn": "Munera Made",
    "sector": "أزياء",
    "alt": "شعار منيرة العيسى — Munera Made — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 39,
    "priority": 4,
    "file": "partner-naqwa.webp",
    "name": "نقوا",
    "nameEn": "Naqwa",
    "sector": "أغذية",
    "alt": "شعار نقوا — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 40,
    "priority": 4,
    "file": "partner-ofoq-events.webp",
    "name": "مؤسسة أفق لتنظيم الفعاليات والمهرجانات",
    "nameEn": "Ofoq Events & Festivals",
    "sector": "فعاليات",
    "alt": "شعار مؤسسة أفق لتنظيم الفعاليات والمهرجانات — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 41,
    "priority": 4,
    "file": "partner-rscm-corporate-member.webp",
    "name": "RSCM — عضو الشركات",
    "nameEn": "RSCM Corporate Member",
    "sector": "جمعية أعمال",
    "alt": "شعار RSCM — عضو الشركات — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 42,
    "priority": 4,
    "file": "partner-seen-e-marketing.webp",
    "name": "سين للتسويق الإلكتروني",
    "nameEn": "Seen for E-Marketing",
    "sector": "تسويق",
    "alt": "شعار سين للتسويق الإلكتروني — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 43,
    "priority": 4,
    "file": "partner-sharq-jeddah-association.webp",
    "name": "جمعية شرق جدة — الترميدام",
    "nameEn": "Sharq Jeddah Association",
    "sector": "جمعية",
    "alt": "شعار جمعية شرق جدة — الترميدام — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 44,
    "priority": 4,
    "file": "partner-somer-door-handles.webp",
    "name": "سومر لمقابض الأبواب",
    "nameEn": "Somer Door Handles",
    "sector": "صناعي",
    "alt": "شعار سومر لمقابض الأبواب — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 45,
    "priority": 4,
    "file": "partner-stand-expo.webp",
    "name": "ستاند إكسبو",
    "nameEn": "Stand Expo",
    "sector": "معارض",
    "alt": "شعار ستاند إكسبو — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 46,
    "priority": 4,
    "file": "partner-tazweed.webp",
    "name": "تزويد للأعمال التجارية",
    "nameEn": "Tazweed",
    "sector": "تجاري",
    "alt": "شعار تزويد للأعمال التجارية — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": true
  },
  {
    "id": 47,
    "priority": 5,
    "file": "partner-a-h.webp",
    "name": "A·H",
    "nameEn": "A.H",
    "sector": "غير محدد القطاع",
    "alt": "شعار A·H — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": false
  },
  {
    "id": 48,
    "priority": 5,
    "file": "partner-rh-business.webp",
    "name": "RH",
    "nameEn": "RH Business",
    "sector": "غير محدد القطاع",
    "alt": "شعار RH — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": false
  },
  {
    "id": 49,
    "priority": 5,
    "file": "partner-w-real-estate.webp",
    "name": "W — find your dream",
    "nameEn": "W Real Estate",
    "sector": "عقاري",
    "alt": "شعار W — find your dream — من شركاء نجاح كيف الضيافة",
    "width": 400,
    "height": 400,
    "show": false
  }
];

/** الشعارات المعروضة فقط (يُعرض = نعم) */
export const PARTNERS: readonly Partner[] = ALL_PARTNERS.filter((p) => p.show);

export const partnerSrc = (p: Partner): string => `/images/partners/${p.file}`;
