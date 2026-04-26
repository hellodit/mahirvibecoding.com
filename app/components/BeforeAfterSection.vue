<template>
  <section id="before-after" class="py-20 px-6 border-t border-primary/5">
    <div class="max-w-5xl mx-auto">
      <div class="max-w-2xl mb-10 reveal">
        <p class="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Perbandingan</p>
        <h2 class="text-2xl md:text-3xl font-bold text-text leading-tight tracking-tight mb-4">
          Seperti apa perbedaannya?
        </h2>
        <p class="text-sm text-text/70 leading-relaxed">
          Workflow yang sama, AI yang sama — tapi hasilnya berbeda jauh tergantung
          <span class="font-medium text-text">strategi</span> yang kamu pakai.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 reveal">
        <!-- BEFORE -->
        <div class="rounded-2xl border border-red-100 bg-red-50/40 p-6 flex flex-col gap-6">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
              <IconClose class="w-4 h-4 text-red-400" :stroke-width="2.5" />
            </div>
            <p class="text-sm font-bold text-red-500 uppercase tracking-wider">Sebelum</p>
          </div>

          <div class="flex flex-col gap-4">
            <div v-for="(step, i) in beforeSteps" :key="i" class="flex gap-3 items-start">
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

          <div class="mt-auto rounded-xl bg-red-100/60 border border-red-200/60 px-4 py-3">
            <p class="text-xs text-red-500/80 font-medium leading-relaxed">
              Buang waktu berjam-jam, hasil tidak memuaskan, dan frustrasi karena tidak tahu apa yang salah.
            </p>
          </div>
        </div>

        <!-- AFTER -->
        <div class="rounded-2xl border border-primary/20 bg-primary/5 p-6 flex flex-col gap-6">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <IconCheck class="w-4 h-4 text-primary" :stroke-width="2.5" />
            </div>
            <p class="text-sm font-bold text-primary uppercase tracking-wider">Sesudah</p>
          </div>

          <div class="flex flex-col gap-4">
            <div v-for="(step, i) in afterSteps" :key="i" class="flex gap-3 items-start">
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

          <div class="mt-auto rounded-xl bg-primary/10 border border-primary/20 px-4 py-3">
            <p class="text-xs text-primary font-medium leading-relaxed">
              Aplikasi selesai lebih cepat, terstruktur, dan siap produksi — dengan AI sebagai partner, bukan penentu.
            </p>
          </div>
        </div>
      </div>

      <p class="text-center text-sm text-text/40 mt-8 reveal">
        Perbedaannya bukan di AI-nya — tapi di <span class="text-text/60 font-medium">cara kamu bekerja bersamanya</span>.
      </p>
    </div>
  </section>
</template>

<script setup>
const beforeSteps = [
  {
    title: 'Prompt dengan ide kasar ke AI',
    desc: 'Tanpa planning dan konteks yang jelas — AI menghasilkan output generic yang tidak relevan.',
  },
  {
    title: 'Tidak ada desain arsitektur',
    desc: 'Langsung coding tanpa schema dan struktur — hasilnya tidak konsisten dan sulit di-maintain.',
  },
  {
    title: 'Kehilangan kontrol di tengah jalan',
    desc: 'Kerja tidak dipecah jadi unit kecil — sulit di-review, sulit di-rollback.',
  },
  {
    title: 'Aplikasi "jalan" tapi penuh risiko',
    desc: 'Halusinasi AI tidak terdeteksi, tidak ada code review — tidak siap untuk real users.',
  },
]

const afterSteps = [
  {
    title: 'Planning terstruktur sebelum coding',
    desc: 'Requirement jelas, scope terdefinisi, dipecah jadi unit kerja kecil yang bisa dieksekusi.',
  },
  {
    title: 'Desain arsitektur dan schema dulu',
    desc: 'Entitas, relasi, dan database schema dirancang sebelum AI generate kode.',
  },
  {
    title: 'Kolaborasi terstruktur dengan AI',
    desc: 'Konteks yang tepat di setiap tahap — kamu tetap mengontrol, AI mempercepat eksekusi.',
  },
  {
    title: 'Aplikasi reliable dan production-ready',
    desc: 'Code review, keamanan, dan deployment checklist — siap untuk real users.',
  },
]
</script>
