// فحص بيكسل-بيكسل (D137): يشغَّل من بيئة فيها playwright: `node scripts/pixel-audit.mjs` مع خادم على 3111.
// يرصد على 390px: نص < 11px · فقرات > 60 حرفاً بعرض < 200px · صور محتوى < 60px · أزرار متراصة في مجموعة · تمدد أفقي.
import { chromium } from "playwright";
const pages=["/","/offerings","/services","/portfolio","/about","/contact","/locations","/social","/legal","/qahwajiin-jeddah","/locations/جدة"];
const br=await chromium.launch();
for(const p of pages){
  const pg=await br.newPage({viewport:{width:390,height:844}});
  await pg.goto("http://localhost:3111"+p,{waitUntil:"networkidle"});
  await pg.evaluate(()=>document.querySelectorAll(".rv").forEach(e=>e.classList.add("in")));
  await pg.waitForTimeout(300);
  const r=await pg.evaluate(()=>{
    const vis=e=>{const b=e.getBoundingClientRect();const cs=getComputedStyle(e);return b.width>0&&b.height>0&&cs.visibility!=="hidden"&&cs.display!=="none"&&!e.closest("[hidden]")&&!e.closest("[aria-hidden=true]")&&!e.closest("[data-clone]")};
    const smallText=[...document.querySelectorAll("main p, main li, main b, main small, main h1, main h2, main h3, main a, main span, main figcaption, main summary")].filter(vis).filter(e=>e.childNodes.length&&[...e.childNodes].some(n=>n.nodeType===3&&n.textContent.trim().length>2)).filter(e=>parseFloat(getComputedStyle(e).fontSize)<11).map(e=>e.tagName+"."+e.className.split(" ")[0]+" "+getComputedStyle(e).fontSize+" «"+e.textContent.trim().slice(0,20)+"»");
    const narrowText=[...document.querySelectorAll("main p, main h2, main h3, main .desc")].filter(vis).filter(e=>e.textContent.trim().length>60&&e.getBoundingClientRect().width<200).map(e=>e.tagName+"."+e.className.split(" ")[0]+" w="+Math.round(e.getBoundingClientRect().width));
    const tinyImgs=[...document.querySelectorAll("main img")].filter(vis).filter(i=>!i.closest(".logo,.emblem,.ch-ic,.badges,.trust-badges,.eq")).map(i=>({w:Math.round(i.getBoundingClientRect().width),h:Math.round(i.getBoundingClientRect().height),src:i.currentSrc.replace(/.*url=%2F/,"").slice(0,40)})).filter(x=>x.w<60||x.h<60);
    const stackedBtns=[...document.querySelectorAll("main .cta, main .acts, main .actions")].filter(vis).map(g=>{const bs=[...g.querizerySelectorAll?.(".btn")||g.querySelectorAll(".btn")].filter(vis);const rows=new Set(bs.map(b=>Math.round(b.getBoundingClientRect().top)));return {cls:g.className.split(" ")[0],btns:bs.length,rows:rows.size}}).filter(x=>x.btns>1&&x.rows>1);
    const overflow=document.documentElement.scrollWidth-document.documentElement.clientWidth;
    return {smallText:smallText.slice(0,8),smallCount:smallText.length,narrowText:narrowText.slice(0,6),tinyImgs:tinyImgs.slice(0,6),tinyCount:tinyImgs.length,stackedBtns,overflow};
  });
  console.log("\n=== "+p, JSON.stringify(r,null,0).slice(0,900));
  await pg.close();
}
await br.close();
