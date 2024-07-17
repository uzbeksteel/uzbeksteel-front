import { PageHeader } from '@/components';
import { WorkshopsTable } from './table/Table';

export const AdminWorkshops = () => {
    return (
        <>
            <PageHeader title="Цехлар" />
            <WorkshopsTable />
        </>
    );
};
