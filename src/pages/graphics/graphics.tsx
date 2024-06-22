import { Box, Icon, Typography } from '@/components';
import { Header } from './style';
import { useNavigate } from 'react-router-dom';
import { Tabs } from 'antd';
import { getTabs } from './constants';

export const Graphics = () => {
    const navigate = useNavigate();
    const handleBackBtn = () => {
        navigate(-1);
    };
    return (
        <>
            <Header $direction="column" $p="20px" $gap="15px">
                <Box>
                    <Icon onClick={handleBackBtn} name="ArrowLeft" />
                    <Typography type="title" level={3}>
                        Графиклар
                    </Typography>
                </Box>
                <Tabs defaultActiveKey="1" items={getTabs()} />
            </Header>
        </>
    );
};
