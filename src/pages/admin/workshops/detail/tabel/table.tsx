import { Box, Table } from '@/components';
import { getWorkShopBranchesQuery } from '@/lib/services';
import { WorkShopBranchesComplumns } from './constants';

export const WorkshopBranchesTable = () => {
    const { data, isLoading, refetch, isRefetching } = getWorkShopBranchesQuery();

    return (
        <Box style={{ maxWidth: '1200px', width: '100%' }}>
            <Table scroll={{ x: 1700 }} onRotate={() => refetch({})} titleTable="Бўлимлар рўйхати" columns={WorkShopBranchesComplumns} dataSource={data} loading={isLoading || isRefetching} pagination={{ pageSize: 20, position: ['bottomCenter'] }} />
        </Box>
    );
};
