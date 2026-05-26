# SEO Audit — mahirvibecoding.com

Audit covers: live site (`https://mahirvibecoding.com`) + source code in this repo. Stack: Nuxt 4, `@nuxtjs/sitemap`, `nuxt-schema-org`, `nuxt-og-image`, prerendered to Cloudflare. Locale: `id` (Indonesian, single-locale — no i18n concerns).

## Execution Status (2026-05-26)

All **High**-priority findings (#1, #2, #8, #11, #13, #17) have been executed at the code level — see ✅ markers in each section. The only outstanding item is the platform-side Cloudflare toggle for #1 (switch trailing-slash redirect from 307 → 301), which lives in Cloudflare Pages settings, not the repo.

## Executive Summary

**Overall health: B-.** The foundation is solid — SSR-rendered HTML, dynamic OG images per article, Article + Breadcrumb schema on articles, RSS feed, sensible robots.txt, single H1 per page, well-written long-form content with cited sources (strong E-E-A-T).

**Top 5 priorities (do these first):**
1. ✅ **Fix the canonical ↔ 307-redirect mismatch on `/articles/*` and `/studycase/*`** — every indexable detail page hits a 307 to a trailing-slash URL while the canonical declares the non-slash version. Google must reconcile this and signal gets diluted. *(Canonical + sitemap + internal links now consistently use trailing slash; platform-side 307→301 toggle in Cloudflare still pending — see #1 below.)*
2. ✅ **Add study cases (and other prerendered routes) to the sitemap** — `sitemap.urls` currently only includes article + tag routes. The 4 study case URLs are absent.
3. ✅ **Rebuild study case internal linking** — pages are orphans, only entry is the homepage, "back" link goes to `/#study-case`. Build a `/studycase` index page.
4. ✅ **Add Article/CreativeWork + VideoObject schema to study cases** — currently only inherited Product schema.
5. ✅ **Rewrite article slugs to remove the `artikel-N-` prefix** — keywords are pushed back ~10 chars in every URL.

---

## Technical SEO Findings

### 1. Canonical URL vs. 307 redirect conflict — High ✅ (code-side done, platform pending)

- **Issue:** Article and study case URLs *without* trailing slash return `HTTP 307 → /…/` (trailing slash). But each rendered page declares `<link rel="canonical" href="https://mahirvibecoding.com/articles/<slug>">` (no slash). The sitemap also uses no-slash URLs. So the canonical signal points to a URL that the server itself does not serve directly.
- **Evidence:**
  - `curl -I https://mahirvibecoding.com/articles/artikel-1-kenapa-proyek-vibe-coding-gagal` → `307 location: /articles/artikel-1-…/`
  - In the served HTML: `<link rel="canonical" href="https://mahirvibecoding.com/articles/artikel-1-kenapa-proyek-vibe-coding-gagal">`
  - Same pattern for `/studycase/dapur-nabilah`
- **Impact:** Google has to follow the redirect, then read a canonical pointing back at the source of the redirect. It usually picks the destination URL but wastes crawl budget and can split signals. 307 is also "temporary" — Google passes signal less authoritatively than a 301.
- **Fix:**
  - Pick one canonical form (trailing slash OR no slash — Cloudflare currently serves with slash, so go with that) and align: canonical URL, sitemap URL, internal `NuxtLink` paths, and `useRuntimeConfig().siteUrl` concatenations.
  - Update Cloudflare/Nitro to return **301** instead of 307 (likely a Cloudflare Pages "Always Use Trailing Slash" or "Auto Redirect" setting).
  - In `nuxt.config.ts:113`, the homepage canonical is `siteUrl` (no slash) — keep but ensure server also serves `/` as canonical.

### 2. Sitemap is incomplete — High ✅

- **Issue:** `nuxt.config.ts:54-56` only feeds `articleRoutes` + `tagRoutes` into `@nuxtjs/sitemap`. Study case routes, `/privacy`, `/terms`, `/feed.xml`, and the homepage are not explicitly added (homepage is auto-included; the rest are not).
- **Evidence:** `https://mahirvibecoding.com/sitemap.xml` returns 16 URLs, none of them `/studycase/*`. The 4 study case pages exist and are prerendered (per `routeRules` and `nitro.prerender.routes`).
- **Impact:** Study case pages have no sitemap entry, depend entirely on internal link discovery, which (see Finding #4) is extremely thin.
- **Fix:**
  ```ts
  sitemap: {
    urls: [...articleRoutes, ...studyCaseRoutes, ...tagRoutes],
  },
  ```
  Also add `<lastmod>` from the article's `updatedAt`/`publishedAt` frontmatter — `@nuxtjs/sitemap` supports per-URL `lastmod` in the `urls` array.

### 3. Sitemap entries missing `<lastmod>` — Medium

- **Issue:** None of the 16 URLs include `lastmod`, `changefreq`, or `priority`.
- **Impact:** Google uses `lastmod` as a hint for re-crawl prioritization. Without it, fresh content updates take longer to be re-indexed.
- **Fix:** When building the URL list, return objects `{ loc, lastmod }` with `lastmod` derived from frontmatter `updatedAt ?? publishedAt`. The article frontmatter already exposes these (e.g. `content/articles/artikel-1-…md:6` has `publishedAt`).

### 4. Privacy/Terms not prerendered — Low

- **Issue:** `/privacy` and `/terms` are missing from `routeRules` (`nuxt.config.ts:163-169`). Response header confirms `x-powered-by: Nuxt` (SSR runtime) while other pages are static.
- **Impact:** Slower TTFB; unnecessary worker invocation. Pages are static content; should be prerendered for consistency and edge cache hits.
- **Fix:** Add `'/privacy': { prerender: true }, '/terms': { prerender: true }` to `routeRules`.

### 5. `robots.txt` — OK

- Allows all major crawlers, blocks AI training crawlers (Cloudflare managed). `Sitemap:` directive present. No accidental disallows.
- Only minor note: confirm this AI-blocking policy is intentional (it blocks ClaudeBot, GPTBot, Google-Extended, etc. — meaning your content cannot be cited by AI assistants). See the **ai-seo** skill if you want to reverse this.

### 6. Cloudflare returns valid HTTPS, HTTP/2 — OK

- No HSTS header set (`Strict-Transport-Security` absent). Low priority but worth enabling in Cloudflare → SSL/TLS → Edge Certificates → HSTS (6-month max-age + includeSubdomains).

---

## On-Page SEO Findings

### 7. Homepage `<title>` is too long — Medium

- **Issue:** 90 characters: `"MahirVibeCoding — Strategi Vibe Coding untuk Membangun Aplikasi Fullstack"`. Google truncates around 580px (~50–60 chars).
- **Impact:** SERP shows `"MahirVibeCoding — Strategi Vibe Coding untuk Memban…"` — losing "Aplikasi Fullstack", which is the conversion keyword.
- **Fix:** In `nuxt.config.ts:7`, shorten to ~55 chars. Example: `"Vibe Coding Fullstack: Framework AI Coding — MahirVibeCoding"` or `"Strategi Vibe Coding untuk Aplikasi Fullstack | MahirVibeCoding"`. Lead with the primary keyword "Vibe Coding".

### 8. Article slugs include redundant `artikel-N-` prefix — High ✅

- **Issue:** URLs like `/articles/artikel-1-kenapa-proyek-vibe-coding-gagal` push the keyword "kenapa" 11 chars after the path. Also brittle — if you reorder/delete, the numbers lie.
- **Impact:** Weaker keyword signal in URL (a small but compounding factor); URLs harder to memorize/share; numbering decays.
- **Fix:** Rename markdown files to `kenapa-proyek-vibe-coding-gagal.md`, etc. Add 301 redirects from old slugs in `routeRules` so existing backlinks (and the indexed sitemap) don't break:
  ```ts
  routeRules: {
    '/articles/artikel-1-kenapa-proyek-vibe-coding-gagal': { redirect: '/articles/kenapa-proyek-vibe-coding-gagal' },
    // …repeat for 2,3,4
  }
  ```
  Do this *before* the site accumulates more backlinks.

### 9. Article meta — OK, with one nit

- Per-article titles, descriptions, OG tags, canonical, keywords, Article + Breadcrumb + ImageObject + ReadAction schema, and dynamic per-article OG images (`__og-image__/static/articles/<slug>/og.png`) are all present and well-structured. Strong implementation.
- One small nit: title pattern `"<title> — MahirVibeCoding"` (e.g. 73 chars on artikel-1) is close to the 60-char SERP truncation. Consider dropping " — MahirVibeCoding" for articles whose title is already long, or shortening the brand to `" | MVC"` only when title >55 chars.

### 10. Tag pages may become thin content — Medium

- **Issue:** `/articles/tag/<tag>` shows: H1 (`#tag`), one-line description ("Semua artikel MahirVibeCoding yang terkait dengan tag ini."), tag chips, article list. No tag-specific intro, no count, no curated insight.
- **Impact:** With only 4 articles and 6 tags, several tag pages have 1–2 articles each. These look like thin content pages to Google and can cannibalize `/articles` for the same intent.
- **Fix options (pick one):**
  - **Recommended:** Add a 2–3 paragraph intro per tag (manually managed, ~150-300 words). Makes the page genuinely useful.
  - **Alternative:** Until each tag has 3+ articles, set `<meta name="robots" content="noindex, follow">` on tag pages with low article count.
  - **Long-term:** Convert tags to "topic hubs" with curated descriptions and learning paths.

### 11. Study case pages lack Article/VideoObject schema — High ✅

- **Issue:** Only the inherited Product schema appears. `useSchemaOrg()` is not called in `app/pages/studycase/[slug].vue`.
- **Impact:** Missing eligibility for article rich result, breadcrumb in SERP, and (since the page embeds YouTube via `videoId`) VideoObject rich result.
- **Fix:** In `studycase/[slug].vue:155`, add:
  ```ts
  useSchemaOrg([
    defineArticle({  // or defineCreativeWork
      headline: studyCase.title,
      description: studyCase.description,
      image: `${runtimeConfig.public.siteUrl}${studyCase.image}`,
      inLanguage: 'id-ID',
      url: canonicalUrl,
    }),
    defineBreadcrumb({
      itemListElement: [
        { position: 1, name: 'Home', item: runtimeConfig.public.siteUrl },
        { position: 2, name: 'Study Case', item: `${runtimeConfig.public.siteUrl}/studycase` },
        { position: 3, name: studyCase.title, item: canonicalUrl },
      ],
    }),
    // If videoId is present:
    defineVideo({
      name: studyCase.title,
      description: studyCase.description,
      thumbnailUrl: `${runtimeConfig.public.siteUrl}${studyCase.image}`,
      embedUrl: `https://www.youtube.com/embed/${studyCase.videoId}`,
      uploadDate: studyCase.publishedAt, // add to frontmatter if missing
    }),
  ])
  ```

### 12. Heading hierarchy — OK

- Homepage: 1 H1 + sensible H2/H3 nesting. Section IDs (`#problem`, `#pricing`, `#curriculum`, `#faq`, etc.) match nav anchors. Good.

