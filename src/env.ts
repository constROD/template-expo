import { z } from 'zod';

import { STAGES } from './constants/env';

const envSchema = z.object({
  STAGE: z.nativeEnum(STAGES).default(STAGES.Dev),
  API_URL: z.string(),
});

export const envConfig = envSchema.parse({
  STAGE: process.env.EXPO_PUBLIC_STAGE,
  API_URL: process.env.EXPO_PUBLIC_API_URL,
});

export type EnvConfig = z.infer<typeof envSchema>;
