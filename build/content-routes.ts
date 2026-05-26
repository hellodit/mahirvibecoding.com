import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative, sep } from 'node:path'

export type ArticleEntry = {
  slug: string
  tags: string[]
  publishedAt?: string
  updatedAt?: string
}

export type StudyCaseEntry = {
  slug: string
}

export function getArticleEntries(): ArticleEntry[] {
  const contentRoot = join(process.cwd(), 'content', 'articles')

  if (!existsSync(contentRoot)) {
    return []
  }

  const entries: ArticleEntry[] = []

  const visit = (dir: string) => {
    for (const entry of readdirSync(dir)) {
      const fullPath = join(dir, entry)
      const stats = statSync(fullPath)

      if (stats.isDirectory()) {
        visit(fullPath)
        continue
      }

      if (!entry.endsWith('.md')) {
        continue
      }

      const relativePath = relative(contentRoot, fullPath)
      const slug = relativePath.slice(0, -3).split(sep).join('/')
      const rawContent = readFileSync(fullPath, 'utf8')
      const frontmatter = extractFrontmatter(rawContent)

      if (isDraft(frontmatter)) {
        continue
      }

      entries.push({
        slug,
        tags: extractTags(frontmatter),
        publishedAt: extractFrontmatterValue(frontmatter, 'publishedAt'),
        updatedAt: extractFrontmatterValue(frontmatter, 'updatedAt'),
      })
    }
  }

  visit(contentRoot)

  return entries
}

export function getStudyCaseEntries(): StudyCaseEntry[] {
  const contentRoot = join(process.cwd(), 'content', 'studycase')

  if (!existsSync(contentRoot)) {
    return []
  }

  const entries: StudyCaseEntry[] = []

  const visit = (dir: string) => {
    for (const entry of readdirSync(dir)) {
      const fullPath = join(dir, entry)
      const stats = statSync(fullPath)

      if (stats.isDirectory()) {
        visit(fullPath)
        continue
      }

      if (!entry.endsWith('.md')) {
        continue
      }

      const relativePath = relative(contentRoot, fullPath)
      const slug = relativePath.slice(0, -3).split(sep).join('/')
      const rawContent = readFileSync(fullPath, 'utf8')
      const frontmatter = extractFrontmatter(rawContent)

      if (!isPublishedStudyCase(frontmatter)) {
        continue
      }

      entries.push({ slug })
    }
  }

  visit(contentRoot)

  return entries
}

export function buildRoutes() {
  const articleEntries = getArticleEntries()
  const studyCaseEntries = getStudyCaseEntries()

  const articleRoutes = ['/articles/', ...articleEntries.map(entry => `/articles/${entry.slug}/`)]
  const studyCaseRoutes = studyCaseEntries.map(entry => `/studycase/${entry.slug}/`)
  const tagRoutes = Array.from(
    new Set(articleEntries.flatMap(entry => entry.tags.map(tag => `/articles/tag/${encodeURIComponent(tag)}/`))),
  )

  const prerenderRoutes = Array.from(new Set([...articleRoutes, ...studyCaseRoutes, ...tagRoutes, '/feed.xml']))

  const sitemapUrls = [
    { loc: '/articles/' },
    ...articleEntries.map(entry => ({
      loc: `/articles/${entry.slug}/`,
      lastmod: entry.updatedAt || entry.publishedAt,
    })),
    ...studyCaseRoutes.map(loc => ({ loc })),
    ...tagRoutes.map(loc => ({ loc })),
    { loc: '/privacy/' },
    { loc: '/terms/' },
  ]

  return { prerenderRoutes, sitemapUrls }
}

function extractFrontmatter(content: string) {
  const match = content.match(/^---\n([\s\S]*?)\n---/)
  return match?.[1] ?? ''
}

function extractFrontmatterValue(frontmatter: string, key: string): string | undefined {
  const re = new RegExp(`^\\s*${key}:\\s*["']?(.+?)["']?\\s*$`, 'm')
  const match = frontmatter.match(re)
  return match?.[1]?.trim()
}

function isDraft(frontmatter: string) {
  return /^\s*draft:\s*true\s*$/m.test(frontmatter)
}

function isPublishedStudyCase(frontmatter: string) {
  return /^\s*status:\s*published\s*$/m.test(frontmatter)
}

function extractTags(frontmatter: string) {
  const lines = frontmatter.split('\n')
  const tags: string[] = []
  let readingTags = false

  for (const line of lines) {
    if (/^\s*tags:\s*$/.test(line)) {
      readingTags = true
      continue
    }

    if (!readingTags) {
      continue
    }

    const match = line.match(/^\s*-\s*(.+)\s*$/)
    if (match) {
      const tagValue = match[1]
      if (tagValue) {
        tags.push(tagValue.replace(/^['"]|['"]$/g, ''))
      }
      continue
    }

    if (line.trim() === '') {
      continue
    }

    if (/^\S/.test(line)) {
      break
    }
  }

  return tags
}
