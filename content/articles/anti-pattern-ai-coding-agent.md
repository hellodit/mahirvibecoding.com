---
title: "Anti-Pattern AI Coding Agent"
description: "Beberapa pola kerja yang terlihat cepat saat memakai coding agent, tetapi biasanya berakhir dengan diff yang sulit direview."
image: "/articles/images/apa-itu-vibe-coding/cover.svg"
author: "Asdita"
publishedAt: "2026-03-19"
tags:
  - ai
  - workflow
  - engineering
draft: false
keywords: "anti pattern AI coding agent, workflow AI developer"
---

AI coding agent paling sering gagal bukan karena modelnya terlalu lemah, tetapi karena engineer memberi scope yang terlalu luas sejak awal.

## Tanda paling umum

- Satu prompt meminta implementasi end-to-end.
- Tidak ada batas file atau modul yang boleh disentuh.
- Review baru dilakukan setelah diff terlalu besar untuk dibaca.

## Cara menghindarinya

Gunakan task yang kecil, tetapkan acceptance criteria, dan paksa hasilnya masuk ke jalur verifikasi seperti typecheck atau build.
