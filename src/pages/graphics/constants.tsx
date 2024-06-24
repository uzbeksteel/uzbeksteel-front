import { TabsProps } from 'antd';
import { Calendar } from '@/components';
import { Tab1 } from '@/pages/graphics/tabs';

export const getTabs = () => {
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Режали текшириш (асосий сехлар)',
            children: <Tab1 />,
        },
        {
            key: '2',
            label: 'Комплекс текширув',
            children: <Calendar />,
        },
        {
            key: '3',
            label: 'Режали текшириш (майда сехлар)',
            children: <Calendar />,
        },
    ];
    return items;
};
