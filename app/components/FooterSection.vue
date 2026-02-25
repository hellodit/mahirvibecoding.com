<template>
  <footer class="py-8 px-6 border-t border-white/10 bg-primary">
    <div class="max-w-5xl mx-auto">
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <span class="text-sm font-bold text-white">MahirVibeCoding</span>
          <span class="text-white/50">&middot;</span>
          <span class="text-xs text-white/80">Strategi Vibe Coding untuk Membangun Aplikasi Fullstack</span>
        </div>
        <div class="flex items-center gap-4">
          <NuxtLink to="/terms" class="text-xs text-white/60 hover:text-white transition-colors">Syarat &amp; Ketentuan</NuxtLink>
          <span class="text-white/30">&middot;</span>
          <NuxtLink to="/privacy" class="text-xs text-white/60 hover:text-white transition-colors">Kebijakan Privasi</NuxtLink>
          <span class="text-white/30">&middot;</span>
          <p class="text-xs text-white/60">&copy; {{ new Date().getFullYear() }}. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>
