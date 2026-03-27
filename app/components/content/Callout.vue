<template>
  <aside
    class="my-6 rounded-[24px] border px-5 py-5"
    :class="variantClasses.wrapper"
  >
    <div class="flex items-start gap-4">
      <div
        class="mt-1 flex h-9 w-9 flex-none items-center justify-center rounded-full text-sm font-bold"
        :class="variantClasses.badge"
      >
        {{ variantClasses.icon }}
      </div>

      <div class="min-w-0 flex-1">
        <p v-if="title" class="text-sm font-bold text-text">{{ title }}</p>
        <div class="callout-content mt-2 text-sm leading-7 text-text/78">
          <slot />
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?: 'tip' | 'warning' | 'info'
  title?: string
}>(), {
  type: 'info',
  title: '',
})

const variantClasses = computed(() => {
  if (props.type === 'tip') {
    return {
      wrapper: 'border-emerald-200 bg-emerald-50/80',
      badge: 'bg-emerald-100 text-emerald-700',
      icon: 'Tip',
    }
  }

  if (props.type === 'warning') {
    return {
      wrapper: 'border-amber-200 bg-amber-50/80',
      badge: 'bg-amber-100 text-amber-700',
      icon: '!',
    }
  }

  return {
    wrapper: 'border-sky-200 bg-sky-50/80',
    badge: 'bg-sky-100 text-sky-700',
    icon: 'i',
  }
})
</script>

<style scoped>
.callout-content :deep(p:first-child) {
  margin-top: 0;
}
</style>
