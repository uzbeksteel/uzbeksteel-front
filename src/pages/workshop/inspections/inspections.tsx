import { Box, Card, Icon, Typography } from '@/components';
import { CONTROL_TYPE } from '@/constants';
import { useMagazineStore } from '@/store';
import { Tabs } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
import { inspectionTabs } from './constants';

export const WorkshopInspections = () => {
    const { setSate } = useMagazineStore();
    const navigate = useNavigate();
    const handleTab = (e: string) => {
        setSate(Number(e) === 1 ? CONTROL_TYPE.FIRST_STAGE : CONTROL_TYPE.SECOND_STAGE);
    };
    return (
        <Fragment>
            <Box $p="20px" $gap="10px" style={{ background: '#FFF' }}>
                <Icon onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} name="ArrowLeft" />
                <Typography type="title" level={3}>
                    Текширувлар
                </Typography>
            </Box>
            <Card>
                <Tabs defaultActiveKey="1" onChange={handleTab} items={inspectionTabs()} />
            </Card>
        </Fragment>
    );
};
