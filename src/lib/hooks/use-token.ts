import { useAuthStore } from '@/store/auth';
import { useEffect } from 'react';

export const useToken = () => {
    const { token, isInitiated, setIsAuth, setIsInitiated } = useAuthStore();

    const getAppConfigs = () => {
        if (token) {
            setIsAuth(true);
        }
        setIsInitiated(false);
    };

    useEffect(() => {
        getAppConfigs();
    }, []);

    return { isInitiated };
};
