import { TabsProps } from 'antd';

import { Box, See } from '@/components';
import { Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { FirstStageInspection, SecoundStageInspection } from './tabs';

export const inspectionTabs = () =>
    [
        {
            key: '1',
            label: 'Биринч босқич текширув',
            children: <FirstStageInspection />,
        },
        {
            key: '2',
            label: 'Иккинчи босқич текширув',
            children: <SecoundStageInspection />,
        },
    ] as TabsProps['items'];

export const WorkShoptableComplumns: ColumnsType<any> = [
    {
        title: 'Т/р',
        key: 'id',
        render(_value, _record, index) {
            return index + 1;
        },
        defaultSortOrder: 'descend',
        sorter: (a, b) => a?.id - b?.id,
    },
    {
        title: 'Цех номи',
        dataIndex: 'name',
        render: (name: string) => <Tag color="success">{name}</Tag>,
        key: 'name',
    },
    {
        title: 'Ҳаракат',
        render: (record) => {
            return (
                <Box $justify="space-around" $align="center">
                    <See id={record?.id} />
                </Box>
            );
        },
        width: '200px',
    },
];
