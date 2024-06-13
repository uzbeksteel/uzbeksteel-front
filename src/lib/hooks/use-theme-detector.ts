import { useAppStore } from '@/store';
import { ETheme } from '@/types/app';
import { useEffect, useState } from 'react';

export const useThemeDetector = () => {
    const { theme } = useAppStore();
    const getCurrentTheme = (): boolean => window.matchMedia('(prefers-color-scheme: dark)').matches;

    const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());

    const mqListener = (e: MediaQueryListEvent): void => {
        setIsDarkTheme(e.matches);
    };

    useEffect(() => {
        const darkThemeMq: MediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');

        darkThemeMq.addEventListener('change', mqListener);

        return () => darkThemeMq.removeEventListener('change', mqListener);
    }, []);

    if (theme === ETheme.SYSTEM) {
        return isDarkTheme ? ETheme.DARK : ETheme.LIGHT;
    }

    return theme;
};
