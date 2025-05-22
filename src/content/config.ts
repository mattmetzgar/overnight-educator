import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    heroImage: z.string().optional(), // <-- Make heroImage optional
    // add other fields as needed
  }),
});

export const collections = { blog };
