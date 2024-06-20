import { z } from 'zod';

import { STAGES } from './constants/env';

const envSchema = z.object({
  STAGE: z.nativeEnum(STAGES).default(STAGES.Dev),
});

export const envConfig = envSchema.parse({
  STAGE: process.env.EXPO_PUBLIC_STAGE,
});

export type EnvConfig = z.infer<typeof envSchema>;
