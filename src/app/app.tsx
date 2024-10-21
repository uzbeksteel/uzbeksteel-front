import { Modal } from '@/components';
import { useToken } from '@/lib/hooks';
import { history } from '@/lib/utils';
import { Router } from '@/router';
import { HistoryRouterProvider, QueryProvider, ThemeProvider } from './providers';
import { Suspense } from 'react';

export const App = () => {
    const { isInitiated } = useToken();

    if (isInitiated) {
        return;
    }

    return (
        <QueryProvider>
            <HistoryRouterProvider history={history}>
                <ThemeProvider>
                    <Suspense>
                        <Router />
                    </Suspense>
                    <Modal />
                </ThemeProvider>
            </HistoryRouterProvider>
        </QueryProvider>
    );
};
