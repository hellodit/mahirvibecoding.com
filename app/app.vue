<template>
  <div class="font-sans antialiased text-gray-900 bg-gray-50">
    <NavBar />
    <main>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <CurriculumSection />
      <TargetAudienceSection />
      <TrustSection />
      <FinalCtaSection />
      <FaqSection />
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

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
