import asyncio, sys, json, os
from playwright.async_api import async_playwright

SLUG = sys.argv[1] if len(sys.argv)>1 else "sababin-qahwa-jeddah"
OUT  = sys.argv[2] if len(sys.argv)>2 else "/home/user/audit/L"
os.makedirs(OUT, exist_ok=True)

async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(args=["--no-sandbox"])
        ctx = await b.new_context(
            viewport={"width":390,"height":844}, device_scale_factor=2,
            is_mobile=True, has_touch=True, locale="ar-SA",
            user_agent="Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1")
        pg = await ctx.new_page()
        await pg.goto(f"http://localhost:3000/{SLUG}", wait_until="networkidle", timeout=90000)
        await pg.wait_for_timeout(1200)
        H = await pg.evaluate("document.body.scrollHeight")
        # pre-scroll to trigger every reveal
        y=0
        while y < H:
            await pg.evaluate(f"window.scrollTo(0,{y})"); await pg.wait_for_timeout(240)
            y += 700
            H = await pg.evaluate("document.body.scrollHeight")
        await pg.evaluate("window.scrollTo(0,0)"); await pg.wait_for_timeout(900)
        # decode-wait: القياس السابق أبلغ عن 11 صورة معطوبة، وتحقّقت بـcurl
        # فكانت كلها 200 — كانت لا تزال قيد التحميل من مُحسِّن الصور لحظة
        # القياس. الآن ننتظر فكّ ترميز كل صورة فعلياً قبل الحكم.
        try:
            await pg.wait_for_function(
                "() => [...document.images].every(i => i.complete)", timeout=45000)
        except Exception as e:
            print("decode-wait timeout:", type(e).__name__)
        await pg.wait_for_timeout(700)

        m = await pg.evaluate("""(()=>{
          const im=[...document.images];
          return {
            h: document.body.scrollHeight,
            docW: document.documentElement.scrollWidth,
            imgs: im.length,
            broken: im.filter(i=>!i.complete||i.naturalWidth===0).map(i=>i.currentSrc||i.src),
            invis: im.filter(i=>i.getBoundingClientRect().width<2).map(i=>i.src),
            sections: document.querySelectorAll('section').length,
            wa: [...document.querySelectorAll('a[href*="wa.me"]')].length,
            tel: [...document.querySelectorAll('a[href^="tel:"]')].length,
            h1: document.querySelector('h1')?.getBoundingClientRect().height,
            h1txt: document.querySelector('h1')?.innerText,
            words: document.body.innerText.trim().split(/\\s+/).length,
            price: /سعر|ريال|باق/.test(document.body.innerText),
            overflow: [...document.querySelectorAll('*')].filter(e=>e.scrollWidth>e.clientWidth+2)
                        .slice(0,8).map(e=>e.className+' '+e.scrollWidth+'>'+e.clientWidth)
          };
        })()""")
        print(json.dumps(m, ensure_ascii=False, indent=1))
        print("screens:", round(m["h"]/844,1))

        # slices
        n=0; y=0; STEP=int(844*0.92)
        while y < m["h"] and n < 22:
            await pg.evaluate(f"window.scrollTo(0,{y})"); await pg.wait_for_timeout(420)
            n+=1
            await pg.screenshot(path=f"{OUT}/s{n:02d}.png")
            y += STEP
        print("slices", n)
        await b.close()
asyncio.run(main())
