#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
wm3.py — الإصدار الثالث والنهائي للعلامة المائية.

سجلّ العطب (كل نتيجة مفحوصة بالتكبير 2x على زاوية اللصق، لا بالتخمين):

  الإصدار ١ — الشعار بألوانه الأصلية بشفافية 0.60:
      فوق الرخام الفاتح ذاب الكحلي (إضاءة 34 تخالط 230 ⇒ ~150 رمادي)
      وانقطع النص فظهر «KEI…LDIAFA». علامة غير مقروءة = لا تمنع سرقة.

  الإصدار ٢ — صياغة أحادية اللون صلبة بحدّ مضاد:
      النص صار مقروءاً تماماً ✔ لكن استخدام قناة الشفافية كصياغة جعل
      البيضة والقهوجي كتلة واحدة مصمتة ⇒ اختفى القهوجي والدلّة، وبقيت
      بقعة بيضاوية فارغة. أي: أصلحنا القراءة وقتلنا الهوية.

  الإصدار ٤ — العطب الذي كشفه التكبير هذه الجولة:
      الإصدار ٣ نجا من الذوبان لكنّه صنع عطباً معاكساً: شفافية 0.86 مع
      الألوان الأصلية = علامة **صلبة تحجب المحتوى**. على صورة الكانابيه
      جلست البيضة الكحلية الثقيلة فوق الكرواسون فأخفته، و«كيف الضيافة»
      تحتها صارت شبه مطموسة في الأزرق. أي: صارت العلامة تُتلف الصورة
      بدل أن تحميها — وهذا نقيض الفخامة.
      العلاج: الشعار يُصاغ **أحادي اللون بذهب الصفحة نفسه** (#D8A877)
      بشفافية 0.52 — فيبقى القهوجي والدلّة مرئيَّي التفاصيل (الصياغة
      تحتفظ بتدرّج قناة الشفافية لا تسحقه كما فعل الإصدار ٢)، ويصير
      اللون منتمياً لطبقة الصفحة لا غريباً عنها. والهالة المضادة تبقى
      هي حاملة التباين، فالقراءة لا تعتمد على صلابة الشعار.

  الإصدار ٥ — العطب الذي كشفه قياس الشعار نفسه:
      الإصدار ٤ سقط في عطب الإصدار ٢ من باب آخر: التكبير أظهر **بيضة
      رمادية مصمتة بلا قهوجي ولا دلّة**. والسبب قياسٌ للملف الأصلي:
      قناة الشفافية شبه ثنائية (٨٠٦ ألف بكسل بصفر مقابل ٢٣٤ ألف بكسل
      فوق ٢٢٤)، أي أنها تحمل **الصورة الظاهرية للبيضة لا تفاصيلها**؛
      أما التفاصيل فتعيش في تضاد اللون (انحراف الإضاءة ٦٧٫٧ داخل
      الجسم، و٤٧٪ منه حبر كحلي عند إضاءة ٣٦ مقابل رمليّ عند ١٧٧).
      فصبغُه بلون واحد — أي إلغاء تضاد اللون — يمحو التفاصيل حتماً،
      ولو بقيت الشفافية سليمة. فرضيّة الإصدار ٤ كانت خاطئة من أصلها.
      العلاج: **نقش محفور لا لصق جسم**. تُبنى الشفافية الجديدة من
      دكانة الحبر نفسه: الكحلي يصبح مصمتاً، والرمليّ يصبح شفافاً
      تماماً. فيبقى خط الشماغ والدلّة والفنجان والحروف كخطوط ذهبية،
      ويصير جوف البيضة نافذةً تُرى الصورة من خلالها — فلا تُحجب
      الكرواسون ولا الطبق. والحلقة البيضاوية الخارجية (وهي حبر كحلي)
      تبقى كإطار ذهبي رقيق: علامة تُؤطّر لا كتلة تُغطّي.

  الإصدار ٣ — الجمع بين مكسب الاثنين:
      • الألوان الأصلية محفوظة ⇒ القهوجي والدلّة والفنجان تبقى ظاهرة.
      • شفافية عالية 0.86 ⇒ لا مخالطة تذيب الكحلي.
      • هالة مضادة الإضاءة (contra-halo): تُقاس إضاءة منطقة اللصق فعلياً،
        فإن كانت فاتحة تُرسم هالة داكنة حول الشعار، وإن كانت داكنة تُرسم
        هالة كريمية. الهالة هي ما يوفّر التباين — لا لون الشعار.
      • نسخة ذهبية اختيارية للنصّ فقط فوق الخلفيات الداكنة جداً
        (إضاءة < 70) حيث الكحلي لا يُنقذه أي هالة.
      • الحجم 15% من الضلع الأقصر، والهامش 4.2%.
"""
from PIL import Image, ImageFilter, ImageStat
import os, json

ROOT = "/home/user/keif-v2/public"
SRC = ROOT + "/images"
OUT = ROOT + "/images/keif"
os.makedirs(OUT, exist_ok=True)

_raw = Image.open(ROOT + "/brand/logo-official.png").convert("RGBA")
LOGO = _raw.crop(_raw.getchannel("A").getbbox())


def lighten_navy(img: Image.Image) -> Image.Image:
    """يرفع إضاءة البكسلات الكحلية فقط (تبقى البيج كما هي) — للخلفيات
    الداكنة جداً حيث الكحلي يختفي تماماً."""
    r, g, b, a = img.split()
    px = img.load()
    w, h = img.size
    out = img.copy()
    op = out.load()
    for y in range(h):
        for x in range(w):
            R, G, B, A = px[x, y]
            if A and (R + G + B) < 260:          # كحلي
                op[x, y] = (0xE8, 0xD2, 0xA4, A)  # ذهبي كريمي
    return out


LOGO_LIGHT = lighten_navy(LOGO)

# ذهب الصفحة نفسه (--lx-gold-warm في luxe.css) — العلامة تنتمي للطبقة
GOLD = (0xD8, 0xA8, 0x77)


INK_L, BG_L = 40.0, 172.0   # إضاءة الحبر الكحلي / الرمليّ — مقاستان من الملف


def engrave(img: Image.Image, rgb=GOLD) -> Image.Image:
    """يحوّل الشعار إلى **نقش**: الشفافية الجديدة = دكانة الحبر.

    الفرق الجوهري عن الإصدارين ٢ و٤: هما حافظا على شكل البيضة ككتلة
    (أحدهما سحق الشفافية، والآخر سحق اللون) فضاعت التفاصيل في الحالتين.
    هنا تُبنى الشفافية من الإضاءة: البكسل الكحلي (٤٠) يصير مصمتاً،
    والبكسل الرمليّ (١٧٢) يصير شفافاً تماماً، وما بينهما تدرّجاً.
    فالنتيجة خطوطٌ ذهبية تحفظ الشماغ والوجه والدلّة والفنجان والحروف،
    وجوفٌ شفّاف يُرى المحتوى من خلاله — أي علامة تُؤطّر لا تحجب."""
    px = img.convert("RGBA").load()
    w, h = img.size
    out = Image.new("RGBA", img.size, rgb + (0,))
    op = out.load()
    span = BG_L - INK_L
    for y in range(h):
        for x in range(w):
            R, G, B, A = px[x, y]
            if not A:
                continue
            L = 0.299 * R + 0.587 * G + 0.114 * B
            t = (BG_L - L) / span
            if t <= 0.0:
                continue
            if t > 1.0:
                t = 1.0
            # 0.88 يُسمّن الخطوط الرقيقة قليلاً حتى تصمد بعد التصغير
            op[x, y] = rgb + (int(A * (t ** 0.88)),)
    return out


LOGO_TINT = engrave(LOGO)


def stamp(im: Image.Image, frac=0.16, opacity=0.72, pad=0.042) -> Image.Image:
    im = im.convert("RGB")
    W, H = im.size
    lw = max(130, int(min(W, H) * frac))
    lh = int(LOGO.height * lw / LOGO.width)
    x, y = W - lw - int(W * pad), H - lh - int(H * pad)

    patch = im.crop((max(0, x), max(0, y), min(W, x + lw), min(H, y + lh)))
    mean = ImageStat.Stat(patch.convert("L")).mean[0]

    # النقش الذهبي موحّد على كل الخلفيات: علامة واحدة متطابقة في كل
    # الصور — وهذا شرط الفخامة. والشفافية أعلى (0.72) لأن النقش خطوط
    # رقيقة لا كتلة، فتغطيته ضئيلة أصلاً ولا يحجب شيئاً.
    src = LOGO_TINT
    logo = src.resize((lw, lh), Image.LANCZOS)
    la = logo.getchannel("A").point(lambda v: int(v * opacity))
    logo.putalpha(la)

    base = im.convert("RGBA")

    # الهالة المضادة — هي مصدر التباين
    halo_rgb = (0, 0, 0) if mean >= 128 else (0xFF, 0xF4, 0xE2)
    hm = Image.new("L", base.size, 0)
    hm.paste(logo.getchannel("A"), (x, y))
    hm = hm.filter(ImageFilter.MaxFilter(2 * max(1, int(lw * 0.012)) + 1))
    hm = hm.filter(ImageFilter.GaussianBlur(lw * 0.045))
    hm = hm.point(lambda v: min(255, int(v * 1.45 * 0.62)))
    halo = Image.new("RGBA", base.size, halo_rgb + (0,))
    halo.putalpha(hm)
    base = Image.alpha_composite(base, halo)

    layer = Image.new("RGBA", base.size, (0, 0, 0, 0))
    layer.paste(logo, (x, y), logo)
    return Image.alpha_composite(base, layer).convert("RGB")


def crop_frac(im, l=0.0, t=0.0, r=0.0, b=0.0):
    W, H = im.size
    return im.crop((int(W * l), int(H * t), int(W * (1 - r)), int(H * (1 - b))))


JOBS = [
    dict(src="hero/hero-mobile.webp", crop=dict(b=0.255),
         dst="qahwajiyeen-jeddah-hall-reception-keif-aldiafa.webp",
         alt="قهوجيين وصبابين قهوة في قاعة استقبال فاخرة بجدة — كيف الضيافة"),
    dict(src="hero/hero-desktop.webp", crop=dict(b=0.19),
         dst="sabab-qahwa-jeddah-majlis-hall-keif-aldiafa.webp",
         alt="صبابين قهوة عربية في مجلس استقبال فاخر بجدة — كيف الضيافة"),
    dict(src="services/artistic/buffet/buffet-2.webp",
         dst="diyafa-buffet-jeddah-dates-sweets-keif-aldiafa.webp",
         alt="بوفيه ضيافة فاخر بأطباق التمر والحلويات والمعجّنات في جدة"),
    dict(src="services/artistic/buffet/buffet-1.webp", crop=dict(l=0.28),
         dst="diyafa-pastry-tiers-jeddah-keif-aldiafa.webp",
         alt="مستويات معجّنات وحلويات الضيافة على حاملات ذهبية في جدة"),
    dict(src="services/artistic/buffet/buffet-3.webp",
         dst="diyafa-canape-trays-jeddah-keif-aldiafa.webp",
         alt="صواني ضيافة باردة ومقبّلات منسّقة لمناسبات جدة"),
    dict(src="services/artistic/counter/counter-2.webp", crop=dict(l=0.02, r=0.30),
         dst="qahwa-counter-jeddah-gold-station-keif-aldiafa.webp",
         alt="كاونتر ضيافة قهوة ذهبي مضاء بالدلال والفناجيل في جدة"),
    dict(src="services/artistic/heritage-tent/tent-3.webp",
         dst="khaima-turathiya-jeddah-diyafa-tent-keif-aldiafa.webp",
         alt="خيمة ضيافة تراثية مجهّزة بالدلال والزخارف النجدية في جدة"),
    dict(src="services/artistic/heritage-tent/tent-1.webp",
         dst="khaima-diyafa-jeddah-traditional-spread-keif-aldiafa.webp",
         alt="سُفرة ضيافة تراثية داخل خيمة بمناسبة في جدة"),
    dict(src="services/male/sawas/sawas-5.webp", crop=dict(t=0.02, b=0.02),
         dst="mabkhara-dallah-gold-jeddah-diyafa-keif-aldiafa.webp",
         alt="دلّة ومباخر ذهبية منقوشة من عدّة ضيافة كيف الضيافة في جدة"),
    dict(src="distributions/jeddah-vip-dates-dessert-gahwa-gift-tray.webp",
         dst="tawzeeat-jeddah-vip-dates-qahwa-tray-keif-aldiafa.webp",
         alt="توزيعات ضيافة فاخرة بالتمر والقهوة العربية لكبار الضيوف في جدة"),
    dict(src="dates/stuffed-dates-3.webp",
         dst="tamr-mahshi-jeddah-dates-platter-keif-aldiafa.webp",
         alt="طبق تمر محشي بالمكسّرات مرتّب للضيافة في جدة"),
    dict(src="dates/palm-sukari-stuffed.webp",
         dst="nakhla-tamr-sukari-jeddah-display-keif-aldiafa.webp",
         alt="مجسّم نخلة من التمر السكري لتزيين طاولة الضيافة في جدة"),
    dict(src="equipment/royal-golden-dallah-coffee-pot-saudi-hospitality.webp",
         dst="dallah-dhahabiya-jeddah-arabic-coffee-pot-keif-aldiafa.webp",
         alt="دلّة قهوة عربية ذهبية ملكية من معدات الضيافة في جدة"),
    dict(src="equipment/saudi-luxury-silver-dallah-arabic-coffee-equipment.webp",
         dst="dallah-fidhiya-jeddah-silver-coffee-pot-keif-aldiafa.webp",
         alt="دلّة قهوة عربية فضية فاخرة من عدّة الضيافة في جدة"),
    dict(src="equipment/saudi-gold-palm-gahwa-cups-set.webp",
         dst="fanajeel-qahwa-jeddah-gold-palm-cups-keif-aldiafa.webp",
         alt="طقم فناجيل قهوة عربية بشعار النخلة الذهبي للضيافة في جدة"),
]

manifest = []
for j in JOBS:
    sp = os.path.join(SRC, j["src"])
    if not os.path.exists(sp):
        print("MISSING", j["src"]); continue
    im = Image.open(sp).convert("RGB")
    if j.get("crop"):
        im = crop_frac(im, **j["crop"])
    im = stamp(im)
    dp = os.path.join(OUT, j["dst"])
    im.save(dp, "WEBP", quality=86, method=6)
    manifest.append(dict(src="/images/keif/" + j["dst"], w=im.width, h=im.height,
                         alt=j["alt"], kb=os.path.getsize(dp) // 1024, origin=j["src"]))
    print(f"{j['dst'][:52]:54s} {im.width}x{im.height}")

with open("/home/user/audit/wm_manifest.json", "w") as f:
    json.dump(manifest, f, ensure_ascii=False, indent=1)
print("TOTAL", len(manifest))
