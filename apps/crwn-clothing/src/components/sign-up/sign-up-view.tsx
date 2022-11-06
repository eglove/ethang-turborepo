import type { ChangeEvent, FormEvent } from 'react';

import { Button } from '../button/button';
import { FormInput } from '../form-input/form-input';
import styles from './sign-up-view.module.css';

type SignUpViewProperties = {
  confirmPassword: string;
  displayName: string;
  email: string;
  formError?: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  password: string;
};

export function SignUpView({
  confirmPassword,
  formError,
  password,
  displayName,
  handleSubmit,
  handleChange,
  email,
}: SignUpViewProperties): JSX.Element {
  return (
    <div className={styles.SignUpContainer}>
      <h2>Don&apos;t have an account?</h2>
      <span>Sign Up with your Email/Password</span>
      {formError !== '' && <p>{formError}</p>}
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          inputProperties={{
            name: 'displayName',
            onChange: handleChange,
            required: true,
            type: 'text',
            value: displayName,
          }}
        />
        <FormInput
          label="Email"
          inputProperties={{
            name: 'email',
            onChange: handleChange,
            required: true,
            type: 'email',
            value: email,
          }}
        />
        <FormInput
          label="Password"
          inputProperties={{
            name: 'password',
            onChange: handleChange,
            required: true,
            type: 'password',
            value: password,
          }}
        />
        <FormInput
          label="Confirm Password"
          inputProperties={{
            name: 'confirmPassword',
            onChange: handleChange,
            required: true,
            type: 'password',
            value: confirmPassword,
          }}
        />
        <Button properties={{ type: 'submit' }}>Sign Up</Button>
      </form>
    </div>
  );
}
