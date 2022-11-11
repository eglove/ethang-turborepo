import type { AuthError } from 'firebase/auth';
import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { signUpStart } from '../../store/user/user-action';
import { SignUpView } from './sign-up-view';

const initialState = {
  confirmPassword: '',
  displayName: '',
  email: '',
  password: '',
};

export function SignUp(): JSX.Element {
  const dispatch = useDispatch();

  const [formState, setFormState] = useState(initialState);
  const [formError, setFormError] = useState('');
  const { confirmPassword, email, password, displayName } = formState;

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    setFormState(formState_ => {
      return {
        ...formState_,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setFormError(`Passwords don't match.`);
      return;
    }

    setFormError('');

    try {
      dispatch(signUpStart(email, password, displayName));
      setFormState(initialState);
    } catch (error: unknown) {
      const authError = error as AuthError;
      setFormError(authError.message);
    }
  };

  return (
    <SignUpView
      confirmPassword={confirmPassword}
      displayName={displayName}
      email={email}
      formError={formError}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      password={password}
    />
  );
}
