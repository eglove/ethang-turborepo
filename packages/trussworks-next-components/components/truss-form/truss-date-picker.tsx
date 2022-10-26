import {
  DatePicker,
  ErrorMessage,
  FormGroup,
  Label,
} from '@trussworks/react-uswds';
import type { DatePickerProps } from '@trussworks/react-uswds/lib/components/forms/DatePicker/DatePicker';
import React from 'react';

type TrussDatePickerProperties = {
  datePickerProperties?: Partial<DatePickerProps>;
  errorMessage?: string;
  isRequired?: boolean;
  label: string;
  name: string;
  onChange: (value?: string) => void;
  value: string;
};

export function TrussDatePicker({
  datePickerProperties,
  errorMessage,
  label,
  name,
  onChange,
  isRequired,
  value,
}: TrussDatePickerProperties): JSX.Element {
  return (
    <FormGroup>
      <Label htmlFor={name}>{label}</Label>
      {typeof errorMessage !== 'undefined' && (
        <ErrorMessage id={`${name}-message`}>{errorMessage}</ErrorMessage>
      )}
      <DatePicker
        aria-required={isRequired}
        id={name}
        name={name}
        required={isRequired}
        value={value}
        onChange={onChange}
        {...datePickerProperties}
      />
    </FormGroup>
  );
}
