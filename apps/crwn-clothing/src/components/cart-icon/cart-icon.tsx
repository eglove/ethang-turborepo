import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { setIsCartOpen } from '../../store/cart/cart-action';
import {
  selectCartCount,
  selectIsCartOpen,
} from '../../store/cart/cart-selector';
import styles from './cart-icon.module.css';

export function CartIcon(): JSX.Element {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const toggleIsCartOpen = (): void => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <div className={styles.CartIconContainer} onClick={toggleIsCartOpen}>
      <ShoppingIcon className={styles.ShoppingIcon} />
      <span className={styles.ItemCount}>{cartCount}</span>
    </div>
  );
}
