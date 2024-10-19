import { Box, Table } from '@/components';
import { getAllWorkshopsQuery } from '@/lib/services';
import { WorkShoptableComplumns } from './constants';

export const InspectionWorkshop = () => {
    const { data, isLoading, isFetching } = getAllWorkshopsQuery();

    return (
        <Box $p="10px">
            <Table isAdd loading={isLoading || isFetching} titleTable="Tsehlar ro'yxati" columns={WorkShoptableComplumns} dataSource={data} />
        </Box>
    );
};
