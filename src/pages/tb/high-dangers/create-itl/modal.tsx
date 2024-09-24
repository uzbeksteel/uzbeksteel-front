import { modal } from '@/app';
import { Typography } from '@/components';
import { Content } from './content';

export const CreateItl = (highDangerId: string) => {
    modal.confirm({
        title: (
            <Typography type="title" level={5}>
                ИТЛ яратиш
            </Typography>
        ),
        content: <Content highDangerId={highDangerId} />,
        footer: null,
        icon: null,
        width: 572,
    });
};
