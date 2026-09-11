import re,glob,json,collections,html as H
APP='.next/server/app'
pages={}
for f in glob.glob(APP+'/**/*.html',recursive=True):
    rel=f[len(APP)+1:-5]
    if rel.startswith('_'): continue
    pages['/' if rel=='index' else '/'+rel]=open(f,encoding='utf-8').read()
def strip(s):
    s=re.sub(r'<script.*?</script>','',s,flags=re.S); s=re.sub(r'<style.*?</style>','',s,flags=re.S)
    s=re.sub(r'<noscript.*?</noscript>','',s,flags=re.S)
    return s
def main_text(s):
    s=strip(s)
    m=re.search(r'<main.*?</main>',s,re.S); body=m.group(0) if m else s
    body=re.sub(r'<header.*?</header>','',body,flags=re.S); body=re.sub(r'<footer.*?</footer>','',body,flags=re.S)
    t=re.sub(r'<[^>]+>',' ',body); t=H.unescape(t); t=re.sub(r'\s+',' ',t).strip(); return t
def words(t): return re.findall(r'[\u0600-\u06FF]+|[A-Za-z0-9+%]+',t)
def meta(s,name):
    m=re.search(r'<meta name="%s" content="([^"]*)"'%name,s); return H.unescape(m.group(1)) if m else ''
def title(s):
    m=re.search(r'<title>(.*?)</title>',s,re.S); return H.unescape(m.group(1)) if m else ''
CITIES=['جدة','مكة','المدينة المنورة','الطائف','الرياض','الدمام','ينبع','أبها','مكة المكرمة','المدينة']
def norm_city(t):
    for c in sorted(CITIES,key=len,reverse=True): t=t.replace(c,'§')
    return t
svc=[p for p in pages if re.match(r'/(qahwajiin|diyafa-munasabat|sababin-qahwa)-',p)]
city=[p for p in pages if p.startswith('/locations/')]
core=[p for p in pages if p not in svc and p not in city]
print("pages:",len(pages),"svc:",len(svc),"city:",len(city),"core:",len(core))
print("\n== word counts (main, excl header/footer) ==")
rows=[]
for p,s in pages.items():
    t=main_text(s); w=words(t); rows.append((len(w),len(set(w)),p))
for n,u,p in sorted(rows):
    print(f"  {n:5d} words  {u:4d} uniq  {p}")
print("\n== title / description ==")
tl=collections.Counter(); dl=collections.Counter()
for p,s in sorted(pages.items()):
    t=title(s); d=meta(s,'description'); tl[t]+=1; dl[d]+=1
    flag=''
    if len(t)>60: flag+=' T>60'
    if len(d)>160: flag+=' D>160'
    if len(d)<70: flag+=' D<70'
    print(f"  {len(t):2d}/{len(d):3d} {p:40s} {t[:55]}{flag}")
print("dup titles:",[t for t,c in tl.items() if c>1],"dup desc:",[d[:40] for d,c in dl.items() if c>1])
print("desc with ✓:",sum(1 for s in pages.values() if '✓' in meta(s,'description')))
print("\n== templated share — svc pages (city-normalized text) ==")
by_svc=collections.defaultdict(list)
for p in svc: by_svc[p.split('-')[0]+('-'+p.split('-')[1] if p.startswith('/diyafa') or p.startswith('/sababin') else '')].append(p)
def sents(t): return [x.strip() for x in re.split(r'[.؟!،:—]\s',t) if len(x.strip())>15]
for k,ps in by_svc.items():
    normed={p:set(sents(norm_city(main_text(pages[p])))) for p in ps}
    common=set.intersection(*normed.values())
    tot=sum(len(v) for v in normed.values())/len(ps)
    uniq_pct=[]
    for p in ps:
        own=normed[p]-common
        uniq_pct.append(len(own)/max(1,len(normed[p])))
    print(f"  {k}: {len(ps)} pages · avg {tot:.0f} sentences/page · shared(city-normalized) {len(common)} · unique share avg {sum(uniq_pct)/len(uniq_pct)*100:.0f}% (min {min(uniq_pct)*100:.0f}% max {max(uniq_pct)*100:.0f}%)")
    # word-level unique
    wn={p:words(norm_city(main_text(pages[p]))) for p in ps}
    cw=set.intersection(*[set(v) for v in wn.values()])
    print(f"      words/page avg {sum(len(v) for v in wn.values())/len(ps):.0f}; uniq-word share avg {sum(len([w for w in v if w not in cw])/len(v) for v in wn.values())/len(ps)*100:.0f}%")
# raw (not normalized) pairwise shingle jaccard for sisters
def shingles(t,k=5):
    w=words(t); return set(' '.join(w[i:i+k]) for i in range(len(w)-k+1))
print("\n== raw 5-gram Jaccard between sister pages (no normalization) ==")
for k,ps in by_svc.items():
    sh={p:shingles(main_text(pages[p])) for p in ps}
    vals=[]
    for i in range(len(ps)):
        for j in range(i+1,len(ps)):
            a,b=sh[ps[i]],sh[ps[j]]; vals.append(len(a&b)/len(a|b))
    print(f"  {k}: avg {sum(vals)/len(vals)*100:.0f}% min {min(vals)*100:.0f}% max {max(vals)*100:.0f}%")
