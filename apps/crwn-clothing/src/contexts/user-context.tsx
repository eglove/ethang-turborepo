import type { Unsubscribe, User } from 'firebase/auth';
import { createContext, useEffect, useMemo, useReducer } from 'react';

import { firebase } from '../utils/firebase/utils-firebase';
import type {
  UserContextType,
  UserProviderProperties,
  UserReducerAction,
  UserReducerType,
} from './user-context-types';

export const UserContext = createContext<UserContextType>({
  currentUser: null,
});

const userReducer = (
  state: UserContextType,
  action: UserReducerAction<UserReducerType>
): UserContextType => {
  const { type, payload } = action;

  switch (type) {
    case 'SET_CURRENT_USER': {
      return {
        ...state,
        currentUser: payload,
      };
    }

    default: {
      throw new Error(`Action type not found.`);
    }
  }
};

export function UserProvider({
  children,
}: UserProviderProperties): JSX.Element {
  const [{ currentUser }, dispatch] = useReducer<typeof userReducer>(
    userReducer,
    {
      currentUser: null,
    }
  );

  const setCurrentUser = (user: User | null): void => {
    dispatch({ payload: user, type: 'SET_CURRENT_USER' });
  };

  const value = useMemo(() => {
    return { currentUser, setCurrentUser };
  }, [currentUser]);

  useEffect(() => {
    let unsubscribe: Unsubscribe;

    const listen = async (): Promise<void> => {
      unsubscribe = await firebase.authStateChangedListener(async user => {
        if (user !== null) {
          await firebase.createUserDocumentFromAuth(user);
        }

        setCurrentUser(user);
      });
    };

    listen().catch(error => {
      console.error(error);
    });

    return () => {
      if (typeof unsubscribe !== 'undefined') {
        unsubscribe();
      }
    };
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
