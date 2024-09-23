import { UserRoles } from '@/constants';
import { getUserStorge } from './storage';

export const checkRole = (role: UserRoles) => {
    const user = getUserStorge();
    return user.role === role;
};
