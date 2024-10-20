import { Socket } from 'socket.io-client';

export interface SocketState {
    socket: Socket | null;
    connectConnect: (token?: string) => void;
    disConnectSocket: () => void;
}
