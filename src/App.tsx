import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { fetchProductsStart } from './store/actions/productsActions';
import { checkUserSession, fetchUsersStart } from './store/actions/userActions';
import Spinner from './components/client/spinner/spinner';
import AdminRoutes from './utils/adminRoutes';
import LoggedRoutes from './utils/loggedRoutes';

const Home = lazy(() => import('./routes/public/home'));
const Layout = lazy(() => import('./components/client/layout'));
const Authentication = lazy(() => import('./routes/public/authentication'));
const SignInForm = lazy(() => import('./routes/public/signInForm'));
const SignUpForm = lazy(() => import('./routes/public/signUpForm'));
const Shop = lazy(() => import('./routes/public/shop'));
const Product = lazy(() => import('./routes/public/product'));
const Products = lazy(() => import('./routes/public/products'));
const Checkout = lazy(() => import('./routes/private/checkout'));
const User = lazy(() => import('./routes/private/user'));
const Admin = lazy(() => import('./routes/private/admin'));
const Dashboard = lazy(() => import('./routes/private/dashboard'));
const EditUser = lazy(() => import('./routes/private/editUser'));
const UserList = lazy(() => import('./routes/private/userList'));
const ProductList = lazy(() => import('./routes/private/productList'));
const EditProduct = lazy(() => import('./routes/private/editProduct'));

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(checkUserSession());
  // }, []);

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, []);

  useEffect(() => {
    dispatch(fetchUsersStart());
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="shop/*" element={<Shop />}>
            <Route path=":category" element={<Products />} />
          </Route>

          <Route path="product/:id" element={<Product />} />

          <Route path="auth/*" element={<Authentication />}>
            <Route path="sign-in" element={<SignInForm />} />
            <Route path="sign-up" element={<SignUpForm />} />
          </Route>

          <Route element={<LoggedRoutes />}>
            <Route path="user" element={<User />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>

          <Route element={<AdminRoutes />}>
            <Route path="admin/*" element={<Admin />}>
              <Route index element={<Dashboard />} />
              <Route path="users" element={<UserList />} />
              <Route path="users/:userId" element={<EditUser />} />
              <Route path="products" element={<ProductList />} />
              <Route path="products/:productId" element={<EditProduct />} />
              <Route
                path="transactions"
                element={<h1>Página ainda não disponível</h1>}
              />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
