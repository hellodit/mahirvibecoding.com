<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-gray-100/50 supports-[backdrop-filter]:bg-white/60">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <!-- Logo -->
      <a href="#" class="flex items-center gap-3 group">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center text-white font-mono font-bold text-sm shadow-lg shadow-gray-200/50 group-hover:scale-105 transition-transform duration-300 ring-1 ring-white/20">
          &gt;_
        </div>
        <div class="flex flex-col">
          <span class="text-base font-bold text-gray-900 tracking-tight leading-none group-hover:text-clockwork-600 transition-colors">MahirVibe</span>
          <span class="text-[10px] font-medium text-gray-400 uppercase tracking-widest leading-none mt-0.5">Coding Framework</span>
        </div>
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-10">
        <a href="#curriculum" class="text-sm font-medium text-gray-600 hover:text-clockwork-600 transition-colors">Kurikulum</a>
        <a href="#target" class="text-sm font-medium text-gray-600 hover:text-clockwork-600 transition-colors">Untuk Siapa</a>
        <a href="#faq" class="text-sm font-medium text-gray-600 hover:text-clockwork-600 transition-colors">FAQ</a>
        <a href="#pricing" class="relative group inline-flex items-center px-6 py-2.5 text-sm font-bold text-white bg-clockwork-500 rounded-full shadow-lg shadow-clockwork-500/30 hover:bg-clockwork-600 hover:shadow-clockwork-500/40 hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
          <span class="relative z-10">Dapatkan Panduan</span>
          <div class="absolute inset-0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </a>
      </nav>

      <!-- Mobile Menu Button -->
      <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl px-6 py-4 space-y-4 shadow-xl absolute w-full left-0">
      <a href="#curriculum" @click="mobileMenuOpen = false" class="block text-sm font-medium text-gray-600 hover:text-clockwork-600">Kurikulum</a>
      <a href="#target" @click="mobileMenuOpen = false" class="block text-sm font-medium text-gray-600 hover:text-clockwork-600">Untuk Siapa</a>
      <a href="#faq" @click="mobileMenuOpen = false" class="block text-sm font-medium text-gray-600 hover:text-clockwork-600">FAQ</a>
      <a href="#pricing" @click="mobileMenuOpen = false" class="block w-full text-center py-3 text-sm font-bold text-white bg-clockwork-500 rounded-lg shadow-md hover:bg-clockwork-600">Dapatkan Panduan</a>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const mobileMenuOpen = ref(false)
</script>
