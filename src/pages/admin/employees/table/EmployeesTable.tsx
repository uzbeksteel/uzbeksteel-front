import { Box, Table } from '@/components';
import { EmployeesComplumns } from './constants';

export const EmployeesTable = () => {
    return (
        <Box>
            <Table columns={EmployeesComplumns} />
        </Box>
    );
};
