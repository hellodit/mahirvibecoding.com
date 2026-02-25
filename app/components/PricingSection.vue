<template>
  <section id="pricing" class="py-24 px-6 bg-primary">
    <div class="max-w-6xl mx-auto">
      <!-- Hero -->
      <div class="text-center mb-8 reveal">
        <p class="text-xs font-semibold text-white/80 uppercase tracking-widest mb-3">Pricing</p>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
          Investasi untuk <span class="text-background">skill masa depan</span>
        </h2>
        <p class="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
          Sekali beli, akses selamanya. Pilih paket yang sesuai dengan kebutuhanmu.
        </p>
      </div>

      <!-- Countdown Timer -->
      <div class="text-center mb-14 reveal reveal-delay-1">
        <p class="text-sm text-white/70 mb-3">Harga peluncuran berakhir dalam:</p>
        <CountdownTimer :target-date="countdownTarget" :dark="true" />
      </div>

      <!-- Pricing cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div
          v-for="(plan, index) in plans"
          :key="plan.id"
          class="reveal rounded-2xl overflow-hidden flex flex-col transition-all duration-300 bg-white/[0.08] border border-white/10 backdrop-blur-sm"
          :class="[
            `reveal-delay-${index + 1}`,
            plan.featured && 'ring-2 ring-white/40 shadow-xl shadow-black/20 scale-[1.02] md:scale-[1.03]'
          ]"
        >
          <div class="p-6 md:p-8 flex-1 flex flex-col">
            <div class="flex items-center gap-2 mb-1">
              <h3 class="text-xl font-bold text-white">{{ plan.name }}</h3>
              <span
                v-if="plan.popular"
                class="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide bg-background text-primary"
              >
                Popular
              </span>
            </div>
            <p v-if="plan.subtitle" class="text-sm text-white/60 mb-5">{{ plan.subtitle }}</p>

            <div class="mb-6">
              <template v-if="plan.priceCustom">
                <span class="text-2xl md:text-3xl font-bold text-white">Custom</span>
              </template>
              <template v-else>
                <span v-if="plan.originalPrice" class="text-sm text-white/50 line-through mr-2">Rp {{ plan.originalPrice }}</span>
                <span class="text-2xl md:text-3xl font-bold text-white">Rp {{ plan.price }}</span>
                <span class="text-sm text-white/50">/ sekali bayar</span>
              </template>
              <p v-if="plan.discountNote" class="text-xs text-white/60 mt-1">{{ plan.discountNote }}</p>
            </div>

            <a
              :href="plan.ctaUrl"
              class="block w-full py-3.5 text-center text-sm font-bold rounded-xl transition-all mb-8"
              :class="plan.featured
                ? 'bg-background text-primary hover:bg-background/90'
                : 'bg-white/10 text-white border border-white/20 hover:bg-white/15'"
            >
              {{ plan.ctaText }}
            </a>

            <ul class="space-y-3 flex-1">
              <li
                v-for="(benefit, i) in plan.benefits"
                :key="i"
                class="flex items-start gap-2.5 text-sm"
                :class="isHeading(benefit) ? 'text-white/90 font-semibold' : 'text-white/80'"
              >
                <span
                  v-if="!isHeading(benefit)"
                  class="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-primary/50 flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span>{{ benefitText(benefit) }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Guarantee Badge -->
      <div class="max-w-md mx-auto mb-10 reveal">
        <GuaranteeBadge />
      </div>

      <!-- Payment Methods -->
      <div class="text-center mb-16 reveal">
        <p class="text-xs text-white/50 uppercase tracking-widest mb-4">Metode Pembayaran</p>
        <div class="flex flex-wrap items-center justify-center gap-4">
          <div
            v-for="method in paymentMethods"
            :key="method"
            class="px-4 py-2 rounded-lg bg-white/10 border border-white/10 text-sm font-medium text-white/70"
          >
            {{ method }}
          </div>
        </div>
      </div>

      <!-- Testimonial -->
      <div class="reveal text-center max-w-3xl mx-auto">
        <div class="flex justify-center mb-6">
          <div class="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white text-xl font-bold border-2 border-white/30">
            A
          </div>
        </div>
        <blockquote class="text-lg md:text-xl text-white/90 leading-relaxed mb-4">
          "Worth it. Saya pakai pendekatan dari sini di tim dan workflow jadi lebih rapi."
        </blockquote>
        <cite class="text-sm text-white/70 not-italic font-semibold">Andi — Tech Lead</cite>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const countdownTarget = (() => {
  const d = new Date()
  d.setDate(d.getDate() + 7)
  d.setHours(23, 59, 59, 0)
  return d.toISOString()
})()

function isHeading(benefit: string | { isHeading?: boolean; text?: string }) {
  return typeof benefit === 'object' && benefit?.isHeading
}
function benefitText(benefit: string | { text?: string }) {
  return typeof benefit === 'string' ? benefit : (benefit?.text ?? '')
}

const paymentMethods = ['BCA', 'Mandiri', 'BRI', 'BNI', 'GoPay', 'OVO', 'DANA', 'QRIS']

const plans = [
  {
    id: 'lite',
    name: 'Lite',
    popular: false,
    featured: false,
    subtitle: 'Belajar mandiri dengan ebook',
    originalPrice: '99.000',
    price: '89.000',
    priceCustom: false,
    discountNote: 'dengan kode SPECIAL40 (40% OFF)',
    benefits: [
      'Akses ke Ebook'
    ],
    ctaText: 'Beli Sekarang',
    ctaUrl: '#'
  },
  {
    id: 'pro',
    name: 'Pro',
    popular: true,
    featured: true,
    subtitle: 'Ebook + bonus & akses komunitas',
    originalPrice: '199.000',
    price: '119.400',
    priceCustom: false,
    discountNote: 'dengan kode SPECIAL40 (40% OFF)',
    benefits: [
      { text: 'Semua di Lite, plus:', isHeading: true },
      'Lifetime Update Ebook',
      'Bonus 4 Studi Kasus Step-by-Step',
      '1 Template di JualanKoding.com (senilai ±100rb)',
      'Akses Belajar 1 Bulan BelajarKoding.com (senilai 99rb)',
      'Akses Selamanya Group Discord'
    ],
    ctaText: 'Beli Sekarang',
    ctaUrl: '#'
  },
  {
    id: 'ultimate',
    name: 'Ultimate',
    popular: false,
    featured: false,
    subtitle: 'Ebook + Bootcamp 4 sesi live',
    originalPrice: '799.000',
    price: '479.400',
    priceCustom: false,
    discountNote: 'dengan kode SPECIAL40 (40% OFF)',
    benefits: [
      { text: 'Semua di Pro, plus:', isHeading: true },
      'Bootcamp Vibe Coding (4 sesi)',
      'Free Akses Model Z.AI GLM Selama 1 Bulan',
      'Link Promo Subscribe Claude Pro',
      '15 Template di JualanKoding.com (senilai ±1jt)',
      'Akses Belajar 12 Bulan BelajarKoding.com',
      'Konsultasi 1-1 selama 30 menit (2x)'
    ],
    ctaText: 'Beli Sekarang',
    ctaUrl: '#'
  }
]
</script>
