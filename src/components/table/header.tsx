import { ROUTES, dictionary } from '@/constants';
import { useDebounce, useResponsive } from '@/lib/hooks';
import type { TIsAdd } from '@/types/components';
import { Flex } from 'antd';
import { Box, Typography } from '..';
import { Add } from '../common';
import { Icon } from '../icon';
import { AntInput } from './style';

export const Header = ({ isAdd, titleTable }: TIsAdd) => {
    const { onSearch } = useDebounce();
    const { isTablet } = useResponsive();

    return (
        <Flex justify="space-between" align="center">
            <Typography type="text" level={1} marginBottom="0px" fontWeight="600">
                {titleTable}
            </Typography>
            <Box $align="center" $gap="8px">
                <AntInput suffix={<Icon name="Search" />} onChange={onSearch} placeholder={dictionary.search} />
                {isTablet && <Icon name="RotateCcw" />}
                {isTablet && <Icon name="Settings" />}
                {isTablet && <Icon name="Expand" />}
                {!isAdd && <Add path={ROUTES.add} />}
            </Box>
        </Flex>
    );
};
