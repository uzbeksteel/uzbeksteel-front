import { Box, Button, Icon, PageHeader, Table } from '@/components';
import { Fragment } from 'react/jsx-runtime';
import { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { history } from '@/lib/utils';
import { ROUTES } from '@/constants';
import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { CreateHighDanger } from './create-high-danger';
import { useGetHighDangersQuery } from '@/lib/services';
import { useAuthStore } from '@/store';

export const HighDangers = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { pathname } = useLocation();
    const isWorkshop = pathname.includes(ROUTES.workshop);
    const { id } = useParams();
    const { user } = useAuthStore();
    const workshopId = isWorkshop ? user?.workshop.id : id;
    const { data } = useGetHighDangersQuery(workshopId!);
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
                    <Button onClick={() => history.push(`${isWorkshop ? `${pathname}/${ROUTES.workshopHighDangersDetails}` : ROUTES.highDangersDetails}`.replace(':id', record.id))} type="link" style={{ color: '#F08D10' }}>
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
                    onClick={() => CreateHighDanger(workshopId!)}
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
