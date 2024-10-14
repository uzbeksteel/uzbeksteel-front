import { PageHeader } from '@/components';
import { Fragment } from 'react/jsx-runtime';
import { CreateWorkshopBranchesForm } from './form';

export const CreateWorkshopBranches = () => {
    return (
        <Fragment>
            <PageHeader title={'Бўлим қўшиш'} />
            <CreateWorkshopBranchesForm />
        </Fragment>
    );
};
