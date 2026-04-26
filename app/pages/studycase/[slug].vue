<template>
  <div class="min-h-screen bg-[linear-gradient(180deg,_rgba(46,107,59,0.07)_0%,_rgba(255,255,255,1)_24%)]">
    <NavBar :announcement-visible="false" />

    <main class="px-6 pb-20 pt-10 md:pt-14">
      <div class="mx-auto max-w-5xl">
        <NuxtLink
          to="/#study-case"
          class="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-text"
        >
          <IconArrowRight class="h-4 w-4 rotate-180" />
          <span>Kembali ke Study Case</span>
        </NuxtLink>

        <article class="mt-8 overflow-hidden rounded-[32px] border border-primary/10 bg-white shadow-sm">
          <NuxtImg
            :src="studyCase.image"
            :alt="studyCase.title"
            class="h-64 w-full object-cover md:h-80"
            sizes="100vw lg:960px"
            loading="eager"
            fetchpriority="high"
          />

          <div class="px-6 py-8 md:px-10 md:py-10">
            <h1 class="mt-5 text-3xl font-bold leading-tight tracking-tight text-text md:text-[2.75rem]">
              {{ studyCase.title }}
            </h1>
            <p class="mt-5 max-w-3xl text-base leading-8 text-text/72 md:text-lg">
              {{ studyCase.description }}
            </p>

            <div class="mt-8 flex flex-wrap gap-2 border-t border-primary/10 pt-6">
              <span
                v-for="tool in studyCase.tools"
                :key="tool"
                class="rounded-full bg-primary/5 border border-primary/10 px-3 py-1 text-sm font-medium text-text/70"
              >
                {{ tool }}
              </span>
            </div>

            <section v-if="studyCase.videoId" class="mt-10">
              <h2 class="mb-4 text-2xl font-bold tracking-tight text-text">
                Video Preview
              </h2>
              <Youtube
                :id="studyCase.videoId"
                title="Preview Dapur Nabilah - Laravel 13 Web Booking Restaurant"
              />
            </section>

            <section v-if="studyCase.gallery.length" class="mt-10">
              <h2 class="mb-4 text-2xl font-bold tracking-tight text-text">
                Tampilan Aplikasi
              </h2>
              <StudyCaseGallery :images="studyCase.gallery" />
            </section>

            <div class="studycase-content mt-10">
              <ContentRenderer :value="studyCase" />
            </div>

            <div class="mt-12 rounded-2xl border border-primary/15 bg-primary/5 p-6 md:p-8 text-center">
              <p class="text-xs font-semibold uppercase tracking-[0.26em] text-primary">
                Mau akses materi lengkapnya?
              </p>
              <h2 class="mt-3 text-xl font-bold tracking-tight text-text md:text-2xl">
                Pilih paket yang paling cocok untuk kebutuhan belajarmu.
              </h2>
              <p class="mx-auto mt-3 max-w-2xl text-sm leading-7 text-text/70">
                Kamu bisa mulai dari ebook, atau ambil paket dengan source code study case
                kalau ingin praktik dari workflow yang lebih lengkap.
              </p>
              <div class="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <NuxtLink
                  to="/#pricing"
                  class="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-primary/90"
                >
                  Lihat Pilihan Paket
                </NuxtLink>
                <a
                  :href="checkoutPlan.checkoutUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center rounded-xl border border-primary/20 bg-white px-6 py-3.5 text-sm font-bold text-primary transition-colors hover:border-primary/40 hover:bg-primary/5"
                >
                  Checkout Paket {{ checkoutPlan.name }}
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>

    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { fetchStudyCaseBySlug, type StudyCaseRecord } from '~/composables/useStudyCases'
import { planBase } from '~/data/pricingPlans'

const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const slug = String(route.params.slug ?? '')

const { data: studyCaseData } = await useAsyncData<StudyCaseRecord | null>(
  `studycase-${slug}`,
  () => fetchStudyCaseBySlug(slug),
)

if (!studyCaseData.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Study case tidak ditemukan',
  })
}

const studyCase = studyCaseData.value
const canonicalUrl = `${runtimeConfig.public.siteUrl}${studyCase.path}`
const checkoutPlan = (planBase.find(plan => plan.featured) ?? planBase[0])!

useSeoMeta({
  title: `${studyCase.title} — ${runtimeConfig.public.siteName}`,
  description: studyCase.description,
  ogTitle: studyCase.title,
  ogDescription: studyCase.description,
  ogType: 'article',
  ogUrl: canonicalUrl,
  twitterCard: 'summary_large_image',
  twitterTitle: studyCase.title,
  twitterDescription: studyCase.description,
})

useHead({
  link: [
    { rel: 'canonical', href: canonicalUrl },
  ],
})
</script>

<style scoped>
.studycase-content :deep(h2) {
  margin-top: 3rem;
  margin-bottom: 0.75rem;
  font-size: 1.625rem;
  font-weight: 800;
  line-height: 1.3;
  letter-spacing: -0.02em;
  color: #050315;
}

.studycase-content :deep(p) {
  margin-top: 1.25rem;
  font-size: 1.0625rem;
  line-height: 1.9;
  color: rgb(5 3 21 / 0.72);
}

.studycase-content :deep(ul) {
  margin-top: 1.25rem;
  list-style-type: disc;
  padding-left: 1.5rem;
}

.studycase-content :deep(li) {
  margin-top: 0.5rem;
  font-size: 1.0625rem;
  line-height: 1.85;
  color: rgb(5 3 21 / 0.72);
}

.studycase-content :deep(strong) {
  font-weight: 700;
  color: #050315;
}

@media (min-width: 768px) {
  .studycase-content :deep(h2) {
    margin-top: 3.5rem;
    font-size: 1.875rem;
  }

  .studycase-content :deep(p),
  .studycase-content :deep(li) {
    font-size: 1.125rem;
  }
}
</style>
