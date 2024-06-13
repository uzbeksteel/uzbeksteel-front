import { useAppStore } from '@/store';
import { Modal as AntdModal } from 'antd';
import { Image } from './style';

export const Modal = () => {
    const { isModal, previewImage, previewTitle, setIsModal } = useAppStore();

    const handleCancel = () => setIsModal(false);

    return (
        <AntdModal open={isModal} title={previewTitle} footer={null} onCancel={handleCancel}>
            <Image src={previewImage} alt={previewTitle} />
        </AntdModal>
    );
};
