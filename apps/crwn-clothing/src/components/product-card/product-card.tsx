import { useContext } from 'react';

import { CartContext } from '../../contexts/cart-context';
import type { ShopDatum } from '../../utils/types';
import { Button } from '../button/button';
import styles from './product-card.module.css';

type ProductCardProperties = {
  product: ShopDatum;
};

export function ProductCard({ product }: ProductCardProperties): JSX.Element {
  const { imageUrl, name, price } = product;

  const { addItemToCart } = useContext(CartContext);

  const handleAddToCart = (): void => {
    addItemToCart(product);
  };

  return (
    <div className={styles.ProductCardContainer}>
      <img alt={name} src={imageUrl} />
      <div className={styles.Footer}>
        <span className={styles.Name}>{name}</span>
        <span className={styles.Price}>{price}</span>
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
