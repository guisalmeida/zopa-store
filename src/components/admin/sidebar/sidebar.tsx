import { Link, useParams } from 'react-router-dom';

import { SidebarContainer } from './styled';

export default function Sidebar() {
  const params = useParams();

  return (
    <SidebarContainer>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Vendas</h3>
          <ul className="sidebarList">
            <Link to="/admin" className="link">
              <li className={`sidebarListItem ${!params['*'] ? 'active' : ''}`}>
                Resumo
              </li>
            </Link>

            <Link to="/admin/transactions" className="link">
              <li
                className={`sidebarListItem ${
                  params['*'] === 'transactions' ? 'active' : ''
                }`}
              >
                Transações
              </li>
            </Link>
          </ul>

          <h3 className="sidebarTitle">Usuários</h3>
          <ul className="sidebarList">
            <Link to="/admin/users/new" className="link">
              <li
                className={`sidebarListItem ${
                  params['*'] === 'users/new' ? 'active' : ''
                }`}
              >
                Novo
              </li>
            </Link>

            <Link to="/admin/users" className="link">
              <li
                className={`sidebarListItem ${
                  params['*'] === 'users' ? 'active' : ''
                }`}
              >
                Listar
              </li>
            </Link>
          </ul>

          <h3 className="sidebarTitle">Produtos</h3>
          <ul className="sidebarList">
            <Link to="/admin/products/new" className="link">
              <li
                className={`sidebarListItem ${
                  params['*'] === 'products/new' ? 'active' : ''
                }`}
              >
                Novo
              </li>
            </Link>

            <Link to="/admin/products" className="link">
              <li
                className={`sidebarListItem ${
                  params['*'] === 'products' ? 'active' : ''
                }`}
              >
                Listar
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </SidebarContainer>
  );
}
