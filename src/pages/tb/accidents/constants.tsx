import { TabsProps } from 'antd';
import { Table } from './table';
import { AccidentStatus } from '@/constants';

export const getTabs = () => {
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Янги ҳодисалар',
            children: <Table status={AccidentStatus.NEW} />,
        },
        {
            key: '2',
            label: 'Кўриб чиқилаётган ҳодисалар',
            children: <Table status={AccidentStatus.IN_PROCESS} />,
        },
        {
            key: '3',
            label: 'Кўриб чиқилган ҳодисалар',
            children: <Table status={AccidentStatus.DONE} />,
        },
    ];
    return items;
};
