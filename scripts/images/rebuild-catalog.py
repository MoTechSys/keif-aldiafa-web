#!/usr/bin/env python3
"""
rebuild-catalog.py — إعادة بناء صور الكتالوج الـ314 من الأصول النظيفة (keif-v2)
بأمر المالك 2026-09-22 (D163):

  1. المصدر: أصل keif-v2 النظيف لكل سجل (من docs/reports/2026-09-22-image-sources-mapping.csv).
  2. القصّ الذكي: الطويلة جداً (< 9:16) والعريضة جداً (> 16:9) تُقصّ إلى الحدّ بحسب
     منطقة الاهتمام (وجوه Haar + كثافة الحواف) — لا قصّ للأخريات.
  3. إعادة التحجيم: أطول ضلع ≤ MAX_SIDE (الهيرو المكتبي 1920).
  4. علامة مائية **واحدة**: الشعار الرسمي في أهدأ ركن، حجم تكيّفي حسب مساحة الصورة
     (4–12% من العرض)، تفتيح على الأركان الداكنة. طبقة حماية مركزية شفافة جداً
     (اختيارية --center) ضد القصّ. الصور التي تحمل شعار العلامة أصلاً (قالب المنتجات
     الأزرق · شارة K · الهيرو) لا تُختم مرّة ثانية.
  5. ضغط ذكي: أدنى جودة WebP تحقّق PSNR ≥ 42dB، وسقف حجم 240KB (CH1 < 250KB).
  6. بيانات داخل الملف (XMP): العنوان والوصف من الكتالوج حرفياً (D111) + المُنشئ
     والحقوق + كلمات مفتاحية من حقول الكتالوج (الجهة/الخدمة/المكان/القطاع).
  7. تحديث width/height/kb في imageCatalog.data.ts — لا تغيير في file/alt/title/pages.

الاستعمال:
    python3 scripts/images/rebuild-catalog.py --src /path/to/keif-v2/public/images --ids 7,106,280 --out /tmp/wm-samples
    python3 scripts/images/rebuild-catalog.py --src /path/to/keif-v2/public/images --all --write
"""
from __future__ import annotations

import argparse
import csv
import io
import json
import math
import os
import re
import sys
from xml.sax.saxutils import escape

import numpy as np
from PIL import Image, ImageEnhance, ImageFilter

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
DATA_TS = os.path.join(ROOT, "src", "lib", "imageCatalog.data.ts")
MAPPING = os.path.join(ROOT, "docs", "reports", "2026-09-22-image-sources-mapping.csv")
OUT_DIR = os.path.join(ROOT, "public", "images", "catalog")
LOGO = os.path.join(ROOT, "scripts", "images", "assets", "wm-logo.png")
MARK = os.path.join(ROOT, "scripts", "images", "assets", "wm-mark.png")

SITE_URL = "https://keifaldiafa.com"
SITE_NAME = "كيف الضيافة"
SITE_NAME_EN = "Keif Aldiafa"

# ── حدود القصّ/التحجيم ──
MIN_RATIO = 9 / 16          # أطول من 9:16 → قصّ
MAX_RATIO = 16 / 9          # أعرض من 16:9 → قصّ
MAX_SIDE = 1600
HERO_DESKTOP_W = 1920
HERO_IDS = {99: HERO_DESKTOP_W}  # #99 يبقى بانورامياً (هيرو الحاسوب) ولا يُقصّ

# ── صور تحمل هوية العلامة داخلها أصلاً — لا ختم ثانٍ (تقرير الفحص 2026-09-22 §0) ──
TEMPLATE_IDS = {167, 168, 171, 172, 175, 177, 178, 179, 180, 182, 183, 185, 186, 187,
                197, 199, 200, 205, 206, 207, 208, 211}
KMARK_IDS = {169, 170, 173, 174, 176, 209, 212}
PREMARKED_IDS = {99, 106}   # أصل hero في keif-v2 يحمل العلامة البيضاوية مرّة واحدة
DESIGN_IDS = {112, 131, 123, 281, 282}  # بانرات مصمّمة تحمل شعار العلامة ونصاً — لا ختم ولا قصّ
NO_STAMP = TEMPLATE_IDS | KMARK_IDS | PREMARKED_IDS | DESIGN_IDS
NO_CROP = DESIGN_IDS | set(HERO_IDS)

