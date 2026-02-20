<template>
  <section id="solution" class="py-20 px-6 bg-white border-t border-primary/5">
    <div class="max-w-5xl mx-auto">
      <!-- Header -->
      <div class="max-w-2xl mb-14 reveal">
        <p class="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Solusi</p>
        <h2 class="text-3xl md:text-4xl font-bold text-text leading-tight tracking-tight mb-4">
          Strategi Vibe Coding — framework untuk kolaborasi developer × AI
        </h2>
        <p class="text-base text-text/70 leading-relaxed">
          Panduan ini bukan kursus prompting biasa. Ini adalah
          <span class="text-text font-medium">framework lengkap</span>
          yang mengajarkan cara berpikir, merencanakan, dan mengeksekusi pembangunan aplikasi fullstack
          bersama AI Coding Agent — dengan tetap menjaga
          <span class="text-text font-medium">kontrol penuh</span> di tangan kamu.
        </p>
      </div>

      <!-- Comparison -->
      <div class="reveal grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Yang Lain -->
        <div class="space-y-4">
          <p class="text-xs font-semibold text-text/70 uppercase tracking-widest mb-2">Yang Lain</p>
          <div v-for="(row, index) in comparisons" :key="'other-'+index"
            class="flex items-start gap-3 py-3 border-b border-primary/10 last:border-b-0">
            <div class="w-5 h-5 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-text/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4" />
              </svg>
            </div>
            <p class="text-sm text-text/60">{{ row.other }}</p>
          </div>
        </div>
        <!-- Panduan Ini -->
        <div class="space-y-4">
          <p class="text-xs font-semibold text-primary uppercase tracking-widest mb-2">Panduan Ini</p>
          <div v-for="(row, index) in comparisons" :key="'ours-'+index"
            class="flex items-start gap-3 py-3 border-b border-primary/10 last:border-b-0">
            <div class="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p class="text-sm text-text font-medium">{{ row.ours }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const comparisons = [
  { other: 'Fokus di prompting saja', ours: 'Fokus di strategi & workflow end-to-end' },
  { other: 'Langsung koding', ours: 'Mulai dari validasi masalah' },
  { other: 'Percaya buta pada AI', ours: 'Prinsip Human-in-the-Loop' },
  { other: 'Tidak ada struktur', ours: 'Mengikuti SDLC yang diadaptasi untuk AI' },
  { other: 'Teori tanpa konteks', ours: 'Berdasarkan pengalaman nyata' }
]
</script>
