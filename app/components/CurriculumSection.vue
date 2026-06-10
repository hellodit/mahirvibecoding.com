<template>
  <section
    id="curriculum"
    class="py-20 px-6"
  >
    <div class="max-w-5xl mx-auto">
      <div class="reveal mb-12 max-w-3xl">
        <p class="text-xs font-semibold text-primary uppercase tracking-widest mb-3">
          Isi Ebook
        </p>
        <h2 class="mb-4 font-serif text-3xl leading-tight text-text md:text-4xl">
          Apa yang akan kamu pelajari?
        </h2>
        <p class="max-w-2xl text-sm leading-relaxed text-text/70 md:text-base">
          Panduan ini merangkum workflow vibe coding dari planning sampai deployment aplikasi
          fullstack, lengkap dengan strategi, ekspektasi, dan contoh teknis yang bisa kamu ikuti.
        </p>
      </div>


      <div class="reveal relative mb-12">
        <!-- garis vertikal yang menyambung tiap tahap -->
        <span
          class="absolute left-5 top-3 bottom-3 w-px bg-primary/15 md:left-6"
          aria-hidden="true"
        />

        <div class="space-y-12">
          <div
            v-for="(section, index) in sections"
            :key="index"
            class="relative pl-16 md:pl-20"
          >
            <!-- node bernomor -->
            <span
              class="absolute left-0 top-0 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#171717] text-sm font-bold text-white shadow-sm md:h-12 md:w-12 md:text-base"
            >
              {{ String(index + 1).padStart(2, '0') }}
            </span>

            <button
              type="button"
              @click="toggle(index)"
              :aria-expanded="isOpen(index)"
              class="group mb-5 flex w-full cursor-pointer items-center gap-4 text-left focus-visible:outline-none"
            >
              <div class="min-w-0 flex-1">
                <h3 class="font-serif text-2xl leading-tight text-text">{{ section.title }}</h3>
                <p class="mt-1 text-xs font-semibold uppercase tracking-widest text-primary">
                  {{ section.babCount }} bab
                </p>
              </div>
              <span
                class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-200 group-hover:bg-primary/20"
                :class="{ 'rotate-180': isOpen(index) }"
              >
                <IconChevronDown class="h-5 w-5" />
              </span>
            </button>

            <div
              class="overflow-hidden transition-all duration-300 ease-in-out"
              :style="{ maxHeight: isOpen(index) ? '2000px' : '0px' }"
            >
              <div class="grid gap-4 p-1 sm:grid-cols-2">
                <article
                  v-for="(chapter, chIndex) in section.chapters"
                  :key="chIndex"
                  class="flex gap-4 rounded-3xl border border-primary/10 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <span
                    class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg border border-primary/30 text-sm font-bold text-primary"
                  >
                    {{ String(chIndex + 1).padStart(2, '0') }}
                  </span>
                  <div class="min-w-0 flex-1">
                    <h4 class="mb-1.5 font-serif text-lg leading-snug text-text">{{ chapter.title }}</h4>
                    <p class="text-sm leading-relaxed text-text/65">{{ chapter.description }}</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mx-auto  flex flex-col gap-2 sm:flex-row justify-center">
            <a
              href="#pricing"
              class="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-primary"
            >
              Ambil Ebook Sekarang
            </a>
            <a
              href="#faq"
              class="inline-flex items-center justify-center rounded-full border border-primary/15 bg-white px-6 py-3 text-sm font-bold text-text transition-colors hover:border-primary/40"
            >
              Lihat Pertanyaan Umum
            </a>
          </div>
    </div>

    
  </section>
</template>

<script setup>
import { ref } from 'vue'

const openIndexes = ref([0])
const isOpen = (index) => openIndexes.value.includes(index)
const toggle = (index) => {
  openIndexes.value = isOpen(index)
    ? openIndexes.value.filter((openIndex) => openIndex !== index)
    : [...openIndexes.value, index]
}

