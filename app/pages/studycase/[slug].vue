<template>
  <div class="min-h-screen bg-[linear-gradient(180deg,_rgba(46,107,59,0.07)_0%,_rgba(255,255,255,1)_24%)]">
    <NavBar :announcement-visible="false" />

    <main class="px-6 pb-20 pt-10 md:pt-14">
      <div class="mx-auto max-w-5xl">
        <NuxtLink
          to="/studycase/"
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

            <div
              v-if="studyCase.githubUrl"
              class="mt-12 rounded-2xl border border-text/10 bg-text p-6 md:p-8 text-center"
            >
              <span class="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-7 w-7" aria-hidden="true">
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 015.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.73 18.27.5 12 .5z" />
                </svg>
              </span>
              <h2 class="mt-4 text-xl font-bold tracking-tight text-white md:text-2xl">
                Siap eksplorasi source code-nya?
              </h2>
              <p class="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/70">
                Clone repository {{ studyCase.title }} gratis dari GitHub dan pelajari langsung
                struktur kode, alur data, sampai cara deploy-nya.
              </p>
              <div class="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  :href="studyCase.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-text transition-colors hover:bg-white/90"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4" aria-hidden="true">
                    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 015.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.73 18.27.5 12 .5z" />
                  </svg>
                  Download di GitHub
                </a>
              </div>
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

        <section v-if="relatedStudyCases.length" class="mt-16">
          <div class="flex items-end justify-between gap-4">
            <h2 class="text-2xl font-bold tracking-tight text-text md:text-3xl">
              Study case lainnya
            </h2>
            <NuxtLink
              to="/studycase/"
              class="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-text"
            >
              <span>Lihat semua</span>
              <IconArrowRight class="h-4 w-4" />
            </NuxtLink>
          </div>

          <div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <NuxtLink
              v-for="item in relatedStudyCases"
              :key="item.id"
              :to="`${item.path}/`"
              class="group block overflow-hidden rounded-2xl border border-primary/10 bg-white transition hover:border-primary/25 hover:shadow-sm"
            >
              <div class="aspect-[16/9] overflow-hidden bg-primary/5">
                <NuxtImg
                  v-if="item.image"
                  :src="item.image"
                  :alt="item.title"
                  class="h-full w-full object-cover transition group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              <div class="p-5">
                <h3 class="text-base font-bold tracking-tight text-text">
                  {{ item.title }}
                </h3>
                <p class="mt-2 line-clamp-3 text-sm leading-relaxed text-text/70">
                  {{ item.description }}
                </p>
              </div>
            </NuxtLink>
          </div>
        </section>
      </div>
    </main>

    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { fetchStudyCaseBySlug, fetchStudyCases, type StudyCaseRecord } from '~/composables/useStudyCases'
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
const canonicalUrl = `${runtimeConfig.public.siteUrl}${studyCase.path}/`
const checkoutPlan = (planBase.find(plan => plan.featured) ?? planBase[0])!

const { data: relatedStudyCasesData } = await useAsyncData<StudyCaseRecord[]>(
  `studycase-related-${slug}`,
  async () => {
    const all = await fetchStudyCases()
    return all
      .filter(item => item.status === 'published' && item.path !== studyCase.path)
      .slice(0, 3)
  },
)
const relatedStudyCases = relatedStudyCasesData.value ?? []

const absoluteImage = `${runtimeConfig.public.siteUrl}${studyCase.image}`

const schemas: Array<Record<string, unknown>> = [
  defineArticle({
    headline: studyCase.title,
    description: studyCase.description,
    image: absoluteImage,
    inLanguage: 'id-ID',
    url: canonicalUrl,
    ...(studyCase.publishedAt ? { datePublished: studyCase.publishedAt } : {}),
  }),
  defineBreadcrumb({
    itemListElement: [
      { position: 1, name: 'Home', item: `${runtimeConfig.public.siteUrl}/` },
      { position: 2, name: 'Study Case', item: `${runtimeConfig.public.siteUrl}/studycase/` },
      { position: 3, name: studyCase.title, item: canonicalUrl },
    ],
  }),
]

if (studyCase.videoId) {
  schemas.push(defineVideo({
    name: studyCase.title,
    description: studyCase.description,
    thumbnailUrl: absoluteImage,
    embedUrl: `https://www.youtube.com/embed/${studyCase.videoId}`,
    ...(studyCase.publishedAt ? { uploadDate: studyCase.publishedAt } : {}),
  }))
}

useSchemaOrg(schemas)

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
