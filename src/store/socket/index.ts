import { BASE_URL } from '@/constants';
import { io } from 'socket.io-client';
import { create } from 'zustand';
import { initializeAuthStore } from '../auth';
import { SocketState } from './types';

const initalStates = {
    socket: null,
};

export const useSocket = create<SocketState>((set) => ({
    ...initalStates,

    connectConnect: (token) => {
        const { logout } = initializeAuthStore();

        const socket = io(BASE_URL, {
            transports: ['websocket'],
            auth: {
                token: `${token}`,
            },
        });

        set({ socket });

        socket.on('connect', () => {
            console.log('Connected to server');
        });

        socket.on('connect_error', (error) => {
            if (error.message === 'Unauthorized') {
                logout();
                console.log('Authentication failed. Please re-authenticate.');
            } else {
                console.log(`Connection error: ${error.message}`);
            }
        });

        socket.on('disconnect', () => {
            console.log('Disconnected from server');
        });
    },
    disConnectSocket: () => {
        set((state) => {
            state.socket?.disconnect();
            return { socket: null };
        });
    },
}));
