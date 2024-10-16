import { Box, Table } from '@/components';
import { getWorkShopBranchesQuery } from '@/lib/services';
import { WorkShopBranchesColumns } from './constants';
import { useParams } from 'react-router-dom';

export const WorkshopBranchesTable = () => {
    const { id } = useParams();
    const { data, isLoading, refetch, isRefetching } = getWorkShopBranchesQuery(id);
    return (
        <Box>
            <Table scroll={{ x: true }} onRotate={() => refetch({})} columns={WorkShopBranchesColumns} dataSource={data} loading={isLoading || isRefetching} pagination={{ pageSize: 20, position: ['bottomCenter'] }} />
        </Box>
    );
};
