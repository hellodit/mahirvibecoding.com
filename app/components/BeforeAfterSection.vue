<template>
  <section id="before-after" class="py-24 px-6 bg-white border-t border-primary/5">
    <div class="max-w-5xl mx-auto">

      <!-- Header -->
      <div class="max-w-2xl mb-14 reveal">
        <p class="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Perbandingan</p>
        <h2 class="text-3xl md:text-4xl font-bold text-text leading-tight tracking-tight mb-4">
          Seperti apa perbedaannya?
        </h2>
        <p class="text-base text-text/70 leading-relaxed">
          Workflow yang sama, AI yang sama — tapi hasilnya berbeda jauh tergantung
          <span class="font-medium text-text">strategi</span> yang kamu pakai.
        </p>
      </div>

      <!-- Comparison Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 reveal">

        <!-- BEFORE -->
        <div class="rounded-2xl border border-red-100 bg-red-50/40 p-6 flex flex-col gap-6">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <p class="text-sm font-bold text-red-500 uppercase tracking-wider">Sebelum</p>
          </div>

          <div class="flex flex-col gap-4">
            <div
              v-for="(step, i) in beforeSteps"
              :key="i"
              class="flex gap-3 items-start"
            >
              <div class="flex flex-col items-center gap-1 flex-shrink-0 pt-0.5">
                <div class="w-5 h-5 rounded-full bg-red-100 border border-red-200 flex items-center justify-center">
                  <span class="text-[10px] font-bold text-red-400">{{ i + 1 }}</span>
                </div>
                <div v-if="i < beforeSteps.length - 1" class="w-px h-5 bg-red-200/60" />
              </div>
              <div class="pb-1">
                <p class="text-sm font-semibold text-text/80">{{ step.title }}</p>
                <p class="text-xs text-text/50 leading-relaxed mt-0.5">{{ step.desc }}</p>
              </div>
            </div>
          </div>

          <!-- Outcome -->
          <div class="mt-auto rounded-xl bg-red-100/60 border border-red-200/60 px-4 py-3">
            <p class="text-xs text-red-500/80 font-medium leading-relaxed">
              😩 Buang waktu berjam-jam, hasil tidak memuaskan, dan frustrasi karena tidak tahu apa yang salah.
            </p>
          </div>
        </div>

        <!-- AFTER -->
        <div class="rounded-2xl border border-primary/20 bg-primary/5 p-6 flex flex-col gap-6">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p class="text-sm font-bold text-primary uppercase tracking-wider">Sesudah</p>
          </div>

          <div class="flex flex-col gap-4">
            <div
              v-for="(step, i) in afterSteps"
              :key="i"
              class="flex gap-3 items-start"
            >
              <div class="flex flex-col items-center gap-1 flex-shrink-0 pt-0.5">
                <div class="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <span class="text-[10px] font-bold text-primary">{{ i + 1 }}</span>
                </div>
                <div v-if="i < afterSteps.length - 1" class="w-px h-5 bg-primary/20" />
              </div>
              <div class="pb-1">
                <p class="text-sm font-semibold text-text/80">{{ step.title }}</p>
                <p class="text-xs text-text/50 leading-relaxed mt-0.5">{{ step.desc }}</p>
              </div>
            </div>
          </div>

          <!-- Outcome -->
          <div class="mt-auto rounded-xl bg-primary/10 border border-primary/20 px-4 py-3">
            <p class="text-xs text-primary font-medium leading-relaxed">
              🚀 Aplikasi selesai lebih cepat, terstruktur, dan siap produksi — dengan AI sebagai partner, bukan penentu.
            </p>
          </div>
        </div>

      </div>

      <!-- Bottom note -->
      <p class="text-center text-sm text-text/40 mt-8 reveal">
        Perbedaannya bukan di AI-nya — tapi di <span class="text-text/60 font-medium">cara kamu bekerja bersamanya</span>.
      </p>

    </div>
  </section>
</template>

<script setup>
const beforeSteps = [
  {
    title: 'Langsung minta AI buat aplikasi',
    desc: 'Tanpa planning, tanpa blueprint — AI mengira-ngira sendiri apa yang kamu mau.',
  },
  {
    title: 'Prompt berulang, hasil tetap meleset',
    desc: 'Konteks tidak lengkap, AI menghasilkan solusi yang tidak sesuai kebutuhan.',
  },
  {
    title: 'Bug muncul, tidak tahu harus mulai dari mana',
    desc: 'Tidak ada pemahaman atas kode yang dihasilkan AI — debugging jadi tebak-tebakan.',
  },
  {
    title: 'Fitur "jalan" tapi rapuh',
    desc: 'Tidak ada testing, tidak ada code review — aplikasi tidak siap dipakai user nyata.',
  },
]

const afterSteps = [
  {
    title: 'Planning dulu sebelum koding',
    desc: 'Validasi masalah, tentukan scope, susun PRD — AI punya konteks yang jelas.',
  },
  {
    title: 'Context-driven prompting',
    desc: 'Setiap prompt punya konteks yang tepat — AI menghasilkan solusi yang relevan.',
  },
  {
    title: 'Human-in-the-loop di setiap tahap',
    desc: 'Kamu tetap memahami dan mengontrol kode — AI mempercepat, bukan menggantikan.',
  },
  {
    title: 'Aplikasi reliable dan production-ready',
    desc: 'Ada testing, code review, dan deployment checklist — siap untuk real users.',
  },
]
</script>
