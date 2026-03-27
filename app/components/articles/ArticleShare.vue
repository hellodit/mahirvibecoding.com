<template>
  <section class="rounded-[28px] border border-primary/10 bg-white p-6 shadow-sm">
    <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <p class="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Bagikan</p>
        <p class="mt-2 text-sm leading-6 text-text/68">
          Kirim artikel ini ke rekan tim atau simpan link-nya untuk referensi.
        </p>
      </div>

      <div class="flex flex-wrap gap-3">
        <a
          v-for="item in shareLinks"
          :key="item.label"
          :href="item.href"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center justify-center rounded-full border border-primary/15 px-4 py-2 text-sm font-semibold text-text transition hover:border-primary hover:text-primary"
        >
          {{ item.label }}
        </a>

        <button
          type="button"
          class="inline-flex items-center justify-center rounded-full border border-primary/15 px-4 py-2 text-sm font-semibold text-text transition hover:border-primary hover:text-primary"
          @click="copyLink"
        >
          {{ copied ? 'Link Tersalin' : 'Copy Link' }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  articleTitle: string
  url: string
}>()

const copied = ref(false)

const shareLinks = computed(() => {
  const url = encodeURIComponent(props.url)
  const title = encodeURIComponent(props.articleTitle)

  return [
    { label: 'X', href: `https://twitter.com/intent/tweet?text=${title}&url=${url}` },
    { label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${url}` },
    { label: 'WhatsApp', href: `https://wa.me/?text=${title}%20${url}` },
  ]
})

async function copyLink() {
  try {
    await navigator.clipboard.writeText(props.url)
    copied.value = true
    window.setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (error) {
    console.error('Failed to copy article link', error)
  }
}
</script>
