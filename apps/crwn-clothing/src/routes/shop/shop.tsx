import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { fetchCategoriesAsync } from '../../store/categories/category-action';
import { CategoriesPreview } from '../categories-preview/categories-preview';
import { Category } from '../category/category';

export function Shop(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-expect-error This should be a promise
    dispatch(fetchCategoriesAsync);
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route element={<Category />} path=":category" />
    </Routes>
  );
}
