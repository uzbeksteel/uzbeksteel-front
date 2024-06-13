import { AntMenu } from '@/layout/style';
import { usePathname } from '@/lib/hooks';
import { history } from '@/lib/utils';
import { MenuProps } from 'antd';
import { useMemo } from 'react';
import { menuItems } from './constants';

export const Menu = () => {
    const { decodedPathname } = usePathname();

    const selectedMenuOpenKey = useMemo(() => menuItems.find((item) => decodedPathname.includes(item.key))?.key || menuItems[0].key, [decodedPathname, menuItems]);

    const handleClick: MenuProps['onClick'] = ({ key, domEvent }) => {
        domEvent.preventDefault();
        domEvent.stopPropagation();
        history.push(key);
    };

    return <AntMenu mode="inline" theme="light" selectedKeys={[selectedMenuOpenKey]} openKeys={[selectedMenuOpenKey]} items={menuItems} onClick={handleClick} />;
};
