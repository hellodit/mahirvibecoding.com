<template>
  <div>
    <AnnouncementBar @dismissed="announcementVisible = false" />
    <NavBar :announcement-visible="announcementVisible" />
    <WhatsAppButton />
    <main>
      <HeroSection class="bg-background" />
      <ProblemSection class="bg-primary/5" />
      <SolutionSection class="bg-background" />
      <StudyCaseSection class="bg-primary/5" />
      <BeforeAfterSection class="bg-background" />
      <TargetAudienceSection class="bg-primary/5" />
      <CurriculumSection class="bg-background" />
      <TrustSection class="bg-primary/5" />
      <PricingSection class="bg-primary" />
      <FaqSection class="bg-background" />
    </main>
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const runtimeConfig = useRuntimeConfig()

useSeoMeta({
  title: runtimeConfig.public.siteTitle,
  description: runtimeConfig.public.siteDescription,
  ogTitle: runtimeConfig.public.siteTitle,
  ogDescription: runtimeConfig.public.siteDescription,
  ogType: 'website',
  ogUrl: runtimeConfig.public.siteUrl,
  twitterCard: 'summary_large_image',
  twitterTitle: runtimeConfig.public.siteTitle,
  twitterDescription: runtimeConfig.public.siteDescription,
})

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
