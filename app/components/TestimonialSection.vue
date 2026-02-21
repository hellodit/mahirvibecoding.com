<template>
  <section id="testimonial" class="py-20 px-6 bg-white border-y border-primary/5">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-14 reveal">
        <p class="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Testimonial</p>
        <h2 class="text-3xl md:text-4xl font-bold text-text tracking-tight">
          Apa kata mereka yang sudah<br class="hidden md:block" /> memakai panduan ini
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          v-for="(item, index) in testimonials"
          :key="index"
          class="reveal p-6 rounded-2xl border border-primary/10 bg-primary/5 hover:border-primary/20 transition-colors flex flex-col"
          :class="`reveal-delay-${index + 1}`"
        >
          <p class="text-text/80 text-sm leading-relaxed flex-1 mb-5">"{{ item.quote }}"</p>
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
              {{ item.initial }}
            </div>
            <div>
              <p class="font-semibold text-text text-sm">{{ item.name }}</p>
              <p class="text-xs text-text/60">{{ item.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    quote: 'Panduan ini bantu saya sistematis pakai AI untuk coding. Dari chaos jadi punya framework jelas.',
    name: 'Budi',
    role: 'Software Developer',
    initial: 'B'
  },
  {
    quote: 'Akhirnya ada yang nulis dari pengalaman nyata, bukan sekadar teori. Langsung bisa dipraktikkan.',
    name: 'Siti',
    role: 'Fullstack Developer',
    initial: 'S'
  },
  {
    quote: 'Worth it. Saya pakai pendekatan dari sini di tim dan workflow jadi lebih rapi.',
    name: 'Andi',
    role: 'Tech Lead',
    initial: 'A'
  }
]
</script>
