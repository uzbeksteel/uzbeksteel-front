import { dateFormatter } from '@/lib/utils';
import { Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';

export const EmergancyBreafingColumn: ColumnsType<any> = [
    {
        title: 'Дата',
        dataIndex: 'briefing_date',
        render: (date: string) => dateFormatter(date),
    },
    {
        title: 'Наименование',
        dataIndex: 'briefing_name',
    },
    {
        title: 'Подпись лица, проводившего инструктаж или обучение',
        dataIndex: 'master_signature',
        render: (el: boolean) => <Tag color={el ? 'green' : 'red'}>{el ? 'Имзоланган' : 'Имзоланмаган'}</Tag>,
    },
    {
        title: 'Подпись инструкти-руемого или обучаемого',
        dataIndex: 'employer_signature',
        render: (el: boolean) => <Tag color={el ? 'green' : 'red'}>{el ? 'Имзоланган' : 'Имзоланмаган'}</Tag>,
    },
];
