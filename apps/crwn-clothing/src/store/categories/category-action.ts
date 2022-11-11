import type { ShopCategory } from '../../utils/types';
import type { CategoryActionType } from './category-type';

export type CategoriesAction<PayloadType> = {
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
  error: string
): CategoriesAction<string> => {
  return {
    payload: error,
    type: 'categories/FETCH_CATEGORIES_FAIL',
  };
};
