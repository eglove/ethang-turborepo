import { useContext } from 'react';

import { CheckoutItem } from '../../components/checkout-item/checkout-item';
import { CartContext } from '../../contexts/cart-context';
import styles from './checkout.module.css';

export function Checkout(): JSX.Element {
  const { cartItems, cartTotal } = useContext(CartContext);

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
