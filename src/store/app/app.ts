import { COLLAPSED, THEME, getLocalStorage, history, setLocalStorage } from '@/lib/utils';
import { ETheme, IAppStore } from '@/types/app';
import { create } from 'zustand';
import { createSelectors } from '../createSelectors';

const initialState = {
    theme: getLocalStorage(THEME) || ETheme.LIGHT,
    isModal: false,
    isDrawer: false,
    search: '',
    action: history.action,
    imageId: '',
    fileList: [],
    extraFileList: [],
    location: history.location,
    collapsed: getLocalStorage(COLLAPSED) ?? false,
    previewImage: '',
    previewTitle: '',
    extraImageId: '',
};

const useAppBase = create<IAppStore>()((set) => ({
    ...initialState,
    setTheme: (theme) =>
        set((state) => {
            setLocalStorage(THEME, theme);

            return {
                ...state,
                theme,
            };
        }),
    setExtraFileList: (extraFileList) => set({ extraFileList }),
    setSearch: (search) => set(() => ({ search })),
    setImageId: (imageId) => set(() => ({ imageId })),
    setExtraImageId: (extraImageId) => set({ extraImageId }),
    setHistory: ({ action, location }) => set(() => ({ action, location })),
    setIsModal: (isModal) => set(() => ({ isModal })),
    setIsDrawer: (isDrawer) => set(() => ({ isDrawer })),
    setFileList: (fileList) => set(() => ({ fileList })),
    setCollapsed: (collapsed) =>
        set((state) => {
            setLocalStorage(COLLAPSED, collapsed);
            return { ...state, collapsed };
        }),
    setPreviewImage: (previewImage) => set(() => ({ previewImage })),
    setPreviewTitle: (previewTitle) => set(() => ({ previewTitle })),
}));

export const useAppStore = createSelectors(useAppBase);
