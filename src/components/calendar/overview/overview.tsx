import dayjs, { Dayjs } from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import { Content } from './content';
import { Box, Typography } from '@/components';
import { modalStoreOutside } from '@/store';
import { modalIds } from '../constants';
import { dictionary } from '@/constants';

dayjs.extend(updateLocale);

dayjs.updateLocale('en', {
    weekdays: ['Якшанба', 'Душанба', 'Сешанба', 'Чоршанба', 'Пайшанба', 'Жума', 'Шанба'],
});
export const Overview = (date: Dayjs) => {
    modalStoreOutside.openModal({
        id: modalIds.overview,
        content: <Content />,
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
        width: '700px',
        okButtonProps: { style: { display: 'none' } },
        cancelText: dictionary.cancel,
    });
};
