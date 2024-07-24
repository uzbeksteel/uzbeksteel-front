import { PageHeader } from '@/components';
import { EmployeesTable } from './table/EmployeesTable';

export const AdminEmployees = () => {
    return (
        <>
            <PageHeader title={'Ходимлар'} />
            <EmployeesTable />
        </>
    );
};
