import { z } from 'zod';

export const caloriePostBody = z.object({
  calories: z.number(),
});

export const habitCompleteBody = z.object({
  name: z.string(),
});

export const habitPostBody = z.object({
  name: z.string(),
  recurs: z.number(),
});

export const healthRecordPostBody = z.object({
  age: z.number(),
  height: z.number(),
  weight: z.number(),
});
