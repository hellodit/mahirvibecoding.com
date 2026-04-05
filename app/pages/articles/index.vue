<template>
  <div class="min-h-screen bg-[linear-gradient(180deg,_rgba(46,107,59,0.08)_0%,_rgba(255,255,255,1)_28%)]">
    <NavBar :announcement-visible="false" />

    <main class="px-6 pb-20 pt-10 md:pt-14">
      <div class="mx-auto max-w-6xl">
        <section class="max-w-3xl">
          <p class="text-xs font-semibold uppercase tracking-[0.26em] text-primary">
            Articles
          </p>
          <h1 class="mt-4 text-4xl font-bold tracking-tight text-text md:text-5xl">
            Insight praktis soal vibe coding, Laravel, dan AI workflow.
          </h1>
          <p class="mt-5 text-base leading-8 text-text/72 md:text-lg">
            Kumpulan artikel untuk developer Indonesia yang ingin membangun produk lebih cepat
            tanpa jatuh ke alur kerja AI yang rapuh.
          </p>
        </section>

        <section class="mt-12">
          <ArticleSearchPanel
            v-if="searchSections.length"
            :sections="searchSections"
          />

          <div class="mb-8 flex flex-wrap gap-2">
            <NuxtLink
              v-for="tag in availableTags"
              :key="tag"
              :to="getTagPath(tag)"
              class="rounded-full border border-primary/15 bg-white/80 px-4 py-2 text-sm font-semibold text-text transition hover:border-primary hover:text-primary"
            >
              #{{ tag }}
            </NuxtLink>
          </div>

          <div v-if="featuredArticle" class="mb-12">
            <h2 class="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-primary">
              Latest article
            </h2>
            <ArticleFeaturedCard :article="featuredArticle" />
          </div>

          <h2
            v-if="featuredArticle && restArticles.length"
            class="mb-5 text-xs font-semibold uppercase tracking-[0.26em] text-text/55"
          >
            More articles
          </h2>
          <ArticleList :articles="restArticles" />
          <ArticlePagination
            :current-page="articlesPage.currentPage"
            :total-pages="articlesPage.totalPages"
            path="/articles"
          />
        </section>
      </div>
    </main>

    <FooterSection />
  </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const requestedPage = Number.parseInt(String(route.query.page ?? '1'), 10) || 1

const { data: articlesPageData } = await useAsyncData(
  `articles-list-${requestedPage}`,
  () => fetchPaginatedArticles(requestedPage),
)
const { data: availableTagsData } = await useAsyncData('articles-tags', fetchAvailableTags)
const { data: searchSectionsData } = await useAsyncData('article-search-sections', fetchArticleSearchSections)

const articlesPage = articlesPageData.value ?? paginateArticles([], 1)
const availableTags = availableTagsData.value ?? []
const searchSections = searchSectionsData.value ?? []
const featuredArticle = articlesPage.currentPage === 1 ? articlesPage.items[0] ?? null : null
const restArticles = featuredArticle ? articlesPage.items.slice(1) : articlesPage.items
const canonicalUrl = articlesPage.currentPage > 1
  ? `${runtimeConfig.public.siteUrl}/articles?page=${articlesPage.currentPage}`
  : `${runtimeConfig.public.siteUrl}/articles`

defineOgImageComponent('ArticleFrame', {
  title: articlesPage.currentPage > 1 ? `Articles Page ${articlesPage.currentPage}` : 'Articles',
  description: 'Kumpulan insight praktis soal vibe coding, Laravel, AI coding agent, dan workflow development.',
  tags: availableTags.slice(0, 3),
  eyebrow: 'Knowledge Base',
})

useSchemaOrg([
  defineWebSite({
    name: runtimeConfig.public.siteName,
    url: runtimeConfig.public.siteUrl,
  }),
  defineWebPage({
    name: articlesPage.currentPage > 1 ? `Articles Page ${articlesPage.currentPage}` : 'Articles',
    description: 'Artikel MahirVibeCoding tentang vibe coding, Laravel, AI coding agent, dan workflow development yang lebih strategis.',
    url: canonicalUrl,
  }),
  defineBreadcrumb({
    itemListElement: [
      { position: 1, name: 'Home', item: runtimeConfig.public.siteUrl },
      { position: 2, name: 'Articles', item: `${runtimeConfig.public.siteUrl}/articles` },
    ],
  }),
  defineItemList({
    itemListElement: articlesPage.items.map((article, index) => ({
      position: index + 1,
      name: article.title,
      item: `${runtimeConfig.public.siteUrl}${article.path}`,
    })),
  }),
])

useSeoMeta({
  title: articlesPage.currentPage > 1
    ? `Articles Page ${articlesPage.currentPage} — ${runtimeConfig.public.siteName}`
    : `Articles — ${runtimeConfig.public.siteName}`,
  description: 'Artikel MahirVibeCoding tentang vibe coding, Laravel, AI coding agent, dan workflow development yang lebih strategis.',
  ogTitle: articlesPage.currentPage > 1
    ? `Articles Page ${articlesPage.currentPage} — ${runtimeConfig.public.siteName}`
    : `Articles — ${runtimeConfig.public.siteName}`,
  ogDescription: 'Artikel MahirVibeCoding tentang vibe coding, Laravel, AI coding agent, dan workflow development yang lebih strategis.',
  ogType: 'website',
  ogUrl: canonicalUrl,
  twitterCard: 'summary_large_image',
  twitterTitle: articlesPage.currentPage > 1
    ? `Articles Page ${articlesPage.currentPage} — ${runtimeConfig.public.siteName}`
    : `Articles — ${runtimeConfig.public.siteName}`,
  twitterDescription: 'Artikel MahirVibeCoding tentang vibe coding, Laravel, AI coding agent, dan workflow development yang lebih strategis.',
})

useHead({
  link: [
    { rel: 'canonical', href: canonicalUrl },
  ],
})
</script>
