<template>
  <section id="hero" class="relative min-h-screen bg-white overflow-hidden">
    <!-- Subtle grid pattern -->
    <div class="absolute inset-0 opacity-[0.35]" style="background-image: radial-gradient(circle, #d4d4d4 1px, transparent 1px); background-size: 24px 24px;"></div>

    <div class="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left: Text -->
        <div>
          <p class="text-xs font-semibold text-clockwork-400 uppercase tracking-[0.2em] mb-6">Framework Vibe Coding</p>

          <h1 class="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6">
            Kuasai Vibe Coding, bangun aplikasi fullstack dengan AI
          </h1>

          <p class="text-base md:text-lg text-gray-500 max-w-md mb-10 leading-relaxed">
            Framework lengkap untuk membangun aplikasi fullstack bersama AI Coding Agent — dari planning hingga deploy.
          </p>

          <!-- CTA -->
          <a href="#pricing"
            class="group inline-flex items-center gap-3 text-sm font-semibold text-gray-800 uppercase tracking-[0.15em] border border-gray-300 rounded-full px-6 py-3.5 hover:border-clockwork-400 hover:text-clockwork-500 transition-all">
            Dapatkan Panduan
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p class="mt-3 text-xs text-gray-400">Harga peluncuran tersedia. Tanpa risiko.</p>
        </div>

        <!-- Right: UI Mockup Cards -->
        <div class="relative hidden lg:block">
          <!-- Card 1: SDLC Workflow -->
          <div class="absolute -top-4 right-0 w-[320px] bg-white border border-gray-200 rounded-xl p-5 shadow-lg">
            <div class="flex items-center gap-2 mb-4">
              <div class="w-7 h-7 rounded-full bg-clockwork-50 flex items-center justify-center">
                <span class="text-xs">🎯</span>
              </div>
              <span class="text-xs font-semibold text-gray-800 tracking-wide uppercase">Workflow</span>
              <span class="ml-auto text-[10px] text-clockwork-500 bg-clockwork-50 px-2 py-0.5 rounded-full font-medium">Framework</span>
            </div>
            <div class="space-y-2.5">
              <div class="flex items-center gap-3 text-xs">
                <span class="w-5 h-5 rounded bg-clockwork-50 flex items-center justify-center text-clockwork-500 text-[10px] font-bold">1</span>
                <span class="text-gray-600">Planning & Validasi Masalah</span>
                <span class="ml-auto w-4 h-4 rounded-full bg-clockwork-50 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 h-2.5 text-clockwork-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
                </span>
              </div>
              <div class="flex items-center gap-3 text-xs">
                <span class="w-5 h-5 rounded bg-clockwork-50 flex items-center justify-center text-clockwork-500 text-[10px] font-bold">2</span>
                <span class="text-gray-600">Design & Blueprint</span>
                <span class="ml-auto w-4 h-4 rounded-full bg-clockwork-50 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-2.5 h-2.5 text-clockwork-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
                </span>
              </div>
              <div class="flex items-center gap-3 text-xs">
                <span class="w-5 h-5 rounded bg-clockwork-50 flex items-center justify-center text-clockwork-500 text-[10px] font-bold">3</span>
                <span class="text-gray-800 font-medium">Develop dengan AI Agent</span>
                <span class="ml-auto">
                  <span class="relative flex h-2.5 w-2.5"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-clockwork-400 opacity-75"></span><span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-clockwork-400"></span></span>
                </span>
              </div>
              <div class="flex items-center gap-3 text-xs">
                <span class="w-5 h-5 rounded bg-gray-100 flex items-center justify-center text-gray-400 text-[10px] font-bold">4</span>
                <span class="text-gray-400">Testing & Reliability</span>
              </div>
              <div class="flex items-center gap-3 text-xs">
                <span class="w-5 h-5 rounded bg-gray-100 flex items-center justify-center text-gray-400 text-[10px] font-bold">5</span>
                <span class="text-gray-400">Deploy ke Produksi</span>
              </div>
            </div>
          </div>

          <!-- Card 2: AI Prompt -->
          <div class="absolute top-[220px] right-[40px] w-[280px] bg-white border border-clockwork-200/40 rounded-xl p-5 shadow-lg">
            <div class="flex items-center gap-2 mb-3">
              <span class="text-[10px] font-semibold text-clockwork-500 uppercase tracking-wider">AI Coding Agent</span>
            </div>
            <div class="bg-gray-50 rounded-lg p-3 mb-3 border border-gray-100">
              <p class="text-[11px] text-gray-500 leading-relaxed font-mono">
                <span class="text-clockwork-400">→</span> Buatkan implementasi auth flow berdasarkan PRD dan database schema yang sudah kita susun...
              </p>
            </div>
            <div class="flex items-center gap-2">
              <div class="flex-1 h-7 rounded-full bg-gray-50 border border-gray-200 flex items-center px-3">
                <span class="text-[10px] text-gray-400">Context-driven prompt...</span>
              </div>
              <button class="h-7 px-3 rounded-full bg-clockwork-400 text-[10px] font-semibold text-white">Send</button>
            </div>
          </div>

          <!-- Card 3: Result -->
          <div class="absolute top-[410px] right-[100px] w-[220px] bg-white border border-gray-200 rounded-xl p-4 shadow-lg">
            <div class="flex items-center gap-2 mb-2">
              <span class="w-2 h-2 rounded-full bg-green-400"></span>
              <span class="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Output</span>
            </div>
            <div class="space-y-1.5">
              <div class="h-2 bg-gray-100 rounded-full w-full"></div>
              <div class="h-2 bg-gray-100 rounded-full w-4/5"></div>
              <div class="h-2 bg-clockwork-100 rounded-full w-3/5"></div>
              <div class="h-2 bg-gray-100 rounded-full w-full"></div>
              <div class="h-2 bg-gray-100 rounded-full w-2/3"></div>
            </div>
          </div>

          <!-- Connecting lines -->
          <svg class="absolute top-[200px] right-[180px] w-[60px] h-[40px] opacity-20" viewBox="0 0 60 40">
            <path d="M0 0 L30 20 L60 40" stroke="#E56515" stroke-width="1" fill="none" stroke-dasharray="4 4" />
          </svg>
          <svg class="absolute top-[395px] right-[200px] w-[40px] h-[30px] opacity-20" viewBox="0 0 40 30">
            <path d="M0 0 L20 15 L40 30" stroke="#E56515" stroke-width="1" fill="none" stroke-dasharray="4 4" />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>
