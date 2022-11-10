import { Link } from 'react-router-dom';

import type { ShopCategory } from '../../utils/types';
import { ProductCard } from '../product-card/product-card';
import styles from './category-preview.module.css';

type CategoryPreviewProperties = {
  category: ShopCategory;
};

export function CategoryPreview({
  category,
}: CategoryPreviewProperties): JSX.Element {
  const { title, items } = category;

  return (
    <div className={styles.CategoryPreviewContainer}>
      <Link className={styles.Title} to={title}>
        {title.toUpperCase()}
      </Link>
      <div className={styles.Preview}>
        {items.slice(0, 4).map(item => {
          return <ProductCard key={item.id} product={item} />;
        })}
      </div>
    </div>
  );
}
