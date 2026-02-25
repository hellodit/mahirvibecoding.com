<template>
  <div>
    <AnnouncementBar @dismissed="announcementVisible = false" />
    <NavBar :announcement-visible="announcementVisible" />
    <LeadCapturePopup
      :delay-ms="leadPopupDelay"
      @submit="onLeadSubmit"
    />
    <WhatsAppButton />
    <BackToTopButton />
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

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const announcementVisible = ref(true)
const leadPopupDelay = 3000

async function onLeadSubmit({ email }: { email: string }) {
  try {
    await $fetch('/api/leads', {
      method: 'POST',
      body: { email },
    })
  } catch (e) {
    console.error('Failed to submit lead:', e)
  }
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
