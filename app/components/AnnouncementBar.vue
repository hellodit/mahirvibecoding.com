<template>
  <div
    v-if="isVisible"
    class="sticky top-0 z-[60] w-full bg-primary py-3 px-6 text-white relative"
  >
    <div class="max-w-5xl mx-auto flex items-start justify-center gap-3 pl-6 pr-10 sm:px-0">
      <Transition name="announce" mode="out-in">
        <div :key="activeIndex" class="flex items-start gap-2">
          <span class="text-white text-sm leading-5">{{ activeMessage.icon }}</span>
          <p class="text-sm leading-5 text-white">
            {{ activeMessage.text }}
            <span
              v-if="activeMessage.code"
              class="font-bold tracking-wide bg-white/20 rounded px-1.5 py-0.5"
            >
              {{ activeMessage.code }}
            </span>
          </p>
        </div>
      </Transition>
      <button @click="dismiss" class="absolute right-4 top-2.5 text-white hover:text-white transition-colors p-1" aria-label="Tutup">
        <IconClose class="w-4 h-4" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const isVisible = ref(true)

const emit = defineEmits(['dismissed'])

const messages = [
  {
    icon: '✨',
    text: 'Diskon 20% pakai kode',
    code: 'VIBECODING20',
  },
  {
    icon: '📚',
    text: 'Dilengkapi study case nyata: bangun aplikasi fullstack dari nol sampai deploy',
  },
  {
    icon: '🛠️',
    text: 'Workflow bisa diterapkan di berbagai tech stack, bukan terikat satu framework',
  },
]

const activeIndex = ref(0)
const activeMessage = computed(() => messages[activeIndex.value])

let timer = null

onMounted(() => {
  timer = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % messages.length
  }, 4000)
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})

function dismiss() {
  isVisible.value = false
  emit('dismissed')
}
</script>

<style scoped>
.announce-enter-active,
.announce-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.announce-enter-from {
  opacity: 0;
  transform: translateY(6px);
}
.announce-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}
</style>
