import re,json,glob,collections
APP='.next/server/app'
cat=json.loads(re.search(r'export const CATALOG[^=]*=\s*(\[[\s\S]*?\]);\s*$',open('src/lib/imageCatalog.data.ts',encoding='utf-8').read(),re.M).group(1))
byfile={r['file']:r for r in cat}
pages={}
for f in glob.glob(APP+'/**/*.html',recursive=True):
    rel=f[len(APP)+1:-5]
    if rel.startswith('_'): continue
    pages['/' if rel=='index' else '/'+rel]=open(f,encoding='utf-8').read()
use=collections.defaultdict(set)   # file -> pages
perpage={}
for p,s in pages.items():
    files=set(re.findall(r'/images/catalog/([^"?&\s]+\.webp)',s))
    perpage[p]=files
    for f in files: use[f].add(p)
used=set(use); allf=set(byfile)
unused=allf-used
print("catalog records:",len(cat),"· used somewhere:",len(used),"· NEVER used:",len(unused))
tier=collections.Counter(byfile[f]['tier'] for f in unused); print("  unused by tier:",dict(sorted(tier.items())))
pub=collections.Counter(byfile[f]['publish'] for f in unused); print("  unused by publish:",dict(pub))
print("  unused tier-1/2 (strong proof not shown):")
for f in sorted(unused,key=lambda x:(byfile[x]['tier'],byfile[x]['id'])):
    r=byfile[f]
    if r['tier']<=2: print(f"    #{r['id']} t{r['tier']} {r['entity'][:40]} | {r['title'][:50]} | pages:{r['pages']}")
print("\n== most reused images (appear on N pages) ==")
for f,ps in sorted(use.items(),key=lambda x:-len(x[1]))[:12]:
    r=byfile[f]; print(f"  {len(ps):2d} pages  #{r['id']} t{r['tier']} {r['title'][:55]}")
print("\n== images per page & tier mix ==")
for p in ['/','/qahwajiin-jeddah','/qahwajiin-riyadh','/sababin-qahwa-jeddah','/diyafa-munasabat-abha','/locations/جدة','/mubashirin-qahwa-jeddah','/services','/offerings','/portfolio','/about','/contact']:
    fs=perpage[p]; t=collections.Counter(byfile[f]['tier'] for f in fs if f in byfile); d=sum(1 for f in fs if f in byfile and byfile[f]['publish']=='decorative')
    print(f"  {p}: {len(fs)} imgs · tiers {dict(sorted(t.items()))} · decorative {d}")
# does the catalog 'pages' targeting agree with actual placement?
print("\n== catalog says image targets page X but page X doesn't show it (publish=yes only) ==")
miss=collections.Counter(); tot=collections.Counter()
for r in cat:
    if r['publish']!='yes': continue
    for tp in r['pages']:
        if tp in pages:
            tot[tp]+=1
            if r['file'] not in perpage[tp]: miss[tp]+=1
for tp in sorted(tot,key=lambda x:-miss[x])[:12]: print(f"  {tp}: targeted {tot[tp]} · shown {tot[tp]-miss[tp]} · missing {miss[tp]}")
# images shown on a page the catalog does NOT target (borrowed)
print("\n== images shown on pages NOT in their catalog 'pages' (borrowed) ==")
bor=collections.Counter(); borex=collections.defaultdict(list)
for p,fs in perpage.items():
    for f in fs:
        r=byfile.get(f)
        if r and p not in r['pages'] and r['publish']=='yes': bor[p]+=1; borex[p].append(r['id'])
for p in sorted(bor,key=lambda x:-bor[x])[:10]: print(f"  {p}: {bor[p]} borrowed · e.g. {sorted(borex[p])[:6]}")
# same-service sister pages: how many images identical
print("\n== sister pages sharing images (qahwajiin-* set overlap) ==")
sis=[p for p in pages if p.startswith('/qahwajiin-')]
import itertools
ov=[]
for a,b in itertools.combinations(sis,2):
    A,B=perpage[a],perpage[b]; ov.append(len(A&B)/max(len(A|B),1))
print(f"  {len(sis)} pages · avg Jaccard image overlap {sum(ov)/len(ov):.0%} · min {min(ov):.0%} max {max(ov):.0%}")
# hero images: same across sisters?
print("\n== hero (first catalog img in <picture>) per svc page ==")
for p in sorted(sis):
    m=re.search(r'<picture>.*?/images/catalog/([^"?&]+\.webp)',pages[p],re.S); r=byfile.get(m.group(1)) if m else None
    print(f"  {p}: #{r['id']} t{r['tier']} {r['title'][:45]}" if r else f"  {p}: -")
# alt quality
print("\n== alt attributes on catalog imgs: empty / duplicates within page ==")
emp=0;dup=0
for p,s in pages.items():
    alts=re.findall(r'<img[^>]*src="[^"]*catalog[^"]*"[^>]*alt="([^"]*)"',s)+re.findall(r'<img[^>]*alt="([^"]*)"[^>]*src="[^"]*catalog[^"]*"',s)
    emp+=sum(1 for a in alts if not a.strip()); c=collections.Counter(alts); dup+=sum(v-1 for v in c.values() if v>1)
print(f"  empty alt: {emp} · duplicate alt within same page (total extra): {dup}")
# file sizes
import os
sizes=[os.path.getsize('public/images/catalog/'+f) for f in byfile]
print(f"\n== sizes == total {sum(sizes)/1e6:.1f}MB · avg {sum(sizes)/len(sizes)/1024:.0f}KB · >150KB: {sum(1 for x in sizes if x>150*1024)} · max {max(sizes)/1024:.0f}KB")
dims=collections.Counter('portrait' if r['height']>r['width'] else 'landscape' if r['width']>r['height'] else 'square' for r in cat); print("  orientation:",dict(dims))
