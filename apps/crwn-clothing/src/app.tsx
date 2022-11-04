import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Directory } from './components/directory/directory';
import { Navigation } from './routes/navigation/navigation';

function Shop(): JSX.Element {
  return (
    <div>
      <p>Shop</p>
    </div>
  );
}

function App(): JSX.Element {
  return (
    <Routes>
      <Route element={<Navigation />} path="/">
        <Route index element={<Directory />} />
        <Route element={<Shop />} path="shop" />
      </Route>
    </Routes>
  );
}

export default App;
