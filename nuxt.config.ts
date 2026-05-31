import { buildRoutes } from './build/content-routes'
import { buildHead, ogImage, seoConfig } from './build/seo'

// https://nuxt.com/docs/api/configuration/nuxt-config
const { siteUrl, siteName, siteTitle, siteDescription } = seoConfig
const gaMeasurementId = process.env.NUXT_PUBLIC_GA_MEASUREMENT_ID || ''
const isGaEnabled = /^G-[A-Z0-9]+$/i.test(gaMeasurementId)
const { prerenderRoutes, sitemapUrls } = buildRoutes()

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxtjs/robots',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/sitemap',
    'nuxt-schema-org',
    'nuxt-og-image',
    'nuxt-link-checker',
    'nuxt-gtag',
    '@nuxt/scripts',
  ],
  css: ['~/assets/css/global.css'],
  scripts: {
    registry: {
      metaPixel: {
        id: process.env.NUXT_PUBLIC_META_PIXEL_ID || '',
        trigger: 'onNuxtReady',
        // Muat fbevents.js langsung dari connect.facebook.net (jangan di-bundle/proxy
        // ke /_scripts). Default registry `bundle: true` membuat skrip self-hosted,
        // sehingga Meta Pixel Helper & Events Manager tidak mengenalinya sebagai Pixel.
        bundle: false,
      }
    }
  },
  gtag: {
    enabled: isGaEnabled,
    id: isGaEnabled ? gaMeasurementId : undefined,
  },

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
    trailingSlash: true,
  },

  robots: {
    sitemap: `${siteUrl}/sitemap.xml`,
  },

  sitemap: {
    urls: sitemapUrls,
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
    head: buildHead(),
  },

  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },

  routeRules: {
    '/': { prerender: true },
    '/articles': { prerender: true },
    '/articles/**': { prerender: true },
    '/studycase': { prerender: true },
    '/studycase/**': { prerender: true },
    '/privacy': { prerender: true },
    '/terms': { prerender: true },
    '/feed.xml': { prerender: true },
    // 301 redirects for legacy article slugs (renamed to drop the artikel-N- prefix)
    '/articles/artikel-1-kenapa-proyek-vibe-coding-gagal': { redirect: { to: '/articles/kenapa-proyek-vibe-coding-gagal/', statusCode: 301 } },
    '/articles/artikel-2-kamu-bukan-developer-lagi-kamu-jadi-penonton': { redirect: { to: '/articles/kamu-bukan-developer-lagi-kamu-jadi-penonton/', statusCode: 301 } },
    '/articles/artikel-3-prompt-sempurna-tidak-cukup': { redirect: { to: '/articles/prompt-sempurna-tidak-cukup/', statusCode: 301 } },
    '/articles/artikel-4-jangan-serahkan-database-schema-ke-ai': { redirect: { to: '/articles/jangan-serahkan-database-schema-ke-ai/', statusCode: 301 } },
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