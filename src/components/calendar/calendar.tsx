import { Calendar as AntdCalendar, CalendarProps } from 'antd';
import { Header } from './header';
import { FC } from 'react';
import { Dayjs } from 'dayjs';
import { useSearchParams } from 'react-router-dom';
import { Overview } from './overview';
import styled from 'styled-components';

const StyledCalendar = styled(AntdCalendar)`
    .ant-picker-calendar-date-content {
        overflow: hidden !important;
    }
`;

export const Calendar: FC<CalendarProps<Dayjs>> = ({ ...props }) => {
    const [_, setSearchParams] = useSearchParams();
    const onSelect = (dayjs: Dayjs) => {
        setSearchParams({ date: dayjs.toISOString() });
        Overview(dayjs);
    };
    return <StyledCalendar onSelect={onSelect} {...props} headerRender={({ type, onTypeChange, ...config }) => <Header {...config} mode={type} onModeChange={onTypeChange} />} />;
};
