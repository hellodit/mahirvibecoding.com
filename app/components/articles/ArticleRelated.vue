<template>
  <section v-if="articles.length" class="rounded-[32px] border border-primary/10 bg-white p-6 shadow-sm md:p-8">
    <div class="max-w-2xl">
      <p class="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Related Articles</p>
      <h2 class="mt-3 text-2xl font-bold tracking-tight text-text">
        Lanjutkan dengan topik yang masih nyambung.
      </h2>
      <p class="mt-3 text-sm leading-7 text-text/68">
        Pilihan berikut dipilih berdasarkan kedekatan tag dan urutan publikasi terbaru.
      </p>
    </div>

    <div class="mt-8 grid gap-5 lg:grid-cols-3">
      <ArticleCard
        v-for="article in articles"
        :key="article.path"
        :article="article"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ArticleRecord } from '~/composables/useArticles'

defineProps<{
  articles: ArticleRecord[]
}>()
</script>
