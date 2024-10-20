import { useAuthStore, useSocket } from '@/store';
import { useEffect } from 'react';

export const useAuthSocket = () => {
    const { socket, connectConnect, disConnectSocket } = useSocket();
    const { token } = useAuthStore();

    useEffect(() => {
        connectConnect(token!);

        return () => {
            disConnectSocket();
        };
    }, [connectConnect, disConnectSocket]);

    return { socket };
};
