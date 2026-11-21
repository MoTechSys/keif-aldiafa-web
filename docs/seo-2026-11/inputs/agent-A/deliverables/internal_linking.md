# Internal linking plan — keifaldiafa.com

## Problem
Sitewide links (header/footer on all 48 pages) point to: /legal /privacy /social /locations/* /offerings /portfolio...
The service pages that bring in money get only 8–18 internal links:
/qahwajiin (8) · /qahwajiyat-sababat-jeddah (14) · /mubashirin-qahwa-jeddah (13) · /coffee-break-sharikat-jeddah (15)
Result: Google sees them as unimportant pages → "Discovered – currently not indexed".

## Fix (in the header or footer of all pages)
Add a "خدماتنا في جدة" (our services in Jeddah) section with these links (anchor text = target keyword):
- قهوجيين → /qahwajiin
- قهوجي جدة → /qahwajiin-jeddah
- صبابين قهوة جدة → /sababin-qahwa-jeddah
- قهوجيات جدة → /qahwajiyat-sababat-jeddah
- مباشرين قهوة جدة → /mubashirin-qahwa-jeddah
- ضيافة زواجات جدة → /diyafa-a3ras-jeddah
- كوفي بريك شركات جدة → /coffee-break-sharikat-jeddah
- ضيافة مناسبات جدة → /diyafa-munasabat-jeddah

## Contextual links (inside the text)
- Each /qahwajiin-{city} page: a sentence near the top that links to /qahwajiin with anchor "قهوجيين".
- /qahwajiin-jeddah and /sababin-qahwa-jeddah: link to /qahwajiyat-sababat-jeddah with anchor "قهوجيات جدة".
- /qahwajiin-jeddah: link to /mubashirin-qahwa-jeddah with anchor "مباشرين قهوة جدة".
- Home page: a "services" box linking all 8 links above.

## After deployment
1. Update the lastmod of the modified pages in sitemap.xml.
2. Search Console ← URL inspection ← "Request indexing" for the 7 non-indexed pages.
