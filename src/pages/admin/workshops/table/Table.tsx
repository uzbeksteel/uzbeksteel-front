import { Box, Table } from '@/components';
import { WorkShoptableComplumns } from './constants';

export const WorkshopsTable = () => {
    return (
        <Box>
            <Table titleTable="Цехлар рўйхати" columns={WorkShoptableComplumns} />
        </Box>
    );
};
