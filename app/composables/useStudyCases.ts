export interface StudyCaseRecord {
  path: string
  id: string
  title: string
  description: string
  image: string
  tools: string[]
  order: number
  draft: boolean
  body?: unknown
}

const contentQueryStudyCaseCollection = queryCollection as unknown as (collection: 'studycase') => any

export function fetchPublishedStudyCases() {
  return contentQueryStudyCaseCollection('studycase')
    .where('draft', '=', false)
    .order('order', 'ASC')
    .all() as Promise<StudyCaseRecord[]>
}

export function fetchStudyCaseBySlug(slug: string) {
  return contentQueryStudyCaseCollection('studycase')
    .where('draft', '=', false)
    .path(`/studycase/${slug}`)
    .first() as Promise<StudyCaseRecord | null>
}
