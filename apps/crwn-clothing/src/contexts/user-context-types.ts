import type { User } from 'firebase/auth';
import type { ReactNode } from 'react';

export type UserProviderProperties = {
  children: ReactNode;
};

export type UserContextType = {
  currentUser: User | null;
};

export type UserReducerType = 'SET_CURRENT_USER';

export type UserReducerReturn<Type extends UserReducerType> =
  Type extends 'SET_CURRENT_USER' ? User | null : null;

export type UserReducerAction<Type extends UserReducerType> = {
  payload: UserReducerReturn<Type>;
  type: Type;
};
