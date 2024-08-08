import { dictionary, ROUTES } from '@/constants';
import { useDebounce, useResponsive } from '@/lib/hooks';
import type { TIsAdd } from '@/types/components';
import { Flex } from 'antd';
import { useSearchParams } from 'react-router-dom';
import { Box, Typography } from '..';
import { Add } from '../common';
import { Icon } from '../icon';
import { AntInput } from './style';

export const Header = ({ isAdd, titleTable, onClick, onRotate }: TIsAdd) => {
    const { onSearch } = useDebounce();
    const { isTablet } = useResponsive();

    const [searchParams] = useSearchParams();
    const type = searchParams.get('type');
    const typeFilter = type === '1' ? `?type=1` : type === '2' ? `?type=2` : type === '3' ? `?type=3` : '';

    return (
        <Flex justify="space-between" align="center">
            <Typography type="text" level={1} marginBottom="0px" fontWeight="600">
                {titleTable}
            </Typography>
            <Box $align="center" $gap="8px">
                <AntInput suffix={<Icon name="Search" />} onChange={onSearch} placeholder={dictionary.search} />
                {isTablet && <Icon name="RotateCcw" onClick={onRotate} />}
                {isTablet && <Icon name="Settings" />}
                {isTablet && <Icon name="Expand" />}
                {!isAdd && <Add path={!onClick ? ROUTES.add + typeFilter : undefined} onClick={onClick} />}
            </Box>
        </Flex>
    );
};
