import { z } from 'zod';

export const ExempleBodySchema = z.object({
  name: z.string().min(3, {message: 'Valeur trop courte'}).max(30, {message: 'Valeur trop longue'}),
  description: z.string().max(300 , {message: 'Valeur trop longue'}).nullable().optional(),
}).required();