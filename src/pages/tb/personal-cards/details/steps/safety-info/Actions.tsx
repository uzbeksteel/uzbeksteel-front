import { Icon } from '@/components';
import { useNavigate } from 'react-router-dom';

export const Actions = ({ id }: { id: string }) => {
    const navigate = useNavigate();
    return (
        <Icon
            size="small"
            btn
            onClick={() => {
                navigate(`edit/${id}?type=edit`);
            }}
            name="Edit"
        />
    );
};
