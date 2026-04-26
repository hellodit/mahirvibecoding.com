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

export function fetchStudyCases() {
  return contentQueryStudyCaseCollection('studycase')
    .order('order', 'ASC')
    .all() as Promise<StudyCaseRecord[]>
}

export async function fetchStudyCaseBySlug(slug: string) {
  const studyCases = await fetchStudyCases()
  const studyCase = studyCases.find(item => item.path === `/studycase/${slug}` || item.path.endsWith(`/${slug}`))

  if (!studyCase || studyCase.status === 'draft') {
    return null
  }

  return studyCase
}
