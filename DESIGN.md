# Design system — MahirVibeCoding

Dokumen ini menjelaskan token visual dan pola UI yang dipakai di situs. Sumber kebenaran untuk warna dan font ada di `tailwind.config.ts` dan modul `@nuxt/fonts` di `nuxt.config.ts`.

---

## Warna

Semua warna brand didefinisikan sebagai warna Tailwind custom (bukan palet default). Gunakan class seperti `bg-primary`, jangan menduplikasi hex di komponen.

| Token | Hex | Peran |
|--------|-----|--------|
| `text` | `#050315` | Teks utama (judul, body, ikon teks) |
| `background` | `#fbfbfe` | Latar halaman / section terang |
| `primary` | `#2E6B3B` | Aksi utama, link, label section, border aksen |
| `secondary` | `#dedcff` | Highlight blok (mis. span di hero), latar lembut ungu |
| `accent` | `#433bff` | Aksen tambahan (link khusus, badge); dipakai selektif |

### Opacity pada token

Tailwind mendukung opacity: `text-text/72`, `border-primary/10`, `bg-primary/5`, `hover:bg-primary/5`, dan seterusnya. Pola yang sudah dipakai di codebase:

- **Body sekunder:** `text-text/72` — paragraf pendukung
- **Meta / keterangan:** `text-text/65`, `text-text/45`, `text-text/75`
- **Border halus:** `border-primary/10`, `border-primary/15`, `border-primary/25`
- **Pemisah dekoratif:** `text-text/35`, `bg-primary/10`

### Latar putih pada kartu

Kartu dan panel memakai `bg-white` di atas `background` halaman, dengan `border-primary/10` dan `shadow-sm` bila perlu.

---

## Tipografi

| Aspek | Nilai |
|--------|--------|
| Font sans | **Plus Jakarta Sans** (Google Fonts via `@nuxt/fonts`) |
| Bobot | 400, 500, 600, 700, 800 |
| Stack fallback | `system-ui`, `-apple-system`, `sans-serif` |

Class umum:

- Judul hero: `text-4xl` → `md:text-6xl` / `lg:text-7xl`, `font-bold`, `tracking-tight`
- Judul halaman: `text-4xl` `md:text-5xl`, `font-bold`, `tracking-tight`
- Judul kartu: `text-xl` `font-bold` `leading-tight`
- Label uppercase kecil: `text-xs` `font-semibold` `uppercase` `tracking-[0.22em]`–`0.26em]`, warna `text-primary` atau `text-text/45`
- Paragraf: `text-base` / `md:text-lg`, `leading-relaxed` atau `leading-8`

---

## Radius, bayangan, border

| Pola | Contoh class |
|------|----------------|
| Kartu artikel / panel | `rounded-[28px]` atau `rounded-[32px]`, `border border-primary/10`, `shadow-sm` |
| Tombol solid / outline | `rounded-lg` atau `rounded-full` (pill filter/tag) |
| Transisi hover kartu | `transition duration-200`, `hover:-translate-y-1`, `hover:border-primary/25`, `hover:shadow-lg` |

---

## Tombol & link

- **Primer:** `bg-primary`, `text-white`, `font-semibold`, hover `opacity-90` atau setara.
- **Sekunder (outline):** `border-2 border-primary`, `text-primary`, `bg-transparent`, `hover:bg-primary/5`.
- **Link teks:** `text-primary`, `hover:text-text`, `font-semibold` bila sebagai navigasi kuat.

---

## Utilitas global (`app/assets/css/global.css`)

- **Scroll halus:** `html { scroll-behavior: smooth; }`
- **Reveal scroll:** class `reveal` + `revealed` (opacity + translateY), dengan modifier jeda `reveal-delay-1` … `reveal-delay-5` untuk stagger.

---

## Prinsip penggunaan

1. **Satu sumber token** — ubah palet di `tailwind.config.ts` agar seluruh UI ikut.
2. **Hindari hex arbitrer** di Vue/CSS kecuali untuk kasus sekali pakai yang belum punya token (idealnya tambahkan token jika dipakai ulang).
3. **Kontras** — teks utama `text-text` di atas `background` atau `bg-white`; jangan mengandalkan `accent` saja untuk teks panjang tanpa uji kontras.
4. **Primary = brand hijau** — CTA dan label section mengikat identitas visual; `secondary` untuk highlight lembut; `accent` untuk variasi tanpa menggantikan primary pada aksi utama.

---

## File terkait

| File | Isi |
|------|-----|
| `tailwind.config.ts` | `theme.extend.colors`, `fontFamily.sans` |
| `nuxt.config.ts` → `fonts.families` | Muatan font Plus Jakarta Sans |
| `app/assets/css/global.css` | Reveal, scroll behavior |
| `app/app.vue` | `text-text`, `bg-white` pada root layout |
