import { Box, Card, Icon, Table, Typography } from '@/components';
import { UserRoles } from '@/constants';
import { useGetPersonalCardsQuery } from '@/lib/services';
import { checkRole } from '@/lib/utils';
import { useAppStore } from '@/store';
import { useNavigate, useParams } from 'react-router-dom';
import { Fragment } from 'react/jsx-runtime';
import { columns } from './components/constants';

export const PersonalCards = () => {
    const { search } = useAppStore();
    const { id } = useParams();
    const { data, isLoading } = useGetPersonalCardsQuery(search, id);
    const navigate = useNavigate();

    const isPermission = checkRole(UserRoles.DIRECTOR);

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
                    isAdd={!isPermission}
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