---

## Content & Internal Linking Findings

### 13. Study cases are functionally orphan pages — High ✅

- **Issue:** The 4 study case detail pages can only be reached via the homepage `StudyCaseSection`. Each study case detail page's "back" link goes to `/#study-case` (homepage anchor) — there is no `/studycase` index page. They don't link to each other (no "Related study cases"). They aren't in the sitemap. The articles index doesn't link to them. The footer doesn't link to them.
- **Impact:** Low internal PageRank flow; if homepage `StudyCaseSection` ever changes (e.g. carousel showing only 3 of 4), one becomes fully orphaned. Crawl signal that these are important is weak.
- **Fix:**
  1. Build `/studycase/index.vue` listing all study cases (similar to `/articles`).
  2. Update study case "back" link from `/#study-case` to `/studycase`.
  3. Add a "More study cases" section at the bottom of each detail page (analogous to `ArticleRelated`).
  4. Add `/studycase` to footer navigation.

### 14. Footer navigation is anemic — Medium

- **Issue:** Footer only links to `/terms` and `/privacy`. No links to `/articles`, study cases, or main page sections.
- **Impact:** Footers are crawled site-wide; they're a strong internal linking signal for marking important pages. The current footer wastes that signal.
- **Fix:** Add a small site-map column to `FooterSection.vue:1-20`:
  - "Belajar": Artikel, Study Case
  - "Produk": Pricing, FAQ
  - "Legal": Terms, Privacy
  - RSS feed link

