import type { AllEffect } from 'redux-saga/effects';
import { all, call } from 'redux-saga/effects';

import type { FetchCategoriesGenerator } from './categories/category-saga';
import { categoriesSaga } from './categories/category-saga';
import { userSaga } from './user/user-saga';

export function* rootSaga(): Generator<AllEffect<FetchCategoriesGenerator>> {
  yield all([call(categoriesSaga), call(userSaga)]);
}
