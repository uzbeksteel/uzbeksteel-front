import { ROUTES } from '@/constants';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthProps } from './util';

export const Public = ({ isAuth }: AuthProps) => (isAuth ? <Navigate to={ROUTES.home} /> : <Outlet />);
