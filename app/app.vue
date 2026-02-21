<template>
  <div class="font-sans antialiased text-text bg-white">
    <AnnouncementBar @dismissed="announcementVisible = false" />
    <NavBar :announcement-visible="announcementVisible" />
    <!-- Popup muncul setelah delayMs (ms). Ubah leadPopupDelay untuk set waktu, misal 5000 = 5 detik -->
    <LeadCapturePopup
      :delay-ms="leadPopupDelay"
      @submit="onLeadSubmit"
    />
    <main>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TargetAudienceSection />
      <CurriculumSection />
      <TrustSection />
      <PricingSection />
      <FaqSection />
      <FinalCtaSection />
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const announcementVisible = ref(true)

/** Delay popup (ms). Contoh: 3000 = 3 detik, 5000 = 5 detik, 10000 = 10 detik */
const leadPopupDelay = 3000

function onLeadSubmit({ email }) {
  console.log('Lead capture:', email)
  // TODO: kirim ke backend / newsletter (e.g. send to API)
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  )

  document.querySelectorAll('.reveal').forEach((el) => {
    observer.observe(el)
  })
})
</script>
