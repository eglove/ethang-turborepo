import type { ShopCategory } from '../../utils/types';

export type CategoryActionType = 'categories/SET_CATEGORIES';

export type CategoryContextType = {
  categories: ShopCategory[];
};

export type CategoryProviderProperties = {
  children: JSX.Element | JSX.Element[];
};

export type CategoryAction = {
  payload: CategoryPayload<CategoryActionType>;
  type: CategoryActionType;
};

export type CategoryPayload<Type extends CategoryActionType> =
  Type extends 'categories/SET_CATEGORIES' ? ShopCategory[] : null;
