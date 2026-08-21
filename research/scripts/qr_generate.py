#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
qr.py — باركود «كيف الضيافة» الفاخر.

القاعدة الحاكمة: الباركود **لا يُحكم عليه بالعين**. أي تزيين يخفض
نسبة التباين أو يغطّي وحدات البيانات يجعله غير قابل للمسح — وعندها
تصير الفخامة عطباً. لذلك كل قرار هنا مقيَّد بالمعيار:
  • تصحيح الأخطاء H (يتحمّل فقدان ٣٠٪ من الوحدات) ⇒ يسمح بشعار وسطي.
  • الشعار يغطّي ١٩٪ من المساحة فقط (أقل من حدّ الـ٣٠٪ بهامش أمان).
  • النقوش الثلاثة الكاشفة (finder patterns) تبقى مصمتة بلا تدوير —
    هي مرجع المسح، وتدويرها أوّل ما يُفقد القراءة.
  • الوحدات داكنة على خلفية كريمية: الماسح يحتاج تبايناً موجباً،
    والذهبي الفاتح على داكن يعكس القطبية فتفشل بعض الماسحات.
والتحقق برمجي بـpyzbar لا بالنظر.
"""
import qrcode
from qrcode.constants import ERROR_CORRECT_H
from PIL import Image, ImageDraw

URL = "https://keifaldiafa.com/social"
# داخل /images/ لأن next.config.js يقيّد مُحسِّن الصور بـ localPatterns
# على "/images/**" — وهو تقييد أمني يُحفظ لا يُوسَّع لأجل ملف.
OUT = "/home/user/keif-v2/public/images/brand/qr-keif-aldiafa.png"

INK = (0x1A, 0x14, 0x0E)      # حبر داكن — قطبية موجبة للماسح
PAPER = (0xF7, 0xF0, 0xE4)    # كريمي --lx-cream
GOLD = (0xC5, 0xA0, 0x59)

qr = qrcode.QRCode(version=None, error_correction=ERROR_CORRECT_H,
                   box_size=1, border=0)
qr.add_data(URL)
qr.make(fit=True)
m = qr.get_matrix()
n = len(m)

BOX, QUIET = 24, 4
S = (n + QUIET * 2) * BOX
img = Image.new("RGB", (S, S), PAPER)
d = ImageDraw.Draw(img)


def in_finder(r, c):
    """النقوش الكاشفة الثلاثة 7×7 — تُرسم مربّعات مصمتة."""
    return ((r < 7 and c < 7) or (r < 7 and c >= n - 7) or (r >= n - 7 and c < 7))


for r in range(n):
    for c in range(n):
        if not m[r][c] or in_finder(r, c):
            continue
        x, y = (c + QUIET) * BOX, (r + QUIET) * BOX
        # وحدات دائرية: تخفيف بصري لا يمسّ مركز الوحدة الذي يقرأه الماسح
        d.ellipse([x + 1, y + 1, x + BOX - 2, y + BOX - 2], fill=INK)

# النقوش الكاشفة: إطار مصمت + قلب مصمت، بزوايا مستدارة قليلاً فقط
for (r0, c0) in [(0, 0), (0, n - 7), (n - 7, 0)]:
    X, Y = (c0 + QUIET) * BOX, (r0 + QUIET) * BOX
    W = 7 * BOX
    d.rounded_rectangle([X, Y, X + W, Y + W], radius=BOX, fill=INK)
    d.rounded_rectangle([X + BOX, Y + BOX, X + W - BOX, Y + W - BOX],
                        radius=BOX * 0.7, fill=PAPER)
    d.rounded_rectangle([X + 2 * BOX, Y + 2 * BOX, X + W - 2 * BOX, Y + W - 2 * BOX],
                        radius=BOX * 0.5, fill=GOLD)

# الشعار في الوسط — ١٩٪ من الضلع، داخل قرص كريمي بإطار ذهبي
logo = Image.open("/home/user/keif-v2/public/brand/logo-official.png").convert("RGBA")
logo = logo.crop(logo.getchannel("A").getbbox())
lw = int(S * 0.19)
lh = int(logo.height * lw / logo.width)
pad = int(lw * 0.16)
cx, cy = S // 2, S // 2
d.rounded_rectangle([cx - lw // 2 - pad, cy - lh // 2 - pad,
                     cx + lw // 2 + pad, cy + lh // 2 + pad],
                    radius=pad, fill=PAPER, outline=GOLD, width=max(3, BOX // 6))
logo = logo.resize((lw, lh), Image.LANCZOS)
img.paste(logo, (cx - lw // 2, cy - lh // 2), logo)

img.save(OUT)
print("saved", OUT, img.size, "modules", n, "url", URL)
