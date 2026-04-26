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
        titleVariant: z.string().max(60).optional(),
        descriptionVariant: z.string().max(160).optional(),
      }),
    }),
    studycase: defineCollection({
      type: 'page',
      source: 'studycase/**/*.md',
      schema: z.object({
        id: z.string(),
        title: z.string().max(80),
        description: z.string().max(220),
        image: z.string(),
        videoId: z.string().optional(),
        gallery: z.array(z.object({
          src: z.string(),
          alt: z.string(),
        })).default([]),
        tools: z.array(z.string()),
        order: z.number().default(0),
        status: z.enum(['draft', 'published']).default('draft'),
      }),
    }),
  },
})
