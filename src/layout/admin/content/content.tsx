import { Outlet } from 'react-router-dom';
import { LayoutContent } from '../../style';
import { Props } from '../../type';

export const Content = ({ bg }: Props) => (
    <LayoutContent $bg={bg}>
        <Outlet />
    </LayoutContent>
);
