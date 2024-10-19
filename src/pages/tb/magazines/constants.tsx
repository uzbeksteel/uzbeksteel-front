import { TabsProps } from 'antd';

import { Box, See } from '@/components';
import { WorkshopBranches } from '@/types/magazine';
import { Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Link } from 'react-router-dom';
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
                    <See id={record?.ref_key} />
                </Box>
            );
        },
        width: '200px',
    },
];

export const workshopBranchColumn: ColumnsType<WorkshopBranches> = [
    {
        title: 'Т/р',
        key: 'id',
        render(_value, _record, index) {
            return index + 1;
        },
        defaultSortOrder: 'descend',
    },
    {
        title: 'Bolim nomi',
        dataIndex: 'name',
        render: (name: string) => <Tag color="success">{name}</Tag>,
        key: 'name',
    },
    {
        title: 'Ҳаракат',
        render: (record) => {
            return (
                <Link to={`?branch_id=${record?.id}`}>
                    <Box $justify="space-around" $align="center">
                        <See />
                    </Box>
                </Link>
            );
        },
        width: '200px',
    },
];
