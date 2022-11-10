import type { CategoryAction, CategoryContextType } from './category-type';

export const CATEGORIES_INITIAL_STATE: CategoryContextType = {
  categories: [],
};

export const categoriesReducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: CategoryContextType = CATEGORIES_INITIAL_STATE,
  action: CategoryAction
): CategoryContextType => {
  const { type, payload } = action;

  switch (type) {
    case 'categories/SET_CATEGORIES': {
      return {
        ...state,
        categories: payload,
      };
    }

    default: {
      return state;
    }
  }
};
