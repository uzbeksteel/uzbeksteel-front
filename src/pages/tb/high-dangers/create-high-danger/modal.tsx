import { modal } from '@/app';
import { Content } from './content';
import { Typography } from '@/components';

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
