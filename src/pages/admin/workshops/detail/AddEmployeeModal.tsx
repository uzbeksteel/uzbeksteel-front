import { Box, CustomModal } from '@/components';
import { useAppStore } from '@/store';
import { Input } from 'antd';
import { useState } from 'react';

export const AddEmployeeModal = () => {
    const { isModal, setIsModal } = useAppStore();
    const [input, setInput] = useState<string>();

    const handleClose = () => {
        setIsModal(false);
        setInput('');
    };

    return (
        <CustomModal open={isModal} onClose={handleClose} onCancel={handleClose}>
            <Box $justify="space-evenly" $align="center">
                <Input.Search style={{ width: '90%', borderRadius: '0px !important' }} placeholder="Введите номер вкладки" onChange={(v) => setInput(v.target.value)} value={input} />
            </Box>
        </CustomModal>
    );
};
