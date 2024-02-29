import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string().transform((str) => new Date(str)),
    tags: z.array(z.string()),
    language: z.enum(["en", "es"]),
    description: z.string(),
  }),
});

const workCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string().transform((str) => new Date(str)),
    tags: z.array(z.string()),
    language: z.enum(["en", "es"]),
    description: z.string(),
    href: z.string(),
    hasBlog: z.boolean(),
  }),
});

export const collections = { blog: blogCollection, work: workCollection };
