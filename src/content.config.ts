import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const workSchema = z.object({
	title: z.string(),
	description: z.string(),
	publishDate: z.coerce.date(),
	tags: z.array(z.string()),
	img: z.string(),
	img_alt: z.string().optional(),
	featured: z.boolean().optional(),
});

export const collections = {
	work: defineCollection({
		loader: glob({ base: './src/content/work', pattern: '**/*.md' }),
		schema: workSchema.extend({
			type: z.enum(['role', 'project']),
		}),
	}),
	techProjects: defineCollection({
		loader: glob({ base: './src/content/techProjects', pattern: '**/*.md' }),
		schema: workSchema,
	}),
};
