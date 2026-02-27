// https://nuxt.com/docs/api/configuration/nuxt-config
const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://mahirvibecoding.com'
const siteName = process.env.NUXT_PUBLIC_SITE_NAME || 'MahirVibeCoding'
const siteTitle = process.env.NUXT_PUBLIC_SITE_TITLE || 'MahirVibeCoding — Strategi Vibe Coding untuk Membangun Aplikasi Fullstack'
const siteDescription = process.env.NUXT_PUBLIC_SITE_DESCRIPTION || 'Framework lengkap untuk membangun aplikasi fullstack bersama AI Coding Agent — dari planning hingga deploy.'
const ogImage = process.env.NUXT_PUBLIC_OG_IMAGE || `${siteUrl}/og-image.png`

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/image', '@nuxtjs/tailwindcss', '@nuxtjs/sitemap'],
  css: ['~/assets/css/global.css'],

  runtimeConfig: {
    public: {
      siteUrl,
      siteName,
      siteTitle,
      siteDescription,
      ogImage,
    },
  },

  site: {
    url: siteUrl,
    name: siteName,
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
        { property: 'og:image', content: ogImage },
        { property: 'og:locale', content: 'id_ID' },
        { property: 'og:site_name', content: siteName },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: siteTitle },
        { name: 'twitter:description', content: siteDescription },
        { name: 'twitter:image', content: ogImage },
      ],
      link: [
        { rel: 'canonical', href: siteUrl },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
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
})
