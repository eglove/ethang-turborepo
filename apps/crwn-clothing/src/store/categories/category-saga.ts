import type {
  AllEffect,
  CallEffect,
  ForkEffect,
  PutEffectDescriptor,
  SimpleEffect,
} from 'redux-saga/effects';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { getCategories } from '../../utils/firebase/utils-firebase';
import type { ShopCategory } from '../../utils/types';
import type { CategoriesAction } from './category-action';
import { fetchCategoriesFail, fetchCategoriesSuccess } from './category-action';

export type FetchCategoriesGenerator =
  | CallEffect<ShopCategory[]>
  | SimpleEffect<'PUT', PutEffectDescriptor<CategoriesAction<unknown>>>;

export function* fetchCategoriesAsync(): Generator<FetchCategoriesGenerator> {
  try {
    const categoriesArray = yield call(getCategories);
    yield put(fetchCategoriesSuccess(categoriesArray as ShopCategory[]));
  } catch (error: unknown) {
    yield put(fetchCategoriesFail(JSON.stringify(error)));
  }
}

export function* onFetchCategories(): Generator<ForkEffect> {
  yield takeLatest('categories/FETCH_CATEGORIES_START', fetchCategoriesAsync);
}

export function* categoriesSaga(): Generator<
  AllEffect<FetchCategoriesGenerator>
> {
  yield all([call(onFetchCategories)]);
}
