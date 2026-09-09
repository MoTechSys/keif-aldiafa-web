import { chromium } from "playwright";
const B="http://localhost:3111";
const br=await chromium.launch(); 
// 1) eq grid on local page (390 + 1440) + element shot
for (const w of [390,1440]) {
  const pg=await br.newPage({viewport:{width:w,height:900},deviceScaleFactor:1});
  await pg.goto(B+"/qahwajiin-jeddah",{waitUntil:"networkidle"});
  const eq=await pg.evaluate(()=>{const e=document.querySelector(".eq");e.scrollIntoView();const figs=[...e.querySelectorAll("figure")];const cols=getComputedStyle(e).gridTemplateColumns.split(" ").length;const imgs=figs.map(f=>{const i=f.querySelector("img");return{w:Math.round(i.getBoundingClientRect().width),ok:i.complete&&i.naturalWidth>0}});return{cols,n:figs.length,imgs}});
  console.log(w,"eq",JSON.stringify(eq));
  await new Promise(r=>setTimeout(r,800));
  await pg.locator(".eq").screenshot({path:`docs/shots/phase-6/eq-${w}.png`});
  await pg.close();
}
// 2) contact form service options + portfolio filters functional
const pg=await br.newPage({viewport:{width:390,height:844}});
await pg.goto(B+"/contact",{waitUntil:"networkidle"});
const opts=await pg.evaluate(()=>[...document.querySelectorAll("#svcSel option")].length);
await pg.goto(B+"/contact?service=hosts",{waitUntil:"networkidle"});
const pre=await pg.evaluate(()=>document.querySelector("#svcSel").value);
console.log("contact options",opts,"prefill",pre);
await pg.goto(B+"/portfolio",{waitUntil:"networkidle"});
const before=await pg.textContent("#pcount");
await pg.click('button[data-f="government"]');
await pg.waitForTimeout(300);
const after=await pg.textContent("#pcount"); const url=pg.url();
console.log("portfolio",before,"→",after,url);
// 3) gtag deferral: no gtag script before load; present after ~3s idle
await pg.goto(B+"/",{waitUntil:"load"});
const early=await pg.evaluate(()=>!!document.querySelector('script[src*="gtag/js"]'));
await pg.waitForTimeout(3500);
const late=await pg.evaluate(()=>!!document.querySelector('script[src*="gtag/js"]'));
const dl=await pg.evaluate(()=>window.dataLayer.length);
console.log("gtag early",early,"late",late,"dataLayer",dl);
await br.close();
