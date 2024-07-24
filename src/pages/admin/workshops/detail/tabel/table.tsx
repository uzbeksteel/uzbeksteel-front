import { Box, Table } from '@/components';
import { getWorkShopBranchesQuery } from '@/lib/services';
import { WorkShopBranchesComplumns } from './constants';

export const WorkshopBranchesTable = () => {
    const { data, isLoading, refetch, isRefetching } = getWorkShopBranchesQuery();

    console.log(data);

    return (
        <Box>
            <Table onRotate={() => refetch({})} scroll={{ x: 1200 }} titleTable="Бўлимлар рўйхати" columns={WorkShopBranchesComplumns} dataSource={data} loading={isLoading || isRefetching} pagination={{ pageSize: 20, position: ['bottomCenter'] }} />
        </Box>
    );
};
