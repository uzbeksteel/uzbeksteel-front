import { Icon } from '@/components';
import { useAppStore } from '@/store';
import { StyledBox } from './style';

export const Collapce = () => {
    const { collapsed, setCollapsed } = useAppStore();

    const handleClick = () => setCollapsed(!collapsed);

    return (
        <StyledBox>
            <Icon name={collapsed ? 'ChevronRight' : 'ChevronLeft'} onClick={handleClick} />
        </StyledBox>
    );
};
