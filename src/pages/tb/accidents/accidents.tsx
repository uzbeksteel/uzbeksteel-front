import { Box, Icon, Typography } from '@/components';
import { useNavigate } from 'react-router-dom';
import { Tabs } from 'antd';
import { getTabs } from './constants';

export const Accidents = () => {
    const navigate = useNavigate();
    return (
        <>
            <Box $p="20px" $gap="10px" style={{ background: '#FFF' }}>
                <Icon onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} name="ArrowLeft" />
                <Typography type="title" level={3}>
                    Бахтсиз ходисалар
                </Typography>
            </Box>
            <Box $p="20px" style={{ background: '#FFF' }}>
                <Tabs style={{ width: '100%' }} defaultActiveKey="1" items={getTabs()} />
            </Box>
        </>
    );
};
