import type { User } from 'firebase/auth';

import type { StoreState } from '../store';

export const selectCurrentUser = (state: StoreState): User | null => {
  if (state.user.currentUser === null) {
    return state.user.currentUser;
  }

  return JSON.parse(state.user.currentUser) as unknown as User;
};