print("\n== same city, different service (jeddah) ==")
jp=['/qahwajiin-jeddah','/diyafa-munasabat-jeddah','/sababin-qahwa-jeddah','/locations/جدة','/mubashirin-qahwa-jeddah']
sh={p:shingles(main_text(pages[p])) for p in jp}
for i in range(len(jp)):
    for j in range(i+1,len(jp)):
        a,b=sh[jp[i]],sh[jp[j]]; print(f"  {jp[i]} ~ {jp[j]}: {len(a&b)/len(a|b)*100:.0f}%")
print("\n== core pages vs home ==")
sh={p:shingles(main_text(pages[p])) for p in core}
for p in core:
    if p!='/': a,b=sh['/'],sh[p]; print(f"  / ~ {p}: {len(a&b)/len(a|b)*100:.0f}%")
print("\n== FAQ ==")
faqq=collections.Counter(); faqn=collections.Counter(); pages_with_faq=0; fpage={}
for p,s in pages.items():
    m=re.findall(r'"@type":"Question","name":"(.*?)"',s)
    if not m:
        js=re.findall(r'<script type="application/ld\+json">(.*?)</script>',s,re.S)
        for j in js:
            try:
                d=json.loads(j)
                items=d if isinstance(d,list) else [d]
                for it in items:
                    for g in (it.get('@graph',[it]) if isinstance(it,dict) else []):
                        if g.get('@type')=='FAQPage':
                            m+= [q['name'] for q in g.get('mainEntity',[])]
            except Exception as e: pass
    if m: pages_with_faq+=1; fpage[p]=len(m)
    for q in m: faqq[q]+=1; faqn[norm_city(q)]+=1
print("  pages with FAQ schema:",pages_with_faq,"· total Qs:",sum(faqq.values()),"· distinct Qs:",len(faqq),"· distinct after city-normalization:",len(faqn))
print("  Q per page:",collections.Counter(fpage.values()))
print("  most repeated (normalized):")
for q,c in faqn.most_common(8): print(f"    {c:2d}× {q[:70]}")
print("\n== claims / numbers ==")
allt=' '.join(main_text(s) for s in pages.values())
nums=collections.Counter(re.findall(r'[+٪%]?\d[\d,]*\s*[%٪+]?',allt))
print("  frequent numeric tokens:",[(n.strip(),c) for n,c in nums.most_common(25)])
for pat in ['+500','500','200','100%','2016','٢٠١٦','24/7','٢٤','24 ساعة','سنوات','خبرة','عميل','مناسبة نفّذ','رضا','ضمان','الأفضل','رقم 1','الأول','أرخص','مجان']:
    c=sum(1 for s in pages.values() if pat in main_text(s))
    if c: print(f"  '{pat}' on {c} pages")
print("\n== contexts of 500 ==")
ctx=collections.Counter()
for p,s in pages.items():
    for m in re.finditer(r'.{0,40}500.{0,50}',main_text(s)): ctx[m.group(0)]+=1
for k,c in ctx.most_common(12): print(f"   {c:2d}× {k}")
print("\n== meta/technical per page ==")
chk=collections.Counter()
for p,s in pages.items():
    if 'lang="ar"' in s: chk['lang=ar']+=1
    if 'dir="rtl"' in s: chk['dir=rtl']+=1
    if re.search(r'<link rel="canonical"',s): chk['canonical']+=1
    if 'hreflang' in s: chk['hreflang']+=1
    if 'property="og:image"' in s: chk['og:image']+=1
    if 'name="twitter:card"' in s: chk['twitter']+=1
    if '"@type":"BreadcrumbList"' in s: chk['BreadcrumbList']+=1
    if '"@type":"LocalBusiness"' in s or '"LocalBusiness"' in s: chk['LocalBusiness']+=1
    if '"@type":"Service"' in s: chk['Service']+=1
    if '"FAQPage"' in s: chk['FAQPage']+=1
    if '"ImageObject"' in s: chk['ImageObject']+=1
    if '"Organization"' in s: chk['Organization']+=1
    if 'name="robots"' in s: chk['robots-meta']+=1
    if 'name="keywords"' in s: chk['keywords-meta']+=1
    if re.search(r'<h1',s) and len(re.findall(r'<h1',s))==1: chk['single h1']+=1
print(" ",dict(chk))
print("\n== text hygiene ==")
for p,s in sorted(pages.items()):
    t=main_text(s)
    issues=[]
    lat=re.findall(r'\b[A-Za-z]{3,}\b',t); latc=collections.Counter(lat)
    if latc: issues.append('latin:'+','.join(f"{k}×{v}" for k,v in latc.most_common(4)))
    if '  ' in t: issues.append('dblspace')
    if re.search(r'\?\?|undefined|null|NaN|\[object',t): issues.append('JS-LEAK')
    if re.search(r'\$\{',t): issues.append('TEMPLATE-LEAK')
    if issues: print(f"  {p}: {' | '.join(issues)}")
print("\n== /about & thin pages text ==")
for p in ['/about','/contact','/links','/legal','/social','/locations']:
    if p in pages: print(f"--- {p} ({len(words(main_text(pages[p])))} words)\n  {main_text(pages[p])[:600]}")
print("\n== city-specific content in svc pages (intro/districts) ==")
for p in ['/qahwajiin-jeddah','/qahwajiin-abha','/qahwajiin-yanbu']:
    t=main_text(pages[p]); print(f"--- {p}\n  {t[:900]}")
