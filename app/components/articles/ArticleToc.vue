<template>
  <aside
    v-if="flattenedLinks.length"
    class="rounded-[28px] border border-primary/10 bg-white p-6 shadow-sm lg:sticky lg:top-28"
  >
    <p class="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Daftar Isi</p>
    <nav class="mt-5 space-y-2">
      <a
        v-for="link in flattenedLinks"
        :key="link.id"
        :href="`#${link.id}`"
        class="block rounded-xl px-3 py-2 text-sm leading-6 text-text/72 transition hover:bg-primary/5 hover:text-primary"
        :class="link.depth > 2 ? 'ml-4' : ''"
      >
        {{ link.text }}
      </a>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import type { ArticleTocLink } from '~/composables/useArticles'

const props = defineProps<{
  links?: ArticleTocLink[]
}>()

function flattenLinks(links: ArticleTocLink[]): Array<Pick<ArticleTocLink, 'id' | 'text' | 'depth'>> {
  return links.flatMap((link) => [
    { id: link.id, text: link.text, depth: link.depth },
    ...flattenLinks(link.children ?? []),
  ])
}

const flattenedLinks = computed(() => flattenLinks(props.links ?? []))
</script>
