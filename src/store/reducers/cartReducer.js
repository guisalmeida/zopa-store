const INITIAL_STATE = {
  cartProducts: [],
  isCartOpen: false,
  cartCount: 0,
  cartTotal: 0,
}

export const cartReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action

  switch (type) {
    case 'SET_CART_PRODUCTS':
      return {
        ...state,
        ...payload,
      }
    case 'SET_IS_CART_OPEN':
      return {
        ...state,
        isCartOpen: payload,
      }
    default:
      return state
  }
}
