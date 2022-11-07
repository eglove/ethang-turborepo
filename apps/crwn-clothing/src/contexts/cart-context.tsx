import type { Dispatch, SetStateAction } from 'react';
import { createContext, useMemo, useState } from 'react';

import type { CartItem, ShopDatum } from '../utils/types';

type CartContextType = {
  addItemToCart: (shopDatum: ShopDatum) => void;
  cartCount: number;
  cartItems: CartItem[];
  isCartOpen: boolean;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
};

type CartProviderProperties = {
  children: JSX.Element | JSX.Element[];
};

// @ts-expect-error set in Provider
export const CartContext = createContext<CartContextType>({
  isCartOpen: false,
});

export function CartProvider({
  children,
}: CartProviderProperties): JSX.Element {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartCount, setCartCount] = useState<number>(0);

  const value = useMemo(() => {
    const addItemToCart = (productToAdd: ShopDatum): void => {
      const existingItem = cartItems.find(item => {
        return item.id === productToAdd.id;
      });

      const newCartItems =
        typeof existingItem === 'undefined'
          ? [...cartItems, { ...productToAdd, quantity: 1 }]
          : cartItems.map(item => {
              return item.id === productToAdd.id
                ? { ...item, quantity: item.quantity + 1 }
                : item;
            });

      setCartItems(newCartItems);
    };

    setCartCount(
      cartItems.reduce((total, item) => {
        return total + item.quantity;
      }, 0)
    );

    return { addItemToCart, cartCount, cartItems, isCartOpen, setIsCartOpen };
  }, [cartCount, cartItems, isCartOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
