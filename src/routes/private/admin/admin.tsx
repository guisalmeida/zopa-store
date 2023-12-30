import { Outlet } from 'react-router-dom';

import Sidebar from '../../../components/admin/sidebar';

import { AdminContainer } from './styled';

const Shop = (): React.JSX.Element => {
  return (
    <AdminContainer>
      <Sidebar />
      <Outlet />
    </AdminContainer>
  );
};

export default Shop;
