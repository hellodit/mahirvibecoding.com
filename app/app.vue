<template>
  <div class="font-sans antialiased text-text bg-background">
    <AnnouncementBar @dismissed="announcementVisible = false" />
    <NavBar :announcement-visible="announcementVisible" />
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
