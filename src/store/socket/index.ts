import { BASE_URL } from '@/constants';
import { addMessage, errorMessage, successMessage } from '@/lib/utils';
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
            successMessage('Connection established');
        });

        socket.on('connect_error', (error) => {
            if (error.message === 'Unauthorized') {
                logout();
                errorMessage('Authentication failed. Please re-authenticate.');
            } else {
                errorMessage(`Connection error: ${error.message}`);
            }
        });

        socket.on('disconnect', () => {
            addMessage('Socket disconnected');
        });
    },
    disConnectSocket: () => {
        set((state) => {
            state.socket?.disconnect();
            return { socket: null };
        });
    },
}));
