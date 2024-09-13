import { ROUTES } from '@/constants';
import { AdminLayout, TbLayout, WorkshopLayout } from '@/layout';
import { MutateIntroBriefing, MutatePersonalCard, OrderReport } from '@/pages';
import { useAuthStore } from '@/store';
import { useRoutes } from 'react-router-dom';
import { Accidents, AddDanger, AdminCreateWorkShopBranches, AdminEmployees, AdminHome, AdminWorkShopBranches, AdminWorkshops, AnalyticalData, Archives, Certification, CertificationCreate, CertificationList, CreateActs, CreateEmployee, Dangers, DangersDetail, Deeds, DocumentDetail, Forgot, Graphics, GraphicsDetail, Home, InitWorkTraining, InspectionCreate, IntroductoryBriefing, Login, Lows, PersonalCardDetails, PersonalCards, TbMagazines, WorkShopCreatePage, WorkshopEmployes, WorkshopHome, WorkshopInspections } from './loadable';
import { Protected } from './protected';
import { Public } from './public';

export const Router = () => {
    const { isAuth } = useAuthStore();

    return useRoutes([
        {
            element: <Protected isAuth={isAuth} />,
            children: [
                {
                    path: ROUTES.home,
                    element: <TbLayout />,
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
                                    children: [
                                        {
                                            index: true,
                                            element: <GraphicsDetail />,
                                        },
                                        {
                                            path: ROUTES.add,
                                            element: <CreateActs />,
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            path: ROUTES.deeds,
                            element: <Deeds />,
                        },
                        {
                            path: ROUTES.magazine,
                            element: <TbMagazines />,
                        },
                        {
                            path: ROUTES.lows,
                            children: [
                                {
                                    index: true,
                                    element: <Lows />,
                                },
                                {
                                    path: ROUTES.add,
                                    element: <DocumentDetail />,
                                },
                                {
                                    path: ROUTES.single,
                                    element: <DocumentDetail />,
                                },
                            ],
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
                        {
                            path: ROUTES.dangers,
                            children: [
                                {
                                    index: true,
                                    element: <Dangers />,
                                },
                                {
                                    path: ROUTES.single,
                                    element: <DangersDetail />,
                                },
                            ],
                        },
                        {
                            path: ROUTES.personalCard,
                            children: [
                                {
                                    index: true,
                                    element: <PersonalCards />,
                                },
                                {
                                    path: ROUTES.add,
                                    element: <MutatePersonalCard type="create" />,
                                },
                                {
                                    path: ROUTES.single,
                                    children: [
                                        {
                                            index: true,
                                            element: <PersonalCardDetails />,
                                        },
                                        {
                                            path: ROUTES.personalCardDetailItem,
                                            children: [
                                                {
                                                    index: true,
                                                    element: <IntroductoryBriefing />,
                                                },
                                                {
                                                    path: ROUTES.add,
                                                    element: <MutateIntroBriefing type="create" />,
                                                },
                                                {
                                                    path: ROUTES.edit,
                                                    element: <MutateIntroBriefing type="edit" />,
                                                },
                                            ],
                                        },
                                        {
                                            path: ROUTES.initWorkTraining,
                                            children: [{ index: true, element: <InitWorkTraining /> }],
                                        },
                                        {
                                            path: ROUTES.orderReport,
                                            children: [
                                                {
                                                    index: true,
                                                    element: <OrderReport />,
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    path: ROUTES.workshop,
                    element: <WorkshopLayout />,
                    children: [
                        {
                            index: true,
                            element: <WorkshopHome />,
                        },
                        {
                            path: ROUTES.workshopGraphics,
                            element: <Graphics />,
                        },
                        {
                            path: ROUTES.workshopEmployes,
                            element: <WorkshopEmployes />,
                        },
                        {
                            path: ROUTES.workshopInspections,
                            element: <WorkshopInspections />,
                        },
                        {
                            path: ROUTES.workshopInspectionsAdd,
                            element: <InspectionCreate />,
                        },
                        {
                            path: ROUTES.workshopDangers,
                            children: [
                                {
                                    index: true,
                                    element: <Dangers />,
                                },
                                {
                                    path: ROUTES.single,
                                    element: <DangersDetail />,
                                },
                                {
                                    path: `${ROUTES.single}/${ROUTES.add}`,
                                    element: <AddDanger />,
                                },
                            ],
                        },
                    ],
                },
                {
                    path: ROUTES.admin,
                    element: <AdminLayout />,
                    children: [
                        {
                            index: true,
                            element: <AdminHome />,
                        },
                        {
                            path: ROUTES.adminWorkshop,
                            children: [
                                {
                                    index: true,
                                    element: <AdminWorkshops />,
                                },
                                {
                                    path: ROUTES.add,
                                    element: <WorkShopCreatePage />,
                                },
                                {
                                    path: ROUTES.single,
                                    children: [
                                        {
                                            index: true,
                                            element: <AdminWorkShopBranches />,
                                        },
                                        {
                                            path: ROUTES.add,
                                            element: <AdminCreateWorkShopBranches />,
                                        },
                                    ],
                                },
                            ],
                        },

                        {
                            path: ROUTES.adminEmployees,
                            children: [
                                {
                                    index: true,
                                    element: <AdminEmployees />,
                                },
                                {
                                    path: ROUTES.add,
                                    element: <CreateEmployee />,
                                },
                            ],
                        },
                        {
                            path: ROUTES.adminAnalyticalData,
                            element: <AnalyticalData />,
                        },
                        {
                            path: ROUTES.adminArchives,
                            element: <Archives />,
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
