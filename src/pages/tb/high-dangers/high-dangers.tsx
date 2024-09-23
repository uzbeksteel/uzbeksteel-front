import { Box, Button, Icon, PageHeader, Table } from '@/components';
import { Fragment } from 'react/jsx-runtime';
import { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { history } from '@/lib/utils';
import { ROUTES } from '@/constants';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetHighDangersQuery } from '@/lib/services/queries/high-dangers.ts';
import { CreateHighDanger } from '@/pages/tb/high-dangers/create-high-danger';

export const HighDangers = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { id } = useParams();
    const { data } = useGetHighDangersQuery(id!);
    const columns: ColumnsType = [
        {
            title: 'Т/р',
            dataIndex: '',
            key: '',
            width: '5%',
            sorter: (a, b) => a.id - b.id,
            // @ts-ignore
            render: (text, record, index) => (currentPage - 1) * 10 + index + 1,
            showSorterTooltip: false,
        },
        {
            title: 'Ишлар',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'ИТЛ',
            dataIndex: '',
            key: '',
            width: 150,
        },
        {
            title: 'Наряд рухсаднома',
            dataIndex: '',
            key: '',
            width: 150,
        },
        {
            title: 'Бирка тизимини қўллаган ҳолда',
            dataIndex: '',
            key: '',
            width: 150,
        },
        {
            title: 'Харакатлар',
            dataIndex: '',
            key: '',
            width: '10%',
            render: (_, record) => {
                return (
                    <Button onClick={() => history.push(`${ROUTES.accidents}/${record.id}`)} type="link" style={{ color: '#F08D10' }}>
                        <Icon name="Eye" /> Кўриш
                    </Button>
                );
            },
        },
    ];

    const handleTableChange = (pagination: TablePaginationConfig) => {
        setCurrentPage(pagination.current || 1);
    };
    return (
        <Fragment>
            <PageHeader title="Хавфи юқори бўлган ишлар" />
            <Box $p="10px">
                <Table
                    onClick={() => CreateHighDanger(id!)}
                    onChange={handleTableChange}
                    scroll={{ x: true }}
                    columns={columns}
                    dataSource={data?.data}
                    titleTable="Хавфлилиги юқори бўлган касблар ва ишлар рўйхати"
                    pagination={{
                        position: ['bottomCenter'],
                        current: data?.meta.currentPage,
                        pageSize: data?.meta.itemsPerPage,
                        total: data?.meta.totalItems,
                    }}
                />
            </Box>
        </Fragment>
    );
};
