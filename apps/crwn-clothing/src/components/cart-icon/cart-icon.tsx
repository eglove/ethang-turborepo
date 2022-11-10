import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart-context';
import styles from './cart-icon.module.css';

export function CartIcon(): JSX.Element {
  const { setIsCartOpen, cartCount, isCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = (): void => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className={styles.CartIconContainer} onClick={toggleIsCartOpen}>
      <ShoppingIcon className={styles.ShoppingIcon} />
      <span className={styles.ItemCount}>{cartCount}</span>
    </div>
  );
}
