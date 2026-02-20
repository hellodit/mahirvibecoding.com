<template>
  <header class="relative z-50 bg-white border-b border-gray-100">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <!-- Logo -->
      <a href="#" class="flex items-center gap-3 group">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center text-white font-mono font-bold text-sm shadow-lg shadow-gray-200/50 group-hover:scale-105 transition-transform duration-300 ring-1 ring-white/20">
          &gt;_
        </div>
        <div class="flex flex-col">
          <span class="text-base font-bold text-gray-900 tracking-tight leading-none group-hover:text-gray-700 transition-colors">MahirVibe</span>
          <span class="text-[10px] font-medium text-gray-400 uppercase tracking-widest leading-none mt-0.5">Coding Framework</span>
        </div>
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-8">
        <a href="#curriculum" class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Kurikulum</a>
        <a href="#target" class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Untuk Siapa</a>
        <a href="#faq" class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
      </nav>

      <!-- Right CTA -->
      <div class="hidden md:flex items-center gap-3">
        <a href="#pricing" class="px-5 py-2.5 text-sm font-semibold text-gray-800 border border-gray-300 rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all">
          Selengkapnya
        </a>
        <a href="#pricing" class="px-5 py-2.5 text-sm font-semibold text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-all shadow-sm">
          Dapatkan Panduan
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-4 shadow-xl absolute w-full left-0">
      <a href="#curriculum" @click="mobileMenuOpen = false" class="block text-sm font-medium text-gray-600 hover:text-gray-900">Kurikulum</a>
      <a href="#target" @click="mobileMenuOpen = false" class="block text-sm font-medium text-gray-600 hover:text-gray-900">Untuk Siapa</a>
      <a href="#faq" @click="mobileMenuOpen = false" class="block text-sm font-medium text-gray-600 hover:text-gray-900">FAQ</a>
      <div class="flex flex-col gap-2 pt-2">
        <a href="#pricing" @click="mobileMenuOpen = false" class="block w-full text-center py-3 text-sm font-semibold text-gray-800 border border-gray-300 rounded-lg hover:bg-gray-50">Selengkapnya</a>
        <a href="#pricing" @click="mobileMenuOpen = false" class="block w-full text-center py-3 text-sm font-bold text-white bg-gray-900 rounded-lg hover:bg-gray-800">Dapatkan Panduan</a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  announcementVisible: {
    type: Boolean,
    default: true
  }
})

const mobileMenuOpen = ref(false)
</script>
