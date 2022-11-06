import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user-context';
import { firebase } from '../../utils/firebase/utils-firebase';
import styles from './navigation.module.css';

const handleSignOut = async (): Promise<void> => {
  await firebase.signOutUser();
};

export function Navigation(): JSX.Element {
  const { currentUser } = useContext(UserContext);

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
          {currentUser === null ? (
            <Link className={styles.NavLink} to="/auth">
              Sign In
            </Link>
          ) : (
            <span
              className={styles.NavLink}
              role="button"
              onClick={handleSignOut}
            >
              Sign Out
            </span>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
}
