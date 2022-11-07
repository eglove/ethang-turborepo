import type { CartItem as CartItemType } from '../../utils/types';
import styles from './cart-item.module.css';

type CartItemProperties = {
  cartItem: CartItemType;
};

export function CartItem({
  cartItem: { name, quantity, imageUrl, price },
}: CartItemProperties): JSX.Element {
  return (
    <div className={styles.CartItemContainer}>
      <img alt={name} src={imageUrl} />
      <div className={styles.ItemDetails}>
        <span className={styles.Name}>{name}</span>
        <span className={styles.Price}>{`${quantity} x $${price}`}</span>
      </div>
    </div>
  );
}
