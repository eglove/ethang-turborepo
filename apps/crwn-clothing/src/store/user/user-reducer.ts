import type { Reducer } from 'redux';

import type {
  UserContextType,
  UserReducerAction,
  UserReducerType,
} from './user-types';

const INITIAL_STATE = {
  currentUser: null,
};

export const userReducer: Reducer<
  UserContextType,
  UserReducerAction<UserReducerType>
> = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: UserContextType = INITIAL_STATE,
  action: UserReducerAction<UserReducerType>
): UserContextType => {
  const { type, payload } = action;

  switch (type) {
    case 'user/SET_CURRENT_USER': {
      return {
        ...state,
        currentUser: payload,
      };
    }

    default: {
      return state;
    }
  }
};
