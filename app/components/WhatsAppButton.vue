<template>
  <Transition name="fab">
    <a
      v-if="isVisible"
      :href="whatsappUrl"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat di WhatsApp"
      class="fixed z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl right-6 left-auto bottom-[calc(max(0.75rem,env(safe-area-inset-bottom,0px))+7.25rem)] sm:bottom-6 sm:right-6 sm:left-auto sm:z-50"
    >
      <IconWhatsApp class="w-7 h-7" />
    </a>
  </Transition>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  phone: { type: String, default: '+62895413601704'},
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
