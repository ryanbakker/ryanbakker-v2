import * as z from "zod";

export const projectFormSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z
    .string()
    .min(3, "Description must be at least 3 characters")
    .max(601, "Description must be less than 600 characters"),
  imageUrl: z.string(),
  categoryId: z.string(),
  githubUrl: z.string(),
  demoUrl: z.string(),
});
