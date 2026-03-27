<template>
  <div class="min-h-screen bg-[linear-gradient(180deg,_rgba(46,107,59,0.08)_0%,_rgba(255,255,255,1)_28%)]">
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

        <section class="mt-8 max-w-3xl">
          <p class="text-xs font-semibold uppercase tracking-[0.26em] text-primary">
            Tag Archive
          </p>
          <h1 class="mt-4 text-4xl font-bold tracking-tight text-text md:text-5xl">
            #{{ currentTag }}
          </h1>
          <p class="mt-5 text-base leading-8 text-text/72 md:text-lg">
            Semua artikel MahirVibeCoding yang terkait dengan tag ini.
          </p>
        </section>

        <section class="mt-12">
          <div class="mb-8 flex flex-wrap gap-2">
            <NuxtLink
              v-for="tag in availableTags"
              :key="tag"
              :to="getTagPath(tag)"
              class="rounded-full border px-4 py-2 text-sm font-semibold transition"
              :class="tag === currentTag
                ? 'border-primary bg-primary text-white'
                : 'border-primary/15 bg-white/80 text-text hover:border-primary hover:text-primary'"
            >
              #{{ tag }}
            </NuxtLink>
          </div>

          <ArticleList
            :articles="articlesPage.items"
            empty-title="Belum ada artikel untuk tag ini."
            empty-description="Tag ini belum punya artikel yang dipublikasikan."
          />
          <ArticlePagination
            :current-page="articlesPage.currentPage"
            :total-pages="articlesPage.totalPages"
            :path="getTagPath(currentTag)"
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
const currentTag = normalizeTag(String(route.params.tag ?? ''))
const requestedPage = Number.parseInt(String(route.query.page ?? '1'), 10) || 1

const { data: availableTagsData } = await useAsyncData('articles-tags', fetchAvailableTags)
const availableTags = availableTagsData.value ?? []

if (!availableTags.includes(currentTag)) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Tag not found',
  })
}

const { data: articlesPageData } = await useAsyncData(
  `articles-tag-${currentTag}-${requestedPage}`,
  () => fetchPaginatedArticles(requestedPage, currentTag),
)

const articlesPage = articlesPageData.value ?? paginateArticles([], 1)
const canonicalUrl = articlesPage.currentPage > 1
  ? `${runtimeConfig.public.siteUrl}${getTagPath(currentTag)}?page=${articlesPage.currentPage}`
  : `${runtimeConfig.public.siteUrl}${getTagPath(currentTag)}`

defineOgImageComponent('ArticleFrame', {
  title: `#${currentTag}`,
  description: `Archive artikel MahirVibeCoding untuk topik ${currentTag}.`,
  tags: [currentTag],
  eyebrow: 'Tag Archive',
})

useSchemaOrg([
  defineWebPage({
    name: `Articles tagged ${currentTag}`,
    description: `Kumpulan artikel MahirVibeCoding untuk tag ${currentTag}.`,
    url: canonicalUrl,
  }),
  defineBreadcrumb({
    itemListElement: [
      { position: 1, name: 'Home', item: runtimeConfig.public.siteUrl },
      { position: 2, name: 'Articles', item: `${runtimeConfig.public.siteUrl}/articles` },
      { position: 3, name: `#${currentTag}`, item: canonicalUrl },
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
  title: `#${currentTag} — Articles — ${runtimeConfig.public.siteName}`,
  description: `Kumpulan artikel MahirVibeCoding untuk tag ${currentTag}.`,
  ogTitle: `#${currentTag} — Articles — ${runtimeConfig.public.siteName}`,
  ogDescription: `Kumpulan artikel MahirVibeCoding untuk tag ${currentTag}.`,
  ogType: 'website',
  ogUrl: canonicalUrl,
  twitterCard: 'summary_large_image',
  twitterTitle: `#${currentTag} — Articles — ${runtimeConfig.public.siteName}`,
  twitterDescription: `Kumpulan artikel MahirVibeCoding untuk tag ${currentTag}.`,
})

useHead({
  link: [
    { rel: 'canonical', href: canonicalUrl },
  ],
})
</script>
