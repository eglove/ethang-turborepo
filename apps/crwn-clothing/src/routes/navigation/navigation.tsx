import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import styles from './navigation.module.css';

export function Navigation(): JSX.Element {
  return (
    <>
      <div className={styles.Navigation}>
        <Link className={styles.LogoContainer} to="/">
          <CrwnLogo className={styles.Logo} />
        </Link>
        <div className={styles.NavLinksContainer}>
          <Link className={styles.NavLink} to="/shop">
            Shop
          </Link>
          <Link className={styles.NavLink} to="/auth">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}
