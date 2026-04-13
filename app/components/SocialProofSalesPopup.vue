<template>
  <div
    v-if="sessionActive"
    class="pointer-events-none fixed inset-x-3 bottom-[max(0.75rem,env(safe-area-inset-bottom,0px))] z-[45] mx-auto w-full max-w-sm sm:inset-x-auto sm:bottom-[max(1.5rem,env(safe-area-inset-bottom,0px))] sm:left-auto sm:right-4 sm:mx-0 sm:w-auto"
  >
    <Transition name="toast" @after-leave="onAfterLeave">
      <div
        v-if="showContent && toast"
        class="pointer-events-auto relative w-full overflow-hidden rounded-2xl bg-primary p-3.5 pr-12 pt-3.5 backdrop-blur-sm outline outline-2 outline-offset-0 outline-white/25 sm:p-4 sm:pr-11"
        role="status"
        aria-live="polite"
      >
        <button
          type="button"
          class="absolute right-1 top-1 z-10 flex min-h-11 min-w-11 touch-manipulation items-center justify-center rounded-lg text-white/45 transition-colors hover:bg-white/10 hover:text-white active:bg-white/15 sm:right-2 sm:top-2 sm:min-h-0 sm:min-w-0 sm:p-1.5"
          aria-label="Tutup notifikasi"
          @click="dismissForToday"
        >
          <IconClose class="h-5 w-5 sm:h-4 sm:w-4" />
        </button>

        <div class="relative min-w-0 pt-0.5">
          <div class="mb-1.5 flex flex-wrap items-center gap-2">
            <span
              class="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/85 outline outline-1 outline-offset-0 outline-white/25"
            >
              <span class="relative flex h-1.5 w-1.5">
                <span
                  class="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70 opacity-75"
                />
                <span class="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Baru
            </span>
          </div>
          <p class="text-sm leading-snug text-white/80 sm:text-[13px] md:text-sm md:leading-relaxed">
            <span class="font-bold text-white">{{ toast.buyerName }}</span>
            membeli
            <span class="break-words text-white/95">{{ toast.productLabel }}</span>
            pada
            <span class="font-bold text-white">{{ toast.timePhrase }}</span>.
          </p>
        </div>
        <div class="progress-line-track" aria-hidden="true">
          <div
            :key="toastSequence"
            class="progress-line-fill"
            :style="{ animationDuration: `${rotationDelayMs}ms` }"
          />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
import { planBase } from '~/data/pricingPlans'

const STORAGE_KEY = 'mvc-social-proof-dismissed-day'

type ToastPayload = {
  buyerName: string
  productLabel: string
  timePhrase: string
}

const props = defineProps({
  initialDelayMinMs: { type: Number, default: 6000 },
  initialDelayMaxMs: { type: Number, default: 12000 },
  rotationMinMs: { type: Number, default: 12000 },
  rotationMaxMs: { type: Number, default: 20000 },
})

const sessionActive = ref(true)
const showContent = ref(false)
const toast = ref<ToastPayload | null>(null)
const pendingRefresh = ref(false)
const toastSequence = ref(0)

let initialTimer: ReturnType<typeof setTimeout> | null = null
let rotationTimer: ReturnType<typeof setTimeout> | null = null

/** Nama depan + belakang (fiktif), dua kata. */
const INDONESIAN_FULL_NAMES = [
  'Budi Santoso',
  'Siti Rahayu',
  'Andi Wijaya',
  'Rina Kusuma',
  'Dewi Lestari',
  'Agus Prasetyo',
  'Fitri Handayani',
  'Eko Nugroho',
  'Maya Indira',
  'Rizki Ramadhan',
  'Wulan Sari',
  'Hendra Gunawan',
  'Indah Permata',
  'Bayu Saputra',
  'Lestari Dewi',
  'Fajar Hidayat',
  'Nadia Amalia',
  'Irwan Maulana',
  'Kartika Putri',
  'Yoga Aditya',
  'Amanda Sari',
  'Reza Firmansyah',
  'Putri Maharani',
  'Dimas Aryo',
  'Ayu Kartika',
  'Tono Triyanto',
  'Salsa Nabila',
  'Gilang Ramadhan',
  'Intan Permatasari',
  'Ferdi Ansari',
]

function todayKey() {
  return new Date().toISOString().slice(0, 10)
}

function isDismissedToday() {
  if (typeof localStorage === 'undefined') return false
  try {
    return localStorage.getItem(STORAGE_KEY) === todayKey()
  } catch {
    return false
  }
}

function dismissForToday() {
  clearTimers()
  pendingRefresh.value = false
  showContent.value = false
  sessionActive.value = false
  try {
    localStorage.setItem(STORAGE_KEY, todayKey())
  } catch {
    /* ignore */
  }
}

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function randomTimePhrase() {
  const phrases = [
    'baru saja',
    '1 menit yang lalu',
    '3 menit yang lalu',
    '5 menit yang lalu',
    '8 menit yang lalu',
    '12 menit yang lalu',
    '15 menit yang lalu',
    '25 menit yang lalu',
    '37 menit yang lalu',
    '1 jam yang lalu',
    '2 jam yang lalu',
    '3 jam yang lalu',
    'tadi siang',
    'semalam',
    'kemarin',
  ]
  return phrases[randomInt(0, phrases.length - 1)]!
}

function buildToast(): ToastPayload {
  const buyerName = INDONESIAN_FULL_NAMES[randomInt(0, INDONESIAN_FULL_NAMES.length - 1)]!
  const plan = planBase[randomInt(0, planBase.length - 1)]!
  return {
    buyerName,
    productLabel: plan.socialProofProductLabel,
    timePhrase: randomTimePhrase(),
  }
}

function clearTimers() {
  if (initialTimer) {
    clearTimeout(initialTimer)
    initialTimer = null
  }
  if (rotationTimer) {
    clearTimeout(rotationTimer)
    rotationTimer = null
  }
}

function scheduleNextRotation() {
  clearTimers()
  rotationTimer = setTimeout(() => {
    rotationTimer = null
    pendingRefresh.value = true
    showContent.value = false
  }, rotationDelayMs.value)
}

function onAfterLeave() {
  if (!sessionActive.value) return
  if (pendingRefresh.value) {
    pendingRefresh.value = false
    toast.value = buildToast()
    toastSequence.value += 1
    showContent.value = true
    scheduleNextRotation()
  }
}

const initialDelayMs = computed(() => Math.max(0, props.initialDelayMinMs))
const rotationDelayMs = computed(() => Math.max(1000, props.rotationMinMs))

onMounted(() => {
  if (isDismissedToday()) {
    sessionActive.value = false
    return
  }

  initialTimer = setTimeout(() => {
    initialTimer = null
    toast.value = buildToast()
    toastSequence.value += 1
    showContent.value = true
    scheduleNextRotation()
  }, initialDelayMs.value)
})

onBeforeUnmount(() => {
  clearTimers()
})
</script>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.35s ease, transform 0.35s ease;
}
.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(12px);
}

.progress-line-track {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  height: 3px;
  overflow: hidden;
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  background: rgb(255 255 255 / 18%);
}

.progress-line-fill {
  height: 100%;
  width: 100%;
  transform-origin: left center;
  background: linear-gradient(90deg, rgb(74 222 128 / 90%), rgb(52 211 153 / 90%));
  animation-name: slide-progress;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
}

@keyframes slide-progress {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}
</style>
