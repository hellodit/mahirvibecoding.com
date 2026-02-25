<template>
  <Transition name="popup">
    <div
      v-if="isVisible"
      class="fixed bottom-0 left-0 right-0 z-[70] px-4 pb-4 md:px-6 md:pb-6"
      role="dialog"
      aria-labelledby="popup-title"
      aria-modal="true"
    >
      <div class="max-w-3xl mx-auto rounded-t-2xl shadow-2xl overflow-hidden bg-[#0f2d18] border border-white/10 border-b-0 relative">
        <div class="absolute right-8 top-1/2 -translate-y-1/2 hidden md:block text-white/40" aria-hidden="true">
          <svg class="w-12 h-12" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
            <path d="M40 24H8M8 24L24 8M8 24L24 40" />
          </svg>
        </div>

        <div class="p-6 md:p-8">
          <button
            @click="dismiss"
            class="absolute right-4 top-4 p-1.5 text-white/60 hover:text-white rounded-lg transition-colors"
            aria-label="Tutup"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- Success state -->
          <div v-if="submitted" class="text-center py-4">
            <div class="w-14 h-14 rounded-full bg-primary/30 flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 class="text-xl font-bold text-white mb-2">Terima kasih!</h2>
            <p class="text-sm text-white/70">Kami akan mengirimkan bab gratis ke email kamu.</p>
          </div>

          <!-- Form state -->
          <template v-else>
            <div class="text-center mb-6">
              <h2 id="popup-title" class="text-xl md:text-2xl font-bold text-white flex items-center justify-center gap-2">
                <span class="text-white/90" aria-hidden="true">
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7-6.3-4.6-6.3 4.6 2.3-7-6-4.6h7.6z"/></svg>
                </span>
                {{ title }}
              </h2>
              <p class="text-sm md:text-base text-white/70 mt-2 max-w-md mx-auto">
                {{ subtitle }}
              </p>
            </div>

            <form @submit.prevent="onSubmit" class="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                v-model="email"
                type="email"
                :placeholder="emailPlaceholder"
                required
                :disabled="submitting"
                class="flex-1 min-w-0 px-4 py-3.5 rounded-xl bg-white/5 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50"
              />
              <button
                type="submit"
                :disabled="submitting"
                class="px-6 py-3.5 rounded-xl bg-primary text-white text-sm font-bold whitespace-nowrap hover:opacity-90 transition-opacity shrink-0 disabled:opacity-50"
              >
                {{ submitting ? 'Mengirim...' : ctaText }}
              </button>
            </form>
            <p v-if="error" class="text-xs text-red-400 text-center mt-3">{{ error }}</p>
          </template>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  delayMs: { type: Number, default: 5000 },
  rememberDismiss: { type: Boolean, default: true },
  storageKey: { type: String, default: 'lead-popup-dismissed' },
  title: { type: String, default: 'Claim Bab Gratis' },
  subtitle: { type: String, default: 'Lihat isi panduan dengan bab contoh gratis!' },
  emailPlaceholder: { type: String, default: 'Alamat email...' },
  ctaText: { type: String, default: 'Saya mau!' }
})

const emit = defineEmits(['dismissed', 'submit'])

const isVisible = ref(false)
const email = ref('')
const submitting = ref(false)
const submitted = ref(false)
const error = ref('')

let timeoutId: ReturnType<typeof setTimeout> | null = null

function shouldShow() {
  if (!props.rememberDismiss) return true
  if (typeof localStorage === 'undefined') return true
  try {
    return !localStorage.getItem(props.storageKey)
  } catch {
    return true
  }
}

function dismiss() {
  isVisible.value = false
  if (props.rememberDismiss && typeof localStorage !== 'undefined') {
    try {
      localStorage.setItem(props.storageKey, Date.now().toString())
    } catch {}
  }
  emit('dismissed')
}

async function onSubmit() {
  error.value = ''
  submitting.value = true

  emit('submit', { email: email.value })

  try {
    await $fetch('/api/leads', {
      method: 'POST',
      body: { email: email.value },
    })
    submitted.value = true
    setTimeout(dismiss, 3000)
  } catch (e: any) {
    error.value = 'Gagal mengirim. Silakan coba lagi.'
  } finally {
    submitting.value = false
  }
}

onMounted(() => {
  if (!shouldShow()) return
  timeoutId = setTimeout(() => {
    isVisible.value = true
  }, props.delayMs)
})

onBeforeUnmount(() => {
  if (timeoutId) clearTimeout(timeoutId)
})
</script>

<style scoped>
.popup-enter-active,
.popup-leave-active {
  transition: transform 0.4s cubic-bezier(0.32, 0.72, 0, 1);
}
.popup-enter-from {
  transform: translateY(100%);
}
.popup-leave-to {
  transform: translateY(100%);
}
</style>
