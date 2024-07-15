import { TabsProps } from 'antd';
import { Table } from './table';

export const getTabs = () => {
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Янги ҳодисалар',
            children: <Table />,
        },
        {
            key: '2',
            label: 'Кўриб чиқилаётган ҳодисалар',
            children: <Table />,
        },
        {
            key: '3',
            label: 'Кўриб чиқилган ҳодисалар',
            children: <Table />,
        },
    ];
    return items;
};
