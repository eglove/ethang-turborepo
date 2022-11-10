import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app';
import { CartProvider } from './contexts/cart-context';
import { CategoryProvider } from './contexts/category-context';
import { UserProvider } from './contexts/user-context';

// @ts-expect-error Assume this exists
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoryProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoryProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
