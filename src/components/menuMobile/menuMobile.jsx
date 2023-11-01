import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { signOutUser } from '../../utils/firebase'
import { setIsMobileOpen } from '../../store/actions/userActions'

import { MenuContainer } from './styled'

const MenuMobile = () => {
  const dispatch = useDispatch()
  const { currentUser, isMobileOpen } = useSelector(state => state.user)

  const toggleMobileMenu = () => {
    dispatch(setIsMobileOpen(false))
  }

  return (
    <MenuContainer $show={isMobileOpen}>
      <ul>
        <li>
          <Link to="/shop" onClick={toggleMobileMenu}>
            Loja
          </Link>
        </li>
        <li>
          {currentUser ? (
            <button type="button" onClick={signOutUser}>
              Sair
            </button>
          ) : (
            <Link to="/auth/sign-in" title="Entrar na sua conta">
              Entrar
            </Link>
          )}
        </li>
      </ul>
    </MenuContainer>
  )
}

export default MenuMobile
