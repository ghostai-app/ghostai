import { z } from "zod";

const envSchema = z.object({
  VITE_API_URL: z.string().url().nonempty(),
  VITE_BOT_USERNAME: z.string().nonempty(),
  VITE_WEB_APP_URL: z.string().url().nonempty(),
  VITE_NODE_ENV: z.enum(["development", "production"]).default("development"),
  VITE_ASSETS_URL: z.string().url().nonempty(),
});

type Env = z.infer<typeof envSchema>;
export const ENV: Env = envSchema.parse(import.meta.env);
