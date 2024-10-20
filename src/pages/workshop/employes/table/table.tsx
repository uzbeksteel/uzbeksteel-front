import { Box, Edit, See, Table, Trash } from '@/components';
import { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { useState } from 'react';
import { useGetUsersWithPaginationQuery } from '@/lib/services';
import { TUser } from '@/types/users.ts';

export const WorkshopEmployeeTable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 20;

    const { data: usersResponse, isLoading } = useGetUsersWithPaginationQuery(currentPage, pageSize);

    const users = usersResponse?.data || [];
    const totalItems = usersResponse?.meta?.totalItems || 0;

    const Columns: ColumnsType = [
        {
            title: 'Т/р',
            dataIndex: '',
            key: '',
            width: '5%',
            sorter: (a, b) => a.id - b.id,
            // @ts-ignore
            render: (text, record, index) => (currentPage - 1) * pageSize + index + 1,
            showSorterTooltip: false,
        },
        {
            title: 'Ф.И.О.',
            dataIndex: 'first_name',
            key: 'first_name',
            render: (_, record: TUser) => `${record.last_name} ${record.first_name}`,
        },
        {
            title: 'Лавозим',
            dataIndex: 'position',
            key: 'position',
        },
        {
            title: 'Харакатлар',
            dataIndex: '',
            key: 'id',
            render: (_, record: TUser) => (
                <Box $gap="10px" $align="center">
                    <See id={record.id} />
                    <Edit id={record.id} />
                    <Trash />
                </Box>
            ),
        },
    ];

    const handleTableChange = (pagination: TablePaginationConfig) => {
        setCurrentPage(pagination.current || 1);
    };

    return (
        <Box $m="20px">
            <Table
                columns={Columns}
                dataSource={users}
                pagination={{
                    current: currentPage,
                    pageSize,
                    total: totalItems,
                    position: ['bottomCenter'],
                    style: {
                        color: 'red',
                        borderRadius: '0px !important',
                    },
                }}
                loading={isLoading}
                onChange={handleTableChange}
                scroll={{ x: true }}
                titleTable="Ходимлар рўйхати"
            />
        </Box>
    );
};
