<template>
  <section id="hero" class="relative bg-white overflow-hidden mx-auto">
    <div class="relative z-10 max-w-5xl mx-auto px-6 pt-16 pb-20 md:pt-20 md:pb-28">

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <!-- Left: Text -->
        <div class="lg:col-span-7">
          <!-- Badge -->
          <div class="flex items-center gap-2 mb-4">
            <span class="inline-flex items-center px-3 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wider">
              Framework Vibe Coding
            </span>
          </div>

          <h1 class="text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold text-text leading-[1.1] tracking-tight mb-6">
            Cara baru bikin aplikasi dengan <span class="text-primary">Vibe coding</span>
          </h1>

          <p class="text-base md:text-lg text-text max-w-xl mb-10 leading-relaxed">
            Upgrade cara vibe coding kamu dengan framework lengkap untuk membangun aplikasi fullstack bersama AI Coding Agent
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-wrap items-center gap-4 mb-10">
            <a href="#pricing"
              class="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white bg-primary rounded-full hover:bg-gray-800 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 duration-300">
              Dapatkan Panduan
            </a>
            <a href="#curriculum"
              class="group inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-primary border border-primary rounded-full hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
              Preview
              <span class="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </span>
            </a>
          </div>

          <!-- Social Proof -->
          <div class="flex items-center gap-4">
            <div class="flex -space-x-2.5">
              <div class="w-9 h-9 rounded-full bg-primary border-2 border-white flex items-center justify-center text-xs font-bold text-white">A</div>
              <div class="w-9 h-9 rounded-full bg-primary border-2 border-white flex items-center justify-center text-xs font-bold text-white">B</div>
              <div class="w-9 h-9 rounded-full bg-primary border-2 border-white flex items-center justify-center text-xs font-bold text-white">C</div>
            </div>
            <div>
              <p class="text-xs text-text">Bergabung dengan mereka yang sudah sukses menggunakan framework ini.</p>
            </div>
          </div>
        </div>

        <!-- Right: UI Mockup Cards -->
        <div class="hidden lg:block lg:col-span-5 relative z-10">
           <img src="/hero-illustration.svg" alt="Vibe Coding Workflow: Planning to Deployment" class="w-full h-auto mx-auto hover:scale-[1.02] transition-transform duration-500" />
        </div>
      </div>

    </div>
  </section>
</template>
