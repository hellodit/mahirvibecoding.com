<template>
  <section id="hero" class="relative overflow-hidden bg-background">
    <div class="mx-auto flex max-w-5xl flex-col items-center px-4 py-5 text-center md:py-20 md:px-6">
      <!-- Announcement -->
      <a
        href="#pricing"
        class="mb-8 inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm font-medium text-text transition-opacity hover:opacity-80"
      >
        <span class="font-bold">Yang baru</span>
        <span class="text-text/35" aria-hidden="true">|</span>
        <span>Framework Vibe Coding untuk tim developer →</span>
      </a>

      <h1
        class="max-w-4xl text-balance text-4xl font-bold leading-tight tracking-tight text-text md:text-6xl md:leading-tight lg:text-7xl lg:leading-[1.12]"
      >
        <span class="block">
          Cara baru bikin aplikasi dengan
          <span
            class="ml-1 inline-flex items-center bg-primary px-[0.3em] py-[0.14em] align-baseline text-white md:px-[0.32em] md:py-[0.16em]"
          >
            Vibe Coding
          </span>
        </span>
      </h1>
      <p class="mt-5 max-w-2xl text-base leading-relaxed text-text md:text-lg">
        Framework lengkap untuk membangun aplikasi fullstack bersama AI Coding Agent dari planning hingga deploy.
      </p>

      <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#pricing"
          class="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Dapatkan Panduan
        </a>
        <button
          type="button"
          class="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary bg-transparent px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/5"
          @click="openTrailer = true"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
            <path d="M8 5v14l11-7z" />
          </svg>
          Preview Materi
        </button>
      </div>

      <!-- Logo strip -->
      <div class="mt-16 flex w-full max-w-3xl flex-wrap items-center justify-center gap-8 md:gap-12">
        <span
          v-for="logo in techLogos"
          :key="logo.alt"
          class="flex items-center justify-center opacity-40 grayscale transition-opacity hover:opacity-70"
        >
          <NuxtImg :src="logo.src" :alt="logo.alt" class="h-7 w-auto object-contain md:h-8" loading="lazy" />
        </span>
      </div>
    </div>

    <VideoModal
      v-model="openTrailer"
      src="https://www.youtube.com/embed/i9FwOKpHzxg?si=3dpR4zHNXSsXBvSY"
      title="Course Trailer - Mahir Vibe Coding"
    />
  </section>
</template>

<script setup>
import { ref } from 'vue'

const openTrailer = ref(false)

const techLogos = [
  { src: '/logo/laravel.svg', alt: 'Laravel' },
  { src: '/logo/nextjs.svg', alt: 'Next.js' },
  { src: '/logo/vue.svg', alt: 'Vue' },
  { src: '/logo/go.svg', alt: 'Go' },
  { src: '/logo/svelte.svg', alt: 'Svelte' },
]
</script>
