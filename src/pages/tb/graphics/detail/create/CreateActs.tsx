import { PageHeader } from '@/components';
import { useSearchParams } from 'react-router-dom';
import { CreateActForm } from './CreateActForm';

export const CreateActs = () => {
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');

    return (
        <>
            <PageHeader title={type == '1' ? 'Далолатномалар яратиш' : type == '2' ? 'Чора-тадбирлар яратиш' : 'Хисоботлар яратиш'} />
            <CreateActForm />
        </>
    );
};
