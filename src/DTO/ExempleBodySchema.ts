import { z } from "zod";

export const ExempleCreationSchema = z
  .object({
    name: z.string().min(3).max(30),
    description: z.string().max(300).nullable().optional(),
  })
  .strict();

export const ExempleUpdateSchema = z
  .object({
    name: z.string().min(3).max(30).optional(),
    description: z.string().max(300).nullable().optional(),
  })
  .partial()
  .strict();
