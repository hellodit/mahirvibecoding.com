<template>
  <section id="hero" class="relative min-h-screen bg-gray-50 overflow-hidden">
    <!-- Premium Background Pattern -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Grid -->
      <div class="absolute inset-0 opacity-[0.3] dark:opacity-[0.1]" 
           style="background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px); background-size: 32px 32px; mask-image: linear-gradient(to bottom, black 40%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, black 40%, transparent 100%);">
      </div>
      
      <!-- Warm Glow (Top Center) -->
      <div class="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-clockwork-400/10 blur-[100px] rounded-full mix-blend-multiply opacity-60"></div>
      
      <!-- Cool Glow (Bottom Right) -->
      <div class="absolute bottom-[-100px] right-[-100px] w-[600px] h-[600px] bg-gray-200/40 blur-[80px] rounded-full opacity-50"></div>
    </div>

    <div class="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- Left: Text -->
        <div>
          <p class="text-xs font-semibold text-clockwork-400 uppercase tracking-[0.2em] mb-6">Framework Vibe Coding</p>

          <h1 class="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6">
            Kuasai <span class="text-clockwork-400">Vibe Coding</span>, bangun aplikasi fullstack dengan AI
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
        <div class="hidden lg:block relative z-10">
           <img src="/hero-illustration.svg" alt="Vibe Coding Workflow: Planning to Deployment" class="w-full max-w-[650px] mx-auto hover:scale-[1.02] transition-transform duration-500" />
        </div>
      </div>
    </div>
  </section>
</template>
