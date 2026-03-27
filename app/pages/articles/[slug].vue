<template>
  <div class="min-h-screen bg-[linear-gradient(180deg,_rgba(46,107,59,0.07)_0%,_rgba(255,255,255,1)_24%)]">
    <NavBar :announcement-visible="false" />

    <main class="px-6 pb-20 pt-10 md:pt-14">
      <div class="mx-auto max-w-6xl">
        <NuxtLink
          to="/articles"
          class="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-text"
        >
          <IconArrowRight class="h-4 w-4 rotate-180" />
          <span>Kembali ke semua artikel</span>
        </NuxtLink>

        <div class="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-start">
          <article class="min-w-0">
            <div class="overflow-hidden rounded-[32px] border border-primary/10 bg-white shadow-sm">
              <NuxtImg
                :src="article.image"
                :alt="article.title"
                class="aspect-[16/9] w-full object-cover"
                sizes="100vw lg:900px"
              />

              <div class="px-6 py-8 md:px-10 md:py-10">
                <ArticleTags :tags="article.tags" />

                <h1 class="mt-5 text-3xl font-bold leading-tight tracking-tight text-text md:text-[2.75rem]">
                  {{ article.title }}
                </h1>
                <p class="mt-5 max-w-3xl text-base leading-8 text-text/72 md:text-lg">
                  {{ article.description }}
                </p>

                <div class="mt-8 border-t border-primary/10 pt-6">
                  <ArticleMeta
                    :article="article"
                    :reading-stats="readingStats"
                    :view-count="viewCount"
                  />
                </div>

                <div class="article-content mt-10">
                  <ContentRenderer :value="article" />
                </div>

                <div class="mt-12 space-y-6">
                  <ArticleShare
                    :article-title="article.title"
                    :url="canonicalUrl"
                  />
                  <ArticleCta />
                </div>
              </div>
            </div>
          </article>

          <div class="space-y-5">
            <ArticleToc :links="articleTocLinks" />
            <section class="rounded-[28px] border border-primary/10 bg-white p-6 shadow-sm">
              <p class="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Topik</p>
              <div class="mt-4">
                <ArticleTags :tags="article.tags" />
              </div>
            </section>
          </div>
        </div>

        <div class="mt-10 space-y-8">
          <ArticleSurroundings
            :previous="previousArticle"
            :next="nextArticle"
          />
          <ArticleRelated :articles="relatedArticles" />
        </div>
      </div>
    </main>

    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import type { ArticleRecord, ArticleTocLink } from '~/composables/useArticles'

const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const slug = String(route.params.slug ?? '')

const { data: articleData } = await useAsyncData<ArticleRecord | null>(
  `article-${slug}`,
  () => fetchArticleBySlug(slug),
)

if (!articleData.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Article not found',
  })
}

const article = articleData.value
const readingStats = calculateReadingStats(article)
const articleTocLinks = extractTocLinks(article.body)

const { data: relatedArticlesData } = await useAsyncData(
  `article-related-${slug}`,
  () => fetchRelatedArticles(article),
)

const { data: surroundingsData } = await useAsyncData(
  `article-surroundings-${slug}`,
  () => fetchArticleSurroundings(article.path),
)

const previousArticle = surroundingsData.value?.[0] ?? null
const nextArticle = surroundingsData.value?.[1] ?? null
const relatedArticles = relatedArticlesData.value ?? []
const canonicalUrl = `${runtimeConfig.public.siteUrl}${article.path}`
const analytics = useArticleAnalytics()
const viewCount = ref<number | null>(null)

defineOgImageComponent('ArticleFrame', {
  title: article.title,
  description: article.description,
  tags: article.tags,
  eyebrow: formatArticleDate(article.publishedAt),
  footer: 'MahirVibeCoding Articles',
})

useSchemaOrg([
  defineArticle({
    headline: article.title,
    description: article.description,
    image: `${runtimeConfig.public.siteUrl}${article.image}`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt ?? article.publishedAt,
    author: [
      definePerson({
        name: article.author,
      }),
    ],
    keywords: article.tags,
    inLanguage: 'id-ID',
    url: canonicalUrl,
  }),
  defineBreadcrumb({
    itemListElement: [
      { position: 1, name: 'Home', item: runtimeConfig.public.siteUrl },
      { position: 2, name: 'Articles', item: `${runtimeConfig.public.siteUrl}/articles` },
      { position: 3, name: article.title, item: canonicalUrl },
    ],
  }),
])

useSeoMeta({
  title: `${article.title} — ${runtimeConfig.public.siteName}`,
  description: article.description,
  keywords: article.keywords,
  author: article.author,
  ogTitle: article.title,
  ogDescription: article.description,
  ogType: 'article',
  ogUrl: canonicalUrl,
  twitterCard: 'summary_large_image',
  twitterTitle: article.title,
  twitterDescription: article.description,
})

useHead({
  link: [
    { rel: 'canonical', href: canonicalUrl },
  ],
})

function extractTocLinks(body: unknown) {
  if (!body || typeof body !== 'object') {
    return [] as ArticleTocLink[]
  }

  const toc = 'toc' in body ? body.toc : undefined

  if (!toc || typeof toc !== 'object') {
    return [] as ArticleTocLink[]
  }

  const links = 'links' in toc ? toc.links : undefined
  return Array.isArray(links) ? links as ArticleTocLink[] : []
}

onMounted(async () => {
  const articleSlug = article.path.split('/').filter(Boolean).at(-1)

  if (!articleSlug) {
    return
  }

  await trackOncePerSession(`view:${articleSlug}`, async () => {
    await analytics.track(articleSlug, {
      event: 'view',
      source: 'detail',
    })
  })

  const stats = await analytics.fetchStats(articleSlug)
  viewCount.value = stats?.views ?? null
})
</script>

<style scoped>
.article-content :deep(h2) {
  margin-top: 2.5rem;
  font-size: 1.75rem;
  font-weight: 800;
  line-height: 1.2;
  color: #050315;
}

.article-content :deep(h3) {
  margin-top: 1.75rem;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.35;
  color: #050315;
}

.article-content :deep(p),
.article-content :deep(li) {
  margin-top: 1rem;
  font-size: 1rem;
  line-height: 1.95;
  color: rgb(5 3 21 / 0.78);
}

.article-content :deep(ul),
.article-content :deep(ol) {
  margin-top: 1rem;
  padding-left: 1.25rem;
}

.article-content :deep(a) {
  color: #2e6b3b;
  font-weight: 600;
  text-decoration: underline;
  text-decoration-thickness: 0.08em;
  text-underline-offset: 0.2em;
}

.article-content :deep(blockquote) {
  margin-top: 1.5rem;
  border-left: 4px solid rgb(46 107 59 / 0.22);
  padding-left: 1rem;
  font-style: italic;
  color: rgb(5 3 21 / 0.68);
}

.article-content :deep(code) {
  border-radius: 0.5rem;
  background: rgb(46 107 59 / 0.08);
  padding: 0.15rem 0.4rem;
  font-size: 0.9em;
  color: #1f4c29;
}

.article-content :deep(pre) {
  margin-top: 1.5rem;
  overflow-x: auto;
  border-radius: 1.25rem;
  background: #09110b;
  padding: 1rem 1.25rem;
  color: #f8fafc;
}

.article-content :deep(pre code) {
  background: transparent;
  padding: 0;
  color: inherit;
}

.article-content :deep(img) {
  margin-top: 1.5rem;
  border-radius: 1.5rem;
}
</style>
