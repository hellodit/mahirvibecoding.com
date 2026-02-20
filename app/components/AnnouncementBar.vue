<template>
  <div v-if="isVisible" class="bg-gray-900 text-white py-3 px-6 relative z-[60]">
    <div class="max-w-7xl mx-auto flex items-center justify-center gap-3">
      <span class="text-white text-sm">✨</span>
      <p class="text-sm text-gray-300">
        AI bukan pengganti developer. AI adalah partner kerja — kalau kamu tahu cara mengarahkannya.
      </p>
      <a href="#pricing" class="text-sm font-semibold text-white hover:text-gray-300 transition-colors whitespace-nowrap inline-flex items-center gap-1">
        Selengkapnya
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
      <button @click="dismiss" class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors p-1" aria-label="Tutup">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
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
