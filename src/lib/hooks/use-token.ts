import { requestForToken } from '@/lib/config/firebase';
import { useAuthStore } from '@/store/auth';
import { useEffect, useState } from 'react';

export const useToken = () => {
    const { token, isInitiated, setIsAuth, setIsInitiated } = useAuthStore();
    const [tokensw, setToken] = useState<string | null>(null);

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
                setToken(fcmToken);
            }
        });
    }, []);

    console.log({ tokensw });

    return { isInitiated };
};
