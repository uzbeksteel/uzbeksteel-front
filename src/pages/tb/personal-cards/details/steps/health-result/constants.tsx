import { dateFormatter } from '@/lib/utils';
import { Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Actions } from './Actions';

export const HealthResultColumns: ColumnsType<any> = [
    {
        title: 'Дата',
        dataIndex: 'mediacal_exam_date',
        render: (el: string) => dateFormatter(el),
    },
    {
        title: 'Ограничения',
        dataIndex: 'mediacal_exam_name',
    },
    {
        title: 'Подпись ИТР вносившего запись',
        dataIndex: 'author_signature',
        render: (el: boolean) => <Tag color={el ? 'green' : 'red'}>{el ? 'Имзоланган' : 'Имзоланмаган'}</Tag>,
    },
    {
        title: 'Харакатлар',
        dataIndex: 'id',
        render: (id: string) => <Actions id={id} />,
        key: '4',
    },
];
