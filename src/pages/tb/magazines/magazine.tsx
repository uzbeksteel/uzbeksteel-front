import { Box, Card, Icon, Typography } from '@/components';
import { Tabs } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
import { inspectionTabs } from './constants';
import { CheckInspectionModal } from './modals';

export const TbMagazines = () => {
    const navigate = useNavigate();

    return (
        <Fragment>
            <Box $p="20px" $gap="10px" style={{ background: '#FFF' }}>
                <Icon onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} name="ArrowLeft" />
                <Typography type="title" level={3}>
                    Tekshiruvlar
                </Typography>
            </Box>
            <Card>
                <Tabs defaultActiveKey="1" items={inspectionTabs()} />
            </Card>
            <CheckInspectionModal />
        </Fragment>
    );
};
