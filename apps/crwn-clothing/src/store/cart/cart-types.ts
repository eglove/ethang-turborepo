import type { CartItem, ShopDatum } from '../../utils/types';

export type CartAction<PayloadType> = {
  payload: PayloadType;
  type: CartReducerType;
};

export type CartReducerType = 'cart/SET_CART_ITEMS' | 'cart/SET_IS_CART_OPEN';

export type CartContextAction<Type extends CartReducerType> = {
  payload: Type extends 'cart/SET_CART_ITEMS' ? CartItem[] : boolean;
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
