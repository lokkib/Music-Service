import { Navigate } from 'react-router-dom';
import { ProtectedRouteProps } from '../@types/props/ProtectedRouteProps';

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const isAuth = sessionStorage.getItem('Auth');
    if (!isAuth) {
        return <Navigate to="/" />;
    }
    return children;
};
