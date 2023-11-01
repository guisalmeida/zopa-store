import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { signOutUser } from '../../utils/firebase'

import { setIsMobileOpen } from '../../store/actions/userActions'
import { setIsSearchOpen } from '../../store/actions/searchActions'
import { setIsCartOpen } from '../../store/actions/cartActions'

import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg'
import { ReactComponent as ZopaLogo } from '../../assets/logo-zopa.svg'
import CartIcon from '../cartIcon'

import { TopbarContainer, MenuMobileIcon } from './styled'

const Topbar = () => {
  const dispatch = useDispatch()
  const { currentUser, isMobileOpen } = useSelector(state => state.user)
  const isSearchOpen = useSelector(state => state.search.isSearchOpen)
  const isCartOpen = useSelector(state => state.cart.isCartOpen)

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))
  const toggleIsSearchOpen = () => dispatch(setIsSearchOpen(!isSearchOpen))
  const handleMobileMenu = () => dispatch(setIsMobileOpen(!isMobileOpen))

  return (
    <TopbarContainer>
      <div className="container">
        <div className="topbar__links">
          <Link to="/shop" className="topbar__link" title="Ir para loja">
            Loja
          </Link>

          <button
            type="button"
            className="topbar__menu-mobile"
            title="Abrir menu"
            onClick={handleMobileMenu}
          >
            <MenuMobileIcon />
          </button>
        </div>

        <Link to="/" title="Página inicial">
          <ZopaLogo className="logo" />
        </Link>

        <div className="topbar__icons">
          {currentUser ? (
            <button
              type="button"
              className="topbar__link"
              onClick={signOutUser}
            >
              Sair
            </button>
          ) : (
            <Link
              to="/auth/sign-in"
              className="topbar__link"
              title="Entrar na sua conta"
            >
              Entrar
            </Link>
          )}

          <button
            type="button"
            className="topbar__cart"
            title="Carrinho de compras"
            onClick={toggleIsCartOpen}
          >
            <CartIcon />
          </button>
          <button
            type="button"
            className="topbar__search"
            title="Busca por produtos"
            onClick={toggleIsSearchOpen}
          >
            <SearchIcon />
          </button>
        </div>
      </div>
    </TopbarContainer>
  )
}

export default Topbar
