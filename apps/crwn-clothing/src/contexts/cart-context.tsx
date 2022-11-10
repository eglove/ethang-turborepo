import { createContext, useMemo, useReducer } from 'react';

import type { CartItem, ShopDatum } from '../utils/types';
import type {
  CartContextAction,
  CartContextType,
  CartProviderProperties,
  CartReducerType,
  UpdateCartItemsReducerType,
} from './cart-context-types';

// @ts-expect-error additional values to be filled in later
const INITIAL_STATE: CartContextType = {
  cartCount: 0,
  cartItems: [],
  cartTotal: 0,
  isCartOpen: false,
};

export const CartContext = createContext<CartContextType>(INITIAL_STATE);

const cartReducer = (
  state: CartContextType,
  action: CartContextAction<CartReducerType>
): CartContextType => {
  const { payload, type } = action;

  switch (type) {
    case 'SET_CART_ITEMS': {
      return {
        ...state,
        ...(payload as UpdateCartItemsReducerType),
      };
    }

    case 'SET_IS_CART_OPEN': {
      return {
        ...state,
        isCartOpen: payload as boolean,
      };
    }

    default: {
      throw new Error('Action type not found.');
    }
  }
};

export function CartProvider({
  children,
}: CartProviderProperties): JSX.Element {
  const [{ cartItems, cartTotal, cartCount, isCartOpen }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

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

      updateCartItemsReducer(newCartItems);
    };

    const removeItemFromCart = (cartItemToRemove: CartItem): void => {
      const existingItem = cartItems.find(item => {
        return item.id === cartItemToRemove.id;
      });
      let newCartItems = [];

      if (typeof existingItem !== 'undefined') {
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

        updateCartItemsReducer(newCartItems);
      }
    };

    const clearItemFromCart = (id: number): void => {
      const newCartItems = cartItems.filter(item => {
        return item.id !== id;
      });
      updateCartItemsReducer(newCartItems);
    };

    const setIsCartOpen = (isCartOpen: boolean): void => {
      dispatch({ payload: isCartOpen, type: 'SET_IS_CART_OPEN' });
    };

    const updateCartItemsReducer = (newCartItems: CartItem[]): void => {
      const cartCount = newCartItems.reduce((total, item) => {
        return total + item.quantity;
      }, 0);

      const cartTotal = newCartItems.reduce((total, item) => {
        return total + item.quantity * item.price;
      }, 0);

      dispatch({
        payload: { cartCount, cartItems: newCartItems, cartTotal },
        type: 'SET_CART_ITEMS',
      });
    };

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
