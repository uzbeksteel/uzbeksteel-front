import { Box, Button, Icon, Table } from '@/components';
import { TablePaginationConfig } from 'antd/es/table';
import { useState } from 'react';
import { TableColumnsType } from 'antd';
import { useGetDangerByIdQuery } from '@/lib/services';
import { useLocation, useParams } from 'react-router-dom';
import { history } from '@/lib/utils';
import { ROUTES } from '@/constants';

export const Licence = () => {
    const { id } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const { data } = useGetDangerByIdQuery(id!);
    const { pathname } = useLocation();
    const isWorkshop = pathname.includes(ROUTES.workshop);

    const columns: TableColumnsType = [
        {
            title: 'Т/р',
            dataIndex: '',
            key: '',
            width: '5%',
            // @ts-ignore
            sorter: (a, b) => a.id - b.id,
            // @ts-ignore
            render: (text, record, index) => (currentPage - 1) * 10 + index + 1,
            showSorterTooltip: false,
        },
        {
            title: 'Иш жойи',
            dataIndex: 'workPlace',
            key: 'workPlace',
        },
        {
            title: 'Ускуна ёки обектинг номи',
            dataIndex: 'objectName',
            key: 'objectName',
        },
        {
            title: 'Харакатлар',
            dataIndex: '',
            key: 'id',
            width: '10%',
            render: () => {
                return (
                    <Button type="link" style={{ color: '#F08D10' }}>
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
        <Box>
            <Table onClick={() => history.push(ROUTES.highDangerLicenceAdd.replace(':id', id!))} isAdd={!isWorkshop} titleTable="Рухсатномалар рўйхати" onChange={handleTableChange} dataSource={data?.licence} columns={columns} />
        </Box>
    );
};
