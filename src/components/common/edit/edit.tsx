import { Icon } from '@/components';
import { Link } from 'react-router-dom';

export const Edit = ({ id }: { id: number | string }) => (
    <Link to={`${id}`}>
        <Icon btn name="FilePenLine" />
    </Link>
);
