import React from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Directory } from './components/directory/directory';
import { Authentication } from './routes/authentication/authentication';
import { Checkout } from './routes/checkout/checkout';
import { Navigation } from './routes/navigation/navigation';
import { Shop } from './routes/shop/shop';
import { checkUserSession } from './store/user/user-action';

function App(): JSX.Element {
  const dispatch = useDispatch();
  dispatch(checkUserSession());

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
