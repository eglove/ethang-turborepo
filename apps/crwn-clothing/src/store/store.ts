import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './root-reducer';
import { rootSaga } from './root-saga';

export type StoreState = ReturnType<typeof store['getState']>;

const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, sagaMiddleware];

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

sagaMiddleware.run(rootSaga);

export const persistObject = persistStore(store);
