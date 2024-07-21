import { PageHeader } from '@/components';
import { Fragment } from 'react/jsx-runtime';
import { AddEmployeeModal } from '../AddEmployeeModal';
import { CreateWorkshopBranchesForm } from './form';

export const CreateWorkshopBranches = () => {
    return (
        <Fragment>
            <PageHeader title={'Бўлим қўшиш'} />
            <CreateWorkshopBranchesForm />
            <AddEmployeeModal />
        </Fragment>
    );
};
