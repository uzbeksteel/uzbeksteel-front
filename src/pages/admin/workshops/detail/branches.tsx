import { PageHeader } from '@/components';
import { WorkshopBranchesTable } from './tabel/table';

export const WorkshopBranches = () => {
    return (
        <>
            <PageHeader title="Цеҳ бўлимлари" />
            <WorkshopBranchesTable />
        </>
    );
};
