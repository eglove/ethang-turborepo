import { useContext } from 'react';

import { ProductCard } from '../../components/product-card/product-card';
import { ProductContext } from '../../contexts/product-context';
import styles from './shop.module.css';

export function Shop(): JSX.Element {
  const { products } = useContext(ProductContext);

  return (
    <div className={styles.ProductsContainer}>
      {products.map(product => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}
