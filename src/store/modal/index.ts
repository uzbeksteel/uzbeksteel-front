import create from 'zustand';
import { ModalState } from './types.ts';

export const useModalStore = create<ModalState>((set) => ({
    modals: [],
    openModal: (modal) =>
        set((state) => ({
            modals: [...state.modals, { ...modal, isVisible: true, settings: { ...modal } }],
        })),
    closeModal: (modalId) => {
        set((state) => ({
            modals: state.modals.map((modal) => (modal.id === modalId ? { ...modal, isVisible: false } : modal)),
        }));

        setTimeout(() => {
            set((state) => ({
                modals: state.modals.filter((modal) => modal.id !== modalId),
            }));
        }, 300);
    },
}));

export const modalStoreOutside = useModalStore.getState();
