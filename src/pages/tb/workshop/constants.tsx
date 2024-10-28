import { IWorkshop } from '@/types/workshop';
import { ColumnType } from 'antd/es/table';
import { Actions } from './components/actions';

export const columns: ColumnType<IWorkshop>[] = [
    {
        title: 'Т/р',
        dataIndex: 'id',
        render: (_, __, i) => i + 1,
        key: '0',
    },
    {
        title: 'Номи',
        dataIndex: 'name',
        key: '1',
    },
    {
        title: 'Харакатлар',
        dataIndex: 'id',
        render: (id: string) => <Actions id={id} />,
        key: '4',
    },
];
