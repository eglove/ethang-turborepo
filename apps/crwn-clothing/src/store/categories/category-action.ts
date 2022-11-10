import type { ShopCategory } from '../../utils/types';
import type { CategoryActionType } from './category-type';

type SetCategoriesMapReturn = {
  payload: ShopCategory[];
  type: CategoryActionType;
};

export const setCategories = (
  categories: ShopCategory[]
): SetCategoriesMapReturn => {
  return {
    payload: categories,
    type: 'categories/SET_CATEGORIES',
  };
};
