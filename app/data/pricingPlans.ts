export type PricingBenefit = string | { text?: string; isHeading?: boolean }

export type PricingPlan = {
  id: string
  name: string
  popular: boolean
  featured: boolean
  subtitle: string
  originalPrice: string
  price: string
  checkoutUrl: string
  benefits: PricingBenefit[]
  /** Label produk untuk notifikasi social proof (sinkron dengan isi paket). */
  socialProofProductLabel: string
}

export const planBase: PricingPlan[] = [
  {
    id: 'lite',
    name: 'Lite',
    popular: false,
    featured: false,
    subtitle: 'Mulai belajar vibe coding dari nol.',
    originalPrice: '142.000',
    price: '99.000',
    checkoutUrl: 'https://akses.codingtengahmalam.com/c/checkout?variant_ids=471653',
    socialProofProductLabel: 'Paket Lite (ebook)',
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
    socialProofProductLabel: 'Paket Pro (ebook + source code)',
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
    socialProofProductLabel: 'Paket Ultimate (ebook + source code + konsultasi)',
    benefits: [
      { text: 'Semua di paket Pro, plus:', isHeading: true },
      '2x sesi konsultasi 1-on-1 (masing-masing 30 menit) — tanya apa aja seputar vibe coding, Laravel, karier dev, atau project kamu',
    ],
  },
]
