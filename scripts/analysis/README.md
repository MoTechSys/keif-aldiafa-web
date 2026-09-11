# scripts/analysis — سكربتات التحليل الثلاثي (2026-09-11)

تقرأ HTML المبني في `.next/server/app/**/*.html` (بعد `npm run build`) + `src/lib/imageCatalog.data.ts` + `public/images/catalog/`.
مخرجاتها هي أرقام `docs/reports/2026-09-11-structure-images-content-deep-analysis.md`. Python 3 فقط، بلا تبعيات.

```bash
npm run build
python3 scripts/analysis/structure.py   # روابط داخلية · عمق النقر · عناوين · breadcrumbs · أقسام
python3 scripts/analysis/images.py      # تغطية الكتالوج · إعادة الاستخدام · مستهدف/معروض · تطابق الشقيقات · alt · أحجام
python3 scripts/analysis/content.py     # كلمات · title/desc · تكرار مطبَّع · FAQ · أرقام/ادّعاءات · نظافة النص
```
ملاحظة: تطابق الصور بين الشقيقات يُقاس بشكل أدقّ على الصور **المتغيّرة** فقط (الثابت 21–22 صورة من القالب) — انظر D152.
