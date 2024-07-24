import { Box, Table } from '@/components';
import { getEmployeeQuery } from '@/lib/services';
import { EmployeesComplumns } from './constants';

export const EmployeesTable = () => {
    const { data, isLoading } = getEmployeeQuery();

    return (
        <Box>
            <Table dataSource={data} columns={EmployeesComplumns} loading={isLoading} />
        </Box>
    );
};
