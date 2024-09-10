import { PageHeader } from '@/components';
import { Fragment } from 'react/jsx-runtime';
import { WorkshopBranchesTable } from './tabel/table';

export const WorkshopBrnches = () => {
    return (
        <Fragment>
            <PageHeader title="Цеҳ бўлимлари" />
            <WorkshopBranchesTable />
        </Fragment>
    );
};
