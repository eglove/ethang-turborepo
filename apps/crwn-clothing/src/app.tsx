import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Directory } from './components/directory/directory';
import { Authentication } from './routes/authentication/authentication';
import { Navigation } from './routes/navigation/navigation';
import { Shop } from './routes/shop/shop';

function App(): JSX.Element {
  return (
    <Routes>
      <Route element={<Navigation />} path="/">
        <Route index element={<Directory />} />
        <Route element={<Shop />} path="shop" />
        <Route element={<Authentication />} path="auth" />
      </Route>
    </Routes>
  );
}

export default App;