### 15. Articles and study cases are silo'd — Medium

- **Issue:** `/articles` has no link to study cases. `/studycase/*` doesn't reference related articles. Cross-content discovery is missing.
- **Impact:** Articles describe *concepts* (vibe coding workflow, prompt engineering); study cases are *implementations* of those concepts. The lack of cross-links means users (and Google) don't see the topical relationship.
- **Fix:** On article pages, add a "Lihat study case" CTA when an article matches a study case topic. On study case pages, add "Artikel terkait" pulling from shared tags/topics.

### 16. Content quality — Strong

- Articles cite real sources (Harness 2025, METR July 2025, GitClear, Red Hat). First-hand voice, no AI-detection red flags scanned, original framing ("three-month wall"). This is the strongest part of the site — E-E-A-T signals are well above baseline for a new domain.
- Study case descriptions are shorter (~500 words each) but include feature lists, tool stacks, and link to GitHub repos — good practical signal.

---

## Performance Findings

### 17. `/new-cover.png` is 1.54 MB and served via raw `<img>` — High ✅

- **Issue:** `app/components/CurriculumSection.vue:24-29` uses `<img src="/new-cover.png">` instead of `<NuxtImg>`. The file is 1,541,257 bytes.
- **Impact:** Even with `loading="lazy"`, any user who scrolls to the curriculum section downloads 1.5 MB. On mobile this is brutal.
- **Fix:**
  ```vue
  <NuxtImg
    src="/new-cover.png"
    alt="Cover ebook Mahir Vibe Coding"
    format="webp,avif"
    sizes="345px md:450px lg:510px"
    loading="lazy"
    class="mx-auto w-full drop-shadow-[…]"
  />
  ```
  Or re-export the PNG at 1× resolution and serve a 510px-wide WebP (~30-50 KB) directly.

