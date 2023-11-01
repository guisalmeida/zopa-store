import { priceToNumber } from '../../utils/currency'

export const addToCart = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.selectedSize === productToAdd.selectedSize,
  )

  if (existingCartItem) {
    const newCartItems = cartItems.map(cartItem =>
      cartItem.selectedSize === productToAdd.selectedSize
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem,
    )
    return setCartProducts(newCartItems)
  }

  const newCartItems = [...cartItems, { ...productToAdd, quantity: 1 }]
  return setCartProducts(newCartItems)
}

export const removeFromCart = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find(
    cartItem => cartItem.selectedSize === productToRemove.selectedSize,
  )

  if (existingCartItem.quantity === 1) {
    const newCartItems = cartItems.filter(cartItem => {
      return cartItem.selectedSize !== productToRemove.selectedSize
    })
    return setCartProducts(newCartItems)
  }

  const newCartItems = cartItems.map(cartItem =>
    cartItem.selectedSize === productToRemove.selectedSize
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem,
  )
  return setCartProducts(newCartItems)
}

export const clearFromCart = (cartItems, productToRemove) => {
  const newCartItems = cartItems.filter(cartItem => {
    return cartItem.selectedSize !== productToRemove.selectedSize
  })
  return setCartProducts(newCartItems)
}

export const setIsCartOpen = bool => ({
  type: 'SET_IS_CART_OPEN',
  payload: bool,
})

export const setCartProducts = newCartItems => {
  const newCartTotal = newCartItems.reduce((total, cartItem) => {
    return total + priceToNumber(cartItem.actual_price) * cartItem.quantity
  }, 0)

  const newCartCount = newCartItems.reduce((total, cartItem) => {
    return (total += cartItem.quantity)
  }, 0)

  return {
    type: 'SET_CART_PRODUCTS',
    payload: {
      cartCount: newCartCount,
      cartTotal: newCartTotal,
      cartProducts: newCartItems,
    },
  }
}
