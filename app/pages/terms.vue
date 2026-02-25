<template>
  <div>
    <NavBar />
    <main class="py-20 px-6">
      <div class="max-w-3xl mx-auto prose prose-sm">
        <h1 class="text-3xl font-bold text-text mb-8">Syarat dan Ketentuan</h1>
        <p class="text-sm text-text/60 mb-8">Terakhir diperbarui: 1 Februari 2026</p>

        <section class="mb-8">
          <h2 class="text-xl font-bold text-text mb-3">1. Tentang Produk</h2>
          <p class="text-sm text-text/80 leading-relaxed">
            MahirVibeCoding adalah produk digital berupa ebook/panduan yang membahas strategi dan framework
            untuk membangun aplikasi fullstack menggunakan AI Coding Agent. Produk ini dijual melalui website
            mahirvibecoding.com.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-bold text-text mb-3">2. Lisensi Penggunaan</h2>
          <p class="text-sm text-text/80 leading-relaxed mb-3">
            Dengan membeli produk ini, Anda mendapatkan lisensi personal non-transferable untuk:
          </p>
          <ul class="list-disc pl-5 space-y-2 text-sm text-text/80">
            <li>Mengakses dan membaca seluruh materi panduan</li>
            <li>Menggunakan template dan contoh kode untuk proyek personal maupun komersial Anda</li>
            <li>Mengakses update materi sesuai paket yang dibeli</li>
          </ul>
          <p class="text-sm text-text/80 leading-relaxed mt-3">
            Anda <span class="font-semibold">tidak diperbolehkan</span> untuk mendistribusikan ulang,
            menjual kembali, atau membagikan materi kepada pihak lain tanpa izin tertulis.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-bold text-text mb-3">3. Pembayaran</h2>
          <p class="text-sm text-text/80 leading-relaxed">
            Semua harga tercantum dalam Rupiah (IDR) dan bersifat sekali bayar. Pembayaran diproses
            melalui payment gateway pihak ketiga yang aman. Akses ke materi diberikan setelah pembayaran
            berhasil dikonfirmasi.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-bold text-text mb-3">4. Kebijakan Refund</h2>
          <p class="text-sm text-text/80 leading-relaxed">
            Kami menawarkan garansi uang kembali. Jika Anda merasa panduan ini tidak memberikan value
            yang dijanjikan, hubungi kami melalui email untuk proses refund penuh. Permintaan refund
            harus diajukan dalam waktu 30 hari sejak tanggal pembelian.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-bold text-text mb-3">5. Perubahan Syarat</h2>
          <p class="text-sm text-text/80 leading-relaxed">
            Kami berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan akan diinformasikan
            melalui website. Dengan terus menggunakan produk setelah perubahan, Anda dianggap menyetujui
            syarat yang diperbarui.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-bold text-text mb-3">6. Kontak</h2>
          <p class="text-sm text-text/80 leading-relaxed">
            Jika ada pertanyaan terkait syarat dan ketentuan ini, silakan hubungi kami melalui
            email atau media sosial yang tertera di website.
          </p>
        </section>
      </div>
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
useHead({
  title: 'Syarat dan Ketentuan — MahirVibeCoding',
})
</script>
