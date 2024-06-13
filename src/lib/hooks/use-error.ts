import type { IAxiosError, IStockError } from '@/types/error';
import axios, { AxiosError } from 'axios';

export const useError = () => {
    function axiosErrorHandler<T>(callback: (err: IAxiosError<T> | IStockError<T>) => void) {
        return (error: Error | AxiosError<T>) => {
            if (axios.isAxiosError(error)) {
                callback({
                    error: error,
                    type: 'axios-error',
                });
            } else {
                callback({
                    error: error,
                    type: 'stock-error',
                });
            }
        };
    }

    return { onError: axiosErrorHandler };
};
