import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const pastRun = defineCollection({
    loader: glob({ base: './src/content/past-runs', pattern: "*.md" }),
    schema: z.object({
        title: z.string(),
        year: z.number(),
        slug: z.string(),
        date: z.string(),
        venue: z.string(),
        description: z.string(),
        featured_image: z.string().optional(),
        gallery: z.array(z.object({
            src: z.string(),
            alt: z.string(),
            caption: z.string().optional()
        })).optional(),
        games: z.array(z.object({
            title: z.string(),
            image: z.string(),
            link: z.string(),
            description: z.string().optional(),
            team: z.string().optional()
        })),
        sponsors: z.array(z.object({
            name: z.string(),
            image: z.string(),
            link: z.string()
        })).optional(),
        stats: z.object({
            participants: z.number().optional(),
            games_created: z.number().optional(),
            teams: z.number().optional(),
            hours: z.number().optional()
        }).optional()
    })
});


// 4. Export a single `collections` object to register your collection(s)
export const collections = { pastRun };