import type { ReactNode } from 'react';

export type UserProviderProperties = {
  children: ReactNode;
};

export type UserContextType = {
  currentUser: string | null;
};

export type UserReducerType = 'user/SET_CURRENT_USER';

export type UserReducerReturn<Type extends UserReducerType> =
  Type extends 'user/SET_CURRENT_USER' ? string | null : null;

export type UserReducerAction<Type extends UserReducerType> = {
  payload: UserReducerReturn<Type>;
  type: Type;
};
