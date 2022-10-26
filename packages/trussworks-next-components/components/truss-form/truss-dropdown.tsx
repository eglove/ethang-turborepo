import {
  Dropdown,
  ErrorMessage,
  FormGroup,
  Label,
} from '@trussworks/react-uswds';
import type { ChangeEvent } from 'react';

type TrussDropdownProperties = {
  children: JSX.Element | JSX.Element[];
  errorMessages?: string[];
  formGroupClassName?: string;
  isRequired?: boolean;
  label: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  value: string | number;
};

export function TrussDropdown({
  children,
  errorMessages,
  formGroupClassName,
  label,
  name,
  onChange,
  isRequired,
  value,
}: TrussDropdownProperties): JSX.Element {
  return (
    <FormGroup className={formGroupClassName}>
      <Label htmlFor={name}>{label}</Label>
      {typeof errorMessages !== 'undefined' && errorMessages?.length > 0 && (
        <ErrorMessage id={`${name}-message`}>
          {errorMessages?.map(message => {
            return <div key={message}>{message}</div>;
          })}
        </ErrorMessage>
      )}
      <Dropdown
        aria-required={isRequired}
        id={name}
        name={name}
        required={isRequired}
        value={value}
        onChange={onChange}
      >
        {children}
      </Dropdown>
    </FormGroup>
  );
}
