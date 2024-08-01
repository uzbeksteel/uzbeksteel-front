import { CardProps } from 'antd/lib';
import { ReactNode } from 'react';
import { AntdCard } from './styles';
export const Card = ({ children, title, ...props }: { children: ReactNode; title?: string } & CardProps) => (
    <AntdCard title={title} {...props}>
        {children}
    </AntdCard>
);