# ── العلامة ──
CORNER_PAD = 0.035
CORNER_OP = 0.86
TEXT_MIN_W = 96
CENTER_OP = 0.08

# ── الضغط ──
PSNR_TARGET = 42.0
MAX_BYTES = 240 * 1024

_CACHE: dict = {}


def load_logo(path: str):
    if path not in _CACHE:
        im = Image.open(path).convert("RGBA")
        _CACHE[path] = im.crop(im.getbbox())
    return _CACHE[path]


def scaled_logo(width: int):
    lg = load_logo(LOGO) if width >= TEXT_MIN_W else load_logo(MARK)
    return lg.resize((width, max(1, int(width * lg.height / lg.width))), Image.LANCZOS)


def with_opacity(im, op):
    out = im.copy()
    out.putalpha(ImageEnhance.Brightness(out.getchannel("A")).enhance(op))
    return out


# ───────────────────────── الكتالوج ─────────────────────────

def read_catalog():
    ts = open(DATA_TS, encoding="utf-8").read()
    start = ts.index("= [", ts.index("export const CATALOG")) + 2
    end = ts.rindex("]")
    return ts, start, end, json.loads(ts[start:end + 1])


def read_mapping():
    with open(MAPPING, encoding="utf-8") as f:
        return {int(r["id"]): r for r in csv.DictReader(f)}


# ───────────────────────── القصّ الذكي ─────────────────────────

