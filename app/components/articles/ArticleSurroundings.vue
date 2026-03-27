<template>
  <section v-if="previous || next" class="grid gap-4 md:grid-cols-2">
    <NuxtLink
      v-if="previous"
      :to="previous.path"
      class="rounded-[24px] border border-primary/10 bg-white p-5 shadow-sm transition hover:border-primary/25 hover:shadow-md"
    >
      <p class="text-xs font-semibold uppercase tracking-[0.22em] text-text/45">Artikel Sebelumnya</p>
      <h2 class="mt-3 text-lg font-bold leading-tight text-text">{{ previous.title }}</h2>
      <p v-if="previous.description" class="mt-2 text-sm leading-6 text-text/68">
        {{ previous.description }}
      </p>
    </NuxtLink>
    <div
      v-else
      class="hidden rounded-[24px] border border-dashed border-primary/10 md:block"
    />

    <NuxtLink
      v-if="next"
      :to="next.path"
      class="rounded-[24px] border border-primary/10 bg-white p-5 text-left shadow-sm transition hover:border-primary/25 hover:shadow-md md:text-right"
    >
      <p class="text-xs font-semibold uppercase tracking-[0.22em] text-text/45">Artikel Berikutnya</p>
      <h2 class="mt-3 text-lg font-bold leading-tight text-text">{{ next.title }}</h2>
      <p v-if="next.description" class="mt-2 text-sm leading-6 text-text/68">
        {{ next.description }}
      </p>
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
import type { ArticleNavigationLink } from '~/composables/useArticles'

defineProps<{
  previous: ArticleNavigationLink | null
  next: ArticleNavigationLink | null
}>()
</script>
