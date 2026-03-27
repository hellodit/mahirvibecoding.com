<template>
  <article class="group flex h-full flex-col overflow-hidden rounded-[28px] border border-primary/10 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg">
    <NuxtLink :to="article.path" class="flex h-full flex-col" @click="trackClick">
      <div class="aspect-[16/9] overflow-hidden bg-primary/5">
        <NuxtImg
          :src="article.image"
          :alt="displayTitle"
          class="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          sizes="sm:100vw md:50vw lg:33vw"
        />
      </div>

      <div class="flex flex-1 flex-col gap-4 p-6">
        <ArticleTags :tags="article.tags" :linked="false" />

        <div class="space-y-3">
          <p class="text-xs font-medium uppercase tracking-[0.22em] text-text/45">
            {{ publishedLabel }}
          </p>
          <h2 class="text-xl font-bold leading-tight text-text transition-colors group-hover:text-primary">
            {{ displayTitle }}
          </h2>
          <p class="text-sm leading-6 text-text/72">
            {{ displayDescription }}
          </p>
        </div>

        <div class="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary">
          <span>Baca artikel</span>
          <IconArrowRight class="h-4 w-4" />
        </div>
      </div>
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
import type { ArticleRecord } from '~/composables/useArticles'

const props = defineProps<{
  article: ArticleRecord
  source?: 'listing' | 'related'
}>()

const analytics = useArticleAnalytics()
const { variant, getTitle, getDescription } = useArticleExperimentCopy()
const publishedLabel = computed(() => formatArticleDate(props.article.publishedAt))
const displayTitle = computed(() => getTitle(props.article))
const displayDescription = computed(() => getDescription(props.article))
const source = computed(() => props.source ?? 'listing')
const slug = computed(() => props.article.path.split('/').filter(Boolean).at(-1) ?? '')

onMounted(() => {
  if (!slug.value) {
    return
  }

  void trackOncePerSession(`impression:${source.value}:${slug.value}`, async () => {
    await analytics.track(slug.value, {
      event: 'impression',
      source: source.value,
      variant: variant.value,
    })
  })
})

function trackClick() {
  if (!slug.value) {
    return
  }

  void analytics.track(slug.value, {
    event: 'click',
    source: source.value,
    variant: variant.value,
  })
}
</script>
