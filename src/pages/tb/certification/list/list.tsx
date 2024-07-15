import { Box, Icon, Typography } from '@/components';
import { useNavigate } from 'react-router-dom';
import { getTabs } from './constants';
import { Tabs } from 'antd';

export const CertificationList = () => {
    const navigate = useNavigate();

    return (
        <>
            <Box $p="20px" $gap="10px" style={{ background: '#FFF' }}>
                <Icon onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} name="ArrowLeft" />
                <Typography type="title" level={3}>
                    Аттестация
                </Typography>
            </Box>
            <Box $p="20px" style={{ background: '#FFF' }}>
                <Tabs style={{ width: '100%' }} defaultActiveKey="1" items={getTabs()} />
            </Box>
        </>
    );
};
