import { Modal as AntdModal, ModalProps } from 'antd';
import { useModalStore } from '@/store';
import styled from 'styled-components';
import { MouseEvent } from 'react';

const StyledModal = styled(AntdModal)<ModalProps>`
    .ant-modal-content {
        border-radius: 0 !important;
    }
    .ant-btn {
        border-radius: 0 !important;
    }
`;

export const Modal = () => {
    const { modals, closeModal } = useModalStore();

    const handleOk = (modalId: string) => (e: MouseEvent<HTMLButtonElement>) => {
        const modal = modals.find((m) => m.id === modalId);
        if (modal && modal.settings.onOk) {
            modal.settings.onOk(e);
        }
        closeModal(modalId);
    };

    const handleCancel = (modalId: string) => (e: MouseEvent<HTMLButtonElement>) => {
        const modal = modals.find((m) => m.id === modalId);
        if (modal && modal.settings.onCancel) {
            modal.settings.onCancel(e);
        }
        closeModal(modalId);
    };

    return (
        <>
            {modals.map((modal) => (
                <StyledModal key={modal.id} open={modal.isVisible} onCancel={handleCancel(modal.id)} onOk={handleOk(modal.id)} title={modal.settings.title || ''} width={modal.settings.width || 520} {...modal.settings}>
                    {modal.content} {}
                </StyledModal>
            ))}
        </>
    );
};
