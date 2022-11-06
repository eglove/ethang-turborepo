import type { ChangeEvent, FormEvent } from 'react';

import { Button } from '../button/button';
import { FormInput } from '../form-input/form-input';
import { signInWithGoogle } from './sign-in';
import styles from './sign-in-view.module.css';

type SignUpViewProperties = {
  email: string;
  formError?: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  password: string;
};

export function SignInView({
  formError,
  password,
  handleSubmit,
  handleChange,
  email,
}: SignUpViewProperties): JSX.Element {
  return (
    <div className={styles.SignInContainer}>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      {formError !== '' && <p>{formError}</p>}
      <form onSubmit={handleSubmit}>
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
        <div className={styles.ButtonsContainer}>
          <Button properties={{ type: 'submit' }}>Sign In</Button>
          <Button properties={{ onClick: signInWithGoogle }} variant="google">
            Sign In with Google
          </Button>
        </div>
      </form>
    </div>
  );
}
