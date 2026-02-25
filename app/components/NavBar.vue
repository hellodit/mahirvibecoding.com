<template>
  <header
    class="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b transition-shadow duration-300"
    :class="scrolled ? 'border-primary/10 shadow-sm' : 'border-transparent'"
  >
    <div class="max-w-5xl mx-auto px-6 h-20 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-3 group">
        <div class="flex flex-col">
          <span class="text-base font-bold text-text tracking-tight leading-none group-hover:text-primary transition-colors">MahirVibeCoding</span>
        </div>
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-8">
        <a href="/#curriculum" class="text-sm font-medium text-text/70 hover:text-primary transition-colors">Kurikulum</a>
        <a href="/#target" class="text-sm font-medium text-text/70 hover:text-primary transition-colors">Untuk Siapa</a>
        <a href="/#faq" class="text-sm font-medium text-text/70 hover:text-primary transition-colors">FAQ</a>
      </nav>

      <!-- Right CTA -->
      <div class="hidden md:flex items-center gap-3">
        <a href="/#pricing" class="px-5 py-2.5 text-sm font-semibold text-white bg-primary rounded-full hover:opacity-90 transition-all shadow-sm">
          Dapatkan Sekarang
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2 text-text hover:bg-primary/5 rounded-lg transition-colors">
        <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition name="mobile-menu">
      <div v-if="mobileMenuOpen" class="md:hidden border-t border-primary/10 bg-white/95 backdrop-blur-lg px-6 py-4 space-y-4 shadow-xl absolute w-full left-0">
        <a href="/#curriculum" @click="mobileMenuOpen = false" class="block text-sm font-medium text-text/70 hover:text-primary transition-colors">Kurikulum</a>
        <a href="/#target" @click="mobileMenuOpen = false" class="block text-sm font-medium text-text/70 hover:text-primary transition-colors">Untuk Siapa</a>
        <a href="/#faq" @click="mobileMenuOpen = false" class="block text-sm font-medium text-text/70 hover:text-primary transition-colors">FAQ</a>
        <div class="flex flex-col gap-2 pt-2">
          <a href="/#pricing" @click="mobileMenuOpen = false" class="block w-full text-center py-3 text-sm font-bold text-white bg-primary rounded-lg hover:opacity-90 transition-colors">Dapatkan Panduan</a>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

defineProps({
  announcementVisible: {
    type: Boolean,
    default: true
  }
})

const mobileMenuOpen = ref(false)
const scrolled = ref(false)

function handleScroll() {
  scrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
