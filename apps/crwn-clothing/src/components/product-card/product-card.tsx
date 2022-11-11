import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart } from '../../store/cart/cart-action';
import { selectCartItems } from '../../store/cart/cart-selector';
import type { ShopDatum } from '../../utils/types';
import { Button } from '../button/button';
import styles from './product-card.module.css';

type ProductCardProperties = {
  product: ShopDatum;
};

export function ProductCard({ product }: ProductCardProperties): JSX.Element {
  const { imageUrl, name, price } = product;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const handleAddToCart = (): void => {
    dispatch(addItemToCart(cartItems, product));
  };

  return (
    <div className={styles.ProductCardContainer}>
      <img alt={name} src={imageUrl} />
      <div className={styles.Footer}>
        <span className={styles.Name}>{name}</span>
        <span className={styles.Price}>${price}</span>
      </div>
      <Button
        variant="inverted"
        properties={{
          onClick: handleAddToCart,
        }}
      >
        Add to Cart
      </Button>
    </div>
  );
}
