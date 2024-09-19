import { Icon } from '@/components';
import { ROUTES } from '@/constants';
import { dictionary } from './../../dictionary';

const menuLabels = dictionary.labels;

export const menuItems = [
    {
        key: ROUTES.home,
        icon: <Icon name="Home" />,
        label: menuLabels[0],
    },
    {
        key: ROUTES.workshopGraphics,
        icon: <Icon name="BarChartBig" />,
        label: menuLabels[1],
    },
    {
        key: ROUTES.workshopEmployes,
        icon: <Icon name="UserRound" />,
        label: menuLabels[2],
    },
    {
        key: ROUTES.workshopInspections,
        icon: <Icon name="ClipboardCheck" />,
        label: menuLabels[3],
    },
    {
        key: ROUTES.workshopDangers,
        icon: <Icon name="Bug" />,
        label: menuLabels[5],
    },
    {
        key: ROUTES.workshopAccidents,
        icon: <Icon name="Siren" />,
        label: menuLabels[6],
    },
    {
        key: ROUTES.personalCard,
        icon: <Icon name="SquareUserRound" />,
        label: menuLabels[8],
    },
];
