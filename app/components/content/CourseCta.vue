<template>
  <section class="my-8 rounded-[28px] border border-primary/15 bg-primary px-6 py-7 text-white shadow-sm">
    <p class="text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
      MahirVibeCoding
    </p>
    <h2 class="mt-3 text-2xl font-bold">
      Ubah eksperimen AI jadi workflow yang bisa dipakai untuk shipping.
    </h2>
    <p class="mt-3 max-w-2xl text-sm leading-7 text-white/80">
      {{ description }}
    </p>
    <a
      href="/#pricing"
      class="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary transition hover:bg-white/90"
    >
      Lihat Program
      <IconArrowRight class="h-4 w-4" />
    </a>
  </section>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  slug?: string
}>(), {
  slug: 'mahir-vibe-coding',
})

const description = computed(() =>
  props.slug === 'mahir-vibe-coding'
    ? 'Pelajari planning, breakdown task, execution, review, dan delivery dengan AI coding agent dalam satu framework yang runtut.'
    : 'Lanjutkan belajar dengan course yang membahas workflow AI secara lebih sistematis.'
)
</script>
