/**
 * imageCatalog.ts — واجهة كتالوج الصور للسيو/الفهرسة/الـ schema.
 *
 * مصدر الحقيقة (المرحلة 1 — D118): `imageCatalog.data.ts` المولَّد من
 * `catalog.json` في مستودع MoTechSys/catalog-keif-aldiafa-photots عبر
 * `scripts/import-catalog.mjs`. لا مسح للمجلد ولا اشتقاق alt من اسم الملف
 * (كان يخالف D111: الوكيل المبرمج لا يسمّي الصور).
 *
 * الواجهة العامة (getAllImages / getImagesByPage / getImagesForPage / SITE_URL)
 * محفوظة كما هي كي تنتقل خرائط الصور والـ ImageGallery في كل الصفحات تلقائياً.
 *
 * قواعد Google المعتمدة (Search Central):
 *  - image sitemap: <image:loc> فقط (title/caption متوقفة 2022).
 *  - ImageObject: contentUrl + name + caption + width/height الحقيقية.
 *  - الزخرفي (publish=decorative) مستثنى من الخريطة والـ schema.
 */

import { SITE_URL } from "@/lib/site";
import { CATALOG, type CatalogRecord } from "@/lib/imageCatalog.data";
import { LOCAL_PAGES, INTENT_PAGES, localSlug } from "@/lib/localPages";

// إعادة تصدير للملفات التي تستورد SITE_URL من هنا (routes خرائط الموقع)
export { SITE_URL };
export type { CatalogRecord };

export interface CatalogImage {
  /** مسار من جذر الموقع: /images/catalog/<file> */
  src: string;
  /** رابط مطلق للخريطة والـ schema */
  url: string;
  /** alt حرفي من الكتالوج (D111) */
  alt: string;
  /** العنوان من الكتالوج → ImageObject.name */
  title: string;
  width: number;
  height: number;
  /** مستوى قوة الإثبات 1→6 (D110) — الترتيب الافتراضي */
  tier: number;
  /** الفئة القديمة (مجلد) — تُبقى للتوافق مع pickImages/cityImages: هنا = القطاع */
  category: string;
  /** الصفحة المضيفة الأولى الموجودة فعلاً في الموقع (لـ <loc> في الخريطة) */
  pageUrl: string;
  /** كل الصفحات التي يستهدفها الكتالوج، بما فيها غير المبنية بعدُ */
  pages: string[];
  decorative: boolean;
}

export const CATALOG_DIR = "/images/catalog";

/** المسارات الموجودة فعلاً في الموقع الآن — أي مسار خارجها يحتاط إلى /portfolio. */
const EXISTING_PAGES: ReadonlySet<string> = new Set([
  "/", "/services", "/offerings", "/portfolio", "/about", "/contact", "/locations", "/social", "/legal",
  ...LOCAL_PAGES.map((p) => `/${localSlug(p.service, p.city)}`),
  ...INTENT_PAGES.map((p) => `/${p.slug}`),
]);

/** صفحات المرحلة 7 (لم تُبنَ) تؤوي صورها مؤقتاً في /portfolio — الصور تُفهرَس من اليوم. */
const FALLBACK_PAGE = "/portfolio";

function hostPage(pages: string[]): string {
  return pages.find((p) => EXISTING_PAGES.has(p)) ?? FALLBACK_PAGE;
}

function toImage(r: CatalogRecord): CatalogImage {
  const src = `${CATALOG_DIR}/${r.file}`;
  return {
    src,
    url: `${SITE_URL}${src}`,
    alt: r.alt,
    title: r.title,
    width: r.width,
    height: r.height,
    tier: r.tier,
    category: r.sector,
    pageUrl: hostPage(r.pages),
    pages: r.pages,
    decorative: r.publish === "decorative",
  };
}

// الكتالوج مرتب مسبقاً tier↑ ثم id↑ (D112) — نحافظ على الترتيب.
const ALL: readonly CatalogImage[] = CATALOG.map(toImage);
const INDEXABLE: readonly CatalogImage[] = ALL.filter((i) => !i.decorative);

/** كل الصور القابلة للفهرسة (publish=yes) — 274. الزخرفي مستثنى. */
export function getAllImages(): CatalogImage[] {
  return [...INDEXABLE];
}

/** الصور الزخرفية (خلفيات) — للاستخدام البصري فقط، لا تدخل الخريطة. */
export function getDecorativeImages(): CatalogImage[] {
  return ALL.filter((i) => i.decorative);
}

/** صورة واحدة برقمها في الكتالوج (أي حالة نشر). */
export function getImageById(id: number): CatalogImage | undefined {
  const r = CATALOG.find((x) => x.id === id);
  return r ? toImage(r) : undefined;
}

/**
 * تجميع الصور حسب الصفحة المضيفة (للخريطة). صورة واحدة تظهر تحت صفحة واحدة
 * فقط (المضيفة) — لا تكرار في الخريطة.
 */
export function getImagesByPage(): Array<[string, CatalogImage[]]> {
  const map: Record<string, CatalogImage[]> = {};
  for (const img of INDEXABLE) (map[img.pageUrl] ||= []).push(img);
  return Object.keys(map).sort().map((pageUrl) => [pageUrl, map[pageUrl]]);
}

/**
 * الصور التي يستهدفها الكتالوج لصفحة معيّنة (للـ ImageGallery في الصفحة).
 * تشمل كل صورة تذكر الصفحة في `pages` (لا المضيفة فقط) — المستوى 1 أولاً.
 */
export function getImagesForPage(pageUrl: string): CatalogImage[] {
  return INDEXABLE.filter((i) => i.pages.includes(pageUrl));
}
