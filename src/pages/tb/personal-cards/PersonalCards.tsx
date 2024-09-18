import { Box, Card, Icon, Table, Typography } from '@/components';
import { useGetPersonalCardsQuery } from '@/lib/services';
<<<<<<< HEAD
=======
import { useAppStore } from '@/store';
>>>>>>> 953d1b2b8c6445fbd01fa3acb96c8aaa225495e0
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
import { columns } from './components/constants';

export const PersonalCards = () => {
<<<<<<< HEAD
    const { data, isLoading } = useGetPersonalCardsQuery();
=======
    const { search } = useAppStore();
    const { data, isLoading } = useGetPersonalCardsQuery(search);
>>>>>>> 953d1b2b8c6445fbd01fa3acb96c8aaa225495e0
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
<<<<<<< HEAD
                <Table scroll={{ x: true }} columns={columns} dataSource={data || []} titleTable="Ишчилар шахсий карталари" loading={!!isLoading} />
=======
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
>>>>>>> 953d1b2b8c6445fbd01fa3acb96c8aaa225495e0
            </Card>
        </Fragment>
    );
};
