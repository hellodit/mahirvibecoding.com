<template>
  <div class="my-8">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <button
        v-for="(image, index) in images"
        :key="image.src"
        type="button"
        class="group overflow-hidden rounded-2xl border border-primary/10 bg-primary/5 text-left transition hover:border-primary/30 hover:shadow-sm"
        :class="index === 0 ? 'md:col-span-2' : ''"
        @click="selectedImage = image"
      >
        <NuxtImg
          :src="image.src"
          :alt="image.alt"
          class="w-full object-cover transition duration-300 group-hover:scale-[1.02]"
          :class="index === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'"
          loading="lazy"
        />
        <span class="block px-4 py-3 text-sm font-medium leading-6 text-text/70">
          {{ image.alt }}
        </span>
      </button>
    </div>

    <ClientOnly>
      <Teleport to="body">
        <div
          v-if="selectedImage"
          class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4 py-8"
          role="dialog"
          aria-modal="true"
          @click.self="selectedImage = null"
        >
          <button
            type="button"
            class="absolute right-4 top-4 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white transition hover:bg-white/20"
            @click="selectedImage = null"
          >
            Tutup
          </button>
          <div class="max-h-full max-w-6xl overflow-hidden rounded-2xl bg-white">
            <NuxtImg
              :src="selectedImage.src"
              :alt="selectedImage.alt"
              class="max-h-[82vh] w-full object-contain"
              loading="lazy"
            />
            <p class="px-5 py-4 text-sm font-medium leading-6 text-text/70">
              {{ selectedImage.alt }}
            </p>
          </div>
        </div>
      </Teleport>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
type GalleryImage = {
  src: string
  alt: string
}

defineProps<{
  images: GalleryImage[]
}>()

const selectedImage = ref<GalleryImage | null>(null)
</script>
