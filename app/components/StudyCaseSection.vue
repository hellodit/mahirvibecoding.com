<template>
  <section id="study-case" class="py-20 px-6 border-t border-primary/5">
    <div class="max-w-5xl mx-auto">
      <div class="max-w-2xl mb-12 reveal">
        <p class="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Study Case</p>
        <h2 class="text-2xl md:text-3xl font-bold text-text leading-tight tracking-tight mb-4">
          Belajar dari skenario proyek yang dekat dengan kebutuhan nyata
        </h2>
        <p class="text-sm text-text/70 leading-relaxed">
          Empat studi kasus ini membantu kamu melihat bagaimana strategi vibe coding dipakai
          untuk merancang, membangun, dan memvalidasi aplikasi bersama AI Coding Agent.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article
          v-for="(studyCase, index) in studyCases"
          :key="studyCase.id"
          class="reveal rounded-2xl border border-primary/10 bg-white overflow-hidden hover:border-primary/25 hover:shadow-sm transition-all"
          :class="`reveal-delay-${index + 1}`"
        >
          <div class="aspect-[16/9] bg-primary/5 border-b border-primary/10 overflow-hidden">
            <NuxtImg
              :src="studyCase.image"
              :alt="studyCase.title"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
     
          <div class="p-6 flex flex-col gap-5">
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tool in studyCase.tools"
                :key="`${studyCase.id}-${tool}`"
                class="rounded-full bg-primary/5 border border-primary/10 px-3 py-1 text-xs font-medium text-text/70"
              >
                {{ tool }}
              </span>
            </div>


            <div>
              <h3 class="text-lg font-bold text-text tracking-tight mb-2">
                {{ studyCase.title }}
              </h3>
              <p class="text-sm text-text/70 leading-relaxed">
                {{ studyCase.description }}
              </p>
            </div>

           
            <NuxtLink
              :to="studyCase.path"
              class="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-text"
              :aria-label="`Lihat detail ${studyCase.title}`"
            >
              <span>Lihat detail</span>
              <IconArrowRight class="h-4 w-4" />
            </NuxtLink>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import type { StudyCaseRecord } from '~/composables/useStudyCases'

const { data: studyCasesData } = await useAsyncData<StudyCaseRecord[]>(
  'study-cases-section',
  fetchPublishedStudyCases,
)

const studyCases = computed(() => studyCasesData.value ?? [])
</script>
