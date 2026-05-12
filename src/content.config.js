import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const works = defineCollection({
  loader: file("src/data/projects.json"),
  schema: z.object({
    id: z.string(),
    category: z.string(),
    title: z.string(),
    description: z.string(),
    thumbnailPath: z.string(),
    detailParh: z.string(),
    projectPath: z.string()
  })
});

export const collections = { 
    'posts': works
};
