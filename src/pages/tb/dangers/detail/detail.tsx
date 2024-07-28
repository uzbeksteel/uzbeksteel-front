import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Icon, Table, Typography } from '@/components';
import { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { useState } from 'react';
import { ROUTES } from '@/constants';

export const DangersDetail = () => {
    const param = useParams();
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const workshopId = param.id;

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
            title: 'Должность, профессия',
            dataIndex: 'profession',
            key: 'profession',
        },
        {
            title: 'Вид деятельности с условным обозначением',
            dataIndex: 'typeActivity',
            key: 'typeActivity',
        },
        {
            title: 'Тип и описание опасности',
            dataIndex: 'typeDescriptionOfHazard',
            key: 'typeDescriptionOfHazard',
        },
        {
            title: 'Риск связанный с опасностью',
            dataIndex: 'riskAssociatedWithDanger',
            key: 'riskAssociatedWithDanger',
        },
        {
            title: 'Вероятность',
            dataIndex: 'probability',
            key: 'probability',
        },
        {
            title: 'Серьезность',
            dataIndex: 'seriousness',
            key: 'seriousness',
        },
        {
            title: 'Степень риска',
            dataIndex: 'riskLevel',
            key: 'riskLevel',
        },
        {
            title: 'Методы контроля и существующие способы защиты',
            dataIndex: 'controlMethods',
            key: 'controlMethods',
        },
        {
            title: 'Харакатлар',
            dataIndex: '',
            key: '',
            width: '10%',
            render: (_, record) => {
                return (
                    <Button onClick={() => navigate(':' + record.id)} type="link" style={{ color: '#F08D10' }}>
                        <Icon name="Eye" /> Кўриш
                    </Button>
                );
            },
        },
    ];
    const handleTableChange = (pagination: TablePaginationConfig) => {
        setCurrentPage(pagination.current || 1);
    };

    const data: any[] = [];
    return (
        <>
            <Box $p="20px" $gap="10px" style={{ background: '#FFF' }}>
                <Icon onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} name="ArrowLeft" />
                <Typography type="title" level={3}>
                    Ҳатарлар
                </Typography>
            </Box>
            <Box $p="10px">
                <Table onClick={() => navigate(ROUTES.add)} onChange={handleTableChange} scroll={{ x: 'calc(700px + 50%)' }} columns={columns} dataSource={data} titleTable="Касблар рўйхати" />
            </Box>
        </>
    );
};
