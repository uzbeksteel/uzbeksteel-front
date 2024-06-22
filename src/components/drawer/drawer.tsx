import { useAppStore } from '@/store';
import { ReactNode } from 'react';
import { PLACEMENT } from './enum';
import { AntdDrawer } from './style';
export interface IProps {
    children: ReactNode;
    title?: string;
    placement?: PLACEMENT;
}
export const Drawer = ({ children, title, placement = PLACEMENT.right }: IProps) => {
    const { isDrawer, setIsDrawer } = useAppStore();
    const handleCancel = () => setIsDrawer(false);

    return (
        <AntdDrawer size="large" title={title} open={isDrawer} onClose={handleCancel} closable destroyOnClose placement={placement}>
            {children}
        </AntdDrawer>
    );
};
