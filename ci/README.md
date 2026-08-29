# تفعيل بوابة الجودة (GitHub Actions)

ملف `quality.yml` جاهز لكن توكن GitHub App المتصل لا يملك صلاحية `workflows`
فلا يستطيع الدفع مباشرة إلى `.github/workflows/`.

## التفعيل (30 ثانية — مرة واحدة):

1. افتح المستودع على GitHub → زر **Add file → Create new file**
2. اكتب اسم الملف: `.github/workflows/quality.yml`
3. الصق محتوى `ci/quality.yml` كاملاً
4. **Commit** إلى فرع `main`

بعدها سيعمل الفحص تلقائياً على كل push وكل Pull Request:
typecheck → lint → build → فاحص السيو → فاحص التشابه → فاحص الأصول
(+ Lighthouse CI بوضع مراقبة).

> ملاحظة: الفواحص نفسها تعمل محلياً الآن دون انتظار التفعيل:
> `npm run guard`
