import { ColumnsType } from 'antd/es/table';

export const SafetyInfoColumns: ColumnsType<any> = [
    {
        title: '№ протокола',
        dataIndex: 'id',
    },
    {
        title: 'Дата проверки',
        dataIndex: 'date',
    },
    {
        title: 'Причина проверки',
        dataIndex: 'reason',
    },
    {
        title: 'Подпись ИТР, включившего запись',
        dataIndex: 'reason1',
    },
    {
        title: 'Подпись работника в получении удостоверения',
        dataIndex: 'reason1',
    },
];
