import React from 'react';
import { Outlet } from 'react-router-dom';

import { categories } from '../../data/categories';
import { CategoryItem } from '../category-item/category-item';
import styles from './directory.module.css';

export function Directory(): JSX.Element {
  return (
    <>
      <Outlet />
      <div className={styles.CategoriesContainer}>
        {categories.map(category => {
          return <CategoryItem category={category} key={category.id} />;
        })}
      </div>
    </>
  );
}
