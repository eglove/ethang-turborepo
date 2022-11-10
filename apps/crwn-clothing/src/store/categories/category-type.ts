import type { ShopCategory } from '../../utils/types';

export type CategoryActionType =
  | 'categories/FETCH_CATEGORIES_START'
  | 'categories/FETCH_CATEGORIES_SUCCESS'
  | 'categories/FETCH_CATEGORIES_FAIL';

export type CategoryContextType = {
  categories: ShopCategory[];
  error: unknown;
  isLoading: boolean;
};

export type CategoryProviderProperties = {
  children: JSX.Element | JSX.Element[];
};

export type CategoryAction = {
  payload: CategoryPayload<CategoryActionType>;
  type: CategoryActionType;
};

export type CategoryPayload<Type extends CategoryActionType> =
  Type extends 'categories/FETCH_CATEGORIES_SUCCESS'
    ? ShopCategory[]
    : Type extends 'categories/FETCH_CATEGORIES_START'
    ? null
    : Error;
