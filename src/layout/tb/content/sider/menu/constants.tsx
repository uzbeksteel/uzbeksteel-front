import { Icon } from '@/components';
import { ROUTES } from '@/constants';
import { dictionary } from '@/layout/tb/content/dictionary';

const menuLabels = dictionary.labels;

export const menuItems = [
    {
        key: ROUTES.home,
        icon: <Icon name="Home" />,
        label: menuLabels[0],
    },
    {
        key: ROUTES.graphics,
        icon: <Icon name="BarChartBig" />,
        label: menuLabels[1],
    },
    {
        key: ROUTES.magazine,
        icon: <Icon name="ClipboardCheck" />,
        label: menuLabels[6],
    },

    {
        key: ROUTES.lows,
        icon: <Icon name="BookOpenText" />,
        label: menuLabels[3],
    },
    {
        key: ROUTES.certification,
        icon: <Icon name="Flag" />,
        label: menuLabels[4],
    },
    {
        key: ROUTES.accidents,
        icon: <Icon name="Siren" />,
        label: menuLabels[5],
    },
    {
        key: ROUTES.dangers,
        icon: <Icon name="Bug" />,
        label: menuLabels[7],
    },
    {
        key: ROUTES.workshop,
        icon: <Icon name="SquareUserRound" />,
        label: menuLabels[8],
    },
    {
        key: ROUTES.profession,
        icon: <Icon name="PencilRuler" />,
        label: menuLabels[9],
    },
    {
        key: ROUTES.highDangers,
        icon: <Icon name="TriangleAlert" />,
        label: menuLabels[10],
    },
];
