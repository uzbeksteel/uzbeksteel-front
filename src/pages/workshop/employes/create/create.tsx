import { PageHeader } from '@/components';
import { CreateEmployeeForm } from '@/pages/workshop/employes/create/createEmployeeForm.tsx';

export const CreateWorkshopEmployee = () => {
    return (
        <>
            <PageHeader title="Ходим яратиш" />
            <CreateEmployeeForm />
        </>
    );
};
