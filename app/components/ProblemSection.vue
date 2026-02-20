<template>
  <section id="problem" class="py-20 px-6 bg-white">
    <div class="max-w-5xl mx-auto">
      <!-- Header -->
      <div class="max-w-2xl mb-14 reveal">
        <p class="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-3">Masalah</p>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
          Kenapa banyak developer gagal memanfaatkan AI untuk coding?
        </h2>
      </div>

      <!-- Pain Points Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-16">
        <div
          v-for="(point, index) in painPoints"
          :key="index"
          class="reveal flex gap-4 items-start"
          :class="`reveal-delay-${index + 1}`"
        >
          <div class="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <p class="text-sm text-gray-500 leading-relaxed">
            <span class="font-semibold text-gray-800">{{ point.bold }}</span> {{ point.rest }}
          </p>
        </div>
      </div>

      <!-- Transition -->
      <div class="reveal border-l-2 border-blue-500 pl-6 max-w-xl">
        <p class="text-base text-gray-500 leading-relaxed">
          Masalah ini bukan karena AI-nya kurang canggih. Masalahnya ada di
          <span class="font-semibold text-gray-800">strategi</span> dan
          <span class="font-semibold text-gray-800">workflow</span> yang kamu pakai.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const painPoints = [
  { bold: 'Langsung minta AI bikin aplikasi', rest: 'tanpa planning yang jelas — hasilnya berantakan.' },
  { bold: 'Prompt asal-asalan', rest: 'tanpa konteks yang tepat — AI malah bikin solusi yang keliru.' },
  { bold: 'Tidak punya blueprint teknis', rest: '— fitur yang dihasilkan tidak sesuai kebutuhan.' },
  { bold: 'Over-reliance pada AI', rest: '— begitu ada bug, tidak tahu harus mulai dari mana.' },
  { bold: 'Aplikasi "jalan" tapi tidak reliable', rest: '— belum siap untuk real users.' }
]
</script>
