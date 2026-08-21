from PIL import Image, ImageDraw, ImageFont
import os, glob
D="/home/user/keif-v2/public/images/keif"
fs=sorted(glob.glob(D+"/*.webp"))
COLS=5; CW=300; CH=300; LB=44
rows=(len(fs)+COLS-1)//COLS
sheet=Image.new("RGB",(COLS*CW, rows*(CH+LB)),(18,18,18))
d=ImageDraw.Draw(sheet)
try: f=ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",15)
except: f=ImageFont.load_default()
for i,p in enumerate(fs):
    im=Image.open(p).convert("RGB")
    w,h=im.size
    im.thumbnail((CW-8,CH-8))
    r,c=divmod(i,COLS)
    x=c*CW; y=r*(CH+LB)
    sheet.paste(im,(x+(CW-im.width)//2, y+(CH-im.height)//2))
    name=os.path.basename(p).replace("-keif-aldiafa.webp","")
    d.text((x+6,y+CH+3), f"[{i}] {name[:34]}", fill=(255,215,140), font=f)
    d.text((x+6,y+CH+22), f"{w}x{h}  r={w/h:.2f}", fill=(200,200,200), font=f)
    d.rectangle([x,y,x+CW-1,y+CH+LB-1], outline=(70,70,70))
sheet.save("/home/user/audit/sheet15.png")
print(sheet.size, len(fs))
for i,p in enumerate(fs): print(i, os.path.basename(p))
