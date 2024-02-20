import { z } from "zod";

export const ExempleCreationSchema = z
  .object({
    name: z.string().min(3).max(30),
    description: z.string().max(300).nullable().optional(),
  })
  .strict();

export type ExempleData = z.infer<typeof ExempleCreationSchema>;
