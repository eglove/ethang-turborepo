import { ZodError } from 'zod';

export const getZodFieldErrors = (
  error: unknown,
  formState: Object
): Record<string, string[]> => {
  const errors: Record<string, string[]> = {};

  if (error instanceof ZodError) {
    for (const key of Object.keys(formState)) {
      const errorArray = error.formErrors.fieldErrors[key];

      if (typeof errorArray !== 'undefined') {
        errors[key] = errorArray;
      }
    }
  }

  return errors;
};
