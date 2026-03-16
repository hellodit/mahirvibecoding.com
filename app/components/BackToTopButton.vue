<template>
  <Transition name="btop">
    <button
      v-if="isVisible"
      @click="scrollToTop"
      aria-label="Kembali ke atas"
      class="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-primary text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
    >
      <IconChevronUp class="w-5 h-5" :stroke-width="2.5" />
    </button>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isVisible = ref(false)

function handleScroll() {
  isVisible.value = window.scrollY > 500
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.btop-enter-active,
.btop-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.btop-enter-from,
.btop-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
</style>
