<template>
  <section id="solution" class="py-20 px-6 border-t border-primary/5">
    <div class="max-w-5xl mx-auto">
      <!-- Header -->
      <div class="max-w-2xl mb-14 reveal">
        <p class="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Solusi</p>
        <h2 class="text-2xl md:text-3xl font-bold text-text leading-tight tracking-tight mb-4">
          Strategi Vibe Coding — framework untuk kolaborasi developer × AI
        </h2>
        <p class="text-sm text-text/70 leading-relaxed">
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
              <IconMinus class="w-3 h-3 text-text/50" />
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
              <IconCheck class="w-3 h-3 text-primary" />
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
  { other: 'Fokus di prompting saja', ours: 'Fokus di planning, development, sampai deployment' },
  { other: 'Langsung koding tanpa arah', ours: 'Mulai dari requirement yang jelas dan terstruktur' },
  { other: 'Percaya buta pada output AI', ours: 'Kontrol penuh: review, validasi, dan rollback per unit' },
  { other: 'Tidak ada desain arsitektur', ours: 'Desain schema dan entitas sebelum implementasi' },
  { other: 'Teori tanpa studi kasus', ours: 'Satu proyek nyata dari nol sampai production' }
]

</script>
