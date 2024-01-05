export type TAction<T> = {
  type: T;
};

export type TActionWithPayload<T, P> = {
  type: T;
  payload: P;
};

export const SEARCH_ACTION_TYPE = {
  SET_IS_SEARCH_OPEN: 'SET_IS_SEARCH_OPEN',
  SET_SEARCH_PRODUCTS: 'SET_SEARCH_PRODUCTS',
} as const;

export const USER_ACTION_TYPE = {
  SET_IS_MOBILE_OPEN: 'SET_IS_MOBILE_OPEN',
  CHECK_USER_SESSION: 'CHECK_USER_SESSION',
  SIGN_IN_START: 'SIGN_IN_START',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
  SIGN_IN_FAILED: 'SIGN_IN_FAILED',
  SIGN_UP_START: 'SIGN_UP_START',
  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
  SIGN_UP_FAILED: 'SIGN_UP_FAILED',
  SIGN_OUT_START: 'SIGN_OUT_START',
  SIGN_OUT_SUCCESS: 'SIGN_OUT_SUCCESS',
  SIGN_OUT_FAILED: 'SIGN_OUT_FAILED',
  UPDATE_START: 'UPDATE_START',
  UPDATE_SUCCESS: 'UPDATE_SUCCESS',
  UPDATE_FAILED: 'UPDATE_FAILED',
  DELETE_START: 'DELETE_START',
  DELETE_SUCCESS: 'DELETE_SUCCESS',
  DELETE_FAILED: 'DELETE_FAILED',
  FETCH_USERS_START: 'FETCH_USERS_START',
  FETCH_USERS_SUCCESS: 'FETCH_USERS_SUCCESS',
  FETCH_USERS_FAILED: 'FETCH_USERS_FAILED',
} as const;

export const PRODUCTS_ACTION_TYPE = {
  FETCH_PRODUCTS_START: 'FETCH_PRODUCTS_START',
  FETCH_PRODUCTS_SUCCESS: 'FETCH_PRODUCTS_SUCCESS',
  FETCH_PRODUCTS_FAILED: 'FETCH_PRODUCTS_FAILED',
} as const;

export const CART_ACTION_TYPE = {
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
  SET_CART_PRODUCTS: 'SET_CART_PRODUCTS',
  CREATE_ORDER_START: 'CREATE_ORDER_START',
  CREATE_ORDER_SUCCESS: 'CREATE_ORDER_SUCCESS',
  CREATE_ORDER_FAILED: 'CREATE_ORDER_FAILED',
} as const;
