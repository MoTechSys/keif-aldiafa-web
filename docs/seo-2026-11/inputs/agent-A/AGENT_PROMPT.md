# Brief for the development agent — keifaldiafa.com (SEO)

## Who I am and what I have access to
I'm an analysis agent working in a separate sandbox. I have working, tested API access (OAuth, owner level) to:
- **Google Search Console** for https://keifaldiafa.com/ (siteOwner): Search Analytics (query/page/date/country/device), URL Inspection for any page, Sitemaps (read/submit).
- **Google Ads** account 3412658939 (keifaldiafa.com, SAR, API v24): read campaigns/keywords/search terms/conversions/budgets, and edits (pause/enable, budgets, bidding, keywords, negatives). **I don't change anything in Ads without the owner's approval.**
- Crawling and analyzing any public site, Lighthouse (mobile), competitor SERPs, and Google Suggest.

I do **not** have the site's source code. You (the agent) have the repository. Split: you change the code, I measure and verify from Google.

## Full data package (direct download)
[download link removed — public repo]
Inside: seo/README.md (index) → keif/SEO_AUDIT_AR.md (audit) → keif/deliverables/* (ready-to-apply changes) + raw JSON.

## What I found (real data, 90 days ending 2026-11-19)
- 57,898 impressions, 1,269 clicks, CTR 2.2%, avg position 7.5. 93% Saudi Arabia, 88% mobile. Weekly clicks falling (107→104→72) while impressions rise.
- **The biggest problem — 7 pages not indexed** (URL Inspection, all 48 pages checked):
  - /qahwajiin — Discovered, not indexed (main page for "قهوجيين", 3,890 impressions/90 days)
  - /qahwajiyat-sababat-jeddah — URL unknown to Google ("قهوجيات جدة")
  - /mubashirin-qahwa-jeddah — Discovered, not indexed ("مباشرين قهوة جدة")
  - /coffee-break-sharikat-jeddah — URL unknown to Google
  - /contact, /locations/مكة-المكرمة — Discovered, not indexed
  - /offerings — Google picked a foreign canonical: https://www.afpintegra.pe/iniciar-sesion (duplicate, Google-chosen canonical)
- **Cannibalization:** "قهوجيين" is served by /qahwajiin-riyadh (pos 8.4), /qahwajiin-jeddah (18), / (22.6), /services (36.9) → 3 clicks out of 3,890.
  "قهوجيات جدة" → /qahwajiin-jeddah + /sababin-qahwa-jeddah, 0 clicks.
- **Likely cause:** the sitewide header/footer links point to /legal /privacy /social /locations/*, while the revenue service pages get only 8–15 internal links (/qahwajiin = 8).
- Home page H1 contains no keyword ("ضيافة راقية للجهات الحكومية والشركات والمناسبات"), pos 12.8.
- /qahwajiin-jeddah: title uses the plural "قهوجيين", but people search the singular "قهوجي جدة" (pos 12).
- Lighthouse mobile /qahwajiin-jeddah: Perf 82, LCP 2.6s, TBT 550ms. HTML 300–590KB per page (RSC payload). FAQ content exists without FAQPage schema.
- **Strong pages — don't touch their title/H1/URL:** /sababin-qahwa-jeddah (pos 1.9), /diyafa-munasabat-jeddah, /sababin-qahwa-riyadh (3.8), /qahwajiin-madinah (3.5).
- Ads (context): stopped serving since 2026-10-11. Last recorded conversion 2026-09-30. Main campaign uses Max Conversions + tCPA 12 SAR. Probable cause: Consent Mode default `ad_storage: denied` until the cookie banner is accepted, so conversions don't get recorded. (The owner says ads are not the priority right now.)
- I paused a foreign Smart campaign "[حملة أخرى — الاسم محذوف]" (→ [third-party domain removed]) that was created on 2026-10-11 inside the account.

## Proposed tasks for you (in order)
1. **Internal linking** (keif/deliverables/internal_linking.md): a sitewide "خدماتنا" block in the header/footer with keyword anchors → /qahwajiin, /qahwajiin-jeddah, /sababin-qahwa-jeddah, /qahwajiyat-sababat-jeddah, /mubashirin-qahwa-jeddah, /diyafa-a3ras-jeddah, /coffee-break-sharikat-jeddah, /diyafa-munasabat-jeddah. Plus contextual links inside city pages.
2. **Titles / descriptions / H1** for 12 pages from keif/deliverables/titles_meta.csv (rows marked "keep" stay unchanged).
3. **/offerings**: verify a self-referencing canonical, no external canonical/hreflang, and that the content doesn't duplicate another page; then I'll request recrawling.
4. **sitemap.xml**: update lastmod for the modified pages only (real dates, not all pages).
5. **FAQPage schema** on pages that already have FAQ content (must match the visible text).
6. **Performance**: reduce TBT and HTML size (lazy-load the gallery, move heavy components to dynamic import).
7. **New pages** (keif/deliverables/new_pages_briefs.md), 2–3 per week with real content: سعر قهوجي جدة، رقم قهوجي جدة، قهوجي عزاء جدة، then districts.
8. (When the owner approves ads) count WhatsApp/call clicks as conversions without breaking consent: Consent Mode v2 with pings/modeling, or Enhanced Conversions. Conversion labels: WA=NIEKCOWDzPYYELfEhaQp, CALL=Xq_gCOHE7fQYELfEhaQp on AW-11081441847.

## What I do after every deploy (send me the URL list)
- Fetch the pages as Googlebot and confirm title/H1/canonical/schema/links.
- Run URL Inspection for each page and report its status. Submit the sitemap via API.
  (Requesting indexing has no API: the owner clicks "Request indexing" manually, ~10 pages/day.)
- Weekly report: position/clicks for target queries per page, cannibalization, index status.
- KPIs within 2–4 weeks: the 7 pages become "Submitted and indexed"; "قهوجيين" → /qahwajiin; "قهوجيات جدة" clicks > 0; "قهوجي جدة" position < 7.

## Notes
- No passwords or keys in this file or the package. Access to Google stays with me only.
- Competitor SERPs came from a US-located search API; Search Console numbers are real Saudi data.
- Brand constants: كيف الضيافة | 0508252134 | info@keifaldiafa.com — keep NAP consistent everywhere.

## Reply format I want from you
A task list: (file/page | the change | when deployed). After deployment send me the changed URLs so I can verify from Google.
