/**
 * browser-sweep.mjs — فحص المتصفح الشامل (المرحلة 6 — D146):
 *   كل مسار في sitemap.xml × 4 مقاسات (390/768/1024/1440): status 200 · h1 واحد · لا تمرير أفقي ·
 *   0 أخطاء console/pageerror · 0 استجابات ≥400 (عدا gtag) · 0 صور غير كسولة مكسورة · axe WCAG 2.1 A/AA @390.
 * الاستعمال:
 *   curl -s http://localhost:3111/sitemap.xml | grep -o "<loc>[^<]*</loc>" | sed 's#<loc>##;s#</loc>##;s#https\?://[^/]*##' | sort -u > /tmp/all-paths.txt
 *   node scripts/browser-sweep.mjs            # يكتب التقدّم في /tmp/pall.log
 * يحتاج playwright + axe-core (في الساندبوكس: /tmp/pw/node_modules — رابط رمزي في node_modules/).
 * ملاحظة مقاسة: `brokenImgs` قد يُعطي إيجابيات كاذبة على خادم بلا CDN (محسّن الصور بارد) —
 *   أعد فحص المسارات المعلَّمة بانتظار حدث load للصور (انظر recheck في docs/reports/2026-09-09-phase-6-performance.md).
 */
import { chromium } from "playwright"; import fs from "node:fs";
const B="http://localhost:3111"; const axe=fs.readFileSync(new URL("../node_modules/axe-core/axe.min.js",import.meta.url),"utf8");
const paths=fs.readFileSync(process.env.PATHS_FILE||"/tmp/all-paths.txt","utf8").trim().split("\n");
const vps=[390,768,1024,1440]; const br=await chromium.launch(); let fails=0, axeTotal=0; const out=[]; const log=(s)=>{out.push(s);fs.appendFileSync("/tmp/pall.log",s+"\n");};
for(const p of paths){ const dec=decodeURIComponent(p);
  for(const w of vps){
    const pg=await br.newPage({viewport:{width:w,height:900}});
    const errs=[]; pg.on("pageerror",e=>errs.push(e.message)); pg.on("console",m=>{if(m.type()==="error")errs.push(m.text())});
    const bad=[]; pg.on("response",r=>{if(r.status()>=400&&!r.url().includes("googletagmanager"))bad.push(r.status()+" "+r.url().slice(0,80))});
    const r=await pg.goto(B+p,{waitUntil:"load",timeout:60000}); await pg.waitForTimeout(800);
    const m=await pg.evaluate(()=>({h1:document.querySelectorAll("h1").length,ox:document.documentElement.scrollWidth-innerWidth,imgs:[...document.images].filter(i=>i.loading!=="lazy"&&!i.complete||(i.complete&&i.naturalWidth===0&&i.getBoundingClientRect().width>0&&!i.closest("noscript"))).length}));
    let ax=""; if(w===390){await pg.addScriptTag({content:axe}); const res=await pg.evaluate(()=>axe.run({runOnly:["wcag2a","wcag2aa"]})); axeTotal+=res.violations.length; ax=` axe=${res.violations.length}`+(res.violations.length?" ["+res.violations.map(v=>v.id+"x"+v.nodes.length).join(",")+"]":"");}
    const ok=r.status()===200&&m.h1===1&&m.ox<=0&&!errs.length&&!bad.length&&m.imgs===0&&!ax.includes("[");
    if(!ok)fails++; if(!ok||w===390) log(`${ok?"✅":"❌"} ${dec} @${w} status=${r.status()} h1=${m.h1} ox=${m.ox} errs=${errs.length} bad=${bad.length} brokenImgs=${m.imgs}${ax}${errs.length?" "+errs[0].slice(0,100):""}${bad.length?" "+bad[0]:""}`);
    await pg.close();
  }
}
await br.close(); console.log(out.join("\n")); console.log(`\n${paths.length*vps.length} checks · fails ${fails} · axe violations ${axeTotal}`);
