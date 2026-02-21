<template>
  <section id="faq" class="py-20 px-6 bg-primary/5">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-14 reveal">
        <p class="text-xs font-semibold text-primary uppercase tracking-widest mb-3">FAQ</p>
        <h2 class="text-3xl md:text-4xl font-bold text-text tracking-tight">
          Pertanyaan yang sering diajukan
        </h2>
      </div>

      <div class="space-y-0">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="reveal border-b border-primary/10 first:border-t"
          :class="`reveal-delay-${Math.min(index + 1, 5)}`"
        >
          <button
            @click="toggle(index)"
            class="w-full flex items-center justify-between py-5 text-left cursor-pointer group"
          >
            <span class="text-sm font-semibold text-text pr-4 group-hover:text-primary transition-colors">{{ faq.question }}</span>
            <span class="flex-shrink-0 w-6 h-6 rounded-full border border-primary/20 flex items-center justify-center group-hover:border-primary transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-3.5 h-3.5 text-text/60 transition-transform duration-200 group-hover:text-primary"
                :class="{ 'rotate-45': openIndex === index }"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </span>
          </button>
          <div
            class="overflow-hidden transition-all duration-300 ease-in-out"
            :style="{ maxHeight: openIndex === index ? '200px' : '0px' }"
          >
            <p class="text-sm text-text/70 leading-relaxed pb-5">{{ faq.answer }}</p>
          </div>
        </div>
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

const faqs = [
  {
    question: 'Apakah saya perlu jago coding dulu?',
    answer: 'Tidak perlu jago, tapi kamu perlu memahami dasar-dasar programming. Panduan ini bukan untuk belajar coding dari nol, tapi untuk belajar strategi bekerja dengan AI dalam membangun aplikasi.'
  },
  {
    question: 'AI tool apa yang dibahas?',
    answer: 'Panduan ini bersifat tool-agnostic — prinsip dan framework yang diajarkan berlaku untuk berbagai AI Coding Agent (Cursor, GitHub Copilot, Windsurf, dll). Yang dipelajari adalah cara berpikir dan bekerja, bukan spesifik tool tertentu.'
  },
  {
    question: 'Apakah ini khusus untuk tech stack tertentu?',
    answer: 'Tidak. Framework dan strategi yang diajarkan bisa diterapkan di berbagai tech stack (React, Laravel, Rails, Next.js, dll). Fokusnya ada pada workflow dan decision-making, bukan syntax.'
  },
  {
    question: 'Apa bedanya dengan tutorial AI coding lainnya?',
    answer: 'Kebanyakan tutorial fokus pada prompting saja. Panduan ini membahas end-to-end workflow — dari validasi masalah, design, development, testing, hingga deployment — semua dengan prinsip Human-in-the-Loop.'
  },
  {
    question: 'Apakah ada garansi?',
    answer: 'Ya — jika setelah membaca panduan ini kamu merasa tidak mendapat value, hubungi kami untuk refund penuh. Kami percaya pada kualitas materi ini.'
  }
]
</script>
