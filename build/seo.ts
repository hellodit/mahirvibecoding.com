export const seoConfig = {
  siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://mahirvibecoding.com',
  siteName: process.env.NUXT_PUBLIC_SITE_NAME || 'MahirVibeCoding',
  siteTitle: process.env.NUXT_PUBLIC_SITE_TITLE || 'MahirVibeCoding — Strategi Vibe Coding untuk Membangun Aplikasi Fullstack',
  siteDescription: process.env.NUXT_PUBLIC_SITE_DESCRIPTION || 'Framework lengkap untuk membangun aplikasi fullstack bersama AI Coding Agent — dari planning hingga deploy.',
}

export const ogImage = process.env.NUXT_PUBLIC_OG_IMAGE || `${seoConfig.siteUrl}/og-image.png`

export function buildHead() {
  const { siteUrl, siteName, siteTitle, siteDescription } = seoConfig

  return {
    htmlAttrs: { lang: 'id' },
    title: siteTitle,
    meta: [
      { name: 'description', content: siteDescription },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'utf-8' },
      // Open Graph
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: `${siteUrl}/` },
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
      { rel: 'canonical', href: `${siteUrl}/` },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' as const },
      { rel: 'alternate', type: 'application/rss+xml', title: `${siteName} Articles Feed`, href: `${siteUrl}/feed.xml` },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(buildProductSchema()),
      },
    ],
  }
}

function buildProductSchema() {
  const { siteUrl, siteName, siteDescription } = seoConfig

  return {
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
  }
}
