import { Route, Routes } from 'react-router-dom';

import CategoriesBar from '../../../components/client/categoriesBar';
import Products from '../products';

const Shop = (): React.JSX.Element => {
  return (
    <>
      <CategoriesBar />
      <Routes>
        <Route index element={<Products />} />
        <Route path=":category" element={<Products />} />
      </Routes>
    </>
  );
};

export default Shop;
