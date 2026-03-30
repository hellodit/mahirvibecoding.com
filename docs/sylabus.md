# Mahir Vibe Coding: Dari Ide ke Sistem yang Terstruktur

Di kelas ini, kamu tidak hanya belajar cara memakai AI untuk generate kode. Kamu akan memahami **mengapa sebagian besar proyek Vibe Coding gagal di tengah jalan** — dan bagaimana menghindarinya dengan pendekatan yang terstruktur.

Kita akan membahas seluruh alur kerja dari planning sampai deployment — menyusun PRD, memecah jadi unit kerja, mendesain schema, berkolaborasi dengan AI saat development, sampai deploy ke production. Semua ini diilustrasikan dengan satu studi kasus nyata: **Restaurant Booking & Ordering System**.

### Key Point
- **Pergeseran Peran Software Engineer:** Fokus bukan lagi pada sintaksis, tapi pada manajemen konteks, arahan ke AI, dan kontrol kualitas hasil — memahami risiko halusinasi AI, loss of control, dan degradasi arsitektur.
- **Planning Berbasis PRD:** Mengubah ide kasar menjadi requirement yang jelas sebelum development — problem statement, target user, MVP scope, dan constraints — agar output AI spesifik dan relevan, bukan generic.
- **Unit Kerja & Flow Brief:** Memecah PRD menjadi potongan kerja terkecil yang bisa dieksekusi dalam satu sesi coding, lengkap dengan Flow Brief per flow sebagai panduan eksekusi.
- **Design Sebelum Implementasi:** Menyusun entitas, relasi, dan database schema secara manual sebelum meminta AI generate DDL — agar arsitektur tetap scalable, konsisten, dan mudah di-maintain.
- **Kolaborasi Terstruktur dengan AI:** Memahami area yang cocok untuk AI (UI, helper, unit test) dan area yang harus tetap dikendalikan developer (arsitektur, keamanan, boundary bisnis).
- **Eksekusi Konsisten:** Setiap unit dikerjakan dengan pola yang sama — convert UI mockup dulu, baru implementasi fungsionalitas — supaya hasilnya bisa di-review dan di-rollback per unit.

### Target Audiens
- **Developer yang baru mulai Vibe Coding** dan ingin memahami kenapa proyek mereka sering tidak selesai atau hasilnya tidak sesuai ekspektasi.
- **Backend / Fullstack Developer** yang ingin memanfaatkan AI Coding Agent secara lebih terstruktur tanpa kehilangan kendali atas arsitektur dan kualitas kode.
- **Freelancer & Web Developer** yang ingin membangun fondasi yang kuat sebelum masuk ke fase development bersama AI.

### Daftar Materi

