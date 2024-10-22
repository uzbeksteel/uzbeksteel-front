import { create } from 'zustand';
import { ThemeState } from './types';
import { getLocalStorage, setLocalStorage } from '@/lib/utils';

export const useThemeStore = create<ThemeState>((set) => ({
    theme: null,

    setTheme: (theme) => {
        set({ theme });
        setLocalStorage('theme', theme);
    },

    initializeTheme: (browserTheme) => {
        const storedTheme = getLocalStorage('theme') || browserTheme;
        set({ theme: storedTheme });
    },
}));
