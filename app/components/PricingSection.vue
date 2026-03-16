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
              <span class="text-2xl md:text-3xl font-bold text-white">
                COMING SOON
              </span>
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

      <!-- Single Waiting List CTA -->
      <div class="text-center mb-10 reveal">
        <button
          type="button"
          class="inline-flex items-center justify-center gap-2 px-10 py-4 bg-background text-primary text-base font-bold rounded-full hover:bg-background/90 transition-colors cursor-pointer shadow-lg shadow-black/20"
          @click="openWaitlistModal()"
        >
          Daftar Waiting List
          <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>
        <div class="flex flex-wrap items-center justify-center gap-6 mt-6">
          <div v-for="item in trustIndicators" :key="item" class="flex items-center gap-2 text-white/60">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-sm">{{ item }}</span>
          </div>
        </div>
      </div>

    </div>

    <!-- Waitlist Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="showModal"
          class="fixed inset-0 z-[100] flex items-center justify-center p-4"
          @click.self="closeModal"
        >
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <!-- Modal Content -->
          <div class="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden">
            <!-- Success State -->
            <div v-if="submitSuccess" class="p-8 text-center">
              <div class="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 class="text-xl font-bold text-text mb-2">Berhasil Terdaftar!</h3>
              <p class="text-sm text-text/70 mb-6 leading-relaxed">
                Kamu sudah masuk waiting list.
                Kami akan menghubungi kamu saat launching.
              </p>
              <button
                type="button"
                class="px-6 py-3 bg-primary text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-colors cursor-pointer"
                @click="closeModal"
              >
                Tutup
              </button>
            </div>

            <!-- Form State -->
            <div v-else>
              <div class="p-8">
                <!-- Header -->
                <div class="flex items-start justify-between mb-6">
                  <div>
                    <p class="text-xs font-semibold text-primary uppercase tracking-widest mb-1">Waiting List</p>
                    <h3 class="text-xl font-bold text-text">Daftar Waiting List</h3>
                  </div>
                  <button
                    type="button"
                    class="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-text/40 hover:text-text/70 hover:bg-primary/10 transition-colors cursor-pointer"
                    @click="closeModal"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <p class="text-sm text-text/60 mb-6 leading-relaxed">
                  Isi data kamu di bawah ini. Kami akan menghubungi kamu saat panduan ini resmi diluncurkan.
                </p>

                <!-- Form -->
                <form @submit.prevent="submitWaitlist" class="space-y-4">
                  <div>
                    <label for="wl-name" class="block text-sm font-medium text-text mb-1.5">Nama</label>
                    <input
                      id="wl-name"
                      v-model="form.name"
                      type="text"
                      placeholder="Nama lengkap"
                      required
                      class="w-full px-4 py-3 rounded-xl border border-primary/15 bg-primary/[0.02] text-sm text-text placeholder:text-text/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-colors"
                    />
                  </div>

                  <div>
                    <label for="wl-email" class="block text-sm font-medium text-text mb-1.5">Email</label>
                    <input
                      id="wl-email"
                      v-model="form.email"
                      type="email"
                      placeholder="email@example.com"
                      required
                      class="w-full px-4 py-3 rounded-xl border border-primary/15 bg-primary/[0.02] text-sm text-text placeholder:text-text/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-colors"
                    />
                  </div>

                  <div>
                    <label for="wl-phone" class="block text-sm font-medium text-text mb-1.5">Nomor Telepon</label>
                    <input
                      id="wl-phone"
                      v-model="form.phone"
                      type="tel"
                      placeholder="08xxxxxxxxxx"
                      required
                      class="w-full px-4 py-3 rounded-xl border border-primary/15 bg-primary/[0.02] text-sm text-text placeholder:text-text/40 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-colors"
                    />
                  </div>

                  <p v-if="submitError" class="text-sm text-red-500 font-medium">{{ submitError }}</p>

                  <button
                    type="submit"
                    :disabled="submitting"
                    class="w-full py-3.5 bg-primary text-white text-sm font-bold rounded-xl hover:opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <span v-if="submitting">Mendaftarkan...</span>
                    <span v-else>Daftar Waiting List</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'

const trustIndicators = [
  'Gratis, tanpa kartu kredit',
  'Tanpa komitmen',
  'Dapat notifikasi + harga spesial saat launch',
]

function isHeading(benefit: string | { isHeading?: boolean; text?: string }) {
  return typeof benefit === 'object' && benefit?.isHeading
}
function benefitText(benefit: string | { text?: string }) {
  return typeof benefit === 'string' ? benefit : (benefit?.text ?? '')
}


const plans = [
  {
    id: 'lite',
    name: 'Lite',
    popular: false,
    featured: false,
    subtitle: 'Belajar mandiri dengan ebook',
    originalPrice: '99.000',
    price: '89.000',
    discountNote: 'dengan kode SPECIAL40 (40% OFF)',
    benefits: [
      'Akses ke Ebook'
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    popular: true,
    featured: true,
    subtitle: 'Ebook + bonus & akses komunitas',
    originalPrice: '199.000',
    price: '119.400',
    discountNote: 'dengan kode SPECIAL40 (40% OFF)',
    benefits: [
      { text: 'Semua di Lite, plus:', isHeading: true },
      'Lifetime Update Ebook',
      'Bonus 4 Studi Kasus Step-by-Step',
      '1 Template di JualanKoding.com (senilai ±100rb)',
      'Akses Belajar 1 Bulan BelajarKoding.com (senilai 99rb)',
      'Akses Selamanya Group Discord'
    ],
  },
  {
    id: 'ultimate',
    name: 'Ultimate',
    popular: false,
    featured: false,
    subtitle: 'Ebook + Bootcamp 4 sesi live',
    originalPrice: '799.000',
    price: '479.400',
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
  }
]

// Waitlist modal state
const showModal = ref(false)
const submitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref('')

const form = reactive({
  name: '',
  email: '',
  phone: '',
})

function openWaitlistModal() {
  submitSuccess.value = false
  submitError.value = ''
  form.name = ''
  form.email = ''
  form.phone = ''
  showModal.value = true
  document.body.style.overflow = 'hidden'
}

function closeModal() {
  showModal.value = false
  document.body.style.overflow = ''
}

async function submitWaitlist() {
  submitError.value = ''
  submitting.value = true

  try {
    await $fetch('/api/waitlist', {
      method: 'POST',
      body: {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
      },
    })
    submitSuccess.value = true
  } catch (e: any) {
    submitError.value = e?.data?.statusMessage || 'Terjadi kesalahan. Silakan coba lagi.'
  } finally {
    submitting.value = false
  }
}

// Close modal on Escape key
if (import.meta.client) {
  watch(showModal, (val) => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    if (val) {
      window.addEventListener('keydown', handler)
    } else {
      window.removeEventListener('keydown', handler)
    }
  })
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}
.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.25s ease, opacity 0.25s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .relative {
  transform: translateY(16px);
  opacity: 0;
}
.modal-leave-to .relative {
  transform: translateY(8px);
  opacity: 0;
}
</style>
