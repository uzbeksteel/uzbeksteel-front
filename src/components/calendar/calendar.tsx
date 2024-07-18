import { Calendar as AntdCalendar, CalendarProps } from 'antd';
import { Header } from './header';
import { FC } from 'react';
import { Dayjs } from 'dayjs';
import { Overview } from './overview';
import { useSearchParams } from 'react-router-dom';

export const Calendar: FC<CalendarProps<Dayjs>> = ({ ...props }) => {
    let [_, setSearchParams] = useSearchParams();
    const onSelect = (dayjs: Dayjs) => {
        setSearchParams({ date: dayjs.toISOString() });
        Overview(dayjs);
    };
    return <AntdCalendar onSelect={onSelect} {...props} headerRender={({ type, onTypeChange, ...config }) => <Header {...config} mode={type} onModeChange={onTypeChange} />} />;
};
