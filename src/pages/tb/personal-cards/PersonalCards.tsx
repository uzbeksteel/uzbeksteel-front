import { Box, Card, Icon, Table, Typography } from '@/components';
import { useGetPersonalCardsQuery } from '@/lib/services';
import { useAppStore } from '@/store';
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
import { columns } from './components/constants';

export const PersonalCards = () => {
    const { search } = useAppStore();
    const { data, isLoading } = useGetPersonalCardsQuery(search);
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
                <Table
                    scroll={{ x: true }}
                    columns={columns}
                    dataSource={data?.data || []}
                    titleTable="Ишчилар шахсий карталари"
                    loading={!!isLoading}
                    pagination={{
                        position: ['bottomCenter'],
                        current: data?.meta.currentPage,
                        pageSize: data?.meta.itemsPerPage,
                        total: data?.meta.totalItems,
                    }}
                />
            </Card>
        </Fragment>
    );
};
