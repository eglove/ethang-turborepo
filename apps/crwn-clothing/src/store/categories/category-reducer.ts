import type { ShopCategory } from '../../utils/types';
import type { CategoryAction, CategoryContextType } from './category-type';

export const CATEGORIES_INITIAL_STATE: CategoryContextType = {
  categories: [],
  error: null,
  isLoading: false,
};

export const categoriesReducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: CategoryContextType = CATEGORIES_INITIAL_STATE,
  action: CategoryAction
): CategoryContextType => {
  const { type, payload } = action;

  switch (type) {
    case 'categories/FETCH_CATEGORIES_START': {
      return {
        ...state,
        isLoading: true,
      };
    }

    case 'categories/FETCH_CATEGORIES_SUCCESS': {
      return {
        ...state,
        categories: payload as ShopCategory[],
        isLoading: false,
      };
    }

    case 'categories/FETCH_CATEGORIES_FAIL': {
      return {
        ...state,
        error: payload as unknown,
        isLoading: true,
      };
    }

    default: {
      return state;
    }
  }
};
