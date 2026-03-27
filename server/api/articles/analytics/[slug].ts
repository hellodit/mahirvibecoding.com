type ExperimentVariant = 'control' | 'variant'
type AnalyticsEvent = 'view' | 'impression' | 'click'
type AnalyticsPayload = {
  event?: AnalyticsEvent
  source?: string
  variant?: ExperimentVariant
}

type AnalyticsRecord = {
  views: number
  experiments: Record<ExperimentVariant, { impressions: number, clicks: number }>
}

export default eventHandler(async (event) => {
  const slug = event.context.params?.slug

  if (!slug) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing article slug',
    })
  }

  const storage = useStorage('data')
  const key = `articles:analytics:${slug}`
  const existing = await storage.getItem<AnalyticsRecord>(key)
  const record = existing ?? createEmptyRecord()

  if (event.method === 'GET') {
    return record
  }

  if (event.method !== 'POST') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Method not allowed',
    })
  }

  const body = await readBody<AnalyticsPayload>(event)
  const variant = body.variant === 'variant' ? 'variant' : 'control'

  if (body.event === 'view') {
    record.views += 1
  }

  if (body.event === 'impression') {
    record.experiments[variant].impressions += 1
  }

  if (body.event === 'click') {
    record.experiments[variant].clicks += 1
  }

  await storage.setItem(key, record)

  return record
})

function createEmptyRecord(): AnalyticsRecord {
  return {
    views: 0,
    experiments: {
      control: {
        impressions: 0,
        clicks: 0,
      },
      variant: {
        impressions: 0,
        clicks: 0,
      },
    },
  }
}
