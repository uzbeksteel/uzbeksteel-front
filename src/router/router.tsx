import { ROUTES } from '@/constants';
import { AdminLayout, TbLayout, WorkshopLayout } from '@/layout';
import { MutateHealthResult, MutateIntroBriefing, MutatePersonalCard, OrderReport } from '@/pages';
import { useAuthStore } from '@/store';
import { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import {
    AccidentDetails,
    Accidents,
    AccidentWorkshops,
    AddAccident,
    AddAccidentAct,
    AddAccidentOrder,
    AddDanger,
    AddWorkshopBranchMaster,
    AdminCreateWorkShopBranches,
    AdminEmployees,
    AdminHome,
    AdminWorkShopBranches,
    AdminWorkshops,
    AnalyticalData,
    Archives,
    Certification,
    CertificationCreate,
    CertificationList,
    CreateActs,
    CreateEmployee,
    CreateHighDangerLicence,
    CreateWorkshopEmployee,
    Dangers,
    DangersDetail,
    Deeds,
    DocumentDetail,
    EducationInfo,
    EmergancyBreafing,
    Forgot,
    Graphics,
    GraphicsDetail,
    HealthResult,
    HighDangerDetails,
    HighDangers,
    HighDangerWorkshops,
    Home,
    InitWorkTraining,
    InspectionCreate,
    InspectionWorkshop,
    IntroductoryBriefing,
    Login,
    Lows,
    MutateEducationInfo,
    MutateOrderReport,
    MutateProfession,
    MutateSafetyInfo,
    MutateSafetyNotes,
    MutateWorkPermission,
    MutationEmergencyBriefing,
    MutationRepeatBriefing,
    NotificationsPage,
    PersonalCardDetails,
    PersonalCards,
    Profession,
    RepeatBriefing,
    SafetyInfo,
    SafetyNotes,
    TbMagazines,
    WorkPermission,
    WorkShop,
    WorkShopCreatePage,
    WorkshopEmployes,
    WorkshopHome,
    WorkshopInspections,
} from './loadable';
import { Protected } from './protected';
import { Public } from './public';

export const Router = () => {
    const { isAuth } = useAuthStore();
    // const { isPending } = useDevice();

    useEffect(() => {
        if (Notification.permission === 'granted') {
            // requestForToken().then((fcmToken) => {
            //     if (fcmToken) {
            //         setFcmToken(fcmToken);
            //     }
            // });
        } else if (Notification.permission !== 'denied') {
            // requestForToken().then((fcmToken) => {
            //     if (fcmToken) {
            //         setFcmToken(fcmToken);
            //     }
            // });
        }
    }, [isAuth]);

    // if (isPending) {
    //     return <Loading />;
    // }

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
                            children: [
                                {
                                    index: true,
                                    element: <InspectionWorkshop />,
                                },
                                {
                                    path: ROUTES.single,
                                    element: <TbMagazines />,
                                },
                            ],
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
                            children: [
                                {
                                    index: true,
                                    element: <AccidentWorkshops />,
                                },
                                {
                                    path: ROUTES.single,
                                    element: <Accidents />,
                                },
                                {
                                    path: ROUTES.workshopAccidentDetails,
                                    element: <AccidentDetails />,
                                },
                            ],
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
                            path: ROUTES.tbWorkshops,
                            children: [
                                {
                                    index: true,
                                    element: <WorkShop />,
                                },
                                {
                                    path: ROUTES.single,
                                    children: [
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
                                                    path: ROUTES.edit,
                                                    element: <MutatePersonalCard type="edit" />,
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
                                                        {
                                                            path: ROUTES.workPermission,
                                                            children: [
                                                                {
                                                                    index: true,
                                                                    element: <WorkPermission />,
                                                                },
                                                            ],
                                                        },
                                                        {
                                                            path: ROUTES.safetyInfo,
                                                            children: [
                                                                {
                                                                    index: true,
                                                                    element: <SafetyInfo />,
                                                                },
                                                            ],
                                                        },
                                                        {
                                                            path: ROUTES.repeatBriefing,
                                                            children: [
                                                                {
                                                                    index: true,
                                                                    element: <RepeatBriefing />,
                                                                },
                                                                {
                                                                    path: ROUTES.add,
                                                                    element: <MutationRepeatBriefing />,
                                                                },
                                                                {
                                                                    path: ROUTES.edit,
                                                                    element: <MutationRepeatBriefing />,
                                                                },
                                                            ],
                                                        },
                                                        {
                                                            path: ROUTES.emergancyBriefing,
                                                            children: [
                                                                {
                                                                    index: true,
                                                                    element: <EmergancyBreafing />,
                                                                },
                                                            ],
                                                        },
                                                        {
                                                            path: ROUTES.educationInfo,
                                                            children: [
                                                                {
                                                                    index: true,
                                                                    element: <EducationInfo />,
                                                                },
                                                            ],
                                                        },
                                                        {
                                                            path: ROUTES.safetyNotes,
                                                            children: [
                                                                {
                                                                    index: true,
                                                                    element: <SafetyNotes />,
                                                                },
                                                            ],
                                                        },

                                                        {
                                                            path: ROUTES.healthResult,
                                                            children: [
                                                                {
                                                                    index: true,
                                                                    element: <HealthResult />,
                                                                },
                                                            ],
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
                            path: ROUTES.profession,
                            children: [
                                {
                                    index: true,
                                    element: <Profession />,
                                },
                                {
                                    path: ROUTES.add,
                                    element: <MutateProfession />,
                                },
                                {
                                    path: ROUTES.single,
                                    element: <MutateProfession />,
                                },
                            ],
                        },
                        {
                            path: ROUTES.highDangers,
                            children: [
                                {
                                    index: true,
                                    element: <HighDangerWorkshops />,
                                },
                                {
                                    path: ROUTES.single,
                                    element: <HighDangers />,
                                },
                                {
                                    path: ROUTES.highDangersDetails,
                                    element: <HighDangerDetails />,
                                },
                                {
                                    path: ROUTES.highDangerLicenceAdd,
                                    element: <CreateHighDangerLicence />,
                                },
                            ],
                        },
                        {
                            path: ROUTES.notifications,
                            children: [{ index: true, element: <NotificationsPage /> }],
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
                            path: ROUTES.notifications,
                            children: [{ index: true, element: <NotificationsPage /> }],
                        },
                        {
                            path: ROUTES.workshopGraphics,
                            element: <Graphics />,
                        },
                        {
                            path: ROUTES.workshopEmployes,
                            children: [
                                {
                                    index: true,
                                    element: <WorkshopEmployes />,
                                },
                                {
                                    path: ROUTES.add,
                                    element: <CreateWorkshopEmployee />,
                                },
                            ],
                        },
                        {
                            path: ROUTES.workshopInspections,
                            children: [
                                {
                                    index: true,
                                    element: <WorkshopInspections />,
                                },
                                {
                                    path: ROUTES.add,
                                    element: <InspectionCreate />,
                                },
                                {
                                    path: ROUTES.single,
                                    element: <InspectionCreate />,
                                },
                            ],
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
                        {
                            path: ROUTES.workshopAccidents,
                            children: [
                                {
                                    index: true,
                                    element: <Accidents />,
                                },
                                {
                                    path: `${ROUTES.single}/${ROUTES.add}`,
                                    element: <AddAccident />,
                                },
                                {
                                    path: ROUTES.workshopAccidentDetails,
                                    element: <AccidentDetails />,
                                },
                                {
                                    path: ROUTES.workshopAccidentsActAdd,
                                    element: <AddAccidentAct />,
                                },
                                {
                                    path: ROUTES.workshopAccidentsOrderAdd,
                                    element: <AddAccidentOrder />,
                                },
                            ],
                        },
                        {
                            path: ROUTES.personalCard2,
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
                                    path: ROUTES.edit,
                                    element: <MutatePersonalCard type="edit" />,
                                },
                                {
                                    path: ROUTES.single,
                                    children: [
                                        {
                                            index: true,
                                            element: <PersonalCardDetails />,
                                        },
                                        {
                                            path: ROUTES.workshopIntroBriefing,
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
                                            path: ROUTES.workShopInitWorkTraining,
                                            children: [{ index: true, element: <InitWorkTraining /> }],
                                        },
                                        {
                                            path: ROUTES.workshopEmergancyBriefing,
                                            children: [
                                                {
                                                    index: true,
                                                    element: <EmergancyBreafing />,
                                                },
                                            ],
                                        },
                                        {
                                            path: ROUTES.workShopOrderReport,
                                            children: [
                                                {
                                                    index: true,
                                                    element: <OrderReport />,
                                                },
                                                {
                                                    path: ROUTES.add,
                                                    element: <MutateOrderReport />,
                                                },
                                                {
                                                    path: ROUTES.edit,
                                                    element: <MutateOrderReport />,
                                                },
                                            ],
                                        },
                                        {
                                            path: ROUTES.workShopWorkPermission,
                                            children: [
                                                {
                                                    index: true,
                                                    element: <WorkPermission />,
                                                },
                                                {
                                                    path: ROUTES.add,
                                                    element: <MutateWorkPermission />,
                                                },
                                                {
                                                    path: ROUTES.edit,
                                                    element: <MutateWorkPermission />,
                                                },
                                            ],
                                        },
                                        {
                                            path: ROUTES.workShopSafetyInf,
                                            children: [
                                                {
                                                    index: true,
                                                    element: <SafetyInfo />,
                                                },
                                                {
                                                    path: ROUTES.add,
                                                    element: <MutateSafetyInfo />,
                                                },
                                                {
                                                    path: ROUTES.edit,
                                                    element: <MutateSafetyInfo />,
                                                },
                                            ],
                                        },
                                        {
                                            path: ROUTES.workshopRepeatBriefing,
                                            children: [
                                                {
                                                    index: true,
                                                    element: <RepeatBriefing />,
                                                },
                                                {
                                                    path: ROUTES.add,
                                                    element: <MutationRepeatBriefing />,
                                                },
                                                {
                                                    path: ROUTES.edit,
                                                    element: <MutationRepeatBriefing />,
                                                },
                                            ],
                                        },
                                        {
                                            path: ROUTES.workshopEmergancyBriefing,
                                            children: [
                                                {
                                                    index: true,
                                                    element: <EmergancyBreafing />,
                                                },
                                                {
                                                    path: ROUTES.add,
                                                    element: <MutationEmergencyBriefing />,
                                                },
                                                {
                                                    path: ROUTES.edit,
                                                    element: <MutationEmergencyBriefing />,
                                                },
                                            ],
                                        },
                                        {
                                            path: ROUTES.workshopEducationInfo,
                                            children: [
                                                {
                                                    index: true,
                                                    element: <EducationInfo />,
                                                },
                                                {
                                                    path: ROUTES.add,
                                                    element: <MutateEducationInfo />,
                                                },
                                                {
                                                    path: ROUTES.edit,
                                                    element: <MutateEducationInfo />,
                                                },
                                            ],
                                        },
                                        {
                                            path: ROUTES.workshopSafetyNotes,
                                            children: [
                                                {
                                                    index: true,
                                                    element: <SafetyNotes />,
                                                },
                                                {
                                                    path: ROUTES.add,
                                                    element: <MutateSafetyNotes />,
                                                },
                                                {
                                                    path: ROUTES.edit,
                                                    element: <MutateSafetyNotes />,
                                                },
                                            ],
                                        },
                                        {
                                            path: ROUTES.workshopHealthResult,
                                            children: [
                                                {
                                                    index: true,
                                                    element: <HealthResult />,
                                                },
                                                {
                                                    path: ROUTES.add,
                                                    element: <MutateHealthResult type="create" />,
                                                },
                                                {
                                                    path: ROUTES.edit,
                                                    element: <MutateHealthResult type="edit" />,
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            path: ROUTES.workshopHighDangers,
                            children: [
                                {
                                    index: true,
                                    element: <HighDangers />,
                                },
                                {
                                    path: ROUTES.workshopHighDangersDetails,
                                    element: <HighDangerDetails />,
                                },
                                {
                                    path: ROUTES.workshopHighDangerLicenceAdd,
                                    element: <CreateHighDangerLicence />,
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
                            path: ROUTES.notifications,
                            children: [{ index: true, element: <NotificationsPage /> }],
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
                                        {
                                            path: ROUTES.addWorkshopBranchMaster,
                                            element: <AddWorkshopBranchMaster />,
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
