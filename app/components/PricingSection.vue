<template>
  <section id="pricing" class="py-24 px-6 bg-background">
    <div class="max-w-5xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12 reveal">
        <p class="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Pricing</p>
        <h2 class="text-3xl md:text-4xl font-bold text-text tracking-tight mb-3">
          Investasi untuk <span class="text-primary">skill masa depan</span>
        </h2>
        <p class="text-base text-text/70 max-w-xl mx-auto">
          Sekali beli, akses selamanya. Pilih paket yang sesuai dengan kebutuhanmu.
        </p>
      </div>

      <!-- Pricing cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
        <div
          v-for="(plan, index) in plans"
          :key="plan.id"
          class="reveal rounded-2xl bg-white border border-primary/10 overflow-hidden flex flex-col transition-colors hover:border-primary/20"
          :class="[`reveal-delay-${index + 1}`, plan.featured && 'ring-2 ring-primary']"
        >
          <!-- Plan badge -->
          <div class="p-5 pb-0">
            <span
              class="inline-block px-3 py-1 rounded-full text-xs font-semibold"
              :class="plan.badgeClass"
            >
              {{ plan.badge }}
            </span>
          </div>

          <!-- Card content -->
          <div class="p-5 flex-1 flex flex-col">
            <h3 class="text-lg font-bold text-text mb-1">{{ plan.name }}</h3>
            <p v-if="plan.subtitle" class="text-sm text-text/70 mb-4">{{ plan.subtitle }}</p>

            <!-- Price -->
            <div class="mb-5">
              <span v-if="plan.originalPrice" class="text-sm text-text/60 line-through mr-2">
                Rp {{ plan.originalPrice }}
              </span>
              <span class="text-2xl font-bold text-primary">Rp {{ plan.price }}</span>
              <p v-if="plan.discountNote" class="text-xs text-text/60 mt-1">{{ plan.discountNote }}</p>
            </div>

            <!-- Benefits -->
            <ul class="space-y-2.5 flex-1 mb-6">
              <li
                v-for="(benefit, i) in plan.benefits"
                :key="i"
                class="flex items-start gap-2 text-sm text-text/80"
              >
                <span class="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {{ benefit }}
              </li>
            </ul>

            <!-- CTA -->
            <a
              :href="plan.ctaUrl"
              class="block w-full py-3.5 text-center text-sm font-bold text-white bg-primary rounded-xl hover:opacity-90 transition-colors"
            >
              {{ plan.ctaText }}
            </a>
          </div>
        </div>
      </div>

      <!-- Footer trust row -->
      <div class="reveal flex flex-wrap justify-center gap-8 md:gap-12">
        <div class="flex items-center gap-3 text-text/80">
          <div class="w-10 h-10 rounded-xl bg-white border border-primary/10 flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <span class="text-sm">Garansi 7 Hari — Tidak puas? Uang kembali 100%</span>
        </div>
        <div class="flex items-center gap-3 text-text/80">
          <div class="w-10 h-10 rounded-xl bg-white border border-primary/10 flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <span class="text-sm">Pembayaran Aman — Via GoAkal, trusted payment</span>
        </div>
        <div class="flex items-center gap-3 text-text/80">
          <div class="w-10 h-10 rounded-xl bg-white border border-primary/10 flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span class="text-sm">Akses Instan — Langsung download setelah bayar</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const plans = [
  {
    id: 'lite',
    name: 'Lite',
    badge: 'Ebook Only',
    badgeClass: 'bg-primary/10 text-text',
    subtitle: 'Belajar mandiri',
    originalPrice: '99.000',
    price: '89.000',
    discountNote: 'dengan kode SPECIAL40 (40% OFF)',
    benefits: [
      'Akses ke Ebook'
    ],
    ctaText: 'Beli Sekarang',
    ctaUrl: '#',
    featured: false
  },
  {
    id: 'pro',
    name: 'Pro',
    badge: 'Pro',
    badgeClass: 'bg-primary/10 text-primary',
    subtitle: null,
    originalPrice: '199.000',
    price: '119.400',
    discountNote: 'dengan kode SPECIAL40 (40% OFF)',
    benefits: [
      'Akses ke Ebook',
      'Lifetime Update Ebook',
      'Bonus 4 Studi Kasus Step-by-Step',
      '1 Template di JualanKoding.com (senilai ±100rb)',
      'Akses Belajar 1 Bulan BelajarKoding.com (senilai 99rb)',
      'Akses Selamanya Group Discord'
    ],
    ctaText: 'Beli Sekarang',
    ctaUrl: '#',
    featured: true
  },
  {
    id: 'ultimate',
    name: 'Ultimate',
    badge: 'Ebook + Bootcamp',
    badgeClass: 'bg-primary/10 text-primary',
    subtitle: '4 SESI LIVE — Bimbingan langsung dari mentor',
    originalPrice: '799.000',
    price: '479.400',
    discountNote: 'dengan kode SPECIAL40 (40% OFF)',
    benefits: [
      'Bootcamp Vibe Coding (4 sesi)',
      'Free Akses Model Z.AI GLM Selama 1 Bulan',
      'Link Promo Subscribe Claude Pro',
      'Akses ke Ebook',
      'Lifetime Update Ebook',
      'Bonus 4 Studi Kasus Step-by-Step',
      '15 Template di JualanKoding.com (senilai ±1jt)',
      'Akses Belajar 12 Bulan BelajarKoding.com',
      'Akses Selamanya Group Discord',
      'Konsultasi 1-1 selama 30 menit (2x)'
    ],
    ctaText: 'Beli Sekarang',
    ctaUrl: '#',
    featured: false
  }
]
</script>
