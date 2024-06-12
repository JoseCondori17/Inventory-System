import { z } from 'zod';

const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.string(),
  sku: z.string(),
  entryDate: z.date(),
  lastUpdateDate: z.date(),
  stock: z.number(),
  unitPrice: z.number(),
  status: z.enum(['available', 'out of stock', 'processing']),
});

export type Product = z.infer<typeof ProductSchema>;