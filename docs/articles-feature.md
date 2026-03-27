# Requirements: Articles Feature — mahirvibecoding.com (v2)

## 1. Overview

Menambahkan fitur articles pada website mahirvibecoding.com untuk mendukung content marketing, SEO organik, dan edukasi developer Indonesia seputar vibe coding, Laravel, dan AI-assisted development.

**Slug utama**: `/articles`

---

## 2. Tech Stack & Versions

| Layer | Teknologi | Versi |
|---|---|---|
| Framework | Nuxt | v4.4.2 |
| Content Engine | @nuxt/content | v3.12.0 |
| SEO Toolkit | @nuxtjs/seo | v3.4.0 |
| Styling | Tailwind CSS | v4 |
| Deployment | SSG (Static Site Generation) / Hybrid Rendering | — |
| Node.js | >= v22.5.0 *(untuk native SQLite support)* | — |

**Sub-modules yang termasuk dalam `@nuxtjs/seo` v3.4.0:**

| Module | Fungsi |
|---|---|
| `@nuxtjs/robots` | Manage robots.txt |
| `@nuxtjs/sitemap` | Auto-generate sitemap.xml |
| `nuxt-schema-org` | JSON-LD structured data |
| `nuxt-og-image` | Dynamic OG image generation |
| `nuxt-seo-utils` | SEO meta utilities & defaults |
| `nuxt-link-checker` | Detect broken links |

> Articles **tidak** menggunakan Supabase/Drizzle. Seluruh konten articles dikelola via Markdown files di repository dan di-query melalui Nuxt Content v3 SQL-based storage.

---

## 3. Nuxt 4 Project Structure

Nuxt v4 menggunakan `app/` directory sebagai default untuk application code:

```
mahirvibecoding.com/
├── app/
│   ├── pages/
│   │   └── articles/
│   │       ├── index.vue              # Articles listing
│   │       ├── [slug].vue             # Article detail
│   │       └── tag/
│   │           └── [tag].vue          # Articles by tag
│   ├── components/
│   │   └── articles/
│   │       ├── ArticleCard.vue
│   │       ├── ArticleList.vue
│   │       ├── ArticleToc.vue
│   │       ├── ArticleMeta.vue
│   │       ├── ArticleTags.vue
│   │       ├── ArticleShare.vue
│   │       ├── ArticleRelated.vue
│   │       └── ArticleCta.vue
│   ├── composables/
│   │   └── useArticles.ts
│   └── app.vue
├── content/
│   └── articles/
│       ├── apa-itu-vibe-coding.md
│       ├── laravel-boost-ai-coding-agent.md
│       └── tips-prompt-engineering-untuk-developer.md
├── public/
│   └── articles/
│       └── images/
│           └── {slug}/
├── server/
├── shared/
├── content.config.ts
├── nuxt.config.ts
└── tsconfig.json
```

---

## 4. Content Collection Definition

### 4.1 `content.config.ts`

Nuxt Content v3 menggunakan **Collections** yang didefinisikan di `content.config.ts` dengan Zod schema untuk type-safety dan validasi:

```ts
import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      type: 'page',
      source: 'articles/**/*.md',
      schema: z.object({
        title: z.string().max(60),
        description: z.string().max(160),
        image: z.string(),
        author: z.string().default('Asdita'),
        publishedAt: z.string(),
        updatedAt: z.string().optional(),
        tags: z.array(z.string()),
        draft: z.boolean().default(false),
        keywords: z.string().optional(),
      }),
    }),
  },
})
```

### 4.2 Querying Articles

Nuxt Content v3 menggunakan `queryCollection()` API (bukan `queryContent()` dari v2):

```ts
// Get all published articles, sorted by date
const { data: articles } = await useAsyncData('articles', () =>
  queryCollection('articles')
    .where('draft', '=', false)
    .order('publishedAt', 'DESC')
    .all()
)

// Get single article by path
const { data: article } = await useAsyncData(slug, () =>
  queryCollection('articles')
    .path(`/articles/${slug}`)
    .first()
)

// Get articles by tag
const { data: articles } = await useAsyncData(`tag-${tag}`, () =>
  queryCollection('articles')
    .where('tags', 'LIKE', `%${tag}%`)
    .order('publishedAt', 'DESC')
    .all()
)

// Get surrounding articles (prev/next)
const { data: surround } = await useAsyncData(`surround-${slug}`, () =>
  queryCollectionItemSurroundings('articles', `/articles/${slug}`)
)
```

### 4.3 Front Matter per Article

Setiap file Markdown wajib memiliki front matter sesuai schema:

```yaml
---
title: "Apa Itu Vibe Coding?"
description: "Panduan lengkap vibe coding untuk developer Indonesia"
image: "/articles/images/apa-itu-vibe-coding/cover.webp"
author: "Asdita"
publishedAt: "2026-03-27"
updatedAt: "2026-03-28"
tags:
  - vibe-coding
  - ai
  - laravel
draft: false
keywords: "vibe coding, laravel, AI coding, cursor, claude"
---
```

