import { Box, Card, Field, Icon, Table, Typography } from '@/components';
import { useNavigate } from 'react-router-dom';
import { ColumnsType } from 'antd/es/table';

export const CertificationCreate = () => {
    const navigate = useNavigate();
    const columns: ColumnsType = [
        {
            title: 'Т/р',
            dataIndex: 'id',
            key: 'id',
            width: '5%',
        },
        {
            title: 'Факторы производственной среды и трудового процесса',
            dataIndex: 'name',
            key: 'id',
        },
        {
            title: 'Гигиенический норматив (ПДК, ПДУ)',
            key: 'id',
            width: '15%',
            render: () => <Field span={24} placeholder="input" />,
        },
        {
            title: 'Фактический уровень (величина)',
            key: 'id',
            width: '15%',
            render: () => <Field span={24} placeholder="input" />,
        },
        {
            title: 'Продолжительность воздействия (часы/%)',
            key: 'id',
            width: '15%',
            render: () => <Field span={24} placeholder="input" />,
        },
        {
            title: 'Класс условий труда',
            key: 'id',
            width: '15%',
            render: () => <Field span={24} placeholder="input" />,
        },
    ];

    const dataSource = Array(10)
        .fill(null)
        .map((_, index) => ({
            id: `1.1.${index + 1}`,
            name: 'Вредные   вещества 1-2 класса опасности, за исключением перечисленных ниже',
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
                <Table isAdd={true} columns={columns} dataSource={dataSource} titleTable="ОЦЕНКА СООТВЕТСТВИЯ УСЛОВИЙ ТРУДА ГИГИЕНИЧЕСКИМ НОРМАТИВАМ" />
            </Card>
        </>
    );
};
