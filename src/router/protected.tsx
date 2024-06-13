import { ROUTES } from '@/constants';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthProps } from './util';

export const Protected = ({ isAuth }: AuthProps) => (isAuth ? <Outlet /> : <Navigate to={ROUTES.login} />);
