---
title: "Prompt Bagus Saja Tidak Cukup Tanpa Konteks Project"
description: "Menyempurnakan prompt saja kurang: Context > Prompt, tiga lapisan konteks agent, dan risiko keamanan bila AI tak paham codebase."
image: "/articles/images/tips-prompt-engineering-untuk-developer/cover.svg"
author: "Asdita"
publishedAt: "2026-03-14"
tags:
  - ai
  - prompt
  - workflow
  - engineering
draft: false
keywords: "prompt tidak cukup, konteks AI coding, context prompt engineering, Veracode AI vulnerability"
---

Kamu sudah menghabiskan waktu menyusun prompt yang detail. Kamu jelaskan fiturnya, teknologinya, bahkan edge case-nya. Tapi AI tetap menghasilkan kode yang generic, tidak sesuai dengan struktur project kamu, atau malah menggunakan pattern yang salah. Lalu kamu revisi promptnya, tambah detail lagi, generate ulang. Hasilnya sedikit lebih baik, tapi masih tidak tepat.

Siklus ini akan terus berulang kalau kamu fokus di hal yang salah.

## Konteks Lebih Penting dari Prompt

Kebanyakan developer menghabiskan energi untuk menyempurnakan prompt. Pendekatan itu tidak salah, tapi bukan faktor paling menentukan. Yang jauh lebih berpengaruh adalah **konteks yang dimiliki AI saat menerima instruksi**.

Prompt sederhana bisa menghasilkan kode berkualitas tinggi kalau AI sudah punya konteks yang kaya tentang project kamu. Sebaliknya, prompt yang sangat detail tetap bisa menghasilkan kode yang keliru kalau AI tidak memahami codebase-mu.

Ini prinsip yang disebut **Context > Prompt**.

Analoginya seperti ini: bayangkan kamu merekrut developer baru. Kalau kamu langsung kasih task tanpa onboarding, tanpa akses ke dokumentasi, tanpa tahu struktur project, hasilnya pasti tidak sesuai ekspektasi. Bukan karena developer-nya tidak kompeten, tapi karena dia tidak punya konteks yang cukup.

AI bekerja dengan cara yang sama persis.

## Tiga Lapisan Konteks

Dalam praktiknya, konteks yang dibutuhkan AI terdiri dari tiga lapisan:

**1. Project Context.** Informasi tentang struktur project secara keseluruhan: database schema, routes yang sudah terdaftar, packages yang dipakai, bahkan error terakhir yang muncul. Ini adalah konteks yang membuat AI tahu "project ini seperti apa" sebelum menulis satu baris kode pun.

**2. Task Context.** Informasi spesifik tentang fitur yang sedang dikerjakan. Bukan seluruh PRD, tapi bagian yang relevan dengan unit kerja saat ini. Siapa aktor yang terlibat, constraint apa yang berlaku, dan acceptance criteria yang harus dipenuhi.

**3. File Context.** File-file yang langsung relevan dengan task saat ini. Model yang akan dimodifikasi, controller yang terkait, view yang perlu diupdate.

Ketika ketiga lapisan ini tersedia, AI tidak perlu menebak. AI tahu persis apa yang kamu punya, apa yang kamu butuhkan, dan batasan apa yang harus dipatuhi.

## Studi Kasus: Veracode Menemukan 45% Kode AI Punya Vulnerability

Data dari **Veracode (2025)** menunjukkan bahwa 45% kode yang dihasilkan AI mengandung security vulnerability. Angka ini tinggi, tapi masuk akal kalau kita pikirkan. AI yang tidak punya konteks tentang arsitektur keamanan project kamu akan generate kode yang "secara teknis benar" tapi tidak mengikuti security pattern yang seharusnya.

Studi dari **Tenzai (Desember 2025)** yang menganalisis 15 aplikasi yang dibangun oleh 5 AI coding tools utama menemukan 69 vulnerability. 100% tidak punya CSRF protection. 100% mengandung SSRF vulnerability. 0% yang set security headers dengan benar.

Ini bukan masalah kemampuan AI. Ini masalah konteks. Kalau AI tidak tahu bahwa project kamu butuh validasi signature webhook, bahwa role-based access control harus dipasang di setiap endpoint, bahwa environment variable tidak boleh di-hardcode, maka AI tidak akan mengimplementasikan semua itu.

## Jangan Copy-Paste Seluruh Dokumen ke AI

Satu kesalahan lain yang umum: developer yang sudah punya dokumen perencanaan (PRD, flow brief, atau apapun namanya) langsung copy-paste seluruh isinya ke AI dan berharap mendapat aplikasi jadi dalam sekali prompt.

Ini juga tidak akan berhasil. Dokumen perencanaan adalah panduan, bukan instruksi eksekusi. Kalau kamu lempar semuanya sekaligus, AI justru kewalahan. Hasilnya mungkin terlihat lengkap di permukaan, tapi rapuh di dalamnya.

Pendekatan yang lebih efektif: pecah pekerjaanmu menjadi unit-unit kecil yang punya scope jelas. Setiap unit punya output yang bisa langsung di-test atau di-review. Saat mengerjakan satu unit, arahkan AI hanya ke konteks yang relevan untuk unit tersebut. Ini membuat AI tetap fokus dan hasilnya jauh lebih akurat.

## Cara Praktis Memberikan Konteks

Kamu tidak perlu menjelaskan segala sesuatu dalam prompt. Cukup arahkan AI ke sumber konteks yang tepat:

- **Mention file yang relevan.** Kalau kamu sedang mengerjakan fitur booking, arahkan AI ke model Booking, migration-nya, dan controller yang terkait.
- **Rujuk ke bagian dokumen yang sesuai.** Bukan seluruh PRD, tapi bagian spesifik yang berkaitan dengan unit kerja saat ini.
- **Sebutkan constraint yang tidak tertulis.** Hal-hal yang kamu tahu harus ada tapi belum terdokumentasi, misalnya "status completed tidak boleh diubah kembali" atau "customer tidak perlu login".

Dengan pendekatan ini, prompt kamu bisa tetap sederhana tapi hasilnya presisi. Kamu menghemat token, menghemat waktu revisi, dan yang paling penting: kode yang dihasilkan benar-benar sesuai dengan kebutuhan project.

## Berhenti Menyempurnakan Prompt, Mulai Perkaya Konteks

Kalau kamu masih terjebak di siklus "prompt ulang, generate ulang, revisi lagi", coba geser fokusmu. Bukan di prompt-nya. Tapi di konteks yang kamu berikan sebelum prompt itu dikirim.

AI yang punya konteks lengkap tentang project kamu akan menghasilkan kode yang jauh lebih baik, bahkan dengan prompt yang sederhana.

---

*Artikel ini diadaptasi dari buku **"Mahir Vibe Coding: Dari Ide ke Sistem yang Terstruktur"** yang membahas prinsip Context > Prompt dan workflow kolaborasi efektif dengan AI Coding Agent.*
