<template>
  <section class="rounded-[32px] border border-primary/10 bg-white/90 p-6 shadow-sm md:p-8">
    <div class="max-w-3xl">
      <p class="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Search</p>
      <h2 class="mt-3 text-2xl font-bold tracking-tight text-text">
        Cari insight spesifik di seluruh library artikel.
      </h2>
      <p class="mt-3 text-sm leading-7 text-text/68">
        Search dijalankan sepenuhnya di client dari section index Nuxt Content, jadi hasil muncul instan tanpa request ke layanan eksternal.
      </p>
    </div>

    <div class="mt-6">
      <input
        v-model="query"
        type="search"
        placeholder="Contoh: laravel agent, prompt checklist, debugging"
        class="w-full rounded-[20px] border border-primary/15 bg-background px-5 py-4 text-sm text-text outline-none transition placeholder:text-text/40 focus:border-primary"
      >
    </div>

    <div v-if="query.trim()" class="mt-8">
      <div class="mb-5 flex items-center justify-between gap-4">
        <p class="text-sm font-semibold text-text">
          {{ results.length }} hasil untuk "{{ query.trim() }}"
        </p>
      </div>

      <div v-if="results.length" class="grid gap-4 lg:grid-cols-2">
        <NuxtLink
          v-for="result in results"
          :key="result.path"
          :to="result.path"
          class="rounded-[24px] border border-primary/10 bg-background/70 p-5 transition hover:border-primary/25 hover:shadow-sm"
          @click="trackClick(result.path)"
        >
          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in result.tags.slice(0, 3)"
              :key="tag"
              class="rounded-full bg-primary/8 px-3 py-1 text-xs font-semibold text-primary"
            >
              #{{ tag }}
            </span>
          </div>
          <h3 class="mt-4 text-lg font-bold leading-tight text-text">
            {{ result.title }}
          </h3>
          <p class="mt-2 text-sm leading-6 text-text/70">
            {{ result.description }}
          </p>
          <p class="mt-4 text-sm leading-6 text-text/58">
            {{ result.excerpt }}
          </p>
        </NuxtLink>
      </div>

      <div
        v-else
        class="rounded-[24px] border border-dashed border-primary/15 bg-background/60 px-6 py-10 text-center"
      >
        <p class="text-sm font-semibold text-text">Belum ada hasil yang cocok.</p>
        <p class="mt-2 text-sm leading-6 text-text/62">
          Coba pakai kata kunci yang lebih umum atau fokus pada topik/tag tertentu.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ArticleSearchSection } from '~/composables/useArticles'

const props = defineProps<{
  sections: ArticleSearchSection[]
}>()

const query = ref('')
const analytics = useArticleAnalytics()
const { variant } = useArticleExperimentCopy()
const trackedImpressions = useState<Record<string, true>>('article-search-impressions', () => ({}))

const results = computed(() => searchArticleSections(props.sections, query.value, variant.value).slice(0, 8))

watch(results, (value) => {
  for (const result of value) {
    if (trackedImpressions.value[result.path]) {
      continue
    }

    trackedImpressions.value[result.path] = true
    const slug = result.path.split('/').filter(Boolean).at(-1)

    if (!slug) {
      continue
    }

    void analytics.track(slug, {
      event: 'impression',
      source: 'search',
      variant: variant.value,
    })
  }
}, { immediate: true })

function trackClick(path: string) {
  const slug = path.split('/').filter(Boolean).at(-1)

  if (!slug) {
    return
  }

  void analytics.track(slug, {
    event: 'click',
    source: 'search',
    variant: variant.value,
  })
}
</script>
