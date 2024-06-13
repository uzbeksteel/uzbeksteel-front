import { TIconProps } from '@/types/components';
import { Button } from 'antd';
import * as LucideIcons from 'lucide-react';
import { Box } from '../box';

export const Icon = ({ btn, name, ...props }: TIconProps) => {
    const LucideIcon = LucideIcons[name as keyof typeof LucideIcons] as LucideIcons.LucideIcon;

    return (
        <Box as={btn ? Button : 'div'} {...props}>
            <Box as={LucideIcon} $align="center" $justify="center" $height="var(--full)" $width="var(--full)" style={{ color: props.color }} />
        </Box>
    );
};
