import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { fetchCategoriesStart } from '../../store/categories/category-action';
import { CategoriesPreview } from '../categories-preview/categories-preview';
import { Category } from '../category/category';

export function Shop(): JSX.Element {
  const dispatch = useDispatch();
  dispatch(fetchCategoriesStart());

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route element={<Category />} path=":category" />
    </Routes>
  );
}
