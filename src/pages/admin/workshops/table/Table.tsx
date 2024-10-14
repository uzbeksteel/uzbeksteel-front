import { Box, Table } from '@/components';
import { getAllWorkshopsQuery } from '@/lib/services';
import { WorkShopTableColumns } from './constants';

export const WorkshopsTable = () => {
    const { data, isLoading, isFetching } = getAllWorkshopsQuery();

    return (
        <Box>
            <Table loading={isLoading || isFetching} titleTable="Цехлар рўйхати" columns={WorkShopTableColumns} dataSource={data} />
        </Box>
    );
};
