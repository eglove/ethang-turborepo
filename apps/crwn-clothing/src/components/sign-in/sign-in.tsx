import type { AuthError } from 'firebase/auth';
import type { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  emailSignInStart,
  googleSignInStart,
} from '../../store/user/user-action';
import { SignInView } from './sign-in-view';

const initialState = {
  email: '',
  password: '',
};

export function SignIn(): JSX.Element {
  const dispatch = useDispatch();

  const [formState, setFormState] = useState(initialState);
  const [formError, setFormError] = useState('');
  const { email, password } = formState;

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;

    setFormState(formState_ => {
      return {
        ...formState_,
        [name]: value,
      };
    });
  };

  const signInWithGoogle = async (): Promise<void> => {
    dispatch(googleSignInStart());
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    setFormError('');

    try {
      dispatch(emailSignInStart(email, password));
      setFormState(initialState);
    } catch (error: unknown) {
      const authError = error as AuthError;
      setFormError(authError.message);
    }
  };

  return (
    <SignInView
      email={email}
      formError={formError}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      password={password}
      signInWithGoogle={signInWithGoogle}
    />
  );
}
