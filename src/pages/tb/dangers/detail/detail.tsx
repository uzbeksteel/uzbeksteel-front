import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Icon, Table, Typography } from '@/components';
import { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import { useState } from 'react';
import { ROUTES } from '@/constants';
import { useGetDangersQuery } from '@/lib/services/queries/dangers.ts';

export const DangersDetail = () => {
    const param = useParams();
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const [currentPage, setCurrentPage] = useState(1);
    const workshopId = param.id;
    const { data } = useGetDangersQuery(workshopId);
    const isAdminRoute = pathname.includes('workshop');
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
            dataIndex: 'importance',
            key: 'importance',
        },
        {
            title: 'Степень риска',
            dataIndex: 'riskScore',
            key: 'riskScore',
            width: 200,
            onCell: () => ({ style: { padding: 0 } }),
            render: (text) => {
                return (
                    <Box $direction="column">
                        <span style={{ padding: '16px' }}>{`${text >= 25 ? 'Юқори' : text >= 20 ? 'Ўрта' : 'Паст'} хавфлилик`}</span>
                        <span style={{ padding: '16px', background: text >= 25 ? '#FF4D4F' : text >= 20 ? '#F7B336' : '#73D13D' }}>{text}</span>
                    </Box>
                );
            },
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
        <>
            <Box $p="20px" $gap="10px" style={{ background: '#FFF' }}>
                <Icon onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} name="ArrowLeft" />
                <Typography type="title" level={3}>
                    Ҳатарлар
                </Typography>
            </Box>
            <Box $p="10px">
                <Table isAdd={!isAdminRoute} onClick={() => navigate(ROUTES.add)} onChange={handleTableChange} scroll={{ x: 'calc(700px + 50%)' }} columns={columns} dataSource={data} titleTable="Касблар рўйхати" />
            </Box>
        </>
    );
};
