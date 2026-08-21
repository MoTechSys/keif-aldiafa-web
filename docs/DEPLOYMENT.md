# النشر

## المنصّة

**Vercel** — المستودع مربوط بنشرٍ حيّ. `main` هو فرع الإنتاج.

---

## ⚠️ قبل أول نشر — ثلاث نقاط لازم تُحلّ

### ١. روابط الحسابات مكتوبة بالتخمين 🔴

في `src/app/social/SocialClient.tsx`:

```
instagram.com/keifaldiafa
tiktok.com/@keifaldiafa
snapchat.com/add/keifaldiafa
x.com/keifaldiafa
facebook.com/keifaldiafa
```

كلها مُستنبَطة من نمط الاسم **ولم يُؤكّدها صاحب المشروع**.

**الخطر:** رابط خاطئ = العميل يضغط أو يمسح الباركود فتُفتح صفحة «غير موجود». وهذا **يضرّ الثقة أكثر من غياب الصفحة أصلاً** — لأنه يوحي بالإهمال في اللحظة التي نطلب فيها الثقة.

**المطلوب:**
- [ ] تأكيد كل معرّف
- [ ] **حذف بطاقة أي منصّة بلا حساب** — بطاقة فاضية أسوأ من غيابها
- [ ] تحديث `sameAs` في `src/lib/schema.ts` (سطر ٣٤ و١٠٥) بالمؤكَّد **فقط**

### ٢. الباركود لا يعمل قبل النشر 🟡
يشير إلى `keifaldiafa.com/social`. **طبيعي** أن لا يعمل قبل أن تصير الصفحة حيّة.

**لكن: لا تطبعه على كرت أو لوحة أو رول-أب قبل التأكّد** — المطبوع لا يُعدَّل.

### ٣. بقايا خطّ ودَين تقني 🟢
لا تمنع النشر: `.lx-stat b` على Cairo، `.lx-price` ميتة، خمسة مكوّنات يتيمة. انظر [ROADMAP.md](ROADMAP.md).

---

## قائمة الفحص قبل النشر

```bash
# ١. البناء والأنواع
npm run build && npx tsc --noEmit

# ٢. القياس على الهاتف
python3 research/scripts/shoot_mobile.py sababin-qahwa-jeddah L
python3 research/scripts/shoot_mobile.py social S
```

**المعايير:**
- [ ] البناء ينجح · `tsc` نظيف
- [ ] `docW = 390` — لا تمرير أفقي
- [ ] `broken = []` — لا صورة مكسورة
- [ ] `price = false` — على **كل** صفحة
- [ ] **قرأتُ الشرائح بعيني** ولا تصادم ولا صورة ناقصة
- [ ] الباركود **مُفكّ برمجياً** من الخدمة، والصيغة PNG لا WebP
- [ ] معرّفات الحسابات **مؤكّدة**

---

## بعد النشر — إلزامي

```bash
# الباركود من الإنتاج
curl -s "https://keifaldiafa.com/images/brand/qr-keif-aldiafa.png" -o /tmp/qp.png
python3 -c "
from pyzbar.pyzbar import decode; from PIL import Image
im=Image.open('/tmp/qp.png'); print(im.format, im.size)
print([d.data.decode() for d in decode(im.convert('RGB'))] or 'FAIL')"
```

- [ ] الصيغة **PNG** والفكّ يُعيد الرابط
- [ ] **امسح الباركود بهاتف حقيقي** — لا بمكتبة فقط
- [ ] اضغط كل بطاقة منصّة وتأكّد أن الحساب يُفتح
- [ ] `/sitemap.xml` و`/robots.txt` يستجيبان
- [ ] جرّب زرّ واتساب وزرّ الاتصال من هاتف حقيقي
- [ ] افتح ٣ صفحات فرعية من مدن مختلفة على هاتف

---

## بيئة الاختبار المعزولة

```bash
pm2 restart keif --update-env
pm2 logs keif --nostream
```

**بعد أي تغيير على الصور:**
```bash
rm -rf .next/cache/images && npm run build
```
وإلّا خدم Next نسخاً مُحسَّنة قديمة — وهذا يُخفي نجاح تغييرك أو فشله.

---

## قاعدة الفرع

`main` هو الإنتاج. أي عمل غير مكتمل يبقى في فرع منفصل — لأن الدفع إلى `main` يعني **نشراً حيّاً**، وصفحة نصف مكتملة على موقعٍ يبيع الفخامة تُكلّف عملاء.
</content>
