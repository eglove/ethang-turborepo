/* eslint-disable @typescript-eslint/no-empty-function */
import { faker } from '@faker-js/faker';
import { render, screen } from '@testing-library/react';

import { SignUpView } from './sign-up-view';

describe('SignUpView', () => {
  it('should render an empty form', () => {
    render(
      <SignUpView
        confirmPassword=""
        displayName=""
        email=""
        handleChange={(): void => {}}
        handleSubmit={(): void => {}}
        password=""
      />
    );

    const inputsLabels = [
      'displayName',
      'email',
      'password',
      'confirmPassword',
    ];

    for (const inputLabel of inputsLabels) {
      const element = screen.getByLabelText<HTMLInputElement>(inputLabel);
      expect(element.value).toBe('');
    }

    const errorElement = screen.queryByText<HTMLParagraphElement>('error');
    expect(errorElement?.textContent).toBeUndefined();
  });

  it('should render given values', () => {
    const error = 'There was an error.';

    const formState = {
      confirmPassword: faker.internet.password(),
      displayName: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
    const { displayName, email, password, confirmPassword } = formState;

    render(
      <SignUpView
        confirmPassword={confirmPassword}
        displayName={displayName}
        email={email}
        formError={error}
        handleChange={(): void => {}}
        handleSubmit={(): void => {}}
        password={password}
      />
    );

    for (const inputLabel of Object.keys(formState)) {
      const label = inputLabel as keyof typeof formState;
      const element = screen.getByLabelText<HTMLInputElement>(inputLabel);
      expect(element.value).toBe(formState[label]);
    }

    const errorElement = screen.getByText<HTMLParagraphElement>(error);
    expect(errorElement.textContent).toBe(error);
  });
});
