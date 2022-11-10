import type { Unsubscribe } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Directory } from './components/directory/directory';
import { Authentication } from './routes/authentication/authentication';
import { Checkout } from './routes/checkout/checkout';
import { Navigation } from './routes/navigation/navigation';
import { Shop } from './routes/shop/shop';
import { setCurrentUser } from './store/user/user-action';
import { firebase } from './utils/firebase/utils-firebase';

function App(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    let unsubscribe: Unsubscribe;

    const listen = async (): Promise<void> => {
      unsubscribe = await firebase.authStateChangedListener(async user => {
        if (user !== null) {
          await firebase.createUserDocumentFromAuth(user);
        }

        dispatch(setCurrentUser(user));
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
  }, [dispatch]);

  return (
    <Routes>
      <Route element={<Navigation />} path="/">
        <Route index element={<Directory />} />
        <Route element={<Shop />} path="shop/*" />
        <Route element={<Authentication />} path="auth" />
        <Route element={<Checkout />} path="checkout" />
      </Route>
    </Routes>
  );
}

export default App;
