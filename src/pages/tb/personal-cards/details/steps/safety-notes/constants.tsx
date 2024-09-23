import { dateFormatter } from '@/lib/utils';
import { Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';

export const SafetyNotesColumns: ColumnsType<any> = [
    {
        title: 'Дата',
        dataIndex: 'date',
        render: (date: string) => dateFormatter(date),
    },
    {
        title: 'Наименование инструкций по охране труда, промышленной безопасности и производственной санитарии',
        dataIndex: 'briefing_name',
    },
    {
        title: 'Номер   инструкций',
        dataIndex: 'briefing_number',
    },
    {
        title: 'Подпись в получении инструкций',
        dataIndex: 'employer_signature',
        render: (d) => <Tag color="orange">{d ? 'Подписано' : 'Неподписано'}</Tag>,
    },
];
