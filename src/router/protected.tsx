import { ROUTES } from '@/constants';
import { useAuthSocket } from '@/lib/hooks';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthProps } from './util';

export const Protected = ({ isAuth }: AuthProps) => {
    useAuthSocket();

    return isAuth ? <Outlet /> : <Navigate to={ROUTES.login} />;
};
