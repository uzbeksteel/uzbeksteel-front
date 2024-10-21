import { SelectProps } from 'antd';
import { Box, Icon } from '@/components';

export const selectOptions: SelectProps['options'] = [
    {
        value: 'dark',
        label: (
            <Box $align="center" $gap="5px">
                <Icon name="Moon" color="#d5680a" /> Dark
            </Box>
        ),
    },
    {
        value: 'light',
        label: (
            <Box $align="center" $gap="5px">
                <Icon name="Sun" color="#d5680a" /> Light
            </Box>
        ),
    },
];

export const browserTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
