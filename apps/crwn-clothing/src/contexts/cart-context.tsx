import type { Dispatch, SetStateAction } from 'react';
import { createContext, useMemo, useState } from 'react';

import type { CartItem, ShopDatum } from '../utils/types';

type CartContextType = {
  addItemToCart: (shopDatum: ShopDatum) => void;
  cartCount: number;
  cartItems: CartItem[];
  cartTotal: number;
  clearItemFromCart: (id: number) => void;
  isCartOpen: boolean;
  removeItemFromCart: (cartItemToRemove: CartItem) => void;
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
  const [cartTotal, setCartTotal] = useState<number>(0);

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

    const removeItemFromCart = (cartItemToRemove: CartItem): void => {
      const existingItem = cartItems.find(item => {
        return item.id === cartItemToRemove.id;
      });

      if (typeof existingItem !== 'undefined') {
        if (existingItem.quantity === 1) {
          setCartItems(
            cartItems.filter(item => {
              return item.id !== existingItem.id;
            })
          );
        } else {
          setCartItems(
            cartItems.map(item => {
              return item.id === cartItemToRemove.id
                ? { ...item, quantity: item.quantity - 1 }
                : item;
            })
          );
        }
      }
    };

    const clearItemFromCart = (id: number): void => {
      setCartItems(
        cartItems.filter(item => {
          return item.id !== id;
        })
      );
    };

    setCartCount(
      cartItems.reduce((total, item) => {
        return total + item.quantity;
      }, 0)
    );

    setCartTotal(
      cartItems.reduce((total, item) => {
        return total + item.quantity * item.price;
      }, 0)
    );

    return {
      addItemToCart,
      cartCount,
      cartItems,
      cartTotal,
      clearItemFromCart,
      isCartOpen,
      removeItemFromCart,
      setIsCartOpen,
    };
  }, [cartCount, cartItems, cartTotal, isCartOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
