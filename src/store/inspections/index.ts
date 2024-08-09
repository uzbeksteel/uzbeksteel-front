import { CONTROL_TYPE } from '@/constants';
import { createSelectors } from '@/store/createSelectors.ts';
import { create } from 'zustand';
import { IMagazineStore } from './types';

const store = create<IMagazineStore>()((set) => ({
    stage: CONTROL_TYPE.FIRST_STAGE,
    setSate: (stage: CONTROL_TYPE) => set({ stage }),
}));

export const useMagazineStore = createSelectors(store);
