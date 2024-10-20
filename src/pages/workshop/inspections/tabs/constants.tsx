import { Box, Edit } from '@/components';
import { dateFormatter } from '@/lib/utils';
import { Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';

export const InspectionColumn: ColumnsType<any> = [
    {
        title: 'Т/р',
        render(_value, _record, index) {
            return index + 1;
        },
        key: 'id',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a?.id - b?.id,
    },
    {
        title: 'Назоратни ўтказиш санаси',
        dataIndex: 'control_date',
        render: (date: string) => dateFormatter(date),
        key: 'control_date',
    },
    {
        title: 'Меҳнатни муҳофаза қилиш бўйича аниқланган камчилик ва бузилишлар',
        dataIndex: 'omissions',
        key: 'omissions',
        width: '400px',
    },
    {
        title: 'Камчилик ва бузилишларни бартараф этиш бўйича чора-тадбирлар',
        dataIndex: 'measures',
        key: 'measures',
        width: '400px',
    },
    {
        title: 'Уста ва меҳнатни муҳофаза қилиш бўйича вакилнинг Ф.И.Ш.',
        dataIndex: ['commissions'],
        key: 'commissions',
        width: '200px',
    },
    {
        title: 'Ижроси учун жавобгар шахслар',
        dataIndex: ['responsibles'],
        key: 'responsibles',
    },

    {
        title: 'Бажариш муддати',
        dataIndex: 'complate_date',
        render: (date: string) => dateFormatter(date),
        key: 'complate_date',
    },
    {
        title: 'Бажарилганлиги бўйича белги',
        dataIndex: ['signature'],
        key: 'signature',
        render: (signature: boolean) => {
            return <Tag color={`${signature ? 'success' : 'processing'}`}>{signature ? 'Тасдиқланган' : 'Тасдиқланмаган'}</Tag>;
        },
    },
    {
        title: 'Ҳаракат',
        dataIndex: 'id',
        key: 'id',
        render: (id: string) => {
            return (
                <Box $justify="space-around" $align="center">
                    <Edit id={id} />
                </Box>
            );
        },
        width: '100px',
    },
];
