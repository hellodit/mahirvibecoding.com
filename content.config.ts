import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      type: 'page',
      source: 'articles/**/*.md',
      schema: z.object({
        title: z.string().max(60),
        description: z.string().max(160),
        image: z.string(),
        author: z.string().default('Asdita'),
        publishedAt: z.string(),
        updatedAt: z.string().optional(),
        tags: z.array(z.string()),
        draft: z.boolean().default(false),
        keywords: z.string().optional(),
      }),
    }),
  },
})
