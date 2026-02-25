<template>
  <section id="hero" class="relative bg-white overflow-hidden mx-auto">
    <div class="relative z-10 max-w-5xl mx-auto px-6 pt-16 pb-20 md:pt-20 md:pb-28">

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <!-- Left: Text -->
        <div class="lg:col-span-7">
          <!-- Badge -->
          <div class="flex items-center gap-2 mb-4">
            <span class="inline-flex items-center px-3 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider">
              Framework Vibe Coding
            </span>
          </div>

          <h1 class="text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold text-text leading-[1.1] tracking-tight mb-6">
            Cara baru bikin aplikasi dengan <span class="text-primary">Vibe coding</span>
          </h1>

          <p class="text-base md:text-lg text-text max-w-xl mb-10 leading-relaxed">
            Upgrade cara vibe coding kamu dengan framework lengkap untuk membangun aplikasi fullstack bersama AI Coding Agent
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap items-center gap-4 mb-10">
            <a href="#pricing"
              class="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-primary rounded-full hover:bg-gray-800 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 duration-300">
              Dapatkan Panduan
            </a>
            <a href="#curriculum"
              class="group inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-primary border border-primary rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
              Preview
              <span class="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </span>
            </a>
          </div>

          <!-- Social Proof -->
          <div class="flex items-center gap-4">
            <div class="flex -space-x-2.5">
              <div
                v-for="avatar in avatars"
                :key="avatar.initial"
                class="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-white"
                :class="avatar.bg"
              >
                {{ avatar.initial }}
              </div>
              <div class="w-9 h-9 rounded-full bg-primary/80 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">
                +500
              </div>
            </div>
            <div>
              <div class="flex items-center gap-1 mb-0.5">
                <svg v-for="n in 5" :key="n" class="w-3.5 h-3.5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p class="text-xs text-text/70"><span class="font-semibold text-text">500+ developer</span> sudah bergabung</p>
            </div>
          </div>
        </div>

        <!-- Right: Task creation mockup -->
        <div class="hidden lg:block lg:col-span-5 relative z-10">
          <div class="space-y-3">
            <TaskCreationMockup class="hover:scale-[1.02] transition-transform duration-500" />
          </div>
        </div>
      </div>

      <!-- Tech marquee -->
      <div class="mt-16 md:mt-20 overflow-hidden border-y border-primary/10 py-5">
        <div class="flex items-center gap-12 md:gap-16 logo-marquee">
          <div v-for="n in 2" :key="n" class="flex items-center gap-12 md:gap-16 shrink-0">
            <span v-for="logo in techLogos" :key="`${n}-${logo.alt}`" class="flex items-center justify-center opacity-70 transition-opacity" aria-hidden="true">
              <NuxtImg :src="logo.src" :alt="logo.alt" class="h-7 md:h-8 w-auto object-contain" loading="lazy" />
            </span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const avatars = [
  { initial: 'R', bg: 'bg-primary' },
  { initial: 'D', bg: 'bg-primary/80' },
  { initial: 'A', bg: 'bg-primary/60' },
]

const techLogos = [
  { src: '/logo/laravel.svg', alt: 'Laravel' },
  { src: '/logo/nextjs.svg', alt: 'Next.js' },
  { src: '/logo/vue.svg', alt: 'Vue' },
  { src: '/logo/go.svg', alt: 'Go' },
  { src: '/logo/svelte.svg', alt: 'Svelte' },
]
</script>

<style scoped>
.logo-marquee {
  animation: marquee 25s linear infinite;
}
@keyframes marquee {
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}
</style>
