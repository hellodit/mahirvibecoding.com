<template>
  <div class="code-group my-8 overflow-hidden rounded-[28px] border border-primary/10 bg-[#09110b] shadow-sm">
    <div
      v-if="panels.length > 1"
      class="flex flex-wrap gap-2 border-b border-white/10 bg-white/5 px-4 py-3"
    >
      <button
        v-for="(panel, index) in panels"
        :key="panel.label"
        type="button"
        class="rounded-full px-3 py-1.5 text-xs font-semibold transition"
        :class="index === activeIndex ? 'bg-white text-text' : 'bg-white/10 text-white/70 hover:bg-white/15 hover:text-white'"
        @click="activeIndex = index"
      >
        {{ panel.label }}
      </button>
    </div>

    <div
      v-if="panels.length"
      class="code-group-rendered"
      v-html="panels[activeIndex]?.html"
    />

    <div
      v-show="!panels.length"
      ref="source"
      class="code-group-source"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface CodePanel {
  label: string
  html: string
}

const activeIndex = ref(0)
const panels = ref<CodePanel[]>([])
const source = useTemplateRef('source')

onMounted(async () => {
  await nextTick()

  const blocks = Array.from(source.value?.children ?? [])

  if (!blocks.length) {
    return
  }

  panels.value = blocks.map((block, index) => ({
    label: resolveLabel(block, index),
    html: block.outerHTML,
  }))
})

function resolveLabel(block: Element, index: number) {
  const pre = block.matches('pre') ? block : block.querySelector('pre')
  const code = block.querySelector('code')
  const language = pre?.getAttribute('data-language')
    || pre?.getAttribute('language')
    || code?.className.match(/language-([\w-]+)/)?.[1]

  if (language) {
    return language.toUpperCase()
  }

  return `Snippet ${index + 1}`
}
</script>

<style scoped>
.code-group-rendered :deep(pre),
.code-group-source :deep(pre) {
  margin-top: 0;
  border-radius: 0;
  background: transparent;
}

.code-group-rendered :deep(pre code),
.code-group-source :deep(pre code) {
  background: transparent;
}
</style>
