import type { Dispatch } from 'redux';

import { firebase } from '../../utils/firebase/utils-firebase';
import type { ShopCategory } from '../../utils/types';
import type { CategoryActionType } from './category-type';

type CategoriesAction<PayloadType> = {
  payload: PayloadType;
  type: CategoryActionType;
};

export const fetchCategoriesStart = (): CategoriesAction<null> => {
  return { payload: null, type: 'categories/FETCH_CATEGORIES_START' };
};

export const fetchCategoriesSuccess = (
  categories: ShopCategory[]
): CategoriesAction<ShopCategory[]> => {
  return {
    payload: categories,
    type: 'categories/FETCH_CATEGORIES_SUCCESS',
  };
};

export const fetchCategoriesFail = (
  error: unknown
): CategoriesAction<unknown> => {
  return {
    payload: error,
    type: 'categories/FETCH_CATEGORIES_FAIL',
  };
};

export const fetchCategoriesAsync = async (
  dispatch: Dispatch
): Promise<void> => {
  dispatch(fetchCategoriesStart());

  try {
    const categories = await firebase.getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categories));
  } catch (error: unknown) {
    dispatch(fetchCategoriesFail(error));
  }
};
