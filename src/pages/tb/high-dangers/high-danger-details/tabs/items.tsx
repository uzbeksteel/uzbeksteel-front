import { TabsProps } from 'antd';
import { Itl } from './itl';
import { Order } from './order';
import { Licence } from './licence';

export const items: TabsProps['items'] = [
    {
        key: '1',
        label: 'ИТЛ',
        children: <Itl />,
    },
    {
        key: '2',
        label: 'Буйруқлар',
        children: <Order />,
    },
    {
        key: '3',
        label: 'Рухсатномалар',
        children: <Licence />,
    },
];
