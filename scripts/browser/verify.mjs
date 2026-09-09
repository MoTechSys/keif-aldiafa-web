import { chromium } from "playwright";
const B="http://localhost:3111";
const br=await chromium.launch(); const pg=await br.newPage({viewport:{width:390,height:844},deviceScaleFactor:2});
await pg.goto(B+"/services",{waitUntil:"networkidle"});
const card=await pg.evaluate(()=>{const c=document.querySelector(".card");const t=c.querySelector(".txt").getBoundingClientRect();const g=c.querryselector?0:c.querySelector(".gal figure")?.getBoundingClientRect();const acts=[...c.querySelectorAll(".acts .btn")].map(b=>b.getBoundingClientRect().top);return{txtW:Math.round(t.width),galCell:g?Math.round(g.width):null,btnTops:acts.map(Math.round)}});
await pg.goto(B+"/contact",{waitUntil:"networkidle"});
const icons=await pg.evaluate(()=>[...document.querySelectorAll(".chlist img")].map(i=>({w:i.naturalWidth,ok:i.complete&&i.naturalWidth>0})));
console.log(JSON.stringify({card,icons:{n:icons.length,ok:icons.filter(i=>i.ok).length}}));
await br.close();
