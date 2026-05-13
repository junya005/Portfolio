// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // loaderをインポート

const posts = defineCollection({
  // glob loaderを使用して、ファイルの場所を明示的に指定します
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { posts };
