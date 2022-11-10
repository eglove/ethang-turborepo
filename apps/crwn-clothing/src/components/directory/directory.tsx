import React from 'react';
import { Outlet } from 'react-router-dom';

import { categories } from '../../data/categories';
import { DirectoryItem } from '../directory-item/directory-item';
import styles from './directory.module.css';

export function Directory(): JSX.Element {
  return (
    <>
      <Outlet />
      <div className={styles.CategoriesContainer}>
        {categories.map(category => {
          return <DirectoryItem category={category} key={category.id} />;
        })}
      </div>
    </>
  );
}
