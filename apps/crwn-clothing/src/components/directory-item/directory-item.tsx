import React from 'react';
import { Link } from 'react-router-dom';

import type { Category } from '../../data/categories';
import styles from './directory-item.module.css';

type DirectoryItemProperties = {
  category: Category;
};

export function DirectoryItem({
  category: { imageUrl, title },
}: DirectoryItemProperties): JSX.Element {
  return (
    <div className={styles.DirectoryItemContainer}>
      <div
        className={styles.BackgroundImage}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className={styles.DirectoryItemBody}>
        <Link to={`/shop/${title.toLowerCase()}`}>
          <h2>{title}</h2>
          <p>Shop Now</p>
        </Link>
      </div>
    </div>
  );
}
