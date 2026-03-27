<template>
  <div class="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-text/65">
    <div class="flex items-center gap-3">
      <img
        src="/author.jpeg"
        alt="Foto profil Asdita"
        class="h-11 w-11 rounded-full object-cover ring-2 ring-primary/10"
      >
      <div>
        <p class="font-semibold text-text">{{ article.author }}</p>
        <p>Author MahirVibeCoding</p>
      </div>
    </div>

    <div class="h-10 w-px bg-primary/10" />

    <div>
      <p class="text-xs font-semibold uppercase tracking-[0.22em] text-text/45">Publikasi</p>
      <p class="font-medium text-text/75">{{ publishedLabel }}</p>
    </div>

    <div v-if="readingStats">
      <p class="text-xs font-semibold uppercase tracking-[0.22em] text-text/45">Reading Time</p>
      <p class="font-medium text-text/75">{{ readingStats.minutes }} menit baca</p>
    </div>

    <div v-if="article.updatedAt">
      <p class="text-xs font-semibold uppercase tracking-[0.22em] text-text/45">Update Terakhir</p>
      <p class="font-medium text-text/75">{{ updatedLabel }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ArticleReadingStats, ArticleRecord } from '~/composables/useArticles'

const props = defineProps<{
  article: ArticleRecord
  readingStats?: ArticleReadingStats
}>()

const publishedLabel = computed(() => formatArticleDate(props.article.publishedAt))
const updatedLabel = computed(() => props.article.updatedAt ? formatArticleDate(props.article.updatedAt) : '')
</script>
