import { chromium } from "playwright"; import fs from "node:fs";
const axe=fs.readFileSync(new URL("../../node_modules/axe-core/axe.min.js",import.meta.url),"utf8"); const br=await chromium.launch();
for(const w of [390,768,1024,1440]){
  const pg=await br.newPage({viewport:{width:w,height:900}}); const errs=[]; pg.on("pageerror",e=>errs.push(e.message)); pg.on("console",m=>{if(m.type()==="error")errs.push(m.text())});
  await pg.goto("http://localhost:3111/links",{waitUntil:"networkidle"}); await pg.waitForTimeout(500);
  const m=await pg.evaluate(()=>({h1:document.querySelectorAll("h1").length,ox:document.documentElement.scrollWidth-innerWidth,ch:document.querySelectorAll(".ch").length,icons:[...document.querySelectorAll(".chlist img")].filter(i=>i.complete&&i.naturalWidth>0).length,cols:getComputedStyle(document.querySelector(".chlist")).gridTemplateColumns.split(" ").length,hdr:!!document.querySelector(".v7-header"),fab:!!document.querySelector(".fab")}));
  await pg.addScriptTag({content:axe}); const ax=await pg.evaluate(()=>axe.run({runOnly:["wcag2a","wcag2aa"]}));
  // omnitrix: click first card, expect .fire then navigation blocked (we intercept)
  await pg.route("**/wa.me/**",r=>r.abort()); await pg.route("https://wa.me/**",r=>r.abort());
  const fire=await pg.evaluate(()=>new Promise(res=>{const a=document.querySelector(".ch");a.addEventListener("click",()=>setTimeout(()=>res(a.classList.contains("fire")&&document.body.classList.contains("ch-flash")),50),{once:true});a.click();}));
  console.log(`@${w}`,JSON.stringify(m),"axe",ax.violations.length,"errs",errs.length,"fire",fire);
  if(w===390||w===1440) await pg.screenshot({path:`docs/shots/phase-6/links-${w}.png`,fullPage:true});
  await pg.close();
}
await br.close();
