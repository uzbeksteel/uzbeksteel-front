import { Box, Button, Icon, Table, Typography } from '@/components';
import { useNavigate } from 'react-router-dom';
import { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { getAllWorkshopsQuery } from '@/lib/services';
import { useState } from 'react';

export const Dangers = () => {
    const navigate = useNavigate();
    const { data } = getAllWorkshopsQuery();
    const [currentPage, setCurrentPage] = useState(1);
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
            title: 'Лавозим ва касблар номи',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'ММСК бўйича коди',
            dataIndex: 'code',
            key: 'code',
            width: '10%',
        },
        {
            title: 'Штат бўйича умумий сони',
            dataIndex: 'totalNumberByState',
            key: 'totalNumberByState',
            width: '10%',
        },
        {
            title: 'Умумий ишчилар сони',
            dataIndex: 'totalEmployeesCount',
            key: 'totalEmployeesCount',
            width: '10%',
        },
        {
            title: 'Aёллар сони',
            dataIndex: 'womenCount',
            key: 'womenCount',
            width: '5%',
        },
        {
            title: 'Харакатлар',
            dataIndex: '',
            key: '',
            width: '10%',
            render: (_, record) => {
                return (
                    <Button onClick={() => navigate(record.id)} type="link" style={{ color: '#F08D10' }}>
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
        <>
            <Box $p="20px" $gap="10px" style={{ background: '#FFF' }}>
                <Icon onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} name="ArrowLeft" />
                <Typography type="title" level={3}>
                    Ҳатарлар
                </Typography>
            </Box>
            <Box $p="10px">
                <Table onChange={handleTableChange} scroll={{ x: true }} isAdd={true} columns={columns} dataSource={data} titleTable="Касблар рўйхати" />
            </Box>
        </>
    );
};
