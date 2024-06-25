import dayjs, { Dayjs } from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import { modal } from '@/app';
import { dictionary } from '@/constants';
import { Content } from './content';
import { Box, Typography } from '@/components';

dayjs.extend(updateLocale);

dayjs.updateLocale('en', {
    weekdays: ['Якшанба', 'Душанба', 'Сешанба', 'Чоршанба', 'Пайшанба', 'Жума', 'Шанба'],
});
export const Overview = (date: Dayjs) => {
    modal.info({
        title: (
            <Box $align="center" $gap="10px">
                <Typography type="title" level={5}>
                    {date.format('DD.MM.YYYY')}
                </Typography>
                <Typography type="title" level={5} color="#F08D10 !important">
                    {date.format('dddd')}
                </Typography>
            </Box>
        ),
        content: <Content />,
        icon: null,
        okText: dictionary.cancel,
        okButtonProps: { type: 'default' },
        width: 572,
    });
};
