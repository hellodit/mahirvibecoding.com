---
id: "SC-05"
title: "Dapur Nabilah"
description: "Web booking restoran dengan reservasi meja, pemesanan menu, pembayaran Midtrans, notifikasi WhatsApp, dan dashboard admin operasional."
image: "/studycases/dapur-nabilah-thumbnail.png"
videoId: "X46ydl2oZ_c"
gallery:
  - src: "/studycases/dapur-nabilah-3.png"
    alt: "Preview source code Laravel 13 web booking restaurant dengan Midtrans dan WhatsApp"
  - src: "/studycases/dapur-nabilah-1.png"
    alt: "Microsite untuk pesan makanan dan reservasi meja Dapur Nabilah"
  - src: "/studycases/dapur-nabilah-2.png"
    alt: "Admin area untuk mengelola pesanan, menu, customer, dan meja Dapur Nabilah"
tools:
  - Laravel
  - Livewire
  - Midtrans
  - WhatsApp Notification
order: 1
status: published
---

Dapur Nabilah adalah study case aplikasi booking restoran berbasis Laravel. Aplikasi ini dirancang untuk membantu restoran menampilkan menu, menerima reservasi meja, mengelola pemesanan makanan, memproses pembayaran online, dan mengirim notifikasi otomatis ke pelanggan.

Study case ini cocok untuk memahami bagaimana sebuah sistem restoran modern bekerja dari sisi pelanggan dan admin. Fokusnya bukan hanya membuat halaman booking, tetapi membangun alur yang lengkap: dari user memilih jadwal, melakukan checkout, membayar melalui payment gateway, sampai admin memantau status reservasi.

## Alur Utama Aplikasi

Alur pelanggan dimulai saat mereka membuka aplikasi, melihat menu restoran, memilih meja dan waktu reservasi, lalu menambahkan pesanan makanan jika diperlukan. Setelah itu pelanggan melakukan checkout, membayar melalui Midtrans, dan menerima notifikasi WhatsApp sebagai konfirmasi.

Di sisi admin, sistem membantu mengelola data menu, reservasi, status pembayaran, pesanan pelanggan, dan operasional restoran secara lebih terstruktur. Admin tidak perlu lagi memantau semuanya secara manual karena status transaksi dapat diperbarui mengikuti proses pembayaran.

## Fitur Utama

- Menampilkan daftar menu restoran secara online.
- Reservasi meja berdasarkan tanggal dan waktu kedatangan.
- Pemesanan makanan sebagai bagian dari proses booking.
- Checkout dan pembayaran online menggunakan Midtrans Snap.
- Webhook Midtrans untuk memperbarui status transaksi secara otomatis.
- Notifikasi WhatsApp untuk konfirmasi reservasi, update status pesanan, dan reminder kedatangan.
- Dashboard admin untuk mengelola menu, reservasi, pesanan, transaksi, dan operasional restoran.

## Fokus Pembelajaran

- Mendesain flow booking restoran dari kebutuhan bisnis nyata.
- Memisahkan proses reservasi, pesanan, pembayaran, dan notifikasi agar mudah dipahami.
- Mengintegrasikan payment gateway Midtrans ke aplikasi Laravel.
- Menangani callback atau webhook pembayaran agar status transaksi tetap sinkron.
- Mengirim notifikasi WhatsApp sebagai bagian dari customer experience.
- Membuat admin panel yang membantu operasional restoran berjalan lebih rapi.

## Kenapa Study Case Ini Penting

Booking restoran terlihat sederhana di permukaan, tetapi di dalamnya ada banyak proses yang saling terhubung. Sistem harus menjaga ketersediaan meja, mencatat pesanan, menghitung total pembayaran, mengirim data transaksi ke Midtrans, menerima update pembayaran, lalu memberi tahu pelanggan melalui WhatsApp.

Dengan membedah study case ini, kamu bisa belajar bagaimana AI Coding Agent digunakan untuk mempercepat implementasi tanpa mengabaikan alur bisnis, edge case, dan integrasi eksternal yang penting.

## Output Akhir

Di akhir study case, kamu punya gambaran lengkap bagaimana membangun aplikasi booking restoran yang lebih siap dipakai: punya flow pelanggan yang jelas, admin dashboard untuk operasional, integrasi pembayaran online, dan notifikasi otomatis untuk meningkatkan kepercayaan pelanggan.
