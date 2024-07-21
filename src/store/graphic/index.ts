import { create } from 'zustand';
import { IGraphicStore } from './types';
import { createSelectors } from '@/store/createSelectors.ts';

const store = create<IGraphicStore>()((set) => ({
    createFormInstance: null,
    updateGraphicCredentials: null,
    updateFormInstance: null,
    setCreateFormInstance: (createFormInstance) => set({ createFormInstance }),
    setUpdateGraphicCredentials: (updateGraphicCredentials) => set({ updateGraphicCredentials }),
    setUpdateFormInstance: (updateFormInstance) => set({ updateFormInstance }),
}));

export const useGraphicStore = createSelectors(store);
