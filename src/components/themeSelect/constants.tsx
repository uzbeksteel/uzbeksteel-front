import { SelectProps } from 'antd';
import { Box, Icon } from '@/components';
import { Theme } from '@/constants';

export const selectOptions: SelectProps['options'] = [
    {
        value: Theme.DARK,
        label: (
            <Box $align="center" $gap="5px">
                <Icon name="Moon" color="#d5680a" /> Dark
            </Box>
        ),
    },
    {
        value: Theme.LIGHT,
        label: (
            <Box $align="center" $gap="5px">
                <Icon name="Sun" color="#d5680a" /> Light
            </Box>
        ),
    },
];
