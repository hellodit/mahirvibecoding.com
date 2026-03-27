<template>
  <div class="flex flex-wrap gap-2">
    <template v-if="linked">
      <NuxtLink
        v-for="tag in tags"
        :key="tag"
        :to="getTagPath(tag)"
        class="rounded-full bg-primary/8 px-3 py-1 text-xs font-semibold text-primary transition hover:bg-primary hover:text-white"
      >
        #{{ tag }}
      </NuxtLink>
    </template>

    <template v-else>
      <span
        v-for="tag in tags"
        :key="tag"
        class="rounded-full bg-primary/8 px-3 py-1 text-xs font-semibold text-primary"
      >
        #{{ tag }}
      </span>
    </template>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  tags: string[]
  linked?: boolean
}>(), {
  linked: true,
})
</script>
