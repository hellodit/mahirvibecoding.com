<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-opacity duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-150"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="modelValue"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 py-6"
        role="dialog"
        aria-modal="true"
        :aria-label="title"
        @click.self="close"
      >
        <div class="relative w-full" :class="maxWidthClass">
          <button
            type="button"
            class="absolute -top-10 right-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Tutup"
            @click="close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="h-5 w-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
          <div class="relative w-full overflow-hidden rounded-xl bg-black shadow-2xl" style="aspect-ratio: 16 / 9;">
            <iframe
              class="absolute inset-0 h-full w-full"
              :src="embedSrc"
              :title="title"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, watch, onUnmounted } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue: boolean
    src: string
    title?: string
    autoplay?: boolean
    maxWidthClass?: string
  }>(),
  {
    title: 'Video Player',
    autoplay: true,
    maxWidthClass: 'max-w-4xl',
  }
)

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const embedSrc = computed(() => {
  if (!props.autoplay) return props.src
  const separator = props.src.includes('?') ? '&' : '?'
  return `${props.src}${separator}autoplay=1`
})

function close() {
  emit('update:modelValue', false)
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') close()
}

watch(
  () => props.modelValue,
  (open) => {
    if (import.meta.server) return
    if (open) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKeydown)
    } else {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeydown)
    }
  }
)

onUnmounted(() => {
  if (import.meta.server) return
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKeydown)
})
</script>
