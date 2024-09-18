import { ColumnsType } from 'antd/es/table';

export const EducationInfoColumns: ColumnsType<any> = [
    {
        title: 'Дата',
        dataIndex: 'date',
    },
    {
        title: ' Вид учебы',
        dataIndex: 'education_type',
    },
    {
        title: 'Какой получен документ и его номер',
        dataIndex: 'reason',
    },
    {
        title: 'Подпись лица, сделавшего запись, должность, фамилия',
        dataIndex: 'signature1',
    },
];
