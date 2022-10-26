import React, { TimePicker } from '@trussworks/react-uswds';

type TrussDatePickerProperties = {
  errorMessage?: string;
  isRequired?: boolean;
  label: string;
  name: string;
  onChange: (value?: string) => void;
  value: string;
};

export function TrussTimePicker({
  errorMessage,
  label,
  name,
  onChange,
  isRequired,
  value,
}: TrussDatePickerProperties): JSX.Element {
  return (
    <TimePicker
      aria-errormessage={errorMessage}
      aria-required={isRequired}
      id={name}
      label={label}
      name={name}
      required={isRequired}
      value={value}
      onChange={onChange}
    />
  );
}
