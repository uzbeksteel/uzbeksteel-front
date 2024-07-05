import { ROUTES } from '@/constants';
import { Layout } from '@/layout';
import { useRoutes } from 'react-router-dom';
import { Accidents, Certification, CertificationCreate, CertificationList, Deeds, Forgot, Graphics, GraphicsDetail, Home, Login, Lows } from './loadable';
import { Protected } from './protected';
import { Public } from './public';
import { useAuthStore } from '@/store';

export const Router = () => {
    const { isAuth } = useAuthStore();

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
                        {
                            path: ROUTES.graphics,
                            children: [
                                {
                                    index: true,
                                    element: <Graphics />,
                                },
                                {
                                    path: ROUTES.single,
                                    element: <GraphicsDetail />,
                                },
                            ],
                        },
                        {
                            path: ROUTES.deeds,
                            element: <Deeds />,
                        },
                        {
                            path: ROUTES.lows,
                            element: <Lows />,
                        },
                        {
                            path: ROUTES.certification,
                            children: [
                                {
                                    index: true,
                                    element: <Certification />,
                                },
                                {
                                    path: ROUTES.single,
                                    element: <CertificationList />,
                                },
                                {
                                    path: ROUTES.add,
                                    element: <CertificationCreate />,
                                },
                            ],
                        },
                        {
                            path: ROUTES.accidents,
                            element: <Accidents />,
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
