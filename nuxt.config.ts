import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative, sep } from 'node:path'

// https://nuxt.com/docs/api/configuration/nuxt-config
const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://mahirvibecoding.com'
const siteName = process.env.NUXT_PUBLIC_SITE_NAME || 'MahirVibeCoding'
const siteTitle = process.env.NUXT_PUBLIC_SITE_TITLE || 'MahirVibeCoding — Strategi Vibe Coding untuk Membangun Aplikasi Fullstack'
const siteDescription = process.env.NUXT_PUBLIC_SITE_DESCRIPTION || 'Framework lengkap untuk membangun aplikasi fullstack bersama AI Coding Agent — dari planning hingga deploy.'
const ogImage = process.env.NUXT_PUBLIC_OG_IMAGE || `${siteUrl}/og-image.png`
const articleEntries = getArticleEntries()
const articleRoutes = ['/articles', ...articleEntries.map(entry => `/articles/${entry.slug}`)]
const studyCaseEntries = getStudyCaseEntries()
const studyCaseRoutes = studyCaseEntries.map(entry => `/studycase/${entry.slug}`)
const tagRoutes = Array.from(
  new Set(articleEntries.flatMap(entry => entry.tags.map(tag => `/articles/tag/${encodeURIComponent(tag)}`)))
)
const prerenderRoutes = Array.from(new Set([...articleRoutes, ...studyCaseRoutes, ...tagRoutes, '/feed.xml']))

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/fonts', '@nuxt/image', '@nuxtjs/robots', '@nuxtjs/tailwindcss', '@nuxtjs/sitemap', 'nuxt-schema-org', 'nuxt-og-image', 'nuxt-link-checker'],
  css: ['~/assets/css/global.css'],

  runtimeConfig: {
    public: {
      siteUrl,
      siteName,
      siteTitle,
      siteDescription,
      ogImage,
      articleAnalyticsEnabled: process.env.NUXT_PUBLIC_ARTICLE_ANALYTICS_ENABLED === 'true',
    },
  },

  site: {
    url: siteUrl,
    name: siteName,
  },

  robots: {
    sitemap: `${siteUrl}/sitemap.xml`,
  },

  sitemap: {
    urls: [...articleRoutes, ...tagRoutes],
  },

  ogImage: {
    defaults: {
      cacheMaxAgeSeconds: 60 * 60 * 24 * 7,
    },
    // Cloudflare Workers cannot bundle native @resvg/resvg-js; force WASM so Nitro
    // does not resolve platform-specific .node binaries (e.g. win32) at build time.
    compatibility: {
      runtime: { resvg: 'wasm' },
      prerender: { resvg: 'wasm' },
    },
  },

  linkChecker: {
    report: {
      html: true,
      markdown: true,
      json: true,
    },
  },

  fonts: {
    families: [
      { name: 'Plus Jakarta Sans', provider: 'google', weights: [400, 500, 600, 700, 800] }
    ]
  },

  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      title: siteTitle,
      meta: [
        { name: 'description', content: siteDescription },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: siteUrl },
        { property: 'og:title', content: siteTitle },
        { property: 'og:description', content: siteDescription },

        { property: 'og:image', content: `${siteUrl}/preview.png` },
        { property: 'og:image:width', content: '1280' },
        { property: 'og:image:height', content: '800' },
        { property: 'og:image:type', content: 'image/png' },
        { property: 'og:locale', content: 'id_ID' },
        { property: 'og:site_name', content: siteName },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: siteTitle },
        { name: 'twitter:description', content: siteDescription },
        { name: 'twitter:image', content: `${siteUrl}/preview.png` },

      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'canonical', href: siteUrl },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'alternate', type: 'application/rss+xml', title: `${siteName} Articles Feed`, href: `${siteUrl}/feed.xml` },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: siteName,
            description: siteDescription,
            url: siteUrl,
            brand: { '@type': 'Brand', name: siteName },
            offers: [
              {
                '@type': 'Offer',
                name: 'Lite',
                price: '89000',
                priceCurrency: 'IDR',
                availability: 'https://schema.org/InStock',
              },
              {
                '@type': 'Offer',
                name: 'Pro',
                price: '119400',
                priceCurrency: 'IDR',
                availability: 'https://schema.org/InStock',
              },
              {
                '@type': 'Offer',
                name: 'Ultimate',
                price: '479400',
                priceCurrency: 'IDR',
                availability: 'https://schema.org/InStock',
              },
            ],
          }),
        },
      ],
    }
  },

  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },

  routeRules: {
    '/articles': { prerender: true },
    '/articles/**': { prerender: true },
    '/studycase/**': { prerender: true },
    '/feed.xml': { prerender: true },
  },

  nitro: {
    prerender: {
      routes: prerenderRoutes,
    },
  },

  components: [
    {
      path: '~/components/icons',
      pathPrefix: false,
    },
    {
      path: '~/components/articles',
      pathPrefix: false,
    },
    {
      path: '~/components/content',
      pathPrefix: false,
      global: true,
    },
    {
      path: '~/components',
      ignore: ['**/icons/**', '**/articles/**', '**/content/**'],
    },
  ],
})

