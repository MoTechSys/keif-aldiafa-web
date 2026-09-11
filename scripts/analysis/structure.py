import re,os,json,glob,collections,urllib.parse
APP='.next/server/app'
pages={}
for f in glob.glob(APP+'/**/*.html',recursive=True):
    rel=f[len(APP)+1:-5]
    if rel.startswith('_'): continue
    path='/' if rel=='index' else '/'+rel
    s=open(f,encoding='utf-8').read()
    pages[path]=s
paths=set(pages)
print("pages built:",len(paths))
# internal links per page (excluding header/footer chrome approximated by <header/<footer)
def body_only(s):
    s=re.sub(r'<header.*?</header>','',s,flags=re.S); s=re.sub(r'<footer.*?</footer>','',s,flags=re.S); return s
inlinks=collections.Counter(); out={}
for p,s in pages.items():
    b=body_only(s)
    hrefs=[urllib.parse.unquote(h.split('#')[0].split('?')[0]) for h in re.findall(r'<a [^>]*href="(/[^"]*)"',b)]
    hrefs=[h.rstrip('/') or '/' for h in hrefs]
    out[p]=set(hrefs)
    for h in set(hrefs): inlinks[h]+=1
allh=collections.Counter()
for p,s in pages.items():
    hrefs=[urllib.parse.unquote(h.split('#')[0].split('?')[0]) for h in re.findall(r'<a [^>]*href="(/[^"]*)"',s)]
    for h in set(h.rstrip('/') or '/' for h in hrefs): allh[h]+=1
print("\n== inbound links from BODY (excluding header/footer) — pages with ≤2 ==")
for p in sorted(paths, key=lambda x: inlinks[x]):
    if inlinks[p]<=2: print(f"  {inlinks[p]:2d}  {p}   (incl. chrome: {allh[p]})")
print("\n== outbound body links per template ==")
for p in ['/','/services','/offerings','/portfolio','/about','/contact','/locations','/qahwajiin-jeddah','/locations/جدة','/mubashirin-qahwa-jeddah','/links']:
    if p in out: print(f"  {p}: {len(out[p])} unique")
# broken internal links
broken=set()
for p,hs in out.items():
    for h in hs:
        if h not in paths and not h.startswith('/images') and h not in ('/sitemap.xml','/robots.txt'): broken.add(h)
print("\n== body links to non-existent pages ==", sorted(broken)[:20])
# click depth BFS from home using all links
import collections as C
depth={'/':0}; q=C.deque(['/'])
alllinks={}
for p,s in pages.items():
    hrefs=[urllib.parse.unquote(h.split('#')[0].split('?')[0]) for h in re.findall(r'<a [^>]*href="(/[^"]*)"',s)]
    alllinks[p]=set(h.rstrip('/') or '/' for h in hrefs)
while q:
    u=q.popleft()
    for v in alllinks.get(u,()):
        if v in paths and v not in depth: depth[v]=depth[u]+1; q.append(v)
dist=C.Counter(depth.values()); print("\n== click depth from home ==",dict(sorted(dist.items())),"unreached:",[p for p in paths if p not in depth])
# heading structure per template
print("\n== heading outline ==")
for p in ['/','/qahwajiin-jeddah','/locations/جدة','/services','/offerings','/about','/contact']:
    s=pages[p]; hs=re.findall(r'<h([1-3])[^>]*>(.*?)</h\1>',s,re.S)
    seq=''.join(h for h,_ in hs)
    jumps=sum(1 for i in range(1,len(hs)) if int(hs[i][0])-int(hs[i-1][0])>1)
    print(f"  {p}: h1={seq.count('1')} h2={seq.count('2')} h3={seq.count('3')} jumps={jumps}")
    if p in('/','/qahwajiin-jeddah'):
        for h,t in hs: print(f"     h{h} {re.sub(r'<[^>]+>','',t).strip()[:70]}")
# breadcrumbs presence
print("\n== breadcrumb nav present ==", sum(1 for s in pages.values() if 'aria-label="مسار التنقل"' in s),"/",len(pages), "· home has crumb:", 'مسار التنقل' in pages['/'])
# sections per template
print("\n== <section> count per template ==")
for p in ['/','/qahwajiin-jeddah','/locations/جدة','/mubashirin-qahwa-jeddah','/services','/offerings','/portfolio','/about','/contact','/locations','/social','/legal','/links']:
    s=pages[p]; secs=re.findall(r'<section[^>]*(?:id="([^"]*)")?[^>]*>',s)
    ids=re.findall(r'<section[^>]*\bid="([^"]+)"',s)
    print(f"  {p}: {len(re.findall('<section',s))} sections · ids: {ids}")
