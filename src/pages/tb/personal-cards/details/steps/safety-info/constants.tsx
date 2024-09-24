import { dateFormatter } from '@/lib/utils';
import { Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Actions } from './Actions';

export const SafetyInfoColumns: ColumnsType<any> = [
    {
        title: '№ протокола',
        dataIndex: 'ordinal_number',
    },
    {
        title: 'Дата проверки',
        dataIndex: 'date',
        render: (d) => dateFormatter(d),
    },
    {
        title: 'Причина проверки',
        dataIndex: 'reason',
        render: (d) => <Tag>{d}</Tag>,
    },
    {
        title: 'Подпись ИТР, включившего запись',
        dataIndex: 'author_signature',
        render: (d) => <Tag color="orange">{d ? 'Подписано' : 'Неподписано'}</Tag>,
    },
    {
        title: 'Подпись работника в получении удостоверения',
        dataIndex: 'employer_signature',
        render: (d) => <Tag color="orange">{d ? 'Подписано' : 'Неподписано'}</Tag>,
    },
    {
        title: 'Действия',
        render: (r) => {
            return <Actions id={r?.id} />;
        },
    },
];
