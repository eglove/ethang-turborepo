import type { CartItem, ShopDatum } from '../../utils/types';
import type { CartAction, CartReducerType } from './cart-types';

type SetIsCartOpenReturn = {
  payload: boolean;
  type: CartReducerType;
};

export const setIsCartOpen = (isCartOpen: boolean): SetIsCartOpenReturn => {
  return { payload: isCartOpen, type: 'cart/SET_IS_CART_OPEN' };
};

export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: ShopDatum
): CartAction<CartItem[]> => {
  const existingItem = cartItems.find(item => {
    return item.id === productToAdd.id;
  });

  const newCartItems =
    existingItem === undefined
      ? [...cartItems, { ...productToAdd, quantity: 1 }]
      : cartItems.map(item => {
          return item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });

  return { payload: newCartItems, type: 'cart/SET_CART_ITEMS' };
};

export const removeItemFromCart = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem
): CartAction<CartItem[]> => {
  const existingItem = cartItems.find(item => {
    return item.id === cartItemToRemove.id;
  });
  let newCartItems: CartItem[] = [];

  if (existingItem !== undefined) {
    newCartItems =
      existingItem.quantity === 1
        ? cartItems.filter(item => {
            return item.id !== existingItem.id;
          })
        : cartItems.map(item => {
            return item.id === cartItemToRemove.id
              ? { ...item, quantity: item.quantity - 1 }
              : item;
          });
  }

  return { payload: newCartItems, type: 'cart/SET_CART_ITEMS' };
};

export const clearItemFromCart = (
  cartItems: CartItem[],
  id: number
): CartAction<CartItem[]> => {
  const newCartItems = cartItems.filter(item => {
    return item.id !== id;
  });

  return { payload: newCartItems, type: 'cart/SET_CART_ITEMS' };
};
