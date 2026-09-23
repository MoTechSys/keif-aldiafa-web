#!/usr/bin/env python3
"""
restamp-double.py — D164: إعادة الصور التي كانت بشعارَين إلى **شعار بيضاوي واحد في الوسط**
بنفس مواصفة الصور السابقة السليمة، وإبقاء الصور السليمة كما كانت بالبايت.

أمر المالك 2026-09-22: «السابقات اللي كان فيها شعار واحد أستخدمها تماماً… أي صورة كان فيها
2 شعارات أعد تصميمها بواحد شعار. خذ الأصل وأعد تصميمها بواحد شعار في الوسط».

المواصفة مقاسة من الصور السليمة الـ139 (مطابقة مربعات صغرى على 6 صور 900×1200 + 4 نسب أخرى):
  - الشعار: `scripts/images/assets/wm-oval.svg` (= keif-v2/public/images/watermarks/svg/logo-1.svg)
  - العرض: 34% من عرض الصورة (للنسب العمودية والمربعة)؛ 28% للعريضة (< 0.9)
  - المركز: أفقياً 50% · عمودياً 61% (58% للعريضة)
  - العتامة: 0.65
  - الأبعاد: نفس أبعاد النسخة السابقة لكل صورة (من imageCatalog.data.ts قبل D163)؛
    الأصل يُقصّ/يُحجَّم ليطابقها (قصّ مركزي إن اختلفت النسبة، كما كان)
  - WebP جودة 82 (كالنسخة السابقة تقريباً؛ سقف 240KB)

الاستعمال:
    python3 scripts/images/restamp-double.py --src <keif-v2>/public/images --old-catalog <dir> \
        --bad-ids /tmp/bad_ids.json --old-dims /tmp/old_dims.json [--ids 7,106] [--out /tmp/x] [--write]
"""
from __future__ import annotations
import argparse, csv, io, json, os, re, shutil
from PIL import Image, ImageEnhance

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
DATA_TS = os.path.join(ROOT, "src", "lib", "imageCatalog.data.ts")
MAPPING = os.path.join(ROOT, "docs", "reports", "2026-09-22-image-sources-mapping.csv")
OUT_DIR = os.path.join(ROOT, "public", "images", "catalog")
LOGO = os.path.join(ROOT, "scripts", "images", "assets", "wm-oval.png")

# صور تحمل هوية العلامة داخل التصميم أصلاً (بانرات/هيرو/قالب المنتجات/شارة K) — تُعاد من الأصل بلا ختم إضافي
DESIGN_NO_STAMP = {112, 123, 131, 281, 282, 186, 212}
# الهيرو: أصل keif-v2 يحمل الشعار البيضاوي مرّة واحدة أصلاً
HERO_PRESTAMPED = {99, 106}

WIDTH_FRAC, WIDTH_FRAC_WIDE = 0.34, 0.28
CY, CY_WIDE = 0.61, 0.58
OPACITY = 0.65
QUALITY = 82
MAX_BYTES = 240 * 1024

_logo = None
def logo():
    global _logo
    if _logo is None:
        im = Image.open(LOGO).convert("RGBA"); _logo = im.crop(im.getbbox())
    return _logo

def read_catalog():
    ts = open(DATA_TS, encoding="utf-8").read()
    start = ts.index("= [", ts.index("export const CATALOG")) + 2
    end = ts.rindex("]")
    return ts, start, end, json.loads(ts[start:end + 1])

def center_fit(im: Image.Image, w: int, h: int) -> Image.Image:
    tr, sr = w / h, im.width / im.height
    if abs(tr - sr) < 0.01:
        return im.resize((w, h), Image.LANCZOS)
    if sr > tr:
        nw = int(im.height * tr); left = (im.width - nw) // 2
        im = im.crop((left, 0, left + nw, im.height))
    else:
        nh = int(im.width / tr); top = (im.height - nh) // 2
        im = im.crop((0, top, im.width, top + nh))
    return im.resize((w, h), Image.LANCZOS)

_det = None
def face_boxes(im: Image.Image, yunet: str):
    """وجوه (YuNet) على الصورة قبل الختم — ترجع [(x,y,w,h)]."""
    global _det
    if not yunet: return []
    import cv2, numpy as np
    if _det is None:
        _det = cv2.FaceDetectorYN.create(yunet, "", (320, 320), 0.5, 0.3, 5000)
    arr = cv2.cvtColor(np.asarray(im.convert("RGB")), cv2.COLOR_RGB2BGR)
    h, w = arr.shape[:2]; _det.setInputSize((w, h)); _, f = _det.detect(arr)
    if f is None: return []
    return [(int(x), int(y), int(bw), int(bh)) for x, y, bw, bh, *_, sc in f if sc >= 0.5]

def _cover(box, face):
    ix = max(0, min(box[0] + box[2], face[0] + face[2]) - max(box[0], face[0]))
    iy = max(0, min(box[1] + box[3], face[1] + face[3]) - max(box[1], face[1]))
    return ix * iy / max(1, face[2] * face[3])

