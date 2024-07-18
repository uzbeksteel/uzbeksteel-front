import { Box, Card, Icon, Table, Typography } from '@/components';
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';

export const WorkshopEmployes = () => {
    const navigate = useNavigate();
    return (
        <Fragment>
            <Box $p="20px" $gap="10px" style={{ background: '#FFF' }}>
                <Icon onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} name="ArrowLeft" />
                <Typography type="title" level={3}>
                    Ходимлар
                </Typography>
            </Box>
            <Card>
                <Table scroll={{ x: true }} columns={[]} dataSource={[]} titleTable="Ходимлар рўйхати" />
            </Card>
        </Fragment>
    );
};
