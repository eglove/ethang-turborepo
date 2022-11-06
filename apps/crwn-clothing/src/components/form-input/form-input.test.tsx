/* eslint-disable @typescript-eslint/no-empty-function */
import { render, screen } from '@testing-library/react';

import { FormInput } from './form-input';

describe('FormInput', () => {
  it('should render a form input', () => {
    render(
      <FormInput
        inputProperties={{ name: 'name', onChange(): void {}, value: 'value' }}
        label="Name"
      />
    );

    const element = screen.getByLabelText<HTMLInputElement>('name');
    expect(element).toBeDefined();
    expect(element.value).toBe('value');
    expect(element.name).toBe('name');
  });
});
