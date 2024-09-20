import { useNavigate } from 'react-router-dom';
import { Tabs } from 'antd';
import { Box, Card, Icon, Typography } from '@/components';
import { createOrderTabs } from './constants.tsx';

export const CreateOrder = () => {
    const navigate = useNavigate();
    return (
        <>
            <Box $p="20px" $gap="10px" style={{ background: '#FFF' }}>
                <Icon onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} name="ArrowLeft" />
                <Typography type="title" level={3}>
                    Буйруқ шакли яратиш
                </Typography>
            </Box>
            <Card>
                <Tabs defaultActiveKey="1" items={createOrderTabs()} />
            </Card>
        </>
    );
};
