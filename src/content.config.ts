import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const pastRun = defineCollection({
    loader: glob({ base: './src/content/past-runs', pattern: "*.md" }),
    schema: ({ image }) => z.object({
        title: z.string(),
        year: z.number(),
        slug: z.string(),
        date: z.string(),
        venue: z.string(),
        description: z.string(),
        featured_image: z.string().optional(),
        gallery: z.array(z.object({
            src: image(),
            alt: z.string(),
            caption: z.string().optional()
        })).optional(),
        games: z.array(z.object({
            title: z.string(),
            image: image(),
            link: z.string(),
        }))
    })
});


// 4. Export a single `collections` object to register your collection(s)
export const collections = { pastRun };