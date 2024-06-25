import { ReactNode } from 'react';
import { AntdCard } from './styles';
export const Card = ({ children, title }: { children: ReactNode; title?: string }) => <AntdCard title={title}>{children}</AntdCard>;
