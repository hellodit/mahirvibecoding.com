# MahirVibeCoding

Landing page statis berbasis Nuxt 4.

## Setup

Install dependencies dengan Bun:

```bash
bun install
```

## Development

Jalankan dev server di `http://localhost:3000`:

```bash
bun run dev
```

## Build dan Preview

Build production:

```bash
bun run build
```

Preview hasil build:

```bash
bun run preview
```

## Analytics (GA4 + Meta Pixel)

Isi env berikut (lihat `.env.example`):

```bash
NUXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NUXT_PUBLIC_META_PIXEL_ID=000000000000000
```

Catatan:
- Jika ID masih placeholder/kosong, script analytics tidak akan diaktifkan.
- Setelah ID valid diisi, redeploy agar konfigurasi aktif di production.

### Verifikasi Tracking

- **GA4**: buka GA DebugView atau Realtime, lalu cek event `page_view` saat buka halaman dan saat pindah route.
- **Meta Pixel**: gunakan Meta Pixel Helper dan pastikan event `PageView` muncul saat load halaman dan navigasi route.
