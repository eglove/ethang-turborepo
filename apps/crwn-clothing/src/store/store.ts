import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import { rootReducer } from './root-reducer';

export type StoreState = ReturnType<typeof store['getState']>;

const middlewares = [logger, thunk];

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  middleware(getDefaultMiddleware) {
    return [...getDefaultMiddleware(), ...middlewares];
  },
  reducer: persistedReducer,
});

export const persistObject = persistStore(store);
