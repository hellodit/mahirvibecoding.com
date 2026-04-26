<template>
  <div>
    <AnnouncementBar @dismissed="announcementVisible = false" />
    <NavBar :announcement-visible="announcementVisible" />
    <WhatsAppButton />
    <main>
      <HeroSection class="bg-background" />
      <ProblemSection class="bg-primary/5" />
      <SolutionSection class="bg-white" />
      <BeforeAfterSection class="bg-primary/5" />
      <TargetAudienceSection class="bg-white" />
      <CurriculumSection class="bg-primary/5" />
      <TrustSection class="bg-white" />
      <PricingSection class="bg-primary" />
      <FaqSection class="bg-primary/5" />
    </main>
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

defineOgImage({
  url: '/preview.png',
  width: 1280,
  height: 800,
})

const announcementVisible = ref(true)
const leadPopupDelay = 45000

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
