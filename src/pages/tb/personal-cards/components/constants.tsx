import { IDocuments } from '@/types/documents';
import { IUsers, IWorkshop } from '@/types/workshop';
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
        title: 'Фамилия И.О.',
        dataIndex: 'user',
        key: '1',
        render: (user: IUsers) => user.first_name,
    },
    {
        title: 'Подразделение (цех)',
        dataIndex: 'workshop',
        key: '2',
        render: (workshop: IWorkshop) => workshop.name,
    },
    {
        title: 'Должность, профессия',
        dataIndex: 'user',
        key: '3',
        render: (user: IUsers) => user.role,
    },
    {
        title: 'Харакатлар',
        dataIndex: 'id',
        render: (id: string) => <Actions id={id} />,
        key: '4',
    },
];
