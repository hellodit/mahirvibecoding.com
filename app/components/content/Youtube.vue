<template>
  <div class="my-8 overflow-hidden rounded-[28px] border border-primary/10 bg-text shadow-sm">
    <div class="aspect-video">
      <iframe
        class="h-full w-full"
        :src="embedUrl"
        :title="title"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  id: string
  title?: string
}>(), {
  title: 'YouTube video',
})

const embedUrl = computed(() => `https://www.youtube-nocookie.com/embed/${props.id}`)
</script>
