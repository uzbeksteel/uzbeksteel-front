import { api } from '@/lib/services/api';
import { Endpoints } from '@/lib/services';
import { IAccidentAct } from '@/types/accident.ts';
import { useMutation } from '@tanstack/react-query';

const createAccidentAct = async (body: IAccidentAct) => await api.post(Endpoints.CreateAccidentAct, body);

export const createAccidentActMutation = () =>
    useMutation({
        mutationFn: (body: IAccidentAct) => createAccidentAct(body),
        onSuccess: () => {
            history.back();
        },
    });
