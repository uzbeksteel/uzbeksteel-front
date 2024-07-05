import { FC } from 'react';
import { IProfileDisplayProps } from '@/types/components.ts';
import { Box } from '@/components';
import { Avatar } from 'antd';

export const ProfileDisplay: FC<IProfileDisplayProps> = ({ avatar, fullName }) => {
    return (
        <Box $gap="10px" $align="center">
            <Avatar shape="square" src={<img src={avatar} alt="avatar" />} />
            {fullName}
        </Box>
    );
};
