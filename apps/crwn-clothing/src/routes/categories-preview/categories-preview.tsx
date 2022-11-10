import { useContext } from 'react';

import { CategoryPreview } from '../../components/category-preview/category-preview';
import { CategoryContext } from '../../contexts/category-context';

export function CategoriesPreview(): JSX.Element {
  const { categories } = useContext(CategoryContext);

  return (
    <>
      {Object.keys(categories).map(title => {
        const products = categories[title];

        return (
          <CategoryPreview category={{ items: products, title }} key={title} />
        );
      })}
    </>
  );
}
