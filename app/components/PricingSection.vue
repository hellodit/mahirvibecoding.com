<template>
  <section id="pricing" class="py-24 px-6 bg-primary">
    <div class="max-w-6xl mx-auto">
      <!-- Hero -->
      <div class="text-center mb-8 reveal">
        <p class="text-xs font-semibold text-white/80 uppercase tracking-widest mb-3">Harga</p>
        <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight mb-4">
          Pilih paket yang <span class="text-background">cocok buat kamu</span>
        </h2>
        <p class="text-sm md:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
          Sekali bayar, akses selamanya. Tanpa langganan, tanpa biaya tersembunyi.
        </p>
      </div>

   

      <!-- Pricing cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div
          v-for="(plan, index) in planBase"
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
                Paling Populer
              </span>
            </div>
            <p v-if="plan.subtitle" class="text-sm text-white/60 mb-5">{{ plan.subtitle }}</p>

            <div class="mb-4">
              <span class="text-2xl md:text-3xl font-bold text-white mr-2">
                Rp {{ plan.price }}
              </span>
              <span class="text-sm text-white/50 line-through ">Rp {{ plan.originalPrice }}</span>
            </div>

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
                  <IconCheck class="w-3.5 h-3.5 text-white" :stroke-width="2.5" />
                </span>
                <span>{{ benefitText(benefit) }}</span>
              </li>
            </ul>

            <div class="mt-6 pt-5 border-t border-white/10">
              <a
                v-if="plan.checkoutUrl"
                :href="plan.checkoutUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="block w-full py-3.5 bg-white text-primary text-sm font-bold rounded-xl hover:opacity-90 transition-colors text-center cursor-pointer"
              >
                Daftar Sekarang
              </a>
              <button
                v-else
                type="button"
                disabled
                class="w-full py-3.5 bg-white/50 text-primary/60 text-sm font-bold rounded-xl cursor-not-allowed"
                title="URL checkout belum dikonfigurasi"
              >
                Daftar Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
function isHeading(benefit: string | { isHeading?: boolean; text?: string }) {
  return typeof benefit === 'object' && benefit?.isHeading
}
function benefitText(benefit: string | { text?: string }) {
  return typeof benefit === 'string' ? benefit : (benefit?.text ?? '')
}

const planBase = [
  {
    id: 'lite',
    name: 'Lite',
    popular: false,
    featured: false,
    subtitle: 'Mulai belajar vibe coding dari nol.',
    originalPrice: '142.000',
    price: '99.000',
    checkoutUrl: 'https://akses.codingtengahmalam.com/c/checkout?variant_ids=471653',
    benefits: [
      'Ebook "Mahir Vibe Coding"',
      'Lifetime access',
      'Lifetime update — materi terus diperbarui',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    popular: true,
    featured: true,
    subtitle: 'Belajar + langsung praktik dari source code nyata.',
    originalPrice: '215.000',
    price: '150.000',
    checkoutUrl: 'https://akses.codingtengahmalam.com/c/checkout?variant_ids=471654',
    benefits: [
      { text: 'Semua di paket Lite, plus:', isHeading: true },
      'Source code 1 studi kasus lengkap + 2 studi kasus mendatang (coming soon)',
      'Voucher diskon 40% untuk ebook "Laravel Pro!"',
      'Akses grup eksklusif — diskusi & networking bareng sesama learner',
    ],
  },
  {
    id: 'ultimate',
    name: 'Ultimate',
    popular: false,
    featured: false,
    subtitle: 'Mau serius? Langsung dibimbing.',
    originalPrice: '429.000',
    price: '300.000',
    checkoutUrl: 'https://akses.codingtengahmalam.com/c/checkout?variant_ids=471655',
    benefits: [
      { text: 'Semua di paket Pro, plus:', isHeading: true },
      '2x sesi konsultasi 1-on-1 (masing-masing 30 menit) — tanya apa aja seputar vibe coding, Laravel, karier dev, atau project kamu',
    ],
  },
]
</script>
