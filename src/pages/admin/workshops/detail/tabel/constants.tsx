import { Box, Edit } from '@/components';
import { IMasters } from '@/types/workshop';
import { Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Key } from 'react';

export const WorkShopBranchesColumns: ColumnsType<any> = [
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
        title: 'Бўлим номи',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Бош master',
        dataIndex: ['masters'],
        key: 'Начальник цеха',
        render: (a) => {
            return (
                <Tag color="#F08D10">
                    {a[0]?.first_name} {a[0]?.last_name}
                </Tag>
            );
        },
        width: 100,
    },
    {
        title: 'Мастерлар',
        dataIndex: ['masters'],
        key: 'Начальник цеха',
        render: (a) => {
            return a.map((v: IMasters, index: Key | null | undefined) => (
                <Tag key={index}>
                    {v?.first_name} {v?.last_name}
                </Tag>
            ));
        },
        width: '100px',
    },
    {
        title: 'Ҳаракат',

        render: () => {
            return (
                <Box $justify="space-around" $align="center">
                    <Edit id={'12'} />
                </Box>
            );
        },
        width: '100px',
    },
];