def stamp_center(im: Image.Image, faces=(), info: dict | None = None) -> Image.Image:
    """شعار بيضاوي واحد. الافتراضي: الوسط (50%, 61%) بعرض 34%. إن غطّى وجهاً (>5% من مساحة
    الوجه) نبحث عن أقرب موضع/حجم بلا تغطية — أولاً نزولاً على المحور، ثم يميناً/يساراً،
    ثم تصغيراً حتى 26%. الحدّ الأدنى للحجم يبقى بارزاً ضد القصّ."""
    W, H = im.size
    wide = W / H > 1.1
    base_w = WIDTH_FRAC_WIDE if wide else WIDTH_FRAC
    base_cy = CY_WIDE if wide else CY
    lg0 = logo()
    cands = []
    for wf in (base_w, base_w - 0.04, base_w - 0.08):
        for cy in (base_cy, base_cy + 0.07, base_cy + 0.14, base_cy + 0.21, base_cy - 0.08, base_cy - 0.16):
            for cx in (0.5, 0.36, 0.64, 0.24, 0.76):
                lw = int(W * wf); lh = int(lw * lg0.height / lg0.width)
                x = int(W * cx - lw / 2); y = int(H * cy - lh / 2)
                if x < 0 or y < 0 or x + lw > W or y + lh > H: continue
                box = (x, y, lw, lh)
                cov = max((_cover(box, f) for f in faces), default=0.0)
                # ترتيب: تغطية الوجه أولاً، ثم بقاء الحجم، ثم القرب من الافتراضي
                dist = abs(cx - 0.5) * 1.2 + abs(cy - base_cy)
                cands.append((cov > 0.05, round(cov, 3), base_w - wf, dist, box, wf, cx, cy))
    cands.sort(key=lambda c: (c[0], c[1], c[2], c[3]))
    _, cov, _, _, (x, y, lw, lh), wf, cx, cy = cands[0]
    lg = lg0.resize((lw, lh), Image.LANCZOS)
    lg.putalpha(ImageEnhance.Brightness(lg.getchannel("A")).enhance(OPACITY))
    c = im.convert("RGBA"); c.alpha_composite(lg, (x, y))
    if info is not None:
        info.update(wf=round(wf, 2), cx=round(cx, 2), cy=round(cy, 2), face_cover=cov, faces=len(faces))
    return c.convert("RGB")

def encode(im: Image.Image) -> bytes:
    q = QUALITY
    while True:
        b = io.BytesIO(); im.save(b, "WEBP", quality=q, method=6); d = b.getvalue()
        if len(d) <= MAX_BYTES or q <= 60: return d
        q -= 4

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--src", required=True)
    ap.add_argument("--old-catalog", required=True, help="مجلد صور الكتالوج السابقة (قبل D163)")
    ap.add_argument("--bad-ids", required=True)
    ap.add_argument("--old-dims", required=True)
    ap.add_argument("--ids")
    ap.add_argument("--rebuild-ids", help="JSON بقائمة أرقام إضافية تُبنى من الأصل (مكرّرة/فوق وجه/بلا شعار)")
    ap.add_argument("--yunet", help="مسار نموذج YuNet لتجنّب الوجوه")
    ap.add_argument("--out")
    ap.add_argument("--write", action="store_true")
    ap.add_argument("--report")
    a = ap.parse_args()

    ts, start, end, recs = read_catalog()
    mapping = {int(r["id"]): r for r in csv.DictReader(open(MAPPING, encoding="utf-8"))}
    bad = set(json.load(open(a.bad_ids)))
    if a.rebuild_ids: bad |= set(json.load(open(a.rebuild_ids)))
    old_dims = {int(k): v for k, v in json.load(open(a.old_dims)).items()}
    only = {int(x) for x in a.ids.split(",")} if a.ids else None
    out_dir = a.out or (OUT_DIR if a.write else "/tmp/restamp-out")
    os.makedirs(out_dir, exist_ok=True)

    results = []
    for r in recs:
        rid = r["id"]
        if only and rid not in only: continue
        ow, oh, okb = old_dims[rid]
        dst = os.path.join(out_dir, r["file"])
        if rid not in bad:
            # سليمة: استعادة بالبايت
            shutil.copy(os.path.join(a.old_catalog, r["file"]), dst)
            r["width"], r["height"], r["kb"] = ow, oh, okb
            results.append(dict(id=rid, action="restored", w=ow, h=oh, kb=okb)); continue
        rel = mapping[rid]["keif_v2_source_path"].replace("public/images/", "", 1)
        im = Image.open(os.path.join(a.src, rel)); im.load(); im = im.convert("RGB")
        im = center_fit(im, ow, oh)
        info = {}
        if rid in DESIGN_NO_STAMP or rid in HERO_PRESTAMPED:
            act = "rebuilt-nostamp"
        else:
            fb = face_boxes(im, a.yunet)
            im = stamp_center(im, fb, info); act = "rebuilt-1-center"
        data = encode(im)
        open(dst, "wb").write(data)
        kb = round(len(data) / 1024)
        r["width"], r["height"], r["kb"] = im.width, im.height, kb
        results.append(dict(id=rid, action=act, w=im.width, h=im.height, kb=kb, src=rel, **info))
        print(f"#{rid:>3} {act} {im.width}x{im.height} {kb}KB {info}", flush=True)

    if a.report:
        json.dump(results, open(a.report, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    if a.write and not only:
        body = json.dumps(recs, ensure_ascii=False, indent=2)
        ts = ts[:start] + body + ts[end + 1:]
        ts = re.sub(r'export const CATALOG_VERSION = "[^"]*";',
                    'export const CATALOG_VERSION = "v6 — 2026-09-22 (D164: 139 كما كانت · 175 من الأصل بشعار بيضاوي واحد في الوسط)";', ts)
        open(DATA_TS, "w", encoding="utf-8").write(ts)
        print("updated", DATA_TS)

if __name__ == "__main__":
    main()
