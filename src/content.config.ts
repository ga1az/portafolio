import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/index.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.string().transform((str) => new Date(str)),
    tags: z.array(z.string()),
    language: z.enum(["en", "es"]),
    description: z.string(),
    /** Key into src/data/tiles.ts. Omitted → initials tile. */
    icon: z.string().optional(),
  }),
});

const workCollection = defineCollection({
  loader: glob({ pattern: "**/index.md", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    date: z.string().transform((str) => new Date(str)),
    tags: z.array(z.string()),
    language: z.enum(["en", "es"]),
    description: z.string(),
    href: z.string(),
    hasBlog: z.boolean(),
    /** Key into src/data/tiles.ts. Omitted → initials tile. */
    icon: z.string().optional(),
    /** Name used where the full title is too long (the home intro chips). */
    shortTitle: z.string().optional(),
  }),
});

export const collections = { blog: blogCollection, work: workCollection };
