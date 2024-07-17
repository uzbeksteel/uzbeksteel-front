import { create } from 'zustand';
import { IGraphicStore } from './types';
import { createSelectors } from '@/store/createSelectors.ts';

const store = create<IGraphicStore>()((set) => ({
    createFormInstance: null,
    setCreateFormInstance: (createFormInstance) => set({ createFormInstance }),
}));

export const useGraphicStore = createSelectors(store);
