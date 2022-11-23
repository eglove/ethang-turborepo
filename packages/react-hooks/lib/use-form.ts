import type { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react';
import { useState } from 'react';
import { getZodFieldErrors } from 'util-typescript';
import type { z } from 'zod';

export type UseFormProperties = {
  formActionAfterSubmit?: 'clear' | 'reset';
  onChange?: (event: ChangeEvent) => unknown;
  onError?: (error: unknown) => unknown;
  onSubmit?: (...arguments_: unknown[]) => unknown;
  zodValidator?: z.ZodTypeAny;
};

export type FieldError<StateType> =
  | Record<keyof StateType, string[] | undefined>
  | undefined;

export type UseFormReturn<StateType> = {
  clearFieldErrors: () => void;
  clearForm: () => void;
  fieldErrors: FieldError<StateType>;
  formError: string | undefined;
  formState: StateType;
  handleInputChange: (event: ChangeEvent) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  resetForm: () => void;
  setFieldErrors: Dispatch<SetStateAction<FieldError<StateType>>>;
  setFormError: Dispatch<SetStateAction<string | undefined>>;
  setFormState: Dispatch<SetStateAction<StateType>>;
};

export const useForm = <StateType>(
  initialState: StateType,
  properties?: UseFormProperties
): UseFormReturn<StateType> => {
  const [formState, setFormState] = useState(initialState);
  const [formError, setFormError] = useState<string>();
  const [fieldErrors, setFieldErrors] =
    useState<Record<keyof StateType, string[] | undefined>>();

  const clearFieldErrors = (): void => {
    // eslint-disable-next-line unicorn/no-useless-undefined
    setFieldErrors(undefined);
  };

  const handleChange = (event: ChangeEvent): void => {
    const eventTarget = event.target as unknown as {
      checked?: boolean;
      files: File[];
      name: string;
      type: string;
      value: string | boolean | number | File;
    };

    let { value } = eventTarget;
    const { checked, name, type, files } = eventTarget;

    if (type === 'checkbox' && checked !== undefined) {
      value = checked;
    }

    if (type === 'number' && typeof value === 'string') {
      value = Number.parseFloat(value.replaceAll(',', ''));
    }

    if (type === 'file') {
      [value] = files;
    }

    setFormState(formState_ => {
      return {
        ...formState_,
        [name]: value,
      };
    });

    properties?.onChange?.(event);
  };

  const clearForm = (): void => {
    const blankState = Object.fromEntries(
      Object.entries(formState as Object).map(([key]) => {
        return [key, undefined];
      })
    ) as unknown as StateType;

    setFormState(blankState);
  };

  const resetForm = (): void => {
    setFormState(initialState);
  };

  const handleSubmit = (event: FormEvent): void => {
    event.preventDefault();

    try {
      properties?.zodValidator?.parse(formState);
    } catch (error: unknown) {
      const errors = getZodFieldErrors(
        error,
        formState as Object
      ) as unknown as typeof fieldErrors;
      setFieldErrors(errors);
      return;
    }

    if (properties?.formActionAfterSubmit === 'clear') {
      clearForm();
    } else if (properties?.formActionAfterSubmit === 'reset') {
      resetForm();
    }

    let hasException = false;
    if (properties?.onSubmit !== undefined) {
      try {
        properties.onSubmit();
      } catch (error: unknown) {
        hasException = true;
        properties?.onError?.(error);

        if (error instanceof Error) {
          setFormError(error.message);
        }
      }

      if (!hasException) {
        clearFieldErrors();
        setFormError('');
      }
    }
  };

  return {
    clearFieldErrors,
    clearForm,
    fieldErrors,
    formError,
    formState,
    handleInputChange: handleChange,
    handleSubmit,
    resetForm,
    setFieldErrors,
    setFormError,
    setFormState,
  };
};
