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

        <!-- Info cards (centered, with icons) -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12 justify-center place-items-center">
          <div class="flex w-full flex-col items-center gap-2 rounded-xl border border-primary bg-white px-4 py-5 text-center text-sm font-medium text-text">
            <div class="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <IconBookOpen class="h-5 w-5 text-primary" />
            </div>
            <span class="text-text/80 font-semibold text-base">18 Bab</span>
            <span class="text-text/60 text-xs">Materi Terstruktur</span>
          </div>
          <div class="flex w-full flex-col items-center gap-2 rounded-xl border border-primary bg-white px-4 py-5 text-center text-sm font-medium text-text">
            <div class="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <IconLightBulb class="h-5 w-5 text-primary" />
            </div>
            <span class="text-text/80 font-semibold text-base">1 Studi Kasus</span>
            <span class="text-text/60 text-xs">Real Project</span>
          </div>
          <div class="flex w-full flex-col items-center gap-2 rounded-xl border border-primary bg-white px-4 py-5 text-center text-sm font-medium text-text">
            <div class="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <IconClock class="h-5 w-5 text-primary" />
            </div>
            <span class="text-text/80 font-semibold text-base">Teori + Praktek</span>
            <span class="text-text/60 text-xs">Langsung Action</span>
          </div>
          <div class="flex w-full flex-col items-center gap-2 rounded-xl border border-primary bg-white px-4 py-5 text-center text-sm font-medium text-text">
            <div class="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <IconDocument class="h-5 w-5 text-primary" />
            </div>
            <span class="text-text/80 font-semibold text-base">Contoh Kode Nyata</span>
            <span class="text-text/60 text-xs">Bisa Langsung Dipakai</span>
          </div>
        </div>
      </div>

      <!-- Collapsible curriculum -->
      <div class="space-y-4">
        <div
          v-for="(section, index) in sections"
          :key="index"
          class="reveal overflow-hidden rounded-2xl border border-primary bg-white shadow-sm"
          :class="`reveal-delay-${(index % 3) + 1}`"
        >
          <button
            type="button"
            @click="toggle(index)"
            class="flex w-full cursor-pointer items-center gap-4 bg-primary p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            <!-- Number badge -->
            <span
              class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-white text-lg font-bold text-primary shadow-sm"
            >
              {{ index + 1 }}
            </span>
            <!-- Title & subtitle -->
            <div class="min-w-0 flex-1">
              <h3 class="text-lg font-bold text-white">
                {{ section.title }}
              </h3>
              <p class="mt-0.5 text-sm text-white/75">{{ section.babCount }} bab</p>
            </div>
            <!-- Chevron -->
            <span
              class="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white/15 text-white transition-transform duration-200"
              :class="{ 'rotate-180': openIndex === index }"
            >
              <IconChevronDown class="h-5 w-5" />
            </span>
          </button>

          <!-- Collapsed content -->
          <div
            class="overflow-hidden border-t border-primary/15 transition-all duration-300 ease-in-out"
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
      <div class="mt-6 reveal flex items-center gap-3 rounded-xl border border-primary/10 bg-white px-4 py-3 text-sm text-text/70">
        <IconDocument class="w-5 h-5 text-text/60 flex-shrink-0" />
        <span>Semua diilustrasikan dengan satu studi kasus nyata: Restaurant Booking & Ordering System</span>
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
