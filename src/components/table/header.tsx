import { ROUTES, dictionary } from '@/constants';
import { useDebounce } from '@/lib/hooks';
import type { TIsAdd } from '@/types/components';
import { Flex } from 'antd';
import { Add } from '../common';
import { Icon } from '../icon';
import { AntInput } from './style';

export const Header = ({ isAdd }: TIsAdd) => {
    const { onSearch } = useDebounce();

    return (
        <Flex justify="space-between">
            <AntInput suffix={<Icon name="Search" />} onChange={onSearch} placeholder={dictionary.search} />

            {!isAdd && <Add path={ROUTES.add} />}
        </Flex>
    );
};
