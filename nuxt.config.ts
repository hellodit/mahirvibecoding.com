// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/image', '@nuxtjs/tailwindcss'],
  css: ['~/assets/css/global.css'],
  fonts: {
    families: [
      { name: 'Inter', provider: 'google', weights: [400, 500, 600, 700, 800] }
    ]
  },
  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      title: 'MahirVibeCoding — Strategi Vibe Coding untuk Membangun Aplikasi Fullstack',
      meta: [
        { name: 'description', content: 'Framework lengkap untuk membangun aplikasi fullstack bersama AI Coding Agent — dari planning hingga deploy.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' }
      ]
    }
  }
})