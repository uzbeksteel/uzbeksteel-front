import { ColumnsType } from 'antd/es/table';

export const RepeatBriefingColumns: ColumnsType<any> = [
    {
        title: 'Дата',
        dataIndex: 'date',
    },
    {
        title: ' Номер инструкций по охране труда, по которым проведено инструктирование или   обучение',
        dataIndex: 'number',
    },
    {
        title: 'Наименование',
        dataIndex: 'reason',
    },
    {
        title: 'Подпись лица, проводившего инструктаж или обучение',
        dataIndex: 'signature1',
    },
    {
        title: 'Подпись инструкти-руемого или обучаемого',
        dataIndex: 'signature2',
    },
];
