<template>
  <section id="curriculum" class="py-20 px-6 bg-white">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16 reveal">
        <p class="text-xs font-semibold text-clockwork-400 uppercase tracking-widest mb-3">Kurikulum</p>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-3">
          Apa saja yang akan kamu pelajari?
        </h2>
        <p class="text-base text-gray-400 max-w-md mx-auto">
          6 bab komprehensif — dari nol sampai deploy, dengan AI sebagai co-pilot.
        </p>
      </div>

      <!-- Chapters -->
      <div class="space-y-0">
        <div
          v-for="(chapter, index) in chapters"
          :key="index"
          class="reveal group grid grid-cols-1 md:grid-cols-[80px_1fr] gap-4 md:gap-8 py-8 border-b border-gray-100 first:border-t first:border-gray-100"
          :class="`reveal-delay-${(index % 3) + 1}`"
        >
          <!-- Chapter number -->
          <div class="flex items-start">
            <span class="text-3xl font-bold text-gray-200 group-hover:text-clockwork-200 transition-colors tabular-nums">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
          </div>

          <!-- Content -->
          <div>
            <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-clockwork-500 transition-colors">{{ chapter.title }}</h3>
            <p class="text-sm text-gray-400 italic mb-4">{{ chapter.quote }}</p>
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-4">
              <li v-for="(item, i) in chapter.items" :key="i" class="text-sm text-gray-500 flex items-start gap-2">
                <span class="text-clockwork-400 mt-1 flex-shrink-0">→</span>
                {{ item }}
              </li>
            </ul>
            <div class="flex flex-wrap gap-2">
              <span v-for="(tag, t) in chapter.tags" :key="t"
                class="text-[11px] font-medium text-gray-400 bg-gray-50 border border-gray-100 px-2.5 py-0.5 rounded-full">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const chapters = [
  {
    title: 'Pengantar: Memahami Perubahan Era Coding',
    quote: 'Sebelum kamu mulai coding dengan AI, kamu perlu memahami kenapa dan bagaimana dunia software engineering berubah.',
    items: [
      'Pergeseran era dari coding tradisional ke AI Coding Agent',
      'Masalah umum developer saat pertama kali pakai AI',
      'Bagaimana SDLC tetap relevan di era AI',
      'Kenapa developer perlu beradaptasi, bukan melawan'
    ],
    tags: ['AI era', 'software engineering shift', 'developer mindset']
  },
  {
    title: 'Planning: Fondasi yang Tidak Bisa Di-Skip',
    quote: 'Kesalahan di tahap planning tidak bisa diperbaiki oleh secanggih apa pun AI yang kamu gunakan.',
    items: [
      'Cara mengidentifikasi masalah yang benar-benar dialami pengguna',
      'Membedakan masalah nyata vs asumsi developer',
      'Menentukan batasan masalah agar tidak over-engineering',
      'Kesalahan umum saat menggunakan AI terlalu dini',
      'Teknik chain-of-thought (CoT) prompting untuk planning'
    ],
    tags: ['problem validation', 'scope definition', 'product thinking']
  },
  {
    title: 'Design: Blueprint yang Dipahami AI',
    quote: 'AI bisa menulis kode yang bagus — tapi hanya kalau kamu memberikan spesifikasi yang jelas.',
    items: [
      'Menyusun PRD (Product Requirement Document) yang efektif',
      'PRD sebagai alat komunikasi antara manusia dan AI',
      'Membuat database schema yang tepat guna',
      'Kesalahan desain yang sering menyebabkan AI "ngaco"'
    ],
    tags: ['PRD', 'system blueprint', 'database schema', 'AI communication']
  },
  {
    title: 'Develop: Kolaborasi, Bukan Delegasi',
    quote: 'Kunci sukses vibe coding bukan menyerahkan semua ke AI — tapi tahu kapan dan di mana AI paling efektif.',
    items: [
      'Menentukan tech stack yang sesuai kebutuhan',
      'Prinsip Context > Prompt — kenapa konteks lebih penting',
      'Framework vibe coding untuk mempercepat development',
      'Area yang cocok untuk AI vs yang harus dikendalikan manusia'
    ],
    tags: ['AI coding agent', 'context management', 'human-in-the-loop']
  },
  {
    title: 'Testing & Reliability: Jalan ≠ Siap Produksi',
    quote: 'Aplikasi yang "jalan" belum tentu siap digunakan dalam skenario nyata.',
    items: [
      'Memeriksa kesesuaian fitur dengan kebutuhan awal',
      'Debugging dengan bantuan AI secara bertanggung jawab',
      'Kesalahan umum saat debugging dengan AI',
      'Peran unit test dalam menjaga stabilitas aplikasi'
    ],
    tags: ['testing mindset', 'AI debugging', 'unit testing', 'reliability']
  },
  {
    title: 'Deploy & Real World: Dari Lokal ke Produksi',
    quote: 'Deployment adalah fase yang tidak bisa disepelekan — terutama untuk aplikasi yang dibangun dengan bantuan AI.',
    items: [
      'Penggunaan AI Agent untuk code review sebelum deploy',
      'Gambaran peran Docker dalam deployment',
      'Peran VPS/hosting dalam menjalankan aplikasi secara stabil',
      'Risiko keamanan dan environment yang sering terlewat'
    ],
    tags: ['deployment', 'docker', 'VPS', 'production readiness']
  }
]
</script>
