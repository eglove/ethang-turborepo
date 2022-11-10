import { createSelector } from 'reselect';

import type { StoreState } from '../store';
import type { CartContextType } from './cart-types';

const selectCartReducer = (state: StoreState): CartContextType => {
  return state.cart;
};

export const selectCartItems = createSelector([selectCartReducer], cart => {
  return cart.cartItems;
});

export const selectIsCartOpen = createSelector([selectCartReducer], cart => {
  return cart.isCartOpen;
});

export const selectCartCount = createSelector([selectCartItems], cartItems => {
  return cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
});

export const selectCartTotal = createSelector([selectCartItems], cartItems => {
  return cartItems.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);
});
