import { ReactComponent as CartIconSvg } from '../../assets/cart-icon.svg'
import { CartIconCounter } from './styled'
import { useSelector } from 'react-redux'

const CartIcon = () => {
  const cartCount = useSelector(state => state.cart.cartCount)

  return (
    <>
      {cartCount > 0 ? <CartIconCounter>{cartCount}</CartIconCounter> : null}
      <CartIconSvg />
    </>
  )
}

export default CartIcon
