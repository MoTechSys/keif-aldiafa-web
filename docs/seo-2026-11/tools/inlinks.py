#!/usr/bin/env python3
"""عدّ الروابط الداخلية الواردة لكل مسار من HTML المبني (.next/server/app).
التشغيل بعد `npm run build`:  python3 docs/seo-2026-11/tools/inlinks.py
يطبع: المسار · عدد الصفحات التي تربط إليه · أكثر نصوص الروابط تكراراً."""
import re, glob, collections, urllib.parse as U
ROOT = ".next/server/app"
pages = {}
for f in glob.glob(ROOT + "/**/*.html", recursive=True):
    r = re.sub(r"^/\((site|bare)\)", "", f[len(ROOT):].replace(".html", ""))
    r = U.unquote("/" if r in ("/index", "") else r)
    if r.startswith("/_") or r in ("/404", "/500"):
        continue
    pages[r] = open(f, encoding="utf-8").read()
inl, anchors = collections.defaultdict(set), collections.defaultdict(collections.Counter)
for r, s in pages.items():
    for href, txt in re.findall(r'<a[^>]+href="(/[^"#?]*)[^"]*"[^>]*>(.*?)</a>', s, re.S):
        t = U.unquote(href).rstrip("/") or "/"
        if t != r:
            inl[t].add(r)
            anchors[t][re.sub(r"<[^>]+>", "", txt).strip()[:30]] += 1
n = len(pages) - 1
for r in sorted(pages, key=lambda r: (len(inl[r]), r)):
    print(f"{r:40s} {len(inl[r]):3d}/{n}  {dict(anchors[r].most_common(2))}")
