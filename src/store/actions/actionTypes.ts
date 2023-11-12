export type TAction<T> = {
  type: T
}

export type TActionWithPayload<T, P> = {
  type: T
  payload: P
}

export const SEARCH_ACTION_TYPE = {
  SET_IS_SEARCH_OPEN: 'SET_IS_SEARCH_OPEN',
  SET_SEARCH_PRODUCTS: 'SET_SEARCH_PRODUCTS',
} as const
