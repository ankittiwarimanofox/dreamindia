# Dream India Travel website (Next.js)

Static Next.js 16 site (`output: "export"`, `trailingSlash: true`) deployed on Vercel.

```bash
npm install
npm run dev      # local preview at http://localhost:3000
npm run build    # writes the static site to /out
```

## Where things live

| What | Where |
| --- | --- |
| Page titles, meta descriptions, social images (one table) | `app/data/pageSeo.ts` |
| The 9 Himachal packages (price, itinerary, inclusions, image) | `app/data/himachalPackages.ts` (a new package here gets its own page, sitemap entry, schema and related links automatically; add its title/description in `pageSeo.ts` -> `himachalSeo`) |
| Keyword copy and FAQs | `app/data/seoCopy.ts` |
| Business details used in schema (phones, email, address, social links, GA4 ID) | `app/lib/site.ts` |
| Meta tag + schema.org helpers | `app/lib/seo.ts` |
| Images (WebP, 3 sizes) and their alt text | `public/images/`, `app/lib/images.ts`. Social cards: `public/og/` |
| Image licences / attribution | `app/data/imageCredits.ts` (shown at `/image-credits/`) |
| Sitemap (generated at build) | `app/sitemap.ts` |
| robots.txt | `public/robots.txt` |
| Redirects, security and cache headers | `vercel.json` |
| 404 page | `app/not-found.tsx` |
| GA4 events | `app/lib/analytics.ts`, `app/components/Analytics.tsx` |

## Adding a page: the checklist

1. Create `app/<route>/page.tsx` that exports `metadata = buildMetadata({...})` (title <= 60 characters, description 120-155 characters, path ending in `/`, an image key).
2. Exactly one `<h1>` containing the page's main keyword.
3. Add the URL to `app/sitemap.ts`.
4. Link to it from at least one other page.

## GA4 events (mark them as Key events)

The site sends three custom events through the existing GA4 tag (`G-9X88LXL5SG`):

* `whatsapp_click` - any tap on a WhatsApp link or button
* `phone_click` - any tap on a call link or "Call" button
* `generate_lead` - an enquiry form (home page or Contact page) was submitted successfully

After they appear in GA4 (Admin -> Data display -> Events, usually within a day), switch on "Mark as key event" for each.

## Host-level steps (Vercel dashboard / DNS, not code)

1. **www vs non-www**: Project -> Settings -> Domains. Keep `www.dreamindiatravel.com` as the primary domain and set `dreamindiatravel.com` to "Redirect to www.dreamindiatravel.com" (308/301). `vercel.json` also carries a redirect for the bare domain as a safety net. Canonical tags, the sitemap and schema all use `https://www.dreamindiatravel.com`.
2. **Trailing slashes**: `vercel.json` sets `trailingSlash: true`, matching the site's URLs, so `/about` goes to `/about/` in one hop and the sitemap lists the final URLs.
3. **Redirects** in `vercel.json`: `/Contact/` and `/contact/` -> `/contact-us/`, `/destinations/himachal/` -> `/tours-package/`.
4. After deploying: open Google Search Console -> Sitemaps -> submit `https://www.dreamindiatravel.com/sitemap.xml`, and use URL Inspection -> Request indexing for `/`, `/tours-package/` and `/contact-us/`.
5. Optional clean-up: the old `dream.zip` backup that was in the project folder is not included here; delete it from the repository if it is still there.

## Notes

* The stub routes in `app/api/` return fixed messages and are not used by the site. Enquiry forms post to Formspree (`https://formspree.io/f/xpqnnbgn`).
* The blog folder is spelt `articals` in the URL (`/articals/blog1/`). It was left as it was to avoid changing indexed URLs; if you rename it, add 301 redirects in `vercel.json` for the five blog URLs.
