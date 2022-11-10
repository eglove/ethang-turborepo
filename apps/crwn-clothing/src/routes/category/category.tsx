import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { ProductCard } from '../../components/product-card/product-card';
import { CategoryContext } from '../../contexts/category-context';
import type { ShopDatum } from '../../utils/types';
import styles from './category.module.css';

export function Category(): JSX.Element {
  const { category } = useParams();
  const { categories } = useContext(CategoryContext);

  let products: ShopDatum[] = [];
  if (typeof category !== 'undefined') {
    products = categories[category];
  }

  return (
    <>
      <h2 className={styles.Title}>{category?.toUpperCase()}</h2>
      <div className={styles.DirectoryItemContainer}>
        {products?.map(product => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </>
  );
}
