import { useSelector } from 'react-redux';

import { CheckoutItem } from '../../components/checkout-item/checkout-item';
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart-selector';
import styles from './checkout.module.css';

export function Checkout(): JSX.Element {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className={styles.CheckoutContainer}>
      <div className={styles.CheckoutHeader}>
        <div className={styles.HeaderBlock}>
          <span>Product</span>
        </div>
        <div className={styles.HeaderBlock}>
          <span>Description</span>
        </div>
        <div className={styles.HeaderBlock}>
          <span>Quantity</span>
        </div>
        <div className={styles.HeaderBlock}>
          <span>Price</span>
        </div>
        <div className={styles.HeaderBlock}>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map(item => {
        return <CheckoutItem cartItem={item} key={item.id} />;
      })}
      <span className={styles.Total}>Total: ${cartTotal}</span>
    </div>
  );
}
