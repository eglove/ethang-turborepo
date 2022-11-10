import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

const middlewares = [logger];

export type StoreState = ReturnType<typeof store['getState']>;

export const store = configureStore({
  middleware(getDefaultMiddleware) {
    return [...getDefaultMiddleware(), ...middlewares];
  },
  reducer: rootReducer,
});
