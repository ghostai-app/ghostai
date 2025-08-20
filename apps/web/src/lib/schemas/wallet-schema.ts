import { z } from "zod";

export const walletSchema = z.object({
  wallet: z.string().min(1),
});

export type WalletSchema = z.infer<typeof walletSchema>;