### 18. `/cover-ebook.png` (767 KB) — Medium

- Located in `/public/`. Check if it's used anywhere; if yes, same fix as above. If unused, delete (saves bundle size). Grep shows no current usage in `app/` — likely safe to remove.

### 19. Tech logos in hero are SVG + `loading="lazy"` — Low

- `HeroSection.vue:56` lazy-loads SVG logos that are above-the-fold on desktop. SVGs are tiny (vector); lazy loading them adds a fetch defer with no payoff. Drop `loading="lazy"` from this loop.

### 20. No reported CLS issues from source review — OK

- Hero image is text-only; no above-the-fold image swap. Study case detail page sets `loading="eager" fetchpriority="high"` on the cover image, which is correct for LCP.

---

## Quick Wins (do these this week)

1. Add study case routes + `lastmod` to `sitemap.urls` (`nuxt.config.ts:54`). **15 min, high impact.**
2. Replace `<img src="/new-cover.png">` with `<NuxtImg>` at `CurriculumSection.vue:24`. **10 min, high LCP impact.**
3. Add `/privacy` and `/terms` to prerender (`routeRules`). **2 min.**
4. Remove `loading="lazy"` from hero logo loop (`HeroSection.vue:56`). **1 min.**
5. Shorten homepage `<title>` to ≤60 chars (`nuxt.config.ts:7`). **5 min.**
6. Expand footer with article/study case links (`FooterSection.vue`). **15 min.**

## Medium-Term (this month)

7. Investigate Cloudflare 307→301 and slash consistency for `/articles/*` and `/studycase/*`. Align canonical, sitemap, internal links to one convention.
8. Build `/studycase/index.vue` listing page; rewire "back" links from `/#study-case` to `/studycase`.
9. Add `useSchemaOrg([defineArticle, defineBreadcrumb, defineVideo])` to `studycase/[slug].vue`.
10. Rename article slugs to drop `artikel-N-` prefix; add 301 redirects for old paths.

## Longer-Term

11. Expand tag pages with intro copy (or noindex low-content tags).
12. Add "Artikel terkait" / "Study case terkait" cross-linking between content types.
13. Once 8+ articles exist, build topical clusters (pillar page per major theme: "Vibe Coding Workflow", "AI for Laravel", "Prompt Engineering for Developers") with hub-and-spoke internal linking.

---

## What I did NOT check (out of scope or unavailable)

- **Core Web Vitals field data** — no Search Console access; recommend running PageSpeed Insights on homepage + a study case page to confirm LCP/CLS/INP. Most likely issue: the 1.5 MB curriculum image dragging FCP/page weight; secondary risk: Google Fonts (Plus Jakarta Sans, 5 weights) blocking render.
- **Backlink profile / domain authority** — no Ahrefs/Semrush access.
- **Actual indexation status in Google** — `site:mahirvibecoding.com` query needs to be run manually (Google blocks automated queries from this tool).
- **Schema validation via JS-rendered DOM** — I read raw HTML, which works because schema is server-injected here, not client-injected (verified `<script type="application/ld+json">` is in the raw response). No false negatives.
