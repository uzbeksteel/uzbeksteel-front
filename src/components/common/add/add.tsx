import { Box, Icon } from '@/components';
import { dictionary } from '@/constants';
import { useResponsive } from '@/lib/hooks';
import { TAddProps } from '@/types/components';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

export const Add = ({ path, onClick }: TAddProps) => {
    const { isTablet } = useResponsive();
    const AddBtn = (
        <Box as={Button} type="primary" icon={<Icon name="PlusSquare" />} onClick={onClick} $align="center" $justify="center">
            {isTablet && dictionary.add}
        </Box>
    );

    return <>{path ? <Link to={path}>{AddBtn}</Link> : AddBtn}</>;
};
