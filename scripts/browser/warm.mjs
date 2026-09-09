import fs from "node:fs";
const B="http://localhost:3111"; const paths=fs.readFileSync("/tmp/all-paths.txt","utf8").trim().split("\n");
let n=0;
for(const p of paths){ const html=await (await fetch(B+p)).text();
  const urls=new Set([...html.matchAll(/\/_next\/image\?url=[^"'\s,\\]+/g)].map(m=>m[0].replace(/&amp;/g,"&")));
  const arr=[...urls]; for(let i=0;i<arr.length;i+=6){ await Promise.all(arr.slice(i,i+6).map(u=>fetch(B+u).then(r=>r.arrayBuffer()).catch(()=>{}))); n+=Math.min(6,arr.length-i);} }
console.log("warmed",n);
