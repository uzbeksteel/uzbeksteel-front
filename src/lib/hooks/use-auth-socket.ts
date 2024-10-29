import { useAuthStore, useSocket } from '@/store';
import { useEffect } from 'react';

export const useAuthSocket = () => {
    const { socket, connectConnect, disConnectSocket } = useSocket();
    const { token } = useAuthStore();

    useEffect(() => {
        if (token) {
            connectConnect(token!);
        }

        return () => {
            disConnectSocket();
        };
    }, [connectConnect, disConnectSocket, token]);

    return { socket };
};
