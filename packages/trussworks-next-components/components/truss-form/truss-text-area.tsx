import {
  ErrorMessage,
  FormGroup,
  Label,
  Textarea,
} from '@trussworks/react-uswds';
import type { TextareaProps } from '@trussworks/react-uswds/lib/components/forms/Textarea/Textarea';
import type { ChangeEvent, LabelHTMLAttributes } from 'react';

type TrussTextAreaProperties = {
  errorMessages?: string[];
  isRequired?: boolean;
  label: string;
  labelProperties?: LabelHTMLAttributes<HTMLLabelElement>;
  name: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  textAreaProperties?: Partial<TextareaProps>;
  value: string | number | readonly string[] | undefined;
};

export function TrussTextArea({
  errorMessages,
  label,
  labelProperties,
  name,
  isRequired,
  value,
  onChange,
  textAreaProperties,
}: TrussTextAreaProperties): JSX.Element {
  return (
    <FormGroup>
      <Label htmlFor={name} {...labelProperties}>
        {label}
      </Label>
      <ErrorMessage id={`${name}-message`}>
        {errorMessages?.map(message => {
          return <div key={message}>{message}</div>;
        })}
      </ErrorMessage>
      <Textarea
        id={name}
        name={name}
        required={isRequired}
        value={value}
        onChange={onChange}
        {...textAreaProperties}
      />
    </FormGroup>
  );
}
