import { AnyAction } from 'redux';
import { TOrder, TProduct } from '../../types';
import {
  createOrderFailed,
  createOrderSuccess,
  fetchOrdersFailed,
  fetchOrdersStart,
  fetchOrdersSuccess,
  setCartProducts,
  setIsCartOpen,
} from '../actions/cartActions';

export type TCartState = {
  readonly cartProducts: TProduct[];
  readonly cartOrders: TOrder[];
  readonly isFetching: boolean;
  readonly isCartOpen: boolean;
};

const INITIAL_STATE: TCartState = {
  cartProducts: [],
  cartOrders: [],
  isFetching: false,
  isCartOpen: false,
};

export const cartReducer = (state = INITIAL_STATE, action: AnyAction) => {
  if (setCartProducts.match(action)) {
    return {
      ...state,
      cartProducts: action.payload,
    };
  }
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }
  if (createOrderSuccess.match(action)) {
    return {
      ...state,
      cartOrders: state.cartOrders.concat(action.payload),
    };
  }
  if (createOrderFailed.match(action)) {
    return {
      ...state,
      error: action.payload,
    };
  }
  if (fetchOrdersStart.match(action)) {
    return {
      ...state,
      isFetching: true,
    };
  }

  if (fetchOrdersSuccess.match(action)) {
    return {
      ...state,
      cartOrders: action.payload,
      isFetching: false,
    };
  }

  if (fetchOrdersFailed.match(action)) {
    return {
      ...state,
      error: action.payload,
      isFetching: false,
    };
  }

  return state;
};
