import { addMessage } from '@/lib/utils';
import { MutationCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { PropsWithChildren } from 'react';

const axiosErrorHandler = (error: Error | AxiosError<{ message: string }>) => {
    if (axios.isAxiosError(error)) {
        addMessage(error.message);
    } else {
        addMessage(error.message);
    }
};

const queryClient = new QueryClient({
    mutationCache: new MutationCache({
        onError: axiosErrorHandler,
    }),
    defaultOptions: {
        queries: {
            refetchIntervalInBackground: false,
            refetchOnWindowFocus: false,
            gcTime: 10_000,
            refetchInterval: 30000,
        },
    },
});

export const Query = ({ children }: PropsWithChildren) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
