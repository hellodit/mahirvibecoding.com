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


      <div class="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 mb-12">
        <div class="reveal">
          <div class="relative mx-auto max-w-[360px]">
              <img
                src="/cover-ebook.png"
                alt="Cover ebook Mahir Vibe Coding"
                class="mx-auto w-full rounded-[1.1rem] shadow-xl ring-1 ring-black/5"
                loading="lazy"
              >
          </div>
        </div>

        <div class="reveal ">
          <div class="space-y-4">
            <div
              v-for="(section, index) in sections"
              :key="index"
              class="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-primary/10"
            >
              <button
                type="button"
                @click="toggle(index)"
                :aria-expanded="isOpen(index)"
                class="flex w-full cursor-pointer items-center gap-4 p-5 text-left transition-colors hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                <span
                  class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#171717] text-sm font-bold text-white shadow-sm"
                >
                  {{ String(index + 1).padStart(2, '0') }}
                </span>
                <div class="min-w-0 flex-1">
                  <h3 class="font-serif text-xl leading-tight text-text">
                    {{ section.title }}
                  </h3>
                  <p class="mt-1 text-xs font-medium text-text/45">{{ section.babCount }} bab</p>
                </div>
                <span
                  class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-200"
                  :class="{ 'rotate-180': isOpen(index) }"
                >
                  <IconChevronDown class="h-5 w-5" />
                </span>
              </button>

              <div
                class="overflow-hidden transition-all duration-300 ease-in-out"
                :style="{ maxHeight: isOpen(index) ? '2000px' : '0px' }"
              >
                <ul class="ml-8 list-disc space-y-4 px-5 pb-5 pl-5 marker:text-primary">
                  <li
                    v-for="(chapter, chIndex) in section.chapters"
                    :key="chIndex"
                    class="mt-2 pl-1"
                  >
                    <h4 class="mb-1 text-sm font-semibold text-text">{{ chapter.title }}</h4>
                  </li>
                </ul>
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

const openIndexes = ref([])
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
        description: 'Fokus berpindah dari sintaksis ke manajemen konteks dan desain sistem. Mengenal tiga risiko AI Coding Agent: halusinasi, loss of control, dan degradasi arsitektur.',
      },
      {
        title: 'Kesalahan Umum Vibe Coding & Fondasi Planning',
        description: 'Apa yang terjadi ketika prompt dengan ide kasar — output generic dan tidak relevan. Memahami fondasi planning sebagai langkah pertama sebelum coding.',
      },
      {
        title: 'Menyusun Requirement dari Nol dengan Bantuan AI',
        description: 'Struktur requirement minimal: problem statement, target user, MVP scope, dan constraints. Enam pertanyaan untuk menggali kebutuhan bersama AI.',
      },
      {
        title: 'Memecah Requirement Menjadi Unit Kerja',
        description: 'Tiga langkah memecah requirement: identifikasi dependency, urutkan berdasarkan prasyarat, tentukan ukuran realistis per unit.',
      },
      {
        title: 'Generate Flow Brief per Flow',
        description: 'Membuat panduan eksekusi per flow dari requirement menggunakan AI. Contoh lengkap untuk Flow 1: Customer Booking.',
      },
      {
        title: 'Prinsip Mendesain Database Schema',
        description: 'Database schema sebagai kontrak antara bisnis, aplikasi, dan developer. Prinsip naming convention yang konsisten dan schema sesuai MVP scope.',
      },
      {
        title: 'Mendesain Database Schema dengan Bantuan AI',
        description: 'Draft entitas dan relasi secara manual, lalu gunakan AI untuk generate DDL lengkap. Review relasi, tipe data, constraint, dan index.',
      },
    ]
  },
  {
    title: 'Setup & Persiapan',
    babCount: 4,
    chapters: [
      {
        title: 'Schema & Migration: Dari DDL ke Laravel',
        description: 'Pendekatan incremental: mulai dari Pre-Flow, tambah tabel per flow. Keputusan desain: JSON snapshot, tabel transaksi terpisah, composite index.',
      },
      {
        title: 'Menentukan AI Coding Agent & Tech Stack',
        description: 'Tiga kriteria evaluasi AI Coding Agent: MCP support, agentic capabilities, pricing. Dokumentasi dan kompatibilitas AI sebagai faktor baru dalam memilih tech stack.',
      },
      {
        title: 'Setup Project & Mempersenjatai AI dengan Konteks',
        description: 'Setup project secara manual, lalu lengkapi AI dengan tiga komponen konteks: AI Guidelines, Agent Skills, dan MCP Server. Prinsip Context > Prompt.',
      },
      {
        title: 'Dari Flow Brief ke UI Mockup',
        description: 'Workflow tiga langkah: mockup, design system, panduan generate kode. Tools: v0, Bolt, Lovable, Google Stitch — dan cara menulis prompt yang efektif.',
      },
    ]
  },
  {
    title: 'Eksekusi Development',
    babCount: 5,
    chapters: [
      {
        title: 'Eksekusi Pre-Flow: Auth & Master Data Admin',
        description: 'Pola kerja: convert UI mockup ke Blade, baru implementasi fungsionalitas. Empat unit kerja: auth admin, CRUD kategori, CRUD menu, manajemen meja.',
      },
      {
        title: 'Eksekusi Flow 1: Customer Booking (Unit 1–2)',
        description: 'Halaman katalog menu dengan keranjang belanja dan session management. Form booking dengan validasi ketersediaan meja dan race condition handling.',
      },
      {
        title: 'Eksekusi Flow 1: Customer Booking (Unit 3–4)',
        description: 'Halaman status booking dengan countdown timer. Integrasi Midtrans Snap: webhook handler, validasi signature, idempotency, dan state machine booking.',
      },
      {
        title: 'Eksekusi Flow 2: Admin Approval',
        description: 'Approval/reject booking dengan state machine — hanya status tertentu yang boleh berubah ke status tertentu. Dashboard admin dengan filter dan detail lengkap.',
      },
      {
        title: 'Eksekusi Flow 3: Customer Tracking',
        description: 'Halaman tracking status booking read-only tanpa login. Lookup berdasarkan booking reference dengan keamanan: error message generic, tidak ekspos data sensitif.',
      },
    ]
  },
  {
    title: 'Post-Flow & Deployment',
    babCount: 2,
    chapters: [
      {
        title: 'Eksekusi Post-Flow: Notifikasi & Automasi',
        description: 'Notifikasi WhatsApp otomatis saat status berubah. Scheduler auto-cancel expired booking dengan query atomik dan race condition handling.',
      },
      {
        title: 'Deployment: Keamanan & Code Review',
        description: 'Checklist keamanan: .env, hardcoded credentials, file konfigurasi. Code review dengan AI — setup PR-Agent sebagai second opinion otomatis.',
      },
    ]
  }
]
</script>
