import type { CartItem } from '../../utils/types';
import type {
  CartContextAction,
  CartContextType,
  CartReducerType,
} from './cart-types';

// @ts-expect-error additional values to be filled in later
const CART_INITIAL_STATE: CartContextType = {
  cartCount: 0,
  cartItems: [],
  cartTotal: 0,
  isCartOpen: false,
};

export const cartReducer = (
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: CartContextType = CART_INITIAL_STATE,
  action: CartContextAction<CartReducerType>
): CartContextType => {
  const { payload, type } = action;

  switch (type) {
    case 'cart/SET_CART_ITEMS': {
      return {
        ...state,
        cartItems: payload as CartItem[],
      };
    }

    case 'cart/SET_IS_CART_OPEN': {
      return {
        ...state,
        isCartOpen: payload as boolean,
      };
    }

    default: {
      return state;
    }
  }
};
