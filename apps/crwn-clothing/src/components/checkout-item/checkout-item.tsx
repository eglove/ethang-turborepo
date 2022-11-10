import { useContext } from 'react';

import { CartContext } from '../../contexts/cart-context';
import type { CartItem } from '../../utils/types';
import styles from './checkout-item.module.css';

type CheckoutItemProperties = {
  cartItem: CartItem;
};

export function CheckoutItem({
  cartItem,
}: CheckoutItemProperties): JSX.Element {
  const { price, imageUrl, quantity, name, id } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <div className={styles.CheckoutItemContainer}>
      <div className={styles.ImageContainer}>
        <img alt={name} src={imageUrl} />
      </div>
      <span className={styles.Name}>{name}</span>
      <span className={styles.Quantity}>
        <div
          className={styles.Arrow}
          onClick={(): void => {
            removeItemFromCart(cartItem);
          }}
        >
          &#10094;
        </div>
        <span className={styles.Value}>{quantity}</span>
        <div
          className={styles.Arrow}
          onClick={(): void => {
            addItemToCart(cartItem);
          }}
        >
          &#10095;
        </div>
      </span>
      <span className={styles.Price}>{price}</span>
      <div
        className={styles.RemoveButton}
        onClick={(): void => {
          clearItemFromCart(id);
        }}
      >
        &#10005;
      </div>
    </div>
  );
}
