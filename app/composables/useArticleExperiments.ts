import type { ArticleRecord, ArticleSearchSection } from '~/composables/useArticles'

export type ArticleExperimentVariant = 'control' | 'variant'

export function useArticleExperimentVariant() {
  return useCookie<ArticleExperimentVariant>('article-meta-variant', {
    default: () => Math.random() < 0.5 ? 'control' : 'variant',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 30,
  })
}

export function useArticleExperimentCopy() {
  const variant = useArticleExperimentVariant()

  function getTitle(article: Pick<ArticleRecord, 'title' | 'titleVariant'> | Pick<ArticleSearchSection, 'title' | 'titleVariant'>) {
    return getArticleDisplayTitle(article, variant.value)
  }

  function getDescription(article: Pick<ArticleRecord, 'description' | 'descriptionVariant'> | Pick<ArticleSearchSection, 'description' | 'descriptionVariant'>) {
    return getArticleDisplayDescription(article, variant.value)
  }

  return {
    variant,
    getTitle,
    getDescription,
  }
}
