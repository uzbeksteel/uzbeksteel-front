import { CustomModal } from '@/components';
import { useAppStore } from '@/store';

export const CreateModal = () => {
    const { isModal, setIsModal } = useAppStore();
    return (
        <CustomModal
            open={isModal}
            onCancel={() => {
                setIsModal(false);
            }}
        >
            salom
        </CustomModal>
    );
};
