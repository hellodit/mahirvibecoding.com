<template>
  <div>
    <NavBar />
    <main class="py-20 px-6">
      <div class="max-w-3xl mx-auto prose prose-sm">
        <h1 class="text-3xl font-bold text-text mb-8">Kebijakan Privasi</h1>
        <p class="text-sm text-text/60 mb-8">Terakhir diperbarui: 1 Februari 2026</p>

        <section class="mb-8">
          <h2 class="text-xl font-bold text-text mb-3">1. Informasi yang Kami Kumpulkan</h2>
          <p class="text-sm text-text/80 leading-relaxed mb-3">
            Kami mengumpulkan informasi berikut saat Anda menggunakan layanan kami:
          </p>
          <ul class="list-disc pl-5 space-y-2 text-sm text-text/80">
            <li><span class="font-semibold">Alamat email</span> — saat Anda mendaftar untuk mendapatkan bab gratis atau melakukan pembelian</li>
            <li><span class="font-semibold">Informasi pembayaran</span> — diproses oleh payment gateway pihak ketiga (kami tidak menyimpan data kartu)</li>
            <li><span class="font-semibold">Data penggunaan</span> — informasi teknis seperti browser, perangkat, dan halaman yang dikunjungi</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-bold text-text mb-3">2. Penggunaan Informasi</h2>
          <p class="text-sm text-text/80 leading-relaxed mb-3">
            Informasi yang dikumpulkan digunakan untuk:
          </p>
          <ul class="list-disc pl-5 space-y-2 text-sm text-text/80">
            <li>Mengirimkan produk digital yang Anda beli</li>
            <li>Mengirimkan update materi dan informasi terkait produk</li>
            <li>Memberikan akses ke komunitas Discord (jika berlaku)</li>
            <li>Meningkatkan kualitas produk dan layanan kami</li>
          </ul>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-bold text-text mb-3">3. Perlindungan Data</h2>
          <p class="text-sm text-text/80 leading-relaxed">
            Kami mengambil langkah-langkah keamanan yang wajar untuk melindungi data pribadi Anda.
            Namun, tidak ada transmisi data melalui internet yang sepenuhnya aman. Kami tidak akan
            menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga tanpa persetujuan
            Anda, kecuali diwajibkan oleh hukum.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-bold text-text mb-3">4. Cookie</h2>
          <p class="text-sm text-text/80 leading-relaxed">
            Website kami menggunakan cookie dan localStorage untuk menyimpan preferensi pengguna
            (misalnya status popup yang sudah ditutup). Kami tidak menggunakan cookie tracking dari
            pihak ketiga kecuali yang diperlukan untuk analitik dasar.
          </p>
        </section>

        <section class="mb-8">
          <h2 class="text-xl font-bold text-text mb-3">5. Hak Anda</h2>
          <p class="text-sm text-text/80 leading-relaxed">
            Anda memiliki hak untuk mengakses, memperbaiki, atau menghapus data pribadi Anda yang
            kami simpan. Untuk permintaan terkait data, silakan hubungi kami melalui email.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-bold text-text mb-3">6. Perubahan Kebijakan</h2>
          <p class="text-sm text-text/80 leading-relaxed">
            Kebijakan privasi ini dapat diperbarui dari waktu ke waktu. Perubahan akan dipublikasikan
            di halaman ini dengan tanggal pembaruan terbaru.
          </p>
        </section>
      </div>
    </main>
    <FooterSection />
  </div>
</template>

<script setup>
useHead({
  title: 'Kebijakan Privasi — MahirVibeCoding',
})
</script>
