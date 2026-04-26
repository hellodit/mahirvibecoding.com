<template>
  <section id="problem" class="py-20 px-6">
    <div class="max-w-5xl mx-auto">
      <!-- Header -->
      <div class="max-w-2xl mb-14 reveal">
        <h2 class="text-2xl md:text-3xl font-bold text-text leading-tight tracking-tight mb-4">
          Kenapa sebagian besar proyek Vibe Coding gagal di tengah jalan?
        </h2>
              <!-- Transition -->
      <div class="reveal border-l-2 border-primary pl-6 max-w-xl">
        <p class="text-sm text-text/70 leading-relaxed">
          Bukan karena AI-nya kurang canggih. Masalahnya ada di
          <span class="font-semibold text-text">planning</span>,
          <span class="font-semibold text-text">manajemen konteks</span>, dan
          <span class="font-semibold text-text">kontrol kualitas</span> yang kamu pakai.
        </p>
      </div>
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
            <IconClose class="w-3.5 h-3.5 text-red-400" :stroke-width="2.5" />
          </div>
          <p class="text-sm text-text/80 leading-relaxed">
            <span class="font-semibold text-text">{{ point.bold }}</span> {{ point.rest }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const painPoints = [
  { bold: 'Prompt dengan ide kasar tanpa planning yang jelas', rest: '— output AI generic dan tidak relevan dengan kebutuhan spesifik.' },
  { bold: 'Tidak mendesain arsitektur dan schema sebelum coding', rest: '— hasilnya tidak scalable dan sulit di-maintain.' },
  { bold: 'Tidak memecah kerja jadi unit kecil', rest: '— kehilangan kontrol di tengah jalan dan sulit di-review.' },
  { bold: 'AI berhalusinasi tanpa disadari', rest: '— kode terlihat benar tapi logikanya keliru.' },
  { bold: 'Over-reliance pada AI', rest: '— begitu ada bug atau edge case, tidak tahu harus mulai dari mana.' },
  { bold: 'Aplikasi "jalan" tapi tidak production-ready', rest: '— keamanan, performa, dan reliabilitas terabaikan.' }
]
</script>
