import { z } from 'zod';

const OrderSchema = z.object({
  id: z.string(),
  nOrden: z.string(),
  product: z.string(),
  amount: z.number(),
  price: z.number(),
  purchaseTime: z.date(),
  seller: z.string(),
});

export type Order = z.infer<typeof OrderSchema>;