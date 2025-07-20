import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.date(),
		image: z.string().optional(),
		draft: z.boolean().default(false),
	}),
});

export const collections = { blog };