### 4.4 MDC Components (untuk di dalam Markdown)

Mendukung MDC (Markdown Components) untuk embed komponen Vue di dalam artikel:

| Komponen | Syntax di Markdown | Deskripsi |
|---|---|---|
| `::callout` | `::callout{type="tip"}` | Info/warning/tip box |
| `::youtube` | `::youtube{id="VIDEO_ID"}` | Embed YouTube |
| `::course-cta` | `::course-cta{slug="mahir-vibe-coding"}` | Inline CTA ke course |
| `::code-group` | `::code-group` | Tabbed code blocks |

---

## 5. Halaman yang Dibutuhkan

### 5.1 Articles Index — `/articles`

- Daftar semua artikel yang sudah dipublish (`draft: false`)
- Urutan: terbaru di atas (`publishedAt` DESC)
- Pagination (10 artikel per halaman)
- Setiap card menampilkan: thumbnail/OG image, title, description, tags, tanggal publikasi
- Filter berdasarkan tag (opsional, bisa ditambahkan di iterasi kedua)

### 5.2 Article Detail — `/articles/:slug`

- Render full artikel dari Markdown via `<ContentRenderer />`
- Table of Contents (auto-generated dari heading h2/h3)
- Estimasi waktu baca (reading time)
- Author info
- Tanggal publikasi & terakhir diupdate
- Social share buttons (Twitter/X, LinkedIn, WhatsApp, Copy Link)
- Related articles (berdasarkan kesamaan tags, maks. 3 artikel)
- Prev/Next article navigation via `queryCollectionItemSurroundings()`
- CTA banner ke course MahirVibeCoding di akhir artikel

### 5.3 Tag Page — `/articles/tag/:tag`

- Daftar artikel berdasarkan tag tertentu
- Reuse layout dari Articles Index

---

## 6. SEO Requirements

### 6.1 Technical SEO

| Requirement | Detail |
|---|---|
| Rendering | SSG (pre-render semua halaman articles saat build) |
| Sitemap | Auto-generate via `@nuxtjs/sitemap`, include semua URL articles |
| Robots.txt | Auto-generate via `@nuxtjs/robots` |
| Canonical URL | Otomatis via `nuxt-seo-utils` |
| Link checker | Deteksi broken links via `nuxt-link-checker` (dev mode) |
| Trailing slash | Konsisten tanpa trailing slash |
| 404 handling | Custom 404 page untuk URL articles yang tidak ditemukan |

### 6.2 On-Page SEO

| Requirement | Detail |
|---|---|
| Title tag | `{article.title} — MahirVibeCoding` (maks. 60 karakter) |
| Meta description | Dari front matter `description` (maks. 160 karakter) |
| Meta keywords | Dari front matter `keywords` |
| Heading hierarchy | H1 = title (satu per halaman), H2/H3 untuk sub-section |
| Image alt text | Wajib pada semua gambar di artikel |
| Internal linking | Setiap artikel minimal 1 internal link ke artikel lain atau halaman course |
| URL structure | `/articles/:slug` — slug pendek, deskriptif, lowercase, hyphen-separated |

### 6.3 SEO Meta Implementation

Menggunakan `useSeoMeta()` composable dari Nuxt (bagian dari `nuxt-seo-utils`):

```ts
// app/pages/articles/[slug].vue
const article = /* fetched article */

useSeoMeta({
  title: article.title,
  description: article.description,
  ogTitle: article.title,
  ogDescription: article.description,
  ogImage: article.image,
  ogUrl: `https://mahirvibecoding.com/articles/${article.slug}`,
  ogType: 'article',
  articlePublishedTime: article.publishedAt,
  articleModifiedTime: article.updatedAt,
  articleTag: article.tags,
  twitterCard: 'summary_large_image',
  twitterTitle: article.title,
  twitterDescription: article.description,
  twitterImage: article.image,
})
```

### 6.4 Structured Data (JSON-LD)

Menggunakan `nuxt-schema-org` (bagian dari `@nuxtjs/seo`) dengan `useSchemaOrg()` composable:

```ts
useSchemaOrg([
  defineArticle({
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      name: article.author,
      url: 'https://mahirvibecoding.com',
    },
  }),
])
```

Halaman Articles Index menggunakan `defineWebPage({ '@type': 'CollectionPage' })`.

### 6.5 OG Image Generation

Menggunakan `nuxt-og-image` (bagian dari `@nuxtjs/seo`) untuk auto-generate OG images:

```ts
// app/pages/articles/[slug].vue
defineOgImageComponent('OgImageArticle', {
  title: article.title,
  description: article.description,
  tags: article.tags,
})
```

Buat komponen OG image template di `app/components/OgImageArticle.vue`.

### 6.6 Performance (Core Web Vitals)

| Metric | Target |
|---|---|
| LCP (Largest Contentful Paint) | < 2.5s |
| INP (Interaction to Next Paint) | < 200ms |
| CLS (Cumulative Layout Shift) | < 0.1 |

Strategi:
- Lazy load gambar di bawah fold
- Preload hero image via `<NuxtImg>` atau `@nuxt/image` v2
- Font: self-hosted via `@nuxt/fonts` (otomatis di Nuxt 4)
- Optimasi gambar: format WebP/AVIF, responsive sizes via `<NuxtImg>`
- Payload deduplication (otomatis di Nuxt 4 untuk prerendered pages)

---

## 7. Nuxt Config

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/seo',
    '@nuxt/image',
    '@nuxt/fonts',
  ],

  site: {
    url: 'https://mahirvibecoding.com',
    name: 'MahirVibeCoding',
    description: 'Belajar bikin aplikasi dengan AI Coding Agent dan Laravel',
    defaultLocale: 'id',
  },

  content: {
    experimental: {
      nativeSqlite: true, // Requires Node.js >= v22.5.0
    },
  },

  routeRules: {
    '/articles/**': { prerender: true },
  },
})
```

