import React from 'react';
import { ModalProps } from 'antd';

export type ModalState = {
    modals: Array<{
        id: string;
        isVisible: boolean;
        settings: ModalProps;
        content: React.ReactNode;
    }>;
    openModal: (modal: { id: string; content: React.ReactNode } & Partial<ModalProps>) => void;
    closeModal: (modalId: string) => void;
};
