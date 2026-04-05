<template>
  <article class="group relative overflow-hidden rounded-[10px] border border-primary/15 bg-gradient-to-br from-primary/5 via-white to-white shadow-[0_20px_60px_-30px_rgba(46,107,59,0.35)] transition-colors hover:border-primary">
    <NuxtLink :to="article.path" class="grid gap-0 md:grid-cols-2" @click="trackClick">
      <div class="aspect-[16/10] overflow-hidden bg-primary/5 md:aspect-auto md:h-full">
        <NuxtImg
          :src="article.image"
          :alt="displayTitle"
          class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="sm:100vw md:50vw"
        />
      </div>

      <div class="flex flex-col justify-center gap-5 p-8 md:p-10">
        <div class="flex items-center gap-3">
          <span class="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white">
            Featured
          </span>
          <p class="text-xs font-medium uppercase tracking-[0.22em] text-text/45">
            {{ publishedLabel }}
          </p>
        </div>

        <h2 class="text-2xl font-bold leading-tight text-text transition-colors group-hover:text-primary md:text-3xl">
          {{ displayTitle }}
        </h2>
        <p class="text-base leading-7 text-text/72">
          {{ displayDescription }}
        </p>

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
