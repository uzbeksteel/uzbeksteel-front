import { Icon } from '@/components';
import { ROUTES } from '@/constants';
import { dictionary } from '@/layout/dictionary';

const menuLabels = dictionary.labels;

export const menuItems = [
    {
        key: ROUTES.home,
        icon: <Icon name="Home" />,
        label: menuLabels[0],
    },
];
