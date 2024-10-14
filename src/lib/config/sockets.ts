import { io, Socket } from 'socket.io-client';

const SOCKET_URL = 'http://localhost:3000';

let socket: Socket | null = null;

export const connectSocket = (userId: string) => {
    socket = io(SOCKET_URL, {
        query: { userId },
        transports: ['websocket'],
    });

    socket.on('connect', () => {
        console.log('Socket connected: ', socket?.id);
    });

    socket.on('disconnect', () => {
        console.log('Socket disconnected');
    });

    return socket;
};

export const getSocket = (): Socket | null => socket;
