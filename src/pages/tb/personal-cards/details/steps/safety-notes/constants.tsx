import { ColumnsType } from 'antd/es/table';

export const SafetyNotesColumns: ColumnsType<any> = [
    {
        title: 'Дата',
        dataIndex: 'date',
    },
    {
        title: 'Наименование инструкций по охране труда, промышленной безопасности и производственной санитарии',
        dataIndex: 'name',
    },
    {
        title: 'Номер   инструкций',
        dataIndex: 'number',
    },
    {
        title: 'Подпись в получении инструкций',
        dataIndex: 'signature1',
    },
];
