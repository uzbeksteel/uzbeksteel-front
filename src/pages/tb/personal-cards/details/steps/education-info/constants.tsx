import { dateFormatter } from '@/lib/utils';
import { Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Actions } from './Actions';

export const EducationInfoColumns: ColumnsType<any> = [
    {
        title: 'Дата',
        dataIndex: 'education_date',
        render: (date: string) => dateFormatter(date),
    },
    {
        title: ' Вид учебы',
        dataIndex: 'study_type',
    },
    {
        title: 'Какой получен документ и его номер',
        dataIndex: 'report_number',
    },
    {
        title: 'Подпись лица, сделавшего запись, должность, фамилия',
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
