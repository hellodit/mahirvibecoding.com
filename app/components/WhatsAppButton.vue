<template>
  <Transition name="fab">
    <a
      v-if="isVisible"
      :href="whatsappUrl"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat di WhatsApp"
      class="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
    >
      <IconWhatsApp class="w-7 h-7" />
    </a>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  phone: { type: String, default: '6281234567890' },
  message: { type: String, default: 'Halo, saya tertarik dengan panduan MahirVibeCoding!' },
  showAfterScroll: { type: Number, default: 300 },
})

const isVisible = ref(false)

const whatsappUrl = computed(() => {
  const encoded = encodeURIComponent(props.message)
  return `https://wa.me/${props.phone}?text=${encoded}`
})

function handleScroll() {
  isVisible.value = window.scrollY > props.showAfterScroll
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.fab-enter-active,
.fab-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fab-enter-from,
.fab-leave-to {
  opacity: 0;
  transform: scale(0.5);
}
</style>
