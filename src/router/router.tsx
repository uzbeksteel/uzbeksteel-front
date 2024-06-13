import { ROUTES } from '@/constants';
import { Layout } from '@/layout';
// import { useAuthStore } from '@/store';
import { useRoutes } from 'react-router-dom';
import { Forgot, Home, Login } from './loadable';
import { Protected } from './protected';
import { Public } from './public';

export const Router = () => {
    // const { isAuth } = useAuthStore();
    const isAuth = true;

    return useRoutes([
        {
            element: <Protected isAuth={isAuth} />,
            children: [
                {
                    path: ROUTES.home,
                    element: <Layout />,
                    children: [
                        {
                            index: true,
                            element: <Home />,
                        },
                    ],
                },
            ],
        },
        {
            path: ROUTES.login,
            element: <Public isAuth={isAuth} />,
            children: [
                {
                    index: true,
                    element: <Login />,
                },
                {
                    path: ROUTES.forgot,
                    element: <Forgot />,
                },
            ],
        },
    ]);
};
