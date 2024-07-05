import { TabsProps } from 'antd';
import { Table } from './table';

export const getTabs = () => {
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: '2024',
            children: <Table />,
        },
        {
            key: '2',
            label: '2019',
            children: <Table />,
        },
        {
            key: '3',
            label: '2014',
            children: <Table />,
        },
    ];
    return items;
};
