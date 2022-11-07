import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { CartDropdown } from '../../components/cart-dropdown/cart-dropdown';
import { CartIcon } from '../../components/cart-icon/cart-icon';
import { CartContext } from '../../contexts/cart-context';
import { UserContext } from '../../contexts/user-context';
import { firebase } from '../../utils/firebase/utils-firebase';
import styles from './navigation.module.css';

const handleSignOut = async (): Promise<void> => {
  await firebase.signOutUser();
};

export function Navigation(): JSX.Element {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

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
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
}
