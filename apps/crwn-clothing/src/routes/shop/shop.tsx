import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { setCategories } from '../../store/categories/category-action';
import { firebase } from '../../utils/firebase/utils-firebase';
import { CategoriesPreview } from '../categories-preview/categories-preview';
import { Category } from '../category/category';

export function Shop(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategoryMap = async (): Promise<void> => {
      const categories = await firebase.getCategoriesAndDocuments();
      dispatch(setCategories(categories));
    };

    getCategoryMap().catch(error => {
      console.error(error);
    });
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route element={<Category />} path=":category" />
    </Routes>
  );
}
