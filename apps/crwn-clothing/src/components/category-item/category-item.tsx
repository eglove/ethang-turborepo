import React from 'react';

import type { Category } from '../../data/categories';
import styles from './category-item.module.css';

type CategoryItemProperties = {
  category: Category;
};

export function CategoryItem({
  category: { imageUrl, title },
}: CategoryItemProperties): JSX.Element {
  return (
    <div className={styles.CategoryContainer}>
      <div
        className={styles.BackgroundImage}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className={styles.CategoryBodyContainer}>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}
