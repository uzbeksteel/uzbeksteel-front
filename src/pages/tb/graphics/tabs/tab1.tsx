import { Calendar } from '@/components';
import { ROUTES } from '@/constants';
import { useGetGraphicsQuery } from '@/lib/services/queries/graphic.ts';
import { useAuthStore } from '@/store';
import { IGraphic } from '@/types/graphics.ts';
import dayjs, { Dayjs } from 'dayjs';
import { useLocation } from 'react-router-dom';
import { Badge } from 'antd';
import { graphicsDictionary } from '../dictionary.ts';

export const Tab1 = () => {
    let userId;
    const location = useLocation();
    const user = useAuthStore((state) => state.user);
    if (location.pathname.includes(ROUTES.workshop)) {
        userId = user?.id;
    }
    const { data } = useGetGraphicsQuery(userId);

    const formatGraphics = (graphics: IGraphic[]) => {
        return graphics.reduce(
            (acc, graphic) => {
                const date = dayjs(graphic.date).format('YYYY-MM-DD');
                if (!acc[date]) {
                    acc[date] = [];
                }
                acc[date].push(graphic);
                return acc;
            },
            {} as Record<string, IGraphic[]>,
        );
    };

    const graphics = data ? formatGraphics(data) : {};

    const dateCellRender = (value: Dayjs) => {
        const dateString = value.format('YYYY-MM-DD');
        const graphicsForDate = graphics[dateString];

        return graphicsForDate ? (
            <ul>
                {graphicsForDate.map((graphic, index) => (
                    <li key={index}>
                        <Badge
                            status="warning"
                            text={
                                <span>
                                    {graphic.inspection} - <span style={{ fontWeight: 'bold', color: '#595959', fontSize: '11px' }}>{graphicsDictionary.status[graphic.status]}</span>
                                </span>
                            }
                        />
                    </li>
                ))}
            </ul>
        ) : null;
    };
    return (
        <div>
            <Calendar cellRender={dateCellRender} />
        </div>
    );
};
