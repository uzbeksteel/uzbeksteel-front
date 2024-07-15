import { Box, Button, Card, Icon, Table, Typography } from '@/components';
import { ColumnsType } from 'antd/es/table';
import { useNavigate } from 'react-router-dom';

export const Certification = () => {
    const navigate = useNavigate();
    const columns: ColumnsType = [
        {
            title: 'Т/р',
            dataIndex: 'id',
            key: 'id',
            width: '5%',
        },
        {
            title: 'Номи',
            dataIndex: 'name',
            key: 'id',
        },
        {
            title: 'Харакатлар',
            dataIndex: 'item',
            key: 'id',
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

    const data = Array(10)
        .fill(null)
        .map((_, index) => ({
            id: index + 1,
            name: 'Цех номи',
        }));
    return (
        <>
            <Box $p="20px" $gap="10px" style={{ background: '#FFF' }}>
                <Icon onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} name="ArrowLeft" />
                <Typography type="title" level={3}>
                    Аттестация
                </Typography>
            </Box>
            <Card>
                <Table scroll={{ x: true }} columns={columns} dataSource={data} titleTable="Цехлар рўйхати" />
            </Card>
        </>
    );
};
