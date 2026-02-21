<template>
  <section id="target" class="py-24 px-6 bg-primary/5">
    <div class="max-w-5xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-14 reveal">
        <p class="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Target Audience</p>
        <h2 class="text-3xl md:text-4xl font-bold text-text tracking-tight">
          Untuk siapa panduan ini?
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <!-- For -->
        <div class="reveal">
          <div class="space-y-5">
            <div v-for="(item, index) in targetFor" :key="index" class="flex gap-3 items-start">
              <div class="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="text-sm text-text/80 leading-relaxed">
                <span class="font-semibold text-text">{{ item.bold }}</span> {{ item.rest }}
              </p>
            </div>
          </div>
        </div>

        <!-- Not for -->
        <div class="reveal reveal-delay-2">
          <p class="text-xs font-semibold text-text/70 uppercase tracking-widest mb-5">Bukan untuk kamu jika…</p>
          <div class="space-y-5">
            <div v-for="(item, index) in notFor" :key="index" class="flex gap-3 items-start">
              <div class="w-5 h-5 rounded-full bg-primary/5 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 text-text/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4" />
                </svg>
              </div>
              <p class="text-sm text-text/60 leading-relaxed">{{ item }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Testimonials (no title) -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 shadow-lg rounded-2xl bg-white p-2">
        <div
          v-for="(item, index) in testimonials"
          :key="index"
          class="reveal p-6 rounded-2xl border border-primary/10 bg-white flex flex-col shadow-sm"
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
const targetFor = [
  { bold: 'Developer', rest: 'yang ingin memanfaatkan AI secara strategis, bukan asal coba-coba' },
  { bold: 'Freelancer', rest: 'yang ingin mempercepat delivery project tanpa mengorbankan kualitas' },
  { bold: 'Founder teknis / indie hacker', rest: 'yang ingin build faster dengan AI sebagai co-pilot' },
  { bold: 'Career switcher', rest: 'yang ingin memahami workflow modern dalam software development' },
  { bold: 'Siapa pun yang sudah coba AI coding', rest: 'tapi merasa hasilnya masih berantakan' }
]

const notFor = [
  'Yang mencari kursus programming dari nol — panduan ini mengasumsikan pemahaman dasar coding',
  'Yang mengharapkan copy-paste prompt lalu jadi — ini tentang strategi, bukan shortcut'
]

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
