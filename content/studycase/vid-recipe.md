---
id: "SC-06"
title: "VidRecipe"
description: "Membantu user menghemat waktu dengan mengubah short video masak menjadi resep siap pakai yang jelas dan mudah diikuti."
image: ""
tools:
  - Gemini
  - Video Processing
  - Recipe Extraction
order: 6
status: draft
---

VidRecipe adalah study case aplikasi berbasis AI yang membantu user mendapatkan resep makanan dari short video. User cukup menempelkan URL video, lalu sistem akan menganalisis konten video untuk menghasilkan ringkasan resep, daftar bahan, dan langkah memasak yang relevan.

Study case ini cocok untuk memahami bagaimana AI digunakan dalam alur produk yang sederhana di sisi user, tetapi kuat di sisi proses. Fokusnya bukan hanya menerima link video, melainkan memastikan hasil resep tetap jelas, terstruktur, dan bisa langsung dipraktikkan.

## Alur Utama Aplikasi

Alur dimulai saat user menginput URL short video masakan ke dalam aplikasi. Setelah URL dikirim, sistem mengambil konteks dari video, lalu memprosesnya menggunakan Gemini untuk memahami masakan yang ditampilkan.

Hasil analisis kemudian disusun menjadi tiga bagian utama: nama atau ringkasan resep, daftar bahan yang dibutuhkan, dan langkah memasak secara berurutan. Dengan cara ini, user tidak perlu menonton ulang video berkali-kali hanya untuk mencatat resep.

## Fitur Utama

- Input URL short video sebagai sumber resep.
- Analisis konten video menggunakan Gemini.
- Ekstraksi otomatis nama hidangan dan konteks masakan.
- Generasi daftar bahan yang relevan berdasarkan isi video.
- Generasi langkah memasak yang lebih rapi, jelas, dan mudah diikuti.
- Output resep siap baca untuk kebutuhan memasak harian atau referensi konten.

## Fokus Pembelajaran

- Mendesain flow produk AI yang sederhana untuk user: input URL lalu menerima hasil terstruktur.
- Mengubah konten video yang tidak terstruktur menjadi informasi resep yang bisa digunakan.
- Menyusun prompt dan hasil AI agar bahan dan langkah tetap konsisten.
- Menangani perbedaan kualitas video dan informasi yang tidak selalu lengkap.
- Menjaga pengalaman user tetap cepat dan praktis meski proses analisis dilakukan oleh AI.

## Kenapa Study Case Ini Penting

Banyak konten masak di short video menarik, tetapi sering tidak memberikan resep secara lengkap. User akhirnya harus menebak bahan, menghentikan video berkali-kali, atau mencari referensi tambahan di tempat lain.

VidRecipe menjawab masalah ini dengan memanfaatkan Gemini untuk mengubah video menjadi resep yang lebih siap pakai. Study case ini memperlihatkan bagaimana AI bisa memberikan nilai nyata pada masalah sehari-hari dengan pengalaman pengguna yang sederhana.

## Output Akhir

Di akhir study case, kamu punya gambaran bagaimana membangun aplikasi AI yang mengambil data dari URL video lalu mengubahnya menjadi resep terstruktur. Mulai dari alur input, proses analisis berbasis Gemini, hingga penyajian hasil bahan dan cara masak yang mudah dipahami user.
