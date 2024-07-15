import { useAppStore } from '@/store';
import { LayoutSider } from '../../../style';
import { Props } from '../../../type';
import { Collapce } from './collapse';
import { Menu } from './menu';

export const Sider = ({ bg }: Props) => {
    const { collapsed } = useAppStore();

    return (
        <LayoutSider $bg={bg} theme="light" trigger={null} collapsible collapsed={collapsed}>
            <Menu />
            <Collapce />
        </LayoutSider>
    );
};
