import { useToken } from '@/lib/hooks';
import { history } from '@/lib/utils';
import { Router } from '@/router';
import { HistoryRouterProvider, QueryProvider, ThemeProvider } from './providers';

export const App = () => {
    const { isInitiated } = useToken();

    if (isInitiated) {
        return;
    }

    return (
        <QueryProvider>
            <ThemeProvider>
                <HistoryRouterProvider history={history}>
                    <Router />
                </HistoryRouterProvider>
            </ThemeProvider>
        </QueryProvider>
    );
};
