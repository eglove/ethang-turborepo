import type { CartItem, ShopDatum } from '../utils/types';

export type CartReducerType = 'SET_CART_ITEMS' | 'SET_IS_CART_OPEN';

export type UpdateCartItemsReducerType = Pick<
  CartContextType,
  'cartItems' | 'cartCount' | 'cartTotal'
>;

export type CartContextAction<Type extends CartReducerType> = {
  payload: Type extends 'SET_CART_ITEMS' ? UpdateCartItemsReducerType : boolean;
  type: CartReducerType;
};

export type CartContextType = {
  addItemToCart: (shopDatum: ShopDatum) => void;
  cartCount: number;
  cartItems: CartItem[];
  cartTotal: number;
  clearItemFromCart: (id: number) => void;
  isCartOpen: boolean;
  removeItemFromCart: (cartItemToRemove: CartItem) => void;
  setIsCartOpen: (isCartOpen: boolean) => void;
};

export type CartProviderProperties = {
  children: JSX.Element | JSX.Element[];
};
