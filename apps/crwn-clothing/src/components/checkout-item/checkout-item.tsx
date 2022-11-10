import { useDispatch, useSelector } from 'react-redux';

import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from '../../store/cart/cart-action';
import { selectCartItems } from '../../store/cart/cart-selector';
import type { CartItem } from '../../utils/types';
import styles from './checkout-item.module.css';

type CheckoutItemProperties = {
  cartItem: CartItem;
};

export function CheckoutItem({
  cartItem,
}: CheckoutItemProperties): JSX.Element {
  const { price, imageUrl, quantity, name, id } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

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
            dispatch(removeItemFromCart(cartItems, cartItem));
          }}
        >
          &#10094;
        </div>
        <span className={styles.Value}>{quantity}</span>
        <div
          className={styles.Arrow}
          onClick={(): void => {
            dispatch(addItemToCart(cartItems, cartItem));
          }}
        >
          &#10095;
        </div>
      </span>
      <span className={styles.Price}>{price}</span>
      <div
        className={styles.RemoveButton}
        onClick={(): void => {
          dispatch(clearItemFromCart(cartItems, id));
        }}
      >
        &#10005;
      </div>
    </div>
  );
}
