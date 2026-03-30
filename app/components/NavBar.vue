<template>
  <header
    class="sticky z-50 border-b border-transparent bg-background/80 backdrop-blur-lg transition-shadow duration-300"
    :class="[
      announcementVisible ? 'top-11' : 'top-0',
      scrolled ? 'border-primary/10 shadow-sm' : '',
    ]"
  >
    <div class="mx-auto flex h-20 max-w-5xl items-center justify-between px-4 md:px-6">
      <!-- Logo -->
      <NuxtLink to="/" class="group flex items-center gap-3">
        <div class="flex flex-col">
          <span
            class="text-base font-bold leading-none tracking-tight text-text transition-colors group-hover:text-primary"
          >
            MahirVibeCoding✨
          </span>
        </div>
      </NuxtLink>

      <!-- Desktop Nav -->
      <nav class="hidden items-center gap-8 md:flex">
        <NuxtLink
          to="/articles"
          class="text-sm font-semibold  transition-colors hover:text-text"
        >
          Artikel
        </NuxtLink>
        <a
          href="/#curriculum"
          class="text-sm font-semibold  transition-colors hover:text-text"
        >
          Kurikulum
        </a>
        <a href="/#target" class="text-sm font-semibold  transition-colors hover:text-text">
          Untuk Siapa
        </a>
        <a href="/#faq" class="text-sm font-semibold  transition-colors hover:text-text">
          FAQ
        </a>
      </nav>

      <!-- Right CTA -->
      <div class="hidden items-center gap-3 md:flex">
        <a
          href="/#pricing"
          class="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Dapatkan Panduan
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button
        type="button"
        class="rounded-lg p-2 text-text transition-colors hover:bg-primary/5 md:hidden"
        :aria-expanded="mobileMenuOpen"
        aria-controls="mobile-nav"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <span class="sr-only">{{ mobileMenuOpen ? 'Tutup menu' : 'Buka menu' }}</span>
        <IconHamburger v-if="!mobileMenuOpen" class="h-6 w-6" />
        <IconClose v-else class="h-6 w-6" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition name="mobile-menu">
      <div
        v-if="mobileMenuOpen"
        id="mobile-nav"
        class="absolute left-0 w-full space-y-4 border-t border-primary/10 bg-background/95 px-4 py-4 shadow-xl backdrop-blur-lg md:hidden"
      >
        <NuxtLink
          to="/articles"
          class="block text-sm font-semibold text-primary transition-colors hover:text-text"
          @click="mobileMenuOpen = false"
        >
          Artikel
        </NuxtLink>
        <a
          href="/#curriculum"
          class="block text-sm font-semibold text-primary transition-colors hover:text-text"
          @click="mobileMenuOpen = false"
        >
          Kurikulum
        </a>
        <a
          href="/#target"
          class="block text-sm font-semibold text-primary transition-colors hover:text-text"
          @click="mobileMenuOpen = false"
        >
          Untuk Siapa
        </a>
        <a
          href="/#faq"
          class="block text-sm font-semibold text-primary transition-colors hover:text-text"
          @click="mobileMenuOpen = false"
        >
          FAQ
        </a>
        <div class="flex flex-col gap-2 pt-2">
          <a
            href="/#pricing"
            class="block w-full rounded-lg bg-primary py-3 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
            @click="mobileMenuOpen = false"
          >
            Dapatkan Panduan
          </a>
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
    default: false,
  },
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
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
