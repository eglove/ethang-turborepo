// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { ErrorMessage, FormGroup, Label } from '@trussworks/react-uswds';
import type { DatePickerProps } from '@trussworks/react-uswds/lib/components/forms/DatePicker/DatePicker';
import type { ChangeEventHandler } from 'react';

type DateTimePickerProperties = {
  datePickerProperties?: Partial<DatePickerProps>;
  errorMessages?: string[];
  isRequired?: boolean;
  label: string;
  name: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
};

export function TrussDateTimePicker({
  datePickerProperties,
  errorMessages,
  label,
  name,
  onChange,
  isRequired,
  value,
}: DateTimePickerProperties): JSX.Element {
  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      <ErrorMessage id={`${name}-message`}>
        {errorMessages?.map(message => {
          return <div key={`${name}-message`}>{message}</div>;
        })}
      </ErrorMessage>
      <input
        aria-required={isRequired}
        defaultValue={value}
        id={name}
        name={name}
        required={isRequired}
        type="datetime-local"
        onChange={onChange}
        {...datePickerProperties}
      />
    </FormGroup>
  );
}
