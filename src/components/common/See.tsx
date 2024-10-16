import { Link } from 'react-router-dom';
import { Icon } from '..';

export const See = ({ id }: { id?: number | string }) =>
    !id ? (
        <Icon btn name="Eye" />
    ) : (
        <Link to={`${id}`}>
            <Icon btn name="Eye" />
        </Link>
    );
