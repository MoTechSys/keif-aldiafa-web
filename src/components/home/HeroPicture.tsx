import { getImageProps } from "next/image";
import type { CatalogImage } from "@/lib/imageCatalog";

/**
 * HeroPicture — خلفية الهيرو بتوجيه فني (النموذج v6.9): صورة عمودية على الجوال
 * وعريضة من 900px عبر <picture>/<source media>. next/image لا يدعم <picture>،
 * لذا نأخذ srcset المحسّن من getImageProps ونكتب <img> خاماً هنا فقط
 * (استثناء موثّق في check-assets CH5). alt = alt الكتالوج حرفياً (D111/CH9)
 * والحاوية aria-hidden في النموذج فلا تُقرأ مرتين.
 * preload حسب المقاس: React يرفع <link rel=preload media> إلى <head>.
 */
export default function HeroPicture({ mobile, desktop }: { mobile: CatalogImage; desktop?: CatalogImage }) {
  const common = { sizes: "100vw", quality: 70, priority: true } as const;
  const { props: m } = getImageProps({ ...common, alt: mobile.alt, src: mobile.src, width: mobile.width, height: mobile.height });
  // صورة واحدة لكل المقاسات (الصفحات المحلية) → لا <source> ولا preload ثانٍ
  const dsk = desktop && desktop.src !== mobile.src ? desktop : null;
  const d = dsk ? getImageProps({ ...common, alt: dsk.alt, src: dsk.src, width: dsk.width, height: dsk.height }).props : null;
  return (
    <>
      {d ? (
        <>
          <link rel="preload" as="image" imageSrcSet={m.srcSet} imageSizes="100vw" media="(max-width:899px)" fetchPriority="high" />
          <link rel="preload" as="image" imageSrcSet={d.srcSet} imageSizes="100vw" media="(min-width:900px)" fetchPriority="high" />
        </>
      ) : (
        <link rel="preload" as="image" imageSrcSet={m.srcSet} imageSizes="100vw" fetchPriority="high" />
      )}
      <picture>
        {d && dsk && <source media="(min-width:900px)" srcSet={d.srcSet} sizes={d.sizes} width={dsk.width} height={dsk.height} />}
        {/* eslint-disable-next-line @next/next/no-img-element -- <picture> بتوجيه فني؛ srcset من getImageProps */}
        <img {...m} alt={mobile.alt} decoding="async" />
      </picture>
    </>
  );
}
