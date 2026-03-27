---
title: "Prompt Engineering untuk Developer"
description: "Tips menulis prompt yang lebih operasional untuk coding agent, supaya output lebih dekat ke implementasi yang bisa dipakai."
titleVariant: "Prompt yang Lebih Operasional"
descriptionVariant: "Checklist prompt untuk coding agent agar output lebih dekat ke diff yang kecil, jelas, dan siap direview."
image: "/articles/images/tips-prompt-engineering-untuk-developer/cover.svg"
author: "Asdita"
publishedAt: "2026-03-20"
tags:
  - prompt-engineering
  - ai
  - developer
draft: false
keywords: "prompt engineering developer, prompt coding agent, AI workflow"
---

Prompt engineering untuk developer bukan soal mencari kalimat ajaib. Tujuannya adalah membuat agent memahami konteks kerja, batas perubahan, dan standar output yang kamu harapkan.

## Elemen prompt yang paling penting

### Outcome

Sebutkan hasil akhir yang diinginkan dengan jelas. Bukan "perbaiki halaman ini", tetapi "buat listing artikel dengan card, SEO meta, dan empty state".

### Constraint

Tuliskan constraint yang tidak boleh dilanggar: framework, package manager, style system, file yang boleh diubah, dan batas scope phase saat ini.

### Verification

Prompt yang baik selalu menyebut cara memverifikasi hasil, misalnya `nuxi typecheck`, build, atau skenario manual tertentu.

## Format brief yang paling sering berhasil

Saya biasanya memakai struktur singkat seperti ini:

::code-group
```md
Goal:
- Tambah tag page /articles/tag/:tag

Constraints:
- Tetap pakai Nuxt Content
- Jangan sentuh landing page
```

```txt
Acceptance criteria:
- Tag page tampil untuk tag valid
- Artikel non-draft saja
- SEO meta dan canonical sesuai
```
::

1. Goal
2. Constraints
3. Files or areas involved
4. Acceptance criteria
5. Verification

Format ini sederhana, tetapi cukup untuk menurunkan jumlah asumsi yang dibuat agent.

## Hal yang perlu dihindari

- Memberi banyak objective yang tidak saling terkait dalam satu prompt.
- Tidak menyebutkan fase atau scope yang sedang dikerjakan.
- Membiarkan agent memilih arsitektur sendiri padahal codebase sudah punya pola.

Kalau kamu ingin memahami konteks penggunaan AI yang lebih luas, artikel [apa itu vibe coding](/articles/apa-itu-vibe-coding) memberi gambaran framing kerjanya.

## Penutup

Prompt yang baik bukan yang terdengar pintar, tetapi yang bisa diterjemahkan menjadi diff yang kecil, jelas, dan mudah divalidasi.
