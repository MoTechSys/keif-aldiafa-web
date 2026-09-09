import Image from "next/image";
import type { CatalogImage } from "@/lib/imageCatalog";

/**
 * CatalogImg — صورة كتالوج عبر next/image (srcset/AVIF/lazy) مع عقد المعرض:
 *   alt      = alt الكتالوج حرفياً (D111 · يفحصه CH9)
 *   data-cap = عنوان الكتالوج (title) — السطر الأول في المعرض
 *   data-sub = سطر ثانٍ اختياري (خدمة الكتالوج أو وصف القسم من النموذج)
 * تُستخدم داخل <figure data-g> أو <a data-g> — Lightbox يقرأها من DOM.
 */
export default function CatalogImg({
  img,
  sizes,
  sub,
  cap,
  priority = false,
  className,
}: {
  img: CatalogImage;
  sizes: string;
  /** السطر الثاني في المعرض (افتراضي: بلا) */
  sub?: string;
  /** يستبدل عنوان الكتالوج في المعرض (يُستخدم حين يريد النموذج اسم الفئة كعنوان) */
  cap?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={img.src}
      alt={img.alt}
      width={img.width}
      height={img.height}
      sizes={sizes}
      priority={priority}
      loading={priority ? undefined : "lazy"}
      quality={72}
      className={className}
      data-cap={cap ?? img.title}
      data-sub={sub}
    />
  );
}