def saliency(im: Image.Image) -> np.ndarray:
    """خريطة اهتمام: كثافة حواف + وجوه (Haar) — لتحديد نافذة القصّ."""
    g = im.convert("L")
    small = g.copy()
    small.thumbnail((400, 400))
    sx, sy = im.width / small.width, im.height / small.height
    edges = np.asarray(small.filter(ImageFilter.FIND_EDGES).filter(ImageFilter.GaussianBlur(3)), dtype=np.float32)
    sal = edges / (edges.max() + 1e-6)
    try:
        import cv2
        cas = cv2.CascadeClassifier(cv2.data.haarcascades + "haarcascade_frontalface_default.xml")
        faces = cas.detectMultiScale(np.asarray(small), 1.1, 5, minSize=(20, 20))
        for (x, y, w, h) in faces:
            sal[max(0, y - h // 2):y + h * 2, max(0, x - w // 4):x + w + w // 4] += 3.0
    except Exception:
        pass
    return sal, sx, sy


def smart_crop(im: Image.Image, target_ratio: float) -> Image.Image:
    W, H = im.size
    sal, sx, sy = saliency(im)
    r = W / H
    if r < target_ratio:          # طويلة → نقصّ الارتفاع
        nh = int(W / target_ratio)
        win = max(1, int(nh / sy))
        col = sal.sum(axis=1)
        cs = np.concatenate([[0], np.cumsum(col)])
        best = int(np.argmax(cs[win:] - cs[:-win]))
        top = min(H - nh, max(0, int(best * sy)))
        return im.crop((0, top, W, top + nh))
    else:                          # عريضة → نقصّ العرض
        nw = int(H * target_ratio)
        win = max(1, int(nw / sx))
        row = sal.sum(axis=0)
        cs = np.concatenate([[0], np.cumsum(row)])
        best = int(np.argmax(cs[win:] - cs[:-win]))
        left = min(W - nw, max(0, int(best * sx)))
        return im.crop((left, 0, left + nw, H))


def fit(im: Image.Image, max_side: int) -> Image.Image:
    W, H = im.size
    if max(W, H) <= max_side:
        return im
    s = max_side / max(W, H)
    return im.resize((max(1, round(W * s)), max(1, round(H * s))), Image.LANCZOS)


# ───────────────────────── العلامة المائية ─────────────────────────

def wm_sizes(W, H):
    base = (W * H) ** 0.5
    corner = int(min(max(base * 0.082, 50), 180))
    corner = min(corner, max(34, int(W * 0.115)))
    center = int(min(max(base * 0.19, 120), 330))
    center = min(center, int(W * 0.42))
    return corner, center


def quietness(gray: Image.Image, box):
    reg = gray.crop(box)
    if reg.width < 8 or reg.height < 8:
        return 9e9, 128
    small = reg.resize((64, 64), Image.BILINEAR)
    e = np.asarray(small.filter(ImageFilter.FIND_EDGES), dtype=np.float32)
    p = np.asarray(small, dtype=np.float32)
    return float(e.mean()), float(p.mean())


def best_corner(gray, W, H, cw, ch, pad):
    cands = {
        "br": (W - cw - pad, H - ch - pad),
        "bl": (pad, H - ch - pad),
        "tr": (W - cw - pad, pad),
        "tl": (pad, pad),
    }
    bias = {"br": 1.00, "bl": 1.06, "tr": 1.18, "tl": 1.20}
    scored = []
    for k, (x, y) in cands.items():
        ed, lum = quietness(gray, (x, y, x + cw, y + ch))
        scored.append((ed * bias[k], k, x, y, lum))
    scored.sort()
    return scored[0][1:], scored


def stamp(im: Image.Image, center: bool, info: dict) -> Image.Image:
    W, H = im.size
    canvas = im.convert("RGBA")
    gray = im.convert("L")
    cor_w, cen_w = wm_sizes(W, H)
    cor = scaled_logo(cor_w)
    pad = int(min(W, H) * CORNER_PAD)
    (which, x, y, lum), _ = best_corner(gray, W, H, cor.width, cor.height, pad)
    off = max(2, cor.width // 120)
    if lum < 105:
        cor = ImageEnhance.Brightness(cor).enhance(1.85)
        halo = Image.new("RGBA", cor.size, (0, 0, 0, 255))
        halo.putalpha(ImageEnhance.Brightness(cor.getchannel("A")).enhance(0.42))
    elif lum > 150:
        halo = Image.new("RGBA", cor.size, (0, 0, 0, 255))
        halo.putalpha(ImageEnhance.Brightness(cor.getchannel("A")).enhance(0.30))
    else:
        halo = Image.new("RGBA", cor.size, (255, 255, 255, 255))
        halo.putalpha(ImageEnhance.Brightness(cor.getchannel("A")).enhance(0.22))
    canvas.alpha_composite(halo, (x + off, y + off))
    canvas.alpha_composite(with_opacity(cor, CORNER_OP), (x, y))
    info.update(corner=which, corner_px=cor.width, corner_pct=round(100 * cor.width / W, 1), corner_lum=round(lum))

    if center:
        cen = scaled_logo(cen_w)
        cx, cy = (W - cen.width) // 2, (H - cen.height) // 2
        canvas.alpha_composite(with_opacity(cen, CENTER_OP), (cx, cy))
        info.update(center_op=CENTER_OP)
    return canvas.convert("RGB")


# ───────────────────────── XMP ─────────────────────────

def build_xmp(rec: dict, W: int, H: int) -> bytes:
    kws: list[str] = []

    def add(v):
        if not v or v in ("—", "-"):
            return
        for part in re.split(r"\s+[·/|]\s+|،|,", v):
            part = part.strip(" —-")
            if part and part not in kws:
                kws.append(part)

    add(rec.get("entity"))
    add(rec.get("entityEn"))
    add(rec.get("service"))
    add(rec.get("place"))
    add(rec.get("sector"))
    for k in (SITE_NAME, SITE_NAME_EN, "قهوجي", "قهوجيين", "صبابين قهوة", "ضيافة سعودية", "ضيافة فعاليات"):
        if k not in kws:
            kws.append(k)
    kws = kws[:24]
    li = "".join(f"<rdf:li>{escape(k)}</rdf:li>" for k in kws)
    year = 2026
    return f"""<?xpacket begin="\ufeff" id="W5M0MpCehiHzreSzNTczkc9d"?>
<x:xmpmeta xmlns:x="adobe:ns:meta/">
 <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
  <rdf:Description rdf:about=""
    xmlns:dc="http://purl.org/dc/elements/1.1/"
    xmlns:xmp="http://ns.adobe.com/xap/1.0/"
    xmlns:xmpRights="http://ns.adobe.com/xap/1.0/rights/"
    xmlns:photoshop="http://ns.adobe.com/photoshop/1.0/"
    xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/"
    xmlns:plus="http://ns.useplus.org/ldf/xmp/1.0/"
    xmlns:tiff="http://ns.adobe.com/tiff/1.0/"
    photoshop:Credit="{escape(SITE_NAME)}"
    photoshop:Source="{escape(SITE_NAME)}"
    photoshop:Headline="{escape(rec['title'])}"
    xmpRights:Marked="True"
    xmpRights:WebStatement="{SITE_URL}/legal"
    plus:Licensor="{SITE_URL}/contact"
    xmp:CreatorTool="keif-aldiafa-web/scripts/images/rebuild-catalog.py"
    tiff:ImageWidth="{W}" tiff:ImageLength="{H}">
   <dc:title><rdf:Alt><rdf:li xml:lang="x-default">{escape(rec['title'])}</rdf:li><rdf:li xml:lang="ar">{escape(rec['title'])}</rdf:li></rdf:Alt></dc:title>
   <dc:description><rdf:Alt><rdf:li xml:lang="x-default">{escape(rec['alt'])}</rdf:li><rdf:li xml:lang="ar">{escape(rec['alt'])}</rdf:li></rdf:Alt></dc:description>
   <dc:creator><rdf:Seq><rdf:li>{escape(SITE_NAME)}</rdf:li></rdf:Seq></dc:creator>
   <dc:rights><rdf:Alt><rdf:li xml:lang="x-default">© {year} {escape(SITE_NAME)} — {escape(SITE_NAME_EN)}. جميع الحقوق محفوظة. {SITE_URL}</rdf:li></rdf:Alt></dc:rights>
   <dc:subject><rdf:Bag>{li}</rdf:Bag></dc:subject>
   <xmpRights:UsageTerms><rdf:Alt><rdf:li xml:lang="x-default">الاستخدام بإذن كتابي من كيف الضيافة — {SITE_URL}/legal</rdf:li></rdf:Alt></xmpRights:UsageTerms>
   <Iptc4xmpCore:CreatorContactInfo rdf:parseType="Resource">
    <Iptc4xmpCore:CiUrlWork>{SITE_URL}</Iptc4xmpCore:CiUrlWork>
    <Iptc4xmpCore:CiAdrCtry>Saudi Arabia</Iptc4xmpCore:CiAdrCtry>
   </Iptc4xmpCore:CreatorContactInfo>
  </rdf:Description>
 </rdf:RDF>
</x:xmpmeta>
<?xpacket end="w"?>""".encode("utf-8")


# ───────────────────────── الضغط الذكي ─────────────────────────

def psnr(a: Image.Image, b: Image.Image) -> float:
    x = np.asarray(a.convert("RGB"), dtype=np.float32)
    y = np.asarray(b.convert("RGB"), dtype=np.float32)
    mse = float(((x - y) ** 2).mean())
    return 99.0 if mse == 0 else 10 * math.log10(255 * 255 / mse)


def encode(im: Image.Image, q: int, xmp: bytes) -> bytes:
    buf = io.BytesIO()
    im.save(buf, "WEBP", quality=q, method=6, xmp=xmp)
    return buf.getvalue()


def smart_encode(im: Image.Image, xmp: bytes):
    lo, hi, best = 68, 94, None
    while lo <= hi:
        mid = (lo + hi) // 2
        data = encode(im, mid, xmp)
        p = psnr(im, Image.open(io.BytesIO(data)))
        if p >= PSNR_TARGET:
            best = (mid, data, p)
            hi = mid - 1
        else:
            lo = mid + 1
    if best is None:
        data = encode(im, 94, xmp)
        best = (94, data, psnr(im, Image.open(io.BytesIO(data))))
    q, data, p = best
    while len(data) > MAX_BYTES and q > 50:
        q -= 4
        data = encode(im, q, xmp)
        p = psnr(im, Image.open(io.BytesIO(data)))
    return q, data, p


# ───────────────────────── المعالجة ─────────────────────────

def process(rec: dict, src_root: str, mapping: dict, out_dir: str, center: bool) -> dict:
    rid = rec["id"]
    rel = mapping[rid]["keif_v2_source_path"]
    rel = rel[len("public/images/"):] if rel.startswith("public/images/") else rel
    src = os.path.join(src_root, rel)
    im = Image.open(src)
    im.load()
    im = im.convert("RGB")
    info = {"id": rid, "file": rec["file"], "source": rel, "src_w": im.width, "src_h": im.height}

    r = im.width / im.height
    if rid not in NO_CROP:
        if r < MIN_RATIO - 0.01:
            im = smart_crop(im, MIN_RATIO)
            info["crop"] = f"{r:.2f}→{MIN_RATIO:.2f}"
        elif r > MAX_RATIO + 0.01:
            im = smart_crop(im, MAX_RATIO)
            info["crop"] = f"{r:.2f}→{MAX_RATIO:.2f}"
    im = fit(im, HERO_IDS.get(rid, MAX_SIDE))

    if rid in NO_STAMP:
        info["stamp"] = "none (brand already in image)"
    else:
        im = stamp(im, center, info)
        info["stamp"] = "corner" + ("+center" if center else "")

    xmp = build_xmp(rec, im.width, im.height)
    q, data, p = smart_encode(im, xmp)
    out = os.path.join(out_dir, rec["file"])
    os.makedirs(out_dir, exist_ok=True)
    with open(out, "wb") as f:
        f.write(data)
    info.update(w=im.width, h=im.height, q=q, psnr=round(p, 1), kb=round(len(data) / 1024))
    return info


def update_data_ts(ts: str, start: int, end: int, recs: list, results: dict) -> str:
    """يحدّث width/height/kb فقط — بقية الحقول حرفياً كما هي."""
    for r in recs:
        res = results.get(r["id"])
        if res:
            r["width"], r["height"], r["kb"] = res["w"], res["h"], res["kb"]
    body = json.dumps(recs, ensure_ascii=False, indent=2)
    ts = ts[:start] + " " + body + ts[end + 1:]
    ts = re.sub(r'export const CATALOG_VERSION = "[^"]*";',
                'export const CATALOG_VERSION = "v5 — 2026-09-22 (D163: أصول keif-v2 · ختم واحد · WebP ذكي · XMP)";', ts)
    return ts


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--src", required=True, help="جذر أصول keif-v2 (public/images)")
    ap.add_argument("--ids", help="أرقام سجلات مفصولة بفواصل")
    ap.add_argument("--all", action="store_true")
    ap.add_argument("--out", help="مجلد إخراج بديل (افتراضياً public/images/catalog)")
    ap.add_argument("--write", action="store_true", help="اكتب في public/images/catalog وحدّث imageCatalog.data.ts")
    ap.add_argument("--center", action="store_true", help="أضف طبقة الحماية المركزية الشفافة")
    ap.add_argument("--report", help="مسار JSON لنتائج المعالجة")
    a = ap.parse_args()

    ts, start, end, recs = read_catalog()
    mapping = read_mapping()
    ids = set(recs_ids := [r["id"] for r in recs]) if a.all else {int(x) for x in a.ids.split(",")}
    out_dir = a.out or (OUT_DIR if a.write else "/tmp/wm-out")
    if not a.write and not a.out:
        os.makedirs(out_dir, exist_ok=True)

    results = {}
    for r in recs:
        if r["id"] not in ids:
            continue
        info = process(r, a.src, mapping, out_dir, a.center)
        results[r["id"]] = info
        print(f"#{info['id']:>3} {info['src_w']}x{info['src_h']}→{info['w']}x{info['h']} q{info['q']} {info['psnr']}dB {info['kb']}KB "
              f"{info.get('crop', '')} {info['stamp']} {info.get('corner', '')} {info.get('corner_pct', '')}", flush=True)

    if a.report:
        with open(a.report, "w", encoding="utf-8") as f:
            json.dump(list(results.values()), f, ensure_ascii=False, indent=1)
    if a.write:
        new_ts = update_data_ts(ts, start, end, recs, results)
        with open(DATA_TS, "w", encoding="utf-8") as f:
            f.write(new_ts)
        print(f"updated {DATA_TS} for {len(results)} records")


if __name__ == "__main__":
    main()
