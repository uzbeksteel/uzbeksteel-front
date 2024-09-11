import { Icon } from '@/components';
import { ROUTES } from '@/constants';
import { AdminDictionary } from '../../dictionary';

const menuLabels = AdminDictionary.labels;

export const adminMenuItems = [
    {
        key: ROUTES.admin,
        icon: <Icon name="Home" />,
        label: menuLabels[0],
    },
    {
        key: ROUTES.adminWorkshop,
        icon: <Icon name="Warehouse" />,
        label: menuLabels[1],
    },
    {
        key: ROUTES.adminEmployees,
        icon: <Icon name="UserRound" />,
        label: menuLabels[2],
    },
    {
        key: ROUTES.adminAnalyticalData,
        icon: <Icon name="Calculator" />,
        label: menuLabels[3],
    },
    {
        key: ROUTES.adminArchives,
        icon: <Icon name="Folder" />,
        label: menuLabels[4],
    },
    {
        key: ROUTES.adminDangers,
        icon: <Icon name="Bug" />,
        label: menuLabels[5],
    },
];
