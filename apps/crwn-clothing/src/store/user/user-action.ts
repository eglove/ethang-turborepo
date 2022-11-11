import type { User } from 'firebase/auth';

import type { UserReducerType } from './user-types';

export type UserActionReturn<Payload> = {
  payload: Payload | null;
  type: UserReducerType;
};

export const setCurrentUser = (user: User | null): UserActionReturn<string> => {
  return {
    payload: user === null ? null : JSON.stringify(user),
    type: 'user/SET_CURRENT_USER',
  };
};

export const checkUserSession = (): UserActionReturn<undefined> => {
  return { payload: undefined, type: 'user/CHECK_USER_SESSION' };
};

export const googleSignInStart = (): UserActionReturn<undefined> => {
  return { payload: undefined, type: 'user/GOOGLE_SIGN_IN_START' };
};

export const emailSignInStart = (
  email: string,
  password: string
): UserActionReturn<{ email: string; password: string }> => {
  return { payload: { email, password }, type: 'user/EMAIL_SIGN_IN_START' };
};

export const signInSuccess = (user: string): UserActionReturn<string> => {
  return { payload: user, type: 'user/SIGN_IN_SUCCESS' };
};

export const signInFail = (error: unknown): UserActionReturn<string> => {
  return { payload: JSON.stringify(error), type: 'user/SIGN_IN_FAIL' };
};
