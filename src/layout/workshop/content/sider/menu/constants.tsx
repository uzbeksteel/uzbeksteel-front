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
        key: ROUTES.deeds,
        icon: <Icon name="BookText" />,
        label: menuLabels[2],
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
];
