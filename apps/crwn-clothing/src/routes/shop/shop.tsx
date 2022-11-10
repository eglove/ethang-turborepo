import { Route, Routes } from 'react-router-dom';

import { CategoriesPreview } from '../categories-preview/categories-preview';
import { Category } from '../category/category';

export function Shop(): JSX.Element {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route element={<Category />} path=":category" />
    </Routes>
  );
}
