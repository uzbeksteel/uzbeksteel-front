import { useAuthStore } from '@/store';
import { useEffect } from 'react';
import { useRegisterDeviceMotation } from '../services';

export const useDevice = () => {
    const { fcmToken, token } = useAuthStore();
    const { mutateAsync, isPending } = useRegisterDeviceMotation();
    useEffect(() => {
        if (fcmToken && token) {
            mutateAsync({
                deviceToken: fcmToken,
            });
        }
    }, [fcmToken, token]);
    return { isPending };
};
