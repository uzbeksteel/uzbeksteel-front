import { Box, Icon, Typography } from '@/components';
import { useGetGraphicsQuery } from '@/lib/services/queries/graphic.ts';
import { Tabs } from 'antd';
import { useNavigate } from 'react-router-dom';
import { getTabs } from './constants';
import { Header } from './style';

export const Graphics = () => {
    const navigate = useNavigate();
    const { data } = useGetGraphicsQuery();
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
