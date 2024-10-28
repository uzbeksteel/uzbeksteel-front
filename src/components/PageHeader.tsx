import { FC, ReactNode } from 'react';
import { Box, Card, Icon, Typography } from '.';
import { history } from '@/lib/utils';

interface PageHeaderProps {
    title: string;
    tabs?: ReactNode;
}

export const PageHeader: FC<PageHeaderProps> = ({ title, tabs }) => {
    return (
        <Card>
            <Box $direction="column" $gap="20px">
                <Box $gap="20px">
                    <Icon name="ArrowLeft" onClick={() => history.back()} style={{ cursor: 'pointer' }} />
                    <Typography type="title" level={4}>
                        {title}
                    </Typography>
                </Box>
                {tabs && tabs}
            </Box>
        </Card>
    );
};
