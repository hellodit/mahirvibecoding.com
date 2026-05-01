---
id: "SC-06"
title: "VidRecipe"
description: "Ubah short video masak jadi resep terstruktur dengan bahan lengkap dan langkah memasak yang langsung bisa dipraktikkan, tanpa perlu pause-rewind berkali-kali."
image: "/studycases/vidrecipe-thumbnail.png"
tools:
  - Gemini
  - Video Processing
  - Recipe Extraction
order: 2
gallery:

  - src: "/studycases/vidrecipe-1.png"
    alt: "Tampilan aplikasi VidRecipe: halaman login, input URL video TikTok untuk ekstrak resep, dan koleksi resep di Your Kitchen"
  - src: "/studycases/vidrecipe-2.png"
    alt: "Detail resep Soto Ayam Lamongan di VidRecipe dengan tab Ingredients berisi daftar bahan dan tab Instructions berisi langkah memasak"
  - src: "/studycases/vidrecipe-thumbnail.png"
    alt: "Preview aplikasi VidRecipe: ubah short video masak menjadi resep terstruktur lengkap dengan bahan dan langkah memasak"
status: published
---

Pernah nonton video masak di TikTok yang tampak menggugah selera, lalu kamu pause, rewind, screenshot, dan tetap saja melewatkan satu bahan? VidRecipe lahir dari frustrasi sederhana itu.

VidRecipe adalah aplikasi berbasis AI yang mengubah short video masak menjadi resep siap pakai. User cukup menempelkan URL video, dan dalam hitungan detik, aplikasi mengembalikan ringkasan hidangan, daftar bahan, dan langkah memasak yang sudah terstruktur rapi.

Sebagai studi kasus, VidRecipe menunjukkan satu hal penting: **produk AI yang baik bukan tentang memamerkan teknologi, melainkan tentang menyelesaikan masalah nyata dengan pengalaman yang terasa mulus di sisi user.**

## Masalah yang Diselesaikan

Konten masak di short video sangat menarik. Visualnya cepat, durasinya pendek, dan ide hidangannya beragam. Tapi formatnya tidak ramah untuk eksekusi di dapur. User akhirnya harus menebak takaran, menghentikan video belasan kali, atau mencari referensi tambahan di Google hanya untuk memastikan satu langkah.

VidRecipe menghilangkan friksi itu. Satu URL, satu klik, dan resep sudah siap dibaca seperti membaca buku resep.

## Alur Aplikasi

Alurnya sengaja dirancang sederhana di sisi user, walaupun proses di belakangnya kompleks:

- User menempelkan URL short video masakan.
- Sistem mengambil konten video dan memprosesnya menggunakan Gemini untuk memahami konteks hidangan.
- AI menyusun output menjadi tiga bagian: nama atau ringkasan resep, daftar bahan, dan langkah memasak berurutan.
- User mendapat resep yang langsung bisa dipraktikkan tanpa harus menonton ulang video.

Yang menarik dari studi kasus ini bukan kompleksitas teknisnya, melainkan keputusan-keputusan kecil yang membuat hasilnya konsisten. Bagaimana menyusun prompt agar bahan tidak terlewat, bagaimana menangani video yang informasinya tidak lengkap, dan bagaimana menjaga pengalaman tetap cepat meski AI sedang bekerja di belakang.

## Fitur Utama

- Input URL short video sebagai sumber resep.
- Analisis konten video menggunakan Gemini untuk mengekstrak konteks hidangan.
- Generasi otomatis nama hidangan, daftar bahan, dan langkah memasak berurutan.
- Output resep terstruktur yang siap dibaca dan dipraktikkan.
- Pengalaman ringan dan cepat, dirancang untuk dipakai sambil memasak.

## Yang Akan Kamu Pelajari

Studi kasus ini melatih beberapa kemampuan inti yang dibutuhkan untuk membangun produk AI yang bekerja di dunia nyata:

- **Mendesain flow produk AI yang sederhana di sisi user.** Bagaimana membungkus proses kompleks menjadi pengalaman satu klik.
- **Mengubah data tidak terstruktur menjadi output terstruktur.** Dari konten video bebas menjadi resep dengan format konsisten.
- **Menyusun prompt yang menghasilkan output stabil.** Agar bahan dan langkah tidak random setiap kali video diproses.
- **Menangani kasus tepi dengan elegan.** Video pendek, informasi tidak lengkap, atau hidangan yang tidak familiar.
- **Menjaga performa user-facing** meski proses AI memerlukan waktu di belakang layar.

## Kenapa Studi Kasus Ini Penting

Banyak tutorial AI hanya menunjukkan demo teknologi: "lihat, AI bisa melakukan X." Tapi membangun produk AI yang dipakai orang membutuhkan keterampilan yang sama sekali berbeda. Memahami pain point user, mendesain flow yang masuk akal, dan memastikan AI memberikan output yang konsisten, bukan hanya impresif sekali pakai.

VidRecipe adalah contoh kecil tapi utuh dari proses itu. Dari masalah harian yang relatable, kamu akan melihat bagaimana satu URL berubah menjadi resep yang siap dipakai. Dan bagaimana setiap keputusan teknis di balik aplikasi ini ditujukan untuk satu hal: membuat hidup user lebih mudah.

## Output Akhir

Setelah menyelesaikan studi kasus ini, kamu punya gambaran utuh tentang membangun aplikasi AI yang mengambil sumber data tidak terstruktur dan menyajikannya sebagai output yang langsung berguna. Mulai dari merancang alur input, menyusun proses analisis berbasis AI, hingga menyajikan hasil yang konsisten dan mudah dipahami user.

Lebih dari sekadar "bikin aplikasi AI", kamu akan paham cara mendesain pengalaman, bukan hanya menulis kode.