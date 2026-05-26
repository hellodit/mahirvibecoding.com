<template>
  <footer class="border-t border-white/10 bg-primary px-6 py-12">
    <div class="mx-auto max-w-5xl">
      <div class="grid grid-cols-2 gap-8 md:grid-cols-4">
        <div class="col-span-2 md:col-span-1">
          <span class="text-base font-bold text-white">MahirVibeCoding</span>
          <p class="mt-3 text-xs leading-6 text-white/70">
            Strategi Vibe Coding untuk membangun aplikasi fullstack bersama AI Coding Agent.
          </p>
        </div>

        <div>
          <p class="text-xs font-semibold uppercase tracking-widest text-white/80">Belajar</p>
          <ul class="mt-3 space-y-2">
            <li>
              <NuxtLink to="/articles/" class="text-xs text-white/70 transition-colors hover:text-white">
                Artikel
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/studycase/" class="text-xs text-white/70 transition-colors hover:text-white">
                Study Case
              </NuxtLink>
            </li>
            <li>
              <a href="/feed.xml" class="text-xs text-white/70 transition-colors hover:text-white">
                RSS Feed
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p class="text-xs font-semibold uppercase tracking-widest text-white/80">Produk</p>
          <ul class="mt-3 space-y-2">
            <li>
              <NuxtLink to="/#pricing" class="text-xs text-white/70 transition-colors hover:text-white">
                Pricing
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#faq" class="text-xs text-white/70 transition-colors hover:text-white">
                FAQ
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#curriculum" class="text-xs text-white/70 transition-colors hover:text-white">
                Kurikulum
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div>
          <p class="text-xs font-semibold uppercase tracking-widest text-white/80">Legal</p>
          <ul class="mt-3 space-y-2">
            <li>
              <NuxtLink to="/terms" class="text-xs text-white/70 transition-colors hover:text-white">
                Syarat &amp; Ketentuan
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/privacy" class="text-xs text-white/70 transition-colors hover:text-white">
                Kebijakan Privasi
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/60">
        &copy; {{ new Date().getFullYear() }} MahirVibeCoding. All rights reserved.
      </div>
    </div>
  </footer>
</template>
