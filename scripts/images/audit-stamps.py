#!/usr/bin/env python3
"""
audit-stamps.py — فحص آلي مقاس لصور الكتالوج ضد أصولها (D165):
  لكل صورة: (1) عدد نسخ الشعار البيضاوي (مطابقة قالب متعددة المقاسات على خريطة الفرق
  بين الصورة وأصلها النظيف) · (2) الوجوه (YuNet) · (3) هل يغطي أي شعار وجهاً.

الاستعمال:
    python3 scripts/images/audit-stamps.py --src <keif-v2>/public/images --catalog public/images/catalog \
        --yunet /tmp/yunet.onnx --out /tmp/audit.json [--ids 5,95]
"""
from __future__ import annotations
import argparse, csv, json, os
import cv2, numpy as np
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
DATA_TS = os.path.join(ROOT, "src", "lib", "imageCatalog.data.ts")
MAPPING = os.path.join(ROOT, "docs", "reports", "2026-09-22-image-sources-mapping.csv")
LOGO = os.path.join(ROOT, "scripts", "images", "assets", "wm-oval.png")


def read_catalog():
    ts = open(DATA_TS, encoding="utf-8").read()
    s = ts.index("= [", ts.index("export const CATALOG")) + 2
    e = ts.rindex("]")
    return json.loads(ts[s:e + 1])


def align(o: Image.Image, s: Image.Image) -> Image.Image:
    """الأصل بنفس هندسة صورة الكتالوج (تحجيم، أو قصّ مركزي/مطابقة قالب إن اختلفت النسبة)."""
    if abs(o.width / o.height - s.width / s.height) < 0.02:
        return s.resize(o.size, Image.LANCZOS)
    sc = o.height / s.height if o.width / o.height < s.width / s.height else o.width / s.width
    S = s.resize((max(o.width, round(s.width * sc)), max(o.height, round(s.height * sc))), Image.LANCZOS)
    og = np.asarray(o.convert("L")); Sg = np.asarray(S.convert("L"))
    res = cv2.matchTemplate(Sg, og, cv2.TM_CCOEFF_NORMED); _, _, _, loc = cv2.minMaxLoc(res)
    return S.crop((loc[0], loc[1], loc[0] + o.width, loc[1] + o.height))


def logo_mask_template(w: int):
    lg = Image.open(LOGO).convert("RGBA"); lg = lg.crop(lg.getbbox())
    lg = lg.resize((w, max(1, int(w * lg.height / lg.width))), Image.LANCZOS)
    a = np.asarray(lg.getchannel("A"), dtype=np.float32) / 255.0
    return a


def count_stamps(o: Image.Image, s: Image.Image):
    """يعيد قائمة الشعارات المكتشفة [(x,y,w,h,score)] على خريطة الفرق."""
    W, H = o.size
    O = np.asarray(o, dtype=np.float32); S = np.asarray(s, dtype=np.float32)
    diff = np.abs(O - S).sum(axis=2)
    diff = cv2.GaussianBlur(diff, (0, 0), 2)
    m = (diff > 40).astype(np.float32)
    if m.mean() < 0.003:
        return []
    found = []
    for frac in np.arange(0.22, 0.62, 0.03):
        tw = int(W * frac)
        if tw < 30: continue
        t = logo_mask_template(tw)
        if t.shape[0] >= H or t.shape[1] >= W: continue
        # نطابق شكل الشعار (ألفا) مع قناع الفرق: TM_CCOEFF_NORMED
        res = cv2.matchTemplate(m, t, cv2.TM_CCOEFF_NORMED)
        thr = 0.50
        ys, xs = np.where(res >= thr)
        for y, x in zip(ys, xs):
            found.append((int(x), int(y), t.shape[1], t.shape[0], float(res[y, x])))
    # NMS
    found.sort(key=lambda b: -b[4]); keep = []
    for b in found:
        ok = True
        for k in keep:
            ix = max(0, min(b[0] + b[2], k[0] + k[2]) - max(b[0], k[0])); iy = max(0, min(b[1] + b[3], k[1] + k[3]) - max(b[1], k[1]))
            inter = ix * iy; smaller = min(b[2] * b[3], k[2] * k[3])
            if smaller and inter / smaller > 0.35: ok = False; break
        if ok: keep.append(b)
    return keep


def faces(det, o: Image.Image):
    im = cv2.cvtColor(np.asarray(o.convert("RGB")), cv2.COLOR_RGB2BGR)
    h, w = im.shape[:2]; det.setInputSize((w, h)); _, f = det.detect(im)
    if f is None: return []
    return [(int(x), int(y), int(bw), int(bh), float(sc)) for x, y, bw, bh, *_, sc in f if sc >= 0.5]


def overlap(a, b):
    ix = max(0, min(a[0] + a[2], b[0] + b[2]) - max(a[0], b[0])); iy = max(0, min(a[1] + a[3], b[1] + b[3]) - max(a[1], b[1]))
    return ix * iy / max(1, b[2] * b[3])   # نسبة تغطية الوجه


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--src", required=True); ap.add_argument("--catalog", required=True)
    ap.add_argument("--yunet", required=True); ap.add_argument("--out", required=True); ap.add_argument("--ids")
    a = ap.parse_args()
    det = cv2.FaceDetectorYN.create(a.yunet, "", (320, 320), 0.5, 0.3, 5000)
    recs = read_catalog(); mapping = {int(r["id"]): r for r in csv.DictReader(open(MAPPING, encoding="utf-8"))}
    only = {int(x) for x in a.ids.split(",")} if a.ids else None
    out = []
    for r in recs:
        if only and r["id"] not in only: continue
        o = Image.open(os.path.join(a.catalog, r["file"])).convert("RGB")
        rel = mapping[r["id"]]["keif_v2_source_path"].replace("public/images/", "", 1)
        s = align(o, Image.open(os.path.join(a.src, rel)).convert("RGB"))
        st = count_stamps(o, s)
        # الوجوه على الأصل النظيف (بلا شعار يخفيها)
        fc = faces(det, s)
        covered = [(f, max((overlap(b, f) for b in st), default=0.0)) for f in fc]
        face_hit = [f for f, c in covered if c > 0.25]
        out.append(dict(id=r["id"], file=r["file"], w=o.width, h=o.height, stamps=len(st),
                        stamp_boxes=[(x, y, w, h, round(sc, 2)) for x, y, w, h, sc in st],
                        faces=len(fc), faces_covered=len(face_hit), face_boxes=[(x, y, w, h) for x, y, w, h, _ in fc]))
        print(f"#{r['id']:>3} stamps={len(st)} faces={len(fc)} covered={len(face_hit)}", flush=True)
    json.dump(out, open(a.out, "w", encoding="utf-8"), ensure_ascii=False, indent=1)


if __name__ == "__main__":
    main()
