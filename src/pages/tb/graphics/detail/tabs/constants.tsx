import { dateFormatter } from '@/lib/utils';
import { IActs } from '@/types/graphics';
import { Badge } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';

export const ActsColumns: ColumnsType<IActs> = [
    {
        title: 'Т/р',
        key: 'Т/р',
        width: 80,
        render: (_, __, index: number) => index + 1,
        sorter: (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'File',
        dataIndex: ['file', 'name'],
        key: 'file',
        render: (v) => <Link to={''}>{v}</Link>,
    },
    {
        title: 'Сана',
        dataIndex: 'created_at',
        key: 'sana',
        render: (d) => dateFormatter(d),
        sorter: (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
    },
    {
        title: 'Workshop',
        dataIndex: ['workshop', 'name'],
        key: 'workshop',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (v) => <>{v == 'PENDING' ? <Badge status="warning" text={v.toLowerCase()} /> : v == 'APPROVED' ? <Badge status="success" text={v.toLowerCase()} /> : <Badge status="error" text={v.toLowerCase()} />}</>,
    },
];
