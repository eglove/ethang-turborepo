import type { Dispatch, SetStateAction } from 'react';
import { createContext, useEffect, useMemo, useState } from 'react';

import { firebase } from '../utils/firebase/utils-firebase';
import type { CategoryMap } from '../utils/types';

type CategoryContextType = {
  categories: CategoryMap;
  setCategories: Dispatch<SetStateAction<CategoryMap>>;
};

type CategoryProviderProperties = {
  children: JSX.Element | JSX.Element[];
};

// @ts-expect-error set in Provider
export const CategoryContext = createContext<CategoryContextType>({
  categories: {},
});

export function CategoryProvider({
  children,
}: CategoryProviderProperties): JSX.Element {
  const [categories, setCategories] = useState<CategoryMap>({});

  useEffect(() => {
    const getCategoryMap = async (): Promise<void> => {
      const map = await firebase.getCategoriesAndDocuments();
      setCategories(map);
    };

    getCategoryMap().catch(error => {
      console.error(error);
    });
  }, []);

  const value = useMemo(() => {
    return { categories, setCategories };
  }, [categories]);

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}
