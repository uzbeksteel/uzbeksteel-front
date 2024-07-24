import { Box, Edit } from '@/components';
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
        title: 'Исми',
        dataIndex: 'first_name',
        render: (name: string) => <Tag color="success">{name}</Tag>,
        key: 'name',
    },
    {
        title: 'Таб номери',
        dataIndex: ['tab_number'],
        key: 'Начальник цеха',
    },
    {
        title: 'Лавозим',
        dataIndex: 'position',
        key: 'positoon',
    },
    {
        title: 'Тиғулган жойи',
        dataIndex: 'place_of_birth',
        key: 'place_of_birth',
    },
    {
        title: 'Роле',
        dataIndex: 'role',
        key: 'role',
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
