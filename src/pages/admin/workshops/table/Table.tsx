import { Box, Table } from '@/components';
import { getAllWorkshopsQuery } from '@/lib/services';
import { WorkShoptableComplumns } from './constants';

export const WorkshopsTable = () => {
    const { data, isLoading } = getAllWorkshopsQuery();

    return (
        <Box>
            <Table loading={isLoading} titleTable="Цехлар рўйхати" columns={WorkShoptableComplumns} dataSource={data} />
        </Box>
    );
};
