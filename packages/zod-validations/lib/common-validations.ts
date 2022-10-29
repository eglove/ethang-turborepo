import { z } from 'zod';

export const ZodSignIn = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const ZodSignUp = z
  .object({
    confirmPassword: z.string(),
    email: z.string().email(),
    password: z.string(),
  })
  .refine(
    data => {
      return data.password === data.confirmPassword;
    },
    {
      message: 'Passwords do not match.',
      path: ['confirmPassword'],
    }
  );
