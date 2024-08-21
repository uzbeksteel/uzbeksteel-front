import { dateFormatter } from '@/lib/utils';
import { IDocuments } from '@/types/documents';
import { ColumnType } from 'antd/es/table';
import { Actions } from './actions';

export const columns: ColumnType<IDocuments>[] = [
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
        title: 'Йили',
        dataIndex: 'year',
        render: (date: string) => dateFormatter(date),
        key: '2',
    },
    {
        title: 'СХММваЭ департаменти таркибий   бўлинмаси',
        dataIndex: 'devision',
        key: '3',
    },
    {
        title: 'Сақлаш жойи (электрон шаклида)',
        dataIndex: 'storage_space',
        key: '4',
    },
    {
        title: 'Харакатлар',
        dataIndex: 'id',
        render: (id: string) => <Actions id={id} />,
        key: '5',
    },
];
