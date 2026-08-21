import asyncio, json
from playwright.async_api import async_playwright
URL="http://localhost:3000/sababin-qahwa-jeddah"
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(args=["--no-sandbox"])
        c=await b.new_context(viewport={"width":390,"height":844},device_scale_factor=2,is_mobile=True,has_touch=True,locale="ar-SA")
        pg=await c.new_page(); await pg.goto(URL,wait_until="networkidle",timeout=90000)
        await pg.wait_for_timeout(1500)
        h=await pg.evaluate("document.documentElement.scrollHeight"); y=0
        while y<h:
            await pg.evaluate(f"window.scrollTo(0,{y})"); await pg.wait_for_timeout(120); y+=500
            h=await pg.evaluate("document.documentElement.scrollHeight")
        await pg.evaluate("window.scrollTo(0,0)"); await pg.wait_for_timeout(800)
        r=await pg.evaluate("""()=>{
          const out=[];
          const push=(label,el)=>{const b=el.getBoundingClientRect();out.push({label,top:Math.round(b.top+scrollY),h:Math.round(b.height),screens:+(b.height/844).toFixed(2)})};
          document.querySelectorAll('header,footer').forEach((e,i)=>push('LAYOUT '+e.tagName,e));
          [...document.querySelectorAll('.luxe > *')].forEach((e,i)=>{
            const txt=(e.querySelector('h1,h2,summary')||{}).innerText||e.tagName;
            push(`${i}. ${e.tagName}.${(e.className||'').toString().slice(0,22)} :: ${String(txt).slice(0,34).replace(/\\n/g,' ')}`,e);
          });
          return {rows:out, total:document.documentElement.scrollHeight};
        }""")
        print("TOTAL",r["total"],"=",round(r["total"]/844,2),"screens\n")
        for x in r["rows"]:
            bar="#"*int(x["h"]/60)
            print(f'{x["h"]:>5}px {x["screens"]:>5} {bar:<24} @{x["top"]:>5} {x["label"]}')
        await b.close()
asyncio.run(main())
