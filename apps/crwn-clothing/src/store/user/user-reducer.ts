import type { Reducer } from 'redux';

import type {
  UserContextType,
  UserReducerAction,
  UserReducerType,
} from './user-types';

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  isLoading: false,
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
    case 'user/SIGN_IN_SUCCESS': {
      return {
        ...state,
        currentUser: payload,
      };
    }

    case 'user/SIGN_IN_FAIL': {
      return {
        ...state,
        error: payload,
      };
    }

    default: {
      return state;
    }
  }
};
