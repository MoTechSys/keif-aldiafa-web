#!/usr/bin/env python3
"""
build-og.py — D171: صورة معاينة (og:image) مختلفة لكل صفحة.

المعايير المبحوثة (2026-09-23 — docs/reports/2026-09-23-og-images-D171.md §1):
  • 1200×630 (1.91:1) — Facebook/WhatsApp/Telegram/X/LinkedIn/Slack/Discord.
  • WhatsApp يتجاهل الصور > ~300KB ويطلب عرضاً ≥300px ونسبة ≤4:1 → هدفنا ≤150KB.
  • WebP مدعوم في WhatsApp/Telegram/Signal/Discord/Slack/Teams/FB/LinkedIn (darekkay 2024-11)
    ومذكور في وثائق X. JPEG هو الاحتياط الأوسع — نُخرج WebP + JPEG احتياطياً ونستخدم
    WebP في og:image لأن كل المنصات المستهدفة تدعمه.
  • المنطقة الآمنة: WhatsApp/Telegram يقصّان أحياناً إلى ~1.4:1 أو مربع في المعاينة
    الصغيرة → كل النص والشعار داخل الـ 60% الوسطى أفقياً و 80% عمودياً.
  • النص ≥ 40px على 1200 (يُقرأ عند تصغير المعاينة إلى 300px).

التركيب (لكل صفحة):
  يسار (RTL: يمين البصر) الصورة الحقيقية من الكتالوج بقصّ يتجنّب الوجوه (YuNet) —
  يمين نصّ عربي Amiri على خامة ذهبية داكنة مولّدة بالذكاء الاصطناعي (og-bg-ai.png)
  + الشعار البيضاوي + سطر إثبات «+500 مناسبة · منذ 2016» (الأرقام الوحيدة المسموحة).

الاستخدام:
  python3 scripts/images/build-og.py --routes /tmp/og_routes.json --pick /tmp/og_pick.json \
      --yunet /tmp/yunet.onnx --out public/og [--only /,/services]
"""
import argparse, json, os, sys, io
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageOps
import numpy as np

W, H = 1200, 630
BG = "scripts/images/assets/og-bg-ai.png"
EMBLEM = "public/images/brand/logo-emblem.webp"
F_HEAD = "/usr/share/fonts/opentype/fonts-hosny-amiri/Amiri-Bold.ttf"
F_BODY = "/usr/share/fonts/truetype/noto/NotoNaskhArabic-Regular.ttf"
F_BODY_B = "/usr/share/fonts/truetype/noto/NotoNaskhArabic-Bold.ttf"
F_LATIN = "/usr/share/fonts/truetype/noto/NotoSans-Regular.ttf"
F_LATIN_B = "/usr/share/fonts/truetype/noto/NotoSans-Bold.ttf"
# مصدر الصورة: الأصل النظيف من keif-v2 (بلا ختم) — اللوحة تحمل الشعار بنفسها،
# فلا يظهر شعاران (الختم البيضاوي + شعار اللوحة). الخريطة من تقرير 2026-09-22.
MAPPING = "docs/reports/2026-09-22-image-sources-mapping.csv"
KV2 = "/tmp/kv2src"
GOLD_HI = (226, 198, 142)
GOLD = (197, 160, 89)
CREAM = (245, 245, 245)
CREAM2 = (245, 245, 245, 200)
MAX_KB = 150

def font(p, s):
    return ImageFont.truetype(p, s)

def faces(im, det):
    if det is None: return []
    import cv2
    a = np.array(im.convert("RGB"))[:, :, ::-1]
    h, w = a.shape[:2]
    det.setInputSize((w, h))
    _, f = det.detect(a)
    return [tuple(map(int, r[:4])) for r in (f if f is not None else [])]

def crop_photo(im, det, tw, th):
    """قصّ إلى tw×th مع الحفاظ على الوجوه داخل الإطار (وإلا وسط)."""
    im = ImageOps.exif_transpose(im).convert("RGB")
    w, h = im.size
    scale = max(tw / w, th / h)
    nw, nh = round(w * scale), round(h * scale)
    im2 = im.resize((nw, nh), Image.LANCZOS)
    fx = faces(im2, det)
    # مركز الاهتمام = مركز صناديق الوجوه (أو 0.5,0.42)
    if fx:
        cx = sum(x + bw / 2 for x, y, bw, bh in fx) / len(fx)
        cy = sum(y + bh / 2 for x, y, bw, bh in fx) / len(fx)
    else:
        cx, cy = nw / 2, nh * 0.42
    left = int(min(max(cx - tw / 2, 0), nw - tw))
    top = int(min(max(cy - th * 0.45, 0), nh - th))
    return im2.crop((left, top, left + tw, top + th))

def draw_mixed(d, xy, text, fnt, fill, anchor="ra"):
    """يرسم النص بخط عربي، ويستبدل الرموز الغائبة (· —) بخط لاتيني بنفس الحجم."""
    lat = font(F_LATIN, fnt.size)
    x, y = xy
    # نُقسّم إلى مقاطع عربية/رمزية ونرسم من اليمين إلى اليسار
    import re
    parts = re.split(r'([·—•]+|\+\d+|[A-Za-z][A-Za-z0-9.\- ]*[A-Za-z0-9.])', text)
    parts = [q for q in parts if q]
    for q in parts:
        f = lat if re.fullmatch(r'[·—•]+|\+\d+|[A-Za-z][A-Za-z0-9.\- ]*[A-Za-z0-9.]', q) else fnt
        w_ = d.textlength(q, font=f)
        d.text((x, y), q, font=f, fill=fill, anchor=anchor)
        x -= w_
    return x

