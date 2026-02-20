<template>
  <section id="trust" class="py-20 px-6 bg-white border-y border-primary/5">
    <div class="max-w-5xl mx-auto">
      <div class="text-center mb-14 reveal">
        <p class="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Kredibilitas</p>
        <h2 class="text-3xl md:text-4xl font-bold text-text tracking-tight">
          Disusun dari pengalaman nyata,<br class="hidden md:block" /> bukan sekadar teori
        </h2>
      </div>

      <!-- 2 kolom: info penulis (kiri) + card kredibilitas (kanan) -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <!-- Kiri: Informasi penulis + social media -->
        <div class="reveal reveal-delay-1 p-6 rounded-2xl border border-primary/10 bg-background/50 lg:sticky lg:top-24">
          <div class="flex flex-col sm:flex-row lg:flex-col items-center sm:items-start gap-6">
            <img
              src="/author.jpeg"
              alt="Foto penulis"
              width="120"
              height="120"
              class="w-30 h-30 sm:w-32 sm:h-32 rounded-full object-cover ring-2 ring-primary/20 flex-shrink-0"
            />
            <div class="text-center sm:text-left lg:text-center">
              <p class="text-xs font-semibold text-primary uppercase tracking-widest mb-1">Penulis</p>
              <h3 class="text-lg font-bold text-text mb-2">Nama Penulis</h3>
              <p class="text-sm text-text/80 leading-relaxed mb-5">
                Praktisi yang sehari-hari membangun aplikasi dengan AI Coding Agent. Panduan ini disusun dari pengalaman nyata di lapangan, bukan sekadar teori.
              </p>
              <!-- Link social media -->
              <div class="flex flex-wrap justify-center sm:justify-start lg:justify-center gap-3">
                <a
                  v-for="social in authorSocials"
                  :key="social.label"
                  :href="social.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  :aria-label="social.label"
                  class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-text/70 hover:bg-primary hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path :d="social.iconPath" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Kanan: Card kredibilitas -->
        <div class="grid grid-cols-1 gap-4">
          <div
            v-for="(point, index) in trustPoints"
            :key="index"
            class="reveal flex gap-4 items-start p-5 rounded-xl border border-primary/10 hover:border-primary/20 transition-colors"
            :class="`reveal-delay-${index + 1}`"
          >
            <div class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" :d="point.icon" />
              </svg>
            </div>
            <p class="text-sm text-text/80 leading-relaxed">{{ point.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Ganti url dengan link profil kamu
const authorSocials = [
  { label: 'Twitter / X', url: 'https://twitter.com/', iconPath: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/', iconPath: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { label: 'GitHub', url: 'https://github.com/', iconPath: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.01 1.23.873-.243 1.81-.364 2.747-.364.937 0 1.873.124 2.747.364 2.002-1.552 3.007-1.23 3.007-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.22 0 4.61-2.805 5.625-5.466 5.92.43.372.823 1.102.823 2.222v3.293c0 .319.217.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' },
  { label: 'Instagram', url: 'https://instagram.com/', iconPath: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C8.333.014 7.924 0 7.581 0H12zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' }
]

const trustPoints = [
  {
    text: 'Ditulis oleh praktisi yang sehari-hari bekerja dengan AI Coding Agent',
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
  },
  {
    text: 'Berdasarkan pengalaman membangun aplikasi real — bukan proyek tutorial',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    text: 'Pendekatan yang mengikuti SDLC yang diadaptasi untuk era AI',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
  },
  {
    text: 'Tidak menjual hype — fokus pada strategi yang teruji dan realistis',
    icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
  }
]
</script>