| Video | Isi Materi | Tipe | Kategori |
|-------|------------|------|----------|
| Pergeseran Paradigma Software Engineering | 1. Pergeseran fokus dari sintaksis ke manajemen konteks dan desain sistem<br>2. Tiga risiko AI Coding Agent: halusinasi, loss of control, degradasi arsitektur<br>3. Tiga pilar strategi kolaborasi dengan AI: Planning, Development, Testing & Deployment | Free | Teori |
| Kesalahan Umum Vibe Coding & Apa Itu PRD | 1. Apa yang terjadi ketika kita prompt dengan ide kasar — output generic dan tidak relevan<br>2. Ciri-ciri output AI yang tidak sesuai kebutuhan spesifik<br>3. Apa itu PRD dan perannya sebagai fondasi sebelum prompting | Free | Teori |
| Menyusun PRD dari Nol dengan Bantuan AI | 1. Struktur PRD minimal: Problem Statement, Target User, Current Workaround, Proposed Solution, Core Features MVP, Out of Scope, Constraints<br>2. Contoh PRD lengkap: Restaurant Booking & Ordering System<br>3. Enam pertanyaan untuk menggali kebutuhan sebelum menyusun PRD bersama AI | Free | Teori |
| Memecah PRD Menjadi Unit Kerja | 1. Tiga langkah memecah PRD: identifikasi dependency, urutkan berdasarkan prasyarat, tentukan ukuran realistis per unit<br>2. Kriteria unit selesai: bisa dieksekusi, bisa diverifikasi, tidak merusak unit sebelumnya<br>3. Contoh: memecah PRD Restaurant Booking jadi Pre-Flow, Flow 1–3, dan Post-Flow | Free | Teori |
| Generate Flow Brief per Flow | 1. Apa itu Flow Brief dan bedanya dengan PRD<br>2. Cara generate Flow Brief dari PRD menggunakan AI<br>3. Contoh Flow Brief lengkap untuk Flow 1: Customer Booking | Free | Teori + Praktek |
| Prinsip Mendesain Database Schema | 1. Database schema sebagai kontrak antara bisnis, aplikasi, dan developer<br>2. Prinsip mulai dari schema sederhana sesuai MVP scope<br>3. Naming convention yang konsisten: snake_case, plural table, FK pattern, status string | Free | Teori |
| Mendesain Database Schema dengan Bantuan AI | 1. Step 1: Draft entitas dan relasi secara manual tanpa AI<br>2. Step 2: Menulis prompt yang efektif untuk AI generate DDL lengkap<br>3. Step 3: Review dan refinement — relasi, tipe data, constraint, dan index | Free | Teori + Praktek |
| Schema & Migration: Dari DDL ke Laravel | 1. Pendekatan incremental: mulai dari Pre-Flow, tambah tabel per flow<br>2. Keputusan desain: JSON snapshot, tabel transaksi terpisah, composite index<br>3. Schema lengkap Restaurant Booking & Ordering System | Premium | Teori + Praktek |
| Menentukan AI Coding Agent & Tech Stack | 1. Tiga kriteria evaluasi AI Coding Agent: MCP support, agentic capabilities, pricing<br>2. Menentukan tech stack — dokumentasi dan kompatibilitas AI sebagai faktor baru<br>3. Alasan memilih Laravel dan Laravel Boost | Premium | Teori |
| Setup Project & Mempersenjatai AI dengan Konteks | 1. Setup project secara manual: install Laravel, Git, database, IDE Helper<br>2. Tiga komponen konteks AI: AI Guidelines, Agent Skills, MCP Server<br>3. Prinsip Context > Prompt — konteks yang tepat lebih penting dari prompt yang sempurna | Premium | Teori + Praktek |
| Dari Flow Brief ke UI Mockup | 1. Workflow tiga langkah: mockup, design system, panduan generate kode<br>2. Kriteria halaman yang perlu di-mockup: interaksi kompleks, traffic tinggi, design-critical<br>3. Tools: v0, Bolt, Lovable, Google Stitch — dan cara menulis prompt yang efektif | Premium | Teori + Praktek |
| Eksekusi Pre-Flow: Auth & Master Data Admin | 1. Pola kerja: convert UI mockup ke Blade, baru implementasi fungsionalitas<br>2. Empat unit kerja Pre-Flow: auth admin, CRUD kategori, CRUD menu, manajemen meja<br>3. Fondasi data: migration dan model secara manual sebelum coding fitur | Premium | Praktek |
| Eksekusi Flow 1: Customer Booking (Unit 1–2) | 1. Unit 1: Halaman katalog menu — tampilan kategori, keranjang belanja, session management<br>2. Unit 2: Form booking — validasi ketersediaan meja, SELECT FOR UPDATE, race condition handling<br>3. Generate booking_reference secara unik dan atomik | Premium | Praktek |
| Eksekusi Flow 1: Customer Booking (Unit 3–4) | 1. Unit 3: Halaman status booking — halaman publik untuk tracking, countdown timer, keamanan data<br>2. Unit 4: Integrasi Midtrans — Midtrans Snap (tanpa UI custom), webhook handler, validasi signature<br>3. Idempotency dan state machine booking | Premium | Praktek |
| Eksekusi Flow 2: Admin Approval | 1. Satu unit kerja: approval/reject booking dan update status<br>2. State machine: hanya status tertentu yang boleh berubah ke status tertentu<br>3. Daftar booking admin dengan filter dan detail lengkap | Premium | Praktek |
| Eksekusi Flow 3: Customer Tracking | 1. Satu unit kerja: halaman tracking status booking (read-only, tanpa login)<br>2. Lookup booking berdasarkan booking_reference<br>3. Keamanan: error message generic, tidak ekspos data sensitif | Premium | Praktek |
| Eksekusi Post-Flow: Notifikasi & Automasi | 1. Unit 1: Notifikasi WhatsApp otomatis saat status berubah + webhook handler Midtrans<br>2. Unit 2: Scheduler auto-cancel expired booking — query, atomicity, race condition handling<br>3. Fondasi data: kolom expired_at, paid_at, webhook_received_at, dan composite index | Premium | Praktek |
| Deployment: Keamanan & Code Review | 1. Checklist keamanan: .env, hardcoded credentials, file konfigurasi, storage<br>2. Code review dengan AI — CodeRabbit dan PR-Agent sebagai second opinion<br>3. Setup PR-Agent dengan Gemini: GitHub Secrets, workflow file, auto tools | Premium | Teori + Praktek |
