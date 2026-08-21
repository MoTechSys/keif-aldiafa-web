from PIL import Image
import sys
# hero top area + showcase + equipment
jobs=[("s01.png",(0,0,780,1100),"z_hero"),
      ("s05.png",(0,0,780,700),"z_showcase"),
      ("s03.png",(0,780,780,1100),"z_equip_a"),
      ("s04.png",(0,0,780,180),"z_equip_b")]
for f,box,name in jobs:
    im=Image.open("/home/user/audit/shots/"+f)
    c=im.crop(box)
    c=c.resize((c.width,c.height),Image.LANCZOS)
    c.save(f"/home/user/audit/{name}.png")
    print(name,c.size)
