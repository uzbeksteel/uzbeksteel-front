import { requestForToken } from '@/lib/config/firebase';
import { useSocket } from '@/store';
import { useAuthStore } from '@/store/auth';
import { useEffect, useState } from 'react';

export const useToken = () => {
    const { token, isInitiated, setIsAuth, setIsInitiated } = useAuthStore();
    const [tokensw, setToken] = useState<string | null>(null);
    const { socket, connectConnect, disConnectSocket } = useSocket();

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

    useEffect(() => {
        connectConnect(token!);

        return () => {
            disConnectSocket();
        };
    }, [connectConnect, disConnectSocket]);

    console.log({ tokensw, socket });

    return { isInitiated };
};
