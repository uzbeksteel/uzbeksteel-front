import { FloatButton } from 'antd';
import { Icon } from '../icon';

export const Float = ({ onClick }: { onClick: () => void }) => {
    return <FloatButton type="primary" icon={<Icon name="Plus" />} onClick={onClick} />;
};
