<template>
  <div v-if="timeLeft.total > 0" class="flex items-center justify-center gap-2 md:gap-3">
    <div v-for="unit in units" :key="unit.label" class="flex flex-col items-center">
      <span
        class="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center text-lg md:text-xl font-bold"
        :class="dark ? 'bg-white/10 text-white' : 'bg-primary/10 text-primary'"
      >
        {{ String(unit.value).padStart(2, '0') }}
      </span>
      <span
        class="text-[10px] uppercase tracking-wider mt-1.5 font-medium"
        :class="dark ? 'text-white/50' : 'text-text/50'"
      >
        {{ unit.label }}
      </span>
    </div>
    <span
      v-if="units.length > 1"
      class="hidden"
      aria-hidden="true"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  targetDate: { type: String, required: true },
  dark: { type: Boolean, default: false },
})

const now = ref(Date.now())
let intervalId: ReturnType<typeof setInterval> | null = null

const timeLeft = computed(() => {
  const diff = Math.max(0, new Date(props.targetDate).getTime() - now.value)
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)
  return { total: diff, days, hours, minutes, seconds }
})

const units = computed(() => [
  { label: 'Hari', value: timeLeft.value.days },
  { label: 'Jam', value: timeLeft.value.hours },
  { label: 'Menit', value: timeLeft.value.minutes },
  { label: 'Detik', value: timeLeft.value.seconds },
])

onMounted(() => {
  intervalId = setInterval(() => {
    now.value = Date.now()
  }, 1000)
})

onBeforeUnmount(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>
