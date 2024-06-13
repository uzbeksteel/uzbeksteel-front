import { useAppStore } from '@/store';
import { BrowserHistory } from 'history';
import { useLayoutEffect } from 'react';
import { Router, RouterProps } from 'react-router-dom';

type Props = {
    history: BrowserHistory;
} & Partial<RouterProps>;

export const HistoryRouter = ({ history, ...props }: Props) => {
    const { action, location, setHistory } = useAppStore();

    useLayoutEffect(() => history.listen(setHistory), [history]);

    return <Router {...props} location={location} navigationType={action} navigator={history} />;
};