---

## 8. Komponen UI

### 8.1 Komponen Articles

| Komponen | Deskripsi |
|---|---|
| `ArticleCard` | Card preview artikel (thumbnail, title, desc, tags, date) |
| `ArticleList` | List wrapper + pagination logic |
| `ArticleToc` | Table of Contents sidebar (auto-generated dari heading) |
| `ArticleMeta` | Author, date, reading time |
| `ArticleTags` | Tag chips dengan link ke `/articles/tag/:tag` |
| `ArticleShare` | Social share buttons |
| `ArticleRelated` | Related articles section (berdasarkan tags) |
| `ArticleCta` | CTA banner ke course (ditempatkan di akhir artikel) |

### 8.2 Rendering

Gunakan `<ContentRenderer />` dari Nuxt Content v3 untuk render Markdown ke HTML + Vue components:

```vue
<template>
  <article v-if="article">
    <ArticleMeta :article="article" />
    <ContentRenderer :value="article" />
    <ArticleCta />
    <ArticleRelated :tags="article.tags" :current-slug="article.path" />
  </article>
</template>
```

---

## 9. RSS Feed

- Generate RSS feed di `/feed.xml`
- Berisi 20 artikel terbaru
- Implementasi via Nitro server route (`server/routes/feed.xml.ts`)
- Format: RSS 2.0 atau Atom
- Include: title, description, link, pubDate, author

---

## 10. Scope & Milestones

### Phase 1 — MVP (Target: 1-2 minggu)

- [ ] Setup Nuxt Content v3.12.0 + `content.config.ts` dengan articles collection
- [ ] Buat directory structure sesuai Nuxt 4 (`app/pages/articles/`)
- [ ] Implementasi halaman Articles Index (`/articles`) + Article Detail (`/articles/:slug`)
- [ ] Schema Zod untuk front matter validation
- [ ] `queryCollection()` queries untuk listing & detail
- [ ] SEO meta tags via `useSeoMeta()` (title, description, OG, Twitter Card)
- [ ] Sitemap & robots.txt via `@nuxtjs/seo`
- [ ] ArticleCard, ArticleToc, ArticleMeta components
- [ ] SSG build configuration + route rules
- [ ] Deploy & verifikasi dengan Google Search Console

### Phase 2 — Enhancement (Target: 2-3 minggu setelah MVP)

- [ ] Tag page (`/articles/tag/:tag`)
- [ ] Related articles (berdasarkan tags)
- [ ] Prev/Next navigation via `queryCollectionItemSurroundings()`
- [ ] Social share buttons
- [ ] RSS feed via Nitro server route
- [ ] MDC components (callout, youtube, course-cta, code-group)
- [ ] JSON-LD structured data via `useSchemaOrg()`
- [ ] Reading time calculation
- [ ] Pagination

### Phase 3 — Optimization (Ongoing)

- [ ] OG image auto-generation via `nuxt-og-image` + custom template
- [ ] Client-side search via `queryCollectionSearchSections()`
- [ ] Broken link detection via `nuxt-link-checker`
- [ ] Analytics integration (view count per artikel, bisa pakai Supabase)
- [ ] A/B testing title & description untuk optimasi CTR

---

## 11. Catatan Tambahan

- **Authoring workflow**: Tulis artikel di IDE/Obsidian → commit ke repo → auto-deploy via CI/CD (Vercel/Netlify)
- **Image management**: Simpan gambar artikel di `public/articles/images/{slug}/` untuk organisasi yang rapi, gunakan `<NuxtImg>` untuk optimasi otomatis
- **Draft system**: Artikel dengan `draft: true` di-filter via `queryCollection().where('draft', '=', false)`, tidak ter-render di production
- **TypeScript**: Semua query dan schema fully typed berkat Nuxt Content v3 collection system + Nuxt 4 separated TS projects
- **Konten awal**: Mulai dengan 3-5 artikel seputar topik utama (vibe coding, Laravel + AI, prompt engineering) sebelum submit ke Google Search Console untuk indexing
- **Database**: Nuxt Content v3 menggunakan SQL-based storage (SQLite) secara internal — ini transparan dan tidak perlu setup database tambahan. Gunakan `nativeSqlite: true` untuk Node.js >= v22.5.0