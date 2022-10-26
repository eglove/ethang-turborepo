import {
  ErrorMessage,
  FormGroup,
  Label,
  TextInput,
} from '@trussworks/react-uswds';
import type { TextInputProps } from '@trussworks/react-uswds/lib/components/forms/TextInput/TextInput';
import type { ChangeEvent, LabelHTMLAttributes } from 'react';

type TrussTextInputProperties = {
  errorMessages?: string[];
  inputProperties?: Partial<TextInputProps>;
  isRequired?: boolean;
  label: string | JSX.Element | JSX.Element[];
  labelProperties?: LabelHTMLAttributes<HTMLLabelElement>;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'url';
  value: string | number | readonly string[];
};

export function TrussTextInput({
  errorMessages,
  inputProperties,
  label,
  labelProperties,
  name,
  onChange,
  isRequired,
  type,
  value,
}: TrussTextInputProperties): JSX.Element {
  return (
    <FormGroup>
      <Label htmlFor={name} {...labelProperties}>
        {label}
      </Label>
      {typeof errorMessages !== 'undefined' && errorMessages?.length > 0 && (
        <ErrorMessage id={`${name}-message`}>
          {errorMessages?.map(message => {
            return <div key={message}>{message}</div>;
          })}
        </ErrorMessage>
      )}
      <TextInput
        id={name}
        name={name}
        required={isRequired}
        type={type ?? 'text'}
        value={value}
        onChange={onChange}
        {...inputProperties}
      />
    </FormGroup>
  );
}
