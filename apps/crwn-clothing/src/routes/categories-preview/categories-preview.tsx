import { useSelector } from 'react-redux';

import { CategoryPreview } from '../../components/category-preview/category-preview';
import { Spinner } from '../../components/spinner';
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '../../store/categories/category-selector';

export function CategoriesPreview(): JSX.Element {
  const categories = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  if (isLoading) {
    return <Spinner />;
  }

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
