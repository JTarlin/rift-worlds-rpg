import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const rules = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/rules" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().int().positive(),
    icon: z.string(),
    eyebrow: z.string(),
    updated: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { rules };
