import { z } from "zod";

export const ExempleUpdateSchema = z
  .object({
    name: z.string().min(3).max(30).optional(),
    description: z.string().max(300).nullable().optional(),
  })
  .partial()
  .strict();

export type UpdateExempleData = z.infer<typeof ExempleUpdateSchema>;
