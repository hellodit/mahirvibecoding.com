---
title: "Bukan Developer, Hanya Penonton di Project Sendiri"
description: "Risiko AI tulis kode tanpa review: disaster produksi, AI spaghetti, dan beda vibe coding vs engineering ber-AI."
image: "/articles/images/apa-itu-vibe-coding/cover.svg"
author: "Asdita"
publishedAt: "2026-03-12"
tags:
  - ai
  - workflow
  - engineering
  - vibe-coding
draft: false
keywords: "vibe coding penonton, AI spaghetti, review kode AI, loss of control developer"
---

Ada satu momen yang familiar bagi developer yang sering pakai AI coding agent. Kamu minta AI buatkan fitur. AI generate ratusan baris kode. Kamu lihat sekilas, terlihat oke, lalu approve. Besoknya ada bug di production. Kamu buka kodenya dan sadar: kamu tidak paham apa yang terjadi di situ.

Ini bukan cerita satu-dua orang. Sebuah survei dari **Final Round AI (Agustus 2025)** terhadap 18 CTO menemukan bahwa **16 di antaranya melaporkan production disaster yang disebabkan langsung oleh kode AI**. Bukan kode yang ditulis manual, tapi kode yang di-generate AI dan lolos review karena "terlihat benar".

## Tiga Risiko yang Sering Diabaikan

Saat AI bisa memproduksi ribuan baris kode dalam hitungan detik, ada tiga risiko yang jarang dibicarakan:

**1. Halusinasi yang terlihat meyakinkan.** AI sering memberikan solusi yang mengikuti standar sintaksis dengan sempurna, tapi secara fungsional salah. Bisa jadi menggunakan library yang sudah usang, atau bahkan library yang tidak pernah ada. Fenomena ini sudah melahirkan istilah baru: **slopsquatting**, di mana attacker mendaftarkan package berbahaya dengan nama yang sering dihalusinasikan oleh LLM.

**2. Kehilangan kendali (loss of control).** Ketika AI generate fungsi 50 baris dalam hitungan detik, kamu mungkin memverifikasi bahwa kodenya "terlihat masuk akal" lalu lanjut. Tapi kamu tidak benar-benar memahami logic-nya, edge case-nya, atau dependency-nya. Lama-kelamaan, kamu jadi orang asing di codebase sendiri.

**3. Degradasi arsitektur.** Data dari **CodeRabbit (Desember 2025)** yang menganalisis lebih dari 10 juta pull request menunjukkan bahwa kode yang di-co-author AI mengandung **1.7x lebih banyak major issues**, **2.25x lebih banyak bug di business logic**, dan **2.74x lebih tinggi security vulnerability**. Kode AI cenderung bersifat atomik. Menyelesaikan masalah saat ini tanpa mempertimbangkan skalabilitas jangka panjang.

## "AI Spaghetti" Itu Nyata

Addy Osmani dari Google Chrome menulis artikel *"Vibe Coding is Not the Same as AI-Assisted Engineering"* yang membedakan dua pendekatan ini secara tegas.

Vibe coding adalah ketika kamu menyerahkan semua keputusan ke AI dan berharap hasilnya bagus. AI-assisted engineering adalah ketika kamu tetap memegang kendali atas arsitektur, keputusan bisnis, dan keamanan, lalu memanfaatkan AI untuk mempercepat bagian yang repetitif.

Codebase yang dibangun dengan vibe coding murni biasanya punya ciri khas: lapisan demi lapisan style yang berbeda. Sebagian pakai callback, sebagian promise, sebagian async/await. Tidak ada konsistensi. Developer menyebut ini "AI spaghetti", kode yang secara fungsional jalan tapi tidak mungkin di-maintain.

Brendan Humphreys, CTO Canva, menegaskan: *"No, you won't be vibe coding your way to production. Not if you prioritize quality, safety, security and maintainability at scale."*

## Peran Developer Tidak Hilang, Tapi Bergeser

Paradigma fundamental sedang berubah. Fokus utama developer tidak lagi pada sintaksis dan menulis kode baris demi baris. Fokusnya bergeser ke **manajemen konteks dan desain sistem**. Peran kita sekarang adalah memastikan AI memiliki pemahaman ruang lingkup yang tepat agar memberikan respons yang presisi.

Dalam praktiknya, ini berarti ada area yang memang cocok untuk AI dan ada area yang harus tetap kamu kendalikan:

**Serahkan ke AI:** UI component, helper function, unit test, layout halaman. Ini area di mana kesalahan langsung terlihat dan mudah diperbaiki.

**Tetap kamu pegang:** Arsitektur dan struktur project, boundary bisnis dan aturan domain, keputusan keamanan, dan integrasi antar komponen. Ini area di mana kesalahan kecil bisa berdampak besar dan sulit dilacak.

Pembagian ini bukan soal AI tidak mampu. Ini soal risiko dan kontrol. Simon Willison, co-creator Django, pernah bilang: *"If an LLM wrote every line but you reviewed, tested, and understood everything, that's not vibe coding. That's using an LLM as a typing assistant."* Dan memang begitulah seharusnya.

## Ambil Kembali Kendali

Kalau kamu merasa sudah terlalu banyak menyerahkan keputusan ke AI dan mulai kehilangan pemahaman tentang codebase sendiri, itu tanda bahwa kamu perlu mengubah cara berkolaborasi.

AI itu alat bantu yang sangat powerful. Tapi kualitas produk akhir tetap sepenuhnya tanggung jawab kamu sebagai developer. Yang membedakan developer yang berhasil memanfaatkan AI dan yang justru tenggelam karenanya adalah satu hal: **seberapa matang dia dalam merancang logika dan memberikan arahan yang tepat**.

---

*Artikel ini diadaptasi dari buku **"Mahir Vibe Coding: Dari Ide ke Sistem yang Terstruktur"** yang membahas secara lengkap cara berkolaborasi dengan AI tanpa kehilangan kendali atas arsitektur dan kualitas kode.*
