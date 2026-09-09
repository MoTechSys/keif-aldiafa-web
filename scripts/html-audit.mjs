// فحص HTML الناتج لكل مسار في sitemap: canonical · robots · JSON-LD صالح · h1 واحد · title/desc · og:image · hreflang
import fs from "node:fs";
const B="http://localhost:3111"; const SITE="https://keifaldiafa.com";
const paths=fs.readFileSync(process.env.PATHS_FILE||"/tmp/all-paths.txt","utf8").trim().split("\n");
let fails=0; const rows=[];
for(const p of paths){
  const r=await fetch(B+p); const html=await r.text(); const dec=decodeURIComponent(p);
  const g=(re)=>{const m=html.match(re);return m?m[1]:null};
  const title=g(/<title>([^<]*)<\/title>/); const desc=g(/<meta name="description" content="([^"]*)"/);
  const canon=g(/<link rel="canonical" href="([^"]*)"/); const robots=g(/<meta name="robots" content="([^"]*)"/);
  const og=g(/<meta property="og:image" content="([^"]*)"/);
  const h1=(html.match(/<h1[\s>]/g)||[]).length;
  const lds=[...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m=>m[1]);
  let ldOk=true, types=[]; for(const s of lds){try{const j=JSON.parse(s);types.push(j["@type"]||(j["@graph"]?"graph":"?"));}catch{ldOk=false}}
  const expCanon=SITE+(dec==="/"?"":dec);
  const canonOk=canon && decodeURIComponent(canon).replace(/\/$/,"")===expCanon.replace(/\/$/,"");
  const probs=[];
  if(r.status!==200)probs.push("status="+r.status); if(!title)probs.push("no title"); if(!desc)probs.push("no desc");
  if(!canonOk)probs.push("canonical="+canon); if(robots&&/noindex/.test(robots))probs.push("noindex"); if(h1!==1)probs.push("h1="+h1);
  if(!ldOk)probs.push("bad JSON-LD"); if(!lds.length)probs.push("no JSON-LD"); if(!og)probs.push("no og:image");
  if(!/lang="ar"/.test(html)||!/dir="rtl"/.test(html))probs.push("lang/dir");
  if(probs.length)fails++;
  rows.push(`${probs.length?"❌":"✅"} ${dec} · title=${title?.length} · desc=${desc?.length} · ld=[${types.join(",")}]${probs.length?" · "+probs.join(" · "):""}`);
}
console.log(rows.join("\n")); console.log(`\n${paths.length} paths · fails ${fails}`);
