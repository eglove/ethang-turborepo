import type {
  ButtonHTMLAttributes,
  ChangeEvent,
  Dispatch,
  FieldsetHTMLAttributes,
  FormEvent,
  FormHTMLAttributes,
  InputHTMLAttributes,
  SelectHTMLAttributes,
  SetStateAction,
  TextareaHTMLAttributes,
} from 'react';

import { Button } from '../button/button';
import { Select } from '../select/select';
import type { SimpleFormButton } from './simple-form-button';
import type { SimpleFormInput } from './simple-form-input';

type FormProperties<StateType> = {
  buttonContainerProperties?: ButtonHTMLAttributes<HTMLButtonElement>;
  buttons?: SimpleFormButton[];
  fieldsetProperties?: FieldsetHTMLAttributes<HTMLFieldSetElement>;
  formProperties?: FormHTMLAttributes<HTMLFormElement>;
  formState: StateType;
  inputs?: SimpleFormInput[];
  isClearingFormAfterSubmit?: boolean;
  onChangeFunction?: (event: ChangeEvent) => unknown;
  postSubmitFunction?: (...arguments_: unknown[]) => unknown;
  setFormState: Dispatch<SetStateAction<StateType>>;
};

export function SimpleForm<StateType extends Record<string, unknown>>(
  formProperties: FormProperties<StateType>
): JSX.Element {
  formProperties.buttons?.reverse();

  const handleChange = (event: ChangeEvent): void => {
    let { value, name, type, files } = event.target as unknown as {
      files: File[];
      name: string;
      type: string;
      value: string | number | File;
    };

    if (type === 'number' && typeof value === 'string') {
      value = Number.parseFloat(value.replaceAll(',', ''));
    }

    if (type === 'file') {
      [value] = files;
    }

    formProperties.setFormState(formState => {
      return {
        ...formState,
        [name]: value,
      };
    });

    if (typeof formProperties.onChangeFunction !== 'undefined') {
      formProperties.onChangeFunction(event);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (formProperties.isClearingFormAfterSubmit === true) {
      const blankState = Object.fromEntries(
        Object.entries(formProperties.formState).map(([key]) => {
          return [key, ''];
        })
      ) as unknown as StateType;

      formProperties.setFormState(blankState);
    }

    if (typeof formProperties.postSubmitFunction !== 'undefined') {
      formProperties.postSubmitFunction();
    }
  };

  const getInputElement = (formInput: SimpleFormInput): JSX.Element => {
    const value = formProperties.formState[formInput.name] as
      | string
      | number
      | readonly string[]
      | undefined;

    const defaultProperties = {
      id: formInput.id,
      name: formInput.name,
      onChange: handleChange,
      value,
      ...formInput.inputProperties,
    };

    switch (formInput.inputType) {
      case 'textarea': {
        return (
          <textarea
            {...(defaultProperties as unknown as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        );
      }

      case 'select': {
        return (
          <Select
            selectOptions={formInput.selectOptions}
            selectProperties={
              defaultProperties as unknown as SelectHTMLAttributes<HTMLSelectElement>
            }
          />
        );
      }

      default: {
        return (
          <input
            type={formInput.inputType}
            {...(defaultProperties as unknown as InputHTMLAttributes<HTMLInputElement>)}
          />
        );
      }
    }
  };

  return (
    <form
      method="POST"
      onSubmit={handleSubmit}
      {...formProperties.formProperties}
    >
      <fieldset {...formProperties.fieldsetProperties}>
        {formProperties.inputs?.map((formInput: SimpleFormInput) => {
          return formInput.hideLabel ? (
            getInputElement(formInput)
          ) : (
            <label
              htmlFor={formInput.name}
              key={formInput.name}
              {...formInput.labelProperties}
            >
              <span {...formInput.labelTextProperties}>{formInput.label}</span>
              {getInputElement(formInput)}
            </label>
          );
        })}
        <span {...formProperties.buttonContainerProperties}>
          {formProperties.buttons?.map(button => {
            return (
              <Button
                buttonProperties={{ type: 'button', ...button.properties }}
                key={button.name}
                size="small"
                text={button.buttonText}
              />
            );
          })}
        </span>
      </fieldset>
    </form>
  );
}
