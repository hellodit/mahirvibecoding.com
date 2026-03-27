export const ARTICLE_PAGE_SIZE = 10

export interface ArticleTocLink {
  id: string
  text: string
  depth: number
  children?: ArticleTocLink[]
}

export interface ArticleRecord {
  path: string
  title: string
  description: string
  image: string
  author: string
  publishedAt: string
  updatedAt?: string
  tags: string[]
  draft: boolean
  keywords?: string
  body?: unknown
}

export interface ArticlePaginationResult {
  items: ArticleRecord[]
  totalItems: number
  totalPages: number
  currentPage: number
  pageSize: number
}

export interface ArticleReadingStats {
  minutes: number
  words: number
}

export interface ArticleNavigationLink {
  path: string
  title: string
  description?: string
}

const contentQueryCollection = queryCollection as unknown as (collection: 'articles') => any
const contentQueryCollectionItemSurroundings = queryCollectionItemSurroundings as unknown as (collection: 'articles', path: string) => any

export function fetchPublishedArticles() {
  return contentQueryCollection('articles')
    .where('draft', '=', false)
    .order('publishedAt', 'DESC')
    .all() as Promise<ArticleRecord[]>
}

export function fetchArticleBySlug(slug: string) {
  return contentQueryCollection('articles')
    .where('draft', '=', false)
    .path(`/articles/${slug}`)
    .first() as Promise<ArticleRecord | null>
}

export async function fetchArticlesByTag(tag: string) {
  const normalizedTag = normalizeTag(tag)
  const articles = await fetchPublishedArticles()
  return articles.filter(article => article.tags.some(articleTag => articleTag === normalizedTag))
}

export async function fetchPaginatedArticles(page: number, tag?: string) {
  const sourceArticles = tag ? await fetchArticlesByTag(tag) : await fetchPublishedArticles()
  return paginateArticles(sourceArticles, page)
}

export async function fetchAvailableTags() {
  const articles = await fetchPublishedArticles()
  return Array.from(new Set(articles.flatMap(article => article.tags))).sort((left, right) => left.localeCompare(right))
}

export async function fetchRelatedArticles(article: ArticleRecord, limit = 3) {
  const articles = await fetchPublishedArticles()

  return articles
    .filter(candidate => candidate.path !== article.path)
    .map(candidate => ({
      article: candidate,
      sharedTags: candidate.tags.filter(tag => article.tags.includes(tag)).length,
    }))
    .filter(candidate => candidate.sharedTags > 0)
    .sort((left, right) => {
      if (right.sharedTags !== left.sharedTags) {
        return right.sharedTags - left.sharedTags
      }

      return new Date(right.article.publishedAt).getTime() - new Date(left.article.publishedAt).getTime()
    })
    .slice(0, limit)
    .map(candidate => candidate.article)
}

export async function fetchArticleSurroundings(path: string) {
  const items = await contentQueryCollectionItemSurroundings('articles', path)
    .where('draft', '=', false)
    .order('publishedAt', 'DESC') as Array<Record<string, unknown> | null>

  return items.map(item => normalizeNavigationItem(item))
}

export function paginateArticles(articles: ArticleRecord[], page: number, pageSize = ARTICLE_PAGE_SIZE): ArticlePaginationResult {
  const totalItems = articles.length
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize))
  const currentPage = clampPage(page, totalPages)
  const start = (currentPage - 1) * pageSize

  return {
    items: articles.slice(start, start + pageSize),
    totalItems,
    totalPages,
    currentPage,
    pageSize,
  }
}

export function clampPage(page: number, totalPages: number) {
  if (!Number.isFinite(page) || page < 1) {
    return 1
  }

  return Math.min(Math.trunc(page), totalPages)
}

export function calculateReadingStats(article: ArticleRecord): ArticleReadingStats {
  const fragments: string[] = []
  collectReadableText(article.body, fragments)

  const text = fragments.join(' ').trim()
  const words = text ? (text.match(/\b[\p{L}\p{N}][\p{L}\p{N}'’-]*\b/gu)?.length ?? 0) : 0

  return {
    words,
    minutes: Math.max(1, Math.ceil(words / 200)),
  }
}

export function formatArticleDate(value: string) {
  return new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(value))
}

export function normalizeTag(tag: string) {
  return decodeURIComponent(tag).trim().toLowerCase()
}

export function getTagPath(tag: string) {
  return `/articles/tag/${encodeURIComponent(tag)}`
}

function normalizeNavigationItem(item: Record<string, unknown> | null): ArticleNavigationLink | null {
  if (!item) {
    return null
  }

  const navigation = typeof item.navigation === 'object' && item.navigation ? item.navigation as Record<string, unknown> : null
  const path = readString(item.path) ?? readString(item._path)
  const title = readString(item.title) ?? readString(navigation?.title)

  if (!path || !title) {
    return null
  }

  return {
    path,
    title,
    description: readString(item.description) ?? readString(navigation?.description),
  }
}

function readString(value: unknown) {
  return typeof value === 'string' ? value : undefined
}

function collectReadableText(value: unknown, fragments: string[]) {
  if (typeof value === 'string') {
    const text = value.trim()

    if (isReadableText(text)) {
      fragments.push(text)
    }

    return
  }

  if (Array.isArray(value)) {
    for (const item of value) {
      collectReadableText(item, fragments)
    }

    return
  }

  if (value && typeof value === 'object') {
    for (const entry of Object.values(value)) {
      collectReadableText(entry, fragments)
    }
  }
}

function isReadableText(value: string) {
  if (!value) {
    return false
  }

  if (value.startsWith('/')) {
    return false
  }

  if (/^(minimark|p|a|img|ul|ol|li|pre|code|blockquote|table|thead|tbody|tr|td|th|strong|em|h[1-6])$/i.test(value)) {
    return false
  }

  if (/^[_a-z0-9-]+$/i.test(value) && value === value.toLowerCase()) {
    return false
  }

  return /[\p{L}\p{N}]/u.test(value)
}
