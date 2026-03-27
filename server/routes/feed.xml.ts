import { queryCollection } from '../../node_modules/@nuxt/content/dist/runtime/nitro'
import type { ArticleRecord } from '../../app/composables/useArticles'

export default eventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const siteUrl = config.public.siteUrl
  const siteName = config.public.siteName

  const articles = await (queryCollection as unknown as (requestEvent: typeof event, collection: 'articles') => any)(event, 'articles')
    .where('draft', '=', false)
    .order('publishedAt', 'DESC')
    .all() as ArticleRecord[]

  const latestArticles = articles.slice(0, 20)

  const items = latestArticles.map((article) => {
    const link = `${siteUrl}${article.path}`
    const publishedAt = new Date(article.publishedAt).toUTCString()
    const categories = article.tags.map((tag: string) => `<category>${escapeXml(tag)}</category>`).join('')

    return `
      <item>
        <title>${escapeXml(article.title)}</title>
        <description>${escapeXml(article.description)}</description>
        <link>${link}</link>
        <guid>${link}</guid>
        <pubDate>${publishedAt}</pubDate>
        <author>${escapeXml(article.author)}</author>
        ${categories}
      </item>
    `.trim()
  }).join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(siteName)} Articles</title>
    <description>${escapeXml(config.public.siteDescription)}</description>
    <link>${siteUrl}/articles</link>
    <language>id-ID</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`

  setHeader(event, 'content-type', 'application/rss+xml; charset=UTF-8')
  return xml
})

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}
