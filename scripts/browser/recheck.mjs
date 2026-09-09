import { chromium } from "playwright"; import fs from "node:fs";
const paths=fs.readFileSync("/tmp/flagged.txt","utf8").trim().split("\n"); const br=await chromium.launch(); let bad=0;
for(const p of paths){ for(const w of [390,1440]){
  const pg=await br.newPage({viewport:{width:w,height:900}});
  await pg.goto("http://localhost:3111"+encodeURI(p),{waitUntil:"networkidle",timeout:90000});
  // انتظر اكتمال كل الصور غير الكسولة فعلياً (decode) بدل عدّ ثابت
  const r=await pg.evaluate(async()=>{const eager=[...document.images].filter(i=>i.loading!=="lazy");await Promise.all(eager.map(i=>i.complete?Promise.resolve():new Promise(res=>{i.addEventListener("load",res,{once:true});i.addEventListener("error",res,{once:true});setTimeout(res,15000)})));return {eager:eager.length,broken:eager.filter(i=>!(i.complete&&i.naturalWidth>0)).map(i=>decodeURIComponent(i.currentSrc||i.src).slice(0,120))}});
  if(r.broken.length)bad++; console.log(`${r.broken.length?"❌":"✅"} ${p} @${w} eager=${r.eager} broken=${r.broken.length} ${r.broken.join(" | ")}`); await pg.close(); } }
await br.close(); console.log("recheck fails",bad);
