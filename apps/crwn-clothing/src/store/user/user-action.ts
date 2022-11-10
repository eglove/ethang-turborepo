import type { User } from 'firebase/auth';

import type { UserReducerType } from './user-types';

type SetCurrentUserReturn = { payload: string | null; type: UserReducerType };

export const setCurrentUser = (user: User | null): SetCurrentUserReturn => {
  return {
    payload: user === null ? null : JSON.stringify(user),
    type: 'user/SET_CURRENT_USER',
  };
};
