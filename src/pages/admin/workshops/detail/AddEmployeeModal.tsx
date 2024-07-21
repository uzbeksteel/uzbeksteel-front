import { Box, CustomModal, Icon } from '@/components';
import { AntInput } from '@/components/table/style';
import { useAppStore } from '@/store';
import { useState } from 'react';

export const AddEmployeeModal = () => {
    const { isModal, setIsModal } = useAppStore();
    const [input, setInput] = useState<string>();
    const [Loading, setLoading] = useState<boolean>();

    const handleClose = () => {
        setIsModal(false);
        setInput('');
    };

    const handleClick = () => {
        setInput(input);
    };

    return (
        <CustomModal open={isModal} onClose={handleClose} onCancel={handleClose}>
            <Box $justify="space-evenly" $align="center">
                <AntInput style={{ width: '70%', margin: '10px' }} placeholder="Введите номер вкладки" onChange={(v) => setInput(v.target.value)} value={input} />
                <Icon name="Search" btn onClick={handleClick} loading={Loading} />
            </Box>
        </CustomModal>
    );
};
