import { SelectProps } from 'antd';
import { Box } from '@/components';
import { RusFlag, UzbFlag } from '@/assets';

export const selectOptions: SelectProps['options'] = [
    {
        value: 'uz',
        label: (
            <Box $align="center" $gap="10px">
                <img src={UzbFlag} alt="uzbekstan image" /> <span>O&apos;zbek</span>
            </Box>
        ),
    },
    {
        value: 'уз',
        label: (
            <Box $align="center" $gap="10px">
                <img src={UzbFlag} alt="uzbekstan image" /> <span>Ўзбек</span>
            </Box>
        ),
    },
    {
        value: 'ru',
        label: (
            <Box $align="center" $gap="10px">
                <img src={RusFlag} alt="uzbekstan image" /> <span>Русский</span>
            </Box>
        ),
    },
];
