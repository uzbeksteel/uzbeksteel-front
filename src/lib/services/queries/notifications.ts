import { IResponse } from '@/types/app';
import { INotificationLogs } from '@/types/notifications';
import { useQuery } from '@tanstack/react-query';
import { Endpoints } from '.';
import { api } from '../api';

const getUserNotifications = async () => api.get<void, IResponse<INotificationLogs[]>>(`${Endpoints.NotificationLogs}/get-user-notifications?filter.status=SENT`);

export const useUserNotificationsQuery = () => {
    return useQuery<IResponse<INotificationLogs[]>>({
        queryKey: [Endpoints.NotificationLogs],
        queryFn: () => getUserNotifications(),
    });
};
