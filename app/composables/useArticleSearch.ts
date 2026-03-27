import type { ArticleSearchSection } from '~/composables/useArticles'
import type { ArticleExperimentVariant } from '~/composables/useArticleExperiments'

export interface ArticleSearchResult {
  path: string
  title: string
  titleVariant?: string
  description: string
  descriptionVariant?: string
  image: string
  publishedAt: string
  tags: string[]
  score: number
  matchTitle: string
  excerpt: string
}

export function searchArticleSections(
  sections: ArticleSearchSection[],
  query: string,
  variant: ArticleExperimentVariant = 'control',
) {
  const normalizedQuery = query.trim().toLowerCase()

  if (!normalizedQuery) {
    return [] as ArticleSearchResult[]
  }

  const tokens = normalizedQuery.split(/\s+/).filter(Boolean)
  const grouped = new Map<string, ArticleSearchResult>()

  for (const section of sections) {
    const haystack = [
      section.title,
      ...section.titles,
      section.content,
      section.description,
      section.tags.join(' '),
    ].join(' ').toLowerCase()

    const score = tokens.reduce((total, token) => total + scoreTokenMatch(haystack, token), 0)

    if (score === 0) {
      continue
    }

    const current = grouped.get(section.path)
    const nextResult: ArticleSearchResult = {
      path: section.path,
      title: section.articleTitle,
      titleVariant: section.titleVariant,
      description: section.description,
      descriptionVariant: section.descriptionVariant,
      image: section.image,
      publishedAt: section.publishedAt,
      tags: section.tags,
      score,
      matchTitle: section.title,
      excerpt: buildExcerpt(section.content, tokens),
    }

    if (!current || current.score < score) {
      grouped.set(section.path, nextResult)
    }
  }

  return Array.from(grouped.values())
    .sort((left, right) => right.score - left.score)
    .map(result => ({
      ...result,
      title: getArticleDisplayTitle(result, variant),
      description: getArticleDisplayDescription(result, variant),
    }))
}

function scoreTokenMatch(haystack: string, token: string) {
  const occurrences = haystack.split(token).length - 1

  if (occurrences <= 0) {
    return 0
  }

  return token.length > 3 ? occurrences * 3 : occurrences
}

function buildExcerpt(content: string, tokens: string[]) {
  const normalizedContent = content.replace(/\s+/g, ' ').trim()

  if (!normalizedContent) {
    return ''
  }

  const lowerContent = normalizedContent.toLowerCase()
  const matchIndex = tokens
    .map(token => lowerContent.indexOf(token))
    .filter(index => index >= 0)
    .sort((left, right) => left - right)[0]

  if (matchIndex === undefined) {
    return normalizedContent.slice(0, 140)
  }

  const start = Math.max(0, matchIndex - 50)
  const end = Math.min(normalizedContent.length, matchIndex + 110)
  const excerpt = normalizedContent.slice(start, end)

  return `${start > 0 ? '…' : ''}${excerpt}${end < normalizedContent.length ? '…' : ''}`
}
