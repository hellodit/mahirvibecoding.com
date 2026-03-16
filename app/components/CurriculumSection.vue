<template>
  <section id="curriculum" class="py-24 px-6 bg-white">
    <div class="max-w-5xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12 reveal">
        <h2 class="text-3xl md:text-4xl font-bold text-text tracking-tight mb-3">
          Apa aja <span class="text-primary">ada di dalamnya?</span>
        </h2>
        <p class="text-base text-text/70 max-w-xl mx-auto mb-10">
          Dari nol sampai bisa bikin project sendiri. Semua dibahas tuntas dengan bahasa yang gampang dipahami.
        </p>

        <!-- Info cards -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          <div class="flex items-center gap-2 px-4 py-3 rounded-xl bg-white border border-primary/10 text-text text-sm font-medium hover:border-primary/20 transition-colors">
            <span class="text-text/70">5 Bab</span>
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
                <p class="text-sm text-text/60 leading-relaxed">{{ chapter.description }}</p>
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
        title: 'Pengantar: Evolusi Software Engineering di Era AI',
        description: 'Memahami pergeseran paradigma dari menulis kode ke manajemen konteks. Mengenal tiga risiko utama bekerja dengan AI dan tiga pilar strategi sebagai solusinya.',
      },
      {
        title: 'Planning: Fondasi di Balik Produk yang Berhasil',
        description: 'Belajar dari contoh kasus nyata kenapa langsung coding tanpa strategi menghasilkan output generic. Menyusun PRD dan menempatkan AI sebagai partner berpikir.',
      },
      {
        title: 'Design: Mendesain Struktur Sistem Sebelum Coding',
        description: 'Menjembatani PRD ke coding dengan database schema sebagai kontrak antara bisnis dan aplikasi. Workflow tiga langkah bersama AI: draft, generate DDL, review & iterasi.',
      }
    ]
  },
  {
    title: 'Developing',
    babCount: 1,
    badgeColor: 'bg-primary',
    chapters: [
      {
        title: 'Develop: Kolaborasi Efektif dengan AI Coding Agent',
        description: 'Mengeksekusi PRD dan schema menjadi kode dengan prinsip Context > Prompt. Memilih AI Coding Agent, memecah PRD jadi unit kerja, dan membagi area kerja AI vs manusia.',
      }
    ]
  },
  {
    title: 'Deployment',
    babCount: 1,
    badgeColor: 'bg-primary',
    chapters: [
      {
        title: 'Deploy & Real World',
        description: 'Tantangan nyata membawa aplikasi ke produksi. Penggunaan AI untuk code review, peran Docker dan VPS, serta risiko keamanan yang sering terlewat.',
      }
    ]
  }
]
</script>
