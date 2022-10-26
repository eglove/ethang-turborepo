import {
  ErrorMessage,
  FileInput,
  FormGroup,
  Label,
} from '@trussworks/react-uswds';
import type { ChangeEvent, LabelHTMLAttributes } from 'react';

type TrussFileInputProperties = {
  errorMessages?: string[];
  isRequired?: boolean;
  label: string;
  labelProperties?: LabelHTMLAttributes<HTMLLabelElement>;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export function TrussFileInput({
  errorMessages,
  label,
  labelProperties,
  name,
  isRequired,
  onChange,
}: TrussFileInputProperties): JSX.Element {
  return (
    <FormGroup>
      <Label htmlFor={name} {...labelProperties}>
        {label}
      </Label>
      {typeof errorMessages !== 'undefined' && errorMessages.length > 0 && (
        <ErrorMessage id={`${name}-message`}>
          {errorMessages?.map(message => {
            return <div key={message}>{message}</div>;
          })}
        </ErrorMessage>
      )}
      <FileInput
        aria-required={isRequired}
        id={name}
        name={name}
        required={isRequired}
        onChange={onChange}
      />
    </FormGroup>
  );
}
