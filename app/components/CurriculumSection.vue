<template>
  <section id="curriculum" class="py-20 px-6 bg-background">
    <div class="max-w-5xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12 reveal">
        <span class="inline-block px-3 py-1.5 rounded-lg bg-primary text-white text-xs font-semibold uppercase tracking-wider mb-4">
          21 BAB LENGKAP
        </span>
        <h2 class="text-3xl md:text-4xl font-bold text-text tracking-tight mb-3">
          Apa aja <span class="text-primary">ada di dalamnya?</span>
        </h2>
        <p class="text-base text-text/70 max-w-xl mx-auto mb-10">
          Dari nol sampai bisa bikin project sendiri. Semua dibahas tuntas dengan bahasa yang gampang dipahami.
        </p>

        <!-- Info cards -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          <div class="flex items-center gap-2 px-4 py-3 rounded-xl bg-white border border-primary/10 text-text text-sm font-medium hover:border-primary/20 transition-colors">
            <span class="text-text/70">21 Chapter</span>
          </div>
          <div class="flex items-center gap-2 px-4 py-3 rounded-xl bg-white border border-primary/10 text-text text-sm font-medium hover:border-primary/20 transition-colors">
            <span class="text-text/70">50+ Code Examples</span>
          </div>
          <div class="flex items-center gap-2 px-4 py-3 rounded-xl bg-white border border-primary/10 text-text text-sm font-medium hover:border-primary/20 transition-colors">
            <div class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span>Checklist Tiap Bab</span>
          </div>
          <div class="flex items-center gap-2 px-4 py-3 rounded-xl bg-white border border-primary/10 text-text text-sm font-medium hover:border-primary/20 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-text/60 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Templates Siap Pakai</span>
          </div>
        </div>
      </div>

      <!-- Collapsible curriculum -->
      <div class="space-y-4">
        <div
          v-for="(section, index) in sections"
          :key="index"
          class="reveal rounded-2xl bg-white border border-primary/10 overflow-hidden transition-colors hover:border-primary/20"
          :class="`reveal-delay-${(index % 3) + 1}`"
        >
          <button
            @click="toggle(index)"
            class="w-full flex items-center gap-4 p-5 text-left cursor-pointer group"
          >
            <!-- Number badge -->
            <span
              class="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg"
              :class="section.badgeColor"
            >
              {{ index + 1 }}
            </span>
            <!-- Title & subtitle -->
            <div class="flex-1 min-w-0">
              <h3 class="text-lg font-bold text-text group-hover:text-primary transition-colors">
                {{ section.title }}
              </h3>
              <p class="text-sm text-text/70 mt-0.5">{{ section.babCount }} bab</p>
            </div>
            <!-- Chevron -->
            <span class="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-text/70 transition-transform duration-200" :class="{ 'rotate-180': openIndex === index }">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>

          <!-- Collapsed content -->
          <div
            class="overflow-hidden transition-all duration-300 ease-in-out border-t border-primary/10"
            :style="{ maxHeight: openIndex === index ? '2000px' : '0px' }"
          >
            <div class="p-5 pt-4 space-y-6">
              <div
                v-for="(chapter, chIndex) in section.chapters"
                :key="chIndex"
                class="pl-2 border-l-2 border-primary/20"
              >
                <h4 class="text-sm font-semibold text-text mb-1">{{ chapter.title }}</h4>
                <p class="text-xs text-text/70 italic mb-2">{{ chapter.quote }}</p>
                <ul class="space-y-1">
                  <li v-for="(item, i) in chapter.items" :key="i" class="text-sm text-text/80 flex items-start gap-2">
                    <span class="text-primary mt-0.5 flex-shrink-0">→</span>
                    {{ item }}
                  </li>
                </ul>
                <div class="flex flex-wrap gap-1.5 mt-2">
                  <span v-for="(tag, t) in chapter.tags" :key="t" class="text-[10px] font-medium text-text/70 bg-primary/5 border border-primary/10 px-2 py-0.5 rounded-full">
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <div class="mt-6 reveal flex items-center gap-3 px-4 py-3 rounded-xl bg-white border border-primary/10 text-sm text-text/70 hover:border-primary/20 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-text/60 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <span>250+ halaman panduan praktis dengan contoh nyata</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const openIndex = ref(-1)
const toggle = (index) => {
  openIndex.value = openIndex.value === index ? -1 : index
}

const sections = [
  {
    title: 'Planning',
    babCount: 3,
    badgeColor: 'bg-primary',
    chapters: [
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
      }
    ]
  },
  {
    title: 'Developing',
    babCount: 2,
    badgeColor: 'bg-primary',
    chapters: [
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
      }
    ]
  },
  {
    title: 'Deployment',
    babCount: 1,
    badgeColor: 'bg-primary',
    chapters: [
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
  }
]
</script>
