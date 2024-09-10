import { Box, Card, Icon, Table, Typography } from '@/components';
import { usePersonalCardQuery } from '@/lib/services';
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
import { columns } from './components/constants';

export const PersonalCards = () => {
    const { data, isLoading } = usePersonalCardQuery();
    const navigate = useNavigate();
    return (
        <Fragment>
            <Box $p="20px" $gap="10px" style={{ background: '#FFF' }}>
                <Icon onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} name="ArrowLeft" />
                <Typography type="title" level={3}>
                    Ишчилар шахсий карталари
                </Typography>
            </Box>
            <Card>
                <Table scroll={{ x: true }} columns={columns} dataSource={data || []} titleTable="Ишчилар шахсий карталари" loading={!!isLoading} />
            </Card>
        </Fragment>
    );
};
