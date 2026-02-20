<template>
  <div class="rounded-xl overflow-hidden shadow-xl border border-primary/30 bg-background max-w-md mx-auto">
    <!-- Title bar -->
    <div class="flex items-center gap-3 px-4 py-3 border-b border-primary/20 bg-primary">
      <div class="w-3 h-3 rounded-full bg-red-500" />
      <div class="w-3 h-3 rounded-full bg-amber-400" />
      <span class="text-text text-sm text-white font-medium">Framework Vibe Coding — Agent</span>
    </div>

    <div class="p-4 space-y-3 text-sm">
      <!-- Chat content -->
      <p class="text-text  bg-primary/50 p-2 rounded-lg">
        <span class="text-text"> Bikin fitur auth untuk app fullstack saya</span>
      </p>
      <p> 
        <span class="text-primary font-semibold">Explored scope:</span>
      </p>
      <p> 
        <span class="text-text"> Cek scope dulu — multi-file, butuh PRD & design</span>
      </p>
      <p class="text-text">
        T-1: "Implementasi autentikasi dengan database"
      </p>

      <!-- Task details block (batu/stone component) -->
      <div class="rounded-lg border border-primary/20 bg-primary/5 p-3 space-y-2">
        <p class="text-text font-semibold uppercase tracking-wide text-xs">Detail task:</p>
        <ul class="space-y-1.5 text-text/90 text-xs">
          <li><span class="text-text/70">Kriteria:</span> Login/logout, session, human-in-the-loop</li>
          <li><span class="text-text/70">Alur:</span> Validasi → PRD → Develop → Testing → Deploy</li>
          <li><span class="text-text/70">State:</span> PLANNED (mulai dari planning, bukan langsung koding)</li>
        </ul>
      </div>

      <p>
        <span class="text-primary font-semibold">AI:</span>
        <span class="text-text"> Task dibuat! Mulai fase planning dulu ya.</span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
