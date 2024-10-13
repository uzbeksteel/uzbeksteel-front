import { Box, Card, Icon, Typography } from '@/components';
import { getWorkShopBranchesQuery } from '@/lib/services';
import { Tabs } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
import { inspectionTabs } from './constants';

export const TbMagazines = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data } = getWorkShopBranchesQuery(id);
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
        </Fragment>
    );
};
