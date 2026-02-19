<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/60">
    <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <a href="#" class="text-lg font-bold text-gray-900 tracking-tight">MahirVibeCoding</a>
      <nav class="hidden md:flex items-center gap-8">
        <a href="#curriculum" class="text-sm text-gray-500 hover:text-gray-900 transition-colors">Kurikulum</a>
        <a href="#target" class="text-sm text-gray-500 hover:text-gray-900 transition-colors">Untuk Siapa</a>
        <a href="#faq" class="text-sm text-gray-500 hover:text-gray-900 transition-colors">FAQ</a>
        <a href="#pricing" class="inline-flex items-center px-5 py-2 text-sm font-semibold text-white bg-clockwork-400 rounded-full hover:bg-clockwork-600 transition-colors">
          Dapatkan Panduan
        </a>
      </nav>
      <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2 text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    <div v-if="mobileMenuOpen" class="md:hidden border-t border-gray-200 bg-white px-6 py-4 space-y-3">
      <a href="#curriculum" @click="mobileMenuOpen = false" class="block text-sm text-gray-600 hover:text-gray-900">Kurikulum</a>
      <a href="#target" @click="mobileMenuOpen = false" class="block text-sm text-gray-600 hover:text-gray-900">Untuk Siapa</a>
      <a href="#faq" @click="mobileMenuOpen = false" class="block text-sm text-gray-600 hover:text-gray-900">FAQ</a>
      <a href="#pricing" @click="mobileMenuOpen = false" class="block text-sm font-semibold text-clockwork-500">Dapatkan Panduan</a>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const mobileMenuOpen = ref(false)
</script>
