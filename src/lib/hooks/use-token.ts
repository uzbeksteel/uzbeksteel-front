import { requestForToken } from '@/lib/config/firebase';
import { useAuthStore } from '@/store/auth';
import { useEffect } from 'react';

export const useToken = () => {
    const { token, isInitiated, setIsAuth, setFcmToken, setIsInitiated } = useAuthStore();

    const getAppConfigs = () => {
        if (token) {
            setIsAuth(true);
        }
        setIsInitiated(false);
    };

    useEffect(() => {
        getAppConfigs();
        requestForToken().then((fcmToken) => {
            if (fcmToken) {
                setFcmToken(fcmToken);
            }
        });
    }, []);

    return { isInitiated };
};
