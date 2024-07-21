import { Box, Table } from '@/components';
import { getWorkShopBranchesQuery } from '@/lib/services';
import { WorkShopBranchesComplumns } from './constants';

export const WorkshopBranchesTable = () => {
    const { data, isLoading, refetch, isRefetching } = getWorkShopBranchesQuery();

    return (
        <Box>
            <Table onRotate={() => refetch({})} scroll={{ x: 1200 }} titleTable="Бўлимлар рўйхати" columns={WorkShopBranchesComplumns} dataSource={data} loading={isLoading || isRefetching} />
        </Box>
    );
};
