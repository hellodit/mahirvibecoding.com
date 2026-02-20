<template>
  <section id="trust" class="py-20 px-6 bg-white border-y border-primary/5">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-14 reveal">
        <p class="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Kredibilitas</p>
        <h2 class="text-3xl md:text-4xl font-bold text-text tracking-tight">
          Disusun dari pengalaman nyata,<br class="hidden md:block" /> bukan sekadar teori
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        <div
          v-for="(point, index) in trustPoints"
          :key="index"
          class="reveal flex gap-4 items-start p-5 rounded-xl border border-primary/10 hover:border-primary/20 transition-colors"
          :class="`reveal-delay-${index + 1}`"
        >
          <div class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" :d="point.icon" />
            </svg>
          </div>
          <p class="text-sm text-text/80 leading-relaxed">{{ point.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const trustPoints = [
  {
    text: 'Ditulis oleh praktisi yang sehari-hari bekerja dengan AI Coding Agent',
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
  },
  {
    text: 'Berdasarkan pengalaman membangun aplikasi real — bukan proyek tutorial',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    text: 'Pendekatan yang mengikuti SDLC yang diadaptasi untuk era AI',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
  },
  {
    text: 'Tidak menjual hype — fokus pada strategi yang teruji dan realistis',
    icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
  }
]
</script>
