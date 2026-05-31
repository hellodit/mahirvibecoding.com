/**
 * Wrapper terpusat untuk Meta Pixel (lewat @nuxt/scripts registry `metaPixel`).
 *
 * `useScriptMetaPixel()` mengembalikan proxy yang aman dipanggil kapan saja:
 * sebelum skript termuat panggilan masuk antrian, di server menjadi no-op.
 * PageView awal sudah otomatis di-fire oleh registry saat init.
 *
 * @see https://scripts.nuxt.com/scripts/meta-pixel
 */

// Subset standard events yang relevan untuk funnel course ini.
type StandardEvent =
  | 'Lead'
  | 'Contact'
  | 'InitiateCheckout'
  | 'ViewContent'
  | 'CompleteRegistration'
  | 'Purchase'
  | 'PageView'

type EventProperties = Record<string, unknown>

export function useMetaPixel() {
  const { proxy } = useScriptMetaPixel()

  /** Standard event Meta (mis. Lead, Contact, InitiateCheckout). */
  function track(event: StandardEvent, properties?: EventProperties) {
    proxy.fbq('track', event, properties)
  }

  /** Custom event bebas-nama untuk aksi yang tidak punya standard event. */
  function trackCustom(event: string, properties?: EventProperties) {
    proxy.fbq('trackCustom', event, properties)
  }

  return { track, trackCustom }
}
