import { Calendar } from '@/components';
import { useGetGraphicsQuery } from '@/lib/services/queries/graphic.ts';
import dayjs, { Dayjs } from 'dayjs';
import { Badge } from 'antd';
import { IGraphic } from '@/types/graphics.ts';
import { useAuthStore } from '@/store';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '@/constants';

export const Tab1 = () => {
    let worshopId;
    const location = useLocation();
    const user = useAuthStore((state) => state.user);
    if (location.pathname.includes(ROUTES.workshop)) {
        worshopId = user?.workshop?.id;
    }
    const { data } = useGetGraphicsQuery(worshopId);

    const formatGraphics = (graphics: IGraphic[]) => {
        return graphics.reduce(
            (acc, graphic) => {
                const date = dayjs(graphic.date).format('YYYY-MM-DD');
                if (!acc[date]) {
                    acc[date] = [];
                }
                acc[date].push(graphic.inspection);
                return acc;
            },
            {} as Record<string, string[]>,
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
                        <Badge status="warning" text={graphic} />
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
