import { Box, Icon } from '@/components';
import { Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';

export const WorkShoptableComplumns: ColumnsType<any> = [
    {
        title: 'Т/р',
        dataIndex: 'id',
        key: 'id',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a?.id - b?.id,
    },
    {
        title: 'Цех номи',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Начальник цеха',
        dataIndex: ['workshop'],
        key: 'Начальник цеха',
    },
    {
        title: 'Тип мастера',
        dataIndex: 'master_type',
        key: 'Тип мастера',
        render: (v) => {
            return <Tag color="green">{v}</Tag>;
        },
    },
    {
        title: 'Мастер',
        dataIndex: 'master',
        key: 'master',
    },
    {
        title: 'Ҳаракат',
        render: () => {
            return (
                <Box $justify="center" $align="center">
                    <Icon name={'Pencil'} color="#52C41A" />;
                    <Icon name={'Eye'} color="#F08D10" />;
                </Box>
            );
        },
    },
];
