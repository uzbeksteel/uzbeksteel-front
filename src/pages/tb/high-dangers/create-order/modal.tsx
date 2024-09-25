import { modal } from '@/app';
import { Typography } from '@/components';
import { Content } from './content';

export const CreateOrder = (highDangerId: string) => {
    modal.confirm({
        title: (
            <Typography type="title" level={5}>
                Буйруқ яратиш
            </Typography>
        ),
        content: <Content highDangerId={highDangerId} />,
        footer: null,
        icon: null,
        width: 572,
    });
};
