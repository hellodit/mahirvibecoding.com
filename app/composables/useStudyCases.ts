export interface StudyCaseRecord {
  path: string
  id: string
  title: string
  description: string
  image: string
  videoId?: string
  gallery: Array<{
    src: string
    alt: string
  }>
  tools: string[]
  order: number
  status: 'draft' | 'published'
  body?: unknown
}

const contentQueryStudyCaseCollection = queryCollection as unknown as (collection: 'studycase') => any

function toStudyCaseSlug(raw: { path?: string, stem?: string }) {
  const candidate = raw.path ?? raw.stem ?? ''
  const segments = candidate.split('/').filter(Boolean)
  return segments.at(-1) ?? ''
}

function normalizeStudyCasePath(raw: { path?: string, stem?: string }) {
  const slug = toStudyCaseSlug(raw)
  return slug ? `/studycase/${slug}` : '/studycase'
}

export async function fetchStudyCases() {
  const records = (await contentQueryStudyCaseCollection('studycase')
    .order('order', 'ASC')
    .all()) as Array<StudyCaseRecord & { stem?: string }>

  return records.map(record => ({
    ...record,
    path: normalizeStudyCasePath(record),
  }))
}

export async function fetchStudyCaseBySlug(slug: string) {
  const studyCases = await fetchStudyCases()
  const studyCase = studyCases.find(item => item.path === `/studycase/${slug}`)

  if (!studyCase || studyCase.status === 'draft') {
    return null
  }

  return studyCase
}
