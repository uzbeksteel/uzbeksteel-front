import { Theme } from '@/constants';

export type ThemeState = {
    theme: Theme | null;
    setTheme: (theme: Theme) => void;
    initializeTheme: (browserTheme: Theme) => void;
};
