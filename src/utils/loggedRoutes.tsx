import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { selectCurrentUser } from '../store/selectors/userSelectors';

const LoggedRoutes = () => {
    const currentUser = useSelector(selectCurrentUser);

    return currentUser ?
        <Outlet /> : <Navigate to="/auth/sign-in" />

}

export default LoggedRoutes;
