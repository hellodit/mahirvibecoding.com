// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/image', '@nuxtjs/tailwindcss', '@nuxtjs/sitemap'],
  css: ['~/assets/css/global.css'],

  site: {
    url: 'https://mahirvibecoding.com',
    name: 'MahirVibeCoding',
  },

  fonts: {
    families: [
      { name: 'Plus Jakarta Sans', provider: 'google', weights: [400, 500, 600, 700, 800] }
    ]
  },

  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      title: 'MahirVibeCoding — Strategi Vibe Coding untuk Membangun Aplikasi Fullstack',
      meta: [
        { name: 'description', content: 'Framework lengkap untuk membangun aplikasi fullstack bersama AI Coding Agent — dari planning hingga deploy.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://mahirvibecoding.com' },
        { property: 'og:title', content: 'MahirVibeCoding — Strategi Vibe Coding untuk Membangun Aplikasi Fullstack' },
        { property: 'og:description', content: 'Framework lengkap untuk membangun aplikasi fullstack bersama AI Coding Agent — dari planning hingga deploy.' },
        { property: 'og:image', content: 'https://mahirvibecoding.com/og-image.png' },
        { property: 'og:locale', content: 'id_ID' },
        { property: 'og:site_name', content: 'MahirVibeCoding' },
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'MahirVibeCoding — Strategi Vibe Coding untuk Membangun Aplikasi Fullstack' },
        { name: 'twitter:description', content: 'Framework lengkap untuk membangun aplikasi fullstack bersama AI Coding Agent — dari planning hingga deploy.' },
        { name: 'twitter:image', content: 'https://mahirvibecoding.com/og-image.png' },
      ],
      link: [
        { rel: 'canonical', href: 'https://mahirvibecoding.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'MahirVibeCoding',
            description: 'Framework lengkap untuk membangun aplikasi fullstack bersama AI Coding Agent — dari planning hingga deploy.',
            url: 'https://mahirvibecoding.com',
            brand: { '@type': 'Brand', name: 'MahirVibeCoding' },
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