function getArticleEntries() {
  const contentRoot = join(process.cwd(), 'content', 'articles')

  if (!existsSync(contentRoot)) {
    return []
  }

  const entries: Array<{ slug: string, tags: string[] }> = []

  const visit = (dir: string) => {
    for (const entry of readdirSync(dir)) {
      const fullPath = join(dir, entry)
      const stats = statSync(fullPath)

      if (stats.isDirectory()) {
        visit(fullPath)
        continue
      }

      if (!entry.endsWith('.md')) {
        continue
      }

      const relativePath = relative(contentRoot, fullPath)
      const slug = relativePath.slice(0, -3).split(sep).join('/')
      const rawContent = readFileSync(fullPath, 'utf8')
      const frontmatter = extractFrontmatter(rawContent)

      if (isDraft(frontmatter)) {
        continue
      }

      entries.push({
        slug,
        tags: extractTags(frontmatter),
      })
    }
  }

  visit(contentRoot)

  return entries
}

function getStudyCaseEntries() {
  const contentRoot = join(process.cwd(), 'content', 'studycase')

  if (!existsSync(contentRoot)) {
    return []
  }

  const entries: Array<{ slug: string }> = []

  const visit = (dir: string) => {
    for (const entry of readdirSync(dir)) {
      const fullPath = join(dir, entry)
      const stats = statSync(fullPath)

      if (stats.isDirectory()) {
        visit(fullPath)
        continue
      }

      if (!entry.endsWith('.md')) {
        continue
      }

      const relativePath = relative(contentRoot, fullPath)
      const slug = relativePath.slice(0, -3).split(sep).join('/')
      const rawContent = readFileSync(fullPath, 'utf8')
      const frontmatter = extractFrontmatter(rawContent)

      if (isDraft(frontmatter)) {
        continue
      }

      entries.push({ slug })
    }
  }

  visit(contentRoot)

  return entries
}

function extractFrontmatter(content: string) {
  const match = content.match(/^---\n([\s\S]*?)\n---/)
  return match?.[1] ?? ''
}

function isDraft(frontmatter: string) {
  return /^\s*draft:\s*true\s*$/m.test(frontmatter)
}

function extractTags(frontmatter: string) {
  const lines = frontmatter.split('\n')
  const tags: string[] = []
  let readingTags = false

  for (const line of lines) {
    if (/^\s*tags:\s*$/.test(line)) {
      readingTags = true
      continue
    }

    if (!readingTags) {
      continue
    }

    const match = line.match(/^\s*-\s*(.+)\s*$/)
    if (match) {
      const tagValue = match[1]
      if (tagValue) {
        tags.push(tagValue.replace(/^['"]|['"]$/g, ''))
      }
      continue
    }

    if (line.trim() === '') {
      continue
    }

    if (/^\S/.test(line)) {
      break
    }
  }

  return tags
}
