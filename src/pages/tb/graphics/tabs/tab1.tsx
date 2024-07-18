import { Calendar } from '@/components';
import { useGetGraphicsQuery } from '@/lib/services/queries/graphic.ts';
import dayjs, { Dayjs } from 'dayjs';
import { Badge } from 'antd';
import { IGraphic } from '@/types/graphics.ts';

export const Tab1 = () => {
    const { data } = useGetGraphicsQuery();
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
