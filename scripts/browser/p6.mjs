import { chromium } from "playwright";
import { readFileSync } from "fs";
const axe = readFileSync("/tmp/pw/node_modules/axe-core/axe.min.js","utf8");
const base="http://localhost:3111";
const pages=[["home","/"],["qahwajiin-jeddah","/qahwajiin-jeddah"],["contact","/contact"],["portfolio","/portfolio"],["services","/services"]];
const vps=[390,768,1024,1440];
const br=await chromium.launch();
let fails=0;
for(const [name,path] of pages){
  for(const w of vps){
    const pg=await br.newPage({viewport:{width:w,height:w<800?844:900}});
    const errs=[]; pg.on("pageerror",e=>errs.push(e.message)); pg.on("console",m=>{if(m.type()==="error")errs.push(m.text())});
    const r=await pg.goto(base+path,{waitUntil:"networkidle"});
    const overflow=await pg.evaluate(()=>document.documentElement.scrollWidth-document.documentElement.clientWidth);
    const h1=await pg.locator("h1").count();
    const secs=await pg.locator("main section").count();
    let ax="";
    if(w===390||w===1440){await pg.addScriptTag({content:axe}); const res=await pg.evaluate(()=>axe.run({runOnly:["wcag2a","wcag2aa"]})); ax=` axe=${res.violations.length}`+(res.violations.length?" ["+res.violations.map(v=>v.id+"x"+v.nodes.length).join(",")+"]":"");}
    if(w===390||w===1440){await pg.screenshot({path:`docs/shots/phase-6/${name}-${w}.png`,fullPage:w===1440?false:true});}
    const bad=r.status()!==200||overflow>0||h1!==1||errs.length||ax.includes("[");
    if(bad)fails++;
    console.log(`${bad?"❌":"✅"} ${path} @${w} status=${r.status()} h1=${h1} sections=${secs} overflowX=${overflow}px errors=${errs.length}${ax}`);
    if(errs.length)console.log("   ",errs.slice(0,3).join(" | ").slice(0,300));
    await pg.close();
  }
}
await br.close(); console.log("fails:",fails);
