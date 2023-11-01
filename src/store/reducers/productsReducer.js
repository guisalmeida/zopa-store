const INITIAL_STATE = {
  allProducts: [],
}

export const productsReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action

  switch (type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        allProducts: payload,
      }
    default:
      return state
  }
}
