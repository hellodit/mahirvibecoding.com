<template>
  <div
    v-if="isVisible"
    class="sticky top-0 z-[60] w-full bg-primary py-3 px-6 text-white relative"
  >
    <div class="max-w-5xl mx-auto flex items-center justify-center gap-3">
      <span class="text-white text-sm">✨</span>
      <p class="text-sm text-white">
        Dapatkan Panduan MahirVibeCoding sekarang juga!
      </p>
      <a href="#pricing" class="text-sm font-semibold text-white hover:text-white transition-colors whitespace-nowrap inline-flex items-center gap-1">
        Selengkapnya
        <IconArrowRight class="w-3.5 h-3.5" :stroke-width="2.5" />
      </a>
      <button @click="dismiss" class="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-white transition-colors p-1" aria-label="Tutup">
        <IconClose class="w-4 h-4" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isVisible = ref(true)

const emit = defineEmits(['dismissed'])

function dismiss() {
  isVisible.value = false
  emit('dismissed')
}
</script>
