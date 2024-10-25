import { useAuthStore } from '@/store';
import { useEffect } from 'react';
import { useRegisterDeviceMotation } from '../services';

export const useDevice = () => {
    const { fcmToken } = useAuthStore();
    const { mutateAsync, isPending } = useRegisterDeviceMotation();
    useEffect(() => {
        if (fcmToken) {
            mutateAsync({
                deviceToken: fcmToken,
            });
        }
    }, [fcmToken]);
    return { isPending };
};