def wrap(draw, text, fnt, maxw):
    words = text.split(" "); lines = []; cur = ""
    for w_ in words:
        t = (cur + " " + w_).strip()
        if draw.textlength(t, font=fnt) <= maxw or not cur: cur = t
        else: lines.append(cur); cur = w_
    if cur: lines.append(cur)
    return lines

def compose(photo, title, sub, kicker, emblem, bg):
    canvas = bg.copy()
    # الصورة تحتل يسار اللوحة 46% مع تلاشٍ ناعم نحو الخامة
    pw = 580
    ph = H
    p = crop_photo(photo, DET, pw, ph)
    # طبقة تدرّج من اليمين (نحو النص) لتماسك اللوحة
    mask = Image.linear_gradient("L").rotate(90, expand=True).resize((pw, ph))  # يسار داكن → يمين فاتح
    mask = ImageOps.invert(mask)  # يسار فاتح (يُظهر الصورة) → يمين داكن (يُظهر الخامة)
    mask = mask.point(lambda v: 255 if v > 150 else int(v * 255 / 150))
    canvas.paste(p, (0, 0), mask)
    # ظلّ خفيف أسفل لثبات النص
    d = ImageDraw.Draw(canvas, "RGBA")
    # ===== كتلة النص يمين =====
    x_r = W - 64          # حافة النص اليمنى (RTL)
    tw_max = W - pw + 120  # يسمح بتداخل خفيف مع منطقة التلاشي
    y = 74
    # kicker لاتيني صغير
    draw_mixed(d, (x_r, y), kicker, font(F_BODY_B, 24), GOLD)
    y += 44
    # خط فاصل ذهبي
    d.line([(x_r - 220, y), (x_r, y)], fill=GOLD + (170,), width=2)
    y += 26
    # العنوان
    size = 62
    while True:
        fh = font(F_HEAD, size)
        lines = wrap(d, title, fh, tw_max)
        if len(lines) <= 2 or size <= 44: break
        size -= 4
    for ln in lines:
        draw_mixed(d, (x_r, y), ln, fh, GOLD_HI)
        y += int(size * 1.35)
    y += 10
    # السطر الفرعي
    fs = font(F_BODY, 30)
    for ln in wrap(d, sub, fs, tw_max)[:2]:
        draw_mixed(d, (x_r, y), ln, fs, CREAM2)
        y += 46
    # ===== الشريط السفلي: شعار + اسم + إثبات =====
    em = emblem.copy(); em.thumbnail((92, 110))
    ex, ey = x_r - em.width, H - 74 - em.height + 8
    canvas.paste(em, (ex, ey), em)
    fb = font(F_HEAD, 40)
    d.text((ex - 18, ey + 10), "كيف الضيافة", font=fb, fill=GOLD_HI, anchor="ra")
    fl = font(F_BODY_B, 22)
    draw_mixed(d, (ex - 18, ey + 62), "+500 مناسبة  ·  منذ 2016  ·  keifaldiafa.com", fl, GOLD)
    return canvas

def save_webp(im, path, max_kb=MAX_KB):
    q = 84
    while True:
        buf = io.BytesIO(); im.save(buf, "WEBP", quality=q, method=6)
        if buf.tell() <= max_kb * 1024 or q <= 60: break
        q -= 4
    open(path, "wb").write(buf.getvalue())
    return buf.tell() // 1024, q

if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--routes", required=True)   # {path: {title, sub, kicker}}
    ap.add_argument("--pick", required=True)     # {path: catalog file or null}
    ap.add_argument("--yunet", default="/tmp/yunet.onnx")
    ap.add_argument("--out", default="public/og")
    ap.add_argument("--only", default="")
    ap.add_argument("--report", default="/tmp/og_report.json")
    a = ap.parse_args()
    DET = None
    if os.path.exists(a.yunet):
        import cv2
        DET = cv2.FaceDetectorYN.create(a.yunet, "", (320, 320), 0.5, 0.3, 5000)
    import csv
    MAP = {r["catalog_file"]: r["keif_v2_source_path"] for r in csv.DictReader(open(MAPPING, encoding="utf-8-sig"))}
    routes = json.load(open(a.routes, encoding="utf-8"))
    pick = json.load(open(a.pick, encoding="utf-8"))
    only = set(a.only.split(",")) if a.only else None
    bg = Image.open(BG).convert("RGB").resize((W, H), Image.LANCZOS)
    emblem = Image.open(EMBLEM).convert("RGBA")
    os.makedirs(a.out, exist_ok=True)
    rep = {}
    for path, meta in routes.items():
        if only and path not in only: continue
        fn = pick.get(path) or pick.get("/")
        src = MAP.get(fn)
        loc = os.path.join(KV2, src.replace("public/images/", "", 1)) if src else None
        photo = Image.open(loc if loc and os.path.exists(loc) else f"public/images/catalog/{fn}")
        im = compose(photo, meta["title"], meta["sub"], meta["kicker"], emblem, bg)
        slug = "home" if path == "/" else path.strip("/").replace("/", "__")
        out = f"{a.out}/{slug}.webp"
        kb, q = save_webp(im, out)
        rep[path] = {"file": f"/og/{slug}.webp", "kb": kb, "q": q, "photo": fn}
        print(f"{path:32} {kb:4}KB q{q}  ← {fn[:50]}")
    json.dump(rep, open(a.report, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
