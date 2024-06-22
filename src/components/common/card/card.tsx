import { CardProps } from 'antd/es/card/Card';
import { FC, ReactNode } from 'react';
import { StyledCard } from './style';

export interface CustomCardProps {
    children: ReactNode;
    cardType?: 'block' | 'horizantal';
}

export const Card: FC<CustomCardProps & Partial<CardProps>> = ({ children, cardType, ...props }) => {
    return (
        <StyledCard cardType={cardType} {...props}>
            {children}
        </StyledCard>
    );
};
