import { ColumnsType } from 'antd/es/table';

export const HealthResultColumns: ColumnsType<any> = [
    {
        title: 'Дата',
        dataIndex: 'date',
    },
    {
        title: 'Ограничения',
        dataIndex: 'education_type',
    },
    {
        title: 'Подпись ИТР вносившего запись',
        dataIndex: 'signature1',
    },
];
