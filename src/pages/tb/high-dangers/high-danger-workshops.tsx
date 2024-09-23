import { useState } from 'react';
import { getAllWorkshopsQuery } from '@/lib/services';
import { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { Box, Button, Icon, PageHeader, Table } from '@/components';
import { history } from '@/lib/utils';
import { ROUTES } from '@/constants';
import { Fragment } from 'react/jsx-runtime';

export const HighDangerWorkshops = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { data } = getAllWorkshopsQuery();

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
            title: 'Цехлар',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Харакатлар',
            dataIndex: '',
            key: '',
            width: '10%',
            render: (_, record) => {
                return (
                    <Button onClick={() => history.push(`${ROUTES.highDangers}/${record.id}`)} type="link" style={{ color: '#F08D10' }}>
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
                <Table onChange={handleTableChange} scroll={{ x: true }} isAdd={true} columns={columns} dataSource={data} titleTable="Цехлар рўйхати" />
            </Box>
        </Fragment>
    );
};
