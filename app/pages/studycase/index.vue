<template>
  <div class="min-h-screen bg-[linear-gradient(180deg,_rgba(46,107,59,0.07)_0%,_rgba(255,255,255,1)_24%)]">
    <NavBar :announcement-visible="false" />

    <main class="px-6 pb-20 pt-10 md:pt-14">
      <div class="mx-auto max-w-6xl">
        <section class="max-w-3xl">
          <p class="text-xs font-semibold uppercase tracking-[0.26em] text-primary">
            Study Case
          </p>
          <h1 class="mt-4 text-4xl font-bold tracking-tight text-text md:text-5xl">
            Studi kasus nyata vibe coding bareng AI Coding Agent.
          </h1>
          <p class="mt-5 text-base leading-8 text-text/72 md:text-lg">
            Belajar langsung dari skenario aplikasi yang dibangun dengan workflow vibe coding —
            dari planning, eksekusi, sampai deploy. Tiap study case dilengkapi tools stack,
            tampilan, dan link ke source code-nya.
          </p>
        </section>

        <section class="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <NuxtLink
            v-for="studyCase in publishedStudyCases"
            :key="studyCase.id"
            :to="`${studyCase.path}/`"
            class="group block overflow-hidden rounded-2xl border border-primary/10 bg-white transition hover:border-primary/25 hover:shadow-sm"
          >
            <div class="aspect-[16/9] overflow-hidden bg-primary/5">
              <NuxtImg
                v-if="studyCase.image"
                :src="studyCase.image"
                :alt="studyCase.title"
                class="h-full w-full object-cover transition group-hover:scale-[1.02]"
                sizes="100vw md:480px"
                loading="lazy"
              />
            </div>
            <div class="p-6">
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tool in studyCase.tools.slice(0, 4)"
                  :key="`${studyCase.id}-${tool}`"
                  class="rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs font-medium text-text/70"
                >
                  {{ tool }}
                </span>
              </div>
              <h2 class="mt-4 text-xl font-bold tracking-tight text-text">
                {{ studyCase.title }}
              </h2>
              <p class="mt-3 text-sm leading-relaxed text-text/70">
                {{ studyCase.description }}
              </p>
              <span class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                <span>Lihat detail</span>
                <IconArrowRight class="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </div>
          </NuxtLink>
        </section>

        <section v-if="!publishedStudyCases.length" class="mt-12 rounded-2xl border border-primary/10 bg-white p-10 text-center">
          <p class="text-sm text-text/60">
            Belum ada study case yang dipublikasikan. Pantengin halaman ini ya!
          </p>
        </section>
      </div>
    </main>

    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { fetchStudyCases, type StudyCaseRecord } from '~/composables/useStudyCases'

const runtimeConfig = useRuntimeConfig()
const canonicalUrl = `${runtimeConfig.public.siteUrl}/studycase/`

const { data: studyCasesData } = await useAsyncData<StudyCaseRecord[]>(
  'studycase-index',
  fetchStudyCases,
)

const publishedStudyCases = (studyCasesData.value ?? []).filter(item => item.status === 'published')

const pageTitle = `Study Case — ${runtimeConfig.public.siteName}`
const pageDescription = 'Kumpulan study case nyata yang dibangun dengan workflow vibe coding bersama AI Coding Agent — dari planning hingga deploy.'

useSchemaOrg([
  defineWebPage({
    name: pageTitle,
    description: pageDescription,
    url: canonicalUrl,
  }),
  defineBreadcrumb({
    itemListElement: [
      { position: 1, name: 'Home', item: `${runtimeConfig.public.siteUrl}/` },
      { position: 2, name: 'Study Case', item: canonicalUrl },
    ],
  }),
  defineItemList({
    itemListElement: publishedStudyCases.map((studyCase, index) => ({
      position: index + 1,
      name: studyCase.title,
      item: `${runtimeConfig.public.siteUrl}${studyCase.path}/`,
    })),
  }),
])

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  ogType: 'website',
  ogUrl: canonicalUrl,
  twitterCard: 'summary_large_image',
  twitterTitle: pageTitle,
  twitterDescription: pageDescription,
})

useHead({
  link: [
    { rel: 'canonical', href: canonicalUrl },
  ],
})
</script>
