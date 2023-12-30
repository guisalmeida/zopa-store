import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { selectCurrentUser } from '../store/selectors/userSelectors';

const AdminRoutes = () => {
    const currentUser = useSelector(selectCurrentUser);

    return currentUser?.isAdmin ?
        <Outlet /> : <Navigate to="/" />

}

export default AdminRoutes;
