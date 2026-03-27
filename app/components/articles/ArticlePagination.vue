<template>
  <nav
    v-if="totalPages > 1"
    class="mt-10 flex flex-wrap items-center justify-center gap-3"
    aria-label="Pagination"
  >
    <NuxtLink
      v-if="currentPage > 1"
      :to="buildLink(currentPage - 1)"
      class="inline-flex items-center rounded-full border border-primary/15 px-4 py-2 text-sm font-semibold text-text transition hover:border-primary hover:text-primary"
    >
      Sebelumnya
    </NuxtLink>

    <NuxtLink
      v-for="page in pages"
      :key="page"
      :to="buildLink(page)"
      class="inline-flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition"
      :class="page === currentPage
        ? 'border-primary bg-primary text-white'
        : 'border-primary/15 text-text hover:border-primary hover:text-primary'"
    >
      {{ page }}
    </NuxtLink>

    <NuxtLink
      v-if="currentPage < totalPages"
      :to="buildLink(currentPage + 1)"
      class="inline-flex items-center rounded-full border border-primary/15 px-4 py-2 text-sm font-semibold text-text transition hover:border-primary hover:text-primary"
    >
      Berikutnya
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  currentPage: number
  totalPages: number
  path: string
}>(), {
  path: '/articles',
})

const pages = computed(() => Array.from({ length: props.totalPages }, (_, index) => index + 1))

function buildLink(page: number) {
  return page <= 1
    ? { path: props.path }
    : { path: props.path, query: { page: String(page) } }
}
</script>
