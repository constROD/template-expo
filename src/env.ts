import { z } from 'zod';

export const STAGES = {
  Dev: 'dev',
  Prod: 'prod',
} as const;

const envSchema = z.object({
  STAGE: z.nativeEnum(STAGES).default(STAGES.Dev),
});

export const envConfig = envSchema.parse({
  STAGE: process.env.EXPO_PUBLIC_STAGE,
});
