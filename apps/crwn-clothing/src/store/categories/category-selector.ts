import { createSelector } from 'reselect';

import type { CategoryMap } from '../../utils/types';
import type { StoreState } from '../store';
import type { CategoryContextType } from './category-type';

const selectCategoryReducer = (state: StoreState): CategoryContextType => {
  return state.categories;
};

export const selectCategories = createSelector(
  [selectCategoryReducer],
  categoriesSlice => {
    return categoriesSlice.categories;
  }
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap => {
    const categoryMap: CategoryMap = {};

    if (categories !== null) {
      for (const category of categories) {
        const { title, items } = category;

        categoryMap[title.toLowerCase()] = items;
      }
    }

    return categoryMap;
  }
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  category => {
    return category.isLoading;
  }
);
