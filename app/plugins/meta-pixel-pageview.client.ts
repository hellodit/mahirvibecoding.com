/**
 * Fire Meta Pixel `PageView` saat path halaman berubah (navigasi SPA).
 *
 * Registry `metaPixel` hanya men-track PageView sekali saat init (load awal).
 * Saat user pindah halaman client-side (mis. /articles -> /studycase),
 * tidak ada PageView baru — plugin ini menutup gap tersebut.
 *
 * PENTING: hanya fire kalau `to.path !== from.path`. Tanpa guard ini, setiap
 * klik anchor hash (mis. /#pricing, /#faq, /#curriculum yang bertebaran di
 * NavBar/Hero/CTA) ikut memicu PageView untuk perubahan hash/query pada path
 * yang sama — bikin PageView ke-spam. Guard ini juga mencegah double-count
 * dengan PageView awal dari registry (load awal `to.path === from.path`).
 */
export default defineNuxtPlugin(() => {
  const router = useRouter()
  const { track } = useMetaPixel()

  // Simpan unregister-nya; saat HMR me-reload plugin, hook lama dilepas dulu
  // supaya tidak menumpuk dan menembakkan PageView berkali-kali per navigasi.
  const stop = router.afterEach((to, from) => {
    if (to.path !== from.path) {
      track('PageView')
    }
  })

  if (import.meta.hot) {
    import.meta.hot.dispose(() => stop())
  }
})
