import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ProductCard } from '../../components/product-card/product-card';
import { Spinner } from '../../components/spinner';
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '../../store/categories/category-selector';
import type { ShopDatum } from '../../utils/types';
import styles from './category.module.css';

export function Category(): JSX.Element {
  const { category } = useParams();
  const categories = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  let products: ShopDatum[] = [];
  if (category !== undefined) {
    products = categories[category];
  }

  return (
    <>
      <h2 className={styles.Title}>{category?.toUpperCase()}</h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className={styles.DirectoryItemContainer}>
          {products?.map(product => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      )}
    </>
  );
}
