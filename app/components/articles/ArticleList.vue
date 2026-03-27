<template>
  <div>
    <div
      v-if="articles.length"
      class="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
    >
      <ArticleCard
        v-for="article in articles"
        :key="article.path"
        :article="article"
      />
    </div>

    <div
      v-else
      class="rounded-[28px] border border-dashed border-primary/20 bg-white/80 px-8 py-14 text-center shadow-sm"
    >
      <p class="text-lg font-semibold text-text">{{ emptyTitle }}</p>
      <p class="mt-3 text-sm leading-6 text-text/65">
        {{ emptyDescription }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ArticleRecord } from '~/composables/useArticles'

withDefaults(defineProps<{
  articles: ArticleRecord[]
  emptyTitle?: string
  emptyDescription?: string
}>(), {
  emptyTitle: 'Belum ada artikel yang dipublikasikan.',
  emptyDescription: 'Tambahkan file Markdown baru di folder content/articles untuk mengisi halaman ini.',
})
</script>
