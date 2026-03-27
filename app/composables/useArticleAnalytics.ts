import type { ArticleExperimentVariant } from '~/composables/useArticleExperiments'

type AnalyticsEventType = 'view' | 'impression' | 'click'
type AnalyticsSource = 'detail' | 'listing' | 'related' | 'search'

interface AnalyticsPayload {
  event: AnalyticsEventType
  source: AnalyticsSource
  variant?: ArticleExperimentVariant
}

export function useArticleAnalytics() {
  const runtimeConfig = useRuntimeConfig()
  const isEnabled = runtimeConfig.public.articleAnalyticsEnabled

  async function track(slug: string, payload: AnalyticsPayload) {
    if (!isEnabled) {
      return
    }

    try {
      await $fetch(`/api/articles/analytics/${slug}`, {
        method: 'POST',
        body: payload,
      })
    } catch (error) {
      if (import.meta.dev) {
        console.error('Failed to track article analytics', error)
      }
    }
  }

  async function fetchStats(slug: string) {
    if (!isEnabled) {
      return null
    }

    try {
      return await $fetch<{
        views: number
        experiments: Record<ArticleExperimentVariant, { impressions: number, clicks: number }>
      }>(`/api/articles/analytics/${slug}`)
    } catch (error) {
      if (import.meta.dev) {
        console.error('Failed to fetch article analytics', error)
      }
      return null
    }
  }

  return {
    isEnabled,
    track,
    fetchStats,
  }
}

export async function trackOncePerSession(key: string, callback: () => Promise<void>) {
  if (!import.meta.client) {
    return false
  }

  const storageKey = `mvc:${key}`

  if (window.sessionStorage.getItem(storageKey)) {
    return false
  }

  window.sessionStorage.setItem(storageKey, '1')
  await callback()
  return true
}
