import type { Unsubscribe, User } from 'firebase/auth';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { createContext, useEffect, useMemo, useState } from 'react';

import { firebase } from '../utils/firebase/utils-firebase';

type UserProviderProperties = {
  children: ReactNode;
};

type UserContextType = {
  currentUser: User | null;
  setCurrentUser: Dispatch<SetStateAction<User | null>>;
};

// @ts-expect-error set in Provider
export const UserContext = createContext<UserContextType>({
  currentUser: null,
});

export function UserProvider({
  children,
}: UserProviderProperties): JSX.Element {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

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
