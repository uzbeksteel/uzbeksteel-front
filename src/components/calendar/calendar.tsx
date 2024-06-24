import { Calendar as AntdCalendar, CalendarProps } from 'antd';
import { Header } from './header';
import { FC } from 'react';
import { Dayjs } from 'dayjs';

export const Calendar: FC<CalendarProps<Dayjs>> = ({ ...props }) => {
    return <AntdCalendar {...props} headerRender={({ type, onTypeChange, ...config }) => <Header {...config} mode={type} onModeChange={onTypeChange} />} />;
};
