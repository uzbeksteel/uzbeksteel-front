import { api } from '../api';
import { Endpoints } from '../queries';

const findEmergancyBriefing = async (id: string) => {
    const responce = await api.get(`${Endpoints.EmergancyBriefingByPersonal}/${id}`);
    return responce.data;
};




