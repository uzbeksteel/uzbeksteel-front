import { IProfession } from '@/types/profession';
import { ColumnType } from 'antd/es/table';
import { Actions } from '../../workshop/components/actions';

export const columns: ColumnType<IProfession>[] = [
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
        title: 'Тавсифи',
        dataIndex: 'description',
        key: '2',
    },
    {
        title: 'Харакатлар',
        dataIndex: 'id',
        render: (id: string) => <Actions id={id} />,
        key: '4',
    },
];
