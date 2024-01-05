import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  setIsMobileOpen,
  signOutStart,
} from '../../../store/actions/userActions';
import {
  selectCurrentUser,
  selectIsMobileOpen,
} from '../../../store/selectors/userSelectors';

import { MenuContainer } from './styled';
import Slider from '../slider';

const MenuMobile = (): React.JSX.Element => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isMobileOpen = useSelector(selectIsMobileOpen);

  const toggleMobileMenu = () => dispatch(setIsMobileOpen(false));
  const handleLogOut = (): void => {
    toggleMobileMenu();
    dispatch(signOutStart());
  };

  return (
    <Slider
      direction="left"
      show={isMobileOpen}
      title={
        currentUser?.username ? `Olá ${currentUser.username}` : `Olá Skatista`
      }
      handleShow={toggleMobileMenu}
    >
      <MenuContainer>
        <ul>
          <li>
            {currentUser?.isAdmin ? (
              <Link
                to="/admin"
                title="Entrar na area de administrador"
                onClick={toggleMobileMenu}
              >
                Admin
              </Link>
            ) : null}
          </li>
          <li>
            <Link
              to="/"
              title="Ir para página inicial"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" onClick={toggleMobileMenu}>
              Loja
            </Link>
          </li>
          <li>
            {currentUser ? (
              <button type="button" onClick={handleLogOut}>
                Sair
              </button>
            ) : (
              <Link
                to="/auth/sign-in"
                title="Entrar na sua conta"
                onClick={toggleMobileMenu}
              >
                Entrar
              </Link>
            )}
          </li>
        </ul>
      </MenuContainer>
    </Slider>
  );
};

export default MenuMobile;
