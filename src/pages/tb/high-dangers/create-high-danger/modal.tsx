import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import { modal } from '@/app';
import { Content } from './content';
import { Typography } from '@/components';

dayjs.extend(updateLocale);

dayjs.updateLocale('en', {
    weekdays: ['Якшанба', 'Душанба', 'Сешанба', 'Чоршанба', 'Пайшанба', 'Жума', 'Шанба'],
});
export const CreateHighDanger = (workshopId: string) => {
    modal.confirm({
        title: (
            <Typography type="title" level={5}>
                Хавфи юқори бўлган иш яратиш
            </Typography>
        ),
        content: <Content workshopId={workshopId} />,
        footer: null,
        icon: null,
        width: 572,
    });
};
