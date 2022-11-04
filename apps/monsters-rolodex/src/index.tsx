import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './app';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOM.createRoot(document.querySelector('#root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