const sections = [
  {
    title: 'Strategi & Planning',
    babCount: 7,
    chapters: [
      {
        title: 'Pergeseran Paradigma Software Engineering',
        description: 'Dari sintaksis ke manajemen konteks & desain sistem, plus tiga risiko AI Coding Agent: halusinasi, loss of control, dan degradasi arsitektur.',
      },
      {
        title: 'Kesalahan Umum Vibe Coding & Fondasi Planning',
        description: 'Kenapa prompt dengan ide kasar menghasilkan output generic, dan kenapa planning jadi langkah pertama sebelum coding.',
      },
      {
        title: 'Menyusun Requirement dari Nol dengan Bantuan AI',
        description: 'Struktur requirement minimal (problem statement, target user, MVP scope, constraints) lewat enam pertanyaan bersama AI.',
      },
      {
        title: 'Memecah Requirement Menjadi Unit Kerja',
        description: 'Tiga langkah memecah requirement: identifikasi dependency, urutkan prasyarat, tentukan ukuran realistis per unit.',
      },
      {
        title: 'Generate Flow Brief per Flow',
        description: 'Membuat panduan eksekusi per flow dari requirement dengan AI, lengkap dengan contoh Flow 1: Customer Booking.',
      },
      {
        title: 'Prinsip Mendesain Database Schema',
        description: 'Schema sebagai kontrak bisnis–aplikasi–developer: naming convention konsisten dan schema sesuai MVP scope.',
      },
      {
        title: 'Mendesain Database Schema dengan Bantuan AI',
        description: 'Draft entitas & relasi manual, lalu AI generate DDL — review relasi, tipe data, constraint, dan index.',
      },
    ]
  },
  {
    title: 'Setup & Persiapan',
    babCount: 4,
    chapters: [
      {
        title: 'Schema & Migration',
        description: 'Migration incremental per flow, plus keputusan desain: JSON snapshot, tabel transaksi terpisah, composite index.',
      },
      {
        title: 'Menentukan AI Coding Agent & Tech Stack',
        description: 'Tiga kriteria pilih AI Coding Agent (MCP support, agentic, pricing) dan kompatibilitas AI sebagai faktor baru memilih tech stack.',
      },
      {
        title: 'Setup Project & Mempersenjatai AI dengan Konteks',
        description: 'Lengkapi AI dengan tiga komponen konteks: AI Guidelines, Agent Skills, dan MCP Server — prinsip Context > Prompt.',
      },
      {
        title: 'Dari Flow Brief ke UI Mockup',
        description: 'Tiga langkah: mockup, design system, generate kode. Pakai v0, Bolt, Lovable, atau Google Stitch dengan prompt efektif.',
      },
    ]
  },
  {
    title: 'Eksekusi Development',
    babCount: 5,
    chapters: [
      {
        title: 'Eksekusi Pre-Flow: Auth & Master Data Admin',
        description: 'Convert UI mockup ke Blade lalu implementasi: auth admin, CRUD kategori, CRUD menu, dan manajemen meja.',
      },
      {
        title: 'Eksekusi Flow 1: Customer Booking (Unit 1–2)',
        description: 'Katalog menu dengan keranjang & session, plus form booking dengan validasi ketersediaan meja dan race condition.',
      },
      {
        title: 'Eksekusi Flow 1: Customer Booking (Unit 3–4)',
        description: 'Status booking dengan countdown timer dan integrasi Midtrans Snap: webhook, validasi signature, idempotency, state machine.',
      },
      {
        title: 'Eksekusi Flow 2: Admin Approval',
        description: 'Approval/reject booking dengan state machine (transisi status terbatas), plus dashboard admin dengan filter dan detail.',
      },
      {
        title: 'Eksekusi Flow 3: Customer Tracking',
        description: 'Tracking read-only tanpa login via booking reference, dengan error generic agar data sensitif tidak terekspos.',
      },
    ]
  },
  {
    title: 'Post-Flow & Deployment',
    babCount: 2,
    chapters: [
      {
        title: 'Eksekusi Post-Flow: Notifikasi & Automasi',
        description: 'Notifikasi WhatsApp otomatis saat status berubah dan scheduler auto-cancel expired booking dengan query atomik.',
      },
      {
        title: 'Deployment: Keamanan & Code Review',
        description: 'Checklist keamanan (.env, credentials, config) dan code review AI dengan PR-Agent sebagai second opinion otomatis.',
      },
    ]
  }
]
</script>
