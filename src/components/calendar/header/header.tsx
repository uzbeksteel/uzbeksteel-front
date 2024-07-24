import { FC } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { Button, Select } from 'antd';
import localeData from 'dayjs/plugin/localeData';
import { Box, Icon } from '@/components';
import { CalendarHeaderProps } from 'antd/lib/calendar/Header';
import { Create } from '@/components/calendar/create';

dayjs.extend(localeData);

export const Header: FC<Pick<CalendarHeaderProps<Dayjs>, 'onChange' | 'value' | 'onModeChange' | 'mode'>> = ({ onChange, value }) => {
    const start = 0;
    const end = 12;
    const monthOptions = [];

    const months = dayjs.monthsShort();

    for (let index = start; index < end; index++) {
        monthOptions.push(
            <Select.Option key={index} value={index} className="month-item">
                {months[index]}
            </Select.Option>,
        );
    }

    const year = value.year();
    const month = value.month();
    const options = [];
    for (let i = year - 10; i < year + 10; i += 1) {
        options.push(
            <Select.Option key={i} value={i} className="year-item">
                {i}
            </Select.Option>,
        );
    }

    return (
        <Box $p="15px 15px 15px 0" $align="center" $justify="space-between">
            <Button style={{ borderRadius: 0 }} type="primary" size="middle" icon={<Icon name="Plus" />} onClick={Create}>
                Создать
            </Button>
            <Box>
                <Select
                    size="middle"
                    className="my-year-select"
                    value={year}
                    onChange={(newYear) => {
                        const now = value.clone().year(newYear);
                        onChange(now, 'year');
                    }}
                >
                    {options}
                </Select>
                <Select
                    size="middle"
                    value={month}
                    onChange={(newMonth) => {
                        const now = value.clone().month(newMonth);
                        onChange(now, 'month');
                    }}
                >
                    {monthOptions}
                </Select>
            </Box>
        </Box>
    );
};
