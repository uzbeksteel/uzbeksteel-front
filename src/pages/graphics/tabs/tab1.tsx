import { Calendar } from '@/components';
import { history } from '@/lib/utils';

export const Tab1 = () => {
    return (
        <div>
            <Calendar onChange={() => history.push(`/graphics/:1`)} />
        </div>
    );
};
