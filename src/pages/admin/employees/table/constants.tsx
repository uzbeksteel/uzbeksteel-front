import { Box, Edit, See } from '@/components';
import { Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';

export const EmployeesComplumns: ColumnsType<any> = [
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
        title: 'Начальник цеха',
        dataIndex: ['workshop_director', 'first_name'],
        key: 'Начальник цеха',
    },

    {
        title: 'Ҳаракат',
        render: (record) => {
            return (
                <Box $justify="space-around" $align="center">
                    <Edit id={'12'} />
                    <See id={record?.ref_key} />
                </Box>
            );
        },
        width: '200px',
    },
];
